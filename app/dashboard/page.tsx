export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-center px-4">
      <h1 className="text-6xl font-extrabold font-sans bg-gradient-to-r from-red-600 via-pink-400 to-yellow-400 bg-clip-text text-transparent animate-pulse">
        Authentication Completed
      </h1>

      <p className="mt-6 text-lg text-gray-300 max-w-xl">
        You have successfully logged in. Welcome to your dashboard 🎉
      </p>

      <button
        className="mt-10 cursor-pointer px-6 py-3 text-lg font-semibold rounded-2xl 
        bg-gradient-to-r from-green-500 to-green-700 text-white shadow-lg 
        hover:from-green-600 hover:to-green-800 hover:shadow-xl 
        transform hover:scale-105 transition-all duration-300 ease-in-out"
      >
        Logout
      </button>
    </div>
  );
}
