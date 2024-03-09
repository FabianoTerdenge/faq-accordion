function openAnswere(id){
    let answere = document.getElementsByTagName("p");
    console.log(answere);
    if(id > answere.length || id < 0)return;
    answere[id].classList.toggle("hide");

}