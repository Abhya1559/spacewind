"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      // Log the res.ok value here to see what it is
      console.log("Is response OK?", res.ok);
      // Log the raw response status
      console.log("Response status:", res.status);
      const data = await res.json();
      if (res.ok) {
        window.location.href = "/dashboard";
      } else {
        setError(data.error || "Login failed");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setError("server error during login");
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-950">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <div className="bg-red-100 text-red-700 p-2 rounded text-sm">
              {error}
            </div>
          )}
          <form onSubmit={handleLogin} className="mt-6">
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  {/* <a
                    href="#"
                    className="ml-auto inline-block  underline-offset-4 hover:font-semibold text-blue-900 cursor-pointer hover:text-blue-950"
                  >
                    Forgot your password?
                  </a> */}
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="*******"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <CardFooter className="flex-col gap-2">
                <Button
                  type="submit"
                  className="w-full cursor-pointer px-6 py-3 text-lg font-semibold rounded-2xl 
        bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg 
        hover:from-blue-600 hover:to-blue-800 hover:shadow-xl 
        transform hover:scale-105 transition-all duration-300 ease-in-out"
                >
                  Login
                </Button>
                <Button
                  variant="link"
                  className="text-blue-900 hover:text-blue-950 cursor-pointer"
                  onClick={() => router.push("/register")}
                >
                  Don’t have an account? Sign Up
                </Button>
              </CardFooter>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
