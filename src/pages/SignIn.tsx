import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-brand-cream">
      <Card className="w-full max-w-md shadow-lg border-brand-blue/10">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-2xl font-bold text-brand-blue">Welcome Back</CardTitle>
          <CardDescription className="text-muted-foreground">
            Sign in to your Get It Done account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <Link 
                to="/forgot-password" 
                className="text-brand-blue hover:text-brand-blue/80 underline"
              >
                Forgot password?
              </Link>
            </div>
            <Button 
              type="submit" 
              className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white"
            >
              Sign In
            </Button>
          </form>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-muted-foreground/20" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>
          
          <Button variant="outline" className="w-full">
            Continue with Google
          </Button>
          
          <div className="text-center text-sm">
            <span className="text-muted-foreground">Don't have an account? </span>
            <Link 
              to="/signup" 
              className="text-brand-blue hover:text-brand-blue/80 underline font-medium"
            >
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignIn;