// // Question 1
// function Student(studentId){
//     this.studentId = studentId;
//     this.answers = new Map();
// }

// Student.prototype.addAnswer = function(question, studentAns){
//    this.answers.set(question.qid, studentAns);
// };

// function Question(qid, answer) {
//  this.qid = qid;
//  this.answer = answer;
// }

// Question.prototype.checkAnswer = function(studentAnswer) {
//  return this.answer === studentAnswer;
// };

// function Quiz(questionsArray = [], students = []) {
//    this.questions = new Map();
//    questionsArray.forEach(q => {
//      this.questions.set(q.qid, q); 
//    });
//    this.students = students;
// }

// Quiz.prototype.scoreStudentBySid = function (sid) {
//    const student = this.students.find(s => s.studentId === sid);
//    if (!student) return 0;

//    let score = 0;
//    for (const [qid, studentAnswer] of student.answers.entries()) {
//        const currentQuestion = this.questions.get(qid); 
//        if (currentQuestion && currentQuestion.checkAnswer(studentAnswer)) {
//            score++;
//        }
//    }
//    return score;
// };

// Quiz.prototype.getAverageScore = function () {
//    if (this.students.length === 0) return 0;

//    let totalScore = 0;
//    this.students.forEach(s => {
//        totalScore += this.scoreStudentBySid(s.studentId);
//    });

//    return totalScore / this.students.length;
// };

// // ---------- Test ----------
// const student1 = new Student(10);
// student1.addAnswer(new Question(2, 'a'), 'a');
// student1.addAnswer(new Question(3, 'b'), 'b');
// student1.addAnswer(new Question(1, 'b'), 'b');

// const student2 = new Student(11);
// student2.addAnswer(new Question(3, 'b'), 'b');
// student2.addAnswer(new Question(2, 'a'), 'a');
// student2.addAnswer(new Question(1, 'd'), 'd');

// const students = [student1, student2];
// const questions = [
//  new Question(1, 'b'),
//  new Question(2, 'a'),
//  new Question(3, 'b')
// ];

// const quiz = new Quiz(questions, students);

// let scoreforStudent10 = quiz.scoreStudentBySid(10);
// console.log(scoreforStudent10); //  Expected: 3

// let scoreforStudent11 = quiz.scoreStudentBySid(11);
// console.log(scoreforStudent11); // Expected: 2

// let average = quiz.getAverageScore();
// console.log(average); // Expected: 2.5

// Question 2

class Question {
    constructor(qid, answer) {
      this.qid = qid;
      this.answer = answer;
    }
  
    checkAnswer(studentAnswer) {
      return this.answer === studentAnswer;
    }
  }
  
class Student {
constructor(studentId) {
    this.studentId = studentId;
    this.answers = new Map(); 
}

addAnswer(question, studentAns) {
    this.answers.set(question.qid, studentAns);
}
}

class Quiz {
constructor(questionsArray = [], students = []) {
    this.questions = new Map(); 
    questionsArray.forEach(q => {
    this.questions.set(q.qid, q);
    });
    this.students = students;
}

scoreStudentBySid(sid) {
    const student = this.students.find(s => s.studentId === sid);
    if (!student) return 0;

    let score = 0;
    for (const [qid, studentAnswer] of student.answers.entries()) {
    const question = this.questions.get(qid);
    if (question && question.checkAnswer(studentAnswer)) {
        score++;
    }
    }
    return score;
}

getAverageScore() {
        if (this.students.length === 0) return 0;

        let totalScore = 0;
        this.students.forEach(s => {
        totalScore += this.scoreStudentBySid(s.studentId);
        });

        return totalScore / this.students.length;
    }
}

const q1 = new Question(1, 'b');
const q2 = new Question(2, 'a');
const q3 = new Question(3, 'b');

const s1 = new Student(10);
s1.addAnswer(q2, 'a');
s1.addAnswer(q3, 'b');
s1.addAnswer(q1, 'b');

const s2 = new Student(11);
s2.addAnswer(q3, 'b');
s2.addAnswer(q2, 'a');
s2.addAnswer(q1, 'd');

const quiz = new Quiz([q1, q2, q3], [s1, s2]);

console.log(quiz.scoreStudentBySid(10)); // 3
console.log(quiz.scoreStudentBySid(11)); // 2
console.log(quiz.getAverageScore());     // 2.5

// Question 3
class Exercise3 {
    #movies = new Map();
     //key is the genre: string, value is array of movies
    // example: { thriller: [{ id: '1', title: 'The American'}, { id: '2', title: 'Arcadian'}] }
    add_genre(genre) {
    // add genre if genre does not exist
    // return true if the genre is added successfully, false otherwise
    if (this.#movies.has(genre)){
        return false;
    }  
    this.#movies.set(genre, []);
    return true;
    }
    add_movie_in_genre(genre, new_movie) {
    // add movie if movie id does not exist
    // return true if the movie is added successfully, false otherwise
    // for(const movie of this.#movies.get(genre))
    if (!this.#movies.has(genre)) {
        return false;
    }  
    const Gmovies = this.#movies.get(genre);
    const hasId = Gmovies.some(m=>m.id===new_movie.id);
    if (hasId){return false;}
    Gmovies.push(new_movie);
    return true;
    }
    update_movie_title_by_genre_and_movie_id(genre, movie_id, new_title) {
    // update a movie within a certain genre
    // return true if the movie's title is updated successfully, false otherwise
    if (!this.#movies.has(genre)){
        return false;
    }
    const Gmovies = this.#movies.get(genre);
    const hasId = Gmovies.some(m=>m.id==movie_id);
    if(hasId){
        const movie = Gmovies.find(m => m.id === movie_id);
        if (!movie) return false;
        movie.title = new_title;
        return true;
    } else {
        return false;
    }
    }
    delete_movie_by_genre_and_movie_id(genre, movie_id) {
    // delete movie
    // return true if the movie is delete successfully, false otherwise
    if (!this.#movies.has(genre)){
        return false;
    }
    const Gmovies = this.#movies.get(genre);
    const hasId = Gmovies.some(m=>m.id==movie_id);
        if(hasId){
            const index = Gmovies.findIndex(m => m.id === movie_id);
            if (index === -1) return false;
            Gmovies.splice(index, 1);
            return true;
        } else {
            return false;
        }
    }
    
    get_movie_title_by_id(genre, movie_id) {
        // return the movie title
        if (!this.#movies.has(genre)){
            return '';
        }
        const Gmovies = this.#movies.get(genre);
        const hasId = Gmovies.some(m=>m.id===movie_id);
       
        if(hasId){
            const movie = Gmovies.find(m => m.id === movie_id);
            return movie ? movie.title : '';
        }      
    }
}

const lib = new Exercise3();

// Add genres
console.log(lib.add_genre("thriller")); // true
console.log(lib.add_genre("comedy"));   // true
console.log(lib.add_genre("thriller")); // false 

// Add movies
console.log(lib.add_movie_in_genre("thriller", { id: "1", title: "The American" })); // true
console.log(lib.add_movie_in_genre("thriller", { id: "2", title: "Arcadian" }));     // true
console.log(lib.add_movie_in_genre("thriller", { id: "1", title: "Duplicate ID" })); // false
console.log(lib.add_movie_in_genre("action", { id: "3", title: "Random" }));         // false

// Update movie title
console.log(lib.update_movie_title_by_genre_and_movie_id("thriller", "1", "The American Remastered")); // true
console.log(lib.update_movie_title_by_genre_and_movie_id("comedy", "1", "No Such Movie"));             // false

// Get movie title
console.log(lib.get_movie_title_by_id("thriller", "1")); // "The American Remastered"
console.log(lib.get_movie_title_by_id("comedy", "1"));   // ''

// Delete movie
console.log(lib.delete_movie_by_genre_and_movie_id("thriller", "2")); // true
console.log(lib.delete_movie_by_genre_and_movie_id("thriller", "2")); // false
