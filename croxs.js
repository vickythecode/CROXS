//slider
var leftbutton=document.getElementById("slider-left-activate")
var rightbutton=document.getElementById("slider-right-activate")
var slidercontainer=document.querySelector(".slider")
var slidermargin=0

rightbutton.addEventListener("click",function(){
slidermargin=slidermargin+100
if(slidermargin>100){
    slidermargin=0
    slidercontainer.style.marginLeft=0
}
else{
    slidercontainer.style.marginLeft="-"+slidermargin+"vw";
}
})


leftbutton.addEventListener("click",function(){
    if(slidermargin==0){
        slidermargin=100
        slidercontainer.style.marginLeft="-"+slidermargin+"vw";
    }
    else{
        slidermargin=slidermargin-100
        slidercontainer.style.marginLeft="-"+slidermargin+"vw";
    }
    })

//offerbar
var popup=document.querySelector(".popup")    
var popupclose=document.getElementById("popupclose")
popupclose.addEventListener("click",function(){
    popup.style.display="none"
})



window.addEventListener("scroll",function(){
    var elements = this.document.querySelectorAll(".initial-scroll-animate")
    elements.forEach((el)=>{
        windowHeight = window.innerHeight
     var elbound = el.getBoundingClientRect()
   

    //  console.log(windowHeight)
    //  console.log(elbound.top)
     if(windowHeight>elbound.top-100){
    el.classList.remove("reveal-scroll-animate")

    }
    
})
    
})

//for like 
var likebuttons=document.querySelectorAll(".like-button")

likebuttons.forEach((btn)=>{
    btn.addEventListener("click",function(e){
        
        
        if(e.target.src.indexOf("blackheart")>0)
        {
            console.log("AOT");
            e.target.src="images/icons/redheart.png"
        }
        else{
            e.target.src="images/icons/blackheart.png"
        }
    })
})

sidenavbar=document.getElementById("side-navbar-activate")
sidenavbaron=document.querySelector(".side-navbar")
sidenavbar.addEventListener('click',function(){
    sidenavbaron.style.marginLeft="0px"
})

sidenavbarof=document.getElementById("side-navbar-close")
sidenavbaroff=document.querySelector(".side-navbar")
sidenavbarof.addEventListener('click',function(){
    sidenavbaroff.style.marginLeft="-300px"
    console.log("closed")
})


