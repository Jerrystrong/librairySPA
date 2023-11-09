import { validationForm } from "./form.js";
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
    compteur()
}

function getChar(lenght,composant){
    const element=Math.floor(Math.random()*lenght)
    return composant[element];
}

function compteur(){
    menuOpen()
    // let win=window
    // window.addEventListener('scroll',(e)=>{
    //         console.log(e)
    //         // e.preventDefault
    //         // e.cancelable()
    // })
    let compteur=document.querySelector('.compteur')
    // alert sign 
    let alert=document.querySelector('.userConnect .ronder div')
    let finalMinute=5
    let fullSecond=finalMinute*60 //equal time in second
    /**
     * the function update compteur to decrement variable fullSecond
     * and update HTML with new values
     * @returns INTEGERVARIABLE
     */
    function updateTime(){
        let munite=Math.floor(fullSecond/60)
        let second=Math.floor(fullSecond%60)
        //changer differentes ecriture 2digit and 1digit
        munite=munite<10?`0${munite}`:munite
        second=second<10?`0${second}`:second
        //update the html
        compteur.innerText=`${munite}:${second}`

        return fullSecond--

    }
    let timer=setInterval(()=>{
        
    //premuim account annnonce
    const callToAction=document.getElementById('premuim')
        updateTime()
        fullSecond=fullSecond<0?0:fullSecond--
    
        // vrai(callToAction)
         if (fullSecond==60) {
            alert.classList.add('red')
            alert.classList.remove('active')
           
        } 
        else if(fullSecond==1){
                callToAction.classList.add('desable')
                callToAction.classList.remove('none')
                // remettre le sroll à zero
                window.scrollTo(0,0)
                // arreter le chargement de la page
                window.addEventListener('beforeunload',(e)=>{
                    e.preventDefault()
                    // e.returnValue('')
                })
                // document.body.scrollTop=10
                // disparition scroll
                document.body.style.overflow='hidden'
                document.querySelectorAll('p').forEach(p=>{
                    p.style.color='#ffffff'
                })
        }
        //end to interval
        else if(fullSecond<=-1){
            if(validationForm){
                callToAction.classList.add('none')
                callToAction.classList.remove('desable')
                document.body.style.overflow='auto'
                document.querySelectorAll('p').forEach(p=>{
                    p.style.color='#000000'
                })
            }
            else{
                callToAction.classList.add('desable')
                callToAction.classList.remove('none')
                document.body.style.overflow='hidden'
                document.querySelectorAll('p').forEach(p=>{
                    p.style.color='#ffffff'
                })
            }
            clearInterval(timer)
        }
        

    },1000)
}

export function menuOpen(){
    let btnMenu=document.querySelector('.nav-open-icon')
    let navItem=document.querySelector('.nav-bar ul')
    let seachBar=document.querySelector('.search')
    let modeItem=document.querySelector('.mode')

    btnMenu.addEventListener('click',()=>{
        navItem.classList.toggle('nav-item-show')
        seachBar.classList.toggle('nav-search-show')
        modeItem.classList.toggle('nav-mode-show')
    })
}
export function recherche(){
    var listOfBooks=['power of positif thinking','the one thing','the secret of succes']
    let inputText=document.querySelector('#search input');
    let resultplace=document.querySelector('.resultPlace')
    var sub=0
    var val='';
    let valeur=document.createElement('small')
    let valRecherche=document.createElement('small')
    // let suggest=document.createElement('small')
    var searchBook=[]
    var filterSearch=[]
    inputText.addEventListener('input',function (e){
        val=e.currentTarget.value.trim()
        valeur.innerText=val
        //research of result to list of books
        for (let book of listOfBooks){
            if(book.startsWith(val) || book==val){
                searchBook.push(book)
                // valRecherche.textContent='"'+searchBook.join(',')+'"' ->je prefere mettre le text un peu plus bas avec le filtre de resultat
                for (const i of searchBook) {
                    
                    let looop=filterSearch.find((element)=> element==i)
                    // console.log(looop)
                    if(looop == undefined){
                        filterSearch.push(i)
                    }
                    else{
                        filterSearch=filterSearch
                    }
                }

            }
            
        }
        for (const book of filterSearch) {
            let suggest=createlement('small',{
                class:'suggest'
            })
            let like=createlement('img',{
                src:'asset/svg/heart.svg',
                class:'like'
            })
            suggest.textContent=book
            resultplace.append(suggest)
            suggest.append(like)
        }
        
    })
    // suggest.textContent='jjjj'+filterSearch.join(',')
    
    // resultplace.append(suggest)

    var kk=searchBook.join(',')
    resultplace.append(valeur)
    resultplace.append(valRecherche)
    valeur.style.color='#5f9ea0a8'
    valeur.style.fontSize='9px'
    valeur.style.fontWeight='bold'
}