import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] w-[70%] dark:text-gray-200 text-gray-900">
      <p className="text-7xl mb-8">🥲</p>
      <h2 className="text-3xl font-bold mb-4">404 - Page Not Found</h2>
      <p className="text-lg mb-8">
        Sorry, we couldn't find the page you're looking for.
      </p>
      <Link
        href="/"
        className="px-4 py-2 dark:bg-gray-500 bg-blue-500 dark:text-white rounded dark:hover:bg-gray-600 hover:bg-blue-600 transition duration-300"
      >
        Return Home
      </Link>
    </div>
  );
}
