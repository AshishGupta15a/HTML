let a='Hello World';
function first(){
    console.log('inside first function');
    second();
    console.log('again inside first function');
}
function second(){
    console.log('inside second function');
}
first()
console.log('inside global execution context');