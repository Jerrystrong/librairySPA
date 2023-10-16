import { Librairie } from "./lib.js";

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
export function createlement(tagName,attr={}){
    const element=document.createElement(tagName)
    for (const [attribut,value] of Object.entries(attr)) {
        element.setAttribute(attribut,value)
    }
    return element;
}