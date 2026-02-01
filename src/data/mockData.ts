export interface Question {
    id: number;
    text: string;
    content: string;
    options: { id: string; text: string }[];
    difficulty: string;
    correctAnswer: string;
}

export interface Exam {
    id: number;
    title: string;
    questions: number;
    time: number;
    score: number;
    isNew: boolean;
    questionList: Question[];
}

const ALL_QUESTIONS: Question[] = [
    { id: 1, text: "Choose the correct answer:", content: "1. My brother and I ............. television every evening.", options: [{ id: 'A', text: "watches" }, { id: 'B', text: "listen" }, { id: 'C', text: "are" }, { id: 'D', text: "watch" }], difficulty: "Easy", correctAnswer: "D" },
    { id: 2, text: "Choose the correct answer:", content: "2. There is a well ................ Minh’s house.", options: [{ id: 'A', text: "behind" }, { id: 'B', text: "next" }, { id: 'C', text: "near to" }, { id: 'D', text: "to the left" }], difficulty: "Easy", correctAnswer: "A" },
    { id: 3, text: "Choose the correct answer:", content: "3. A paddy-field is a rice .......................... .", options: [{ id: 'A', text: "yard" }, { id: 'B', text: "garden" }, { id: 'C', text: "paddy" }, { id: 'D', text: "park" }], difficulty: "Easy", correctAnswer: "C" },
    { id: 4, text: "Choose the correct answer:", content: "4. They are good students. ................... books are new.", options: [{ id: 'A', text: "They" }, { id: 'B', text: "Their" }, { id: 'C', text: "These" }, { id: 'D', text: "Those" }], difficulty: "Easy", correctAnswer: "B" },
    { id: 5, text: "Choose the correct answer:", content: "5. Ba .................. lunch at school.", options: [{ id: 'A', text: "have" }, { id: 'B', text: "has" }, { id: 'C', text: "eat" }, { id: 'D', text: "does" }], difficulty: "Easy", correctAnswer: "B" },
    { id: 6, text: "Choose the correct answer:", content: "6. What time ........................... classes start?", options: [{ id: 'A', text: "do" }, { id: 'B', text: "does" }, { id: 'C', text: "is" }, { id: 'D', text: "are" }], difficulty: "Easy", correctAnswer: "A" },
    { id: 7, text: "Choose the correct answer:", content: "7. Lan’s brother .................... volleyball now.", options: [{ id: 'A', text: "is play" }, { id: 'B', text: "are playing" }, { id: 'C', text: "is playing" }, { id: 'D', text: "playing" }], difficulty: "Medium", correctAnswer: "C" },
    { id: 8, text: "Choose the correct answer:", content: "8. This is my father . ................ name’s Ha.", options: [{ id: 'A', text: "His" }, { id: 'B', text: "He’s" }, { id: 'C', text: "She’s" }, { id: 'D', text: "Her" }], difficulty: "Easy", correctAnswer: "A" },
    { id: 9, text: "Choose the correct answer:", content: "9. I go to school ................. ten past twelve.", options: [{ id: 'A', text: "in" }, { id: 'B', text: "on" }, { id: 'C', text: "at" }, { id: 'D', text: "for" }], difficulty: "Easy", correctAnswer: "C" },
    { id: 10, text: "Choose the correct answer:", content: "10. This is his sister. ...................... is a doctor.", options: [{ id: 'A', text: "He" }, { id: 'B', text: "She" }, { id: 'C', text: "It" }, { id: 'D', text: "Her" }], difficulty: "Easy", correctAnswer: "B" },
    { id: 11, text: "Choose the correct answer:", content: "11. Mr Ba travels to work ..................... motorbike.", options: [{ id: 'A', text: "at" }, { id: 'B', text: "for" }, { id: 'C', text: "in" }, { id: 'D', text: "by" }], difficulty: "Easy", correctAnswer: "D" },
    { id: 12, text: "Choose the correct answer:", content: "12. How many .......................... are there in the classroom ?", options: [{ id: 'A', text: "table" }, { id: 'B', text: "benches" }, { id: 'C', text: "board" }, { id: 'D', text: "desk" }], difficulty: "Easy", correctAnswer: "B" },
    { id: 13, text: "Choose the correct answer:", content: "13. There is .......................... fruit juice in the pitcher.", options: [{ id: 'A', text: "some" }, { id: 'B', text: "any" }, { id: 'C', text: "a" }, { id: 'D', text: "an" }], difficulty: "Easy", correctAnswer: "A" },
    { id: 14, text: "Choose the correct answer:", content: "14. His lips aren’t full. They are ................................. .", options: [{ id: 'A', text: "fat" }, { id: 'B', text: "weak" }, { id: 'C', text: "thin" }, { id: 'D', text: "long" }], difficulty: "Easy", correctAnswer: "C" },
    { id: 15, text: "Choose the correct answer:", content: "15. We would like some vegetables ........................... dinner.", options: [{ id: 'A', text: "in" }, { id: 'B', text: "at" }, { id: 'C', text: "for" }, { id: 'D', text: "of" }], difficulty: "Easy", correctAnswer: "C" },
    { id: 16, text: "Choose the correct answer:", content: "16. She is thirsty. She’d like ........................ drink.", options: [{ id: 'A', text: "any" }, { id: 'B', text: "some" }, { id: 'C', text: "an" }, { id: 'D', text: "a" }], difficulty: "Easy", correctAnswer: "B" },
    { id: 17, text: "Choose the correct answer:", content: "17. Would you like ........................... chicken ?", options: [{ id: 'A', text: "a" }, { id: 'B', text: "an" }, { id: 'C', text: "some" }, { id: 'D', text: "any" }], difficulty: "Easy", correctAnswer: "C" },
    { id: 18, text: "Choose the correct answer:", content: "18. Lemonade, apple juice, soda and .................are cold drinks.", options: [{ id: 'A', text: "water" }, { id: 'B', text: "orange juice" }, { id: 'C', text: "beans" }, { id: 'D', text: "milk" }], difficulty: "Easy", correctAnswer: "A" },
    { id: 19, text: "Choose the correct answer:", content: "20. What is your favorite .................... , Mai ? _ I like fish.", options: [{ id: 'A', text: "vegetables" }, { id: 'B', text: "drinks" }, { id: 'C', text: "meat" }, { id: 'D', text: "food" }], difficulty: "Easy", correctAnswer: "D" },
    { id: 20, text: "Choose the correct answer:", content: "21. He doesn’t want .................................. a movie.", options: [{ id: 'A', text: "see" }, { id: 'B', text: "to see" }, { id: 'C', text: "seeing" }, { id: 'D', text: "watch" }], difficulty: "Medium", correctAnswer: "B" },

    { id: 21, text: "Choose the correct answer:", content: "22. It’s never ................. in winter.", options: [{ id: 'A', text: "hot" }, { id: 'B', text: "cold" }, { id: 'C', text: "warm" }, { id: 'D', text: "cool" }], difficulty: "Easy", correctAnswer: "A" },
    { id: 22, text: "Choose the correct answer:", content: "23. How ................. are they going to stay there ? _ For 3 days.", options: [{ id: 'A', text: "many" }, { id: 'B', text: "much" }, { id: 'C', text: "often" }, { id: 'D', text: "long" }], difficulty: "Easy", correctAnswer: "D" },
    { id: 23, text: "Choose the correct answer:", content: "24. They are ........................ aerobics now.", options: [{ id: 'A', text: "play" }, { id: 'B', text: "playing" }, { id: 'C', text: "do" }, { id: 'D', text: "doing" }], difficulty: "Medium", correctAnswer: "D" },
    { id: 24, text: "Choose the correct answer:", content: "25. We are going to .................. Nha Trang beach this summer.", options: [{ id: 'A', text: "stay" }, { id: 'B', text: "go" }, { id: 'C', text: "visit" }, { id: 'D', text: "travel" }], difficulty: "Easy", correctAnswer: "C" },
    { id: 25, text: "Choose the correct answer:", content: "26. Ba and Nga often listen to music in .................. free time.", options: [{ id: 'A', text: "your" }, { id: 'B', text: "his" }, { id: 'C', text: "her" }, { id: 'D', text: "their" }], difficulty: "Easy", correctAnswer: "D" },
    { id: 26, text: "Choose the correct answer:", content: "27. We have English on Tuesday and on Saturday. We have it .................... a week .", options: [{ id: 'A', text: "once" }, { id: 'B', text: "twice" }, { id: 'C', text: "two times" }, { id: 'D', text: "three times" }], difficulty: "Easy", correctAnswer: "B" },
    { id: 27, text: "Choose the correct answer:", content: "28. Lan doesn’t like watching T.V. She .................. watches T.V.", options: [{ id: 'A', text: "always" }, { id: 'B', text: "usually" }, { id: 'C', text: "never" }, { id: 'D', text: "often" }], difficulty: "Easy", correctAnswer: "C" },
    { id: 28, text: "Choose the correct answer:", content: "29. .................................. I help you ?", options: [{ id: 'A', text: "Do" }, { id: 'B', text: "Am" }, { id: 'C', text: "Would" }, { id: 'D', text: "Can" }], difficulty: "Easy", correctAnswer: "D" },
    { id: 29, text: "Choose the correct answer:", content: "30. HCM City is .................................. city in Viet Nam .", options: [{ id: 'A', text: "big" }, { id: 'B', text: "bigger" }, { id: 'C', text: "biggest" }, { id: 'D', text: "the biggest" }], difficulty: "Easy", correctAnswer: "D" },
    { id: 30, text: "Choose the correct answer:", content: "31. I’m going .............. the Ngoc Son Temple tomorrow.", options: [{ id: 'A', text: "see" }, { id: 'B', text: "sees" }, { id: 'C', text: "to see" }, { id: 'D', text: "seeing" }], difficulty: "Easy", correctAnswer: "C" },
    { id: 31, text: "Choose the correct answer:", content: "32. We have .......................... lakes in the countryside.", options: [{ id: 'A', text: "any" }, { id: 'B', text: "a lot" }, { id: 'C', text: "lots of" }, { id: 'D', text: "much" }], difficulty: "Easy", correctAnswer: "C" },
    { id: 32, text: "Choose the correct answer:", content: "33. What about ...................... to Hue.", options: [{ id: 'A', text: "go" }, { id: 'B', text: "to go" }, { id: 'C', text: "goes" }, { id: 'D', text: "going" }], difficulty: "Easy", correctAnswer: "D" },
    { id: 33, text: "Choose the correct answer:", content: "34. There are ..................... apples in the refrigerator.", options: [{ id: 'A', text: "a" }, { id: 'B', text: "an" }, { id: 'C', text: "some" }, { id: 'D', text: "any" }], difficulty: "Easy", correctAnswer: "C" },
    { id: 34, text: "Choose the correct answer:", content: "35. ............................ are you going to stay ? _ In a hotel.", options: [{ id: 'A', text: "What" }, { id: 'B', text: "Where" }, { id: 'C', text: "When" }, { id: 'D', text: "Which" }], difficulty: "Easy", correctAnswer: "B" },
    { id: 35, text: "Choose the correct answer:", content: "36. Tokyo is ............................. than Mexico City.", options: [{ id: 'A', text: "small" }, { id: 'B', text: "smaller" }, { id: 'C', text: "the smallest" }, { id: 'D', text: "very small" }], difficulty: "Easy", correctAnswer: "B" },
    { id: 36, text: "Choose the correct answer:", content: "37. I usually go to school .......................... the morning.", options: [{ id: 'A', text: "for" }, { id: 'B', text: "at" }, { id: 'C', text: "in" }, { id: 'D', text: "on" }], difficulty: "Easy", correctAnswer: "C" },
    { id: 37, text: "Choose the correct answer:", content: "38. We live in Hue , but my uncle ............. in HCM City.", options: [{ id: 'A', text: "to live" }, { id: 'B', text: "living" }, { id: 'C', text: "live" }, { id: 'D', text: "lives" }], difficulty: "Easy", correctAnswer: "D" },
    { id: 38, text: "Choose the correct answer:", content: "39. .................................. you learn French?", options: [{ id: 'A', text: "Would" }, { id: 'B', text: "Can" }, { id: 'C', text: "Does" }, { id: 'D', text: "Are" }], difficulty: "Easy", correctAnswer: "A" },
    { id: 39, text: "Choose the correct answer:", content: "40. ..................... do you do when it is hot ?", options: [{ id: 'A', text: "Who" }, { id: 'B', text: "What" }, { id: 'C', text: "When" }, { id: 'D', text: "Where" }], difficulty: "Easy", correctAnswer: "B" },
    { id: 40, text: "Choose the correct answer:", content: "41. How .......................... bananas are there in the fridge?", options: [{ id: 'A', text: "many" }, { id: 'B', text: "much" }, { id: 'C', text: "long" }, { id: 'D', text: "often" }], difficulty: "Easy", correctAnswer: "A" },

    { id: 41, text: "Choose the correct answer:", content: "42. The Red River is the ........................ in Viet Nam.", options: [{ id: 'A', text: "longer" }, { id: 'B', text: "very long" }, { id: 'C', text: "long" }, { id: 'D', text: "longest" }], difficulty: "Easy", correctAnswer: "D" },
    { id: 42, text: "Choose the correct answer:", content: "43. There isn’t ....................... milk in the bottle.", options: [{ id: 'A', text: "an" }, { id: 'B', text: "any" }, { id: 'C', text: "a" }, { id: 'D', text: "some" }], difficulty: "Easy", correctAnswer: "B" },
    { id: 43, text: "Choose the correct answer:", content: "44. I’d like some rice. I’m ................................ .", options: [{ id: 'A', text: "hungry" }, { id: 'B', text: "hot" }, { id: 'C', text: "thirsty" }, { id: 'D', text: "full" }], difficulty: "Easy", correctAnswer: "A" },
    { id: 44, text: "Choose the correct answer:", content: "45. My friends usually go ........................ in the river.", options: [{ id: 'A', text: "swimming" }, { id: 'B', text: "sailing" }, { id: 'C', text: "camping" }, { id: 'D', text: "walking" }], difficulty: "Easy", correctAnswer: "A" },
    { id: 45, text: "Choose the correct answer:", content: "46. How much is a ..................... of toothpaste ?", options: [{ id: 'A', text: "can" }, { id: 'B', text: "bar" }, { id: 'C', text: "tube" }, { id: 'D', text: "box" }], difficulty: "Easy", correctAnswer: "C" },
    { id: 46, text: "Choose the correct answer:", content: "47. It’s very cold in the ................................. .", options: [{ id: 'A', text: "summer" }, { id: 'B', text: "fall" }, { id: 'C', text: "spring" }, { id: 'D', text: "winter" }], difficulty: "Easy", correctAnswer: "D" },
    { id: 47, text: "Choose the correct answer:", content: "48. What about .................................... table tennis ?", options: [{ id: 'A', text: "play" }, { id: 'B', text: "playing" }, { id: 'C', text: "plays" }, { id: 'D', text: "to play" }], difficulty: "Easy", correctAnswer: "B" },
    { id: 48, text: "Choose the correct answer:", content: "49. ________ is a teacher.", options: [{ id: 'A', text: "You" }, { id: 'B', text: "She" }, { id: 'C', text: "It" }, { id: 'D', text: "I" }], difficulty: "Easy", correctAnswer: "B" },
    { id: 49, text: "Choose the correct answer:", content: "50. ________ your book on page 16 , please .", options: [{ id: 'A', text: "Close" }, { id: 'B', text: "Read" }, { id: 'C', text: "Open" }, { id: 'D', text: "Listen" }], difficulty: "Easy", correctAnswer: "C" },
    { id: 50, text: "Choose the correct answer:", content: "51. ________ do you live ?", options: [{ id: 'A', text: "What" }, { id: 'B', text: "Who" }, { id: 'C', text: "Where" }, { id: 'D', text: "How" }], difficulty: "Easy", correctAnswer: "C" },
    { id: 51, text: "Choose the correct answer:", content: "52. I live ________ Le Loi Street.", options: [{ id: 'A', text: "at" }, { id: 'B', text: "in" }, { id: 'C', text: "on" }, { id: 'D', text: "to" }], difficulty: "Easy", correctAnswer: "C" },
    { id: 52, text: "Choose the correct answer:", content: "53. Where ________ he live ?", options: [{ id: 'A', text: "do" }, { id: 'B', text: "is" }, { id: 'C', text: "does" }, { id: 'D', text: "are" }], difficulty: "Easy", correctAnswer: "C" },
    { id: 53, text: "Choose the correct answer:", content: "54. _______ do you spell your name ?", options: [{ id: 'A', text: "What" }, { id: 'B', text: "How" }, { id: 'C', text: "Which" }, { id: 'D', text: "Where" }], difficulty: "Easy", correctAnswer: "B" },
    { id: 54, text: "Choose the correct answer:", content: "55. How old is your brother ? ______ is five .", options: [{ id: 'A', text: "She" }, { id: 'B', text: "He" }, { id: 'C', text: "I" }, { id: 'D', text: "You" }], difficulty: "Easy", correctAnswer: "B" },
    { id: 55, text: "Choose the correct answer:", content: "56. Fifteen plus five equals __________ .", options: [{ id: 'A', text: "nineteen" }, { id: 'B', text: "twenty" }, { id: 'C', text: "eighteen" }, { id: 'D', text: "twelve" }], difficulty: "Easy", correctAnswer: "B" },
    { id: 56, text: "Choose the correct answer:", content: "57. What is your name ?", options: [{ id: 'A', text: "His name is Ba." }, { id: 'B', text: "My name is Ba." }, { id: 'C', text: "Her name is Ba." }, { id: 'D', text: "Its name is Ba." }], difficulty: "Easy", correctAnswer: "B" },
    { id: 57, text: "Choose the correct answer:", content: "58. Where is she ?", options: [{ id: 'A', text: "She is in her classroom ." }, { id: 'B', text: "She is Chi." }, { id: 'C', text: "She is fine" }, { id: 'D', text: "She is twelve." }], difficulty: "Easy", correctAnswer: "A" },
    { id: 58, text: "Choose the correct answer:", content: "59. Where does he live ?", options: [{ id: 'A', text: "He lives on Le Loi Street" }, { id: 'B', text: "He live on Le Loi Street" }, { id: 'C', text: "He lives at Le Loi Street" }, { id: 'D', text: "He live in Le Loi Street" }], difficulty: "Easy", correctAnswer: "A" },
    { id: 59, text: "Choose the correct answer:", content: "60. ________ are you ? I ‘m fine , thank you .", options: [{ id: 'A', text: "How old" }, { id: 'B', text: "How" }, { id: 'C', text: "What" }, { id: 'D', text: "Where" }], difficulty: "Easy", correctAnswer: "A" },
    { id: 60, text: "Choose the correct answer:", content: "61. ________ students are there in your class ?", options: [{ id: 'A', text: "How much" }, { id: 'B', text: "What" }, { id: 'C', text: "How many" }, { id: 'D', text: "How" }], difficulty: "Easy", correctAnswer: "C" },

    { id: 61, text: "Choose the correct answer:", content: "62. ________ is your house ? _ In the country.", options: [{ id: 'A', text: "What" }, { id: 'B', text: "Which" }, { id: 'C', text: "Where" }, { id: 'D', text: "How" }], difficulty: "Easy", correctAnswer: "C" },
    { id: 62, text: "Choose the correct answer:", content: "63. She lives with ________ family.", options: [{ id: 'A', text: "he" }, { id: 'B', text: "her" }, { id: 'C', text: "I" }, { id: 'D', text: "she" }], difficulty: "Easy", correctAnswer: "B" },
    { id: 63, text: "Choose the correct answer:", content: "64. How many _______ are there in your family ?", options: [{ id: 'A', text: "people" }, { id: 'B', text: "students" }, { id: 'C', text: "teachers" }, { id: 'D', text: "peoples" }], difficulty: "Easy", correctAnswer: "A" },
    { id: 64, text: "Choose the correct answer:", content: "65. Lan ________ on Nguyen Hue Street.", options: [{ id: 'A', text: "lives" }, { id: 'B', text: "live" }, { id: 'C', text: "is" }, { id: 'D', text: "are" }], difficulty: "Easy", correctAnswer: "A" },
    { id: 65, text: "Choose the correct answer:", content: "66. This is Nga . ________ school is big .", options: [{ id: 'A', text: "His" }, { id: 'B', text: "Her" }, { id: 'C', text: "Your" }, { id: 'D', text: "She" }], difficulty: "Easy", correctAnswer: "B" },
    { id: 66, text: "Choose the correct answer:", content: "67. That is ________ house.", options: [{ id: 'A', text: "Long" }, { id: 'B', text: "Long’s" }, { id: 'C', text: "he" }, { id: 'D', text: "Long is" }], difficulty: "Easy", correctAnswer: "B" },
    { id: 67, text: "Choose the correct answer:", content: "68. Is Phong’s school ________ the country ?", options: [{ id: 'A', text: "on" }, { id: 'B', text: "in" }, { id: 'C', text: "at" }, { id: 'D', text: "to" }], difficulty: "Easy", correctAnswer: "B" },
    { id: 68, text: "Choose the correct answer:", content: "69. ________ class are you in ? I’m in class 6A .", options: [{ id: 'A', text: "What" }, { id: 'B', text: "Which" }, { id: 'C', text: "Where" }, { id: 'D', text: "How many" }], difficulty: "Easy", correctAnswer: "B" },
    { id: 69, text: "Choose the correct answer:", content: "70. She is _______ grade 6 .", options: [{ id: 'A', text: "on" }, { id: 'B', text: "in" }, { id: 'C', text: "at" }, { id: 'D', text: "with" }], difficulty: "Easy", correctAnswer: "B" },
    { id: 70, text: "Choose the correct answer:", content: "71. My classroom is ________ floor.", options: [{ id: 'A', text: "in the second" }, { id: 'B', text: "on the two" }, { id: 'C', text: "on the second" }, { id: 'D', text: "on second" }], difficulty: "Easy", correctAnswer: "C" },
    { id: 71, text: "Choose the correct answer:", content: "72. How many classrooms ________ your school have ?", options: [{ id: 'A', text: "do" }, { id: 'B', text: "are" }, { id: 'C', text: "does" }, { id: 'D', text: "are there" }], difficulty: "Easy", correctAnswer: "C" },
    { id: 72, text: "Choose the correct answer:", content: "73. __________ do you get up ? _ At five .", options: [{ id: 'A', text: "What time" }, { id: 'B', text: "Where" }, { id: 'C', text: "What" }, { id: 'D', text: "How many" }], difficulty: "Easy", correctAnswer: "A" },
    { id: 73, text: "Choose the correct answer:", content: "74. I go ___________ school at 6:45", options: [{ id: 'A', text: "at" }, { id: 'B', text: "in" }, { id: 'C', text: "to" }, { id: 'D', text: "on" }], difficulty: "Easy", correctAnswer: "A" },
    { id: 74, text: "Choose the correct answer:", content: "75. What time _________ they have breakfast ?", options: [{ id: 'A', text: "does" }, { id: 'B', text: "are" }, { id: 'C', text: "do" }, { id: 'D', text: "is" }], difficulty: "Easy", correctAnswer: "C" },
    { id: 75, text: "Choose the correct answer:", content: "76. How many _________ are there in your classroom ?", options: [{ id: 'A', text: "chair" }, { id: 'B', text: "chairs" }, { id: 'C', text: "table" }, { id: 'D', text: "chaires" }], difficulty: "Easy", correctAnswer: "B" },
    { id: 76, text: "Choose the correct answer:", content: "77. She listens to ________ in the evening .", options: [{ id: 'A', text: "books" }, { id: 'B', text: "music" }, { id: 'C', text: "homework" }, { id: 'D', text: "television" }], difficulty: "Easy", correctAnswer: "B" },
    { id: 77, text: "Choose the correct answer:", content: "78. They go ________ at 5: pm.", options: [{ id: 'A', text: "school" }, { id: 'B', text: "class" }, { id: 'C', text: "home" }, { id: 'D', text: "to home" }], difficulty: "Easy", correctAnswer: "C" },
    { id: 78, text: "Choose the correct answer:", content: "79. Thu ________ the housework every day .", options: [{ id: 'A', text: "does" }, { id: 'B', text: "goes" }, { id: 'C', text: "watches" }, { id: 'D', text: "plays" }], difficulty: "Easy", correctAnswer: "A" },
    { id: 79, text: "Choose the correct answer:", content: "80. Hoa and Lan _______ games every afternoon .", options: [{ id: 'A', text: "play" }, { id: 'B', text: "plays" }, { id: 'C', text: "goes" }, { id: 'D', text: "listens" }], difficulty: "Easy", correctAnswer: "A" },
    { id: 80, text: "Choose the correct answer:", content: "81. We watch ________ every evening .", options: [{ id: 'A', text: "music" }, { id: 'B', text: "television" }, { id: 'C', text: "history" }, { id: 'D', text: "breakfast" }], difficulty: "Easy", correctAnswer: "B" },

    { id: 81, text: "Choose the correct answer:", content: "82. ________ do they have dinner ? At 6: 00", options: [{ id: 'A', text: "What time" }, { id: 'B', text: "Where" }, { id: 'C', text: "When" }, { id: 'D', text: "What" }], difficulty: "Easy", correctAnswer: "A" },
    { id: 82, text: "Choose the correct answer:", content: "83. There are __________ days in a week.", options: [{ id: 'A', text: "six" }, { id: 'B', text: "seven" }, { id: 'C', text: "eight" }, { id: 'D', text: "nine" }], difficulty: "Easy", correctAnswer: "B" },
    { id: 83, text: "Choose the correct answer:", content: "84. ______ do you have English ? _ On Monday and Friday", options: [{ id: 'A', text: "What time" }, { id: 'B', text: "What" }, { id: 'C', text: "When" }, { id: 'D', text: "Where" }], difficulty: "Easy", correctAnswer: "C" },
    { id: 84, text: "Choose the correct answer:", content: "85. After school , I _________ games.", options: [{ id: 'A', text: "do" }, { id: 'B', text: "read" }, { id: 'C', text: "play" }, { id: 'D', text: "listen" }], difficulty: "Easy", correctAnswer: "C" },
    { id: 85, text: "Choose the correct answer:", content: "86. David _______ to bed at ten p.m.", options: [{ id: 'A', text: "go" }, { id: 'B', text: "goes" }, { id: 'C', text: "gets" }, { id: 'D', text: "watches" }], difficulty: "Easy", correctAnswer: "B" },
    { id: 86, text: "Choose the correct answer:", content: "87. What do you do every day?", options: [{ id: 'A', text: "We go to school" }, { id: 'B', text: "We go home" }, { id: 'C', text: "We get up at six" }, { id: 'D', text: "We have classes at seven" }], difficulty: "Easy", correctAnswer: "A" },
    { id: 87, text: "Choose the correct answer:", content: "88. What time does Lan have breakfast ?", options: [{ id: 'A', text: "After school" }, { id: 'B', text: "In the afternoon" }, { id: 'C', text: "On Sunday" }, { id: 'D', text: "At six o’clock ." }], difficulty: "Easy", correctAnswer: "D" },
    { id: 88, text: "Choose the correct answer:", content: "89. Do you play soccer every day ?", options: [{ id: 'A', text: "Yes , I do ." }, { id: 'B', text: "Yes , I play." }, { id: 'C', text: "No , I do ." }, { id: 'D', text: "I play soccer." }], difficulty: "Easy", correctAnswer: "A" },
    { id: 89, text: "Choose the correct answer:", content: "90. My house is ______ the bookstore and the toy store .", options: [{ id: 'A', text: "near" }, { id: 'B', text: "between" }, { id: 'C', text: "next to" }, { id: 'D', text: "with" }], difficulty: "Easy", correctAnswer: "B" },
    { id: 90, text: "Choose the correct answer:", content: "91. There is a park ________ our school .", options: [{ id: 'A', text: "between" }, { id: 'B', text: "next to" }, { id: 'C', text: "to the left" }, { id: 'D', text: "near" }], difficulty: "Easy", correctAnswer: "D" },
    { id: 91, text: "Choose the correct answer:", content: "92. Nam’s father works in a ________. He is a doctor.", options: [{ id: 'A', text: "factory" }, { id: 'B', text: "hospital" }, { id: 'C', text: "school" }, { id: 'D', text: "stadium" }], difficulty: "Easy", correctAnswer: "B" },
    { id: 92, text: "Choose the correct answer:", content: "93. Mai ‘s mother teaches history. She is a ________", options: [{ id: 'A', text: "nurse" }, { id: 'B', text: "doctor" }, { id: 'C', text: "teacher" }, { id: 'D', text: "engineer" }], difficulty: "Easy", correctAnswer: "C" },
    { id: 93, text: "Choose the correct answer:", content: "94. ________ does he work ? In the museum .", options: [{ id: 'A', text: "What" }, { id: 'B', text: "Which" }, { id: 'C', text: "How many" }, { id: 'D', text: "Where" }], difficulty: "Easy", correctAnswer: "D" },
    { id: 94, text: "Choose the correct answer:", content: "95. Lan’s brother is a worker .He works in a ____________", options: [{ id: 'A', text: "hotel" }, { id: 'B', text: "factory" }, { id: 'C', text: "stadium" }, { id: 'D', text: "museum" }], difficulty: "Easy", correctAnswer: "B" },
    { id: 95, text: "Choose the correct answer:", content: "96. The cat is ________ the left of the box .", options: [{ id: 'A', text: "to" }, { id: 'B', text: "in" }, { id: 'C', text: "on" }, { id: 'D', text: "at" }], difficulty: "Easy", correctAnswer: "A" },
    { id: 96, text: "Choose the correct answer:", content: "97. My classroom is ________ the library.", options: [{ id: 'A', text: "in" }, { id: 'B', text: "opposite" }, { id: 'C', text: "at" }, { id: 'D', text: "next" }], difficulty: "Easy", correctAnswer: "B" },
    { id: 97, text: "Choose the correct answer:", content: "98. We eat dinner in a small __________. ", options: [{ id: 'A', text: "store" }, { id: 'B', text: "restaurant" }, { id: 'C', text: "movie theater" }, { id: 'D', text: "museum" }], difficulty: "Easy", correctAnswer: "B" },
    { id: 98, text: "Choose the correct answer:", content: "99. There are many trees ___________ the house", options: [{ id: 'A', text: "left" }, { id: 'B', text: "right" }, { id: 'C', text: "behind" }, { id: 'D', text: "in front" }], difficulty: "Easy", correctAnswer: "B" },
    { id: 99, text: "Choose the correct answer:", content: "100. Minh lives in the city _________ his father, mother.", options: [{ id: 'A', text: "in" }, { id: 'B', text: "with" }, { id: 'C', text: "near" }, { id: 'D', text: "next to" }], difficulty: "Easy", correctAnswer: "B" },
    { id: 100, text: "Choose the correct answer:", content: "Final Review Question: Which of the following is an English grammar topic?", options: [{ id: 'A', text: "Tenses" }, { id: 'B', text: "Geometry" }, { id: 'C', text: "Volcanoes" }, { id: 'D', text: "Painting" }], difficulty: "Medium", correctAnswer: "A" },
];

export const MOCK_EXAMS: Exam[] = [
    {
        id: 1,
        title: "English Mock Test 1 (Questions 1-20)",
        questions: 20,
        time: 35,
        score: 0,
        isNew: true,
        questionList: ALL_QUESTIONS.slice(0, 20),
    },
    {
        id: 2,
        title: "English Mock Test 2 (Questions 21-40)",
        questions: 20,
        time: 35,
        score: 0,
        isNew: true,
        questionList: ALL_QUESTIONS.slice(20, 40),
    },
    {
        id: 3,
        title: "English Mock Test 3 (Questions 41-60)",
        questions: 20,
        time: 35,
        score: 0,
        isNew: true,
        questionList: ALL_QUESTIONS.slice(40, 60),
    },
    {
        id: 4,
        title: "English Mock Test 4 (Questions 61-80)",
        questions: 20,
        time: 35,
        score: 0,
        isNew: true,
        questionList: ALL_QUESTIONS.slice(60, 80),
    },
    {
        id: 5,
        title: "English Mock Test 5 (Questions 81-100)",
        questions: 20,
        time: 35,
        score: 0,
        isNew: true,
        questionList: ALL_QUESTIONS.slice(80, 100),
    },
];

export const getExamById = (id: string | number | undefined): Exam | undefined => {
    if (!id) return undefined;
    return MOCK_EXAMS.find(e => e.id === Number(id));
};
