// english.js
// Contains all chapters and questions for English

const englishData = {
  chapters: [
    {
      name: 'Grammar',
      sets: [
        [
          {
            question: 'Choose the correctly punctuated sentence.',
            options: ['Lets eat, Grandma!', "Let's eat Grandma!", 'Lets eat Grandma!', 'Let’s eat, Grandma!'],
            answer: 3
          },
          // ...19 more questions for Set 1
        ],
        // Set 2
        [],
        // Set 3, 4, 5
      ]
    },
    {
      name: 'Vocabulary',
      sets: [
        // 5 sets, 20 questions per set
      ]
    },
    {
      name: 'Comprehension',
      sets: [
        // 5 sets, 20 questions per set
      ]
    },
    // Add more chapters
  ]
};

// Export for app.js
window.englishData = englishData;