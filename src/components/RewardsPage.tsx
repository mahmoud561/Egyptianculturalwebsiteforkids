import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowLeft, Star, Trophy, Award, Crown, Sparkles, Zap } from 'lucide-react';
import { User } from '../App';
import { motion } from 'motion/react';
import { Progress } from './ui/progress';

interface RewardsPageProps {
  user: User;
  onBack: () => void;
  earnedBadges: string[];
  totalStars: number;
  stats: {
    quizzesCompleted: number;
    storiesRead: number;
    lessonsWatched: number;
    gamesPlayed: number;
  };
}

interface BadgeData {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  requirement: string;
  earned: boolean;
}

export function RewardsPage({ user, onBack, earnedBadges, totalStars, stats }: RewardsPageProps) {
  const allBadges: BadgeData[] = [
    {
      id: 'first-quiz',
      name: 'Quiz Starter',
      description: 'Complete your first quiz',
      icon: '🎯',
      color: 'from-blue-400 to-blue-600',
      requirement: 'Complete 1 quiz',
      earned: earnedBadges.includes('first-quiz')
    },
    {
      id: 'quiz-master',
      name: 'Quiz Master',
      description: 'Complete 5 quizzes',
      icon: '🧠',
      color: 'from-purple-400 to-purple-600',
      requirement: 'Complete 5 quizzes',
      earned: earnedBadges.includes('quiz-master')
    },
    {
      id: 'perfect-score',
      name: 'Perfect Scholar',
      description: 'Get 100% on a quiz',
      icon: '💯',
      color: 'from-green-400 to-green-600',
      requirement: 'Score 100% on any quiz',
      earned: earnedBadges.includes('perfect-score')
    },
    {
      id: 'story-reader',
      name: 'Story Explorer',
      description: 'Read your first story',
      icon: '📚',
      color: 'from-amber-400 to-orange-600',
      requirement: 'Read 1 story',
      earned: earnedBadges.includes('story-reader')
    },
    {
      id: 'bookworm',
      name: 'Bookworm',
      description: 'Read 10 stories',
      icon: '🐛',
      color: 'from-pink-400 to-pink-600',
      requirement: 'Read 10 stories',
      earned: earnedBadges.includes('bookworm')
    },
    {
      id: 'lesson-learner',
      name: 'Eager Learner',
      description: 'Watch your first lesson',
      icon: '🎬',
      color: 'from-red-400 to-orange-600',
      requirement: 'Watch 1 lesson',
      earned: earnedBadges.includes('lesson-learner')
    },
    {
      id: 'knowledge-seeker',
      name: 'Knowledge Seeker',
      description: 'Watch all lessons',
      icon: '🔍',
      color: 'from-cyan-400 to-blue-600',
      requirement: 'Watch all 4 lessons',
      earned: earnedBadges.includes('knowledge-seeker')
    },
    {
      id: 'game-master',
      name: 'Sorting Champion',
      description: 'Get perfect score in sorting game',
      icon: '🎮',
      color: 'from-indigo-400 to-purple-600',
      requirement: 'Perfect score in sorting',
      earned: earnedBadges.includes('game-master')
    },
    {
      id: 'star-collector',
      name: 'Star Collector',
      description: 'Earn 100 stars',
      icon: '⭐',
      color: 'from-yellow-400 to-amber-600',
      requirement: 'Collect 100 stars',
      earned: earnedBadges.includes('star-collector')
    },
    {
      id: 'pharaoh',
      name: 'Young Pharaoh',
      description: 'Earn all badges',
      icon: '👑',
      color: 'from-amber-500 to-yellow-600',
      requirement: 'Earn all other badges',
      earned: earnedBadges.includes('pharaoh')
    },
    {
      id: 'dedication',
      name: 'Dedicated Explorer',
      description: 'Visit 5 days in a row',
      icon: '🔥',
      color: 'from-orange-400 to-red-600',
      requirement: '5-day streak',
      earned: earnedBadges.includes('dedication')
    },
    {
      id: 'speed-demon',
      name: 'Speed Demon',
      description: 'Complete a quiz in under 2 minutes',
      icon: '⚡',
      color: 'from-lime-400 to-green-600',
      requirement: 'Fast quiz completion',
      earned: earnedBadges.includes('speed-demon')
    },
  ];

  const earnedCount = allBadges.filter(b => b.earned).length;
  const totalBadges = allBadges.length;
  const badgeProgress = (earnedCount / totalBadges) * 100;

  const levels = [
    { name: 'Explorer', stars: 0, icon: '🔍' },
    { name: 'Scholar', stars: 50, icon: '📖' },
    { name: 'Expert', stars: 150, icon: '🎓' },
    { name: 'Master', stars: 300, icon: '🏆' },
    { name: 'Pharaoh', stars: 500, icon: '👑' },
  ];

  const currentLevel = [...levels].reverse().find(level => totalStars >= level.stars) || levels[0];
  const nextLevel = levels[levels.findIndex(l => l.name === currentLevel.name) + 1];

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button
            onClick={onBack}
            variant="ghost"
            className="gap-2"
            style={{ color: '#B8860B' }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
        </div>

        {/* Title Section */}
        <div className="rounded-3xl p-8 text-white shadow-2xl mb-8" style={{ background: 'linear-gradient(to right, #D4AF37, #B8860B, #C5B358)' }}>
          <div className="flex items-center gap-4 mb-6">
            <div className="text-7xl">👑</div>
            <div>
              <h1 className="text-5xl mb-2">{user.name}'s Achievements</h1>
              <p className="text-xl" style={{ color: '#FFF8E1' }}>
                Keep learning to unlock amazing rewards!
              </p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center">
              <div className="text-4xl mb-2">⭐</div>
              <div className="text-3xl mb-1">{totalStars}</div>
              <div className="text-sm" style={{ color: '#FFF8E1' }}>Total Stars</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center">
              <div className="text-4xl mb-2">🏅</div>
              <div className="text-3xl mb-1">{earnedCount}/{totalBadges}</div>
              <div className="text-sm" style={{ color: '#FFF8E1' }}>Badges Earned</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center">
              <div className="text-4xl mb-2">{currentLevel.icon}</div>
              <div className="text-3xl mb-1">{currentLevel.name}</div>
              <div className="text-sm" style={{ color: '#FFF8E1' }}>Current Level</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center">
              <div className="text-4xl mb-2">📊</div>
              <div className="text-3xl mb-1">{Math.round(badgeProgress)}%</div>
              <div className="text-sm" style={{ color: '#FFF8E1' }}>Complete</div>
            </div>
          </div>
        </div>

        {/* Level Progress */}
        <Card className="mb-8 border-4 shadow-xl" style={{ borderColor: '#D4AF37' }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2" style={{ color: '#B8860B' }}>
              <Crown className="w-6 h-6" style={{ color: '#D4AF37' }} />
              Level Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 mb-4">
              <div className="text-5xl">{currentLevel.icon}</div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl" style={{ color: '#B8860B' }}>Level: {currentLevel.name}</span>
                  {nextLevel && (
                    <span className="text-sm text-gray-600">
                      Next: {nextLevel.name} ({nextLevel.stars} stars)
                    </span>
                  )}
                </div>
                <Progress 
                  value={nextLevel ? ((totalStars - currentLevel.stars) / (nextLevel.stars - currentLevel.stars)) * 100 : 100} 
                  className="h-4"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>{totalStars} stars</span>
                  {nextLevel && <span>{nextLevel.stars - totalStars} more to next level!</span>}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Activity Stats */}
        <Card className="mb-8 border-4 shadow-xl" style={{ borderColor: '#D4AF37' }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2" style={{ color: '#B8860B' }}>
              <Sparkles className="w-6 h-6" />
              Your Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-amber-50 rounded-xl p-4 border-2 text-center" style={{ borderColor: '#D4AF37' }}>
                <div className="text-5xl mb-2">📝</div>
                <div className="text-3xl mb-1" style={{ color: '#D4AF37' }}>{stats.quizzesCompleted}</div>
                <div className="text-sm text-gray-600">Quizzes Done</div>
              </div>
              <div className="bg-green-50 rounded-xl p-4 border-2 border-green-200 text-center">
                <div className="text-5xl mb-2">📖</div>
                <div className="text-3xl text-green-700 mb-1">{stats.storiesRead}</div>
                <div className="text-sm text-gray-600">Stories Read</div>
              </div>
              <div className="bg-orange-50 rounded-xl p-4 border-2 border-orange-200 text-center">
                <div className="text-5xl mb-2">🎬</div>
                <div className="text-3xl text-orange-700 mb-1">{stats.lessonsWatched}</div>
                <div className="text-sm text-gray-600">Lessons Watched</div>
              </div>
              <div className="bg-purple-50 rounded-xl p-4 border-2 border-purple-200 text-center">
                <div className="text-5xl mb-2">🎮</div>
                <div className="text-3xl text-purple-700 mb-1">{stats.gamesPlayed}</div>
                <div className="text-sm text-gray-600">Games Played</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Badges Section */}
        <div className="mb-6">
          <h2 className="text-3xl mb-4 flex items-center gap-2" style={{ color: '#B8860B' }}>
            <Award className="w-8 h-8" style={{ color: '#D4AF37' }} />
            Badge Collection
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allBadges.map((badge, index) => (
            <motion.div
              key={badge.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card 
                className={`h-full ${
                  badge.earned 
                    ? 'border-4 border-amber-400 shadow-xl' 
                    : 'border-2 border-gray-300 opacity-60'
                }`}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br ${badge.color} flex items-center justify-center text-5xl ${
                    !badge.earned && 'grayscale opacity-50'
                  }`}>
                    {badge.icon}
                  </div>
                  <h3 className={`text-lg mb-2 ${badge.earned ? 'text-gray-800' : 'text-gray-500'}`}>
                    {badge.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {badge.description}
                  </p>
                  <Badge 
                    variant={badge.earned ? 'default' : 'secondary'}
                    className={badge.earned ? 'bg-green-600' : 'bg-gray-400'}
                  >
                    {badge.earned ? '✓ Earned!' : '🔒 Locked'}
                  </Badge>
                  <p className="text-xs text-gray-500 mt-2">
                    {badge.requirement}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Motivational Message */}
        <Card className="mt-8 border-4 shadow-xl" style={{ borderColor: '#D4AF37', background: 'linear-gradient(to bottom right, #FFF8E1, #FFEFC5)' }}>
          <CardContent className="p-6 text-center">
            <div className="text-6xl mb-4">🌟</div>
            <h3 className="text-2xl mb-2" style={{ color: '#B8860B' }}>Keep Up the Great Work!</h3>
            <p className="text-lg" style={{ color: '#8B7355' }}>
              You're doing an amazing job learning about Ancient Egypt, {user.name}! 
              Complete more activities to unlock all the badges and become a true Pharaoh! 👑
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}