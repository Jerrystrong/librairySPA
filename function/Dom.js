import { Librairie } from "./librairie.js";

export function changeState(){
    let header=document.querySelector("header");
    //scroll animation
    window.addEventListener('scroll',()=>{
        if(scrollY>=20){
            header.classList.add("scrol")
        }
        else if(scrollY<20){
            header.classList.remove("scrol")
        }
    })
    // mode change
    let checkMode=document.querySelector("#BtnMode");
    checkMode.addEventListener('change',(e)=>{
        if(e.currentTarget.checked==true){
            document.body.classList.add('darkMode')
        }
        else{
            document.body.classList.remove('darkMode')
        }
    })
}

// export function syncLib(template){
//     librairie=new Librairie(template)
//     librairie.Append()
// }