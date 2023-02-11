// let counter={
//     count:0,
//     increment: function(){             //output
//         counter.count++;                   //1
//     }
// }
// counter.increment();
// console.log(counter.count);

// let counter=createCounter();
//     function createCounter(){
//         return{
//             count:0,
//             increment: function(){             
//                 this.count++;  
//         }
//     }
// }
// counter.increment();
// console.log(counter.count);

// var count=0;
// function incrementCounter(counter){
//     this.count++;
// }
// incrementCounter();
// incrementCounter();
// console.log(count);
console.log(this);

function Car(name){
    this.name=name;
    this.start=function(){                    //output
        console.log(this.name + 'started')    //Car {name: 'Swift', start: ƒ}
        console.log(this)
    }
}

let swift = new Car('Swift');
console.log(swift);