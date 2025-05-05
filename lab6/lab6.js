// Question 1
const Student = {
    firstName: "",
    lastName: "",
    grades: [],
  
    inputNewGrade(newGrade) {
      this.grades.push(newGrade);
    },

    computeAverageGrade(){
        let sum = this.grades.reduce((acc, curr)=>acc+curr,0);
        return sum/this.grades.length;
    }
}

const student1 = Object.create(Student);
student1.firstName = "Alice";
student1.lastName = "Smith";
student1.grades = [90, 85, 88];

const student2 = Object.create(Student);
student2.firstName = "Bob";
student2.lastName = "Jones";
student2.grades = [70, 75, 80];

const student3 = Object.create(Student);
student3.firstName = "Charlie";
student3.lastName = "Lee";
student3.grades = [95, 90, 92];

let Students = [student1,student2, student3];
let totalSum = 0;
let totalGrades = 0;
Students.forEach(stu=>{
    totalSum += stu.grades.reduce((acc, curr)=> acc+curr,0);
    totalGrades += stu.grades.length;
})
console.log("The averge grade of 1st studnet is: ", student1.computeAverageGrade());
console.log("The averge grade of 2nd studnet is: ", student2.computeAverageGrade());
console.log("The averge grade of 3rd studnet is: ", student3.computeAverageGrade());
console.log("The averge grade of all studnet is: ", totalSum/totalGrades);

// Question 2
function Student2(firstName, lastName, grades = []){
    this.firstName=firstName,
    this.lastName=lastName,
    this.grades=grades
    // this.computeAverageGrade = function(){
    //     let sum = this.grades.reduce((acc, curr)=>acc+curr,0);
    //     return sum/this.grades.length;
    // }
}

Student2.prototype.inputNewGrade = function(newGrade) {
    this.grades.push(newGrade);
  };
  
Student2.prototype.computeAverageGrade = function() {
    if (this.grades.length === 0) return 0;
    const sum = this.grades.reduce((acc, curr) => acc + curr, 0);
    return sum / this.grades.length;
};  

const student21 = new Student2("Alice", "Smith", [90, 85, 88]);
const student22 = new Student2("Bob", "Jones", [70, 75, 80]);
const student23 = new Student2("Charlie", "Lee", [95, 90, 92]);

const students2 = [student21, student22, student23];

let totalSum2 = 0;
let totalCount2 = 0;

for (const stu of students2) {
  totalSum2 += stu.grades.reduce((a, b) => a + b, 0);
  totalCount2 += stu.grades.length;
}

const overallAverage = totalSum2 / totalCount2;
console.log("The averge grade of 21st studnet is: ", student21.computeAverageGrade());
console.log("Overall average grade:", overallAverage);

// Question 3
function Animal(name, speed){
    this.name = name;
    this.speed = speed;
}
Animal.prototype.run = function(){
    this.speed++;
}
Animal.compareBySpeed = function (a1, a2) {
    if (a1.speed > a2.speed) {
      console.log(a1.name + " runs faster");
    } else if (a1.speed < a2.speed) {
      console.log(a2.name + " runs faster");
    } else {
      console.log("Both run at the same speed");
    }
};
function Rabbit(name, speed) {
    Animal.call(this, name, speed); 
}
Rabbit.prototype = Object.create(Animal.prototype);
Rabbit.prototype.constructor = Rabbit;
Rabbit.prototype.hide = function () {
    console.log(this.name + " hides");
};

// Test objs
const rabbit1 = new Rabbit("Bunny", 5);
const rabbit2 = new Rabbit("Thumper", 9);

rabbit1.run();
console.log(rabbit1.name + "'s speed:", rabbit1.speed); // 6

rabbit1.hide(); 

Animal.compareBySpeed(rabbit1, rabbit2); 