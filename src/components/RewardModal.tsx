import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Star, Award, Sparkles } from 'lucide-react';

interface RewardModalProps {
  isOpen: boolean;
  onClose: () => void;
  starsEarned?: number;
  badgeEarned?: {
    name: string;
    description: string;
    icon: string;
  };
  message?: string;
}

export function RewardModal({ isOpen, onClose, starsEarned = 0, badgeEarned, message }: RewardModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative z-10 w-full max-w-md"
          >
            <Card className="border-4 border-amber-400 shadow-2xl bg-gradient-to-br from-amber-50 to-orange-50">
              <CardContent className="p-8 text-center">
                {/* Celebration Animation */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    duration: 0.5,
                    repeat: 3
                  }}
                  className="text-8xl mb-4"
                >
                  🎉
                </motion.div>

                <h2 className="text-4xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                  Amazing Work!
                </h2>

                {message && (
                  <p className="text-xl text-gray-700 mb-6">
                    {message}
                  </p>
                )}

                {/* Stars Earned */}
                {starsEarned > 0 && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring" }}
                    className="bg-yellow-100 rounded-2xl p-6 mb-4 border-4 border-yellow-400"
                  >
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <Star className="w-10 h-10 text-yellow-600 fill-yellow-600" />
                      <span className="text-5xl text-yellow-700">+{starsEarned}</span>
                      <Star className="w-10 h-10 text-yellow-600 fill-yellow-600" />
                    </div>
                    <p className="text-lg text-yellow-800">Stars Earned!</p>
                  </motion.div>
                )}

                {/* Badge Earned */}
                {badgeEarned && (
                  <motion.div
                    initial={{ scale: 0, y: 50 }}
                    animate={{ scale: 1, y: 0 }}
                    transition={{ delay: 0.5, type: "spring", bounce: 0.6 }}
                    className="bg-purple-100 rounded-2xl p-6 mb-4 border-4 border-purple-400"
                  >
                    <div className="flex items-center justify-center gap-3 mb-3">
                      <Award className="w-8 h-8 text-purple-600" />
                      <span className="text-2xl text-purple-800">New Badge Unlocked!</span>
                      <Sparkles className="w-8 h-8 text-purple-600" />
                    </div>
                    <motion.div
                      animate={{ 
                        rotate: [0, -10, 10, -10, 10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 0.6,
                        repeat: Infinity,
                        repeatDelay: 1
                      }}
                      className="text-7xl mb-3"
                    >
                      {badgeEarned.icon}
                    </motion.div>
                    <h3 className="text-2xl text-purple-800 mb-2">{badgeEarned.name}</h3>
                    <p className="text-purple-700">{badgeEarned.description}</p>
                  </motion.div>
                )}

                {/* Confetti Elements */}
                <div className="relative h-12 overflow-hidden">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ y: -20, x: Math.random() * 400 - 200, opacity: 0 }}
                      animate={{ 
                        y: 100, 
                        x: Math.random() * 400 - 200,
                        opacity: [0, 1, 0],
                        rotate: Math.random() * 360
                      }}
                      transition={{ 
                        duration: 2,
                        delay: i * 0.1,
                        repeat: Infinity,
                        repeatDelay: 1
                      }}
                      className="absolute text-2xl"
                      style={{ left: `${Math.random() * 100}%` }}
                    >
                      {['⭐', '🌟', '✨', '💫'][Math.floor(Math.random() * 4)]}
                    </motion.div>
                  ))}
                </div>

                <Button
                  onClick={onClose}
                  className="w-full mt-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white text-lg py-6"
                  size="lg"
                >
                  Continue Learning! 🚀
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
