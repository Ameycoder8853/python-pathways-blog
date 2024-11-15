import Image from 'next/image';
import Link from 'next/link';

export default function Contact() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-32 bg-gray-100 dark:bg-gray-700">
        <div className="w-full max-w-4xl p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0">
              <div className="relative w-48 h-48 rounded-full overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Contact Icon"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-center">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Contact Us</h1>
              <p className="text-gray-600 dark:text-gray-50 text-lg mb-4">
                Got questions, feedback, or want to get in touch? We’d love to hear from you. Whether you’re a prospective member, a curious learner, or just want to say hello, reach out, and let’s connect.
              </p>
              <p className="text-gray-600 dark:text-gray-50 text-lg">
                Connect with us to explore more about our mission, events, and how you can join the Python Pathways community.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center py-16 bg-gray-50 dark:bg-gray-800">
        <div className="w-full max-w-4xl p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">Contact Information</h2>
          <div className="flex flex-col md:flex-row justify-around mb-8">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Email</h3>
              <p className="text-gray-600 dark:text-gray-50">info@pythonpathways.org</p>
            </div>
            <div className="text-center md:text-left mt-6 md:mt-0">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Phone</h3>
              <p className="text-gray-600 dark:text-gray-50">+91 86258 43729</p>
            </div>
            <div className="text-center md:text-left mt-6 md:mt-0">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Address</h3>
              <p className="text-gray-600 dark:text-gray-50">Tarabai Park, Kolhapur, Maharashtra, 416003</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
