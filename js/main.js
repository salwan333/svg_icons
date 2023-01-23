console.log('javascript is running!');

let book = document.querySelector('#book');
function logid(){
    console.log(this.id);
}
book.addEventListener('click',logid);

