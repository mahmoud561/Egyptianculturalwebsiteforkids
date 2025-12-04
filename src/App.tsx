import { useState } from 'react';
import { HomePage } from './components/HomePage';
import { LoginPage } from './components/LoginPage';
import { SignupPage } from './components/SignupPage';
import { ForgotPasswordPage } from './components/ForgotPasswordPage';
import { ParentDashboard } from './components/ParentDashboard';
import { ChildHome } from './components/ChildHome';
import { WorldMap } from './components/WorldMap';
import { QuizPage } from './components/QuizPage';
import { StoriesPage } from './components/StoriesPage';
import { StoryReader } from './components/StoryReader';
import { DragDropGame } from './components/DragDropGame';
import { RewardsPage } from './components/RewardsPage';
import { RewardModal } from './components/RewardModal';
import { ListenPage } from './components/ListenPage';
import { WatchPage } from './components/WatchPage';
import { Language } from './translations';

export type UserType = 'parent' | 'child' | null;
export type Page = 'home' | 'login' | 'signup' | 'forgot-password' | 'parent-dashboard' | 'child-home' | 'world-map' | 'quiz' | 'stories' | 'story-reader' | 'drag-drop' | 'rewards' | 'listen' | 'watch';

export interface User {
  id: string;
  name: string;
  type: UserType;
  childId?: string;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [selectedStoryId, setSelectedStoryId] = useState<number | null>(null);
  
  // Language state
  const [language, setLanguage] = useState<Language>('en');
  
  // Rewards state
  const [totalStars, setTotalStars] = useState(125);
  const [earnedBadges, setEarnedBadges] = useState<string[]>(['first-quiz', 'story-reader', 'lesson-learner', 'star-collector']);
  const [stats, setStats] = useState({
    quizzesCompleted: 12,
    storiesRead: 8,
    lessonsWatched: 3,
    gamesPlayed: 5
  });
  const [rewardModal, setRewardModal] = useState<{
    isOpen: boolean;
    stars?: number;
    badge?: { name: string; description: string; icon: string };
    message?: string;
  }>({ isOpen: false });

  // High scores tracking
  const [highScores, setHighScores] = useState<{
    quizzes: { [key: number]: number };
    dragDrop: number;
    lessonsCompleted: number[];
    storiesCompleted: number[];
  }>({
    quizzes: { 1: 80, 2: 60 }, // quiz id -> score percentage
    dragDrop: 14, // best score out of 16
    lessonsCompleted: [1, 2], // lesson ids completed
    storiesCompleted: [1, 2, 3] // story ids completed
  });
  
  const awardReward = (stars: number, badgeId?: string, message?: string) => {
    setTotalStars(prev => prev + stars);
    
    const badgeData: { [key: string]: { name: string; description: string; icon: string } } = {
      'first-quiz': { name: 'Quiz Starter', description: 'Complete your first quiz', icon: '🎯' },
      'quiz-master': { name: 'Quiz Master', description: 'Complete 5 quizzes', icon: '🧠' },
      'perfect-score': { name: 'Perfect Scholar', description: 'Get 100% on a quiz', icon: '💯' },
      'story-reader': { name: 'Story Explorer', description: 'Read your first story', icon: '📚' },
      'bookworm': { name: 'Bookworm', description: 'Read 10 stories', icon: '🐛' },
      'lesson-learner': { name: 'Eager Learner', description: 'Watch your first lesson', icon: '🎬' },
      'knowledge-seeker': { name: 'Knowledge Seeker', description: 'Watch all lessons', icon: '🔍' },
      'game-master': { name: 'Sorting Champion', description: 'Get perfect score in sorting game', icon: '🎮' },
    };
    
    if (badgeId && !earnedBadges.includes(badgeId)) {
      setEarnedBadges(prev => [...prev, badgeId]);
      setRewardModal({
        isOpen: true,
        stars,
        badge: badgeData[badgeId],
        message
      });
    } else {
      setRewardModal({
        isOpen: true,
        stars,
        message
      });
    }
  };

  const handleLogin = (user: User) => {
    setCurrentUser(user);
    if (user.type === 'parent') {
      setCurrentPage('parent-dashboard');
    } else {
      setCurrentPage('child-home');
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentPage('login');
  };

  const navigateTo = (page: Page, storyId?: number) => {
    setCurrentPage(page);
    if (storyId !== undefined) {
      setSelectedStoryId(storyId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {currentPage === 'home' && (
        <HomePage onNavigateToLogin={() => setCurrentPage('login')} />
      )}
      {currentPage === 'login' && (
        <LoginPage 
          onLogin={handleLogin} 
          onNavigateToSignup={() => setCurrentPage('signup')}
          onNavigateToForgotPassword={() => setCurrentPage('forgot-password')}
        />
      )}
      {currentPage === 'signup' && (
        <SignupPage 
          onSignup={handleLogin} 
          onNavigateToLogin={() => setCurrentPage('login')} 
        />
      )}
      {currentPage === 'forgot-password' && (
        <ForgotPasswordPage 
          onNavigateToLogin={() => setCurrentPage('login')} 
        />
      )}
      {currentPage === 'parent-dashboard' && currentUser && (
        <ParentDashboard 
          user={currentUser} 
          onLogout={handleLogout}
          language={language}
          onLanguageChange={setLanguage}
        />
      )}
      {currentPage === 'child-home' && currentUser && (
        <ChildHome 
          user={currentUser} 
          onLogout={handleLogout}
          onNavigate={navigateTo}
          totalStars={totalStars}
          earnedBadgesCount={earnedBadges.length}
          language={language}
          onLanguageChange={setLanguage}
        />
      )}
      {currentPage === 'world-map' && currentUser && (
        <WorldMap 
          user={currentUser} 
          onLogout={handleLogout}
          onNavigate={(destination) => {
            if (destination === 'quizzes') setCurrentPage('quiz');
            else if (destination === 'stories') setCurrentPage('stories');
            else if (destination === 'games') setCurrentPage('drag-drop');
            else if (destination === 'rewards') setCurrentPage('rewards');
          }}
          onBack={() => setCurrentPage('child-home')}
          totalStars={totalStars}
          earnedBadgesCount={earnedBadges.length}
          stats={stats}
        />
      )}
      {currentPage === 'quiz' && currentUser && (
        <QuizPage 
          user={currentUser} 
          onBack={() => setCurrentPage('child-home')}
          highScores={highScores.quizzes}
          language={language}
          onComplete={(quizId, score, isImprovement) => {
            // Update high score if improved
            if (isImprovement) {
              setHighScores(prev => ({
                ...prev,
                quizzes: { ...prev.quizzes, [quizId]: score }
              }));
            }
            
            setStats(prev => ({ ...prev, quizzesCompleted: prev.quizzesCompleted + 1 }));
            const stars = Math.floor(score / 10);
            const bonusStars = isImprovement ? 5 : 0;
            const badge = score === 100 ? 'perfect-score' : stats.quizzesCompleted >= 4 ? 'quiz-master' : undefined;
            const message = isImprovement 
              ? `🎉 New high score: ${score}%! +${bonusStars} bonus stars!`
              : `You scored ${score}%!`;
            awardReward(stars + bonusStars, badge, message);
          }}
        />
      )}
      {currentPage === 'stories' && currentUser && (
        <StoriesPage 
          user={currentUser} 
          onBack={() => setCurrentPage('child-home')}
          onSelectStory={(id) => navigateTo('story-reader', id)}
          language={language}
        />
      )}
      {currentPage === 'story-reader' && currentUser && selectedStoryId !== null && (
        <StoryReader 
          storyId={selectedStoryId}
          onBack={() => setCurrentPage('stories')}
          language={language}
          onComplete={() => {
            setStats(prev => ({ ...prev, storiesRead: prev.storiesRead + 1 }));
            const badge = stats.storiesRead >= 9 ? 'bookworm' : undefined;
            awardReward(15, badge, 'Story completed!');
          }}
        />
      )}
      {currentPage === 'drag-drop' && currentUser && (
        <DragDropGame 
          user={currentUser} 
          onBack={() => setCurrentPage('child-home')}
          highScore={highScores.dragDrop}
          language={language}
          onComplete={(score, isImprovement) => {
            // Update high score if improved
            if (isImprovement) {
              setHighScores(prev => ({
                ...prev,
                dragDrop: score
              }));
            }
            
            setStats(prev => ({ ...prev, gamesPlayed: prev.gamesPlayed + 1 }));
            const perfectScore = score === 16;
            const bonusStars = isImprovement ? 5 : 0;
            const badge = perfectScore ? 'game-master' : undefined;
            const message = isImprovement
              ? `🎉 New high score: ${score}/16! +${bonusStars} bonus stars!`
              : perfectScore ? 'Perfect game!' : 'Great job!';
            awardReward((perfectScore ? 25 : 15) + bonusStars, badge, message);
          }}
        />
      )}
      {currentPage === 'rewards' && currentUser && (
        <RewardsPage 
          user={currentUser} 
          onBack={() => setCurrentPage('child-home')}
          earnedBadges={earnedBadges}
          totalStars={totalStars}
          stats={stats}
          language={language}
        />
      )}
      {currentPage === 'listen' && currentUser && (
        <ListenPage 
          user={currentUser} 
          onBack={() => setCurrentPage('child-home')}
          language={language}
        />
      )}
      {currentPage === 'watch' && currentUser && (
        <WatchPage 
          user={currentUser} 
          onBack={() => setCurrentPage('child-home')}
          language={language}
        />
      )}
      
      {/* Reward Modal */}
      <RewardModal
        isOpen={rewardModal.isOpen}
        onClose={() => setRewardModal({ isOpen: false })}
        starsEarned={rewardModal.stars}
        badgeEarned={rewardModal.badge}
        message={rewardModal.message}
      />
    </div>
  );
}