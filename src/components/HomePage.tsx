import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ArrowRight, Sparkles, BookOpen, Brain, Trophy } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomePageProps {
  onNavigateToLogin: () => void;
}

export function HomePage({ onNavigateToLogin }: HomePageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1639851826638-87191772cb39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ3lwdGlhbiUyMHB5cmFtaWRzJTIwZGVzZXJ0fGVufDF8fHx8MTc2NDc3MjA2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Egyptian Pyramids"
            className="w-full h-full object-cover opacity-50"
          />
          {/* White overlay for gold theme */}
          <div className="absolute inset-0 bg-white/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          {/* Logo/Icon */}
          <div className="mb-8 animate-bounce">
            <div className="inline-flex items-center justify-center gap-2">
              <span className="text-7xl">𓀭</span>
              <span className="text-7xl">𓂀</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl mb-6" style={{ color: '#B8860B', textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
            Egyptian Explorer
          </h1>
          <p className="text-2xl md:text-3xl mb-4" style={{ color: '#D4AF37', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
            Discover the Wonders of Ancient Egypt
          </p>
          <p className="text-xl mb-12 max-w-2xl mx-auto" style={{ color: '#B8860B' }}>
            An interactive learning adventure for curious minds aged 9-12. 
            Journey through time to explore pyramids, pharaohs, and ancient mysteries!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              onClick={onNavigateToLogin}
              size="lg"
              className="text-lg px-8 py-6 text-white shadow-2xl"
              style={{ background: 'linear-gradient(to right, #D4AF37, #B8860B, #C5B358)' }}
            >
              Login
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <Card className="bg-white backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all hover:scale-105" style={{ border: '2px solid #D4AF37' }}>
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(to bottom right, #D4AF37, #B8860B)' }}>
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-2" style={{ color: '#B8860B' }}>Interactive Quizzes</h3>
                <p style={{ color: '#8B7355' }}>
                  Test your knowledge with fun quizzes about pyramids, gods, and pharaohs!
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all hover:scale-105" style={{ border: '2px solid #D4AF37' }}>
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(to bottom right, #D4AF37, #B8860B)' }}>
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-2" style={{ color: '#B8860B' }}>Amazing Stories</h3>
                <p style={{ color: '#8B7355' }}>
                  Read captivating tales from Ancient Egypt and learn about legendary heroes!
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all hover:scale-105" style={{ border: '2px solid #D4AF37' }}>
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(to bottom right, #D4AF37, #B8860B)' }}>
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-2" style={{ color: '#B8860B' }}>Track Progress</h3>
                <p style={{ color: '#8B7355' }}>
                  Parents can monitor learning progress and celebrate achievements!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 rounded-full flex justify-center p-2" style={{ borderColor: '#D4AF37' }}>
            <div className="w-1 h-3 rounded-full" style={{ backgroundColor: '#D4AF37' }} />
          </div>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4" style={{ color: '#B8860B' }}>Why Learn About Ancient Egypt?</h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#8B7355' }}>
              Ancient Egypt was one of the greatest civilizations in history. 
              Discover incredible achievements, fascinating mysteries, and timeless stories!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-lg text-center" style={{ border: '2px solid #D4AF37' }}>
              <div className="text-4xl mb-3">🏺</div>
              <h3 className="text-lg mb-2" style={{ color: '#B8860B' }}>Rich History</h3>
              <p className="text-sm" style={{ color: '#8B7355' }}>
                Over 3,000 years of fascinating civilization
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg text-center" style={{ border: '2px solid #D4AF37' }}>
              <div className="text-4xl mb-3">📜</div>
              <h3 className="text-lg mb-2" style={{ color: '#B8860B' }}>Ancient Writing</h3>
              <p className="text-sm" style={{ color: '#8B7355' }}>
                Discover hieroglyphics and secret codes
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg text-center" style={{ border: '2px solid #D4AF37' }}>
              <div className="text-4xl mb-3">👑</div>
              <h3 className="text-lg mb-2" style={{ color: '#B8860B' }}>Powerful Rulers</h3>
              <p className="text-sm" style={{ color: '#8B7355' }}>
                Learn about pharaohs and queens
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg text-center" style={{ border: '2px solid #D4AF37' }}>
              <div className="text-4xl mb-3">✨</div>
              <h3 className="text-lg mb-2" style={{ color: '#B8860B' }}>Amazing Myths</h3>
              <p className="text-sm" style={{ color: '#8B7355' }}>
                Explore gods, goddesses, and legends
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button 
              onClick={onNavigateToLogin}
              size="lg"
              className="text-lg px-8 py-6 text-white shadow-xl gap-2"
              style={{ background: 'linear-gradient(to right, #D4AF37, #B8860B, #C5B358)' }}
            >
              <Sparkles className="w-5 h-5" />
              Begin Your Adventure
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-white py-8 px-6" style={{ background: 'linear-gradient(to right, #B8860B, #D4AF37)' }}>
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-amber-50">
            🏛️ Egyptian Explorer - A Learning Adventure for Kids Aged 9-12
          </p>
          <p className="text-amber-100 text-sm mt-2">
            Explore • Learn • Discover
          </p>
        </div>
      </div>
    </div>
  );
}