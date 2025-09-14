"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [error, setError] = useState("");
  const router = useRouter();
  const handleLogout = async () => {
    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (res.ok) {
        router.push("/");
      } else {
        setError("Logout failed");
      }
    } catch (error) {
      console.error("Error during logout:", error);
      setError("Server error during logout");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-center px-4">
      <h1 className="text-6xl font-extrabold font-sans bg-gradient-to-r from-red-600 via-pink-400 to-yellow-400 bg-clip-text text-transparent animate-pulse">
        Authentication Completed
      </h1>

      <p className="mt-6 text-lg text-gray-300 max-w-xl">
        You have successfully logged in. Welcome to your dashboard 🎉
      </p>

      <div className="bg-red-100 text-red-700 p-2 rounded text-sm mb-4">
        {error}
      </div>

      <button
        className="mt-10 cursor-pointer px-6 py-3 text-lg font-semibold rounded-2xl 
        bg-gradient-to-r from-green-500 to-green-700 text-white shadow-lg 
        hover:from-green-600 hover:to-green-800 hover:shadow-xl 
        transform hover:scale-105 transition-all duration-300 ease-in-out"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}
