import { useState } from 'react';
import { User } from '../App';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowLeft, Volume2, Play, Pause, RotateCcw, CheckCircle } from 'lucide-react';
import { Language } from '../translations';
import { Progress } from './ui/progress';

interface ListenPageProps {
  user: User;
  onBack: () => void;
  language?: Language;
}

interface AudioLesson {
  id: number;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  duration: string;
  icon: string;
  category: string;
  categoryAr: string;
  completed: boolean;
}

export function ListenPage({ user, onBack, language = 'en' }: ListenPageProps) {
  const [selectedLesson, setSelectedLesson] = useState<AudioLesson | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const lessons: AudioLesson[] = [
    {
      id: 1,
      title: 'The Great Pyramids of Giza',
      titleAr: 'أهرامات الجيزة العظيمة',
      description: 'Discover how ancient Egyptians built these magnificent structures',
      descriptionAr: 'اكتشف كيف بنى المصريون القدماء هذه الهياكل الرائعة',
      duration: '5:30',
      icon: '🔺',
      category: 'Architecture',
      categoryAr: 'العمارة',
      completed: true
    },
    {
      id: 2,
      title: 'Pharaoh Tutankhamun',
      titleAr: 'الفرعون توت عنخ آمون',
      description: 'Learn about the boy king and his golden treasures',
      descriptionAr: 'تعرف على الملك الصبي وكنوزه الذهبية',
      duration: '6:15',
      icon: '👑',
      category: 'History',
      categoryAr: 'التاريخ',
      completed: true
    },
    {
      id: 3,
      title: 'Ancient Egyptian Gods',
      titleAr: 'الآلهة المصرية القديمة',
      description: 'Meet Ra, Anubis, Bastet and other powerful deities',
      descriptionAr: 'تعرف على رع وأنوبيس وباستت والآلهة القوية الأخرى',
      duration: '7:00',
      icon: '🌟',
      category: 'Mythology',
      categoryAr: 'الأساطير',
      completed: false
    },
    {
      id: 4,
      title: 'Life on the Nile River',
      titleAr: 'الحياة على نهر النيل',
      description: 'Explore how the Nile shaped Egyptian civilization',
      descriptionAr: 'استكشف كيف شكل النيل الحضارة المصرية',
      duration: '5:45',
      icon: '🌊',
      category: 'Geography',
      categoryAr: 'الجغرافيا',
      completed: false
    },
    {
      id: 5,
      title: 'Hieroglyphics: Ancient Writing',
      titleAr: 'الهيروغليفية: الكتابة القديمة',
      description: 'Learn how Egyptians communicated through symbols',
      descriptionAr: 'تعلم كيف تواصل المصريون من خلال الرموز',
      duration: '6:30',
      icon: '📜',
      category: 'Language',
      categoryAr: 'اللغة',
      completed: false
    },
    {
      id: 6,
      title: 'Mummification Process',
      titleAr: 'عملية التحنيط',
      description: 'Understand the sacred practice of preserving the dead',
      descriptionAr: 'فهم الممارسة المقدسة للحفاظ على الموتى',
      duration: '8:00',
      icon: '🏺',
      category: 'Culture',
      categoryAr: 'الثقافة',
      completed: false
    }
  ];

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    // Simulate audio progress
    if (!isPlaying) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsPlaying(false);
            return 100;
          }
          return prev + 1;
        });
      }, 100);
    }
  };

  const handleRestart = () => {
    setProgress(0);
    setIsPlaying(false);
  };

  const isRTL = language === 'ar';

  return (
    <div className="min-h-screen bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Header */}
      <div className="text-white p-6 shadow-lg" style={{ background: 'linear-gradient(to right, #D4AF37, #B8860B, #C5B358)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <Button
              onClick={onBack}
              variant="ghost"
              className="gap-2 text-white hover:bg-white/20"
            >
              <ArrowLeft className="w-4 h-4" />
              {language === 'ar' ? 'رجوع' : 'Back'}
            </Button>
            <Badge className="bg-white/20 text-white px-4 py-2">
              {language === 'ar' ? 'استمعت إلى 8 من 15' : 'Listened to 8 of 15'}
            </Badge>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-6xl">🎧</div>
            <div>
              <h1 className="text-4xl mb-2">
                {language === 'ar' ? 'الدروس الصوتية' : 'Voice Narration Lessons'}
              </h1>
              <p className="text-lg text-amber-100">
                {language === 'ar' 
                  ? 'استمع إلى قصص رائعة عن مصر القديمة'
                  : 'Listen to fascinating stories about Ancient Egypt'}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        {!selectedLesson ? (
          <>
            {/* Lessons Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {lessons.map((lesson) => (
                <Card
                  key={lesson.id}
                  className="cursor-pointer hover:shadow-xl transition-all bg-white"
                  style={{ border: '2px solid #D4AF37' }}
                  onClick={() => setSelectedLesson(lesson)}
                >
                  <CardHeader>
                    <div className="w-full h-32 bg-gradient-to-br from-amber-200 to-yellow-300 rounded-lg flex items-center justify-center mb-4">
                      <div className="text-6xl">{lesson.icon}</div>
                    </div>
                    <CardTitle className="flex items-center justify-between">
                      <span style={{ color: '#B8860B' }}>
                        {language === 'ar' ? lesson.titleAr : lesson.title}
                      </span>
                      {lesson.completed && (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      )}
                    </CardTitle>
                    <CardDescription>
                      {language === 'ar' ? lesson.descriptionAr : lesson.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary" style={{ backgroundColor: '#F5E6D3', color: '#B8860B' }}>
                        {language === 'ar' ? lesson.categoryAr : lesson.category}
                      </Badge>
                      <span className="text-sm text-gray-600">{lesson.duration}</span>
                    </div>
                    <Button className="w-full gap-2" style={{ backgroundColor: '#D4AF37', color: 'white' }}>
                      <Volume2 className="w-4 h-4" />
                      {language === 'ar' ? 'استمع الآن' : 'Listen Now'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        ) : (
          <>
            {/* Audio Player View */}
            <Button
              onClick={() => setSelectedLesson(null)}
              variant="ghost"
              className="mb-6 gap-2"
              style={{ color: '#B8860B' }}
            >
              <ArrowLeft className="w-4 h-4" />
              {language === 'ar' ? 'العودة إلى القائمة' : 'Back to List'}
            </Button>

            <Card className="bg-white shadow-2xl" style={{ border: '4px solid #D4AF37' }}>
              <CardContent className="p-8">
                {/* Lesson Info */}
                <div className="text-center mb-8">
                  <div className="text-8xl mb-4">{selectedLesson.icon}</div>
                  <h2 className="text-3xl mb-2" style={{ color: '#B8860B' }}>
                    {language === 'ar' ? selectedLesson.titleAr : selectedLesson.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-4">
                    {language === 'ar' ? selectedLesson.descriptionAr : selectedLesson.description}
                  </p>
                  <Badge style={{ backgroundColor: '#F5E6D3', color: '#B8860B' }}>
                    {language === 'ar' ? selectedLesson.categoryAr : selectedLesson.category}
                  </Badge>
                </div>

                {/* Audio Visualization */}
                <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-8 mb-6">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className="rounded-full transition-all duration-300"
                        style={{
                          width: '6px',
                          height: isPlaying ? `${Math.random() * 40 + 20}px` : '20px',
                          opacity: isPlaying ? 1 : 0.3,
                          backgroundColor: '#D4AF37'
                        }}
                      />
                    ))}
                  </div>

                  {/* Progress Bar */}
                  <Progress value={progress} className="h-2 mb-4" />
                  
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{Math.floor((progress / 100) * parseInt(selectedLesson.duration.split(':')[0]))}:{String(Math.floor((progress / 100) * parseInt(selectedLesson.duration.split(':')[1]))).padStart(2, '0')}</span>
                    <span>{selectedLesson.duration}</span>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-center gap-4">
                  <Button
                    onClick={handleRestart}
                    variant="outline"
                    size="lg"
                    className="gap-2"
                    style={{ borderColor: '#D4AF37', color: '#B8860B' }}
                  >
                    <RotateCcw className="w-5 h-5" />
                    {language === 'ar' ? 'إعادة' : 'Restart'}
                  </Button>
                  
                  <Button
                    onClick={handlePlayPause}
                    size="lg"
                    className="gap-2 px-8"
                    style={{ backgroundColor: '#D4AF37', color: 'white' }}
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="w-6 h-6" />
                        {language === 'ar' ? 'إيقاف' : 'Pause'}
                      </>
                    ) : (
                      <>
                        <Play className="w-6 h-6" />
                        {language === 'ar' ? 'تشغيل' : 'Play'}
                      </>
                    )}
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    style={{ borderColor: '#D4AF37', color: '#B8860B' }}
                  >
                    {language === 'ar' ? 'التالي' : 'Next'}
                  </Button>
                </div>

                {/* Lesson Transcript Preview */}
                <div className="mt-8 p-6 bg-amber-50 rounded-lg" style={{ border: '2px solid #D4AF37' }}>
                  <h3 className="text-lg mb-3" style={{ color: '#B8860B' }}>
                    {language === 'ar' ? '📝 نص الدرس' : '📝 Lesson Transcript'}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {language === 'ar' 
                      ? 'مرحباً بكم في درس اليوم عن ' + selectedLesson.titleAr + '. سنستكشف معاً التاريخ الرائع والحقائق المثيرة حول هذا الموضوع المهم في الحضارة المصرية القديمة...'
                      : 'Welcome to today\'s lesson about ' + selectedLesson.title + '. We\'ll explore together the fascinating history and exciting facts about this important topic in ancient Egyptian civilization...'}
                  </p>
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  );
}