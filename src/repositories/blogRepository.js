import { db } from '../firebase/config.js';
import Blog from '../models/Blog.js';

class BlogRepository {
    // Fetch all blogs from Firestore with the new model structure
    static async getAllBlogs() {
        console.log('BlogRepository.getAllBlogs() called');
        try {
            console.log('Attempting to fetch blogs from Firestore...');
            console.log('Firestore db object:', db);

            const querySnapshot = await db.collection("blogs")
                .orderBy("createdAt", "desc")
                .get();

            console.log('Query snapshot received, docs count:', querySnapshot.size);

            const blogs = [];
            querySnapshot.forEach((doc) => {
                console.log('Processing document:', doc.id);
                const data = doc.data();
                console.log('Document data:', data);

                // Create proper Blog instances
                const blog = new Blog(
                    doc.id,
                    data.title,
                    '', // description is not in the main collection
                    data.excerpt,
                    data.tags || [], [data.thumbnail || ""], // Use images directly from data if available
                    data.createdAt ? data.createdAt.toDate() : new Date(),
                    data.youtubeVideoId || ''
                );

                blogs.push(blog);
            });

            console.log('All blogs processed, count:', blogs.length);
            return blogs;
        } catch (error) {
            console.error("Error fetching blogs: ", error);
            throw error;
        }
    }

    // Fetch a single blog by ID with data from both main collection and content/details subcollection
    static async getBlogById(blogId) {
        console.log('BlogRepository.getBlogById() called with id:', blogId);
        try {
            console.log('Attempting to fetch blog from Firestore with id:', blogId);

            // Fetch main blog document
            const doc = await db.collection("blogs").doc(blogId).get();
            console.log('Document fetch result, exists:', doc.exists);

            if (!doc.exists) {
                console.log('Blog not found with id:', blogId);
                throw new Error("Blog not found");
            }

            const mainData = doc.data();
            console.log('Main document data:', mainData);

            // Fetch content/details subcollection
            const contentSnapshot = await db.collection("blogs").doc(blogId).collection("content").doc("detail").get();
            let contentData = {};

            if (contentSnapshot.exists) {
                contentData = contentSnapshot.data();
                console.log('Content subcollection data:', contentData);
            } else {
                console.log('Content subcollection not found for blog id:', blogId);
            }

            // Combine data from main collection and subcollection
            const blogData = {
                id: doc.id,
                title: mainData.title,
                excerpt: mainData.excerpt,
                description: contentData.description || mainData.description || '',
                tags: mainData.tags || [],
                images: contentData.images || mainData.images || [],
                createdAt: mainData.createdAt ? mainData.createdAt.toDate() : new Date(),
                youtubeVideoId: contentData.youtubeVideoId || mainData.youtubeVideoId || ''
            };

            return new Blog(
                blogData.id,
                blogData.title,
                blogData.description,
                blogData.excerpt,
                blogData.tags,
                blogData.images,
                blogData.createdAt,
                blogData.youtubeVideoId
            );
        } catch (error) {
            console.error("Error fetching blog: ", error);
            throw error;
        }
    }
}

export default BlogRepository;