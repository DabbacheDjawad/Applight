const navbar = document.querySelector(".header-nav");
const applightLogo1 = document.querySelector("#applight1")
const applightLogo = document.querySelector(".applight");
const navListItems = document.querySelectorAll("li");
const jsA = document.querySelectorAll(".js-a");
const navbarUL = document.querySelector("#navbar-ul");
const navbarButton = document.querySelector("#responsive-button");
const descriptionContainer = document.querySelector("#description-container");
const videoLoader = document.querySelector("#video-loader");
const sections = document.querySelectorAll("section");
const slideButtonRight = document.querySelector("#test-arrow-right");
const slideButtonLeft = document.querySelector("#test-arrow-left");
const testimonial1 = document.querySelector("#testimonial1");
const testimonial2 = document.querySelector("#testimonial2");
const testimonial3 = document.querySelector("#testimonial3");


function refreshPage(){
    location.reload();
    window.scrollTo(0,0);
}

function navbarScroll(){
    document.addEventListener("scroll" , ()=>{

        if(window.scrollY > 0){
                   navbar.style.backgroundColor = "white";
        navbar.style.boxShadow = "2px 2px 2px #eee";
        applightLogo.style.display = "none";
        applightLogo1.style.display = "block";
        applightLogo1.style.marginBottom = "1vw";

        /*event listener for the navbar items to be black when scroled and hovered*/
    
                jsA.forEach(a =>{
                    a.style.color = "black";
            })

            /*for applying hover effect on navbar list items*/ 
            jsA.forEach(a =>{
                           a.addEventListener("mouseover" , (event)=>{
                            event.target.style.color="var(--lightPurple)";
                    })
            })

            jsA.forEach(a => {
                    a.addEventListener("mouseout" , (event)=>{
                        event.target.style.color = "black"; 
                    })
            })
          
        }     
        
        else{
            jsA.forEach(a =>{
                a.style.color="white";
            })
            navbar.style.backgroundColor = "var(--verydarkPurple)";
            navbar.style.boxShadow = "none";


            jsA.forEach(a =>{
                a.addEventListener("mouseover" , (event)=>{
                 event.target.style.color="var(--veryDarkPurple)";
         })
 })

 jsA.forEach(a => {
    a.addEventListener("mouseout" , (event)=>{
        event.target.style.color = "white"; 
    })
})
        }   
 

    })
}



function slideShow(){
    const testimonials = [testimonial1 , testimonial2 , testimonial3];
    let counter = 0;
    
    slideButtonRight.addEventListener("click" , ()=>{

        if(testimonials[counter].classList.value == "testimonial-not-hidden"){
            testimonials[counter].classList.remove("testimonial-not-hidden");
            testimonials[counter].classList.add("testimonial-hidden");
            
counter++
if(counter>2){
    counter = 0;
}
            testimonials[counter].classList.remove("testimonial-not-hidden");
            testimonials[counter].classList.remove("testimonial-hidden");
            testimonials[counter].classList.add("testimonial-not-hidden");
        }
        
    })


    slideButtonLeft.addEventListener("click" , ()=>{

        if(testimonials[counter].classList.value == "testimonial-not-hidden"){
   
         testimonials[counter].classList.remove("testimonial-not-hidden");
            testimonials[counter].classList.add("testimonial-hidden");

if(counter<1){
    counter = 3;
}
counter--;
            testimonials[counter].classList.remove("testimonial-not-hidden");
            testimonials[counter].classList.remove("testimonial-hidden");
            testimonials[counter].classList.add("testimonial-not-hidden");
        }

        
    })

}




function navbarClick(){
    navbarButton.addEventListener("click" , ()=>{
        navbarUL.style.display = "block";
    })
}

function loadVideo(){
    videoLoader.style.display = "block";
    videoLoader.classList.add("video-js");
    document.onclick = deload;
    
}

function deload(){
    document.addEventListener("click" , ()=>{
        if(videoLoader.style.display == "block"){
            videoLoader.style.display = "none";
        }
    })
}

function scrollTransition(scrollIndex){
    
        jsA.forEach(a =>{
            jsA.addEventListener("click" ,()=>{
                if(scrollIndex == jsA.indexOf(a)){
                    /*some code*/
                }else{
                    /*some code*/
                }
        })
    })
}



/*scroll raveal effect*/
ScrollReveal({
    reset : true,
    distance:"60px",
    duration:1000
});

ScrollReveal().reveal('.abt');
ScrollReveal().reveal('.Features-image',{distance:'100px'});
ScrollReveal().reveal('.features i');
ScrollReveal().reveal('.team-member' , {duration:1000 , origin:'bottom'});
ScrollReveal().reveal('.FAQ-questions');
ScrollReveal().reveal('.download-btns');
ScrollReveal().reveal('.download-buttons' , {delay:"500" , distance:"100px"});



/*600    1700    2500    2950    3600     4500*/ 

navbarClick();
navbarScroll();
slideShow();
