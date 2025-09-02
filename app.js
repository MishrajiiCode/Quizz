// app.js
// Main application logic for Quiz App

// Global state variables
let currentSubject = '';
let currentChapter = '';
let currentSet = 0;
let currentQuestionIndex = 0;
let userAnswers = [];
let timer = null;
let totalTime = 0;
let timeRemaining = 1200; // 20 minutes for 20 questions
let quizData = null;
let userProgress = {};

// Data mapping
const subjectData = {
  quantitative: window.quantitativeData,
  english: window.englishData,
  reasoning: window.reasoningData
};

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
  loadUserProgress();
  initializeApp();
});

function initializeApp() {
  showPage('home-page');
}

// Navigation functions
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  document.getElementById(pageId).classList.add('active');
}

function selectSubject(subject) {
  currentSubject = subject;
  const subjectTitle = getSubjectTitle(subject);
  document.getElementById('subject-title').textContent = subjectTitle;
  
  displayChapters(subject);
  showPage('subject-page');
}

function goToHome() {
  showPage('home-page');
}

function goToSubject() {
  showPage('subject-page');
}

function goToChapter() {
  displayChapterInfo();
  showPage('chapter-page');
}

function goToResults() {
  showPage('results-page');
}

// Subject and chapter management
function getSubjectTitle(subject) {
  const titles = {
    quantitative: 'Quantitative Aptitude',
    english: 'English',
    reasoning: 'Reasoning'
  };
  return titles[subject] || subject;
}

function displayChapters(subject) {
  const chaptersGrid = document.getElementById('chapters-grid');
  chaptersGrid.innerHTML = '';
  
  const data = subjectData[subject];
  if (!data || !data.chapters) return;
  
  data.chapters.forEach((chapter, index) => {
    const chapterCard = document.createElement('div');
    chapterCard.className = 'chapter-card';
    chapterCard.innerHTML = `<h3>${chapter.name}</h3>`;
    chapterCard.onclick = () => selectChapter(chapter.name, index);
    chaptersGrid.appendChild(chapterCard);
  });
}

function selectChapter(chapterName, chapterIndex) {
  currentChapter = chapterName;
  document.getElementById('chapter-title').textContent = chapterName;
  displayChapterInfo();
  showPage('chapter-page');
}

function displayChapterInfo() {
  displaySets();
  displayProgress();
}

function displaySets() {
  const setsGrid = document.getElementById('sets-grid');
  setsGrid.innerHTML = '';
  
  for (let i = 0; i < 5; i++) {
    const setCard = document.createElement('div');
    const progressKey = `${currentSubject}_${currentChapter}_${i}`;
    const setStatus = getSetStatus(progressKey);
    
    setCard.className = `set-card ${setStatus.class}`;
    setCard.innerHTML = `
      <div class="set-title">Set ${i + 1}</div>
      <div class="set-status">${setStatus.text}</div>
    `;
    
    if (setStatus.class !== 'locked') {
      setCard.onclick = () => startQuiz(i);
    }
    
    setsGrid.appendChild(setCard);
  }
}

function getSetStatus(progressKey) {
  const progress = userProgress[progressKey];
  if (!progress) {
    return { class: '', text: 'Not attempted' };
  }
  
  if (progress.score >= 98) {
    return { class: 'completed', text: `Completed (${progress.score}%)` };
  } else {
    return { class: 'failed', text: `Failed (${progress.score}%)` };
  }
}

function displayProgress() {
  const progressInfo = document.getElementById('progress-info');
  let completedSets = 0;
  let totalScore = 0;
  
  for (let i = 0; i < 5; i++) {
    const progressKey = `${currentSubject}_${currentChapter}_${i}`;
    const progress = userProgress[progressKey];
    if (progress && progress.score >= 98) {
      completedSets++;
      totalScore += progress.score;
    }
  }
  
  const averageScore = completedSets > 0 ? (totalScore / completedSets).toFixed(1) : 0;
  
  progressInfo.innerHTML = `
    <p><strong>Completed Sets:</strong> ${completedSets}/5</p>
    <p><strong>Average Score:</strong> ${averageScore}%</p>
    <p><strong>Chapter Progress:</strong> ${(completedSets / 5 * 100).toFixed(0)}%</p>
  `;
}

// Quiz functionality
function startQuiz(setIndex) {
  currentSet = setIndex;
  currentQuestionIndex = 0;
  userAnswers = [];
  
  // Get quiz data
  const data = subjectData[currentSubject];
  const chapter = data.chapters.find(ch => ch.name === currentChapter);
  
  if (!chapter || !chapter.sets[setIndex] || chapter.sets[setIndex].length === 0) {
    alert('This set is not available yet. Please check back later.');
    return;
  }
  
  quizData = chapter.sets[setIndex];
  
  // Initialize user answers array
  userAnswers = new Array(quizData.length).fill(null);
  
  // Setup timer
  timeRemaining = quizData.length * 60; // 1 minute per question
  totalTime = timeRemaining;
  
  displayQuestion();
  startTimer();
  setupQuestionNumbers();
  showPage('quiz-page');
}

function displayQuestion() {
  if (!quizData || currentQuestionIndex >= quizData.length) return;
  
  const question = quizData[currentQuestionIndex];
  
  // Update question counter
  document.getElementById('current-question').textContent = 
    `Question ${currentQuestionIndex + 1} of ${quizData.length}`;
  
  // Display question
  document.getElementById('question-text').textContent = question.question;
  
  // Display options
  const optionsContainer = document.getElementById('options-container');
  optionsContainer.innerHTML = '';
  
  question.options.forEach((option, index) => {
    const optionDiv = document.createElement('div');
    optionDiv.className = 'option';
    optionDiv.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
    optionDiv.onclick = () => selectOption(index);
    
    if (userAnswers[currentQuestionIndex] === index) {
      optionDiv.classList.add('selected');
    }
    
    optionsContainer.appendChild(optionDiv);
  });
  
  // Update navigation buttons
  document.getElementById('prev-btn').disabled = currentQuestionIndex === 0;
  document.getElementById('next-btn').textContent = 
    currentQuestionIndex === quizData.length - 1 ? 'Finish' : 'Next';
  
  updateQuestionNumbers();
}

function selectOption(optionIndex) {
  userAnswers[currentQuestionIndex] = optionIndex;
  
  // Update UI
  document.querySelectorAll('.option').forEach((option, index) => {
    option.classList.toggle('selected', index === optionIndex);
  });
  
  updateQuestionNumbers();
}

function previousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    displayQuestion();
  }
}

function nextQuestion() {
  if (currentQuestionIndex < quizData.length - 1) {
    currentQuestionIndex++;
    displayQuestion();
  } else {
    submitQuiz();
  }
}

function goToQuestion(questionIndex) {
  currentQuestionIndex = questionIndex;
  displayQuestion();
}

function setupQuestionNumbers() {
  const questionNumbers = document.getElementById('question-numbers');
  questionNumbers.innerHTML = '';
  
  for (let i = 0; i < quizData.length; i++) {
    const numberDiv = document.createElement('div');
    numberDiv.className = 'question-number';
    numberDiv.textContent = i + 1;
    numberDiv.onclick = () => goToQuestion(i);
    questionNumbers.appendChild(numberDiv);
  }
}

function updateQuestionNumbers() {
  const questionNumbers = document.querySelectorAll('.question-number');
  questionNumbers.forEach((number, index) => {
    number.classList.remove('current', 'answered');
    
    if (index === currentQuestionIndex) {
      number.classList.add('current');
    } else if (userAnswers[index] !== null) {
      number.classList.add('answered');
    }
  });
}

function startTimer() {
  timer = setInterval(() => {
    timeRemaining--;
    updateTimerDisplay();
    
    if (timeRemaining <= 0) {
      clearInterval(timer);
      submitQuiz();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  const timerElement = document.getElementById('timer');
  
  timerElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
  
  // Add warning classes
  timerElement.classList.remove('timer-warning', 'timer-danger');
  if (timeRemaining <= 300) { // 5 minutes
    timerElement.classList.add('timer-warning');
  }
  if (timeRemaining <= 60) { // 1 minute
    timerElement.classList.add('timer-danger');
  }
}

function submitQuiz() {
  if (timer) {
    clearInterval(timer);
  }
  
  const timeTaken = totalTime - timeRemaining;
  const results = calculateResults();
  
  // Save progress
  const progressKey = `${currentSubject}_${currentChapter}_${currentSet}`;
  userProgress[progressKey] = {
    score: results.percentage,
    timeTaken: timeTaken,
    date: new Date().toISOString(),
    answers: userAnswers.slice()
  };
  saveUserProgress();
  
  displayResults(results, timeTaken);
  showPage('results-page');
}

function calculateResults() {
  let correctCount = 0;
  
  userAnswers.forEach((answer, index) => {
    if (answer === quizData[index].answer) {
      correctCount++;
    }
  });
  
  const percentage = Math.round((correctCount / quizData.length) * 100);
  
  return {
    correctCount,
    incorrectCount: quizData.length - correctCount,
    percentage,
    passed: percentage >= 98
  };
}

function displayResults(results, timeTaken) {
  // Update score display
  document.getElementById('score-percentage').textContent = `${results.percentage}%`;
  document.getElementById('correct-count').textContent = results.correctCount;
  document.getElementById('incorrect-count').textContent = results.incorrectCount;
  
  const minutes = Math.floor(timeTaken / 60);
  const seconds = timeTaken % 60;
  document.getElementById('time-taken').textContent = 
    `${minutes}:${seconds.toString().padStart(2, '0')}`;
  
  // Update result status
  const resultStatus = document.getElementById('result-status');
  if (results.passed) {
    resultStatus.textContent = '🎉 Congratulations! You passed the quiz!';
    resultStatus.className = 'result-status passed';
  } else {
    resultStatus.textContent = '❌ You need to score 98% or above to pass. Try again!';
    resultStatus.className = 'result-status failed';
  }
}

function retakeQuiz() {
  // If failed, select a random set that hasn't been completed
  if (!userProgress[`${currentSubject}_${currentChapter}_${currentSet}`] || 
      userProgress[`${currentSubject}_${currentChapter}_${currentSet}`].score < 98) {
    
    // Find available sets
    const availableSets = [];
    for (let i = 0; i < 5; i++) {
      const progressKey = `${currentSubject}_${currentChapter}_${i}`;
      if (!userProgress[progressKey] || userProgress[progressKey].score < 98) {
        availableSets.push(i);
      }
    }
    
    if (availableSets.length > 0) {
      // Remove current set from available sets to avoid repetition
      const filteredSets = availableSets.filter(set => set !== currentSet);
      if (filteredSets.length > 0) {
        currentSet = filteredSets[Math.floor(Math.random() * filteredSets.length)];
      } else {
        currentSet = availableSets[Math.floor(Math.random() * availableSets.length)];
      }
    }
  }
  
  startQuiz(currentSet);
}

function reviewAnswers() {
  displayReview();
  showPage('review-page');
}

function displayReview() {
  const reviewContainer = document.getElementById('review-container');
  reviewContainer.innerHTML = '';
  
  quizData.forEach((question, index) => {
    const userAnswer = userAnswers[index];
    const correctAnswer = question.answer;
    const isCorrect = userAnswer === correctAnswer;
    
    const reviewDiv = document.createElement('div');
    reviewDiv.className = `review-question ${isCorrect ? 'correct' : 'incorrect'}`;
    
    reviewDiv.innerHTML = `
      <h3>Question ${index + 1}: ${isCorrect ? '✅' : '❌'}</h3>
      <p><strong>${question.question}</strong></p>
      <div class="review-options">
        ${question.options.map((option, optIndex) => {
          let optionClass = 'review-option';
          if (optIndex === correctAnswer) {
            optionClass += ' correct-answer';
          }
          if (optIndex === userAnswer && userAnswer !== correctAnswer) {
            optionClass += ' user-wrong';
          }
          if (optIndex === userAnswer && userAnswer === correctAnswer) {
            optionClass += ' user-answer';
          }
          
          return `<div class="${optionClass}">
            ${String.fromCharCode(65 + optIndex)}. ${option}
            ${optIndex === correctAnswer ? ' ✓' : ''}
            ${optIndex === userAnswer && userAnswer !== correctAnswer ? ' (Your answer)' : ''}
          </div>`;
        }).join('')}
      </div>
    `;
    
    reviewContainer.appendChild(reviewDiv);
  });
}

// Local storage functions
function saveUserProgress() {
  localStorage.setItem('quizProgress', JSON.stringify(userProgress));
}

function loadUserProgress() {
  const saved = localStorage.getItem('quizProgress');
  if (saved) {
    userProgress = JSON.parse(saved);
  }
}

// Utility functions
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}