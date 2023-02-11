// // // the scope is by default global
// // var name = 'Ashish';
// // function sayName(){
// //     var marks = 10;
// //     console.log(name);
// // }

// // sayName()
// // console.log(marks);
// var x=0;
// //Global Scope
// function first(){
//     //local scope #1
//     var x=1;
//     console.log(x);
//     function childOfFirst(){
//         var x=2;
//         console.log(x);
//             //local scope #2
//     }
//     childOfFirst()
// }
// first()



// //Global scope
// function second(){
//     console.log(x);
//     //local scope #3
// }
// //global scope
// second()

// var x=10
// {
//     var x=1;
//     console.log(x);
// }
// console.log(x);

// if (true){
//     // thsi 'if' conditional block doesn;t create a new scope
//     var foo='bar';
// }
// console.log(foo);

//lexical scope
function Myself() {
    var name='Ashish Gupta';
    // likes is not accessible here
    function Gang(){
        console.log(name);
        //name is accessible here
        //likes is not accessible here
        function Hero(){
            //innermost level of the scope chain
            //name is also accessible here
            var likes='Coding';
        }
        Hero()
    }
    Gang()
}
Myself()