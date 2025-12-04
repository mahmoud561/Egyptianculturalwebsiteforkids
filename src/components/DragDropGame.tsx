import { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ArrowLeft, Trophy, Star, RotateCcw } from 'lucide-react';
import { User } from '../App';

interface DragDropGameProps {
  user: User;
  onBack: () => void;
  highScore?: number;
  onComplete?: (score: number, isImprovement: boolean) => void;
}

interface GameItem {
  id: string;
  name: string;
  category: string;
  emoji: string;
  color: string;
}

interface Category {
  id: string;
  name: string;
  color: string;
  icon: string;
}

const categories: Category[] = [
  { id: 'food', name: 'Egyptian Food', color: 'bg-amber-500', icon: '🍽️' },
  { id: 'symbols', name: 'Sacred Symbols', color: 'bg-yellow-600', icon: '𓂀' },
  { id: 'animals', name: 'Egyptian Animals', color: 'bg-amber-600', icon: '🐫' },
  { id: 'treasures', name: 'Pharaoh Treasures', color: 'bg-yellow-500', icon: '👑' },
];

const gameItems: GameItem[] = [
  // Food
  { id: '1', name: 'Falafel', category: 'food', emoji: '🧆', color: 'bg-amber-200' },
  { id: '2', name: 'Dates', category: 'food', emoji: '🌰', color: 'bg-amber-200' },
  { id: '3', name: 'Bread', category: 'food', emoji: '🥖', color: 'bg-amber-200' },
  { id: '4', name: 'Honey', category: 'food', emoji: '🍯', color: 'bg-amber-200' },
  
  // Sacred Symbols
  { id: '5', name: 'Ankh', category: 'symbols', emoji: '𓂀', color: 'bg-yellow-200' },
  { id: '6', name: 'Eye of Horus', category: 'symbols', emoji: '𓁹', color: 'bg-yellow-200' },
  { id: '7', name: 'Scarab', category: 'symbols', emoji: '🪲', color: 'bg-yellow-200' },
  { id: '8', name: 'Pyramid', category: 'symbols', emoji: '🔺', color: 'bg-yellow-200' },
  
  // Animals
  { id: '9', name: 'Camel', category: 'animals', emoji: '🐫', color: 'bg-amber-300' },
  { id: '10', name: 'Cat', category: 'animals', emoji: '🐈', color: 'bg-amber-300' },
  { id: '11', name: 'Snake', category: 'animals', emoji: '🐍', color: 'bg-amber-300' },
  { id: '12', name: 'Falcon', category: 'animals', emoji: '🦅', color: 'bg-amber-300' },
  
  // Treasures
  { id: '13', name: 'Crown', category: 'treasures', emoji: '👑', color: 'bg-yellow-300' },
  { id: '14', name: 'Gold Coins', category: 'treasures', emoji: '🪙', color: 'bg-yellow-300' },
  { id: '15', name: 'Jewelry', category: 'treasures', emoji: '💎', color: 'bg-yellow-300' },
  { id: '16', name: 'Vase', category: 'treasures', emoji: '🏺', color: 'bg-yellow-300' },
];

interface DraggableItemProps {
  item: GameItem;
  isPlaced: boolean;
}

const DraggableItem = ({ item, isPlaced }: DraggableItemProps) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'item',
    item: { id: item.id, category: item.category },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  if (isPlaced) return null;

  return (
    <div
      ref={drag}
      className={`${item.color} rounded-2xl p-4 cursor-move transform transition-all duration-200 hover:scale-110 hover:shadow-xl ${
        isDragging ? 'opacity-50 scale-95' : 'opacity-100'
      } border-4 border-white shadow-lg`}
    >
      <div className="text-center">
        <div className="text-5xl mb-2">{item.emoji}</div>
        <p className="text-sm text-gray-800">{item.name}</p>
      </div>
    </div>
  );
};

interface DroppableCategoryProps {
  category: Category;
  items: GameItem[];
  onDrop: (itemId: string, categoryId: string) => void;
}

const DroppableCategory = ({ category, items, onDrop }: DroppableCategoryProps) => {
  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: 'item',
    drop: (item: { id: string; category: string }) => {
      onDrop(item.id, category.id);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }));

  const isActive = isOver && canDrop;

  return (
    <div
      ref={drop}
      className={`min-h-[300px] rounded-3xl p-6 border-4 border-dashed transition-all duration-300 ${
        isActive
          ? 'border-amber-500 bg-amber-100 scale-105'
          : 'border-gray-300 bg-white/50'
      }`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className={`${category.color} w-12 h-12 rounded-full flex items-center justify-center text-2xl`}>
          {category.icon}
        </div>
        <h3 className="text-xl text-gray-800">{category.name}</h3>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        {items.map((item) => (
          <div
            key={item.id}
            className={`${item.color} rounded-xl p-3 border-4 border-white shadow-md`}
          >
            <div className="text-center">
              <div className="text-4xl mb-1">{item.emoji}</div>
              <p className="text-xs text-gray-800">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
      
      {items.length === 0 && (
        <div className="h-full flex items-center justify-center text-gray-400 text-center py-12">
          <div>
            <div className="text-4xl mb-2">👆</div>
            <p>Drag items here</p>
          </div>
        </div>
      )}
    </div>
  );
};

function DragDropGameContent({ user, onBack, highScore, onComplete }: DragDropGameProps) {
  const [placedItems, setPlacedItems] = useState<{ [key: string]: string }>({});
  const [score, setScore] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);

  const handleDrop = (itemId: string, categoryId: string) => {
    const item = gameItems.find((i) => i.id === itemId);
    if (!item) return;

    const isCorrect = item.category === categoryId;
    
    setPlacedItems((prev) => ({
      ...prev,
      [itemId]: categoryId,
    }));

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    // Check if all items are placed
    const allPlaced = Object.keys(placedItems).length + 1 === gameItems.length;
    if (allPlaced) {
      const newScore = score + (isCorrect ? 1 : 0);
      const allCorrect = newScore === gameItems.length;
      
      if (allCorrect) {
        setShowCelebration(true);
        setTimeout(() => setShowCelebration(false), 3000);
      }
      
      if (onComplete) {
        const isImprovement = highScore !== undefined && newScore > highScore;
        onComplete(newScore, isImprovement);
      }
    }
  };

  const handleReset = () => {
    setPlacedItems({});
    setScore(0);
    setShowCelebration(false);
  };

  const unplacedItems = gameItems.filter((item) => !placedItems[item.id]);
  const getItemsInCategory = (categoryId: string) => {
    return gameItems.filter((item) => placedItems[item.id] === categoryId);
  };

  const totalItems = gameItems.length;
  const placedCount = Object.keys(placedItems).length;
  const progress = (placedCount / totalItems) * 100;

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <Button
            onClick={onBack}
            variant="ghost"
            className="gap-2"
            style={{ color: '#B8860B' }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
          
          <div className="flex items-center gap-4">
            {highScore !== undefined && (
              <div className="rounded-full px-6 py-3 shadow-lg border-4" style={{ backgroundColor: '#FFF8E1', borderColor: '#D4AF37' }}>
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5" style={{ color: '#B8860B' }} />
                  <span className="text-lg" style={{ color: '#B8860B' }}>Best: {highScore}/16</span>
                </div>
              </div>
            )}
            
            <div className="bg-white rounded-full px-6 py-3 shadow-lg border-4" style={{ borderColor: '#D4AF37' }}>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-current" style={{ color: '#D4AF37' }} />
                <span className="text-xl text-gray-800">Score: {score}/16</span>
              </div>
            </div>
            
            <Button
              onClick={handleReset}
              variant="outline"
              className="gap-2 border-2"
              style={{ borderColor: '#D4AF37', color: '#B8860B' }}
            >
              <RotateCcw className="w-4 h-4" />
              🔄 Replay
            </Button>
          </div>
        </div>

        {/* Title and Instructions */}
        <div className="text-white rounded-3xl p-8 shadow-2xl mb-6" style={{ background: 'linear-gradient(to right, #D4AF37, #B8860B, #C5B358)' }}>
          <div className="flex items-center gap-4 mb-4">
            <div className="text-6xl">🎯</div>
            <div>
              <h1 className="text-4xl mb-2">Egyptian Sorting Challenge</h1>
              <p className="text-xl text-amber-100">
                Drag each item into its correct category! Learn about Egyptian culture while you play.
              </p>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="bg-white/20 rounded-full h-4 overflow-hidden">
            <div
              className="bg-white h-full transition-all duration-500 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-amber-100 mt-2">
            {placedCount} of {totalItems} items sorted
          </p>
        </div>
      </div>

      {/* Game Area */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Items Pool */}
        <div className="lg:col-span-1">
          <Card className="bg-gradient-to-br from-amber-100 to-yellow-100 p-6 rounded-3xl shadow-xl border-4" style={{ borderColor: '#D4AF37' }}>
            <h2 className="text-2xl text-gray-800 mb-4 flex items-center gap-2">
              <span className="text-3xl">🎁</span>
              Items to Sort
            </h2>
            <div className="grid grid-cols-2 gap-3 max-h-[600px] overflow-y-auto pr-2">
              {unplacedItems.map((item) => (
                <DraggableItem
                  key={item.id}
                  item={item}
                  isPlaced={!!placedItems[item.id]}
                />
              ))}
            </div>
            
            {unplacedItems.length === 0 && (
              <div className="text-center py-12 text-gray-600">
                <div className="text-6xl mb-4">🎉</div>
                <p className="text-xl">All items sorted!</p>
              </div>
            )}
          </Card>
        </div>

        {/* Categories */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((category) => (
              <DroppableCategory
                key={category.id}
                category={category}
                items={getItemsInCategory(category.id)}
                onDrop={handleDrop}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Celebration Modal */}
      {showCelebration && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-12 text-center shadow-2xl transform animate-bounce">
            <div className="text-8xl mb-6">🏆</div>
            <h2 className="text-5xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
              Perfect Score!
            </h2>
            <p className="text-2xl text-gray-700 mb-2">
              Amazing work, {user.name}!
            </p>
            <p className="text-xl text-gray-600">
              You've mastered Egyptian categories! 🎉
            </p>
            <div className="flex items-center justify-center gap-2 mt-6">
              <Trophy className="w-8 h-8 text-yellow-500" />
              <span className="text-3xl text-amber-600">+{score} points</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function DragDropGame(props: DragDropGameProps) {
  return (
    <DndProvider backend={HTML5Backend}>
      <DragDropGameContent {...props} />
    </DndProvider>
  );
}