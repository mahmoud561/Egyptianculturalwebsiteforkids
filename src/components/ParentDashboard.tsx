import { User } from '../App';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { Textarea } from './ui/textarea';
import { LogOut, TrendingUp, BookOpen, Brain, Clock, Award, Check, CheckCircle, Target, Lightbulb, Palette, Edit, Send, Heart, Bell, X, TrendingDown, Settings, Globe, Sliders, Shield, Volume2, Eye, UserCircle, Mail, Phone, Lock, Save, EyeOff, Key } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, Legend } from 'recharts';
import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Switch } from './ui/switch';
import { Label } from './ui/label';
import { Slider } from './ui/slider';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Input } from './ui/input';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Language, getTranslation } from '../translations';

interface ParentDashboardProps {
  user: User;
  onLogout: () => void;
  language?: Language;
  onLanguageChange?: (lang: Language) => void;
}

// Mock data for child progress
const quizScores = [
  { topic: 'Pyramids', score: 85 },
  { topic: 'Pharaohs', score: 92 },
  { topic: 'Gods', score: 78 },
  { topic: 'Hieroglyphics', score: 88 },
  { topic: 'Mummies', score: 95 },
];

const weeklyActivity = [
  { day: 'Mon', minutes: 25 },
  { day: 'Tue', minutes: 30 },
  { day: 'Wed', minutes: 45 },
  { day: 'Thu', minutes: 20 },
  { day: 'Fri', minutes: 35 },
  { day: 'Sat', minutes: 50 },
  { day: 'Sun', minutes: 40 },
];

const recentActivities = [
  { id: 1, activity: 'Completed Quiz: The Great Pyramids', time: '2 hours ago', score: 85 },
  { id: 2, activity: 'Read Story: The Tale of Osiris', time: '1 day ago', score: null },
  { id: 3, activity: 'Completed Quiz: Egyptian Gods', time: '2 days ago', score: 92 },
  { id: 4, activity: 'Read Story: King Tutankhamun', time: '3 days ago', score: null },
  { id: 5, activity: 'Completed Quiz: Hieroglyphics 101', time: '4 days ago', score: 88 },
];

// Time spent by activity type (in minutes)
const timeByActivity = [
  { activity: 'Quizzes', minutes: 85, color: '#D4AF37' },
  { activity: 'Stories', minutes: 65, color: '#B8860B' },
  { activity: 'Lessons', minutes: 55, color: '#C5B358' },
  { activity: 'Games', minutes: 40, color: '#85754E' },
];

// Topic focus distribution
const topicFocus = [
  { topic: 'Pyramids', value: 25, color: '#D4AF37' },
  { topic: 'Pharaohs', value: 20, color: '#B8860B' },
  { topic: 'Gods & Myths', value: 30, color: '#C5B358' },
  { topic: 'Hieroglyphics', value: 15, color: '#85754E' },
  { topic: 'Daily Life', value: 10, color: '#DAA520' },
];

const COLORS = ['#D4AF37', '#B8860B', '#C5B358', '#85754E', '#DAA520'];

// Offline learning activities
interface OfflineActivity {
  id: number;
  title: string;
  description: string;
  duration: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  icon: any;
  status: 'suggested' | 'assigned' | 'completed';
}

const offlineActivities: OfflineActivity[] = [
  {
    id: 1,
    title: 'Build a Mini Pyramid',
    description: 'Use cardboard or clay to construct a model pyramid. Learn about pyramid structure and architecture.',
    duration: '45-60 min',
    difficulty: 'Medium',
    category: 'Hands-on',
    icon: Target,
    status: 'suggested'
  },
  {
    id: 2,
    title: 'Create Your Own Hieroglyphics',
    description: 'Design a secret message using Egyptian hieroglyphics. Write your name in hieroglyphs!',
    duration: '30 min',
    difficulty: 'Easy',
    category: 'Creative',
    icon: Palette,
    status: 'suggested'
  },
  {
    id: 3,
    title: 'Egyptian Recipe Challenge',
    description: 'Cook an ancient Egyptian recipe like flatbread or date cookies with adult supervision.',
    duration: '60 min',
    difficulty: 'Medium',
    category: 'Hands-on',
    icon: Lightbulb,
    status: 'assigned'
  },
  {
    id: 4,
    title: 'Visit a Local Museum',
    description: 'Plan a family trip to explore Egyptian artifacts at your local museum or cultural center.',
    duration: '2-3 hours',
    difficulty: 'Easy',
    category: 'Field Trip',
    icon: BookOpen,
    status: 'suggested'
  },
  {
    id: 5,
    title: 'Pharaoh Mask Craft',
    description: 'Create a colorful pharaoh mask using paper plates, paint, and decorative materials.',
    duration: '45 min',
    difficulty: 'Easy',
    category: 'Creative',
    icon: Palette,
    status: 'completed'
  },
  {
    id: 6,
    title: 'Egyptian Timeline Project',
    description: 'Research and create a visual timeline of major events in ancient Egyptian history.',
    duration: '90 min',
    difficulty: 'Hard',
    category: 'Research',
    icon: Brain,
    status: 'suggested'
  }
];

export function ParentDashboard({ user, onLogout, language = 'en', onLanguageChange }: ParentDashboardProps) {
  const t = getTranslation(language);
  const isRTL = language === 'ar';
  const childName = 'Sara'; // Mock child name
  const overallProgress = 67;
  const [activities, setActivities] = useState(offlineActivities);
  const [messageText, setMessageText] = useState('');
  const [sentMessages, setSentMessages] = useState<Array<{id: number; text: string; timestamp: string}>>([
    { id: 1, text: "Great job on your quiz today! I'm so proud of you! 🌟", timestamp: '2 hours ago' },
    { id: 2, text: "Keep up the amazing work with your Egyptian studies!", timestamp: '1 day ago' }
  ]);

  const handleApprove = (activityId: number) => {
    setActivities(prev =>
      prev.map(activity =>
        activity.id === activityId
          ? { ...activity, status: 'assigned' as const }
          : activity
      )
    );
  };

  const handleCustomize = (activityId: number) => {
    // In a real app, this would open a modal to customize the activity
    alert(`Customize activity ${activityId} - This would open a customization dialog`);
  };

  const handleSendMessage = () => {
    if (messageText.trim()) {
      const newMessage = {
        id: sentMessages.length + 1,
        text: messageText,
        timestamp: 'Just now'
      };
      setSentMessages([newMessage, ...sentMessages]);
      setMessageText('');
    }
  };

  // Notifications state
  interface Notification {
    id: number;
    type: 'achievement' | 'weekly_report' | 'milestone' | 'alert';
    title: string;
    message: string;
    timestamp: string;
    isRead: boolean;
    requiresResponse?: boolean;
  }

  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      type: 'achievement',
      title: '🏆 New Badge Earned!',
      message: `${childName} just earned the "Quiz Master" badge by scoring 90% or higher on 5 quizzes in a row!`,
      timestamp: '10 minutes ago',
      isRead: false,
      requiresResponse: true
    },
    {
      id: 2,
      type: 'weekly_report',
      title: '📊 Weekly Report Available',
      message: `Your child's weekly learning report is ready. ${childName} spent 245 minutes learning this week - 15% more than last week!`,
      timestamp: '2 hours ago',
      isRead: false,
      requiresResponse: false
    },
    {
      id: 3,
      type: 'milestone',
      title: '🌟 Learning Milestone Reached',
      message: `${childName} has completed 50% of all available Egyptian history lessons! Keep up the great work!`,
      timestamp: '1 day ago',
      isRead: false,
      requiresResponse: true
    },
    {
      id: 4,
      type: 'achievement',
      title: '🎯 Perfect Quiz Score!',
      message: `${childName} scored 100% on the "Egyptian Gods" quiz. Outstanding performance!`,
      timestamp: '2 days ago',
      isRead: true,
      requiresResponse: false
    },
    {
      id: 5,
      type: 'alert',
      title: '⚡ 5-Day Learning Streak',
      message: `${childName} has logged in and completed activities for 5 days in a row. Celebrate this achievement!`,
      timestamp: '3 days ago',
      isRead: true,
      requiresResponse: false
    }
  ]);

  const [showNotifications, setShowNotifications] = useState(false);
  const unreadCount = notifications.filter(n => !n.isRead).length;

  const handleMarkAsRead = (notificationId: number) => {
    setNotifications(prev =>
      prev.map(notif =>
        notif.id === notificationId ? { ...notif, isRead: true } : notif
      )
    );
  };

  const handleMarkAllAsRead = () => {
    setNotifications(prev =>
      prev.map(notif => ({ ...notif, isRead: true }))
    );
  };

  const handleRespond = (notificationId: number) => {
    // In a real app, this would open a modal or take some action
    handleMarkAsRead(notificationId);
    alert('Response acknowledged! In a real app, this would send encouragement or acknowledgment to your child.');
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'achievement':
        return '🏆';
      case 'weekly_report':
        return '📊';
      case 'milestone':
        return '🌟';
      case 'alert':
        return '⚡';
      default:
        return '🔔';
    }
  };

  // Settings state
  const [settings, setSettings] = useState({
    language: 'en',
    difficulty: 'medium',
    soundEnabled: true,
    voiceNarration: true,
    dailyTimeLimit: 60,
    contentFilter: 'age-appropriate',
    autoSaveProgress: true,
    parentalNotifications: true,
    weeklyReports: true,
    achievementAlerts: true
  });

  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  const handleSettingChange = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
    setHasUnsavedChanges(true);
  };

  const handleSaveSettings = () => {
    // In a real app, this would save to backend
    setHasUnsavedChanges(false);
    alert('Settings saved successfully! Changes will apply to your child\'s account.');
  };

  const handleResetSettings = () => {
    setSettings({
      language: 'en',
      difficulty: 'medium',
      soundEnabled: true,
      voiceNarration: true,
      dailyTimeLimit: 60,
      contentFilter: 'age-appropriate',
      autoSaveProgress: true,
      parentalNotifications: true,
      weeklyReports: true,
      achievementAlerts: true
    });
    setHasUnsavedChanges(false);
  };

  // Profile state
  const [showProfile, setShowProfile] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user.name,
    email: 'ahmed.parent@example.com',
    phone: '+1 (555) 123-4567',
    childName: childName,
    childAge: '10',
    accountCreated: 'January 15, 2024'
  });
  const [profileEditMode, setProfileEditMode] = useState(false);
  const [profileHasChanges, setProfileHasChanges] = useState(false);

  // Privacy settings
  const [privacySettings, setPrivacySettings] = useState({
    dataCollection: true,
    personalization: true,
    shareProgress: false,
    emailNotifications: true,
    smsNotifications: false,
    thirdPartySharing: false
  });
  const [privacyHasChanges, setPrivacyHasChanges] = useState(false);

  // Security settings
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false
  });
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [securityHasChanges, setSecurityHasChanges] = useState(false);

  const handleProfileChange = (key: string, value: any) => {
    setProfileData(prev => ({ ...prev, [key]: value }));
    setProfileHasChanges(true);
  };

  const handlePrivacyChange = (key: string, value: any) => {
    setPrivacySettings(prev => ({ ...prev, [key]: value }));
    setPrivacyHasChanges(true);
  };

  const handleSaveProfile = () => {
    setProfileEditMode(false);
    setProfileHasChanges(false);
    alert('Profile updated successfully!');
  };

  const handleSavePrivacy = () => {
    setPrivacyHasChanges(false);
    alert('Privacy settings updated successfully!');
  };

  const handleChangePassword = () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert('New passwords do not match!');
      return;
    }
    if (passwordData.newPassword.length < 8) {
      alert('Password must be at least 8 characters long!');
      return;
    }
    // In a real app, this would call an API
    setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
    setShowChangePassword(false);
    alert('Password changed successfully!');
  };

  const handleToggle2FA = () => {
    setTwoFactorEnabled(!twoFactorEnabled);
    setSecurityHasChanges(true);
    alert(twoFactorEnabled ? 'Two-factor authentication disabled' : 'Two-factor authentication enabled! Check your email for setup instructions.');
  };

  return (
    <div className="min-h-screen bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 border-b-4 border-[#D4AF37] p-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl mb-1" style={{ color: '#B8860B' }}>🏛️ {t.egyptianExplorer}</h1>
            <p style={{ color: '#85754E' }}>{t.parentDashboard} - {t.welcomeBack}, {user.name}!</p>
          </div>
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            {onLanguageChange && (
              <Button
                onClick={() => onLanguageChange(language === 'en' ? 'ar' : 'en')}
                variant="secondary"
                size="sm"
                className="gap-2 text-white hover:opacity-90 border-2"
                style={{ backgroundColor: '#D4AF37', borderColor: '#B8860B' }}
              >
                <Globe className="w-4 h-4" />
                {language === 'en' ? 'العربية' : 'English'}
              </Button>
            )}

            {/* Notification Bell */}
            <div className="relative">
              <Button
                onClick={() => setShowNotifications(!showNotifications)}
                variant="secondary"
                size="icon"
                className="relative hover:bg-amber-100"
              >
                <Bell className="w-5 h-5" style={{ color: '#B8860B' }} />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 text-white text-xs rounded-full flex items-center justify-center" style={{ backgroundColor: '#D4AF37' }}>
                    {unreadCount}
                  </span>
                )}
              </Button>
            </div>

            {/* Profile Icon */}
            <Button
              onClick={() => setShowProfile(true)}
              variant="secondary"
              size="icon"
              className="relative"
            >
              <Avatar className="w-8 h-8">
                <AvatarFallback style={{ backgroundColor: '#D4AF37', color: 'white' }}>
                  {user.name.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </Button>

            <Button onClick={onLogout} variant="secondary" className="gap-2 text-white hover:opacity-90" style={{ backgroundColor: '#D4AF37', borderColor: '#B8860B' }}>
              <LogOut className="w-4 h-4" />
              {t.logout}
            </Button>
          </div>
        </div>
      </div>

      {/* Notifications Panel */}
      {showNotifications && (
        <div className="fixed top-20 right-6 w-96 bg-white rounded-lg shadow-2xl z-50 max-h-[600px] overflow-hidden" style={{ border: '2px solid #D4AF37' }}>
          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-b p-4 flex items-center justify-between" style={{ borderBottomColor: '#D4AF37', color: '#B8860B' }}>
            <div className="flex items-center gap-2">
              <Bell className="w-5 h-5" />
              <h3>{t.notificationsParent}</h3>
              {unreadCount > 0 && (
                <Badge style={{ backgroundColor: '#D4AF37', color: 'white' }}>{unreadCount} {t.newLabel}</Badge>
              )}
            </div>
            <Button
              onClick={() => setShowNotifications(false)}
              size="icon"
              variant="ghost"
              className="hover:bg-amber-100"
              style={{ color: '#B8860B' }}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Mark All as Read */}
          {unreadCount > 0 && (
            <div className="p-3 border-b bg-amber-50" style={{ borderBottomColor: '#D4AF37' }}>
              <Button
                onClick={handleMarkAllAsRead}
                size="sm"
                variant="outline"
                className="w-full hover:bg-amber-100"
                style={{ color: '#B8860B', borderColor: '#D4AF37' }}
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                {t.markAllRead}
              </Button>
            </div>
          )}

          {/* Notifications List */}
          <div className="overflow-y-auto max-h-[480px]">
            {notifications.length === 0 ? (
              <div className="p-8 text-center" style={{ color: '#B8860B' }}>
                <Bell className="w-12 h-12 mx-auto mb-3" style={{ color: '#D4AF37', opacity: 0.5 }} />
                <p>{t.noData}</p>
              </div>
            ) : (
              <div className="divide-y divide-gray-200">
                {notifications.map((notif) => (
                  <div
                    key={notif.id}
                    className={`p-4 hover:bg-amber-50 transition-colors ${
                      !notif.isRead ? 'bg-amber-50' : ''
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-3xl flex-shrink-0">
                        {getNotificationIcon(notif.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h4 className="text-sm" style={{ color: '#B8860B' }}>
                            {notif.title}
                          </h4>
                          {!notif.isRead && (
                            <div className="w-2 h-2 rounded-full flex-shrink-0 mt-1" style={{ backgroundColor: '#D4AF37' }} />
                          )}
                        </div>
                        <p className="text-xs text-gray-600 mb-2">
                          {notif.message}
                        </p>
                        <p className="text-xs text-gray-500 mb-3">
                          {notif.timestamp}
                        </p>

                        {/* Action Buttons */}
                        <div className="flex gap-2">
                          {!notif.isRead && (
                            <Button
                              onClick={() => handleMarkAsRead(notif.id)}
                              size="sm"
                              variant="outline"
                              className="text-xs h-7"
                            >
                              {t.markAllRead}
                            </Button>
                          )}
                          {notif.requiresResponse && !notif.isRead && (
                            <Button
                              onClick={() => handleRespond(notif.id)}
                              size="sm"
                              className="text-xs h-7 text-white hover:opacity-90"
                              style={{ backgroundColor: '#D4AF37' }}
                            >
                              <Heart className="w-3 h-3 mr-1" />
                              {t.respond}
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Quick Stats */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="bg-white shadow-md" style={{ border: '2px solid #D4AF37' }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm" style={{ color: '#B8860B' }}>{t.overallProgress}</CardTitle>
              <TrendingUp className="h-4 w-4" style={{ color: '#D4AF37' }} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl" style={{ color: '#D4AF37' }}>{overallProgress}%</div>
              <Progress value={overallProgress} className="mt-2" style={{ backgroundColor: '#F5E6D3' }} />
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md" style={{ border: '2px solid #D4AF37' }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm" style={{ color: '#B8860B' }}>{t.quizzesCompleted}</CardTitle>
              <Brain className="h-4 w-4" style={{ color: '#D4AF37' }} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl" style={{ color: '#D4AF37' }}>12</div>
              <p className="text-xs text-gray-500 mt-1">{language === 'ar' ? 'من أصل 20 إجمالي' : 'out of 20 total'}</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md" style={{ border: '2px solid #D4AF37' }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm" style={{ color: '#B8860B' }}>{t.storiesRead}</CardTitle>
              <BookOpen className="h-4 w-4" style={{ color: '#D4AF37' }} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl" style={{ color: '#D4AF37' }}>8</div>
              <p className="text-xs text-gray-500 mt-1">{language === 'ar' ? 'من أصل 15 إجمالي' : 'out of 15 total'}</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md" style={{ border: '2px solid #D4AF37' }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm" style={{ color: '#B8860B' }}>{t.thisWeek}</CardTitle>
              <Clock className="h-4 w-4" style={{ color: '#D4AF37' }} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl" style={{ color: '#D4AF37' }}>245 {t.minutes}</div>
              <p className="text-xs text-gray-500 mt-1">~35 {t.minutes}/{language === 'ar' ? 'يوم' : 'day'}</p>
            </CardContent>
          </Card>
        </div>

        {/* Child Info */}
        <Card className="bg-gradient-to-br from-amber-50 to-yellow-50 shadow-md" style={{ border: '3px solid #D4AF37' }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2" style={{ color: '#B8860B' }}>
              <Award className="w-5 h-5" style={{ color: '#D4AF37' }} />
              {language === 'ar' ? `رحلة التعلم لـ ${childName}` : `${childName}'s Learning Journey`}
            </CardTitle>
            <CardDescription>{language === 'ar' ? 'تتبع تقدم وإنجازات طفلك' : 'Track your child\'s progress and achievements'}</CardDescription>
          </CardHeader>
        </Card>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">{t.overview}</TabsTrigger>
            <TabsTrigger value="quizzes">{language === 'ar' ? 'نتائج الاختبارات' : 'Quiz Results'}</TabsTrigger>
            <TabsTrigger value="activity">{language === 'ar' ? 'سجل النشاط' : 'Activity Log'}</TabsTrigger>
            <TabsTrigger value="offline">{t.offlineActivitiesParent}</TabsTrigger>
            <TabsTrigger value="settings">{t.settingsParent}</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              {/* Weekly Activity Chart */}
              <Card className="bg-white shadow-md" style={{ border: '2px solid #D4AF37' }}>
                <CardHeader>
                  <CardTitle style={{ color: '#B8860B' }}>{t.weeklyActivityTime}</CardTitle>
                  <CardDescription>{language === 'ar' ? 'الوقت المستغرق في التعلم (دقائق)' : 'Time spent learning (minutes)'}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <LineChart data={weeklyActivity}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="minutes" stroke="#D4AF37" strokeWidth={3} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Quiz Performance */}
              <Card className="bg-white shadow-md" style={{ border: '2px solid #D4AF37' }}>
                <CardHeader>
                  <CardTitle style={{ color: '#B8860B' }}>{t.quizPerformance}</CardTitle>
                  <CardDescription>{language === 'ar' ? 'الدرجات حسب الموضوع' : 'Scores by topic'}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={quizScores}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="topic" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="score" fill="#D4AF37" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Time & Topic Analytics */}
            <div className="grid gap-4 md:grid-cols-2">
              {/* Time Spent by Activity Type - Bar Chart */}
              <Card className="bg-white shadow-md" style={{ border: '2px solid #D4AF37' }}>
                <CardHeader>
                  <CardTitle style={{ color: '#B8860B' }}>{t.timeByActivityType}</CardTitle>
                  <CardDescription>{language === 'ar' ? 'إجمالي الدقائق المستغرقة في كل نوع نشاط' : 'Total minutes spent on each activity type'}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={timeByActivity} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis type="category" dataKey="activity" width={100} />
                      <Tooltip />
                      <Bar dataKey="minutes" radius={[0, 8, 8, 0]}>
                        {timeByActivity.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                      {language === 'ar' ? 'إجمالي وقت التعلم: ' : 'Total learning time: '}<span style={{ color: '#D4AF37' }}>245 {t.minutes}</span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Topic Focus - Pie Chart */}
              <Card className="bg-white shadow-md" style={{ border: '2px solid #D4AF37' }}>
                <CardHeader>
                  <CardTitle style={{ color: '#B8860B' }}>{t.topicFocusDistribution}</CardTitle>
                  <CardDescription>{language === 'ar' ? 'النسبة المئوية للوقت المستغرق في كل موضوع' : 'Percentage of time spent on each topic'}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={topicFocus}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ topic, value }) => `${topic}: ${value}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {topicFocus.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="mt-4 pt-4 border-t border-gray-200 space-y-2">
                    {topicFocus.map((topic, index) => (
                      <div key={index} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <div 
                            className="w-3 h-3 rounded-full" 
                            style={{ backgroundColor: COLORS[index] }}
                          />
                          <span className="text-gray-700">{topic.topic}</span>
                        </div>
                        <span className="text-gray-600">{topic.value}%</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Achievements */}
            <Card>
              <CardHeader>
                <CardTitle>{language === 'ar' ? 'إنجازات حديثة' : 'Recent Achievements'}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge style={{ backgroundColor: '#D4AF37', color: 'white' }}>🏆 {t.badgeQuizMaster}</Badge>
                  <Badge style={{ backgroundColor: '#B8860B', color: 'white' }}>📚 {t.badgeBookworm}</Badge>
                  <Badge style={{ backgroundColor: '#C5B358', color: 'white' }}>🎯 {t.badgePerfectScore}</Badge>
                  <Badge style={{ backgroundColor: '#85754E', color: 'white' }}>⚡ {language === 'ar' ? 'متعلم سريع' : 'Quick Learner'}</Badge>
                  <Badge style={{ backgroundColor: '#DAA520', color: 'white' }}>🌟 {language === 'ar' ? 'سلسلة 5 أيام' : '5-Day Streak'}</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Send Encouragement Message */}
            <Card className="bg-gradient-to-r from-amber-50 to-yellow-50 shadow-lg" style={{ border: '4px solid #D4AF37' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2" style={{ color: '#B8860B' }}>
                  <Heart className="w-6 h-6" />
                  {language === 'ar' ? `إرسال تشجيع إلى ${childName}` : `Send Encouragement to ${childName}`}
                </CardTitle>
                <CardDescription>
                  {language === 'ar' ? 'اكتب رسالة إيجابية قصيرة لتحفيز طفلك!' : 'Write a short positive note to motivate your child!'}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Textarea
                    placeholder={language === 'ar' ? 'اكتب رسالة التشجيع الخاصة بك...' : 'Type your encouragement message...'}
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    className="min-h-[100px]"
                    style={{ borderColor: '#D4AF37' }}
                    maxLength={200}
                  />
                  <p className="text-xs text-gray-500 text-right">
                    {messageText.length}/200 {language === 'ar' ? 'حرفاً' : 'characters'}
                  </p>
                </div>

                <Button 
                  onClick={handleSendMessage}
                  className="w-full text-white gap-2 hover:opacity-90"
                  style={{ background: 'linear-gradient(to right, #D4AF37, #B8860B)' }}
                  disabled={!messageText.trim()}
                >
                  <Send className="w-4 h-4" />
                  {t.sendMessage}
                </Button>

                {/* Recently Sent Messages */}
                <div className="mt-6 pt-6 border-t-2" style={{ borderColor: '#D4AF37' }}>
                  <h4 className="text-sm text-gray-700 mb-3">{t.recentMessages}:</h4>
                  <div className="space-y-2 max-h-[200px] overflow-y-auto">
                    {sentMessages.map((msg) => (
                      <div 
                        key={msg.id} 
                        className="p-3 bg-white rounded-lg border shadow-sm"
                        style={{ borderColor: '#F5E6D3' }}
                      >
                        <p className="text-sm text-gray-800">{msg.text}</p>
                        <p className="text-xs text-gray-500 mt-1">{msg.timestamp}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Quiz Results Tab */}
          <TabsContent value="quizzes" className="space-y-4">
            <Card className="bg-white shadow-md" style={{ border: '2px solid #D4AF37' }}>
              <CardHeader>
                <CardTitle>{language === 'ar' ? 'ملخص نتائج الاختبارات' : 'Quiz Results Summary'}</CardTitle>
                <CardDescription>{language === 'ar' ? 'تفصيل مفصل لأداء الاختبار' : 'Detailed breakdown of quiz performance'}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {quizScores.map((quiz, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-amber-50 rounded-lg">
                      <div>
                        <p className="text-slate-800">{quiz.topic}</p>
                        <p className="text-xs text-slate-500">Completed recently</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl" style={{ color: '#D4AF37' }}>{quiz.score}%</p>
                        <Badge 
                          variant={quiz.score >= 90 ? 'default' : quiz.score >= 70 ? 'secondary' : 'outline'}
                          style={quiz.score >= 90 ? { backgroundColor: '#D4AF37', color: 'white' } : quiz.score >= 70 ? { backgroundColor: '#B8860B', color: 'white' } : {}}
                        >
                          {quiz.score >= 90 ? 'Excellent' : quiz.score >= 70 ? 'Good' : 'Keep Trying'}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Activity Log Tab */}
          <TabsContent value="activity" className="space-y-4">
            <Card className="bg-white shadow-md" style={{ border: '2px solid #D4AF37' }}>
              <CardHeader>
                <CardTitle style={{ color: '#B8860B' }}>{t.recentActivity}</CardTitle>
                <CardDescription>{language === 'ar' ? 'أحدث الأنشطة التعليمية' : 'Latest learning activities'}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                      <div className="flex-1">
                        <p className="text-slate-800">{activity.activity}</p>
                        <p className="text-xs text-slate-500">{activity.time}</p>
                      </div>
                      {activity.score && (
                        <Badge style={{ backgroundColor: '#D4AF37', color: 'white' }}>{activity.score}%</Badge>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Offline Activities Tab */}
          <TabsContent value="offline" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>{t.suggestActivities}</CardTitle>
                <CardDescription>{language === 'ar' ? 'تحديات العالم الحقيقي لتوسيع التعلم خارج الشاشة' : 'Real-world challenges to extend learning beyond the screen'}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {activities.map((activity) => {
                    const IconComponent = activity.icon;
                    const difficultyColor = 
                      activity.difficulty === 'Easy' ? 'bg-amber-100 text-amber-700' :
                      activity.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-amber-200 text-amber-800';
                    
                    return (
                      <Card 
                        key={activity.id} 
                        className={`border-2 ${
                          activity.status === 'completed' ? 'border-amber-300 bg-amber-50' :
                          activity.status === 'assigned' ? 'border-yellow-300 bg-yellow-50' :
                          'border-gray-200'
                        }`}
                      >
                        <CardContent className="p-5">
                          <div className="flex items-start gap-3 mb-3">
                            <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(to bottom right, #D4AF37, #B8860B)' }}>
                              <IconComponent className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg text-gray-900 mb-1">{activity.title}</h3>
                              <div className="flex items-center gap-2 flex-wrap">
                                <Badge variant="outline" className={difficultyColor}>
                                  {activity.difficulty}
                                </Badge>
                                <Badge variant="outline" className="bg-amber-50" style={{ color: '#B8860B' }}>
                                  {activity.category}
                                </Badge>
                                <span className="text-xs text-gray-500">{activity.duration}</span>
                              </div>
                            </div>
                          </div>

                          <p className="text-sm text-gray-600 mb-4">{activity.description}</p>

                          {/* Status Badge */}
                          <div className="mb-3">
                            {activity.status === 'completed' && (
                              <div className="flex items-center gap-2 text-sm" style={{ color: '#D4AF37' }}>
                                <CheckCircle className="w-4 h-4" />
                                <span>Completed</span>
                              </div>
                            )}
                            {activity.status === 'assigned' && (
                              <div className="flex items-center gap-2 text-sm" style={{ color: '#B8860B' }}>
                                <Check className="w-4 h-4" />
                                <span>Assigned to {childName}</span>
                              </div>
                            )}
                            {activity.status === 'suggested' && (
                              <div className="flex items-center gap-2 text-gray-500 text-sm">
                                <Lightbulb className="w-4 h-4" />
                                <span>Ready to assign</span>
                              </div>
                            )}
                          </div>

                          {/* Action Buttons */}
                          {activity.status !== 'completed' && (
                            <div className="flex gap-2">
                              {activity.status === 'suggested' && (
                                <Button
                                  onClick={() => handleApprove(activity.id)}
                                  size="sm"
                                  className="flex-1 text-white hover:opacity-90"
                                  style={{ backgroundColor: '#D4AF37' }}
                                >
                                  Assign to {childName}
                                </Button>
                              )}
                              <Button
                                onClick={() => handleCustomize(activity.id)}
                                size="sm"
                                variant="outline"
                                className="gap-1"
                              >
                                <Edit className="w-3 h-3" />
                                Customize
                              </Button>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Activity Summary */}
            <Card className="border-slate-400">
              <CardHeader>
                <CardTitle>Activity Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-3xl text-slate-700">
                      {activities.filter(a => a.status === 'suggested').length}
                    </p>
                    <p className="text-sm text-gray-600">Suggested</p>
                  </div>
                  <div>
                    <p className="text-3xl" style={{ color: '#D4AF37' }}>
                      {activities.filter(a => a.status === 'assigned').length}
                    </p>
                    <p className="text-sm text-gray-600">Assigned</p>
                  </div>
                  <div>
                    <p className="text-3xl" style={{ color: '#D4AF37' }}>
                      {activities.filter(a => a.status === 'completed').length}
                    </p>
                    <p className="text-sm text-gray-600">Completed</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-4">
            {/* Unsaved Changes Alert */}
            {hasUnsavedChanges && (
              <Card className="border-2 bg-amber-50" style={{ borderColor: '#D4AF37' }}>
                <CardContent className="p-4">
                  <p className="text-sm" style={{ color: '#B8860B' }}>
                    ⚠️ You have unsaved changes. Click "Save Settings" to apply them.
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Language & Content Settings */}
            <Card className="border-2 bg-white shadow-md" style={{ borderColor: '#D4AF37' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-amber-800">
                  <Globe className="w-5 h-5" />
                  Language & Content
                </CardTitle>
                <CardDescription>Configure language and content preferences for {childName}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Language */}
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="language" className="text-base">Language</Label>
                    <p className="text-sm text-gray-500">Choose the app interface language</p>
                  </div>
                  <Select
                    value={settings.language}
                    onValueChange={(value) => handleSettingChange('language', value)}
                  >
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">🇺🇸 English</SelectItem>
                      <SelectItem value="es">🇪🇸 Spanish</SelectItem>
                      <SelectItem value="fr">🇫🇷 French</SelectItem>
                      <SelectItem value="de">🇩🇪 German</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Content Filter */}
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="contentFilter" className="text-base">Content Filter</Label>
                    <p className="text-sm text-gray-500">Control what content is available</p>
                  </div>
                  <Select
                    value={settings.contentFilter}
                    onValueChange={(value) => handleSettingChange('contentFilter', value)}
                  >
                    <SelectTrigger className="w-52">
                      <SelectValue placeholder="Select content filter" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="age-appropriate">Age-Appropriate (9-12)</SelectItem>
                      <SelectItem value="general">General (All Ages)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Learning Settings */}
            <Card className="border-2 bg-white shadow-md" style={{ borderColor: '#D4AF37' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2" style={{ color: '#B8860B' }}>
                  <Sliders className="w-5 h-5" />
                  Learning Experience
                </CardTitle>
                <CardDescription>Adjust difficulty and learning preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Difficulty */}
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="difficulty" className="text-base">Difficulty Level</Label>
                    <p className="text-sm text-gray-500">Set the challenge level for quizzes and activities</p>
                  </div>
                  <Select
                    value={settings.difficulty}
                    onValueChange={(value) => handleSettingChange('difficulty', value)}
                  >
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Select difficulty" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="easy">😊 Easy</SelectItem>
                      <SelectItem value="medium">😐 Medium</SelectItem>
                      <SelectItem value="hard">😤 Hard</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Sound Enabled */}
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="soundEnabled" className="text-base">Sound Effects</Label>
                    <p className="text-sm text-gray-500">Enable background music and sound effects</p>
                  </div>
                  <Switch
                    checked={settings.soundEnabled}
                    onCheckedChange={(value) => handleSettingChange('soundEnabled', value)}
                  />
                </div>

                {/* Voice Narration */}
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="voiceNarration" className="text-base flex items-center gap-2">
                      <Volume2 className="w-4 h-4" />
                      Voice Narration
                    </Label>
                    <p className="text-sm text-gray-500">Read stories and lessons aloud</p>
                  </div>
                  <Switch
                    checked={settings.voiceNarration}
                    onCheckedChange={(value) => handleSettingChange('voiceNarration', value)}
                  />
                </div>

                {/* Auto Save Progress */}
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="autoSaveProgress" className="text-base">Auto Save Progress</Label>
                    <p className="text-sm text-gray-500">Automatically save learning progress</p>
                  </div>
                  <Switch
                    checked={settings.autoSaveProgress}
                    onCheckedChange={(value) => handleSettingChange('autoSaveProgress', value)}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Parental Controls */}
            <Card className="border-2 bg-white shadow-md" style={{ borderColor: '#D4AF37' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2" style={{ color: '#B8860B' }}>
                  <Shield className="w-5 h-5" />
                  Parental Controls
                </CardTitle>
                <CardDescription>Manage screen time and monitoring settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Daily Time Limit */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label htmlFor="dailyTimeLimit" className="text-base flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Daily Time Limit
                      </Label>
                      <p className="text-sm text-gray-500">Maximum learning time per day</p>
                    </div>
                    <span className="text-lg text-amber-700">{settings.dailyTimeLimit} min</span>
                  </div>
                  <Slider
                    value={[settings.dailyTimeLimit]}
                    onValueChange={(value) => handleSettingChange('dailyTimeLimit', value[0])}
                    max={120}
                    min={15}
                    step={15}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>15 min</span>
                    <span>60 min</span>
                    <span>120 min</span>
                  </div>
                </div>

                {/* Parental Notifications */}
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="parentalNotifications" className="text-base flex items-center gap-2">
                      <Bell className="w-4 h-4" />
                      Real-time Notifications
                    </Label>
                    <p className="text-sm text-gray-500">Get instant alerts for important events</p>
                  </div>
                  <Switch
                    checked={settings.parentalNotifications}
                    onCheckedChange={(value) => handleSettingChange('parentalNotifications', value)}
                  />
                </div>

                {/* Weekly Reports */}
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="weeklyReports" className="text-base">Weekly Progress Reports</Label>
                    <p className="text-sm text-gray-500">Receive detailed weekly summaries via email</p>
                  </div>
                  <Switch
                    checked={settings.weeklyReports}
                    onCheckedChange={(value) => handleSettingChange('weeklyReports', value)}
                  />
                </div>

                {/* Achievement Alerts */}
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="achievementAlerts" className="text-base">Achievement Alerts</Label>
                    <p className="text-sm text-gray-500">Get notified when {childName} earns new badges</p>
                  </div>
                  <Switch
                    checked={settings.achievementAlerts}
                    onCheckedChange={(value) => handleSettingChange('achievementAlerts', value)}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Save & Reset Actions */}
            <Card className="border-2 bg-gradient-to-r from-amber-50 to-yellow-50 shadow-md" style={{ borderColor: '#D4AF37' }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-700">
                      {hasUnsavedChanges 
                        ? '⚠️ You have unsaved changes' 
                        : '✓ All settings are saved'}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Changes will be applied immediately to {childName}'s account
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Button
                      onClick={handleResetSettings}
                      size="sm"
                      variant="outline"
                      className="gap-2"
                    >
                      <X className="w-4 h-4" />
                      Reset to Defaults
                    </Button>
                    <Button
                      onClick={handleSaveSettings}
                      size="sm"
                      className="gap-2 text-white hover:opacity-90"
                      style={{ background: 'linear-gradient(to right, #D4AF37, #B8860B)' }}
                      disabled={!hasUnsavedChanges}
                    >
                      <Check className="w-4 h-4" />
                      Save Settings
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Profile Dialog */}
      <Dialog open={showProfile} onOpenChange={setShowProfile}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3">
              <Avatar className="w-12 h-12">
                <AvatarFallback className="text-white text-lg" style={{ background: 'linear-gradient(to right, #D4AF37, #B8860B)' }}>
                  {user.name.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div>
                <h2>Account & Privacy</h2>
                <p className="text-sm text-gray-500">Manage your profile and security settings</p>
              </div>
            </DialogTitle>
          </DialogHeader>

          <Tabs defaultValue="profile" className="mt-4">
            <TabsList className="grid w-full grid-cols-3" style={{ backgroundColor: '#F5E6D3' }}>
              <TabsTrigger value="profile" className="data-[state=active]:bg-white data-[state=active]:text-amber-900" style={{ color: '#B8860B' }}>Profile</TabsTrigger>
              <TabsTrigger value="privacy" className="data-[state=active]:bg-white data-[state=active]:text-amber-900" style={{ color: '#B8860B' }}>Privacy</TabsTrigger>
              <TabsTrigger value="security" className="data-[state=active]:bg-white data-[state=active]:text-amber-900" style={{ color: '#B8860B' }}>Security</TabsTrigger>
            </TabsList>

            {/* Profile Tab */}
            <TabsContent value="profile" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <UserCircle className="w-5 h-5" style={{ color: '#D4AF37' }} />
                      Personal Information
                    </CardTitle>
                    {!profileEditMode && (
                      <Button
                        onClick={() => setProfileEditMode(true)}
                        size="sm"
                        variant="outline"
                        className="gap-1"
                        style={{ borderColor: '#D4AF37', color: '#B8860B' }}
                      >
                        <Edit className="w-3 h-3" />
                        Edit
                      </Button>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {profileHasChanges && (
                    <div className="p-3 bg-amber-50 rounded-lg" style={{ border: '1px solid #D4AF37' }}>
                      <p className="text-sm" style={{ color: '#B8860B' }}>
                        ⚠️ You have unsaved changes
                      </p>
                    </div>
                  )}

                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="profile-name" style={{ color: '#B8860B' }}>Full Name</Label>
                      <Input
                        id="profile-name"
                        value={profileData.name}
                        onChange={(e) => handleProfileChange('name', e.target.value)}
                        disabled={!profileEditMode}
                        className={profileEditMode ? "border-amber-300 focus:border-amber-500" : ""}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="profile-email" className="flex items-center gap-2" style={{ color: '#B8860B' }}>
                        <Mail className="w-4 h-4" style={{ color: '#D4AF37' }} />
                        Email Address
                      </Label>
                      <Input
                        id="profile-email"
                        type="email"
                        value={profileData.email}
                        onChange={(e) => handleProfileChange('email', e.target.value)}
                        disabled={!profileEditMode}
                        className={profileEditMode ? "border-amber-300 focus:border-amber-500" : ""}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="profile-phone" className="flex items-center gap-2" style={{ color: '#B8860B' }}>
                        <Phone className="w-4 h-4" style={{ color: '#D4AF37' }} />
                        Phone Number
                      </Label>
                      <Input
                        id="profile-phone"
                        type="tel"
                        value={profileData.phone}
                        onChange={(e) => handleProfileChange('phone', e.target.value)}
                        disabled={!profileEditMode}
                        className={profileEditMode ? "border-amber-300 focus:border-amber-500" : ""}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="child-name" style={{ color: '#B8860B' }}>Child's Name</Label>
                        <Input
                          id="child-name"
                          value={profileData.childName}
                          onChange={(e) => handleProfileChange('childName', e.target.value)}
                          disabled={!profileEditMode}
                          className={profileEditMode ? "border-amber-300 focus:border-amber-500" : ""}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="child-age" style={{ color: '#B8860B' }}>Child's Age</Label>
                        <Input
                          id="child-age"
                          value={profileData.childAge}
                          onChange={(e) => handleProfileChange('childAge', e.target.value)}
                          disabled={!profileEditMode}
                          className={profileEditMode ? "border-amber-300 focus:border-amber-500" : ""}
                        />
                      </div>
                    </div>

                    <div className="p-3 rounded-lg" style={{ backgroundColor: '#FFF8E1', border: '1px solid #F5E6D3' }}>
                      <p className="text-sm" style={{ color: '#B8860B' }}>
                        Account created: <span style={{ color: '#8B7355' }}>{profileData.accountCreated}</span>
                      </p>
                    </div>
                  </div>

                  {profileEditMode && (
                    <div className="flex gap-2 pt-4">
                      <Button
                        onClick={() => {
                          setProfileEditMode(false);
                          setProfileHasChanges(false);
                        }}
                        variant="outline"
                        className="flex-1"
                        style={{ borderColor: '#D4AF37', color: '#B8860B' }}
                      >
                        Cancel
                      </Button>
                      <Button
                        onClick={handleSaveProfile}
                        className="flex-1 text-white gap-2 hover:opacity-90"
                        style={{ background: 'linear-gradient(to right, #D4AF37, #B8860B, #C5B358)' }}
                        disabled={!profileHasChanges}
                      >
                        <Save className="w-4 h-4" />
                        Save Changes
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Privacy Tab */}
            <TabsContent value="privacy" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5" style={{ color: '#D4AF37' }} />
                    Privacy Settings
                  </CardTitle>
                  <CardDescription>Control how your data is collected and used</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {privacyHasChanges && (
                    <div className="p-3 bg-amber-50 rounded-lg" style={{ border: '1px solid #D4AF37' }}>
                      <p className="text-sm" style={{ color: '#B8860B' }}>
                        ⚠️ You have unsaved changes
                      </p>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label className="text-base">Data Collection</Label>
                      <p className="text-sm text-gray-500">
                        Allow collection of usage data to improve the app
                      </p>
                    </div>
                    <Switch
                      checked={privacySettings.dataCollection}
                      onCheckedChange={(value) => handlePrivacyChange('dataCollection', value)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label className="text-base">Personalization</Label>
                      <p className="text-sm text-gray-500">
                        Personalize learning content based on activity
                      </p>
                    </div>
                    <Switch
                      checked={privacySettings.personalization}
                      onCheckedChange={(value) => handlePrivacyChange('personalization', value)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label className="text-base">Share Progress with Educators</Label>
                      <p className="text-sm text-gray-500">
                        Allow teachers to view your child's learning progress
                      </p>
                    </div>
                    <Switch
                      checked={privacySettings.shareProgress}
                      onCheckedChange={(value) => handlePrivacyChange('shareProgress', value)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label className="text-base flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Email Notifications
                      </Label>
                      <p className="text-sm text-gray-500">
                        Receive updates and reports via email
                      </p>
                    </div>
                    <Switch
                      checked={privacySettings.emailNotifications}
                      onCheckedChange={(value) => handlePrivacyChange('emailNotifications', value)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label className="text-base flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        SMS Notifications
                      </Label>
                      <p className="text-sm text-gray-500">
                        Receive important alerts via text message
                      </p>
                    </div>
                    <Switch
                      checked={privacySettings.smsNotifications}
                      onCheckedChange={(value) => handlePrivacyChange('smsNotifications', value)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label className="text-base">Third-Party Sharing</Label>
                      <p className="text-sm text-gray-500">
                        Share anonymized data with educational partners
                      </p>
                    </div>
                    <Switch
                      checked={privacySettings.thirdPartySharing}
                      onCheckedChange={(value) => handlePrivacyChange('thirdPartySharing', value)}
                    />
                  </div>

                  <div className="pt-4 border-t">
                    <Button
                      onClick={handleSavePrivacy}
                      className="w-full text-white gap-2"
                      style={{ background: 'linear-gradient(to right, #D4AF37, #B8860B, #C5B358)' }}
                      disabled={!privacyHasChanges}
                    >
                      <Save className="w-4 h-4" />
                      Save Privacy Settings
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-amber-50" style={{ border: '1px solid #D4AF37' }}>
                <CardContent className="p-4">
                  <p className="text-sm text-amber-800">
                    <strong>Note:</strong> We are committed to protecting your child's privacy. No personal data is sold to third parties.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Security Tab */}
            <TabsContent value="security" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lock className="w-5 h-5" style={{ color: '#D4AF37' }} />
                    Security Settings
                  </CardTitle>
                  <CardDescription>Manage password and account security</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Change Password Section */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label className="text-base flex items-center gap-2">
                          <Key className="w-4 h-4" style={{ color: '#D4AF37' }} />
                          Password
                        </Label>
                        <p className="text-sm text-gray-500">
                          Last changed 45 days ago
                        </p>
                      </div>
                      <Button
                        onClick={() => setShowChangePassword(!showChangePassword)}
                        variant="outline"
                        size="sm"
                        style={{ borderColor: '#D4AF37', color: '#B8860B' }}
                      >
                        {showChangePassword ? 'Cancel' : 'Change Password'}
                      </Button>
                    </div>

                    {showChangePassword && (
                      <Card className="bg-amber-50" style={{ border: '1px solid #D4AF37' }}>
                        <CardContent className="p-4 space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="current-password" style={{ color: '#B8860B' }}>Current Password</Label>
                            <div className="relative">
                              <Input
                                id="current-password"
                                type={showPasswords.current ? 'text' : 'password'}
                                value={passwordData.currentPassword}
                                onChange={(e) => setPasswordData(prev => ({ ...prev, currentPassword: e.target.value }))}
                                placeholder="Enter current password"
                              />
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                className="absolute right-0 top-0 h-full px-3"
                                onClick={() => setShowPasswords(prev => ({ ...prev, current: !prev.current }))}
                              >
                                {showPasswords.current ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                              </Button>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="new-password" style={{ color: '#B8860B' }}>New Password</Label>
                            <div className="relative">
                              <Input
                                id="new-password"
                                type={showPasswords.new ? 'text' : 'password'}
                                value={passwordData.newPassword}
                                onChange={(e) => setPasswordData(prev => ({ ...prev, newPassword: e.target.value }))}
                                placeholder="Enter new password (min. 8 characters)"
                              />
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                className="absolute right-0 top-0 h-full px-3"
                                onClick={() => setShowPasswords(prev => ({ ...prev, new: !prev.new }))}
                              >
                                {showPasswords.new ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                              </Button>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="confirm-password" style={{ color: '#B8860B' }}>Confirm New Password</Label>
                            <div className="relative">
                              <Input
                                id="confirm-password"
                                type={showPasswords.confirm ? 'text' : 'password'}
                                value={passwordData.confirmPassword}
                                onChange={(e) => setPasswordData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                                placeholder="Re-enter new password"
                              />
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                className="absolute right-0 top-0 h-full px-3"
                                onClick={() => setShowPasswords(prev => ({ ...prev, confirm: !prev.confirm }))}
                              >
                                {showPasswords.confirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                              </Button>
                            </div>
                          </div>

                          <Button
                            onClick={handleChangePassword}
                            className="w-full text-white gap-2"
                            style={{ background: 'linear-gradient(to right, #D4AF37, #B8860B, #C5B358)' }}
                            disabled={!passwordData.currentPassword || !passwordData.newPassword || !passwordData.confirmPassword}
                          >
                            <Lock className="w-4 h-4" />
                            Update Password
                          </Button>
                        </CardContent>
                      </Card>
                    )}
                  </div>

                  {/* Two-Factor Authentication */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="space-y-1">
                      <Label className="text-base" style={{ color: '#B8860B' }}>Two-Factor Authentication</Label>
                      <p className="text-sm text-gray-500">
                        Add an extra layer of security to your account
                      </p>
                      {twoFactorEnabled && (
                        <Badge className="mt-2" style={{ background: 'linear-gradient(to right, #D4AF37, #B8860B)', color: 'white' }}>Enabled ✓</Badge>
                      )}
                    </div>
                    <Switch
                      checked={twoFactorEnabled}
                      onCheckedChange={handleToggle2FA}
                    />
                  </div>

                  {/* Account Activity */}
                  <div className="pt-4 border-t">
                    <Label className="text-base mb-3 block" style={{ color: '#B8860B' }}>Recent Account Activity</Label>
                    <div className="space-y-2">
                      <div className="p-3 rounded-lg text-sm" style={{ backgroundColor: '#FFF8E1', border: '1px solid #F5E6D3' }}>
                        <p style={{ color: '#8B7355' }}>Last login: <strong style={{ color: '#B8860B' }}>Today at 9:30 AM</strong></p>
                        <p className="text-xs mt-1" style={{ color: '#A0826D' }}>Location: New York, US</p>
                      </div>
                      <div className="p-3 rounded-lg text-sm" style={{ backgroundColor: '#FFF8E1', border: '1px solid #F5E6D3' }}>
                        <p style={{ color: '#8B7355' }}>Previous login: <strong style={{ color: '#B8860B' }}>Yesterday at 7:15 PM</strong></p>
                        <p className="text-xs mt-1" style={{ color: '#A0826D' }}>Location: New York, US</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card style={{ border: '1px solid #F5E6D3', backgroundColor: '#FFF8E1' }}>
                <CardContent className="p-4">
                  <p className="text-sm" style={{ color: '#B8860B' }}>
                    <strong>Security Tip:</strong> Never share your password with anyone. We will never ask for your password via email or phone.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </div>
  );
}