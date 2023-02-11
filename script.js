/*let namasteBtn=documnet.querySelector('button');
namasteBtn.addEventListener('click',showMsg);

function showMsg(){
    alert("Namaste World");
}*/
let namasteBtn=documnet.querySelector('button');
namasteBtn.addEventListener('click',inputMsg);

function inputMsg(){
    let name=prompt('enter the name');
    namasteBtn.textContent='Roll Number 1:' + name;
}
