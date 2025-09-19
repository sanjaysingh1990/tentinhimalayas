// Test data for blog functionality
import Blog from '../models/Blog.js';

class BlogTestData {
    static getSampleBlogs() {
        return [
            new Blog(
                '1',
                'Exploring the Hidden Valleys of Kumaon',
                '<p>Discover the breathtaking beauty of Kumaon\'s hidden valleys, where ancient villages nestle between towering peaks and pristine forests. Our recent expedition took us through trails less traveled, revealing stunning vistas and cultural gems that few tourists ever experience.</p><p>The journey began at dawn from our base camp near Almora, where we trekked through rhododendron forests that were just beginning to bloom. The air was crisp and filled with the scent of pine and wildflowers. As we ascended, the landscape transformed from dense woodland to alpine meadows dotted with grazing sheep.</p><h2>Ancient Villages and Local Culture</h2><p>Our first stop was the remote village of Dhaulchina, where we were welcomed by the warm smiles of locals who still practice traditional farming methods. The village elder, Pandit Ji, shared stories of his ancestors who settled here centuries ago, drawn by the fertile land and protective embrace of the mountains.</p><p>We spent the night in a traditional Kumaoni house, experiencing the unique architecture and hospitality of the region. The evening was filled with folk songs and local cuisine that featured organic produce grown in the village\'s terraced fields.</p>',
                'Discover the breathtaking beauty of Kumaon\'s hidden valleys, where ancient villages nestle between towering peaks and pristine forests.', ['Travel', 'Adventure', 'Culture'], [
                    'images/slider-images/slider-1.webp',
                    'images/slider-images/slider-2.webp',
                    'images/slider-images/slider-3.webp',
                    'images/slider-images/slider-4.webp'
                ],
                new Date()
            ),
            new Blog(
                '2',
                'Essential Gear for Himalayan Camping',
                '<p>Planning a camping trip in the Himalayas requires careful preparation and the right gear. The unpredictable weather and challenging terrain demand equipment that can withstand extreme conditions while keeping you comfortable and safe.</p><h2>Shelter and Sleep System</h2><p>Your tent is your home away from home, so invest in a high-quality, four-season tent designed for mountain conditions. Look for features like reinforced poles, waterproof fabric, and vestibules for storing gear. A good sleeping bag rated for temperatures 10-15 degrees lower than expected conditions is essential, along with a sleeping pad for insulation and comfort.</p><h2>Clothing and Layering</h2><p>The key to staying comfortable in the mountains is proper layering. Start with moisture-wicking base layers, add insulating mid-layers like fleece or down, and finish with a waterproof, breathable shell. Don\'t forget warm accessories like hats, gloves, and neck gaiters.</p><p>Footwear is critical - invest in sturdy, waterproof hiking boots with good ankle support. Break them in before your trip to prevent blisters.</p><h2>Cooking and Hydration</h2><p>A lightweight camping stove that performs well in cold weather is essential. Carry enough fuel for your entire trip, plus extra for unexpected delays. For water, bring purification tablets or a reliable filter, and always carry more than you think you\'ll need.</p>',
                'Planning a camping trip in the Himalayas requires careful preparation and the right gear. Here\'s our essential checklist for mountain adventures.', ['Camping', 'Gear', 'Himalayas'], [
                    'images/slider-images/slider-5.webp',
                    'images/categories/category_4.webp',
                    'images/categories/category_5.webp'
                ],
                new Date(Date.now() - 86400000) // Yesterday
            ),
            new Blog(
                '3',
                'Wildlife Encounters in the Himalayas',
                '<p>The Himalayas are home to an incredible diversity of wildlife, from elusive snow leopards to colorful bird species found nowhere else on Earth. Responsible wildlife viewing can be one of the most rewarding aspects of a mountain expedition.</p><h2>Bird Watching Paradise</h2><p>Bird enthusiasts will find the Himalayas a true paradise, with over 500 species recorded in the region. Early morning hours offer the best opportunities for sightings, as birds are most active during cooler temperatures. Look for species like the Himalayan monal, with its iridescent plumage, and the cheerful sounding laughing thrush.</p><p>Bring binoculars and a field guide specific to the region. Patience and quiet movement are key to successful bird watching.</p><h2>Mammals of the High Mountains</h2><p>While larger mammals are more challenging to spot, keen observers may catch glimpses of blue sheep (bharal) on rocky slopes, or perhaps a Himalayan tahr if you\'re lucky. These sure-footed animals are perfectly adapted to the steep terrain.</p><p>For the extremely fortunate, there\'s always the possibility of spotting a snow leopard, though these elusive cats are masters of camouflage and require both skill and luck to observe.</p><h2>Responsible Wildlife Viewing</h2><p>Always maintain a safe distance from wildlife and never attempt to feed or approach animals. Use telephoto lenses for photography rather than getting too close. Stay on designated trails to minimize habitat disturbance.</p>',
                'The Himalayas are home to incredible wildlife. Learn how to responsibly observe and photograph these magnificent creatures in their natural habitat.', ['Wildlife', 'Photography', 'Nature'], [
                    'images/gallery/small/image-gallery-small-1.webp',
                    'images/gallery/small/image-gallery-small-2.webp',
                    'images/gallery/small/image-gallery-small-3.webp'
                ],
                new Date(Date.now() - 172800000) // Two days ago
            )
        ];
    }
}

export default BlogTestData;