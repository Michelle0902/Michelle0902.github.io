// Question 1
class Meditation{
    // duration = this.duration;
    constructor(duration){
        this.duration=duration;
    }

    async start(){
        for(let i = this.duration-1; i>=0; i--){
            await this.setTime();
            console.log(i);
        }
        console.log("Jay Guru Dev");
    }
    
     setTime(){
        return new Promise(resolve=> setTimeout(resolve, 1000));
    }
}

const morning_meditation = new Meditation(5);
morning_meditation.start();
console.log(`Start meditation`);

// Question 2 
const isPrime = (n) => {
    return new Promise((resolve, reject) => {
        if (n <= 1) return reject({ prime: false }); 
        
        for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
            if (n % i === 0) return reject({ prime: false });
        }
        return resolve({ prime: true });
    });
};
   
console.log('start');
async function checkPrime(n) {
    try {
        const result = await isPrime(n);
        console.log(result); 
    } catch (error) {
        console.error(error); 
    }
}
console.log('end');
checkPrime(8);

// Question 3
async function fetchData(){
    try{
    const response = await fetch('https://dummyjson.com/recipes');
    const data = await response.json();
    const names = data 
    .recipes.map(r=>r.name);
    console.log("names of recipes: ", names);
    } catch {
        console.error("error fetching data: ", error);
    }
}

fetchData();