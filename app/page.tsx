"use client";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 bg-blue-950">
      <div className="flex space-x-10 border-1 p-8 rounded-2xl bg-blue-200  shadow-2xl">
        <button
          className="px-6 py-3 cursor-pointer mt-10 text-lg font-semibold rounded-2xl 
  bg-gradient-to-r from-red-500 to-red-700 text-white shadow-lg 
  hover:from-red-600 hover:to-red-800 hover:shadow-xl 
  transform hover:scale-105 transition-all duration-300 ease-in-out"
          onClick={() => router.push("/login")}
        >
          Login
        </button>

        <button
          className="px-6 py-3 cursor-pointer mt-10 text-lg font-semibold rounded-2xl 
  bg-gradient-to-r from-green-500 to-green-700 text-white shadow-lg 
  hover:from-green-600 hover:to-green-800 hover:shadow-xl 
  transform hover:scale-105 transition-all duration-300 ease-in-out"
          onClick={() => router.push("/signup")}
        >
          Signup
        </button>
      </div>
    </div>
  );
}

