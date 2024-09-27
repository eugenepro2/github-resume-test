"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username.trim()) {
      router.push(`/${username.trim()}`);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md gap-4 flex flex-col">
        <h1 className="text-3xl font-bold text-center">
          GitHub Resume Creator
        </h1>
        <p className="text-center text-gray-700">
          Generate a resume for any GitHub user by entering their username
          below. This application fetches public data from GitHub to create a
          profile summary, including language usage and recent repositories.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <label htmlFor="username" className="block font-medium text-gray-700">
            GitHub Username
          </label>
          <input
            id="username"
            type="text"
            placeholder="e.g., octocat"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 border rounded focus:outline-none focus:border-blue-500"
            aria-label="GitHub username"
          />
          <button
            type="submit"
            disabled={!username.trim()}
            //can user clsx or classnames package to conditionally apply classes
            className={`w-full p-3 rounded transition ${
              username.trim()
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Generate Resume
          </button>
        </form>
      </div>
    </div>
  );
}
