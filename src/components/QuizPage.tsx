import { useState } from 'react';
import { User } from '../App';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { ArrowLeft, CheckCircle2, XCircle, Trophy } from 'lucide-react';
import { Language, getTranslation } from '../translations';

interface QuizPageProps {
  user: User;
  onBack: () => void;
  highScores: { [key: number]: number };
  onComplete?: (quizId: number, score: number, isImprovement: boolean) => void;
  language?: Language;
}

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const quizzes = [
  {
    id: 1,
    title: 'The Great Pyramids',
    description: 'Test your knowledge about the incredible pyramids of Egypt!',
    difficulty: 'Easy',
    questions: [
      {
        id: 1,
        question: 'Which pyramid is the largest?',
        options: ['Great Pyramid of Khufu', 'Pyramid of Khafre', 'Pyramid of Menkaure', 'Step Pyramid'],
        correctAnswer: 0,
        explanation: 'The Great Pyramid of Khufu (also known as Cheops) is the largest pyramid in Egypt!'
      },
      {
        id: 2,
        question: 'What were pyramids mainly used for?',
        options: ['Homes for pharaohs', 'Tombs for pharaohs', 'Temples for gods', 'Storage buildings'],
        correctAnswer: 1,
        explanation: 'Pyramids were built as tombs for pharaohs and their queens.'
      },
      {
        id: 3,
        question: 'Where are the famous pyramids located?',
        options: ['Cairo', 'Giza', 'Luxor', 'Alexandria'],
        correctAnswer: 1,
        explanation: 'The most famous pyramids are located on the Giza plateau, near Cairo.'
      },
      {
        id: 4,
        question: 'How many years did it take to build the Great Pyramid?',
        options: ['10 years', '20 years', '30 years', '50 years'],
        correctAnswer: 1,
        explanation: 'It took approximately 20 years to build the Great Pyramid of Khufu!'
      },
      {
        id: 5,
        question: 'What guards the pyramids at Giza?',
        options: ['A lion statue', 'The Great Sphinx', 'Temple guards', 'Stone warriors'],
        correctAnswer: 1,
        explanation: 'The Great Sphinx, a limestone statue with a lion\'s body and human head, guards the pyramids.'
      }
    ]
  },
  {
    id: 2,
    title: 'Egyptian Gods & Goddesses',
    description: 'Learn about the powerful gods of Ancient Egypt!',
    difficulty: 'Medium',
    questions: [
      {
        id: 1,
        question: 'Who was the king of the Egyptian gods?',
        options: ['Osiris', 'Ra', 'Anubis', 'Horus'],
        correctAnswer: 1,
        explanation: 'Ra was the sun god and considered the king of all Egyptian gods.'
      },
      {
        id: 2,
        question: 'Which god had the head of a jackal?',
        options: ['Thoth', 'Seth', 'Anubis', 'Sobek'],
        correctAnswer: 2,
        explanation: 'Anubis, the god of mummification and the afterlife, had the head of a jackal.'
      },
      {
        id: 3,
        question: 'Who was the goddess of magic and healing?',
        options: ['Isis', 'Hathor', 'Bastet', 'Nut'],
        correctAnswer: 0,
        explanation: 'Isis was the goddess of magic, healing, and motherhood.'
      }
    ]
  },
  {
    id: 3,
    title: 'Pharaohs of Egypt',
    description: 'Discover the rulers of Ancient Egypt!',
    difficulty: 'Medium',
    questions: [
      {
        id: 1,
        question: 'Who was the boy king who became pharaoh at age 9?',
        options: ['Ramses II', 'Tutankhamun', 'Khufu', 'Akhenaten'],
        correctAnswer: 1,
        explanation: 'King Tutankhamun became pharaoh at around 9 years old!'
      },
      {
        id: 2,
        question: 'Which famous female pharaoh wore a false beard?',
        options: ['Nefertiti', 'Cleopatra', 'Hatshepsut', 'Nefertari'],
        correctAnswer: 2,
        explanation: 'Hatshepsut was one of the most successful pharaohs and often wore a false beard as a symbol of power.'
      }
    ]
  }
];

export function QuizPage({ user, onBack, highScores, onComplete, language = 'en' }: QuizPageProps) {
  const t = getTranslation(language);
  const isRTL = language === 'ar';
  const [selectedQuiz, setSelectedQuiz] = useState<typeof quizzes[0] | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answers, setAnswers] = useState<boolean[]>([]);

  const handleQuizSelect = (quiz: typeof quizzes[0]) => {
    setSelectedQuiz(quiz);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);
    setAnswers([]);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (showExplanation) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null || !selectedQuiz) return;
    
    const isCorrect = selectedAnswer === selectedQuiz.questions[currentQuestion].correctAnswer;
    setAnswers([...answers, isCorrect]);
    if (isCorrect) {
      setScore(score + 1);
    }
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    if (!selectedQuiz) return;
    
    if (currentQuestion < selectedQuiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
      const finalScore = Math.round((score / selectedQuiz.questions.length) * 100);
      if (onComplete) {
        const isImprovement = finalScore > (highScores[selectedQuiz.id] || 0);
        onComplete(selectedQuiz.id, finalScore, isImprovement);
      }
    }
  };

  const handleReturnToList = () => {
    setSelectedQuiz(null);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);
    setAnswers([]);
  };

  if (quizCompleted && selectedQuiz) {
    const percentage = Math.round((score / selectedQuiz.questions.length) * 100);
    const previousBest = highScores[selectedQuiz.id] || 0;
    const isNewRecord = percentage > previousBest;
    
    return (
      <div className="min-h-screen bg-white p-6">
        <div className="max-w-3xl mx-auto">
          <Button onClick={handleReturnToList} variant="ghost" className="mb-4 gap-2" style={{ color: '#B8860B' }}>
            <ArrowLeft className="w-4 h-4" />
            Back to Quizzes
          </Button>

          <Card className="bg-white shadow-xl" style={{ border: '4px solid #D4AF37' }}>
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Trophy className="w-20 h-20 text-amber-500" />
              </div>
              <CardTitle className="text-3xl text-amber-800">Quiz Complete!</CardTitle>
              <CardDescription>Great job, {user.name}!</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-5xl text-amber-700 mb-2">{percentage}%</div>
                <p className="text-slate-600">You got {score} out of {selectedQuiz.questions.length} correct!</p>
              </div>

              {/* High Score Comparison */}
              {isNewRecord && previousBest > 0 && (
                <div className="bg-gradient-to-r from-yellow-100 to-amber-100 border-4 border-yellow-400 rounded-xl p-4 text-center">
                  <div className="text-3xl mb-2">🎉</div>
                  <h3 className="text-xl text-yellow-800 mb-1">New High Score!</h3>
                  <p className="text-yellow-700">
                    You beat your previous best of {previousBest}%!
                  </p>
                  <p className="text-sm text-yellow-600 mt-2">
                    +5 bonus stars for improvement!
                  </p>
                </div>
              )}

              {!isNewRecord && previousBest > 0 && (
                <div className="bg-amber-50 border-2 rounded-xl p-4 text-center" style={{ borderColor: '#D4AF37' }}>
                  <h3 className="text-lg mb-1" style={{ color: '#B8860B' }}>Your Best Score</h3>
                  <div className="text-3xl" style={{ color: '#D4AF37' }}>{previousBest}%</div>
                  <p className="text-sm mt-2" style={{ color: '#B8860B' }}>
                    Try again to beat your high score!
                  </p>
                </div>
              )}

              {isNewRecord && previousBest === 0 && (
                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 text-center">
                  <div className="text-3xl mb-2">⭐</div>
                  <p className="text-green-800">First time completing this quiz!</p>
                </div>
              )}

              <div className="space-y-2">
                <h3 className="text-center text-slate-700">Your Answers:</h3>
                <div className="flex justify-center gap-2 flex-wrap">
                  {answers.map((isCorrect, index) => (
                    <div key={index} className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center border-2 border-slate-200">
                      {isCorrect ? (
                        <CheckCircle2 className="w-6 h-6 text-green-600" />
                      ) : (
                        <XCircle className="w-6 h-6 text-red-600" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {percentage >= 80 && (
                <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 text-center">
                  <p className="text-green-800">🎉 Excellent work!</p>
                </div>
              )}

              <div className="flex gap-3">
                <Button onClick={handleReturnToList} className="flex-1" style={{ backgroundColor: '#D4AF37', color: 'white' }}>
                  Try Another Quiz
                </Button>
                <Button onClick={() => handleQuizSelect(selectedQuiz)} variant="outline" className="flex-1 border-2" style={{ borderColor: '#D4AF37', color: '#B8860B' }}>
                  🔄 Replay to Improve
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (selectedQuiz) {
    const question = selectedQuiz.questions[currentQuestion];
    const progress = ((currentQuestion + 1) / selectedQuiz.questions.length) * 100;

    return (
      <div className="min-h-screen bg-white p-6">
        <div className="max-w-3xl mx-auto">
          <Button onClick={handleReturnToList} variant="ghost" className="mb-4 gap-2" style={{ color: '#B8860B' }}>
            <ArrowLeft className="w-4 h-4" />
            Back to Quizzes
          </Button>

          <Card className="border-2" style={{ borderColor: '#D4AF37' }}>
            <CardHeader>
              <div className="flex justify-between items-center mb-2">
                <CardTitle style={{ color: '#B8860B' }}>{selectedQuiz.title}</CardTitle>
                <Badge style={{ backgroundColor: '#D4AF37', color: 'white' }}>
                  Question {currentQuestion + 1} of {selectedQuiz.questions.length}
                </Badge>
              </div>
              <Progress value={progress} className="h-2" />
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-amber-50 border rounded-lg p-6" style={{ borderColor: '#D4AF37' }}>
                <h3 className="text-xl text-slate-800">{question.question}</h3>
              </div>

              <div className="space-y-3">
                {question.options.map((option, index) => {
                  const isSelected = selectedAnswer === index;
                  const isCorrect = index === question.correctAnswer;
                  const showResult = showExplanation;

                  let buttonClass = 'w-full justify-start h-auto py-4 px-6 text-left';
                  if (showResult && isCorrect) {
                    buttonClass += ' bg-green-100 border-2 border-green-500 hover:bg-green-100';
                  } else if (showResult && isSelected && !isCorrect) {
                    buttonClass += ' bg-red-100 border-2 border-red-500 hover:bg-red-100';
                  } else if (isSelected) {
                    buttonClass += ' bg-amber-100 border-2 border-amber-500';
                  }

                  return (
                    <Button
                      key={index}
                      variant="outline"
                      className={buttonClass}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={showExplanation}
                    >
                      <span className="flex items-center gap-3 w-full">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center">
                          {String.fromCharCode(65 + index)}
                        </span>
                        <span className="flex-1">{option}</span>
                        {showResult && isCorrect && <CheckCircle2 className="w-5 h-5 text-green-600" />}
                        {showResult && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-600" />}
                      </span>
                    </Button>
                  );
                })}
              </div>

              {showExplanation && (
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <p className="text-amber-900">
                    <strong>💡 Explanation:</strong> {question.explanation}
                  </p>
                </div>
              )}

              <div>
                {!showExplanation ? (
                  <Button
                    onClick={handleSubmitAnswer}
                    disabled={selectedAnswer === null}
                    className="w-full"
                    style={{ backgroundColor: '#D4AF37', color: 'white' }}
                  >
                    Submit Answer
                  </Button>
                ) : (
                  <Button
                    onClick={handleNextQuestion}
                    className="w-full"
                    style={{ backgroundColor: '#D4AF37', color: 'white' }}
                  >
                    {currentQuestion < selectedQuiz.questions.length - 1 ? 'Next Question' : 'See Results'}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-6xl mx-auto">
        <Button onClick={onBack} variant="ghost" className="mb-4 gap-2" style={{ color: '#B8860B' }}>
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Button>

        <div className="mb-6">
          <h1 className="text-4xl text-amber-800 mb-2">🧠 Egyptian Quizzes</h1>
          <p className="text-slate-600">Test your knowledge and learn about Ancient Egypt!</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {quizzes.map((quiz) => {
            const bestScore = highScores[quiz.id];
            const hasPlayed = bestScore !== undefined;
            
            return (
              <Card
                key={quiz.id}
                className="cursor-pointer hover:shadow-xl transition-all border-2"
                style={{ borderColor: '#D4AF37' }}
                onClick={() => handleQuizSelect(quiz)}
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle style={{ color: '#B8860B' }}>{quiz.title}</CardTitle>
                    <Badge
                      variant={quiz.difficulty === 'Easy' ? 'default' : 'secondary'}
                      className={quiz.difficulty === 'Easy' ? 'bg-green-600' : 'bg-amber-600'}
                    >
                      {quiz.difficulty}
                    </Badge>
                  </div>
                  <CardDescription>{quiz.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {hasPlayed && (
                    <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-3 mb-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Trophy className="w-5 h-5 text-amber-600" />
                          <span className="text-sm text-amber-800">Best Score:</span>
                        </div>
                        <span className="text-xl text-amber-700">{bestScore}%</span>
                      </div>
                    </div>
                  )}
                  <p className="text-sm text-slate-600 mb-4">
                    {quiz.questions.length} Questions
                  </p>
                  <Button className="w-full" style={{ backgroundColor: '#D4AF37', color: 'white' }}>
                    {hasPlayed ? '🔄 Play Again' : 'Start Quiz'}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}