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
const isPrime = (n: number) => {
    for (let i = 2, s = Math.sqrt(n); i <= s; i++)
    if (n % i === 0) return Promise.reject(false);
    return Promise.resolve(true);
   };
   
console.log('start');
await isPrime(7){

}
 ;
console.log('end');
