"use client"
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-950">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
          <CardAction>
            <Button
              variant="link"
              className="text-blue-900 cursor-pointer hover:text-blue-950"
              onClick={() => router.push("/signup")}
            >
              Sign Up
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
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
                <Input id="password" type="password" required />
              </div>
            </div>
          </form>
        </CardContent>
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
          {/* <Button variant="outline" className="w-full cursor-pointer ">
            Login with Google
          </Button> */}
        </CardFooter>
      </Card>
    </div>
  );
}
