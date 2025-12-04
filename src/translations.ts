export type Language = 'en' | 'ar';

export interface Translations {
  // Common
  logout: string;
  back: string;
  level: string;
  welcomeBack: string;
  close: string;
  
  // Child Home
  egyptianExplorer: string;
  readyToExplore: string;
  myRewards: string;
  watchAndListen: string;
  animatedLessons: string;
  watched: string;
  startLearning: string;
  takeAQuiz: string;
  testYourKnowledge: string;
  completed: string;
  startQuiz: string;
  readStories: string;
  discoverTales: string;
  read: string;
  browseStories: string;
  sortingGame: string;
  dragAndDrop: string;
  playGame: string;
  offlineActivities: string;
  handsonLearning: string;
  viewActivities: string;
  
  // Continue Learning Section
  continueLearning: string;
  pickUpWhereLeft: string;
  lastQuiz: string;
  lastStory: string;
  recommended: string;
  newLabel: string;
  
  // Offline Challenges
  myOfflineChallenges: string;
  realWorldActivities: string;
  assignedByParent: string;
  markAsComplete: string;
  completedGreatJob: string;
  moreChallengesSoon: string;
  askParentForActivities: string;
  haveAnIdea: string;
  tellParentAboutActivities: string;
  active: string;
  earnStars: string;
  
  // Messages from Parent
  messagesFromParent: string;
  seeWhatParentSays: string;
  fromParent: string;
  newMessage: string;
  hoursAgo: string;
  dayAgo: string;
  parentCanSendMessages: string;
  
  // Fun Facts
  didYouKnow: string;
  funFact1: string;
  
  // Activity names
  egyptianRecipeChallenge: string;
  egyptianRecipeDesc: string;
  pharaohMaskCraft: string;
  pharaohMaskDesc: string;
  handson: string;
  creative: string;
  
  // Messages
  greatJobQuiz: string;
  keepUpAmazingWork: string;
  
  // Parent Dashboard
  parentDashboard: string;
  childProgress: string;
  overview: string;
  analytics: string;
  offlineActivitiesParent: string;
  messagingParent: string;
  notificationsParent: string;
  settingsParent: string;
  
  // Parent Overview
  overallProgress: string;
  quizzesCompleted: string;
  storiesRead: string;
  timeSpent: string;
  averageScore: string;
  currentStreak: string;
  days: string;
  thisWeek: string;
  
  // Parent Stats Cards
  strongestTopic: string;
  needsImprovement: string;
  recentActivity: string;
  completedQuiz: string;
  readStory: string;
  ago: string;
  
  // Parent Analytics
  quizPerformance: string;
  topic: string;
  weeklyActivityTime: string;
  minutes: string;
  timeByActivityType: string;
  topicFocusDistribution: string;
  
  // Parent Offline Activities
  suggestActivities: string;
  assignActivitiesDesc: string;
  statusFilter: string;
  all: string;
  suggested: string;
  assigned: string;
  assign: string;
  customize: string;
  markComplete: string;
  
  // Activity Titles
  buildMiniPyramid: string;
  buildMiniPyramidDesc: string;
  createHieroglyphics: string;
  createHieroglyphicsDesc: string;
  visitMuseum: string;
  visitMuseumDesc: string;
  egyptianTimeline: string;
  egyptianTimelineDesc: string;
  
  // Activity Categories
  fieldTrip: string;
  research: string;
  
  // Parent Messaging
  sendMessage: string;
  sendMessageDesc: string;
  writeMessage: string;
  send: string;
  recentMessages: string;
  justNow: string;
  
  // Parent Notifications
  manageNotifications: string;
  notificationsDesc: string;
  markAllRead: string;
  unreadNotifications: string;
  newBadgeEarned: string;
  weeklyProgressReport: string;
  weeklyReportMessage: string;
  perfectScore: string;
  perfectScoreMessage: string;
  respond: string;
  
  // Parent Settings
  customizeExperience: string;
  settingsDesc: string;
  learningPreferences: string;
  preferredLanguage: string;
  difficultyLevel: string;
  autoAdvance: string;
  autoAdvanceDesc: string;
  parentalControls: string;
  screenTimeLimit: string;
  hoursPerDay: string;
  contentFiltering: string;
  contentFilteringDesc: string;
  requireApproval: string;
  requireApprovalDesc: string;
  progressReports: string;
  weeklyReports: string;
  weeklyReportsDesc: string;
  achievementAlerts: string;
  achievementAlertsDesc: string;
  saveSettings: string;
  settingsSaved: string;
  
  // Profile Dialog
  profile: string;
  manageProfile: string;
  personalInfo: string;
  parentName: string;
  email: string;
  phone: string;
  childName: string;
  childAge: string;
  years: string;
  saveChanges: string;
  privacy: string;
  privacySettings: string;
  dataCollection: string;
  dataCollectionDesc: string;
  activityTracking: string;
  activityTrackingDesc: string;
  shareProgress: string;
  shareProgressDesc: string;
  security: string;
  securitySettings: string;
  changePassword: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
  twoFactor: string;
  twoFactorDesc: string;
  updatePassword: string;
  
  // Common Parent Terms
  viewDetails: string;
  edit: string;
  delete: string;
  cancel: string;
  confirm: string;
  success: string;
  error: string;
  loading: string;
  noData: string;
  refresh: string;
  
  // Quiz Page
  egyptianQuizzes: string;
  chooseQuiz: string;
  beginner: string;
  intermediate: string;
  advanced: string;
  questions: string;
  highScore: string;
  notAttempted: string;
  score: string;
  submit: string;
  nextQuestion: string;
  quizComplete: string;
  yourScore: string;
  correct: string;
  incorrect: string;
  tryAgain: string;
  nextQuiz: string;
  
  // Quiz Content
  quiz1Title: string;
  quiz1Desc: string;
  quiz2Title: string;
  quiz2Desc: string;
  quiz3Title: string;
  quiz3Desc: string;
  quiz4Title: string;
  quiz4Desc: string;
  quiz5Title: string;
  quiz5Desc: string;
  
  // Stories Page
  ancientEgyptStories: string;
  selectStory: string;
  readTime: string;
  startReading: string;
  storyCompleted: string;
  greatJob: string;
  youEarned: string;
  stars: string;
  backToStories: string;
  ageGroup: string;
  category: string;
  
  // Story Titles
  story1Title: string;
  story1Desc: string;
  story2Title: string;
  story2Desc: string;
  story3Title: string;
  story3Desc: string;
  story4Title: string;
  story4Desc: string;
  story5Title: string;
  story5Desc: string;
  
  // Story Categories
  mythology: string;
  history: string;
  mystery: string;
  adventure: string;
  science: string;
  
  // Drag Drop Game
  egyptianSorting: string;
  dragItems: string;
  category: string;
  checkAnswers: string;
  perfect: string;
  goodJob: string;
  tryAgainMsg: string;
  correctAnswers: string;
  playAgain: string;
  
  // Game Categories
  pharaohs: string;
  gods: string;
  artifacts: string;
  symbols: string;
  
  // Lessons Page
  interactiveLessons: string;
  chooseTopic: string;
  watchLesson: string;
  lessonComplete: string;
  backToLessons: string;
  continueWatching: string;
  
  // Lesson Titles
  lesson1Title: string;
  lesson1Desc: string;
  lesson2Title: string;
  lesson2Desc: string;
  lesson3Title: string;
  lesson3Desc: string;
  lesson4Title: string;
  lesson4Desc: string;
  
  // Rewards Page
  myRewardsPage: string;
  yourProgress: string;
  totalStars: string;
  badgesEarned: string;
  quizzesCompleted: string;
  storiesRead: string;
  lessonsWatched: string;
  gamesPlayed: string;
  earnedBadges: string;
  lockedBadges: string;
  
  // Badge Names
  badgeQuizStarter: string;
  badgeQuizMaster: string;
  badgePerfectScore: string;
  badgeStoryReader: string;
  badgeBookworm: string;
  badgeLessonLearner: string;
  badgeKnowledgeSeeker: string;
  badgeGameMaster: string;
  badgeStarCollector: string;
  
  // Badge Descriptions
  badgeQuizStarterDesc: string;
  badgeQuizMasterDesc: string;
  badgePerfectScoreDesc: string;
  badgeStoryReaderDesc: string;
  badgeBookwormDesc: string;
  badgeLessonLearnerDesc: string;
  badgeKnowledgeSeekerDesc: string;
  badgeGameMasterDesc: string;
  badgeStarCollectorDesc: string;
  
  // Offline Activities
  offlineActivitiesPage: string;
  activitiesDescription: string;
  materials: string;
  instructions: string;
  difficulty: string;
  duration: string;
  easy: string;
  medium: string;
  hard: string;
  
  // Difficulty levels
  difficultyEasy: string;
  difficultyMedium: string;
  difficultyHard: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    // Common
    logout: 'Logout',
    back: 'Back',
    level: 'Level',
    welcomeBack: 'Welcome back',
    close: 'Close',
    
    // Child Home
    egyptianExplorer: '🏛️ Egyptian Explorer',
    readyToExplore: 'Ready to explore Ancient Egypt today?',
    myRewards: 'My Rewards',
    watchAndListen: 'Watch & Listen',
    animatedLessons: 'Animated lessons with voice narration about Egyptian culture and history!',
    watched: 'Watched',
    startLearning: 'Start Learning',
    takeAQuiz: 'Take a Quiz',
    testYourKnowledge: 'Test your knowledge about Ancient Egypt! Learn about pyramids, pharaohs, and more.',
    completed: 'Completed',
    startQuiz: 'Start Quiz',
    readStories: 'Read Stories',
    discoverTales: 'Discover amazing tales from Ancient Egypt! Gods, pharaohs, and adventures await.',
    read: 'Read',
    browseStories: 'Browse Stories',
    sortingGame: 'Sorting Game',
    dragAndDrop: 'Drag and drop items into the correct Egyptian categories! Fun and educational.',
    playGame: 'Play Game',
    offlineActivities: 'Offline Activities',
    handsonLearning: 'Hands-on activities you can do away from the screen! Arts, crafts, and more.',
    viewActivities: 'View Activities',
    
    // Continue Learning Section
    continueLearning: 'Continue Learning',
    pickUpWhereLeft: 'Pick up where you left off!',
    lastQuiz: 'Last Quiz',
    lastStory: 'Last Story',
    recommended: 'Recommended',
    newLabel: 'New',
    
    // Offline Challenges
    myOfflineChallenges: 'My Offline Challenges',
    realWorldActivities: 'Real-world activities assigned by your parent!',
    assignedByParent: 'Assigned by Parent',
    markAsComplete: 'Mark as Complete',
    completedGreatJob: 'Completed! Great job!',
    moreChallengesSoon: 'More challenges coming soon!',
    askParentForActivities: 'Ask your parent for more activities!',
    haveAnIdea: 'Have an idea?',
    tellParentAboutActivities: 'Tell your parent about your activities!',
    active: 'Active',
    earnStars: 'Earn Stars',
    
    // Messages from Parent
    messagesFromParent: 'Messages from Parent',
    seeWhatParentSays: 'See what your parent says!',
    fromParent: 'From Parent',
    newMessage: 'New Message',
    hoursAgo: 'hours ago',
    dayAgo: 'day ago',
    parentCanSendMessages: 'Your parent can send you messages!',
    
    // Fun Facts
    didYouKnow: 'Did you know?',
    funFact1: 'The Great Sphinx of Giza is the largest monolithic statue in the world!',
    
    // Activity names
    egyptianRecipeChallenge: 'Egyptian Recipe Challenge',
    egyptianRecipeDesc: 'Make a traditional Egyptian recipe!',
    pharaohMaskCraft: 'Pharaoh Mask Craft',
    pharaohMaskDesc: 'Create a pharaoh mask!',
    handson: 'Hands-on',
    creative: 'Creative',
    
    // Messages
    greatJobQuiz: 'Great job on the quiz!',
    keepUpAmazingWork: 'Keep up the amazing work!',
    
    // Parent Dashboard
    parentDashboard: 'Parent Dashboard',
    childProgress: 'Child Progress',
    overview: 'Overview',
    analytics: 'Analytics',
    offlineActivitiesParent: 'Offline Activities',
    messagingParent: 'Messaging',
    notificationsParent: 'Notifications',
    settingsParent: 'Settings',
    
    // Parent Overview
    overallProgress: 'Overall Progress',
    quizzesCompleted: 'Quizzes Completed',
    storiesRead: 'Stories Read',
    timeSpent: 'Time Spent',
    averageScore: 'Average Score',
    currentStreak: 'Current Streak',
    days: 'days',
    thisWeek: 'This Week',
    
    // Parent Stats Cards
    strongestTopic: 'Strongest Topic',
    needsImprovement: 'Needs Improvement',
    recentActivity: 'Recent Activity',
    completedQuiz: 'Completed Quiz',
    readStory: 'Read Story',
    ago: 'ago',
    
    // Parent Analytics
    quizPerformance: 'Quiz Performance',
    topic: 'Topic',
    weeklyActivityTime: 'Weekly Activity Time',
    minutes: 'minutes',
    timeByActivityType: 'Time by Activity Type',
    topicFocusDistribution: 'Topic Focus Distribution',
    
    // Parent Offline Activities
    suggestActivities: 'Suggest Activities',
    assignActivitiesDesc: 'Assign activities to your child!',
    statusFilter: 'Status Filter',
    all: 'All',
    suggested: 'Suggested',
    assigned: 'Assigned',
    assign: 'Assign',
    customize: 'Customize',
    markComplete: 'Mark Complete',
    
    // Activity Titles
    buildMiniPyramid: 'Build a Mini Pyramid',
    buildMiniPyramidDesc: 'Build a small replica of an Egyptian pyramid!',
    createHieroglyphics: 'Create Hieroglyphics',
    createHieroglyphicsDesc: 'Design your own hieroglyphics!',
    visitMuseum: 'Visit a Museum',
    visitMuseumDesc: 'Visit a museum to learn more about Ancient Egypt!',
    egyptianTimeline: 'Create an Egyptian Timeline',
    egyptianTimelineDesc: 'Create a timeline of Ancient Egypt!',
    
    // Activity Categories
    fieldTrip: 'Field Trip',
    research: 'Research',
    
    // Parent Messaging
    sendMessage: 'Send Message',
    sendMessageDesc: 'Send a message to your child!',
    writeMessage: 'Write Message',
    send: 'Send',
    recentMessages: 'Recent Messages',
    justNow: 'Just Now',
    
    // Parent Notifications
    manageNotifications: 'Manage Notifications',
    notificationsDesc: 'Manage your notifications!',
    markAllRead: 'Mark All Read',
    unreadNotifications: 'Unread Notifications',
    newBadgeEarned: 'New Badge Earned',
    weeklyProgressReport: 'Weekly Progress Report',
    weeklyReportMessage: 'Your child has made great progress this week!',
    perfectScore: 'Perfect Score',
    perfectScoreMessage: 'Your child achieved a perfect score on a quiz!',
    respond: 'Respond',
    
    // Parent Settings
    customizeExperience: 'Customize Experience',
    settingsDesc: 'Customize your child\'s learning experience!',
    learningPreferences: 'Learning Preferences',
    preferredLanguage: 'Preferred Language',
    difficultyLevel: 'Difficulty Level',
    autoAdvance: 'Auto Advance',
    autoAdvanceDesc: 'Automatically advance to the next lesson or activity!',
    parentalControls: 'Parental Controls',
    screenTimeLimit: 'Screen Time Limit',
    hoursPerDay: 'hours per day',
    contentFiltering: 'Content Filtering',
    contentFilteringDesc: 'Filter content based on age and interest!',
    requireApproval: 'Require Approval',
    requireApprovalDesc: 'Require approval for new activities!',
    progressReports: 'Progress Reports',
    weeklyReports: 'Weekly Reports',
    weeklyReportsDesc: 'Receive weekly progress reports!',
    achievementAlerts: 'Achievement Alerts',
    achievementAlertsDesc: 'Receive alerts for new achievements!',
    saveSettings: 'Save Settings',
    settingsSaved: 'Settings Saved!',
    
    // Profile Dialog
    profile: 'Profile',
    manageProfile: 'Manage Profile',
    personalInfo: 'Personal Info',
    parentName: 'Parent Name',
    email: 'Email',
    phone: 'Phone',
    childName: 'Child Name',
    childAge: 'Child Age',
    years: 'years',
    saveChanges: 'Save Changes',
    privacy: 'Privacy',
    privacySettings: 'Privacy Settings',
    dataCollection: 'Data Collection',
    dataCollectionDesc: 'Allow data collection for better learning experience!',
    activityTracking: 'Activity Tracking',
    activityTrackingDesc: 'Track your child\'s activity!',
    shareProgress: 'Share Progress',
    shareProgressDesc: 'Share your child\'s progress with others!',
    security: 'Security',
    securitySettings: 'Security Settings',
    changePassword: 'Change Password',
    currentPassword: 'Current Password',
    newPassword: 'New Password',
    confirmPassword: 'Confirm Password',
    twoFactor: 'Two-Factor Authentication',
    twoFactorDesc: 'Enable two-factor authentication for added security!',
    updatePassword: 'Update Password',
    
    // Common Parent Terms
    viewDetails: 'View Details',
    edit: 'Edit',
    delete: 'Delete',
    cancel: 'Cancel',
    confirm: 'Confirm',
    success: 'Success',
    error: 'Error',
    loading: 'Loading',
    noData: 'No Data',
    refresh: 'Refresh',
    
    // Quiz Page
    egyptianQuizzes: 'Egyptian Quizzes',
    chooseQuiz: 'Choose a quiz to test your knowledge!',
    beginner: 'Beginner',
    intermediate: 'Intermediate',
    advanced: 'Advanced',
    questions: 'Questions',
    highScore: 'High Score',
    notAttempted: 'Not Attempted',
    score: 'Score',
    submit: 'Submit Answer',
    nextQuestion: 'Next Question',
    quizComplete: 'Quiz Complete!',
    yourScore: 'Your Score',
    correct: 'Correct',
    incorrect: 'Incorrect',
    tryAgain: 'Try Again',
    nextQuiz: 'Next Quiz',
    
    // Quiz Content
    quiz1Title: 'Pyramids and Pharaohs',
    quiz1Desc: 'Test your knowledge about the great pyramids and pharaohs of Ancient Egypt.',
    quiz2Title: 'Egyptian Mythology',
    quiz2Desc: 'Learn about the gods and goddesses of Ancient Egypt.',
    quiz3Title: 'Ancient Egyptian Artifacts',
    quiz3Desc: 'Discover the treasures of Ancient Egypt.',
    quiz4Title: 'Egyptian Symbols',
    quiz4Desc: 'Identify the symbols of Ancient Egypt.',
    quiz5Title: 'Egyptian History',
    quiz5Desc: 'Test your knowledge about the history of Ancient Egypt.',
    
    // Stories Page
    ancientEgyptStories: 'Ancient Egypt Stories',
    selectStory: 'Select a story to begin your adventure!',
    readTime: 'min read',
    startReading: 'Start Reading',
    storyCompleted: 'Story Completed!',
    greatJob: 'Great job finishing the story!',
    youEarned: 'You earned',
    stars: 'stars',
    backToStories: 'Back to Stories',
    ageGroup: 'Age Group',
    category: 'Category',
    
    // Story Titles
    story1Title: 'The Legend of Ra',
    story1Desc: 'Discover the story of the sun god Ra.',
    story2Title: 'The Tale of Isis and Osiris',
    story2Desc: 'Learn about the love story of Isis and Osiris.',
    story3Title: 'The Mysterious Sphinx',
    story3Desc: 'Explore the legend of the Sphinx.',
    story4Title: 'The Journey of the Pharaoh',
    story4Desc: 'Follow the journey of a pharaoh through the afterlife.',
    story5Title: 'The Secrets of the Pyramids',
    story5Desc: 'Uncover the secrets hidden in the pyramids.',
    
    // Story Categories
    mythology: 'Mythology',
    history: 'History',
    mystery: 'Mystery',
    adventure: 'Adventure',
    science: 'Science',
    
    // Drag Drop Game
    egyptianSorting: 'Egyptian Sorting Challenge',
    dragItems: 'Drag items to their correct categories',
    category: 'Category',
    checkAnswers: 'Check Answers',
    perfect: 'Perfect! All correct!',
    goodJob: 'Good job!',
    tryAgainMsg: 'Try again!',
    correctAnswers: 'correct answers',
    playAgain: 'Play Again',
    
    // Game Categories
    pharaohs: 'Pharaohs',
    gods: 'Gods',
    artifacts: 'Artifacts',
    symbols: 'Symbols',
    
    // Lessons Page
    interactiveLessons: 'Interactive Lessons',
    chooseTopic: 'Choose a topic to learn about!',
    watchLesson: 'Watch Lesson',
    lessonComplete: 'Lesson Complete!',
    backToLessons: 'Back to Lessons',
    continueWatching: 'Continue Watching',
    
    // Lesson Titles
    lesson1Title: 'Introduction to Ancient Egypt',
    lesson1Desc: 'Learn about the history and culture of Ancient Egypt.',
    lesson2Title: 'The Pyramids of Giza',
    lesson2Desc: 'Discover the secrets of the Pyramids of Giza.',
    lesson3Title: 'The Sphinx',
    lesson3Desc: 'Explore the legend of the Sphinx.',
    lesson4Title: 'The Nile River',
    lesson4Desc: 'Learn about the importance of the Nile River in Ancient Egypt.',
    
    // Rewards Page
    myRewardsPage: 'My Rewards',
    yourProgress: 'Your Progress',
    totalStars: 'Total Stars',
    badgesEarned: 'Badges Earned',
    quizzesCompleted: 'Quizzes Completed',
    storiesRead: 'Stories Read',
    lessonsWatched: 'Lessons Watched',
    gamesPlayed: 'Games Played',
    earnedBadges: 'Earned Badges',
    lockedBadges: 'Locked Badges',
    
    // Badge Names
    badgeQuizStarter: 'Quiz Starter',
    badgeQuizMaster: 'Quiz Master',
    badgePerfectScore: 'Perfect Score',
    badgeStoryReader: 'Story Reader',
    badgeBookworm: 'Bookworm',
    badgeLessonLearner: 'Lesson Learner',
    badgeKnowledgeSeeker: 'Knowledge Seeker',
    badgeGameMaster: 'Game Master',
    badgeStarCollector: 'Star Collector',
    
    // Badge Descriptions
    badgeQuizStarterDesc: 'Completed your first quiz!',
    badgeQuizMasterDesc: 'Completed all quizzes!',
    badgePerfectScoreDesc: 'Achieved a perfect score in a quiz!',
    badgeStoryReaderDesc: 'Read your first story!',
    badgeBookwormDesc: 'Read all stories!',
    badgeLessonLearnerDesc: 'Watched all lessons!',
    badgeKnowledgeSeekerDesc: 'Completed all quizzes and lessons!',
    badgeGameMasterDesc: 'Completed all games!',
    badgeStarCollectorDesc: 'Collected all stars!',
    
    // Offline Activities
    offlineActivitiesPage: 'Offline Activities',
    activitiesDescription: 'Fun hands-on activities to do away from the screen!',
    materials: 'Materials',
    instructions: 'Instructions',
    difficulty: 'Difficulty',
    duration: 'Duration',
    easy: 'Easy',
    medium: 'Medium',
    hard: 'Hard',
    
    // Difficulty levels
    difficultyEasy: 'Easy',
    difficultyMedium: 'Medium',
    difficultyHard: 'Hard',
  },
  ar: {
    // Common
    logout: 'تسجيل الخروج',
    back: 'رجوع',
    level: 'المستوى',
    welcomeBack: 'مرحباً بعودتك',
    close: 'إغلاق',
    
    // Child Home
    egyptianExplorer: '🏛️ مستكشف مصر',
    readyToExplore: 'هل أنت مستعد لاستكشاف مصر القديمة اليوم؟',
    myRewards: 'جوائزي',
    watchAndListen: 'شاهد واستمع',
    animatedLessons: 'دروس متحركة مع سرد صوتي عن الثقافة والتاريخ المصري!',
    watched: 'تمت المشاهدة',
    startLearning: 'ابدأ التعلم',
    takeAQuiz: 'خذ اختباراً',
    testYourKnowledge: 'اختبر معرفتك عن مصر القديمة! تعلم عن الأهرامات والفراعنة والمزيد.',
    completed: 'مكتمل',
    startQuiz: 'ابدأ الاختبار',
    readStories: 'اقرأ القصص',
    discoverTales: 'اكتشف حكايات مذهلة من مصر القديمة! الآلهة والفراعنة والمغامرات في انتظارك.',
    read: 'مقروء',
    browseStories: 'تصفح القصص',
    sortingGame: 'لعبة الترتيب',
    dragAndDrop: 'اسحب وأفلت العناصر في الفئات المصرية الصحيحة! ممتع وتعليمي.',
    playGame: 'العب اللعبة',
    offlineActivities: 'أنشطة بدون إنترنت',
    handsonLearning: 'أنشطة عملية يمكنك القيام بها بعيداً عن الشاشة! فنون وحرف يدوية والمزيد.',
    viewActivities: 'عرض الأنشطة',
    
    // Continue Learning Section
    continueLearning: 'استمر في التعلم',
    pickUpWhereLeft: 'استمر من حيث توقفت!',
    lastQuiz: 'آخر اختبار',
    lastStory: 'آخر قصة',
    recommended: 'موصى به',
    newLabel: 'جديد',
    
    // Offline Challenges
    myOfflineChallenges: 'تحدياتي بدون إنترنت',
    realWorldActivities: 'أنشطة حقيقية تم تعيينها من قبل والدي!',
    assignedByParent: 'تعيين من قبل والدي',
    markAsComplete: 'أعلم أنه مكتمل',
    completedGreatJob: 'مكتمل! أحسنت!',
    moreChallengesSoon: 'تحديات إضافية قادمة قريبًا!',
    askParentForActivities: 'سأل والدي عن أنشطة إضافية!',
    haveAnIdea: 'لدي فكرة؟',
    tellParentAboutActivities: 'أخبر والدي عن أنشطتك!',
    active: 'نشط',
    earnStars: 'كسب نجوم',
    
    // Messages from Parent
    messagesFromParent: 'رسائل من والدي',
    seeWhatParentSays: 'شاهد ما يقوله والدي!',
    fromParent: 'من والدي',
    newMessage: 'رسالة جديدة',
    hoursAgo: 'ساعة مضت',
    dayAgo: 'يوم مضت',
    parentCanSendMessages: 'يمكن لوالدي إرسال رسائل لي!',
    
    // Fun Facts
    didYouKnow: 'هل كنت تعلم؟',
    funFact1: 'السphinx الكبير في الجيزة هو أكبر تمثال وحدوي في العالم!',
    
    // Activity names
    egyptianRecipeChallenge: 'تحدي وصفة مصرية',
    egyptianRecipeDesc: 'عمل وصفة مصرية تقليدية!',
    pharaohMaskCraft: 'حرفية قناع الفرعون',
    pharaohMaskDesc: 'إنشاء قناع فرعون!',
    handson: 'عملية',
    creative: 'إبداعي',
    
    // Messages
    greatJobQuiz: 'أحسنت في الاختبار!',
    keepUpAmazingWork: 'استمر في العمل الرائع!',
    
    // Parent Dashboard
    parentDashboard: 'لوحة تحكم الوالد',
    childProgress: 'تقدم الطفل',
    overview: 'نظرة عامة',
    analytics: 'تحليلات',
    offlineActivitiesParent: 'أنشطة بدون إنترنت',
    messagingParent: 'الرسائل',
    notificationsParent: 'الإشعارات',
    settingsParent: 'الإعدادات',
    
    // Parent Overview
    overallProgress: 'التقدم العام',
    quizzesCompleted: 'الاختبارات المكتملة',
    storiesRead: 'القصص المقروءة',
    timeSpent: 'الوقت المستغرق',
    averageScore: 'النقاط المتوسطة',
    currentStreak: 'سلسلة حالية',
    days: 'أيام',
    thisWeek: 'هذا الأسبوع',
    
    // Parent Stats Cards
    strongestTopic: 'الموضوع الأقوى',
    needsImprovement: 'بحاجة لتحسين',
    recentActivity: 'نشاط مؤخر',
    completedQuiz: 'اختبار مكتمل',
    readStory: 'قصة مقروءة',
    ago: 'منذ',
    
    // Parent Analytics
    quizPerformance: 'أداء الاختبارات',
    topic: 'الموضوع',
    weeklyActivityTime: 'وقت النشاط الأسبوعي',
    minutes: 'دقائق',
    timeByActivityType: 'الوقت حسب نوع النشاط',
    topicFocusDistribution: 'توزيع التركيز على المواضيع',
    
    // Parent Offline Activities
    suggestActivities: 'اقتراح الأنشطة',
    assignActivitiesDesc: 'تعيين الأنشطة لطفلك!',
    statusFilter: 'تصفية الحالة',
    all: 'الكل',
    suggested: 'مقترح',
    assigned: 'مكلف به',
    assign: 'تعيين',
    customize: 'تعديل',
    markComplete: 'أعلم أنه مكتمل',
    
    // Activity Titles
    buildMiniPyramid: 'بناء هرم صغير',
    buildMiniPyramidDesc: 'بناء نسخة صغيرة من هرم مصر!',
    createHieroglyphics: 'إنشاء هيروغرافيات',
    createHieroglyphicsDesc: 'تصميم هيروغرافياتك الخاصة!',
    visitMuseum: 'زيارة متحف',
    visitMuseumDesc: 'زيارة متحف لمعرفة المزيد عن مصر القديمة!',
    egyptianTimeline: 'إنشاء خط زمني مصري',
    egyptianTimelineDesc: 'إنشاء خط زمني لمصر القديمة!',
    
    // Activity Categories
    fieldTrip: 'رحلة ميدانية',
    research: 'بحث',
    
    // Parent Messaging
    sendMessage: 'إرسال رسالة',
    sendMessageDesc: 'إرسال رسالة لطفلك!',
    writeMessage: 'كتابة رسالة',
    send: 'إرسال',
    recentMessages: 'رسائل مؤخيرة',
    justNow: 'الآن',
    
    // Parent Notifications
    manageNotifications: 'إدارة الإشعارات',
    notificationsDesc: 'إدارة إشعاراتك!',
    markAllRead: 'تحديد الكل كمقروء',
    unreadNotifications: 'إشعارات غير مقروءة',
    newBadgeEarned: 'جائزة جديدة مكتسبة',
    weeklyProgressReport: 'تقرير تقدم أسبوعي',
    weeklyReportMessage: 'لقد حقق طفلك تقدمًا كبيرًا هذا الأسبوع!',
    perfectScore: 'نقاط كاملة',
    perfectScoreMessage: 'لقد حقق طفلك درجة كاملة في اختبار!',
    respond: 'رد',
    
    // Parent Settings
    customizeExperience: 'تعديل تجربة التعلم',
    settingsDesc: 'تعديل تجربة تعلم طفلك!',
    learningPreferences: 'تفضيلات التعلم',
    preferredLanguage: 'اللغة المفضلة',
    difficultyLevel: 'مستوى الصعوبة',
    autoAdvance: 'التقدم التلقائي',
    autoAdvanceDesc: 'التقدم تلقائيًا إلى الدرس أو النشاط التالي!',
    parentalControls: 'تحكم الوالدين',
    screenTimeLimit: 'حد وقت الشاشة',
    hoursPerDay: 'ساعات في اليوم',
    contentFiltering: 'تصفية المحتوى',
    contentFilteringDesc: 'تصفية المحتوى بناءً على العمر والاهتمام!',
    requireApproval: 'طلب الموافقة',
    requireApprovalDesc: 'طلب موافقة على الأنشطة الجديدة!',
    progressReports: 'تقارير التقدم',
    weeklyReports: 'تقارير أسبوعية',
    weeklyReportsDesc: 'تلقي تقارير تقدم أسبوعية!',
    achievementAlerts: 'تنبيهات الإنجازات',
    achievementAlertsDesc: 'تلقي تنبيهات عن الإنجازات الجديدة!',
    saveSettings: 'حفظ الإعدادات',
    settingsSaved: 'تم حفظ الإعدادات!',
    
    // Profile Dialog
    profile: 'الملف الشخصي',
    manageProfile: 'إدارة الملف الشخصي',
    personalInfo: 'المعلومات الشخصية',
    parentName: 'اسم الوالد',
    email: 'البريد الإلكتروني',
    phone: 'الهاتف',
    childName: 'اسم الطفل',
    childAge: 'عمر الطفل',
    years: 'سنوات',
    saveChanges: 'حفظ التغييرات',
    privacy: 'خصوصية',
    privacySettings: 'إعدادات الخصوصية',
    dataCollection: 'جمع البيانات',
    dataCollectionDesc: 'السماح بجمع البيانات لتجربة تعلم أفضل!',
    activityTracking: 'تتبع النشاط',
    activityTrackingDesc: 'تتبع نشاط طفلك!',
    shareProgress: 'مشاركة التقدم',
    shareProgressDesc: 'مشاركة تقدم طفلك مع الآخرين!',
    security: 'الأمان',
    securitySettings: 'إعدادات الأمان',
    changePassword: 'تغيير كلمة المرور',
    currentPassword: 'كلمة المرور الحالية',
    newPassword: 'كلمة مرور جديدة',
    confirmPassword: 'تأكيد كلمة المرور',
    twoFactor: 'التحقق بخطوتين',
    twoFactorDesc: 'تمكين التحقق بخطوتين للحصول على أمان إضافي!',
    updatePassword: 'تحديث كلمة المرور',
    
    // Common Parent Terms
    viewDetails: 'عرض التفاصيل',
    edit: 'تحرير',
    delete: 'حذف',
    cancel: 'إلغاء',
    confirm: 'تأكيد',
    success: 'نجاح',
    error: 'خطأ',
    loading: 'تحميل',
    noData: 'لا يوجد بيانات',
    refresh: 'تحديث',
    
    // Quiz Page
    egyptianQuizzes: 'اختبارات مصرية',
    chooseQuiz: 'اختر اختباراً لاختبار معرفتك!',
    beginner: 'مبتدئ',
    intermediate: 'متوسط',
    advanced: 'متقدم',
    questions: 'أسئلة',
    highScore: 'أعلى درجة',
    notAttempted: 'لم تتم المحاولة',
    score: 'النتيجة',
    submit: 'إرسال الإجابة',
    nextQuestion: 'السؤال التالي',
    quizComplete: 'اكتمل الاختبار!',
    yourScore: 'درجتك',
    correct: 'صحيح',
    incorrect: 'خاطئ',
    tryAgain: 'حول مرة أخرى',
    nextQuiz: 'الاختبار التالي',
    
    // Quiz Content
    quiz1Title: 'الأهرامات والفراعون',
    quiz1Desc: 'اختبار معرفتك بالأهرامات الكبيرة والفراون في مصر القديمة.',
    quiz2Title: 'الديانات المصرية',
    quiz2Desc: 'تعلم عن الآلهة والآلهة في مصر القديمة.',
    quiz3Title: 'آثار مصر القديمة',
    quiz3Desc: 'اكتشف أثريات مصر القديمة.',
    quiz4Title: 'رموز مصر القديمة',
    quiz4Desc: 'تحديد رموز مصر القديمة.',
    quiz5Title: 'تاريخ مصر القديمة',
    quiz5Desc: 'اختبار معرفتك بتاريخ مصر القديمة.',
    
    // Stories Page
    ancientEgyptStories: 'قصص مصر القديمة',
    selectStory: 'اختر قصة لبدء مغامرتك!',
    readTime: 'دقيقة قراءة',
    startReading: 'ابدأ القراءة',
    storyCompleted: 'اكتملت القصة!',
    greatJob: 'أحسنت! لقد أنهيت القصة!',
    youEarned: 'لقد حصلت على',
    stars: 'نجوم',
    backToStories: 'العودة إلى القصص',
    ageGroup: 'الفئة العمرية',
    category: 'الفئة',
    
    // Story Titles
    story1Title: 'رواية را',
    story1Desc: 'اكتشف رواية آلهة الشمس را.',
    story2Title: 'رواية إيسيس وعسيريس',
    story2Desc: 'تعلم عن قصة الحب بين إيسيس وعسيريس.',
    story3Title: 'السphinx المخفي',
    story3Desc: 'استكشف رواية السphinx.',
    story4Title: 'رحلة الفرعون',
    story4Desc: 'اتبع رحلة الفرعون عبر العالم الآخر.',
    story5Title: 'أسرار الأهرامات',
    story5Desc: 'اكتشف الأسرار المخفية في الأهرامات.',
    
    // Story Categories
    mythology: 'ديانات',
    history: 'تاريخ',
    mystery: 'غموض',
    adventure: 'مغامرة',
    science: 'علوم',
    
    // Drag Drop Game
    egyptianSorting: 'تحدي الترتيب المصري',
    dragItems: 'اسحب العناصر إلى فئاتها الصحيحة',
    category: 'الفئة',
    checkAnswers: 'تحقق من الإجابات',
    perfect: 'ممتاز! جميع الإجابات صحيحة!',
    goodJob: 'أحسنت!',
    tryAgainMsg: 'حاول مرة أخرى!',
    correctAnswers: 'إجابات صحيحة',
    playAgain: 'العب مرة أخرى',
    
    // Game Categories
    pharaohs: 'فراعنة',
    gods: 'آلهة',
    artifacts: 'آثار',
    symbols: 'رموز',
    
    // Lessons Page
    interactiveLessons: 'دروس تفاعلية',
    chooseTopic: 'اختر موضوعاً للتعلم عنه!',
    watchLesson: 'شاهد الدرس',
    lessonComplete: 'اكتمل الدرس!',
    backToLessons: 'العودة إلى الدروس',
    continueWatching: 'استمر في المشاهدة',
    
    // Lesson Titles
    lesson1Title: 'مقدمة مصر القديمة',
    lesson1Desc: 'تعلم عن التاريخ والثقافة في مصر القديمة.',
    lesson2Title: 'أهرامات الجيزة',
    lesson2Desc: 'اكتشف أسرار أهرامات الجيزة.',
    lesson3Title: 'السphinx',
    lesson3Desc: 'استكشف رواية السphinx.',
    lesson4Title: 'نهر النيل',
    lesson4Desc: 'تعلم عن أهمية نهر النيل في مصر القديمة.',
    
    // Rewards Page
    myRewardsPage: 'جوائزي',
    yourProgress: 'تقدمك',
    totalStars: 'إجمالي النجوم',
    badgesEarned: 'الشارات المكتسبة',
    quizzesCompleted: 'الاختبارات المكتملة',
    storiesRead: 'القصص المقروءة',
    lessonsWatched: 'الدروس المشاهدة',
    gamesPlayed: 'الألعاب الملعوبة',
    earnedBadges: 'الشارات المكتسبة',
    lockedBadges: 'الشارات المقفلة',
    
    // Badge Names
    badgeQuizStarter: 'بداية الاختبارات',
    badgeQuizMaster: 'أساس الاختبارات',
    badgePerfectScore: 'النقاط الكاملة',
    badgeStoryReader: 'قارئ القصص',
    badgeBookworm: 'مغرِّب في القراءة',
    badgeLessonLearner: 'متعلم الدروس',
    badgeKnowledgeSeeker: 'باحث عن المعرفة',
    badgeGameMaster: 'أساس الألعاب',
    badgeStarCollector: 'جمع النجوم',
    
    // Badge Descriptions
    badgeQuizStarterDesc: 'لقد أكملت اختبارك الأول!',
    badgeQuizMasterDesc: 'لقد أكملت جميع الاختبارات!',
    badgePerfectScoreDesc: 'لقد حققت درجة كاملة في اختبار!',
    badgeStoryReaderDesc: 'لقد قرأت قصة أولى!',
    badgeBookwormDesc: 'لقد قرأت جميع القصص!',
    badgeLessonLearnerDesc: 'لقد شاهدت جميع الدروس!',
    badgeKnowledgeSeekerDesc: 'لقد أكملت جميع الاختبارات والدروس!',
    badgeGameMasterDesc: 'لقد أكملت جميع الألعاب!',
    badgeStarCollectorDesc: 'لقد جمعت جميع النجوم!',
    
    // Offline Activities
    offlineActivitiesPage: 'أنشطة بدون إنترنت',
    activitiesDescription: 'أنشطة عملية ممتعة للقيام بها بعيداً عن الشاشة!',
    materials: 'المواد',
    instructions: 'التعليمات',
    difficulty: 'الصعوبة',
    duration: 'المدة',
    easy: 'سهل',
    medium: 'متوسط',
    hard: 'صعب',
    
    // Difficulty levels
    difficultyEasy: 'سهل',
    difficultyMedium: 'متوسط',
    difficultyHard: 'صعب',
  }
};

export function getTranslation(language: Language): Translations {
  return translations[language];
}