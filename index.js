// SELECTEURS
//document.querySelector('h4').style.background= "yellow";
//const baliseHTML = document.querySeclector("h4");
//click event
const questionContainer = document.querySelector
(".click-event");
const btn1 = document.querySelector('#btn-1')
const btn2 = document.getElementById('btn-2')
//console.log(btn1, btn2);
const response = document.querySelector("p");

questionContainer.addEventListener('click', () => {
questionContainer.classList.toggle("question-clicked")
  
//questionContainer.style.background = "red";
//questionContainer.style.border  = "3px solid teal";
//questionContainer.classList.add("question-clicked")
})

btn1.addEventListener('click', () =>{
    //console.log("Click !");
    response.classList.add("shoow-response")
    response.style.visibility= "visible";
    response.style.background = "green";

})
btn2.addEventListener("click",() =>{
    //console.log("click !");
    response.style.visibility= "visible";
    response.style.background = "red";
})
/*<div> > #id > .class > baliseHTML*/
//-----------------------------------------------------
// Mousse Events
const mousemove = document.querySelector(".mousemove");
console.log(mousemove);
window.addEventListener("mousemove", (e) => {
console.log(e.target);
mousemove.style.left = e.pageX + "px";
mousemove.style.top = e.pageY + "px";

//console.log("MOUSEMOVE!!!");
});
window.addEventListener("mousedown", () => {
mousemove.style.transform = "scale(2) translate(-25%, -25%)";

});
window.addEventListener("mousedown", () => {
    mousemove.style.transform = "scale(1) translate(-50%, -50%)";
    mousemove.style.border = "2px solid teal";
    });
questionContainer.addEventListener('mouseenter', () =>{
    questionContainer.style.background = "rgba(0,0,0,0.6)";
});
questionContainer.addEventListener("mouseout", () => {
questionContainer.style.background = "pink";
});
response.addEventListener("mouseover", () => {
    response.style.transform = "rotate(2deg)";
});
//------------------------------------------------------
//keyPress event

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");
//console.log(key);
const ring = () => {
    const audio = new Audio ();
    audio.src = "./song.mp3"
    audio.play();
};
document.addEventListener("keypress", (e) => {
    console.log(e);
//console.log("yes !!");
key.textContent = e.key;

if (e.key === "j") {
keypressContainer.style.background = "pink";
} else if (e.key ==="h") {
keypressContainer.style.background = "teal";
} else {
    keypressContainer.style.background = "red";
}
ring();
});
//----------------------------------------------
//Scrool Event
const nav = document.querySelector("nav");
//console.log(nav);
window.addEventListener("scroll", () => {
console.log("window.scrollY");

if (window.scrollY > 120) {
    nav.style.top = 0;
} else {
    nav.style.top = "-50px"
}
});
//--------------------------------------------
//Form Events
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("select");
let pseudo = "";
let language = ""
inputName.addEventListener('input', (e) => {
   // console.log("yes !");
  // console.log(e.target.value);
  pseudo = e.target.value;
  //console.log(pseudo);
})
select.addEventListener("input", (e) => {
   // console.log(e.target.value);
   language= e.target.value;
});
form.addEventListener("submit", (e) => {
    console.log("yes !");
    e.preventDefaul();
    if (cgv.checked) {
        document.querySelector("form > div").innerHTML = '<h3>Pseudo : ${pseudo}</h3>
        <h4>Language préféré : ${language}</h4>';

        
        
         
        
        //affiche le contenu des variables
    } else {
    alert('Veuillez accepter les CGV')
    }
});