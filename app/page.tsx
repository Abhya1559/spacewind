export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 bg-blue-950">
      <h1 className="text-6xl font-bold font-sans bg-gradient-to-r from-red-600 via-pink-400 to-yellow-400 bg-clip-text text-transparent ">
        Authentication Completed
      </h1>
      <div className="flex space-x-10">
        <button className="font-bold text-xl mt-10 border-1  p-4 rounded-lg border-red-500 text-white hover:bg-red-500 hover:text-white cursor-pointer hover:scale-105 transition-transform">
          Login
        </button>
         <button className="font-semibold text-xl mt-10 border-1  p-4 rounded-lg border-green-500 text-white hover:bg-green-500 hover:text-white cursor-pointer hover:scale-105 transition-transform">
          Signup
        </button>
      </div>
    </div>
  );
}
