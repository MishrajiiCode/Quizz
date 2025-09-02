// quantitative.js
// Contains all chapters and questions for Quantitative Aptitude

const quantitativeData = {
  chapters: [
    {
      name: 'Time and Work',
      sets: [
        // Set 1: Questions 1-20
        [
          {
            question: 'A can complete a work in 12 days, B in 15 days. How long will they take to finish the work together?',
            options: ['6 days', '7 days', '5 days', '8 days'],
            answer: 0
          },
          {
            question: 'If A can complete a work in 10 days, how much work will A do in 4 days?',
            options: ['2/5', '3/5', '1/2', '4/5'],
            answer: 0
          },
          {
            question: 'A and B together finish a job in 20 days. A alone takes 30 days. How long will B take?',
            options: ['60 days', '45 days', '50 days', '40 days'],
            answer: 0
          },
          {
            question: 'A is twice as efficient as B. If A alone finishes a work in 12 days, B will take?',
            options: ['24 days', '18 days', '20 days', '15 days'],
            answer: 0
          },
          {
            question: 'A and B together can finish a work in 8 days. B alone can finish it in 12 days. How long will A alone take?',
            options: ['24 days', '20 days', '15 days', '18 days'],
            answer: 0
          },
          {
            question: '6 men can finish a job in 20 days. How many men are required to finish it in 10 days?',
            options: ['12', '15', '18', '10'],
            answer: 0
          },
          {
            question: 'A is 50% more efficient than B. Together they finish work in 10 days. How long will B take alone?',
            options: ['25 days', '20 days', '15 days', '18 days'],
            answer: 0
          },
          {
            question: 'A, B, and C finish a job in 12 days. A & B finish in 15 days, B & C in 20 days. C alone will finish in?',
            options: ['60 days', '50 days', '45 days', '40 days'],
            answer: 0
          },
          {
            question: 'A and B can do a work in 6 and 8 days respectively. After working together for 2 days, A leaves. How many days more will B take?',
            options: ['4 days', '5 days', '6 days', '3 days'],
            answer: 0
          },
          {
            question: 'A alone finishes a work in 18 days. B in 24 days. They work alternately, starting with A. The work completes in?',
            options: ['20 days', '21 days', '19 days', '22 days'],
            answer: 1
          },
          {
            question: 'Person A does 3/4 of a work in 12 days. How long will A take to finish the entire work?',
            options: ['15 days', '16 days', '20 days', '18 days'],
            answer: 1
          },
          {
            question: 'A works for 5 days and then B finishes the remaining work in 8 days. A alone finishes the work in 12 days. How long will B take?',
            options: ['24 days', '20 days', '18 days', '22 days'],
            answer: 0
          },
          {
            question: 'A and B complete a work in 15 days and 20 days respectively. How long will they take working together?',
            options: ['8 days', '9 days', '12 days', '10 days'],
            answer: 1
          },
          {
            question: '8 men can finish a work in 18 days. How many men are required to finish it in 12 days?',
            options: ['10', '12', '9', '15'],
            answer: 1
          },
          {
            question: 'A and B can finish a work in 20 and 30 days respectively. They work on alternate days starting with A. How many days will they take to complete the work?',
            options: ['24 days', '25 days', '27 days', '28 days'],
            answer: 0
          },
          {
            question: 'A and B together can complete a work in 6 days. A alone completes it in 10 days. How long will B take alone?',
            options: ['15 days', '16 days', '18 days', '20 days'],
            answer: 0
          },
          {
            question: 'A machine can do a work in 12 hours. It works for 4 hours and B machine does the rest working for 8 hours. B\'s machine takes?',
            options: ['16 hours', '18 hours', '20 hours', '12 hours'],
            answer: 1
          },
          {
            question: 'A can do a piece of work in 15 days, and B in 10 days. They start together, but B leaves after 3 days. How much work is left?',
            options: ['1/5', '1/4', '1/3', '1/6'],
            answer: 1
          },
          {
            question: 'A and B together can do a work in 10 days. A alone does the work in 15 days. How long will B alone take?',
            options: ['20 days', '25 days', '30 days', '18 days'],
            answer: 2
          },
          {
            question: 'Two taps can fill a tank in 9 and 12 hours separately. Both taps are opened together. How long will the tank be filled?',
            options: ['5.4 hours', '6 hours', '4.8 hours', '5 hours'],
            answer: 0
          }
        ],
        
        // Set 2: Questions 21-40
        [
          {
            question: 'If 10 workers can complete the job in 20 days, how many days will 5 workers take?',
            options: ['40', '30', '25', '22'],
            answer: 0
          },
          {
            question: 'A is 2 times efficient as B. If B alone can complete a job in 30 days, how long will A take?',
            options: ['15 days', '20 days', '25 days', '18 days'],
            answer: 0
          },
          {
            question: 'A and B can do a job in 24 and 36 days respectively. How long will they take working together?',
            options: ['14 days', '15 days', '16 days', '18 days'],
            answer: 1
          },
          {
            question: 'A and B work on a task. A can do it in 12 days alone. Working together, they finish it in 8 days. How long does B take?',
            options: ['24 days', '18 days', '20 days', '22 days'],
            answer: 0
          },
          {
            question: 'A, B, and C can do a work in 20, 30, and 60 days respectively. How long will they take working together?',
            options: ['8 days', '10 days', '12 days', '9 days'],
            answer: 1
          },
          {
            question: 'A can finish a work in 21 days and B in 28 days. How many days will they take to finish the work together?',
            options: ['12 days', '14 days', '15 days', '18 days'],
            answer: 0
          },
          {
            question: 'A and B work on a wall. A does 3/4 of the work and B the remaining in 12 days. How long will B take alone?',
            options: ['24 days', '16 days', '20 days', '18 days'],
            answer: 1
          },
          {
            question: 'A works 6 hours a day and completes a job in 12 days. B works 4 hours a day and finishes the job in 18 days. Who is more efficient?',
            options: ['A', 'B', 'Both equal', 'Cannot say'],
            answer: 0
          },
          {
            question: '15 men can do a job in 12 days. How long will 10 men take to do the same job?',
            options: ['18 days', '20 days', '16 days', '22 days'],
            answer: 0
          },
          {
            question: 'A can do a job in 16 days and B in 24 days. They start together but B leaves after 4 days. How long will A take to finish the work alone?',
            options: ['14 days', '15 days', '10 days', '12 days'],
            answer: 2
          },
          {
            question: 'A works in 10 days, B can do 60% of the work in 12 days. Who is faster?',
            options: ['A', 'B', 'Both equal', 'Cannot decide'],
            answer: 0
          },
          {
            question: 'A job can be completed by A and B in 15 days. A alone can finish in 20 days. How long will B take?',
            options: ['60 days', '40 days', '50 days', '45 days'],
            answer: 0
          },
          {
            question: 'A and B together can paint a wall in 5 hours. A alone can paint in 8 hours. How long will B take?',
            options: ['10 hours', '12 hours', '15 hours', '13 hours'],
            answer: 2
          },
          {
            question: '5 men can complete work in 12 days. 10 men start the work, but 4 men leave after 3 days. How long will it still take?',
            options: ['8 days', '10 days', '9 days', '7 days'],
            answer: 2
          },
          {
            question: 'A does a job in 12 days. He works 4 days and then B finishes the work in 8 days. How long will B take alone?',
            options: ['20 days', '18 days', '12 days', '15 days'],
            answer: 2
          },
          {
            question: 'A and B together can do a job in 24 days. A alone can do it in 30 days. How many days will B alone take?',
            options: ['40 days', '50 days', '120 days', '45 days'],
            answer: 2
          },
          {
            question: 'A job is done by 12 men in 14 days. How many men are required to do it in 7 days?',
            options: ['18', '20', '24', '28'],
            answer: 2
          },
          {
            question: 'A can do a work in 15 days. B can do the same work in 20 days. They work together but B leaves after 6 days. How long will A take to complete the remaining work?',
            options: ['10 days', '6 days', '15 days', '18 days'],
            answer: 1
          },
          {
            question: '7 men can do a piece of work in 15 days. After 5 days, 2 men leave. How many days more will the remaining men take?',
            options: ['11 days', '12 days', '14 days', '10 days'],
            answer: 2
          },
          {
            question: 'If A and B together can do a work in 14 days and B can do it in 20 days, how long will A take?',
            options: ['40 days', '35 days', '30 days', '25 days'],
            answer: 1
          }
        ],
        
        // Set 3: Questions 41-60
        [
          {
            question: 'A copies 20 pages in 3 hours. How many pages can he copy in 5 hours?',
            options: ['30', '33', '35', '40'],
            answer: 1
          },
          {
            question: 'A and B together can complete a work in 20 days. They started the work but after 5 days, B left. A finished the remaining work in 20 days. How long does B alone take to finish the work?',
            options: ['25 days', '30 days', '40 days', '60 days'],
            answer: 3
          },
          {
            question: 'A, B, and C can do a piece of work in 25, 30, and 20 days respectively. How long will they take if they work together?',
            options: ['10 days', '12 days', '15 days', '8 days'],
            answer: 0
          },
          {
            question: 'A can do a piece of work in 10 days. B can do half of the work in 6 days. Who is faster?',
            options: ['A', 'B', 'Both equal', 'Cannot say'],
            answer: 1
          },
          {
            question: 'A and B work together for 5 days to finish a work in 12 days. How long will A alone take if A is twice as efficient as B?',
            options: ['18 days', '20 days', '24 days', '22 days'],
            answer: 0
          },
          {
            question: 'If A can do a work in 10 days and B alone in 15 days, then how much work will A do in 3 days?',
            options: ['1/4', '3/10', '1/5', '1/6'],
            answer: 1
          },
          {
            question: '4 men finish the work in 20 days. 2 men leave after 5 days. How long will it take to complete the work?',
            options: ['22 days', '23 days', '35 days', '26 days'],
            answer: 2
          },
          {
            question: 'A work takes 60 hours to complete. If 5 people work 3 hours a day to complete it, how many days they will take to finish?',
            options: ['4 days', '6 days', '8 days', '12 days'],
            answer: 0
          },
          {
            question: 'Two taps fill a tank in 3 and 6 hours. If both taps are opened, how long will the tank be filled?',
            options: ['2 hours', '3 hours', '4 hours', '5 hours'],
            answer: 0
          },
          {
            question: '15 men can do a piece of work in 10 days. How many men are required to finish it in 5 days?',
            options: ['25', '30', '27', '28'],
            answer: 1
          },
          {
            question: 'A, B and C together complete a work in 12 days. A and B together can do it in 15 days. B and C together finish it in 20 days. How long will C alone take?',
            options: ['60 days', '50 days', '40 days', '45 days'],
            answer: 0
          },
          {
            question: 'A and B can do a work in 10 and 15 days respectively. They work together for 4 days, then A leaves. How many more days will B take to finish?',
            options: ['6 days', '7 days', '8 days', '5 days'],
            answer: 0
          },
          {
            question: 'A works for 5 days and then B finishes the remaining work in 8 days. If A alone finishes the job in 12 days, how long will B take alone?',
            options: ['24 days', '20 days', '18 days', '22 days'],
            answer: 0
          },
          {
            question: 'A completes a work in 9 days. B does half the work. How much time will B take?',
            options: ['18 days', '20 days', '16 days', '24 days'],
            answer: 0
          },
          {
            question: 'If A is twice as efficient as B, and B is thrice as efficient as C, and C alone takes 18 days to complete the work, how long will A take?',
            options: ['3 days', '6 days', '9 days', '12 days'],
            answer: 0
          },
          {
            question: 'A and B together take 12 days to complete work. A alone is twice as efficient as B. How long will B take alone?',
            options: ['36 days', '20 days', '18 days', '22 days'],
            answer: 0
          },
          {
            question: 'If 8 men can complete a work in 15 days, how many men are required to finish it in 10 days?',
            options: ['12', '10', '16', '14'],
            answer: 0
          },
          {
            question: 'A and B together finish a work in 15 days. B alone finishes in 30 days. How long will A take?',
            options: ['30 days', '22 days', '18 days', '25 days'],
            answer: 0
          },
          {
            question: 'A is 20% more efficient than B. If A alone finishes a job in 10 days, how many more days will B take?',
            options: ['2 days', '14 days', '15 days', '13 days'],
            answer: 0
          },
          {
            question: 'A, B and C together finish a job in 24 days. B and C together finish it in 30 days. A and C together do it in 40 days. How long will A take alone?',
            options: ['120 days', '70 days', '60 days', '90 days'],
            answer: 0
          }
        ],
        
        // Set 4: Questions 61-80
        [
          {
            question: 'A, B, and C can finish a work in 6, 8, and 12 days respectively. They work on the job in order---A works 1 day, B 2 days, and C 3 days, then A again, and so on. How many days will they take to finish the job?',
            options: ['9 days', '12 days', '13 days', '14 days'],
            answer: 0
          },
          {
            question: 'A, B and C start a work and after 5 days, C leaves. A and B finish the remaining work in 10 days. If A alone can do the work in 20 days and B alone in 30 days, the total work will be completed in?',
            options: ['15 days', '18 days', '20 days', '22 days'],
            answer: 1
          },
          {
            question: '20 men can do a work in 24 days. After some days, 4 men leave, and the work is completed in 30 days. The number of days they worked before 4 men left is?',
            options: ['10 days', '12 days', '6 days', '16 days'],
            answer: 2
          },
          {
            question: 'A and B work on a job. A completes half of the work in 8 days. If together they finish the work in 12 days, then B alone completes the work in?',
            options: ['24 days', '20 days', '16 days', '48 days'],
            answer: 3
          },
          {
            question: 'A, B and C working together can finish a piece of work in 15 days. B and C together can do it in 20 days, and A is 2 times efficient as B. How long will C take alone?',
            options: ['40 days', '50 days', '60 days', '70 days'],
            answer: 2
          },
          {
            question: 'A, B and C\'s efficiencies are in the ratio 3:4:5. If they can finish a piece of work together in 6 days, how many days will C alone take?',
            options: ['18 days', '20 days', '14.4 days', '30 days'],
            answer: 2
          },
          {
            question: 'A, B and C can finish a work in 30, 40 and 60 days respectively. If they start the work together but A leaves after 4 days and B leaves after 8 days, how much longer will C take to finish the work?',
            options: ['12 days', '24 days', '18 days', '20 days'],
            answer: 1
          },
          {
            question: 'A machine can fill 60 bottles in 6 minutes. Another machine can fill 90 bottles in 10 minutes. How long will both machines take together to fill 300 bottles?',
            options: ['18 minutes', '15 minutes', '12 minutes', '10 minutes'],
            answer: 1
          },
          {
            question: 'A tank is filled by two pipes in 4 hours and 6 hours respectively. Due to a leak, it takes 9 hours to fill the tank. The time taken to empty the tank by the leak is?',
            options: ['12 hours', '3.6 hours', '18 hours', '20 hours'],
            answer: 1
          },
          {
            question: 'A and B can do a work in 8 and 12 days respectively. They work together for 4 days and then B leaves. How many days will A take to finish the remaining work?',
            options: ['2 days', '7 days', '8 days', '5 days'],
            answer: 0
          },
          {
            question: 'A, B and C can do work in 8, 12 and 16 days respectively. They work on it alternately, A working on the 1st day, B on 2nd, and C on 3rd, then A on 4th day, and so on. How many days will they take to finish the work?',
            options: ['10 days', '11 days', '12 days', '13 days'],
            answer: 1
          },
          {
            question: 'A, B and C together can complete a work in 20 days. A alone can finish it in 30 days, and B alone in 60 days. How long will C alone take?',
            options: ['60 days', '45 days', '50 days', '40 days'],
            answer: 0
          },
          {
            question: '12 men can finish a work in 18 days. After they worked for 6 days, 6 men left. How many more days will the remaining men take to finish the work?',
            options: ['12 days', '24 days', '18 days', '20 days'],
            answer: 1
          },
          {
            question: 'A and B\'s efficiencies are in the ratio 7:9. If A can do a piece of work in 24 days alone, in how many days will they complete the work working together?',
            options: ['12 days', '13 days', '10.5 days', '15 days'],
            answer: 2
          },
          {
            question: 'A and B can do a piece of work in 24 and 16 days respectively. They work on it alternately starting with A. How many days will they take to finish the work?',
            options: ['19.2 days', '15 days', '18 days', '20 days'],
            answer: 0
          },
          {
            question: 'A and B together do a piece of work in 12 days. After working for 6 days, A leaves. The remaining work is done by B in 10 days. How long will A take alone?',
            options: ['24 days', '20 days', '30 days', '18 days'],
            answer: 2
          },
          {
            question: 'A tank can be filled by two pipes in 12 and 16 hours respectively. There is a leak which empties the tank in 24 hours. When both pipes are opened together and leak is open, how long will it take to fill the tank?',
            options: ['9.6 hours', '20 hours', '15 hours', '14 hours'],
            answer: 0
          },
          {
            question: 'A can do a work in 15 days and B in 20 days. They work on it alternately starting with A. How many days will the work be completed?',
            options: ['18 days', '17.25 days', '20 days', '22 days'],
            answer: 1
          },
          {
            question: 'A man can row upstream at 12 km/hr and downstream at 18 km/hr. Find the speed of the stream?',
            options: ['3 km/hr', '4 km/hr', '5 km/hr', '6 km/hr'],
            answer: 0
          },
          {
            question: 'A can do a job in 6 days. He works for 2 days and then B alone does the remaining work in 5 days. How long will B take to do the work alone?',
            options: ['7.5 days', '8 days', '12 days', '15 days'],
            answer: 0
          }
        ],
        
        // Set 5: Questions 81-100
        [
          {
            question: 'A and B take 12 and 16 days to do a work respectively. They work for 4 days together and then B leaves. How much longer will A take to finish the work?',
            options: ['5.33 days', '10 days', '12 days', '14 days'],
            answer: 0
          },
          {
            question: 'A and B working together complete a job in 15 days. If A alone can do it in 20 days, how long will B alone take?',
            options: ['60 days', '25 days', '20 days', '15 days'],
            answer: 0
          },
          {
            question: 'A tank is filled by two pipes in 3 hours and 6 hours respectively. Both are opened together, but after 1 hour, the second pipe is closed. How long will it take to fill the tank?',
            options: ['4 hours', '2.5 hours', '3 hours', '2 hours'],
            answer: 1
          },
          {
            question: 'A can paint a house in 12 days and B in 16 days. They work on alternate days starting with A. How many days will it take to finish?',
            options: ['13.7 days', '15 days', '16 days', '18 days'],
            answer: 0
          },
          {
            question: 'A, B, C can complete a work in 6, 8, and 12 days respectively. They work alternately day by day starting with A. In how many days will they finish the work?',
            options: ['7.2 days', '12 days', '13 days', '14 days'],
            answer: 0
          },
          {
            question: 'Two pipes can fill a tank in 9 and 12 hours. Both are opened together but after 3 hours the first pipe is closed. How long will it take to fill the tank?',
            options: ['6 hours', '7 hours', '6.5 hours', '5 hours'],
            answer: 2
          },
          {
            question: '12 men can build a wall in 30 days. After 10 days, 4 men leave. How long will it take to finish the remaining work?',
            options: ['40 days', '50 days', '30 days', '52 days'],
            answer: 2
          },
          {
            question: 'A can do a work in 9 days and B is 2/3 as efficient as A. How long will B take to do the work?',
            options: ['13 days', '14 days', '13.5 days', '16 days'],
            answer: 2
          },
          {
            question: 'A completes a job in 18 days. B completes same job in 24 days. A and B together work for 6 days and then B leaves. How many days will A take to finish the work?',
            options: ['6.3 days', '18 days', '15 days', '20 days'],
            answer: 0
          },
          {
            question: 'A is thrice as efficient as B. They can complete a work together in 12 days. How many days will B take alone?',
            options: ['32 days', '36 days', '16 days', '40 days'],
            answer: 2
          },
          {
            question: 'A and B can do a piece of work in 15 and 20 days respectively. They start working together but A leaves after 6 days. How many days will B take to complete the work?',
            options: ['10 days', '8 days', '15 days', '18 days'],
            answer: 1
          },
          {
            question: 'A tap can fill a tank in 6 hours. Due to a leak, the tank takes 8 hours to fill. How long will the leak alone take to empty the full tank?',
            options: ['24 hours', '20 hours', '30 hours', '40 hours'],
            answer: 0
          },
          {
            question: '6 men can do a work in 15 days. 3 men work for 5 days and then 4 men join them. How many days will they take to complete the work?',
            options: ['8 days', '9 days', '7 days', '12 days'],
            answer: 2
          },
          {
            question: 'A and B work alternately starting with A. They complete a work in 11 days. If A alone takes 12 days, how long will B take?',
            options: ['60 days', '18 days', '20 days', '22 days'],
            answer: 0
          },
          {
            question: 'A can complete a work in 10 days and B can complete the same work in 15 days. They start the work together, but B leaves after 3 days. How long will A take to finish the remaining work?',
            options: ['9 days', '10 days', '5 days', '12 days'],
            answer: 2
          },
          {
            question: 'A man rows downstream at 12 km/hr and upstream at 8 km/hr. What is the speed of the stream?',
            options: ['1 km/hr', '2 km/hr', '3 km/hr', '4 km/hr'],
            answer: 1
          },
          {
            question: 'A, B and C together can do a job in 10 days. A alone can do it in 15 days and B alone can do it in 20 days. How many days will C alone take?',
            options: ['60 days', '40 days', '25 days', '35 days'],
            answer: 0
          },
          {
            question: 'A and B together can complete a work in 20 days. They started the work but after 5 days, B left. A finished the remaining work in 20 days. How long will B alone take?',
            options: ['25 days', '30 days', '60 days', '40 days'],
            answer: 2
          },
          {
            question: 'A and B can do a piece of work in 16 and 24 days respectively. Starting together, both work for 6 days; after that, A leaves and B finishes the work. How many more days will B take?',
            options: ['10 days', '9 days', '15 days', '20 days'],
            answer: 1
          },
          {
            question: 'A can do a work in 21 days and B in 28. Both together begin the work, but after 7 days B leaves. How much work is left?',
            options: ['1/7', '2/3', '1/8', '1/5'],
            answer: 1
          }
        ]
     ]// End of time and work
    },

    
    {
      name: 'Percentage',
      sets: [
        // Set 1: Questions 1-20
        [
          { question: 'A number when divided by 25 gives remainder 5. What will be the remainder when the same number is divided by 5?', options: ['0', '1', '2', '5'], answer: 0 },
          { question: 'If 25% of A is equal to 20% of B, then what percentage of B is A?', options: ['75%', '80%', '85%', '90%'], answer: 1 },
          { question: 'A can complete a work in 12 days while B can complete the same work in 18 days. If they work together, in how many days will they complete the work?', options: ['7.2 days', '8.5 days', '9 days', '10 days'], answer: 0 },
          { question: 'If the ratio of A:B is 3:5 and B:C is 4:7, what is the ratio of A:B:C?', options: ['12:20:35', '3:5:7', '15:25:35', '6:10:14'], answer: 0 },
          { question: 'What will be the simple interest on Rs. 8000 for 2 years at 5% per annum?', options: ['Rs. 600', 'Rs. 700', 'Rs. 800', 'Rs. 900'], answer: 2 },
          { question: 'A shopkeeper sells an article at 20% profit. If he had bought it at 10% less and sold at Rs. 132 less, he would have gained 30%. Find the cost price.', options: ['Rs. 800', 'Rs. 900', 'Rs. 1000', 'Rs. 1100'], answer: 2 },
          { question: 'A train travels 180 km in 3 hours. What is its speed in m/s?', options: ['15 m/s', '16.67 m/s', '18 m/s', '20 m/s'], answer: 1 },
          { question: 'The average of 5 numbers is 20. If one number is excluded, the average becomes 18. What is the excluded number?', options: ['26', '28', '30', '32'], answer: 1 },
          { question: 'What is the compound interest on Rs. 1000 for 2 years at 10% per annum?', options: ['Rs. 200', 'Rs. 210', 'Rs. 220', 'Rs. 230'], answer: 1 },
          { question: 'In how many ways can 5 people be arranged in a row?', options: ['100', '110', '120', '125'], answer: 2 },
          { question: 'What is the probability of getting a sum of 8 when two dice are thrown?', options: ['1/9', '5/36', '1/6', '7/36'], answer: 1 },
          { question: 'The HCF of two numbers is 12 and their LCM is 144. If one number is 36, find the other number.', options: ['42', '48', '54', '60'], answer: 1 },
          { question: 'A father is 3 times as old as his son. After 12 years, he will be twice as old as his son. What are their present ages?', options: ['Son: 12, Father: 36', 'Son: 15, Father: 45', 'Son: 18, Father: 54', 'Son: 10, Father: 30'], answer: 0 },
          { question: 'The area of a rectangle is 240 sq cm and its length is 20 cm. What is its perimeter?', options: ['52 cm', '56 cm', '60 cm', '64 cm'], answer: 1 },
          { question: 'A, B, and C invest Rs. 3000, Rs. 4000, and Rs. 5000 respectively. What will be A’s share in a profit of Rs. 2400?', options: ['Rs. 600', 'Rs. 700', 'Rs. 800', 'Rs. 900'], answer: 0 },
          { question: 'Find the missing number in the series: 2, 6, 12, 20, 30, ?', options: ['40', '42', '44', '46'], answer: 1 },
          { question: 'If FLOWER is coded as EQNVDQ, how is GARDEN coded?', options: ['FZQCDK', 'HBSEFM', 'FZSCEM', 'GZSCFM'], answer: 2 },
          { question: 'Pointing to a man, a woman said, "His mother is the only daughter of my mother." How is the woman related to the man?', options: ['Mother', 'Sister', 'Aunt', 'Grandmother'], answer: 0 },
          { question: 'A person walks 3 km North, then 4 km East. What is the shortest distance from his starting point?', options: ['5 km', '6 km', '7 km', '8 km'], answer: 0 },
          { question: 'All roses are flowers. Some flowers are red. Which conclusion follows?', options: ['All roses are red', 'Some roses are red', 'No roses are red', 'None of the above'], answer: 3 }
        ],

        // Set 2: Questions 1-20
        [
            { question: 'Five friends A, B, C, D, E are sitting in a row. A and E are not at the ends. B is to the left of C. D is not next to B. Who sits at the left end?', options: ['A', 'B', 'C', 'D'], answer: 3 },
          { question: 'If today is Tuesday, what day will it be after 100 days?', options: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], answer: 3 },
          { question: 'DOCTOR : PATIENT :: TEACHER : ?', options: ['SCHOOL', 'STUDENT', 'BOOK', 'CLASS'], answer: 1 },
          { question: 'Statement: All birds can fly. Penguin is a bird. Conclusion: Penguin can fly.', options: ['True', 'False', 'Uncertain', 'None of these'], answer: 1 },
          { question: 'What is the age of Rohit? I. Rohit is 20 years older than Amit. II. Amit’s age is 25 years.', options: ['Statement I alone is sufficient', 'Statement II alone is sufficient', 'Both statements are needed', 'Neither statement is sufficient'], answer: 2 },
          { question: 'Choose the synonym of ABUNDANT:', options: ['Scarce', 'Plentiful', 'Rare', 'Limited'], answer: 1 },
          { question: 'Choose the antonym of BENEVOLENT:', options: ['Kind', 'Generous', 'Malevolent', 'Charitable'], answer: 2 },
          { question: 'Choose the correct sentence: She ___ like coffee.', options: ['don\'t', 'doesn\'t likes', 'doesn\'t like', 'not like'], answer: 2 },
          { question: 'The weather was so hot that we ____ go outside.', options: ['can\'t', 'couldn\'t', 'won\'t', 'wouldn\'t'], answer: 1 },
          { question: '"A blessing in disguise" means:', options: ['A visible blessing', 'An apparent misfortune that ends up having good results', 'A mixed blessing', 'A difficult situation'], answer: 1 },
          { question: 'Output of: printf("%d", 10 + 2 * 5);', options: ['60', '20', '15', '25'], answer: 1 },
          { question: 'Which data structure follows LIFO principle?', options: ['Queue', 'Stack', 'Array', 'Linked List'], answer: 1 },
          { question: 'Which SQL command is used to retrieve data from a database?', options: ['INSERT', 'UPDATE', 'SELECT', 'DELETE'], answer: 2 },
          { question: 'What does HTTP stand for?', options: ['HyperText Transfer Protocol', 'High Transfer Text Protocol', 'HyperText Translation Protocol', 'High Text Transfer Protocol'], answer: 0 },
          { question: 'Which scheduling algorithm gives the shortest job highest priority?', options: ['FCFS', 'Round Robin', 'SJF', 'Priority Scheduling'], answer: 2 },
          { question: 'What day of the week was January 1, 2020?', options: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], answer: 2 },
          { question: 'The area of a circle with radius 7 cm is:', options: ['144 sq cm', '154 sq cm', '164 sq cm', '174 sq cm'], answer: 1 },
          { question: 'In what ratio should water be mixed with milk costing Rs. 12 per liter to get a mixture worth Rs. 8 per liter?', options: ['1:2', '1:3', '2:3', '1:1'], answer: 0 },
          { question: 'Two pipes can fill a tank in 6 and 8 hours respectively. If both pipes are opened together, in how many hours will the tank be filled?', options: ['3.43 hours', '3.5 hours', '4 hours', '4.5 hours'], answer: 0 },
          { question: 'At what time between 3 and 4 o\'clock will the hands of a clock be together?', options: ['3:15', '3:16.36', '3:16', '3:17'], answer: 1 }
        ],

        // Set 3: Questions 41-60
        [
          { question: 'A boat travels 24 km downstream in 2 hours and 16 km upstream in 2 hours. What is the speed of the boat in still water?', options: ['10 km/h', '11 km/h', '12 km/h', '13 km/h'], answer: 0 },
          { question: 'Find the sum of first 20 natural numbers:', options: ['200', '210', '220', '230'], answer: 1 },
          { question: 'What is log₂ 8?', options: ['2', '3', '4', '8'], answer: 1 },
          { question: 'Which of the following numbers is divisible by 9?', options: ['2341', '3456', '1234', '5679'], answer: 1 },
          { question: 'If x + y = 10 and x - y = 4, then x² - y² = ?', options: ['36', '40', '44', '48'], answer: 1 },
          { question: 'What is the distance between points (3,4) and (6,8)?', options: ['4', '5', '6', '7'], answer: 1 },
          { question: 'The median of 3, 7, 5, 9, 11 is:', options: ['5', '7', '9', '11'], answer: 1 },
          { question: '√48 + √75 = ?', options: ['9√3', '10√3', '11√3', '12√3'], answer: 0 },
          { question: '(√1024 + √625) × √49 = ?', options: ['245', '250', '255', '259'], answer: 3 },
          { question: 'If in a class of 40 students, 60% are boys, how many girls are there?', options: ['14', '16', '18', '20'], answer: 1 },
          { question: 'If a number when divided by 67 leaves remainder 7, what will be the remainder when the same number is divided by 134?', options: ['7', '14', '74', 'Either 7 or 74'], answer: 3 },
          { question: 'A’s income is 25% more than B’s. By what percent is B’s income less than A’s?', options: ['20%', '22%', '25%', '30%'], answer: 0 },
          { question: 'A can do a work in 15 days, B in 20 days, and C in 30 days. They work together for 2 days, then A leaves. In how many more days will B and C complete the remaining work?', options: ['8 days', '9 days', '10 days', '12 days'], answer: 0 },
          { question: 'If A:B = 2:3, B:C = 4:5, and C:D = 6:7, then find A:D', options: ['8:35', '16:35', '24:35', '12:35'], answer: 1 },
          { question: 'What is the difference between compound interest and simple interest on Rs. 5000 for 2 years at 10% per annum?', options: ['Rs. 40', 'Rs. 50', 'Rs. 60', 'Rs. 100'], answer: 1 },
          { question: 'A trader marks his goods 40% above cost price but gives a discount of 15% on marked price. What is his profit percentage?', options: ['19%', '20%', '21%', '25%'], answer: 0 },
          { question: 'Two trains 200m and 300m long are running in opposite directions at 40 km/h and 60 km/h. In how much time will they cross each other?', options: ['15 seconds', '18 seconds', '20 seconds', '25 seconds'], answer: 1 },
          { question: 'The average age of 30 students is 15 years. If the teacher\'s age is included, the average becomes 16 years. What is the teacher\'s age?', options: ['45 years', '46 years', '47 years', '48 years'], answer: 1 },
          { question: 'In how many ways can the letters of the word ASSASSINATION be arranged?', options: ['10,810,800', '10,810,000', '10,900,800', '11,000,000'], answer: 0 },
          { question: 'A bag contains 4 red, 5 black, and 6 white balls. Three balls are drawn at random. What is the probability that all three are of different colors?', options: ['8/91', '24/91', '32/91', '40/91'], answer: 1 }
        ],
         // Set 4: Questions 61-80
        [
          { question: 'Find the next term in the series: 2, 8, 18, 32, 50, ?', options: ['70', '72', '75', '78'], answer: 1 },
          { question: 'If SEARCH is coded as TFBSDI, then PATTERN is coded as:', options: ['QBUUFSO', 'QBUUFSP', 'QCUUFSO', 'QBUUESO'], answer: 0 },
          { question: 'A is B\'s sister. C is B\'s mother. D is C\'s father. E is D\'s mother. How is A related to E?', options: ['Great granddaughter', 'Granddaughter', 'Daughter', 'Great grandmother'], answer: 0 },
          { question: 'A man walks 20 m north, then 30 m east, then 20 m south, then 10 m west. How far is he from the starting point?', options: ['20 m', '25 m', '30 m', '35 m'], answer: 0 },
          { question: 'All flowers are beautiful. Some beautiful things are expensive. All expensive things are rare. What can be concluded?', options: ['All flowers are expensive', 'Some flowers may be rare', 'All beautiful things are rare', 'No definite conclusion'], answer: 1 },
          { question: 'Eight people around a circular table: A is 2nd right of B; C is 3rd left of A; D is opposite C. Where is E if E is adjacent to both B and D?', options: ['Between B and D', '2nd right of D', '3rd left of B', 'Opposite A'], answer: 0 },
          { question: 'If "MONDAY" is coded as "NPOEBZ," then "SUNDAY" would be coded as:', options: ['TVOEBZ', 'TVOEBX', 'TVOEAZ', 'TVOFBZ'], answer: 0 },
          { question: 'Statement: "Only the brave deserve the fair." Which assumption is implicit?', options: ['The cowardly don\'t deserve anything', 'Fair people are brave', 'Bravery is a desirable quality', 'All brave people are fair'], answer: 2 },
          { question: 'Is triangle ABC a right triangle? I. AB = 5, BC = 12, AC = 13 II. ∠B = 90°', options: ['I alone sufficient', 'II alone sufficient', 'Either I or II sufficient', 'Both needed'], answer: 2 },
          { question: 'CRICKET : PITCH :: TENNIS : ?', options: ['NET', 'RACKET', 'COURT', 'BALL'], answer: 2 },
          { question: 'Choose the best synonym for UBIQUITOUS:', options: ['Rare', 'Omnipresent', 'Obvious', 'Transparent'], answer: 1 },
          { question: 'The antonym of EPHEMERAL is:', options: ['Permanent', 'Temporary', 'Eternal', 'Brief'], answer: 2 },
          { question: 'Neither of the solutions ____ acceptable to the committee.', options: ['are', 'is', 'were', 'have been'], answer: 1 },
          { question: 'Tone of passage: "The technological revolution has fundamentally altered human communication patterns."', options: ['Pessimistic', 'Optimistic', 'Neutral/Analytical', 'Critical'], answer: 2 },
          { question: 'PERSPICACIOUS most nearly means:', options: ['Stubborn', 'Perceptive', 'Persistent', 'Precious'], answer: 1 },
          { question: 'What is the time complexity of binary search?', options: ['O(n)', 'O(log n)', 'O(n²)', 'O(n log n)'], answer: 1 },
          { question: 'Which normal form eliminates transitive dependency?', options: ['1NF', '2NF', '3NF', 'BCNF'], answer: 2 },
          { question: 'Which layer of the OSI model handles routing?', options: ['Physical', 'Data Link', 'Network', 'Transport'], answer: 2 },
          { question: 'Which OOP principle allows a class to have multiple methods with the same name?', options: ['Encapsulation', 'Inheritance', 'Polymorphism', 'Abstraction'], answer: 2 },
          { question: 'Cache memory is faster than main memory because it uses:', options: ['Larger storage capacity', 'Static RAM', 'Dynamic RAM', 'Magnetic storage'], answer: 1 }
        ],

        // Set 5: Questions 81-100
        [
          { question: 'A circle is inscribed in a square of side 10 cm. What is the area between the square and the circle?', options: ['21.46 sq cm', '22.16 sq cm', '21.5 sq cm', '22.5 sq cm'], answer: 0 },
          { question: 'Two alloys contain copper:zinc in ratios 3:2 and 2:3. In what ratio should they be mixed to get an alloy with equal Cu and Zn?', options: ['1:1', '2:3', '3:2', '1:2'], answer: 0 },
          { question: 'A car covers a distance at 60 km/h and returns at 40 km/h. What is the average speed for the whole journey?', options: ['48 km/h', '50 km/h', '52 km/h', '46 km/h'], answer: 0 },
          { question: 'A, B, C start a business with capitals 2:3:4. A withdraws after 6 months, B after 8 months. A\'s share in Rs. 234,000 profit?', options: ['Rs. 36,000', 'Rs. 42,000', 'Rs. 48,000', 'Rs. 54,000'], answer: 0 },
          { question: 'Three dice are thrown. What is the probability of getting a sum of 10?', options: ['25/216', '27/216', '30/216', '35/216'], answer: 1 },
          { question: 'If log₁₀ 2 = 0.301 and log₁₀ 3 = 0.477, find log₁₀ 12:', options: ['1.079', '1.176', '1.255', '1.301'], answer: 0 },
          { question: 'A sphere is inscribed in a cube of edge 6 cm. What is the volume of the sphere?', options: ['113.04 cu cm', '113.14 cu cm', '113.24 cu cm', '113.34 cu cm'], answer: 0 },
          { question: 'Sum of ages of A and B = 50. Five years ago, A was thrice as old as B. What is A\'s present age?', options: ['35 years', '37 years', '40 years', '42 years'], answer: 0 },
          { question: 'The variance of {2, 4, 6, 8, 10} is:', options: ['6', '7', '8', '10'], answer: 2 },
          { question: 'How many three-digit numbers are divisible by 7?', options: ['128', '129', '130', '131'], answer: 1 },
          { question: 'If A = [ , ] and B = [ , ], what is AB?', options: ['[ , ]', '[ , ]', '[ , ]', '[ , ]'], answer: 0 },
          { question: 'If sin θ + cos θ = √2, then sin θ·cos θ = ?', options: ['0', '1/2', '1', '√2/2'], answer: 1 },
          { question: 'The decimal 0.overline{142857} as a fraction is:', options: ['1/7', '2/7', '3/7', '1/6'], answer: 0 },
          { question: 'In a binary search tree, for inorder traversal to give a sorted sequence, which condition must be satisfied?', options: ['Left < Root < Right', 'Left > Root > Right', 'Root < Left < Right', 'No specific condition'], answer: 0 },
          { question: 'The time complexity of merge sort is:', options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(log n)'], answer: 1 },
          { question: 'If p → q is false, then which of the following must be true?', options: ['p is false', 'q is false', 'p is true and q is false', 'p is false and q is true'], answer: 2 },
          { question: 'A rectangle is inscribed in a semicircle of radius 10. What is the maximum area of the rectangle?', options: ['100', '50', '75', '80'], answer: 0 },
          { question: 'Which sorting algorithm has the best worst-case time complexity?', options: ['Quick Sort', 'Bubble Sort', 'Heap Sort', 'Selection Sort'], answer: 2 },
          { question: 'In how many ways can 8 different books be arranged on a shelf if 3 particular books must always be together?', options: ['4320', '4230', '4032', '4302'], answer: 0 },
          { question: 'A three-digit number has digits summing to 18. The middle digit equals the sum of the other two, and reversing the digits increases the number by 297. Find the number.', options: ['357', '369', '459', '471'], answer: 2 }
        ],
     ]
    },
    // End of percentage

    {
      name: 'Average',
      sets: [
        // Set 1: Questions 1-20
        [
          { question: 'A number when divided by 25 gives remainder 5. What will be the remainder when the same number is divided by 5?', options: ['0','1','2','5'], answer: 0 },
          { question: 'If 25% of A is equal to 20% of B, then what percentage of B is A?', options: ['75%','80%','85%','90%'], answer: 1 },
          { question: 'A can complete a work in 12 days while B can complete the same work in 18 days. If they work together, in how many days will they complete the work?', options: ['7.2 days','8.5 days','9 days','10 days'], answer: 0 },
          { question: 'If the ratio of A:B is 3:5 and B:C is 4:7, what is the ratio of A:B:C?', options: ['12:20:35','3:5:7','15:25:35','6:10:14'], answer: 0 },
          { question: 'What will be the simple interest on Rs. 8000 for 2 years at 5% per annum?', options: ['Rs. 600','Rs. 700','Rs. 800','Rs. 900'], answer: 2 },
          { question: 'A shopkeeper sells an article at 20% profit. If he had bought it at 10% less and sold at Rs. 132 less, he would have gained 30%. Find the cost price.', options: ['Rs. 800','Rs. 900','Rs. 1000','Rs. 1100'], answer: 2 },
          { question: 'A train travels 180 km in 3 hours. What is its speed in m/s?', options: ['15 m/s','16.67 m/s','18 m/s','20 m/s'], answer: 1 },
          { question: 'The average of 5 numbers is 20. If one number is excluded, the average becomes 18. What is the excluded number?', options: ['26','28','30','32'], answer: 1 },
          { question: 'What is the compound interest on Rs. 1000 for 2 years at 10% per annum?', options: ['Rs. 200','Rs. 210','Rs. 220','Rs. 230'], answer: 1 },
          { question: 'In how many ways can 5 people be arranged in a row?', options: ['100','110','120','125'], answer: 2 },
          { question: 'What is the probability of getting a sum of 8 when two dice are thrown?', options: ['1/9','5/36','1/6','7/36'], answer: 1 },
          { question: 'The HCF of two numbers is 12 and their LCM is 144. If one number is 36, find the other number.', options: ['42','48','54','60'], answer: 1 },
          { question: 'A father is 3 times as old as his son. After 12 years, he will be twice as old as his son. What are their present ages?', options: ['Son:12,Father:36','Son:15,Father:45','Son:18,Father:54','Son:10,Father:30'], answer: 0 },
          { question: 'The area of a rectangle is 240 sq cm and its length is 20 cm. What is its perimeter?', options: ['52 cm','56 cm','60 cm','64 cm'], answer: 1 },
          { question: 'A, B, and C invest Rs. 3000, Rs. 4000, and Rs. 5000 respectively. What will be A’s share in a profit of Rs. 2400?', options: ['Rs. 600','Rs. 700','Rs. 800','Rs. 900'], answer: 0 },
          { question: 'Find the missing number: 2,6,12,20,30,?', options: ['40','42','44','46'], answer: 1 },
          { question: 'If FLOWER is coded as EQNVDQ, how is GARDEN coded?', options: ['FZQCDK','HBSEFM','FZSCEM','GZSCFM'], answer: 2 },
          { question: 'Pointing to a man, a woman said, "His mother is the only daughter of my mother." How is the woman related to the man?', options: ['Mother','Sister','Aunt','Grandmother'], answer: 0 },
          { question: 'A person walks 3 km North, then 4 km East. What is the shortest distance from his starting point?', options: ['5 km','6 km','7 km','8 km'], answer: 0 },
          { question: 'All roses are flowers. Some flowers are red. Which conclusion follows?', options: ['All roses are red','Some roses are red','No roses are red','None of the above'], answer: 3 }
        ],
        // Set 2: Questions 21–40
        [ { question: "A number when divided by 25 gives remainder 5. What will be the remainder when the same number is divided by 5?", options: ["0", "1", "2", "5"], answer: 0 },
          { question: "If 25% of A is equal to 20% of B, then what percentage of B is A?", options: ["75%", "80%", "85%", "90%"], answer: 1 },
          { question: "A can complete a work in 12 days while B can complete the same work in 18 days. If they work together, in how many days will they complete the work?", options: ["7.2 days", "8.5 days", "9 days", "10 days"], answer: 0 },
          { question: "If the ratio of A:B is 3:5 and B:C is 4:7, what is the ratio of A:B:C?", options: ["12:20:35", "3:5:7", "15:25:35", "6:10:14"], answer: 0 },
          { question: "What will be the simple interest on Rs. 8000 for 2 years at 5% per annum?", options: ["Rs. 600", "Rs. 700", "Rs. 800", "Rs. 900"], answer: 2 },
          { question: "A shopkeeper sells an article at 20% profit. If he had bought it at 10% less and sold at Rs. 132 less, he would have gained 30%. Find the cost price.", options: ["Rs. 800", "Rs. 900", "Rs. 1000", "Rs. 1100"], answer: 2 },
          { question: "A train travels 180 km in 3 hours. What is its speed in m/s?", options: ["15 m/s", "16.67 m/s", "18 m/s", "20 m/s"], answer: 1 },
          { question: "The average of 5 numbers is 20. If one number is excluded, the average becomes 18. What is the excluded number?", options: ["26", "28", "30", "32"], answer: 1 },
          { question: "What is the compound interest on Rs. 1000 for 2 years at 10% per annum?", options: ["Rs. 200", "Rs. 210", "Rs. 220", "Rs. 230"], answer: 1 },
          { question: "In how many ways can 5 people be arranged in a row?", options: ["100", "110", "120", "125"], answer: 2 },
          { question: "What is the probability of getting a sum of 8 when two dice are thrown?", options: ["1/9", "5/36", "1/6", "7/36"], answer: 1 },
          { question: "The HCF of two numbers is 12 and their LCM is 144. If one number is 36, find the other number.", options: ["42", "48", "54", "60"], answer: 1 },
          { question: "A father is 3 times as old as his son. After 12 years, he will be twice as old as his son. What are their present ages?", options: ["Son: 12, Father: 36", "Son: 15, Father: 45", "Son: 18, Father: 54", "Son: 10, Father: 30"], answer: 0 },
          { question: "The area of a rectangle is 240 sq cm and its length is 20 cm. What is its perimeter?", options: ["52 cm", "56 cm", "60 cm", "64 cm"], answer: 1 },
          { question: "A, B, and C invest Rs. 3000, Rs. 4000, and Rs. 5000 respectively. What will be A’s share in a profit of Rs. 2400?", options: ["Rs. 600", "Rs. 700", "Rs. 800", "Rs. 900"], answer: 0 },
          { question: "Find the missing number: 2, 6, 12, 20, 30, ?", options: ["40", "42", "44", "46"], answer: 1 },
          { question: "If FLOWER is coded as EQNVDQ, how is GARDEN coded?", options: ["FZQCDK", "HBSEFM", "FZSCEM", "GZSCFM"], answer: 2 },
          { question: "Pointing to a man, a woman said, \"His mother is the only daughter of my mother.\" How is the woman related to the man?", options: ["Mother", "Sister", "Aunt", "Grandmother"], answer: 0 },
          { question: "A person walks 3 km North, then 4 km East. What is the shortest distance from his starting point?", options: ["5 km", "6 km", "7 km", "8 km"], answer: 0 },
          { question: "All roses are flowers. Some flowers are red. Which conclusion follows?", options: ["All roses are red", "Some roses are red", "No roses are red", "None of the above"], answer: 3 }
        ],

        // Set 3 (questions 21-40)
        [
          { question: "Five friends A, B, C, D, E are sitting in a row. A and E are not at the ends. B is to the left of C. D is not next to B. Who sits at the left end?", options: ["A", "B", "C", "D"], answer: 3 },
          { question: "If today is Tuesday, what day will it be after 100 days?", options: ["Monday", "Tuesday", "Wednesday", "Thursday"], answer: 3 },
          { question: "DOCTOR : PATIENT :: TEACHER : ?", options: ["SCHOOL", "STUDENT", "BOOK", "CLASS"], answer: 1 },
          { question: "Statement: All birds can fly. Penguin is a bird. Conclusion: Penguin can fly.", options: ["True", "False", "Uncertain", "None of these"], answer: 1 },
          { question: "What is the age of Rohit? I. Rohit is 20 years older than Amit. II. Amit’s age is 25 years.", options: ["Statement I alone is sufficient", "Statement II alone is sufficient", "Both statements are needed", "Neither statement is sufficient"], answer: 2 },
          { question: "Choose the synonym of ABUNDANT:", options: ["Scarce", "Plentiful", "Rare", "Limited"], answer: 1 },
          { question: "Choose the antonym of BENEVOLENT:", options: ["Kind", "Generous", "Malevolent", "Charitable"], answer: 2 },
          { question: "Choose the correct sentence:", options: ["She don't like coffee", "She doesn't likes coffee", "She doesn't like coffee", "She not like coffee"], answer: 2 },
          { question: "The weather was so hot that we ____ go outside.", options: ["can't", "couldn't", "won't", "wouldn't"], answer: 1 },
          { question: "\"A blessing in disguise\" means:", options: ["A visible blessing", "An apparent misfortune that ends up having good results", "A mixed blessing", "A difficult situation"], answer: 1 },
          { question: "What is the output of: printf(\"%d\", 10 + 2 * 5);", options: ["60", "20", "15", "25"], answer: 1 },
          { question: "Which data structure follows LIFO principle?", options: ["Queue", "Stack", "Array", "Linked List"], answer: 1 },
          { question: "Which SQL command is used to retrieve data from a database?", options: ["INSERT", "UPDATE", "SELECT", "DELETE"], answer: 2 },
          { question: "What does HTTP stand for?", options: ["HyperText Transfer Protocol", "High Transfer Text Protocol", "HyperText Translation Protocol", "High Text Transfer Protocol"], answer: 0 },
          { question: "Which scheduling algorithm gives the shortest job highest priority?", options: ["FCFS", "Round Robin", "SJF", "Priority Scheduling"], answer: 2 },
          { question: "What day of the week was January 1, 2020?", options: ["Monday", "Tuesday", "Wednesday", "Thursday"], answer: 2 },
          { question: "The area of a circle with radius 7 cm is:", options: ["154 sq cm", "144 sq cm", "164 sq cm", "174 sq cm"], answer: 0 },
          { question: "In what ratio should water be mixed with milk costing Rs. 12 per liter to get a mixture worth Rs. 8 per liter?", options: ["1:2", "1:3", "2:3", "1:1"], answer: 0 },
          { question: "Two pipes can fill a tank in 6 and 8 hours respectively. If both pipes are opened together, in how many hours will the tank be filled?", options: ["3.43 hours", "3.5 hours", "4 hours", "4.5 hours"], answer: 0 },
          { question: "At what time between 3 and 4 o'clock will the hands of a clock be together?", options: ["3:16", "3:16.36", "3:15", "3:17"], answer: 1 }
        ],

        // Set 4 (questions 41-60)
        [
          { question: "A boat travels 24 km downstream in 2 hours and 16 km upstream in 2 hours. What is the speed of the boat in still water?", options: ["10 km/h", "11 km/h", "12 km/h", "13 km/h"], answer: 0 },
          { question: "Find the sum of first 20 natural numbers:", options: ["200", "210", "220", "230"], answer: 1 },
          { question: "What is log₂ 8?", options: ["2", "3", "4", "8"], answer: 1 },
          { question: "Which of the following numbers is divisible by 9?", options: ["2341", "3456", "1234", "5679"], answer: 1 },
          { question: "If x + y = 10 and x - y = 4, then x² - y² = ?", options: ["36", "40", "44", "48"], answer: 1 },
          { question: "What is the distance between points (3,4) and (6,8)?", options: ["4", "5", "6", "7"], answer: 1 },
          { question: "The median of 3, 7, 5, 9, 11 is:", options: ["5", "7", "9", "11"], answer: 1 },
          { question: "√48 + √75 = ?", options: ["9√3", "10√3", "11√3", "12√3"], answer: 0 },
          { question: "(√1024 + √625) × √49 = ?", options: ["245", "250", "255", "259"], answer: 3 },
          { question: "If in a class of 40 students, 60% are boys, how many girls are there?", options: ["14", "16", "18", "20"], answer: 1 },
          { question: "If a number when divided by 67 leaves remainder 7, what will be the remainder when the same number is divided by 67 × 2?", options: ["7", "14", "74", "Either 7 or 74"], answer: 3 },
          { question: "A’s income is 25% more than B’s. By what percent is B’s income less than A’s?", options: ["20%", "22%", "25%", "30%"], answer: 0 },
          { question: "A can do a work in 15 days, B in 20 days, and C in 30 days. They work together for 2 days, then A leaves. In how many more days will B and C complete the remaining work?", options: ["8 days", "9 days", "10 days", "12 days"], answer: 0 },
          { question: "If A:B = 2:3, B:C = 4:5, and C:D = 6:7, then find A:D", options: ["8:35", "16:35", "24:35", "12:35"], answer: 1 },
          { question: "What is the difference between compound interest and simple interest on Rs. 5000 for 2 years at 10% per annum?", options: ["Rs. 40", "Rs. 50", "Rs. 60", "Rs. 100"], answer: 1 },
          { question: "A trader marks his goods 40% above cost price but gives a discount of 15% on marked price. What is his profit percentage?", options: ["19%", "20%", "21%", "25%"], answer: 0 },
          { question: "Two trains 200m and 300m long are running in opposite directions at 40 km/h and 60 km/h. In how much time will they cross each other?", options: ["15 seconds", "18 seconds", "20 seconds", "25 seconds"], answer: 1 },
          { question: "The average age of 30 students is 15 years. If the teacher's age is included, the average becomes 16 years. What is the teacher's age?", options: ["45 years", "46 years", "47 years", "48 years"], answer: 1 },
          { question: "In how many ways can the letters of the word ASSASSINATION be arranged?", options: ["10,810,800", "10,810,000", "10,900,800", "11,000,000"], answer: 0 },
          { question: "A bag contains 4 red, 5 black, and 6 white balls. Three balls are drawn at random. What is the probability that all three are of different colors?", options: ["8/91", "24/91", "32/91", "40/91"], answer: 1 }
        ],

        // Set 5: Questions 81–100
        [
          { question: 'A circle is inscribed in a square of side 10 cm. What is the area between the square and circle?', options: ['21.46 sq cm', '22.16 sq cm', '21.5 sq cm', '22.5 sq cm'], answer: 0 },
          { question: 'Two alloys contain copper and zinc in ratios 3:2 and 2:3 respectively. In what ratio should they be mixed to get an alloy with equal amounts of copper and zinc?', options: ['1:1', '2:3', '3:2', '1:2'], answer: 0 },
          { question: 'A car covers a distance at 60 km/h and returns at 40 km/h. What is the average speed for the whole journey?', options: ['48 km/h', '50 km/h', '52 km/h', '46 km/h'], answer: 0 },
          { question: 'A, B, C start a business with capitals in ratio 2:3:4. A withdraws after 6 months, B after 8 months. What is A\'s share in annual profit of Rs. 2,34,000?', options: ['Rs. 36,000', 'Rs. 42,000', 'Rs. 48,000', 'Rs. 54,000'], answer: 0 },
          { question: 'Three dice are thrown. What is the probability of getting a sum of 10?', options: ['25/216', '27/216', '30/216', '35/216'], answer: 1 },
          { question: 'If log₁₀ 2 = 0.301 and log₁₀ 3 = 0.477, find log₁₀ 12', options: ['1.079', '1.176', '1.255', '1.301'], answer: 0 },
          { question: 'A sphere is inscribed in a cube of edge 6 cm. What is the volume of the sphere?', options: ['113.04 cu cm', '113.14 cu cm', '113.24 cu cm', '113.34 cu cm'], answer: 0 },
          { question: 'The sum of ages of A and B is 50. Five years ago, A was thrice as old as B. What is A\'s present age?', options: ['35 years', '37 years', '40 years', '42 years'], answer: 0 },
          { question: 'The variance of dataset {2, 4, 6, 8, 10} is:', options: ['6', '7', '8', '10'], answer: 2 },
          { question: 'How many three-digit numbers are divisible by 7?', options: ['128', '129', '130', '131'], answer: 1 },
          { question: 'If A = [ , ] and B = [ , ], what is AB?', options: ['[ , ]', '[ , ]', '[ , ]', '[ , ]'], answer: 0 },
          { question: 'If sin θ + cos θ = √2, then sin θ cos θ = ?', options: ['0', '1/2', '1', '√2/2'], answer: 1 },
          { question: 'The number 0.overline{142857} as a fraction is:', options: ['1/7', '2/7', '3/7', '1/6'], answer: 0 },
          { question: 'In a binary search tree, for inorder traversal to give sorted sequence, which condition must be satisfied?', options: ['Left < Root < Right', 'Left > Root > Right', 'Root < Left < Right', 'No specific condition'], answer: 0 },
          { question: 'The time complexity of merge sort is:', options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(log n)'], answer: 1 },
          { question: 'If p → q is false, then which of the following must be true?', options: ['p is false', 'q is false', 'p is true and q is false', 'p is false and q is true'], answer: 2 },
          { question: 'A rectangle is to be inscribed in a semicircle of radius 10. What is the maximum area of the rectangle?', options: ['100 sq units', '50 sq units', '75 sq units', '80 sq units'], answer: 0 },
          { question: 'Which sorting algorithm has the best worst-case time complexity?', options: ['Quick Sort', 'Bubble Sort', 'Heap Sort', 'Selection Sort'], answer: 2 },
          { question: 'In how many ways can 8 different books be arranged on a shelf if 3 particular books must always be together?', options: ['4320', '4230', '4032', '4302'], answer: 0 },
          { question: 'A number consists of 3 digits whose sum is 18. The middle digit is equal to the sum of the other two and the number will be increased by 297 if the digits are reversed. Find the number.', options: ['357', '369', '459', '471'], answer: 2 }
        ],
      ]
    
    }, // End of Average


    {
      name: 'Profit and Loss',
      sets: [
        // Set 1: Questions 1-20
        [
          { question: "A shopkeeper sells an article for Rs. 1200 at 20% profit. What is the cost price?", options: ["Rs. 960", "Rs. 1000", "Rs. 1100", "Rs. 1140"], answer: 0 },
          { question: "An article is sold at 10% loss for Rs. 1350. What is the cost price?", options: ["Rs. 1400", "Rs. 1450", "Rs. 1500", "Rs. 1550"], answer: 2 },
          { question: "A trader marks his goods 20% above cost price and allows a discount of 10%. Find the gain or loss percent.", options: ["8% gain", "10% gain", "8% loss", "10% loss"], answer: 0 },
          { question: "A dealer sells an article for Rs. 3250 with 25% profit. What was the cost price?", options: ["Rs. 2600", "Rs. 2700", "Rs. 2750", "Rs. 2800"], answer: 0 },
          { question: "If the cost price of 20 articles is equal to the selling price of 16 articles, what is the profit percent?", options: ["20%", "25%", "15%", "30%"], answer: 1 },
          { question: "A man bought an article for Rs. 500 and sold it for Rs. 550. Find his profit percentage.", options: ["8%", "10%", "12%", "15%"], answer: 1 },
          { question: "If a person gains 12.5% by selling an article for Rs. 180, what is the cost price?", options: ["Rs. 150", "Rs. 160", "Rs. 170", "Rs. 175"], answer: 1 },
          { question: "An article was sold at 30% loss for Rs. 700. What was the cost price?", options: ["Rs. 980", "Rs. 1000", "Rs. 1050", "Rs. 1100"], answer: 1 },
          { question: "A shopkeeper marks a price 40% above the cost price. If he gives a discount of 20%, what is his gain percent?", options: ["10%", "12%", "15%", "18%"], answer: 0 },
          { question: "A man sells 16 meters of cloth for Rs. 224 and gains 40%. What is the cost price per meter?", options: ["Rs. 10", "Rs. 12", "Rs. 14", "Rs. 16"], answer: 1 },
          { question: "An article costs Rs. 450 and is sold at a loss of 10%. What is the selling price?", options: ["Rs. 405", "Rs. 415", "Rs. 425", "Rs. 435"], answer: 0 },
          { question: "A man bought a watch for Rs. 1,500 and sold it at a loss of 10%. For how much did he sell it?", options: ["Rs. 1,350", "Rs. 1,400", "Rs. 1,450", "Rs. 1,500"], answer: 0 },
          { question: "If the cost price of 15 toys is equal to the selling price of 20 toys, find the loss or gain percentage.", options: ["25% gain", "25% loss", "33⅓% gain", "33⅓% loss"], answer: 1 },
          { question: "A man buys a radio for Rs. 625 and sells it for Rs. 750. Calculate his profit percentage.", options: ["16%", "18%", "20%", "22%"], answer: 2 },
          { question: "A dealer sells an article at 12% profit. If the selling price is Rs. 2240, find the cost price.", options: ["Rs. 2000", "Rs. 2025", "Rs. 2045", "Rs. 2060"], answer: 0 },
          { question: "A man sold an article at 15% profit. Had he sold it for Rs. 240 more, the profit would have been 25%. What is the cost price?", options: ["Rs. 1200", "Rs. 1300", "Rs. 1400", "Rs. 1500"], answer: 0 },
          { question: "A shopkeeper sells an article at 20% discount on the marked price. If the cost price is Rs. 480 and the marked price is Rs. 600, what is his profit percentage?", options: ["5%", "10%", "15%", "20%"], answer: 1 },
          { question: "A trader sells an article at cost price but gives 10% extra weight. Find his gain percentage.", options: ["9%", "10%", "11%", "12%"], answer: 0 },
          { question: "An article is bought at Rs. 40 and sold at Rs. 48. Find the profit percentage.", options: ["15%", "18%", "20%", "22%"], answer: 2 },
          { question: "A person gains 20% by selling an article at a certain price. What percent loss will he incur if he sells it for 20% less than that price?", options: ["1%", "2%", "3%", "4%"], answer: 1 }
        ],

        // Set 2: Questions 21-40
        [
          { question: "The cost price of 60 articles is equal to the selling price of 75 articles. Find gain or loss percentage.", options: ["20% profit", "20% loss", "25% profit", "25% loss"], answer: 0 },
          { question: "A man sells two articles for Rs. 1500 each, one at 20% profit and other at 20% loss. Find overall gain or loss percentage.", options: ["2.5% loss", "2.5% profit", "4% loss", "4% profit"], answer: 0 },
          { question: "A shopkeeper allows 10% discount on the marked price and still makes a profit of 20%. What is the marked price of an article costing Rs. 120?", options: ["Rs. 140", "Rs. 150", "Rs. 160", "Rs. 170"], answer: 2 },
          { question: "An article is marked at Rs. 1000 and sold for Rs. 900. Find the profit or loss percentage.", options: ["10% profit", "10% loss", "15% profit", "15% loss"], answer: 1 },
          { question: "An article is sold at 12.5% profit for Rs. 450. What is the cost price?", options: ["Rs. 390", "Rs. 400", "Rs. 420", "Rs. 430"], answer: 1 },
          { question: "If on selling an article for Rs. 525, there is 5% profit, find the cost price.", options: ["Rs. 500", "Rs. 495", "Rs. 490", "Rs. 485"], answer: 0 },
          { question: "Two articles sold for Rs. 3600 each, one at 10% gain and other at 10% loss. Find overall profit or loss.", options: ["Rs. 40 loss", "Rs. 40 profit", "Rs. 60 loss", "Rs. 60 profit"], answer: 0 },
          { question: "A man sold an article at 32% profit. Had he bought it for Rs. 60 less and sold it for Rs. 20 more, he would have made 50% profit. Find the cost price.", options: ["Rs. 400", "Rs. 420", "Rs. 440", "Rs. 450"], answer: 0 },
          { question: "A shopkeeper buys two articles for Rs. 400 each. On one he gains 20% and on the other loses 20%. Find his overall profit or loss.", options: ["Rs. 8 loss", "Rs. 8 profit", "Rs. 10 loss", "Rs. 10 profit"], answer: 0 },
          { question: "The marked price of an article is Rs. 800 and the discount given is 5%. Find the selling price.", options: ["Rs. 760", "Rs. 770", "Rs. 780", "Rs. 790"], answer: 0 },
          { question: "A shopkeeper marks the price of an article 20% above the cost price. He allows a discount of 10%. What is his profit percentage?", options: ["8%", "9%", "10%", "11%"], answer: 0 },
          { question: "An article bought for Rs. 500 is sold for Rs. 600. What is the profit percent?", options: ["15%", "16%", "20%", "25%"], answer: 2 },
          { question: "A man sells an article at a loss of 10%. If he had sold it for Rs. 30 more, he would have gained 5%. What is the cost price?", options: ["Rs. 250", "Rs. 300", "Rs. 350", "Rs. 400"], answer: 1 },
          { question: "A trader buys goods for Rs. 3000 and sells for Rs. 3600. What is the profit percentage?", options: ["15%", "18%", "20%", "22%"], answer: 2 },
          { question: "An article is sold for Rs. 2000 at a loss of 25%. What is the cost price?", options: ["Rs. 2300", "Rs. 2400", "Rs. 2500", "Rs. 2600"], answer: 2 },
          { question: "A retailer purchases an article for Rs. 1500 and sells it at a profit of 15%. Calculate the selling price.", options: ["Rs. 1725", "Rs. 1750", "Rs. 1800", "Rs. 1850"], answer: 0 },
          { question: "An article is marked 30% above the cost price. If 10% discount is given, what is the profit percentage?", options: ["15%", "16%", "17%", "18%"], answer: 2 },
          { question: "A man sold an article for Rs. 800 and made a profit of 20%. What is his cost price?", options: ["Rs. 640", "Rs. 650", "Rs. 660", "Rs. 670"], answer: 0 },
          { question: "A shopkeeper allows a discount of 10% on the marked price and still makes a profit of 25%. What is the ratio of cost price to marked price?", options: ["7:9", "8:9", "6:7", "5:6"], answer: 1 },
          { question: "A man sold two articles for Rs. 500 each. On one he makes a profit of 20% and on the other loses 20%. Find his overall profit or loss.", options: ["Loss of Rs. 20", "Profit of Rs. 20", "Loss of Rs. 10", "Profit of Rs. 10"], answer: 0 }
        ],

        // Set 3: Questions 41-60
        [
          { question: "A trader sells an article at 12.5% profit. Had he bought it for Rs. 25 less and sold it for Rs. 25 more, his profit would have been 25%. Find the cost price.", options: ["Rs. 200", "Rs. 300", "Rs. 400", "Rs. 500"], answer: 2 },
          { question: "The cost price of 10 articles is equal to the selling price of 8 articles. Find the gain or loss percentage.", options: ["20% profit", "20% loss", "25% profit", "25% loss"], answer: 2 },
          { question: "A shopkeeper purchased goods for Rs. 600 and sold them for Rs. 660. What is his profit percentage?", options: ["8%", "9%", "10%", "11%"], answer: 2 },
          { question: "An article is sold at a loss of 8%. If the selling price was Rs. 60 more, a profit of 6% would have been made. Find the cost price.", options: ["Rs. 620", "Rs. 625", "Rs. 630", "Rs. 635"], answer: 1 },
          { question: "A man buys a radio for Rs. 840 and sells it for Rs. 924. Find his profit percentage.", options: ["16%", "18%", "20%", "22%"], answer: 2 },
          { question: "A trader marks his goods 40% above cost price and offers a discount of 10%. What is the profit percentage?", options: ["22%", "24%", "26%", "28%"], answer: 1 },
          { question: "If an article is sold at 15% loss for Rs. 255, what is its cost price?", options: ["Rs. 300", "Rs. 310", "Rs. 320", "Rs. 330"], answer: 0 },
          { question: "A man sells two articles at cost price. On one he gains 20% and on the other he loses 20%. Find his overall gain or loss percentage.", options: ["No gain no loss", "2% gain", "4% loss", "5% loss"], answer: 2 },
          { question: "An article costs Rs. 600 and is sold for Rs. 690. Find the profit percentage.", options: ["13%", "14%", "15%", "16%"], answer: 2 },
          { question: "A man sells an article for Rs. 540 at a loss of 10%. What was the cost price?", options: ["Rs. 600", "Rs. 610", "Rs. 620", "Rs. 630"], answer: 0 },
          { question: "A man marked up the price of an article by 25% and allowed a discount of 10%. What is his gain percentage?", options: ["10%", "12.5%", "14%", "15%"], answer: 1 },
          { question: "A shopkeeper sells an article for Rs. 1300 at a profit of 30%. Find the cost price.", options: ["Rs. 1000", "Rs. 1100", "Rs. 1150", "Rs. 1200"], answer: 0 },
          { question: "An article is sold for Rs. 1900 at a profit of 15%. Find the cost price.", options: ["Rs. 1600", "Rs. 1650", "Rs. 1700", "Rs. 1750"], answer: 2 },
          { question: "A man sells an article at 20% loss. Had he sold it for Rs. 60 more, he would have gained 5%. Find the cost price.", options: ["Rs. 300", "Rs. 320", "Rs. 350", "Rs. 360"], answer: 0 },
          { question: "A man buys an article for Rs. 600 and sells it for Rs. 700. Find the profit percentage.", options: ["15%", "16%", "17%", "18%"], answer: 0 },
          { question: "If the cost price of 15 articles is equal to the selling price of 12 articles, find the gain percentage.", options: ["20%", "25%", "30%", "35%"], answer: 1 },
          { question: "A trader marks his goods 25% above the cost price and allows a discount of 20%. Find the profit or loss percentage.", options: ["No profit no loss", "4% loss", "5% profit", "6% profit"], answer: 0 },
          { question: "If a shopkeeper sells an article for Rs. 1000 after allowing 10% discount, what is the marked price?", options: ["Rs. 1100", "Rs. 1150", "Rs. 1200", "Rs. 1250"], answer: 2 },
          { question: "An article is marked at Rs. 1400 and sold for Rs. 1260. Find the discount percentage.", options: ["5%", "7.5%", "10%", "12.5%"], answer: 2 },
          { question: "A man bought a watch for Rs. 1500 and sold it at a profit of 12%. Find the selling price.", options: ["Rs. 1680", "Rs. 1700", "Rs. 1750", "Rs. 1800"], answer: 0 }
        ],
         // Set 4: Questions 61-80
        [
          { question: "A trader sells an article at 12.5% profit. Had he bought it for Rs. 25 less and sold it for Rs. 25 more, his profit would have been 25%. Find the cost price.", options: ["Rs. 200", "Rs. 300", "Rs. 400", "Rs. 500"], answer: 2 },
          { question: "The cost price of 10 articles is equal to the selling price of 8 articles. Find the gain or loss percentage.", options: ["20% profit", "20% loss", "25% profit", "25% loss"], answer: 2 },
          { question: "A shopkeeper purchased goods for Rs. 600 and sold them for Rs. 660. What is his profit percentage?", options: ["8%", "9%", "10%", "11%"], answer: 2 },
          { question: "An article is sold at a loss of 8%. If the selling price was Rs. 60 more, a profit of 6% would have been made. Find the cost price.", options: ["Rs. 620", "Rs. 625", "Rs. 630", "Rs. 635"], answer: 1 },
          { question: "A man buys a radio for Rs. 840 and sells it for Rs. 924. Find his profit percentage.", options: ["16%", "18%", "20%", "22%"], answer: 2 },
          { question: "A trader marks his goods 40% above cost price and offers a discount of 10%. What is the profit percentage?", options: ["22%", "24%", "26%", "28%"], answer: 1 },
          { question: "If an article is sold at 15% loss for Rs. 255, what is its cost price?", options: ["Rs. 300", "Rs. 310", "Rs. 320", "Rs. 330"], answer: 0 },
          { question: "A man sells two articles at cost price. On one he gains 20% and on the other he loses 20%. Find his overall gain or loss percentage.", options: ["No gain no loss", "2% gain", "4% loss", "5% loss"], answer: 2 },
          { question: "An article costs Rs. 600 and is sold for Rs. 690. Find the profit percentage.", options: ["13%", "14%", "15%", "16%"], answer: 2 },
          { question: "A man sells an article for Rs. 540 at a loss of 10%. What was the cost price?", options: ["Rs. 600", "Rs. 610", "Rs. 620", "Rs. 630"], answer: 0 },
          { question: "A man marked up the price of an article by 25% and allowed a discount of 10%. What is his gain percentage?", options: ["10%", "12.5%", "14%", "15%"], answer: 1 },
          { question: "A shopkeeper sells an article for Rs. 1300 at a profit of 30%. Find the cost price.", options: ["Rs. 1000", "Rs. 1100", "Rs. 1150", "Rs. 1200"], answer: 0 },
          { question: "An article is sold for Rs. 1900 at a profit of 15%. Find the cost price.", options: ["Rs. 1600", "Rs. 1650", "Rs. 1700", "Rs. 1750"], answer: 2 },
          { question: "A man sells an article at 20% loss. Had he sold it for Rs. 60 more, he would have gained 5%. Find the cost price.", options: ["Rs. 300", "Rs. 320", "Rs. 350", "Rs. 360"], answer: 0 },
          { question: "A man buys an article for Rs. 600 and sells it for Rs. 700. Find the profit percentage.", options: ["15%", "16%", "17%", "18%"], answer: 0 },
          { question: "If the cost price of 15 articles is equal to the selling price of 12 articles, find the gain percentage.", options: ["20%", "25%", "30%", "35%"], answer: 1 },
          { question: "A trader marks his goods 25% above the cost price and allows a discount of 20%. Find the profit or loss percentage.", options: ["No profit no loss", "4% loss", "5% profit", "6% profit"], answer: 0 },
          { question: "If a shopkeeper sells an article for Rs. 1000 after allowing 10% discount, what is the marked price?", options: ["Rs. 1100", "Rs. 1150", "Rs. 1200", "Rs. 1250"], answer: 2 },
          { question: "An article is marked at Rs. 1400 and sold for Rs. 1260. Find the discount percentage.", options: ["5%", "7.5%", "10%", "12.5%"], answer: 2 },
          { question: "A man bought a watch for Rs. 1500 and sold it at a profit of 12%. Find the selling price.", options: ["Rs. 1680", "Rs. 1700", "Rs. 1750", "Rs. 1800"], answer: 0 }
        ],

        // Set 5: Questions 81-100
        [
          { question: "A man buys an article for Rs. 600 and sells it for Rs. 540. Find his loss percentage.", options: ["8%", "9%", "10%", "12%"], answer: 2 },
          { question: "The selling price of a product is Rs. 900 after giving 25% discount. What was the marked price?", options: ["Rs. 1050", "Rs. 1100", "Rs. 1150", "Rs. 1200"], answer: 3 },
          { question: "A trader mixes two varieties of wheat costing Rs. 7/kg and Rs. 8.40/kg in the ratio 2:3. What is the cost price of mixture?", options: ["Rs. 7.8/kg", "Rs. 8/kg", "Rs. 8.2/kg", "Rs. 8.4/kg"], answer: 0 },
          { question: "A man buys two articles for Rs. 2500 each. He sells one at 10% profit and the other at 10% loss. Find his overall loss or gain.", options: ["Rs. 0 (No gain no loss)", "Rs. 5 loss", "Rs. 5 profit", "Rs. 10 loss"], answer: 0 },
          { question: "A shopkeeper buys 20 liters of milk for Rs. 400 and mixes 5 liters of water. If he sells the mixture at Rs. 22 per liter, what is his gain percentage?", options: ["20%", "22.5%", "25%", "27.5%"], answer: 2 },
          { question: "An article costs Rs. 400 and is sold for Rs. 460. Find the profit or loss percentage.", options: ["12% profit", "13% profit", "14% profit", "15% profit"], answer: 3 },
          { question: "A man buys an article at 20% discount on the marked price of Rs. 600. How much does he pay for the article?", options: ["Rs. 480", "Rs. 500", "Rs. 520", "Rs. 540"], answer: 0 },
          { question: "A shopkeeper buys an article for Rs. 1000 and sells it for Rs. 1250. Find his profit percentage.", options: ["20%", "22%", "25%", "30%"], answer: 2 },
          { question: "An article is sold at a profit of 20%. If the cost price is Rs. 600, find the selling price.", options: ["Rs. 700", "Rs. 720", "Rs. 750", "Rs. 760"], answer: 1 },
          { question: "A man sells an article at a loss of 10%. If he sells it for Rs. 90 more, he makes a gain of 10%. Find the cost price.", options: ["Rs. 400", "Rs. 450", "Rs. 500", "Rs. 550"], answer: 2 },
          { question: "A shopkeeper marks an article 20% above the cost price and allows a discount of 5%. Find the profit percentage.", options: ["14%", "15%", "16%", "17%"], answer: 0 },
          { question: "A man purchases a chair for Rs. 1500 and sells it at 20% profit. What is the selling price?", options: ["Rs. 1600", "Rs. 1700", "Rs. 1750", "Rs. 1800"], answer: 3 },
          { question: "An article is sold for Rs. 720 with 20% profit. Find the cost price.", options: ["Rs. 580", "Rs. 600", "Rs. 620", "Rs. 650"], answer: 1 },
          { question: "If the cost price of 10 articles is Rs. 2500 and the selling price of 8 articles is also Rs. 2500, what is the loss percentage?", options: ["20%", "25%", "30%", "35%"], answer: 1 },
          { question: "A shopkeeper allows a discount of 10% on the marked price and still makes a profit of 20%. What is the ratio of cost price to marked price?", options: ["7:8", "8:9", "9:10", "10:11"], answer: 1 },
          { question: "An article is bought for Rs. 600 and sold for Rs. 630. Find the profit percentage.", options: ["2.5%", "3%", "4.5%", "5%"], answer: 3 },
          { question: "A trader sells an article at cost price but gives an extra 10% in weight. Find the profit percentage.", options: ["8%", "9%", "10%", "11%"], answer: 2 },
          { question: "The cost price of 50 articles is equal to the selling price of 40 articles. Find the profit per cent.", options: ["20%", "22.5%", "25%", "27.5%"], answer: 2 },
          { question: "A dealer allows a discount of 10% on the marked price and still makes a profit of 10%. Find the ratio of cost price to marked price.", options: ["7:8", "8:9", "9:10", "10:11"], answer: 1 },
          { question: "A shopkeeper buys an article for Rs. 1,200, marks it 25% above cost price, and allows a discount of 15%. What is his gain?", options: ["Rs. 165", "Rs. 180", "Rs. 195", "Rs. 200"], answer: 0 }
        ],
      ]//Complete Profit and loss
    },


    {
      name: 'Simple Interest',
      sets: [
        // 5 sets, each with 20 unique questions
        [],
        [],
        [],
        [],
        []
      ]
    }
  ]
     
      
  
};


// Export for app.js
window.quantitativeData = quantitativeData;