import { db } from '../firebase/config.js';
import Blog from '../models/Blog.js';

class BlogRepository {
    // Fetch all blogs from Firestore
    static async getAllBlogs() {
        console.log('BlogRepository.getAllBlogs() called');
        try {
            console.log('Attempting to fetch blogs from Firestore...');
            console.log('Firestore db object:', db);

            const querySnapshot = await db.collection("blogs")
                // .orderBy("createdAt", "desc")
                .get();

            console.log('Query snapshot received, docs count:', querySnapshot.size);

            const blogs = [];
            querySnapshot.forEach((doc) => {
                console.log('Processing document:', doc.id);
                const data = doc.data();
                console.log('Document data:', data);
                blogs.push(new Blog(
                    doc.id,
                    data.title,
                    data.description,
                    data.excerpt,
                    data.tags,
                    data.images,
                    data.createdAt.toDate(),
                    data.youtubeVideoId || ''
                ));
            });

            console.log('All blogs processed, count:', blogs.length);
            return blogs;
        } catch (error) {
            console.error("Error fetching blogs: ", error);
            throw error;
        }
    }

    // Fetch a single blog by ID
    static async getBlogById(blogId) {
        console.log('BlogRepository.getBlogById() called with id:', blogId);
        try {
            console.log('Attempting to fetch blog from Firestore with id:', blogId);
            const doc = await db.collection("blogs").doc(blogId).get();

            console.log('Document fetch result, exists:', doc.exists);

            if (doc.exists) {
                const data = doc.data();
                console.log('Document data:', data);
                return new Blog(
                    doc.id,
                    data.title,
                    data.description,
                    data.excerpt,
                    data.tags,
                    data.images,
                    data.createdAt.toDate(),
                    data.youtubeVideoId || ''
                );
            } else {
                console.log('Blog not found with id:', blogId);
                throw new Error("Blog not found");
            }
        } catch (error) {
            console.error("Error fetching blog: ", error);
            throw error;
        }
    }
}

export default BlogRepository;