import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-32 bg-gray-100 dark:bg-gray-700 ">
        <div className="w-full max-w-4xl p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0 ">
              <div className="relative w-48 h-48 rounded-full overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Profile"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-center ">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">About Us</h1>
              <p className="text-gray-600 dark:text-gray-50 text-lg mb-4">
              At Python Pathways, we believe in crafting the future of innovation, one learner at a time. Our mission is simple: to empower individuals with the tools, knowledge, and creativity they need to shape tomorrow’s tech landscape.
              With a focus on immersive learning and real-world applications, we bridge the gap between theory and practice. Through a carefully curated curriculum and hands-on projects, our community thrives on collaboration, curiosity, and creativity.
              </p>
              <p className="text-gray-600 dark:text-gray-50 text-lg">
              We are more than just a club. Python Pathways is a movement—one that nurtures the next generation of thinkers, creators, and innovators.

      Want to be part of the revolution?  
      Explore more and{' '}
      <Link href="http://pythonpathways.org" target="_blank">
        <strong>pre-register for our exclusive launch event</strong>
      </Link>              </p>
            </div>
          </div>
        </div>
      </div>



    </div>
  );
}
