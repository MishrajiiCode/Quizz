# Exam Preparation Quiz System

A comprehensive web-based quiz application for exam preparation with subject-wise organization, chapter-wise breakdown, and advanced scoring system.

## Features

### 📚 **Subject Organization**
- **Quantitative Aptitude**: Time and Work, Percentage, Average, Profit & Loss, Simple Interest
- **English**: Grammar, Vocabulary, Comprehension
- **Reasoning**: Logical Deduction, Puzzles, Series

### 🎯 **Quiz Management**
- **5 Sets per Chapter**: Each chapter contains 5 unique question sets
- **20 Questions per Set**: Standard format for consistent testing
- **1 Minute per Question**: Total time of 20 minutes per set
- **98% Pass Rate**: High standard for qualification

### 🔄 **Smart Set Selection**
- **Manual Selection**: Choose any set (1-5) to attempt
- **Auto-Selection on Retry**: System automatically selects random unused sets
- **Progress Tracking**: Visual indicators for completed/failed sets
- **No Repetition**: Failed attempts trigger selection of unfinished sets

### 📊 **Advanced Scoring**
- **Real-time Timer**: Countdown with color-coded warnings
- **Instant Results**: Immediate scoring with detailed breakdown
- **Answer Review**: Question-by-question analysis with correct answers
- **Progress Persistence**: Local storage saves your progress

### 🎨 **Modern UI**
- **Responsive Design**: Works on all device sizes
- **Intuitive Navigation**: Easy subject → chapter → set flow
- **Visual Progress**: Clear indicators for completion status
- **Color-coded Results**: Green for pass, red for fail

## File Structure

```
quiz-app/
├── index.html          # Main HTML structure
├── styles.css          # Complete styling and responsive design
├── app.js             # Core application logic
├── quantitative.js    # Quantitative Aptitude questions
├── english.js         # English questions
├── reasoning.js       # Reasoning questions
└── README.md          # This documentation
```

## Quick Start

1. **Download all files** to the same directory
2. **Open index.html** in any modern web browser
3. **Select a subject** from the homepage
4. **Choose a chapter** you want to practice
5. **Pick a set** and start your quiz!

## How to Add Questions

### Step 1: Understand the Structure

Each subject file contains a data structure like this:

```javascript
const subjectData = {
  chapters: [
    {
      name: 'Chapter Name',
      sets: [
        // Set 1 (20 questions)
        [
          {
            question: 'Your question text here?',
            options: ['Option A', 'Option B', 'Option C', 'Option D'],
            answer: 0  // Index of correct answer (0=A, 1=B, 2=C, 3=D)
          },
          // ... 19 more questions
        ],
        // Set 2 (20 questions)
        [],
        // Set 3, 4, 5...
      ]
    }
  ]
};
```

### Step 2: Add Questions to Existing Chapters

1. Open the relevant subject file (quantitative.js, english.js, or reasoning.js)
2. Find the chapter you want to add questions to
3. Add questions to empty sets (`[]`)
4. Ensure each set has exactly 20 questions
5. Make sure no questions are repeated across sets

### Step 3: Add New Chapters

```javascript
{
  name: 'New Chapter Name',
  sets: [
    [
      // 20 questions for Set 1
    ],
    [
      // 20 questions for Set 2
    ],
    // ... 3 more sets
  ]
}
```

### Step 4: Question Format Guidelines

```javascript
{
  question: 'Clear, concise question text ending with question mark?',
  options: [
    'First option',
    'Second option', 
    'Third option',
    'Fourth option'
  ],
  answer: 2  // Index of correct answer (0-3)
}
```

## Advanced Customization

### Changing Quiz Settings

In `app.js`, modify these constants:

```javascript
// Time per question (in seconds)
timeRemaining = quizData.length * 60; // Currently 1 minute per question

// Pass percentage
const percentage = Math.round((correctCount / quizData.length) * 100);
const passed = percentage >= 98; // Currently 98%

// Questions per set
// Modify in the question arrays (currently 20)
```

### Adding New Subjects

1. **Create new subject file** (e.g., `science.js`)
2. **Add data structure** following the same pattern
3. **Update app.js**:
   ```javascript
   const subjectData = {
     quantitative: window.quantitativeData,
     english: window.englishData,
     reasoning: window.reasoningData,
     science: window.scienceData  // Add your new subject
   };
   ```
4. **Update index.html** to add new subject card
5. **Update getSubjectTitle()** function in app.js

### Styling Customizations

Modify `styles.css` to change:
- **Colors**: Update gradient backgrounds and button colors
- **Layout**: Adjust grid layouts and spacing
- **Typography**: Change fonts and text sizes
- **Responsive breakpoints**: Modify mobile layout

## Browser Compatibility

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## Local Storage

The app automatically saves:
- **Quiz Progress**: Scores and completion status
- **Set History**: Which sets have been attempted
- **Performance Data**: Time taken and accuracy

Data persists between browser sessions.

## Performance Features

### Timer System
- **Visual Warnings**: Timer changes color at 5 minutes (yellow) and 1 minute (red)
- **Auto-submit**: Quiz automatically submits when time expires
- **Pause Prevention**: Timer cannot be paused to maintain integrity

### Question Navigation
- **Grid Navigation**: Click any question number to jump directly
- **Visual Indicators**: See which questions are answered
- **Current Question Highlight**: Always know where you are

### Results Analysis
- **Detailed Breakdown**: See exactly which questions were wrong
- **Answer Comparison**: Compare your answers with correct ones
- **Performance Metrics**: Track accuracy and time management

## Troubleshooting

### Common Issues

**Quiz won't start**: Ensure the question arrays have exactly 20 questions
**Timer not working**: Check browser JavaScript permissions
**Progress not saving**: Verify local storage is enabled
**Questions repeating**: Make sure each set has unique questions

### Development Tips

1. **Test thoroughly**: Always test new questions before deployment
2. **Validate answers**: Double-check answer indices (0-3)
3. **Check formatting**: Ensure consistent question structure
4. **Mobile testing**: Test on different screen sizes

## Future Enhancements

### Potential Features
- **Question categories**: Tag questions by difficulty
- **Timed sections**: Different time limits per question type
- **Detailed analytics**: Performance trends over time
- **Export results**: Download progress reports
- **Admin panel**: GUI for adding questions

### Integration Options
- **Backend integration**: Connect to database for question management
- **User accounts**: Individual progress tracking
- **Leaderboards**: Compare performance with others
- **Certification**: Generate completion certificates

## Support

For questions or issues:
1. Check the question format in existing files
2. Validate your JavaScript syntax
3. Test in different browsers
4. Review browser console for errors

## License

This project is open source and available under the MIT License.

---

**Ready to start?** Open `index.html` in your browser and begin your exam preparation journey!