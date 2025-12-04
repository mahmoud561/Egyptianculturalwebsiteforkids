import { User, Page } from '../App';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { LogOut, BookOpen, Brain, Sparkles, Trophy, Star, Volume2, Target, Palette, Lightbulb, CheckCircle, Heart, Mail, Globe } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Language, getTranslation } from '../translations';

interface ChildHomeProps {
  user: User;
  onLogout: () => void;
  onNavigate: (page: Page) => void;
  totalStars: number;
  earnedBadgesCount: number;
  language?: Language;
  onLanguageChange?: (lang: Language) => void;
}

export function ChildHome({ user, onLogout, onNavigate, totalStars, earnedBadgesCount, language = 'en', onLanguageChange }: ChildHomeProps) {
  const t = getTranslation(language);
  const isRTL = language === 'ar';
  const level = 5;
  const xp = 750;
  const nextLevelXp = 1000;
  const progressPercent = (xp / nextLevelXp) * 100;

  return (
    <div className="min-h-screen bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Header */}
      <div className="text-white p-6 shadow-lg" style={{ background: 'linear-gradient(to right, #D4AF37, #B8860B, #C5B358)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-4xl mb-2">{t.egyptianExplorer}</h1>
              <p className="text-lg text-amber-100">{t.welcomeBack}, {user.name}!</p>
            </div>
            <div className="flex items-center gap-3">
              {/* Language Toggle */}
              {onLanguageChange && (
                <Button
                  onClick={() => onLanguageChange(language === 'en' ? 'ar' : 'en')}
                  variant="secondary"
                  size="sm"
                  className="gap-2"
                  style={{ backgroundColor: '#D4AF37', color: 'white', border: 'none' }}
                >
                  <Globe className="w-4 h-4" />
                  {language === 'en' ? 'العربية' : 'English'}
                </Button>
              )}

              {/* Rewards Button */}
              <Button 
                onClick={() => onNavigate('rewards')} 
                variant="secondary" 
                size="sm" 
                className="gap-2"
                style={{ backgroundColor: '#D4AF37', color: 'white', border: 'none' }}
              >
                <Trophy className="w-4 h-4" />
                {t.myRewards}
              </Button>
              
              <Button onClick={onLogout} variant="secondary" size="sm" className="gap-2" style={{ backgroundColor: '#D4AF37', color: 'white', border: 'none' }}>
                <LogOut className="w-4 h-4" />
                {t.logout}
              </Button>
            </div>
          </div>

          {/* Level Progress */}
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-300" />
                <span>{t.level} {level}</span>
              </div>
              <span className="text-sm">{xp} / {nextLevelXp} XP</span>
            </div>
            <Progress value={progressPercent} className="h-3 bg-white/30" />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6 space-y-6">
        {/* Hero Section */}
        <Card className="shadow-xl bg-white" style={{ border: '4px solid #D4AF37' }}>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="text-7xl">👋</div>
                <div>
                  <h1 className="text-4xl mb-2" style={{ color: '#B8860B' }}>
                    {t.welcomeBack}, {user.name}!
                  </h1>
                  <p className="text-xl" style={{ color: '#85754E' }}>
                    {t.readyToExplore}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Activity Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Quizzes Card */}
          <Card 
            className="cursor-pointer hover:shadow-xl transition-all bg-white"
            style={{ border: '2px solid #D4AF37' }}
            onClick={() => onNavigate('quiz')}
          >
            <CardHeader>
              <div className="w-full h-48 bg-gradient-to-br from-orange-200 to-amber-300 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1639851826638-87191772cb39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ3lwdGlhbiUyMHB5cmFtaWRzJTIwZGVzZXJ0fGVufDF8fHx8MTc2NDc3MjA2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Egyptian Pyramids"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/60 to-transparent flex items-center justify-center">
                  <Brain className="w-20 h-20 text-white drop-shadow-lg" />
                </div>
              </div>
              <CardTitle className="flex items-center gap-2" style={{ color: '#B8860B' }}>
                <Brain className="w-5 h-5" />
                {t.takeAQuiz}
              </CardTitle>
              <CardDescription>
                {t.testYourKnowledge}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">{t.completed}:</span>
                  <span style={{ color: '#D4AF37' }}>12 / 20</span>
                </div>
                <Progress value={60} className="h-2" />
              </div>
              <Button className="w-full mt-4" style={{ backgroundColor: '#D4AF37', color: 'white' }}>
                {t.startQuiz}
              </Button>
            </CardContent>
          </Card>

          {/* Stories Card */}
          <Card 
            className="cursor-pointer hover:shadow-xl transition-all bg-white"
            style={{ border: '2px solid #D4AF37' }}
            onClick={() => onNavigate('stories')}
          >
            <CardHeader>
              <div className="w-full h-48 bg-gradient-to-br from-yellow-200 to-amber-300 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1728242410792-5559cb70def0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwZWd5cHQlMjBoaWVyb2dseXBoaWNzfGVufDF8fHx8MTc2NDc3MjA2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Egyptian Hieroglyphics"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/60 to-transparent flex items-center justify-center">
                  <BookOpen className="w-20 h-20 text-white drop-shadow-lg" />
                </div>
              </div>
              <CardTitle className="flex items-center gap-2 text-yellow-800">
                <BookOpen className="w-5 h-5" />
                {t.readStories}
              </CardTitle>
              <CardDescription>
                {t.discoverTales}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">{t.read}:</span>
                  <span style={{ color: '#D4AF37' }}>8 / 15</span>
                </div>
                <Progress value={53} className="h-2" />
              </div>
              <Button className="w-full mt-4" style={{ backgroundColor: '#D4AF37', color: 'white' }}>
                {t.readStories}
              </Button>
            </CardContent>
          </Card>

          {/* Games Card */}
          <Card 
            className="cursor-pointer hover:shadow-xl transition-all bg-white"
            style={{ border: '2px solid #D4AF37' }}
            onClick={() => onNavigate('drag-drop')}
          >
            <CardHeader>
              <div className="w-full h-48 bg-gradient-to-br from-green-200 to-teal-300 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-teal-500/20" />
                <div className="relative flex flex-col items-center justify-center gap-2">
                  <span className="text-6xl">🎯</span>
                  <Target className="w-12 h-12 text-green-700" />
                </div>
              </div>
              <CardTitle className="flex items-center gap-2 text-green-800">
                <Target className="w-5 h-5" />
                {language === 'ar' ? 'لعب الألعاب' : 'Pharaoh\'s Market'}
              </CardTitle>
              <CardDescription>
                {language === 'ar' 
                  ? 'العب ألعاب الفرز الممتعة لتنظيم القطع الأثرية المصرية القديمة'
                  : 'Play fun sorting games to organize ancient Egyptian artifacts'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">{language === 'ar' ? 'لعبت:' : 'Played'}:</span>
                  <span style={{ color: '#D4AF37' }}>5 / 10</span>
                </div>
                <Progress value={50} className="h-2" />
              </div>
              <Button className="w-full mt-4" style={{ backgroundColor: '#D4AF37', color: 'white' }}>
                {language === 'ar' ? '🎮 العب ألعاب الفرز' : '🎮 Play Sorting Games'}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Learning Activities Section */}
        <Card className="bg-white shadow-xl" style={{ border: '4px solid #D4AF37' }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2" style={{ color: '#B8860B' }}>
              <Volume2 className="w-6 h-6" />
              {language === 'ar' ? 'أنشطة التعلم' : 'Learning Activities'}
            </CardTitle>
            <CardDescription>
              {language === 'ar' 
                ? 'استمع إلى الدروس الصوتية وشاهد الرسوم المتحركة القصيرة'
                : 'Listen to voice narrations and watch short animated lessons'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {/* Voice Narration Card */}
              <Card className="border-2 border-purple-300 bg-purple-50 cursor-pointer hover:shadow-lg transition-all" onClick={() => onNavigate('listen')}>
                <CardContent className="p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center flex-shrink-0">
                      <Volume2 className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg text-gray-900 mb-1">
                        {language === 'ar' ? 'الدروس الصوتية' : 'Voice Narration Lessons'}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {language === 'ar' 
                          ? 'استمع إلى قصص وحقائق عن مصر القديمة'
                          : 'Listen to stories and facts about Ancient Egypt'}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2 mb-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">
                        {language === 'ar' ? 'استمعت إلى:' : 'Listened to:'}
                      </span>
                      <span style={{ color: '#D4AF37' }}>8 / 15</span>
                    </div>
                    <Progress value={53} className="h-2" />
                  </div>
                  <Button className="w-full" style={{ backgroundColor: '#D4AF37', color: 'white' }}>
                    {language === 'ar' ? '🎧 استمع الآن' : '🎧 Listen Now'}
                  </Button>
                </CardContent>
              </Card>

              {/* Animated Lessons Card */}
              <Card className="border-2 border-indigo-300 bg-indigo-50 cursor-pointer hover:shadow-lg transition-all" onClick={() => onNavigate('watch')}>
                <CardContent className="p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-blue-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🎬</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg text-gray-900 mb-1">
                        {language === 'ar' ? 'الرسوم المتحركة' : 'Animated Lessons'}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {language === 'ar' 
                          ? 'شاهد رسوم متحركة قصيرة تشرح التاريخ المصري'
                          : 'Watch short animations explaining Egyptian history'}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2 mb-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">
                        {language === 'ar' ? 'شاهدت:' : 'Watched:'}
                      </span>
                      <span style={{ color: '#D4AF37' }}>5 / 12</span>
                    </div>
                    <Progress value={42} className="h-2" />
                  </div>
                  <Button className="w-full" style={{ backgroundColor: '#D4AF37', color: 'white' }}>
                    {language === 'ar' ? '▶️ شاهد الآن' : '▶️ Watch Now'}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* My Offline Challenges - Activities Assigned by Parent */}
        <Card className="bg-white shadow-xl" style={{ border: '4px solid #D4AF37' }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2" style={{ color: '#B8860B' }}>
              <Trophy className="w-6 h-6" />
              {t.myOfflineChallenges}
            </CardTitle>
            <CardDescription>{t.realWorldActivities}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {/* Assigned Activity 1 */}
              <Card className="border-2 border-amber-300 bg-amber-50">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center flex-shrink-0">
                      <Lightbulb className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg text-gray-900 mb-1">{t.egyptianRecipeChallenge}</h3>
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge variant="outline" className="bg-yellow-100 text-yellow-700">
                          {t.medium}
                        </Badge>
                        <Badge variant="outline" style={{ backgroundColor: '#F5E6D3', color: '#B8860B' }}>
                          {t.handson}
                        </Badge>
                        <span className="text-xs text-gray-500">60 {language === 'ar' ? 'دقيقة' : 'min'}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-700 mb-4">
                    {language === 'ar' 
                      ? 'اطبخ وصفة مصرية قديمة مثل الخبز المسطح أو كعك التمر تحت إشراف شخص بالغ. تعلم عما كان الناس يأكلونه في العصور القديمة!'
                      : 'Cook an ancient Egyptian recipe like flatbread or date cookies with adult supervision. Learn about what people ate in ancient times!'}
                  </p>

                  <div className="flex items-center gap-2 text-amber-700 text-sm mb-3">
                    <Star className="w-4 h-4 fill-current" />
                    <span>{t.assignedByParent}</span>
                  </div>

                  <Button className="w-full" style={{ backgroundColor: '#D4AF37', color: 'white' }}>
                    {t.markAsComplete}
                  </Button>
                </CardContent>
              </Card>

              {/* Completed Activity Example */}
              <Card className="border-2 border-green-300 bg-green-50 opacity-75">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0">
                      <Palette className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg text-gray-900 mb-1">{t.pharaohMaskCraft}</h3>
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge variant="outline" className="bg-green-100 text-green-700">
                          {t.easy}
                        </Badge>
                        <Badge variant="outline" style={{ backgroundColor: '#F5E6D3', color: '#B8860B' }}>
                          {t.creative}
                        </Badge>
                        <span className="text-xs text-gray-500">45 {language === 'ar' ? 'دقيقة' : 'min'}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-700 mb-4">
                    {language === 'ar'
                      ? 'إنشاء قناع فرعون ملون باستخدام أطباق ورقية وطلاء ومواد زخرفية.'
                      : 'Create a colorful pharaoh mask using paper plates, paint, and decorative materials.'}
                  </p>

                  <div className="flex items-center gap-2 text-green-700 text-sm mb-3">
                    <CheckCircle className="w-4 h-4" />
                    <span>{t.completedGreatJob}</span>
                  </div>

                  <Button className="w-full bg-green-600" disabled>
                    ✓ {t.completed}
                  </Button>
                </CardContent>
              </Card>

              {/* Placeholder for more activities */}
              <Card className="border-2 border-dashed border-gray-300 bg-gray-50">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl mb-3">🎯</div>
                  <p className="text-gray-600 mb-2">{t.moreChallengesSoon}</p>
                  <p className="text-sm text-gray-500">
                    {t.askParentForActivities}
                  </p>
                </CardContent>
              </Card>

              {/* Suggestion Card */}
              <Card className="border-2 border-purple-200 bg-purple-50">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl mb-3">💡</div>
                  <p className="text-gray-700 mb-2">{t.haveAnIdea}</p>
                  <p className="text-sm text-gray-600">
                    {t.tellParentAboutActivities}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Challenge Progress Summary */}
            <div className="mt-6 pt-6 border-t-2 border-amber-200">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-3xl text-amber-700">1</p>
                  <p className="text-sm text-gray-600">{t.active}</p>
                </div>
                <div>
                  <p className="text-3xl text-green-700">1</p>
                  <p className="text-sm text-gray-600">{t.completed}</p>
                </div>
                <div>
                  <p className="text-3xl text-purple-700">⭐</p>
                  <p className="text-sm text-gray-600">{t.earnStars}!</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Messages from Parent */}
        <Card className="bg-white shadow-xl" style={{ border: '4px solid #D4AF37' }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2" style={{ color: '#B8860B' }}>
              <Heart className="w-6 h-6" />
              {t.messagesFromParent}
            </CardTitle>
            <CardDescription>{t.seeWhatParentSays}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {/* Recent Message */}
              <Card className="border-2 border-amber-300 bg-white shadow-md relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-amber-100 rounded-bl-full opacity-50" />
                <CardContent className="p-5 relative z-10">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-sm text-amber-700">{t.fromParent}</p>
                        <Badge className="bg-amber-600">{t.newLabel}!</Badge>
                      </div>
                      <p className="text-gray-800 mb-2">
                        {language === 'ar' ? 'أحسنت في الاختبار اليوم! أنا فخور جداً بك! 🌟' : 'Great job on your quiz today! I\'m so proud of you! 🌟'}
                      </p>
                      <p className="text-xs text-gray-500">2 {t.hoursAgo}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Previous Message */}
              <Card className="border border-amber-200 bg-white">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-300 to-orange-400 flex items-center justify-center flex-shrink-0">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-amber-700 mb-2">{t.fromParent}</p>
                      <p className="text-gray-700 mb-2">
                        {language === 'ar' ? 'استمر في العمل الرائع مع دراساتك المصرية!' : 'Keep up the amazing work with your Egyptian studies!'}
                      </p>
                      <p className="text-xs text-gray-500">1 {t.dayAgo}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Empty State / Encouragement */}
              <Card className="border-2 border-dashed border-amber-300 bg-amber-50/50">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-2">💌</div>
                  <p className="text-sm text-gray-600">
                    {t.parentCanSendMessages}
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Fun Facts */}
        <Card className="bg-white shadow-md" style={{ border: '2px solid #D4AF37' }}>
          <CardHeader>
            <CardTitle style={{ color: '#B8860B' }}>🌟 {t.didYouKnow}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700">
              {language === 'ar'
                ? 'كان هرم الجيزة الأكبر أطول مبنى في العالم لأكثر من 3800 عام! تم بناؤه بحوالي 2.3 مليون كتلة حجرية، يبلغ وزن كل منها حوالي 2.5 طن.'
                : 'The Great Pyramid of Giza was the tallest building in the world for over 3,800 years! It was built with approximately 2.3 million stone blocks, each weighing about 2.5 tons.'}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}