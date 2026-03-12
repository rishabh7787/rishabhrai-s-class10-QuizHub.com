const questions = {
  math: [
    // 50 NCERT-based Math questions
    {q:"LCM of 12 and 18?", options:["36","72","6","12"], answer:0},
    {q:"Zeroes of polynomial x²-5x+6?", options:["2,3","-2,-3","1,6","None"], answer:0},
    {q:"Sum of first 10 natural numbers?", options:["45","55","50","60"], answer:1},
    {q:"tan45° value?", options:["0","1","√3","∞"], answer:1},
    {q:"Probability of getting head in coin toss?", options:["0","1/2","1","2"], answer:1},
    // … continue until 50 covering Real Numbers, Polynomials, AP, Trigonometry, Statistics, Probability, etc.
  ],
  science: [
    // 50 NCERT-based Science questions
    {q:"Which gas is released in photosynthesis?", options:["CO2","O2","N2","H2"], answer:1},
    {q:"pH of neutral solution?", options:["0","7","14","10"], answer:1},
    {q:"Which metal is liquid at room temperature?", options:["Iron","Mercury","Aluminium","Copper"], answer:1},
    {q:"Unit of electric current?", options:["Volt","Ampere","Ohm","Watt"], answer:1},
    {q:"Which organ secretes bile?", options:["Pancreas","Liver","Stomach","Kidney"], answer:1},
    // … continue until 50 covering Chemistry, Physics, Biology chapters
  ],
  social: [
    // 50 NCERT-based Social Science questions
    {q:"Father of Indian Constitution?", options:["Gandhi","Ambedkar","Nehru","Patel"], answer:1},
    {q:"Capital of India?", options:["Mumbai","Delhi","Kolkata","Chennai"], answer:1},
    {q:"River Ganga originates from?", options:["Yamunotri","Gangotri","Siachen","Narmada"], answer:1},
    {q:"First President of India?", options:["Rajendra Prasad","Nehru","Patel","Ambedkar"], answer:0},
    {q:"Currency of India?", options:["Dollar","Euro","Rupee","Yen"], answer:2},
    // … continue until 50 covering History, Geography, Civics, Economics
  ],
  english: [
    // 50 NCERT-based English questions
    {q:"Synonym of Happy?", options:["Sad","Joyful","Angry","Tired"], answer:1},
    {q:"Antonym of Big?", options:["Huge","Large","Small","Tall"], answer:2},
    {q:"Plural of Child?", options:["Childs","Children","Childes","Childer"], answer:1},
    {q:"Past tense of Go?", options:["Gone","Went","Goed","Going"], answer:1},
    {q:"Opposite of Hot?", options:["Warm","Cold","Cool","Heat"], answer:1},
    // … continue until 50 covering First Flight & Footprints Without Feet
  ],
  hindi: [
    // 50 NCERT-based Hindi questions
    {q:"'Vidyalaya' ka arth?", options:["School","Hospital","Temple","Market"], answer:0},
    {q:"'Pustak' ka arth?", options:["Pen","Book","Paper","Bag"], answer:1},
    {q:"'Kavi' ka arth?", options:["Singer","Poet","Teacher","Writer"], answer:1},
    {q:"'Jal' ka arth?", options:["Fire","Water","Air","Earth"], answer:1},
    {q:"'Surya' ka arth?", options:["Moon","Star","Sun","Planet"], answer:2},
    // … continue until 50 covering Sparsh & Sanchayan
  ]
};