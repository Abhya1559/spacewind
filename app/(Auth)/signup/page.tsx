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
    const router = useRouter()
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
              className="text-green-900 cursor-pointer hover:text-blue-950"
              onClick={()=>router.push("/login")}
            >
              Login
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Name</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
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
        bg-gradient-to-r from-green-500 to-green-700 text-white shadow-lg 
        hover:from-green-600 hover:to-green-800 hover:shadow-xl 
        transform hover:scale-105 transition-all duration-300 ease-in-out"

          >
            Signup
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
