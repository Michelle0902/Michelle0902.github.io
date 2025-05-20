// Question 01: Define a TypeScript function to describe a person
function describePerson(person: { name: string; age: number; isStudent: boolean }): string {
    return `${person.name} is ${person.age} years old and ${person.isStudent ? 'is a student' : 'is not a student'}.`;
}

console.log(describePerson({ name: 'Alice', age: 25, isStudent: true })); // Alice is 25 years old and is a student.

// Question 02: Find the second largest number without using Array.sort()
function secondLargest(numbers: number[]): number | null {
    if (numbers.length < 2) return null;
    let max = -Infinity;
    let secondMax = -Infinity;
    for (const num of numbers) {
        if (num > max) {
            secondMax = max;
            max = num;
        } else if (num > secondMax && num !== max) {
            secondMax = num;
        }
    }
    return secondMax;
}

console.log(secondLargest([20, 120, 111, 215, 54, 78])); // 120

// Question 03: Sum of any number of arguments using the rest operator
function sumAll(...numbers: number[]): number {
    return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sumAll(1, 2, 3, 4, 5)); // 15

// Question 04: Concatenate two arrays using the spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];
console.log(combinedArray); // [1, 2, 3, 4, 5, 6]

// Question 05: Convert Lab07 Class syntax JavaScript code to TypeScript
class Question {
    qid: number;
    answer: string;

    constructor(qid: number, answer: string) {
        this.qid = qid;
        this.answer = answer;
    }

    checkAnswer(studentAnswer: string): boolean {
        return this.answer === studentAnswer;
    }
}

class Student {
    studentId: number;
    answers: Map<number, string>;

    constructor(studentId: number) {
        this.studentId = studentId;
        this.answers = new Map();
    }

    addAnswer(question: Question, studentAns: string): void {
        this.answers.set(question.qid, studentAns);
    }
}

class Quiz {
    questions: Map<number, Question>;
    students: Student[];

    constructor(questionsArray: Question[] = [], students: Student[] = []) {
        this.questions = new Map();
        questionsArray.forEach(q => this.questions.set(q.qid, q));
        this.students = students;
    }

    scoreStudentBySid(sid: number): number {
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

    getAverageScore(): number {
        if (this.students.length === 0) return 0;

        let totalScore = 0;
        this.students.forEach(s => totalScore += this.scoreStudentBySid(s.studentId));

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
console.log(quiz.getAverageScore()); // 2.5
