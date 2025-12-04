import { useState } from 'react';
import { User } from '../App';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent } from './ui/card';
import { Users, Baby, Mail, Lock, UserCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface SignupPageProps {
  onSignup: (user: User) => void;
  onNavigateToLogin: () => void;
}

export function SignupPage({ onSignup, onNavigateToLogin }: SignupPageProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signupType, setSignupType] = useState<'parent' | 'child'>('parent');

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock signup - create a new user
    onSignup({
      id: `${signupType}-${Date.now()}`,
      name: name,
      type: signupType,
      childId: signupType === 'parent' ? 'new-child' : undefined
    });
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with Egyptian Culture */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1568322445389-dc9223328f88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ3lwdGlhbiUyMHBoYXJhb2glMjBzdGF0dWV8ZW58MXx8fHwxNzY0ODM0NTExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Egyptian Pharaoh"
          className="w-full h-full object-cover opacity-50"
        />
        {/* White overlay for gold theme */}
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
            <h1 className="text-5xl mb-2 tracking-tight" style={{ color: '#B8860B' }}>Join the Adventure</h1>
            <p style={{ color: '#D4AF37' }}>Create your account and start exploring</p>
          </div>

          {/* Modern Glassmorphism Card */}
          <Card className="bg-white shadow-2xl" style={{ border: '2px solid #D4AF37' }}>
            <CardContent className="p-8">
              {/* User Type Selector - Modern Pills */}
              <div className="flex gap-3 p-1 rounded-2xl mb-8" style={{ backgroundColor: '#F5E6D3' }}>
                <button
                  onClick={() => setSignupType('parent')}
                  className={`flex-1 py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2`}
                  style={signupType === 'parent' 
                    ? { background: 'linear-gradient(to right, #D4AF37, #B8860B, #C5B358)', color: 'white', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }
                    : { color: '#B8860B' }
                  }
                >
                  <Users className="w-5 h-5" />
                  <span>Parent</span>
                </button>
                <button
                  onClick={() => setSignupType('child')}
                  className={`flex-1 py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2`}
                  style={signupType === 'child' 
                    ? { background: 'linear-gradient(to right, #D4AF37, #B8860B, #C5B358)', color: 'white', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }
                    : { color: '#B8860B' }
                  }
                >
                  <Baby className="w-5 h-5" />
                  <span>Child</span>
                </button>
              </div>

              {/* Signup Form */}
              <form onSubmit={handleSignup} className="space-y-6">
                {/* Name Input */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm" style={{ color: '#B8860B' }}>Full Name</Label>
                  <div className="relative">
                    <UserCircle className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: '#D4AF37' }} />
                    <Input
                      id="name"
                      type="text"
                      placeholder={signupType === 'parent' ? 'Enter your name' : 'Enter child name'}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="pl-12 h-14 bg-amber-50 text-gray-800 placeholder:text-gray-500 transition-all rounded-xl"
                      style={{ border: '2px solid #F5E6D3' }}
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm" style={{ color: '#B8860B' }}>Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: '#D4AF37' }} />
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
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
                      placeholder="Create a strong password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="pl-12 h-14 bg-amber-50 text-gray-800 placeholder:text-gray-500 transition-all rounded-xl"
                      style={{ border: '2px solid #F5E6D3' }}
                    />
                  </div>
                </div>

                {/* Child Notice */}
                {signupType === 'child' && (
                  <div className="p-4 rounded-xl" style={{ backgroundColor: '#FFF8E1', border: '2px solid #F5E6D3' }}>
                    <p className="text-sm flex items-start gap-2" style={{ color: '#B8860B' }}>
                      <span className="text-lg">💡</span>
                      <span>Make sure to ask your parent's permission before signing up!</span>
                    </p>
                  </div>
                )}

                {/* Terms */}
                <label className="flex items-start gap-3 text-sm cursor-pointer" style={{ color: '#B8860B' }}>
                  <input type="checkbox" required className="w-4 h-4 rounded mt-1" style={{ borderColor: '#D4AF37' }} />
                  <span style={{ color: '#8B7355' }}>
                    I agree to the Terms of Service and Privacy Policy
                  </span>
                </label>

                {/* Signup Button */}
                <Button 
                  type="submit" 
                  className="w-full h-14 text-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl text-lg"
                  style={{ background: 'linear-gradient(to right, #D4AF37, #B8860B, #C5B358)' }}
                >
                  Create Account
                </Button>
              </form>

              {/* Divider */}
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t" style={{ borderColor: '#F5E6D3' }}></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white" style={{ color: '#B8860B' }}>Already have an account?</span>
                </div>
              </div>

              {/* Login Link */}
              <Button
                onClick={onNavigateToLogin}
                variant="outline"
                className="w-full h-14 border-2 rounded-xl transition-all duration-300"
                style={{ borderColor: '#D4AF37', color: '#B8860B', backgroundColor: 'white' }}
              >
                Sign In Instead
              </Button>
            </CardContent>
          </Card>

          {/* Bottom Decorative Elements */}
          <div className="mt-8 text-center">
            <div className="flex items-center justify-center gap-8" style={{ color: '#B8860B' }}>
              <span className="text-sm">🔒 Safe & Secure</span>
              <span className="text-sm">📚 Fun Learning</span>
              <span className="text-sm">🎯 Track Progress</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}