"use client";
import { Button } from "@/components/ui/button";
import Typed from "typed.js";
import React, { useRef, useEffect } from "react";
import Image from "next/image"; // Import Image from Next.js
import Link from "next/link";

export default function Home() {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Transforming Passion into Proficiency.",
        "Exploring Boundaries, Empowering Coders.",
        "Where Curiosity Meets Innovation.",
        "Crafting Tomorrows Tech Leaders.",
        "Unlocking the Power of Python, Together.",
      ],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <main>
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            Welcome <span className="font-semibold">to</span> Python Pathways <br className="hidden lg:block" /> Blogs <span className="font-semibold underline decoration-primary"><span ref={el} /></span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Crafting the Future of Innovation<br className="hidden lg:block" /> Inspiring Tomorrows Innovators
          </p>
          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
            <form action="https://www.creative-tim.com/twcomponents/search" className="flex flex-wrap justify-between md:flex-row">
            </form>
          </div>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <Image 
            src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg" 
            alt="tailwind css components" 
            width={600} 
            height={400} 
            className="w-full h-full max-w-md mx-auto" 
          />
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Behind Python Pathways</h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">The Visionaries Making It Happen</p>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* Testimonial 1 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <p className="text-gray-600 dark:text-gray-400">Om is the visionary who leads Python Pathways with clarity and purpose. His relentless pursuit of excellence and innovation sets the tone for the clubs growth, ensuring every member is empowered to push boundaries and achieve greatness.</p>
                <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Om Rajguru</h3>
                <p className="text-gray-500 dark:text-gray-300">President</p>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <p className="text-gray-600 dark:text-gray-400">Saif is the architect of our operations, bringing strategic focus and meticulous execution to every project. As Viceroy and President of Production, he ensures that our ideas come to life seamlessly, delivering top-tier results with every initiative.</p>
                <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Saif Mulla</h3>
                <p className="text-gray-500 dark:text-gray-300">Viceroy & President of Production</p>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <p className="text-gray-600 dark:text-gray-400">Zoyan is the driving force behind collaboration and creative synergy within Python Pathways. His leadership nurtures an environment where talent flourishes, guiding the team with vision and passion to shape the future of tech.</p>
                <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Zoyan Namazi</h3>
                <p className="text-gray-500 dark:text-gray-300">President</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Top Blogs</h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Check out our most popular blog posts</p>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* Blog 1 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                <Image 
                  src="/images/coding.jpeg" 
                  alt="Blog 1" 
                  width={600} 
                  height={400} 
                  className="w-full h-64 object-cover rounded-t-lg" 
                />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">A Journey to Computings Next Frontier</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">An insight-filled journey awaits. Check back soon to explore and inspire.</p>
                  <Link href="/blogpost/a-journey-to-computings-next-frontier" passHref>
                    <Button className="m-2" variant="outline" as="a">
                      Read More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            {/* Blog 2 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                <Image 
                  src="/blogimg.jpg" 
                  alt="Blog 2" 
                  width={600} 
                  height={400} 
                  className="w-full h-64 object-cover rounded-t-lg" 
                />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">In the Works</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400"> We re crafting something exclusive. Prepare for a deeper look into the future of tech and innovation.</p>
                  <Link href="/blogpost/in-the-works" passHref>
                    <Button className="m-2" variant="outline" as="a">
                      Read More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            {/* Blog 3 - On the Horizon */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                <Image 
                  src="/coding.webp" 
                  alt="On the Horizon" 
                  width={600} 
                  height={400} 
                  className="w-full h-64 object-cover rounded-t-lg" 
                />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">On the Horizon</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">An insight-filled journey awaits. Check back soon to explore and inspire.</p>
                  <Link href="/blogpost/on-the-horizon" passHref>
                    <Button className="m-2" variant="outline" as="a">
                      Read More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
