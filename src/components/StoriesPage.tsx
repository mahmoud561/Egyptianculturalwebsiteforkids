import { User } from '../App';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowLeft, Clock, BookOpen } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Language, getTranslation } from '../translations';

interface StoriesPageProps {
  user: User;
  onBack: () => void;
  onSelectStory: (id: number) => void;
  language?: Language;
}

const stories = [
  {
    id: 1,
    title: 'The Tale of Osiris and Isis',
    description: 'Discover the story of Osiris, the god of the afterlife, and his devoted wife Isis. Learn how love conquered even death!',
    readTime: '8 min',
    ageGroup: '9-12',
    category: 'Mythology',
    image: 'https://images.unsplash.com/photo-1728242410792-5559cb70def0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwZWd5cHQlMjBoaWVyb2dseXBoaWNzfGVufDF8fHx8MTc2NDc3MjA2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    completed: true
  },
  {
    id: 2,
    title: 'King Tutankhamun: The Boy Pharaoh',
    description: 'Follow the incredible journey of the young pharaoh who ruled Egypt at just 9 years old. What secrets did his tomb hide?',
    readTime: '10 min',
    ageGroup: '9-12',
    category: 'History',
    image: 'https://images.unsplash.com/photo-1639851826638-87191772cb39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ3lwdGlhbiUyMHB5cmFtaWRzJTIwZGVzZXJ0fGVufDF8fHx8MTc2NDc3MjA2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    completed: true
  },
  {
    id: 3,
    title: 'The Mystery of the Sphinx',
    description: 'Who built the Great Sphinx? What secrets does it guard? Join us on an adventure to uncover the mysteries of this ancient guardian.',
    readTime: '7 min',
    ageGroup: '9-12',
    category: 'Mystery',
    image: 'https://images.unsplash.com/photo-1599976983902-8a9c51770f8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ3lwdGlhbiUyMHNwaGlueCUyMG1vbnVtZW50fGVufDF8fHx8MTc2NDc4NzM1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    completed: false
  },
  {
    id: 4,
    title: 'Building the Great Pyramid',
    description: 'How did ancient Egyptians build such massive pyramids without modern machines? Discover the ingenious methods they used!',
    readTime: '9 min',
    ageGroup: '9-12',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1639851826638-87191772cb39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ3lwdGlhbiUyMHB5cmFtaWRzJTIwZGVzZXJ0fGVufDF8fHx8MTc2NDc3MjA2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    completed: false
  },
  {
    id: 5,
    title: 'Journey Down the Nile',
    description: 'Travel down the mighty Nile River and see how it shaped Egyptian civilization. Meet farmers, merchants, and fishermen!',
    readTime: '8 min',
    ageGroup: '9-12',
    category: 'Geography',
    image: 'https://images.unsplash.com/photo-1680356217112-dad9300ce49d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWxlJTIwcml2ZXIlMjBlZ3lwdHxlbnwxfHx8fDE3NjQ3ODE4MDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    completed: false
  },
  {
    id: 6,
    title: 'The Power of Hieroglyphics',
    description: 'Learn how ancient Egyptians communicated through beautiful picture writing. Can you decode some hieroglyphics?',
    readTime: '6 min',
    ageGroup: '9-12',
    category: 'Language',
    image: 'https://images.unsplash.com/photo-1728242410792-5559cb70def0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwZWd5cHQlMjBoaWVyb2dseXBoaWNzfGVufDF8fHx8MTc2NDc3MjA2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    completed: false
  },
  {
    id: 7,
    title: 'Cleopatra: The Last Pharaoh',
    description: 'Meet Cleopatra, the powerful and intelligent queen who spoke nine languages and led Egypt during challenging times.',
    readTime: '10 min',
    ageGroup: '9-12',
    category: 'History',
    image: 'https://images.unsplash.com/photo-1639851826638-87191772cb39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ3lwdGlhbiUyMHB5cmFtaWRzJTIwZGVzZXJ0fGVufDF8fHx8MTc2NDc3MjA2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    completed: false
  },
  {
    id: 8,
    title: 'The Egyptian Book of the Dead',
    description: 'Explore the ancient guidebook that helped Egyptians navigate the afterlife. What challenges did they face on their journey?',
    readTime: '9 min',
    ageGroup: '9-12',
    category: 'Mythology',
    image: 'https://images.unsplash.com/photo-1728242410792-5559cb70def0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwZWd5cHQlMjBoaWVyb2dseXBoaWNzfGVufDF8fHx8MTc2NDc3MjA2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    completed: false
  }
];

export function StoriesPage({ user, onBack, onSelectStory, language }: StoriesPageProps) {
  const t = getTranslation(language);

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-6xl mx-auto">
        <Button onClick={onBack} variant="ghost" className="mb-4 gap-2" style={{ color: '#B8860B' }}>
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Button>

        <div className="mb-6">
          <h1 className="text-4xl text-amber-800 mb-2">📚 Egyptian Stories</h1>
          <p className="text-slate-600">Dive into amazing tales from Ancient Egypt!</p>
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-3 mb-6">
          <Card className="border-green-200">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-green-600" />
                <div>
                  <p className="text-2xl text-green-700">8</p>
                  <p className="text-sm text-slate-600">Total Stories</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card style={{ borderColor: '#D4AF37' }}>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <BookOpen className="w-8 h-8" style={{ color: '#D4AF37' }} />
                <div>
                  <p className="text-2xl" style={{ color: '#D4AF37' }}>2</p>
                  <p className="text-sm text-slate-600">Stories Read</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-purple-200">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <Clock className="w-8 h-8 text-purple-600" />
                <div>
                  <p className="text-2xl text-purple-700">18 min</p>
                  <p className="text-sm text-slate-600">Reading Time</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stories Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <Card
              key={story.id}
              className="cursor-pointer hover:shadow-xl transition-all border-2 border-green-200 hover:border-green-400 overflow-hidden"
              onClick={() => onSelectStory(story.id)}
            >
              <div className="relative h-48 bg-gradient-to-br from-green-100 to-green-200 overflow-hidden">
                <ImageWithFallback
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover"
                />
                {story.completed && (
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-green-600">✓ Read</Badge>
                  </div>
                )}
                <div className="absolute bottom-3 left-3">
                  <Badge className="bg-white/90 text-slate-800">{story.category}</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-green-800">{story.title}</CardTitle>
                <CardDescription className="line-clamp-2">{story.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-slate-600 mb-4">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {story.readTime}
                  </span>
                  <span>Ages {story.ageGroup}</span>
                </div>
                <Button className="w-full" style={{ backgroundColor: '#D4AF37', color: 'white' }}>
                  {story.completed ? 'Read Again' : 'Start Reading'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}