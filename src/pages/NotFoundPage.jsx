import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <div className="w-full max-w-md">
        <div className="mb-4 text-blue-600">
          <FaExclamationTriangle className="mx-auto h-16 w-16" />
        </div>
        <h1 className="text-6xl font-extrabold tracking-wider text-gray-800 md:text-9xl">
          404
        </h1>
        <h2 className="mt-4 text-2xl font-semibold text-gray-600 md:text-4xl">
          Page Not Found
        </h2>
        <p className="mt-4 text-gray-500">
          Sorry, we couldn't find the page you’re looking for. It might have
          been moved, deleted, or maybe you just mistyped the URL.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block transform rounded-full bg-blue-600 px-8 py-3 font-bold text-white transition duration-300 ease-in-out hover:scale-105 hover:bg-blue-700"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
