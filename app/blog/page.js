import React from 'react';  
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import fs from "fs";
import matter from 'gray-matter';
import Image from 'next/image';

const dirContent = fs.readdirSync("content", "utf-8")

const blogs = dirContent.map(file => {
    const fileContent = fs.readFileSync(`content/${file}`, "utf-8")
    const { data } = matter(fileContent)
    return data
})

/**
 * Blog component that renders a list of blog posts.
 * Each blog post includes an image, title, description, author, date, and a link to the full post.
 * 
 * @returns {JSX.Element} The rendered blog component.
 */
const Blog = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Main heading for the blog section */}
      <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="rounded-lg shadow-md overflow-hidden dark:border-2">
            {/* Blog post image */}
             <Image 
              src={'/images/coding.jpeg'}
              alt={'Blog'}  
              width={500} 
              height={400}
              className="w-full h-64 object-cover" 
            /> 
            
            {/* Blog post content */}
            <div className="p-4">
              {/* Blog post title */}
              <h2 className="text-2xl font-bold mb-2">A Journey to Computing's Next Frontier</h2>
              
              {/* Blog post description */}
              <p className="mb-4">An insight-filled journey awaits. Check back soon to explore and inspire.</p>
              
              {/* Blog post author and date */}
              <div className="text-sm mb-4">
                <span>By Om Rajguru</span> | <span>14/11/24</span>
              </div>
              
              {/* Link to the full blog post */}
              <Link href={`/blogpost/a-journey-to-computings-next-frontier`} className={buttonVariants({ variant: "outline" })}>Read more</Link>
            </div>
          </div>



          <div className="rounded-lg shadow-md overflow-hidden dark:border-2">
            {/* Blog post image */}
             <Image 
              src={'/blogimg.jpg'}
              alt={'Blog'}  
              width={500} 
              height={400}
              className="w-full h-64 object-cover" 
            /> 
            
            {/* Blog post content */}
            <div className="p-4">
              {/* Blog post title */}
              <h2 className="text-2xl font-bold mb-2">In the Works</h2>
              
              {/* Blog post description */}
              <p className="mb-4">We re crafting something exclusive. Prepare for a deeper look into the future of tech and innovation.</p>
              
              {/* Blog post author and date */}
              <div className="text-sm mb-4">
                <span>By Om Rajguru</span> | <span>14/11/24</span>
              </div>
              
              {/* Link to the full blog post */}
              <Link href={`/blogpost/in-the-works`} className={buttonVariants({ variant: "outline" })}>Read more</Link>
            </div>
          </div>

          <div className="rounded-lg shadow-md overflow-hidden dark:border-2">
            {/* Blog post image */}
             <Image 
              src={'/blogimg.jpg'}
              alt={'Blog'}  
              width={500} 
              height={400}
              className="w-full h-64 object-cover" 
            /> 
            
            {/* Blog post content */}
            <div className="p-4">
              {/* Blog post title */}
              <h2 className="text-2xl font-bold mb-2">On The Horizon</h2>
              
              {/* Blog post description */}
              <p className="mb-4">An insight-filled journey awaits. Check back soon to explore and inspire.</p>
              
              {/* Blog post author and date */}
              <div className="text-sm mb-4">
                <span>From Desk Of Python Pathways</span> | <span>14/11/24</span>
              </div>
              
              {/* Link to the full blog post */}
              <Link href={`/blogpost/on-the-horizon`} className={buttonVariants({ variant: "outline" })}>Read more</Link>
            </div>
          </div>



      </div>





    </div>
  );
};

export default Blog;
