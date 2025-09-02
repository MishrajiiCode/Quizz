// reasoning.js
// Contains all chapters and questions for Reasoning

const reasoningData = {
  chapters: [
    {
      name: 'Logical Deduction',
      sets: [
        [
          {
            question: 'If all roses are flowers and some flowers fade quickly, can we say all roses fade quickly?',
            options: ['Yes', 'No', 'Cannot be determined', 'None of the above'],
            answer: 2
          },
          // ...19 more questions for Set 1
        ],
        // Set 2
        [],
        // Set 3, 4, 5
      ]
    },
    {
      name: 'Puzzles',
      sets: [
        // 5 sets, 20 questions per set
      ]
    },
    {
      name: 'Series',
      sets: [
        // 5 sets, 20 questions per set
      ]
    },
    // Add more chapters
  ]
};

// Export for app.js
window.reasoningData = reasoningData;