import { Librairie } from "./lib.js";
/**
 * main function to animation on scroll and dark and kight mode 
 */
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
/**
 *  function to change size of caractere
 * @param {HTMLElement} btnSize 
 * @param {HTMLElement} btnMark 
 */
export function commandSize(btnSize,btnMark){
    // let btnSize=document.querySelector('.size')
    btnSize.addEventListener('click',()=>{
        btnSize.classList.toggle('show-item')
    })
    // let btnMark=document.querySelector('.marque')
    btnMark.addEventListener('click',()=>{
        btnMark.classList.toggle('show-item')
    })
}
/**
 * fuction show user info into poopop
 */
export function userToken(){
    const btnConnect=document.querySelector('.userConnect .ronder');
    const cancelBtn=document.querySelector('.user img')
    const tokenNumber=document.querySelector('.token-number')
    // creating button to show user info
    btnConnect.addEventListener('click',()=>{
        btnConnect.classList.add('showUser')
    })
    // creting btn to remove poppop
    cancelBtn.addEventListener('click',()=>{
        btnConnect.classList.remove('showUser')
    })

    let number=['0','1','2','3','4','5','6','7','8','9']
    let letter=['A','B','C','D','E','F','G','H','I','H','J','K','L','M','N','O','P','Q','R','S','U','V','W','X','Y','Z']
    let caract=['@','#','~','%','&','*','!','$']
    let token=[]
    console.log(token)
    for (let i = 0; i < 2; i++) {
        token.push(getChar(number.length,number))    
        token.push(getChar(letter.length,letter))
        token.push(getChar(caract.length,caract))       
    }
    tokenNumber.innerHTML=token.join('')
}

function getChar(lenght,composant){
    const element=Math.floor(Math.random()*lenght)
    return composant[element];
}

function compteur(){
    
}
