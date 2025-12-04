import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent } from './ui/card';
import { Mail, ArrowLeft, Lock, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ForgotPasswordPageProps {
  onNavigateToLogin: () => void;
}

export function ForgotPasswordPage({ onNavigateToLogin }: ForgotPasswordPageProps) {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [step, setStep] = useState<'email' | 'reset'>('email');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock email verification - in real app, this would send a reset link
    setStep('reset');
  };

  const handlePasswordReset = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    if (newPassword.length < 6) {
      alert('Password must be at least 6 characters long');
      return;
    }

    // Mock password reset
    setIsSuccess(true);
    setTimeout(() => {
      onNavigateToLogin();
    }, 2000);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with Egyptian Culture */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1568322445389-f64ac2515020?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ3lwdGlhbiUyMHRlbXBsZSUyMGNvbHVtbnN8ZW58MXx8fHwxNzY0Nzg3MzU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Egyptian Temple"
          className="w-full h-full object-cover opacity-50"
        />
        {/* White overlay for gold theme */}
        <div className="absolute inset-0 bg-white/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          {/* Back Button */}
          <Button
            onClick={onNavigateToLogin}
            variant="ghost"
            className="mb-6 gap-2 hover:bg-white/10"
            style={{ color: '#B8860B' }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Login
          </Button>

          {/* Modern Logo Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="text-6xl">𓀭</span>
              <span className="text-6xl">𓂀</span>
            </div>
            <h1 className="text-5xl mb-2 tracking-tight" style={{ color: '#B8860B' }}>
              {step === 'email' ? 'Reset Password' : 'Create New Password'}
            </h1>
            <p style={{ color: '#D4AF37' }}>
              {step === 'email' 
                ? 'Enter your email to reset your password' 
                : 'Enter your new password below'}
            </p>
          </div>

          {/* Modern Glassmorphism Card */}
          <Card className="bg-white shadow-2xl" style={{ border: '2px solid #D4AF37' }}>
            <CardContent className="p-8">
              {!isSuccess ? (
                <>
                  {step === 'email' ? (
                    // Email Step
                    <form onSubmit={handleEmailSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm" style={{ color: '#B8860B' }}>Email Address</Label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: '#D4AF37' }} />
                          <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="pl-12 h-14 bg-amber-50 text-gray-800 placeholder:text-gray-500 transition-all rounded-xl"
                            style={{ border: '2px solid #F5E6D3' }}
                          />
                        </div>
                      </div>

                      <div className="p-4 rounded-xl" style={{ backgroundColor: '#FFF8E1', border: '2px solid #F5E6D3' }}>
                        <p className="text-sm flex items-start gap-2" style={{ color: '#B8860B' }}>
                          <span className="text-lg">💡</span>
                          <span>We'll verify your email and let you create a new password</span>
                        </p>
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full h-14 text-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl text-lg"
                        style={{ background: 'linear-gradient(to right, #D4AF37, #B8860B, #C5B358)' }}
                      >
                        Continue
                      </Button>
                    </form>
                  ) : (
                    // Password Reset Step
                    <form onSubmit={handlePasswordReset} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="newPassword" className="text-sm" style={{ color: '#B8860B' }}>New Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: '#D4AF37' }} />
                          <Input
                            id="newPassword"
                            type="password"
                            placeholder="Enter new password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                            className="pl-12 h-14 bg-amber-50 text-gray-800 placeholder:text-gray-500 transition-all rounded-xl"
                            style={{ border: '2px solid #F5E6D3' }}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword" className="text-sm" style={{ color: '#B8860B' }}>Confirm Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: '#D4AF37' }} />
                          <Input
                            id="confirmPassword"
                            type="password"
                            placeholder="Confirm new password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className="pl-12 h-14 bg-amber-50 text-gray-800 placeholder:text-gray-500 transition-all rounded-xl"
                            style={{ border: '2px solid #F5E6D3' }}
                          />
                        </div>
                      </div>

                      <div className="p-4 rounded-xl" style={{ backgroundColor: '#FFF8E1', border: '2px solid #F5E6D3' }}>
                        <p className="text-sm flex items-start gap-2" style={{ color: '#B8860B' }}>
                          <span className="text-lg">🔒</span>
                          <span>Password must be at least 6 characters long</span>
                        </p>
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full h-14 text-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl text-lg"
                        style={{ background: 'linear-gradient(to right, #D4AF37, #B8860B, #C5B358)' }}
                      >
                        Reset Password
                      </Button>
                    </form>
                  )}
                </>
              ) : (
                // Success Message
                <div className="text-center py-8">
                  <div className="mb-6">
                    <CheckCircle className="w-20 h-20 mx-auto" style={{ color: '#4CAF50' }} />
                  </div>
                  <h2 className="text-3xl mb-4" style={{ color: '#B8860B' }}>Password Reset Successful!</h2>
                  <p className="mb-6" style={{ color: '#D4AF37' }}>
                    Your password has been changed successfully.
                  </p>
                  <p className="text-sm" style={{ color: '#8B7355' }}>
                    Redirecting to login page...
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Bottom Decorative Elements */}
          <div className="mt-8 text-center">
            <div className="flex items-center justify-center gap-8" style={{ color: '#B8860B' }}>
              <span className="text-sm">🔒 Secure Reset</span>
              <span className="text-sm">✨ Easy Process</span>
              <span className="text-sm">🏛️ Egyptian Explorer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}