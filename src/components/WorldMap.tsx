import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowLeft, Star, Trophy, Lock, CheckCircle, MapPin } from 'lucide-react';
import { User } from '../App';
import { motion } from 'motion/react';

interface WorldMapProps {
  user: User;
  onLogout: () => void;
  onNavigate: (destination: 'quizzes' | 'stories' | 'lessons' | 'games' | 'rewards') => void;
  onBack: () => void;
  totalStars: number;
  earnedBadgesCount: number;
  stats: {
    quizzesCompleted: number;
    storiesRead: number;
    lessonsWatched: number;
    gamesPlayed: number;
  };
}

interface Mission {
  id: string;
  name: string;
  icon: string;
  description: string;
  color: string;
  bgGradient: string;
  destination: 'quizzes' | 'stories' | 'lessons' | 'games';
  completed: number;
  total: number;
  stars: number;
  position: { x: string; y: string };
  unlocked: boolean;
}

export function WorldMap({ user, onLogout, onNavigate, onBack, totalStars, earnedBadgesCount, stats }: WorldMapProps) {
  const missions: Mission[] = [
    {
      id: 'pyramids',
      name: 'Pyramid of Knowledge',
      icon: '🔺',
      description: 'Test your Egyptian knowledge with exciting quizzes!',
      color: 'border-blue-500',
      bgGradient: 'from-blue-400 to-cyan-500',
      destination: 'quizzes',
      completed: stats.quizzesCompleted,
      total: 10,
      stars: stats.quizzesCompleted * 8,
      position: { x: '10%', y: '10%' },
      unlocked: true
    },
    {
      id: 'library',
      name: 'Ancient Library',
      icon: '📚',
      description: 'Discover fascinating Egyptian stories and legends',
      color: 'border-orange-500',
      bgGradient: 'from-orange-400 to-amber-500',
      destination: 'stories',
      completed: stats.storiesRead,
      total: 15,
      stars: stats.storiesRead * 15,
      position: { x: '58%', y: '8%' },
      unlocked: totalStars >= 20
    },
    {
      id: 'market',
      name: 'Pharaoh\'s Market',
      icon: '🎯',
      description: 'Play fun sorting and matching games',
      color: 'border-green-500',
      bgGradient: 'from-green-400 to-emerald-500',
      destination: 'games',
      completed: stats.gamesPlayed,
      total: 5,
      stars: stats.gamesPlayed * 20,
      position: { x: '55%', y: '45%' },
      unlocked: totalStars >= 100
    }
  ];

  const totalProgress = missions.reduce((sum, m) => sum + m.completed, 0);
  const maxProgress = missions.reduce((sum, m) => sum + m.total, 0);
  const overallProgress = Math.round((totalProgress / maxProgress) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-amber-100 to-orange-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button
              onClick={onBack}
              variant="ghost"
              className="gap-2 text-white hover:bg-white/20"
            >
              <ArrowLeft className="w-4 h-4" />
              Home
            </Button>
            
            <div className="flex items-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" />
                <span className="text-white text-lg">{totalStars}</span>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-300" />
                <span className="text-white text-lg">{earnedBadgesCount}</span>
              </div>
              
              <Button
                onClick={onLogout}
                variant="ghost"
                className="text-white hover:bg-white/20"
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Card className="border-4 border-amber-400 bg-gradient-to-r from-amber-50 to-yellow-50 shadow-2xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-6xl">🗺️</div>
                  <div>
                    <h1 className="text-3xl text-amber-800 mb-1">
                      Welcome to Ancient Egypt, {user.name}!
                    </h1>
                    <p className="text-lg text-amber-700">
                      Choose a location to begin your adventure
                    </p>
                  </div>
                </div>
                
                <Button
                  onClick={() => onNavigate('rewards')}
                  className="gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-lg px-6 py-6"
                >
                  <Trophy className="w-5 h-5" />
                  My Rewards
                </Button>
              </div>
              
              {/* Progress Bar */}
              <div className="mt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-amber-700">Overall Progress</span>
                  <span className="text-sm text-amber-700">{overallProgress}%</span>
                </div>
                <div className="bg-amber-200 rounded-full h-4 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${overallProgress}%` }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="bg-gradient-to-r from-amber-500 to-orange-500 h-full rounded-full"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* World Map */}
        <div className="relative bg-gradient-to-br from-yellow-50 to-amber-50 rounded-3xl border-8 border-amber-400 shadow-2xl p-8" style={{ height: '700px' }}>
          {/* Background Decorations */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 text-9xl">🔺</div>
            <div className="absolute top-20 right-20 text-9xl">🏛️</div>
            <div className="absolute bottom-10 left-20 text-9xl">🐫</div>
            <div className="absolute bottom-20 right-10 text-9xl">☀️</div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl opacity-5">
              🗺️
            </div>
          </div>

          {/* Nile River Path */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
            <path
              d="M 10% 20% Q 30% 40%, 50% 50% T 90% 80%"
              stroke="#60A5FA"
              strokeWidth="8"
              fill="none"
              strokeDasharray="10,5"
              opacity="0.3"
            />
          </svg>

          {/* Mission Locations */}
          <div className="relative w-full h-full">
            {missions.map((mission, index) => (
              <motion.div
                key={mission.id}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.2, type: 'spring', bounce: 0.3, duration: 0.5 }}
                className="absolute"
                style={{ 
                  left: mission.position.x, 
                  top: mission.position.y,
                  transform: 'translate(0, 0)'
                }}
              >
                <Card
                  className={`w-72 ${mission.color} border-4 shadow-xl transition-shadow cursor-pointer ${
                    !mission.unlocked ? 'opacity-60' : 'hover:shadow-2xl'
                  }`}
                  onClick={() => mission.unlocked && onNavigate(mission.destination)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${mission.bgGradient} flex items-center justify-center text-4xl shadow-lg flex-shrink-0`}>
                        {mission.icon}
                      </div>
                      
                      {!mission.unlocked ? (
                        <div className="bg-gray-500 text-white rounded-full p-2 flex-shrink-0">
                          <Lock className="w-5 h-5" />
                        </div>
                      ) : mission.completed > 0 ? (
                        <div className="bg-green-500 text-white rounded-full p-2 flex-shrink-0">
                          <CheckCircle className="w-5 h-5" />
                        </div>
                      ) : null}
                    </div>

                    <h3 className="text-xl mb-2 text-gray-800">{mission.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{mission.description}</p>

                    {mission.unlocked ? (
                      <>
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                            <span className="text-sm text-gray-700">{mission.stars} stars earned</span>
                          </div>
                        </div>

                        <div className="mb-3">
                          <div className="flex justify-between text-xs text-gray-600 mb-1">
                            <span>Progress</span>
                            <span>{mission.completed}/{mission.total}</span>
                          </div>
                          <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
                            <div
                              className={`bg-gradient-to-r ${mission.bgGradient} h-full rounded-full transition-all`}
                              style={{ width: `${(mission.completed / mission.total) * 100}%` }}
                            />
                          </div>
                        </div>

                        <Button className={`w-full bg-gradient-to-r ${mission.bgGradient} hover:opacity-90`}>
                          {mission.completed > 0 ? 'Continue' : 'Start'} Adventure
                        </Button>
                      </>
                    ) : (
                      <div className="bg-gray-100 rounded-lg p-3 text-center">
                        <Lock className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">
                          Unlock at {mission.id === 'library' ? '20' : mission.id === 'temple' ? '50' : '100'} stars
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Location Pin */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 pointer-events-none">
                  <MapPin className={`w-6 h-6 ${mission.unlocked ? 'text-red-500' : 'text-gray-400'} fill-current`} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Map Legend */}
          <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 border-2 border-amber-300">
            <h4 className="text-sm text-gray-800 mb-2">Legend</h4>
            <div className="space-y-1 text-xs text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>In Progress</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-gray-400" />
                <span>Locked</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span>Stars Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <Card className="border-2 border-blue-300 bg-blue-50">
            <CardContent className="p-4 text-center">
              <div className="text-4xl mb-2">📝</div>
              <div className="text-2xl text-blue-700">{stats.quizzesCompleted}</div>
              <div className="text-sm text-gray-600">Quizzes</div>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-orange-300 bg-orange-50">
            <CardContent className="p-4 text-center">
              <div className="text-4xl mb-2">📚</div>
              <div className="text-2xl text-orange-700">{stats.storiesRead}</div>
              <div className="text-sm text-gray-600">Stories</div>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-purple-300 bg-purple-50">
            <CardContent className="p-4 text-center">
              <div className="text-4xl mb-2">🎬</div>
              <div className="text-2xl text-purple-700">{stats.lessonsWatched}</div>
              <div className="text-sm text-gray-600">Lessons</div>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-green-300 bg-green-50">
            <CardContent className="p-4 text-center">
              <div className="text-4xl mb-2">🎮</div>
              <div className="text-2xl text-green-700">{stats.gamesPlayed}</div>
              <div className="text-sm text-gray-600">Games</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}