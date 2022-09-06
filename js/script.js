// Getting all required element

const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");

// if start quiz btn clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeinfo"); //show the info btn
}
// if exit btn clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeinfo"); //hide the info btn
}

// if continue btn clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeinfo"); //hide the info btn
    quiz_box.classList.add("activequiz"); //hide the info btn
}

