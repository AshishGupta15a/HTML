// function sayHello(){
//     console.log("hello");
// }
// var i=10;                      // output
// sayHello();                      // 10
// console.log(i);                   //hello

// sayHello();
// console.log(i);
// function sayHello(){                    //output
//     console.log("hello");                //hello
// }                                        //undefined
// var i=10;

// sayHello();
// console.log(i);
// var sayHello =function(){                    //output
//     console.log("hello");            //error
// }                                        
// var i=10;

let foo='bar';                     //output
if(true){                           //baz
    let foo='baz';                  //bar
    console.log(foo);
}
console.log(foo);