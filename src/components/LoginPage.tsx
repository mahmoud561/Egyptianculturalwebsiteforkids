import { useState } from 'react';
import { User } from '../App';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Users, Baby, Mail, Lock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface LoginPageProps {
  onLogin: (user: User) => void;
  onNavigateToSignup: () => void;
  onNavigateToForgotPassword: () => void;
}

// Mock user data
const mockUsers = {
  parent: { email: 'parent@example.com', password: 'parent123', name: 'Ahmed Hassan', childId: 'child1' },
  child: { email: 'sara@example.com', password: 'sara123', name: 'Sara' }
};

export function LoginPage({ onLogin, onNavigateToSignup, onNavigateToForgotPassword }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginType, setLoginType] = useState<'parent' | 'child'>('parent');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock login logic
    if (loginType === 'parent' && email === mockUsers.parent.email && password === mockUsers.parent.password) {
      onLogin({
        id: 'parent1',
        name: mockUsers.parent.name,
        type: 'parent',
        childId: mockUsers.parent.childId
      });
    } else if (loginType === 'child' && email === mockUsers.child.email && password === mockUsers.child.password) {
      onLogin({
        id: 'child1',
        name: mockUsers.child.name,
        type: 'child'
      });
    } else {
      alert('Invalid credentials. Try:\nParent: parent@example.com / parent123\nChild: sara@example.com / sara123');
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with Egyptian Culture */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1728242410792-5559cb70def0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwZWd5cHQlMjBoaWVyb2dseXBoaWNzfGVufDF8fHx8MTc2NDc3MjA2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Egyptian Hieroglyphics"
          className="w-full h-full object-cover opacity-50"
        />
        {/* Light white overlay for readability */}
        <div className="absolute inset-0 bg-white/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-5xl">
          {/* Modern Logo Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="text-6xl">𓀭</span>
              <span className="text-6xl">𓂀</span>
            </div>
            <h1 className="text-5xl mb-2 tracking-tight" style={{ color: '#B8860B' }}>Welcome Back</h1>
            <p style={{ color: '#D4AF37' }}>Continue your Egyptian adventure</p>
          </div>

          {/* Modern Card */}
          <Card className="bg-white shadow-2xl" style={{ border: '2px solid #D4AF37' }}>
            <CardContent className="p-8">
              {/* User Type Selector - Modern Pills */}
              <div className="flex gap-3 p-1 rounded-2xl mb-8" style={{ backgroundColor: '#F5E6D3' }}>
                <button
                  onClick={() => setLoginType('parent')}
                  className={`flex-1 py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2`}
                  style={loginType === 'parent' 
                    ? { background: 'linear-gradient(to right, #D4AF37, #B8860B, #C5B358)', color: 'white', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }
                    : { color: '#B8860B' }
                  }
                >
                  <Users className="w-5 h-5" />
                  <span>Parent</span>
                </button>
                <button
                  onClick={() => setLoginType('child')}
                  className={`flex-1 py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2`}
                  style={loginType === 'child' 
                    ? { background: 'linear-gradient(to right, #D4AF37, #B8860B, #C5B358)', color: 'white', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }
                    : { color: '#B8860B' }
                  }
                >
                  <Baby className="w-5 h-5" />
                  <span>Child</span>
                </button>
              </div>

              {/* Login Form */}
              <form onSubmit={handleLogin} className="space-y-6">
                {/* Email Input */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm" style={{ color: '#B8860B' }}>Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: '#D4AF37' }} />
                    <Input
                      id="email"
                      type="email"
                      placeholder={loginType === 'parent' ? 'parent@example.com' : 'sara@example.com'}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="pl-12 h-14 bg-amber-50 text-gray-800 placeholder:text-gray-500 transition-all rounded-xl"
                      style={{ border: '2px solid #F5E6D3' }}
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm" style={{ color: '#B8860B' }}>Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: '#D4AF37' }} />
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="pl-12 h-14 bg-amber-50 text-gray-800 placeholder:text-gray-500 transition-all rounded-xl"
                      style={{ border: '2px solid #F5E6D3' }}
                    />
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer" style={{ color: '#B8860B' }}>
                    <input type="checkbox" className="w-4 h-4 rounded" style={{ borderColor: '#D4AF37' }} />
                    <span>Remember me</span>
                  </label>
                  <button type="button" className="hover:underline transition-colors" style={{ color: '#D4AF37' }} onClick={onNavigateToForgotPassword}>
                    Forgot password?
                  </button>
                </div>

                {/* Login Button */}
                <Button 
                  type="submit" 
                  className="w-full h-14 text-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl text-lg"
                  style={{ background: 'linear-gradient(to right, #D4AF37, #B8860B, #C5B358)' }}
                >
                  Sign In
                </Button>
              </form>

              {/* Divider */}
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t" style={{ borderColor: '#F5E6D3' }}></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white" style={{ color: '#B8860B' }}>New to Egyptian Explorer?</span>
                </div>
              </div>

              {/* Sign Up Link */}
              <Button
                onClick={onNavigateToSignup}
                variant="outline"
                className="w-full h-14 border-2 rounded-xl transition-all duration-300"
                style={{ borderColor: '#D4AF37', color: '#B8860B', backgroundColor: 'white' }}
              >
                Create New Account
              </Button>

              {/* Demo Credentials - Modern Style */}
              <div className="mt-6 p-4 rounded-xl" style={{ backgroundColor: '#FFF8E1', border: '2px solid #F5E6D3' }}>
                <p className="text-xs leading-relaxed" style={{ color: '#B8860B' }}>
                  <strong style={{ color: '#D4AF37' }}>Demo Access:</strong><br />
                  <span className="inline-block mt-1">👤 Parent: parent@example.com / parent123</span><br />
                  <span className="inline-block">👶 Child: sara@example.com / sara123</span>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Bottom Decorative Elements */}
          <div className="mt-8 text-center">
            <div className="flex items-center justify-center gap-8" style={{ color: '#B8860B' }}>
              <span className="text-sm">🏺 Secure Login</span>
              <span className="text-sm">📚 Educational</span>
              <span className="text-sm">✨ Fun Learning</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}