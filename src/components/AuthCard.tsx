import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LogIn, UserPlus, Eye, EyeOff } from 'lucide-react';
import { loginUser, registerUser } from '../api/userServiceApi.js'; // Import API functions

const AuthCard = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' });
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      
      const loginPayload = {
        username: loginData.email, 
        password: loginData.password,
      }
      
      const response = await loginUser(loginPayload);
      console.log('Login successful:', response);
      if (response.status === 200) {
        navigate('/chat');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleSignup = async () => {
    try {
      const signupPayload = {
        username: signupData.email, // Combine firstName and lastName
        email: signupData.email,
        password: signupData.password,
      };

      const response = await registerUser(signupPayload);
      console.log('Signup successful:', response);
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="bg-card border border-border/50 shadow-xl">
        <CardHeader className="text-center space-y-6 pb-6">
          <div className="mx-auto w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
            <LogIn className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <CardTitle className="text-2xl font-semibold text-foreground mb-2">Welcome back</CardTitle>
            <CardDescription className="text-muted-foreground text-sm">
              Sign in to your account to continue
            </CardDescription>
          </div>
        </CardHeader>
        
        <CardContent className="px-6 pb-6">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6 bg-muted h-10">
              <TabsTrigger value="login" className="text-sm font-medium">
                Sign In
              </TabsTrigger>
              <TabsTrigger value="signup" className="text-sm font-medium">
                Sign Up
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="login" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={loginData.email}
                  onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                  className="h-10 bg-input border-border focus:border-primary/50 focus:ring-1 focus:ring-primary/20"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-foreground">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    className="h-10 bg-input border-border focus:border-primary/50 focus:ring-1 focus:ring-primary/20 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              
              <Button
                onClick={handleLogin}
                className="w-full h-10 bg-primary text-primary-foreground hover:bg-primary/90 font-medium mt-6"
              >
                Sign In
              </Button>
            </TabsContent>
            
            <TabsContent value="signup" className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-sm font-medium text-foreground">
                    First name
                  </Label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="First name"
                    value={signupData.firstName}
                    onChange={(e) => setSignupData({ ...signupData, firstName: e.target.value })}
                    className="h-10 bg-input border-border focus:border-primary/50 focus:ring-1 focus:ring-primary/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-sm font-medium text-foreground">
                    Last name
                  </Label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Last name"
                    value={signupData.lastName}
                    onChange={(e) => setSignupData({ ...signupData, lastName: e.target.value })}
                    className="h-10 bg-input border-border focus:border-primary/50 focus:ring-1 focus:ring-primary/20"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="signupEmail" className="text-sm font-medium text-foreground">
                  Email address
                </Label>
                <Input
                  id="signupEmail"
                  type="email"
                  placeholder="Enter your email"
                  value={signupData.email}
                  onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                  className="h-10 bg-input border-border focus:border-primary/50 focus:ring-1 focus:ring-primary/20"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="signupPassword" className="text-sm font-medium text-foreground">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="signupPassword"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    value={signupData.password}
                    onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                    className="h-10 bg-input border-border focus:border-primary/50 focus:ring-1 focus:ring-primary/20 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-sm font-medium text-foreground">
                  Confirm password
                </Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    value={signupData.confirmPassword}
                    onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })}
                    className="h-10 bg-input border-border focus:border-primary/50 focus:ring-1 focus:ring-primary/20 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              
              <Button
                onClick={handleSignup}
                className="w-full h-10 bg-primary text-primary-foreground hover:bg-primary/90 font-medium mt-6"
              >
                <UserPlus className="w-4 h-4 mr-2" />
                Create Account
              </Button>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthCard;
