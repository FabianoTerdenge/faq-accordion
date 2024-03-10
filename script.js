function openAnswere(id){
    let answere = document.getElementsByTagName("p");
    if(id > answere.length || id < 0)return;
    //toggle hide
    answere[id].classList.toggle("hide");
    //toggle img 
    let answereshown = !answere[id].classList.contains("hide");
    let question = document.getElementsByTagName("img");
    question[id+1].src = answereshown ? "assets/images/icon-minus.svg" : "assets/images/icon-plus.svg";
    question[id+1].alt = answereshown ? "minus" : "plus";
}