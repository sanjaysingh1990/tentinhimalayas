// Test version of blog repository that uses dummy data
import Blog from '../models/Blog.js';
import BlogTestData from './blogTestData.js';

class BlogRepositoryTest {
    // Fetch all blogs (test version with dummy data)
    static async getAllBlogs() {
        console.log('BlogRepositoryTest.getAllBlogs() called');
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 500));

        // Return sample blogs
        const blogs = BlogTestData.getSampleBlogs();
        console.log('BlogRepositoryTest: Sample blogs returned:', blogs);
        return blogs;
    }

    // Fetch a single blog by ID (test version with dummy data)
    static async getBlogById(blogId) {
        console.log('BlogRepositoryTest.getBlogById() called with id:', blogId);
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 300));

        // Find blog by ID
        const blogs = BlogTestData.getSampleBlogs();
        const blog = blogs.find(b => b.id === blogId);

        if (blog) {
            console.log('BlogRepositoryTest: Blog found:', blog);
            return blog;
        } else {
            console.log('BlogRepositoryTest: Blog not found with id:', blogId);
            throw new Error("Blog not found");
        }
    }
}

export default BlogRepositoryTest;