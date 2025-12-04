import { useState } from 'react';
import { User } from '../App';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowLeft, Play, Pause, SkipForward, RotateCcw, CheckCircle, Maximize } from 'lucide-react';
import { Language } from '../translations';
import { Progress } from './ui/progress';

interface WatchPageProps {
  user: User;
  onBack: () => void;
  language?: Language;
}

interface VideoLesson {
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
  color: string;
}

export function WatchPage({ user, onBack, language = 'en' }: WatchPageProps) {
  const [selectedLesson, setSelectedLesson] = useState<VideoLesson | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const lessons: VideoLesson[] = [
    {
      id: 1,
      title: 'Building the Pyramids',
      titleAr: 'بناء الأهرامات',
      description: 'Watch how ancient engineers constructed these wonders',
      descriptionAr: 'شاهد كيف بنى المهندسون القدماء هذه العجائب',
      duration: '4:30',
      icon: '🔺',
      category: 'Construction',
      categoryAr: 'البناء',
      completed: true,
      color: 'from-orange-400 to-amber-500'
    },
    {
      id: 2,
      title: 'Journey Through a Pyramid',
      titleAr: 'رحلة عبر الهرم',
      description: 'Explore the chambers and passages inside',
      descriptionAr: 'استكشف الغرف والممرات الداخلية',
      duration: '5:15',
      icon: '🚪',
      category: 'Exploration',
      categoryAr: 'الاستكشاف',
      completed: true,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      id: 3,
      title: 'The Mummification Process',
      titleAr: 'عملية التحنيط',
      description: 'See step-by-step how mummies were created',
      descriptionAr: 'شاهد خطوة بخطوة كيف تم إنشاء المومياوات',
      duration: '6:00',
      icon: '🏺',
      category: 'Rituals',
      categoryAr: 'الطقوس',
      completed: false,
      color: 'from-purple-400 to-pink-500'
    },
    {
      id: 4,
      title: 'Egyptian Gods Come Alive',
      titleAr: 'الآلهة المصرية تنبض بالحياة',
      description: 'Meet the powerful deities in animated form',
      descriptionAr: 'قابل الآلهة القوية في شكل متحرك',
      duration: '5:45',
      icon: '⚡',
      category: 'Mythology',
      categoryAr: 'الأساطير',
      completed: false,
      color: 'from-indigo-400 to-blue-500'
    },
    {
      id: 5,
      title: 'Daily Life in Ancient Egypt',
      titleAr: 'الحياة اليومية في مصر القديمة',
      description: 'Experience a day in an Egyptian village',
      descriptionAr: 'عايش يوماً في قرية مصرية',
      duration: '7:00',
      icon: '🏘️',
      category: 'Culture',
      categoryAr: 'الثقافة',
      completed: false,
      color: 'from-green-400 to-teal-500'
    },
    {
      id: 6,
      title: 'The Nile River',
      titleAr: 'نهر النيل',
      description: 'Follow the lifeblood of Egypt from source to sea',
      descriptionAr: 'تتبع شريان حياة مصر من المصدر إلى البحر',
      duration: '6:30',
      icon: '🌊',
      category: 'Geography',
      categoryAr: 'الجغرافيا',
      completed: false,
      color: 'from-blue-400 to-cyan-500'
    },
    {
      id: 7,
      title: 'Hieroglyphics Writing System',
      titleAr: 'نظام الكتابة الهيروغليفية',
      description: 'Learn how to read and write ancient symbols',
      descriptionAr: 'تعلم كيفية قراءة وكتابة الرموز القديمة',
      duration: '5:00',
      icon: '📜',
      category: 'Language',
      categoryAr: 'اللغة',
      completed: false,
      color: 'from-amber-400 to-yellow-500'
    },
    {
      id: 8,
      title: 'The Sphinx Mystery',
      titleAr: 'لغز أبو الهول',
      description: 'Uncover the secrets of the Great Sphinx',
      descriptionAr: 'اكتشف أسرار أبو الهول العظيم',
      duration: '4:45',
      icon: '🦁',
      category: 'Mysteries',
      categoryAr: 'الألغاز',
      completed: false,
      color: 'from-red-400 to-orange-500'
    }
  ];

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    // Simulate video progress
    if (!isPlaying) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsPlaying(false);
            return 100;
          }
          return prev + 2;
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
              {language === 'ar' ? 'شاهدت 5 من 12' : 'Watched 5 of 12'}
            </Badge>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-6xl">🎬</div>
            <div>
              <h1 className="text-4xl mb-2">
                {language === 'ar' ? 'الرسوم المتحركة التعليمية' : 'Animated Lessons'}
              </h1>
              <p className="text-lg text-amber-100">
                {language === 'ar' 
                  ? 'شاهد رسوم متحركة قصيرة تشرح التاريخ المصري'
                  : 'Watch short animations explaining Egyptian history'}
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
                    <div className={`w-full h-32 bg-gradient-to-br ${lesson.color} rounded-lg flex items-center justify-center mb-4 relative overflow-hidden`}>
                      <div className="text-6xl">{lesson.icon}</div>
                      {lesson.completed && (
                        <div className="absolute top-2 right-2 bg-green-600 rounded-full p-1">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                    <CardTitle className="flex items-center justify-between">
                      <span style={{ color: '#B8860B' }}>
                        {language === 'ar' ? lesson.titleAr : lesson.title}
                      </span>
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
                      <Play className="w-4 h-4" />
                      {language === 'ar' ? 'شاهد الآن' : 'Watch Now'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        ) : (
          <>
            {/* Video Player View */}
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
                {/* Lesson Title */}
                <div className="mb-6">
                  <h2 className="text-3xl mb-2" style={{ color: '#B8860B' }}>
                    {language === 'ar' ? selectedLesson.titleAr : selectedLesson.title}
                  </h2>
                  <p className="text-lg text-gray-600">
                    {language === 'ar' ? selectedLesson.descriptionAr : selectedLesson.description}
                  </p>
                </div>

                {/* Video Player */}
                <div className={`bg-gradient-to-br ${selectedLesson.color} rounded-2xl p-12 mb-6 relative overflow-hidden`}>
                  {/* Decorative background pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="grid grid-cols-8 grid-rows-6 h-full">
                      {[...Array(48)].map((_, i) => (
                        <div key={i} className="border border-white/20" />
                      ))}
                    </div>
                  </div>

                  {/* Video content area */}
                  <div className="relative flex items-center justify-center min-h-[300px]">
                    {!isPlaying && progress === 0 ? (
                      <div className="text-center">
                        <div className="text-9xl mb-4 animate-pulse">{selectedLesson.icon}</div>
                        <p className="text-white text-2xl">
                          {language === 'ar' ? 'انقر على تشغيل للبدء' : 'Click Play to Start'}
                        </p>
                      </div>
                    ) : (
                      <div className="text-center w-full">
                        <div className="text-9xl mb-4" style={{ 
                          animation: isPlaying ? 'pulse 2s infinite' : 'none' 
                        }}>
                          {selectedLesson.icon}
                        </div>
                        <div className="bg-white/90 rounded-lg p-4 max-w-md mx-auto">
                          <p className="text-gray-800 text-sm">
                            {language === 'ar' 
                              ? 'عرض متحرك يوضح ' + selectedLesson.titleAr
                              : 'Animated demonstration of ' + selectedLesson.title}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Fullscreen button */}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-4 right-4 bg-black/20 text-white hover:bg-black/40"
                  >
                    <Maximize className="w-4 h-4" />
                  </Button>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <Progress value={progress} className="h-3 mb-2" />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>
                      {Math.floor((progress / 100) * parseInt(selectedLesson.duration.split(':')[0]))}:
                      {String(Math.floor((progress / 100) * parseInt(selectedLesson.duration.split(':')[1]))).padStart(2, '0')}
                    </span>
                    <span>{selectedLesson.duration}</span>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-center gap-4 mb-8">
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
                    className="gap-2"
                    style={{ borderColor: '#D4AF37', color: '#B8860B' }}
                  >
                    <SkipForward className="w-5 h-5" />
                    {language === 'ar' ? 'التالي' : 'Next'}
                  </Button>
                </div>

                {/* Lesson Info */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-6 bg-amber-50 rounded-lg" style={{ border: '2px solid #D4AF37' }}>
                    <h3 className="text-lg mb-3" style={{ color: '#B8860B' }}>
                      {language === 'ar' ? '📚 ماذا ستتعلم' : '📚 What You\'ll Learn'}
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span style={{ color: '#D4AF37' }}>•</span>
                        <span>
                          {language === 'ar' 
                            ? 'حقائق تاريخية مثيرة'
                            : 'Fascinating historical facts'}
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span style={{ color: '#D4AF37' }}>•</span>
                        <span>
                          {language === 'ar' 
                            ? 'عروض توضيحية متحركة'
                            : 'Animated demonstrations'}
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span style={{ color: '#D4AF37' }}>•</span>
                        <span>
                          {language === 'ar' 
                            ? 'مفاهيم سهلة الفهم'
                            : 'Easy-to-understand concepts'}
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-6 bg-amber-50 rounded-lg" style={{ border: '2px solid #D4AF37' }}>
                    <h3 className="text-lg mb-3" style={{ color: '#B8860B' }}>
                      {language === 'ar' ? '🎯 تفاصيل الدرس' : '🎯 Lesson Details'}
                    </h3>
                    <div className="space-y-3 text-gray-700">
                      <div className="flex justify-between">
                        <span>{language === 'ar' ? 'المدة:' : 'Duration:'}</span>
                        <span className="font-semibold">{selectedLesson.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>{language === 'ar' ? 'الفئة:' : 'Category:'}</span>
                        <Badge style={{ backgroundColor: '#F5E6D3', color: '#B8860B' }}>
                          {language === 'ar' ? selectedLesson.categoryAr : selectedLesson.category}
                        </Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>{language === 'ar' ? 'الحالة:' : 'Status:'}</span>
                        <Badge className={selectedLesson.completed ? 'bg-green-600' : 'bg-gray-400'}>
                          {language === 'ar' 
                            ? (selectedLesson.completed ? 'مكتمل' : 'جديد')
                            : (selectedLesson.completed ? 'Completed' : 'New')}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  );
}