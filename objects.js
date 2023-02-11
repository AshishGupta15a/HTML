//  let lecture=10;
//  let section=3;
//  let title='Javascript';

//  const course={
//     lecture:10,
//     section:3,
//     title:'Javascript',
//     notes:{
//         introduction:"welcome to Js code"
//     },
//     enroll() {
//         console.log('you are successfully enrolled');
//     }
//  }
//  course.enroll()
//  console.log(course)

//  course.price=999

//Factory function
function createCourse(title){
    return{
        title: title,
        enroll() {
            console.log('you have successfully enrolled');
        }
    }
}
//Constructor Function
function Course(){
     this.title=title,
     this.enroll=function(){
        console.log('you have successfully enrolled');
     }
}

delete course.title;
