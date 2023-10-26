import { changeState, commandSize, createlement, menuOpen, userToken} from "./function/Dom.js";
import { createAccount } from "./function/form.js";
import { Librairie,Book } from "./function/lib.js";
changeState()

const libFromPage=document.getElementById("lib")
let templateLib=libFromPage.content.cloneNode(true)
const books=templateLib.querySelectorAll('.book')
const textTemp=document.getElementById('temp-desc')
const text=textTemp.content.cloneNode(true)
const paragraph=text.querySelector('p')
const commandeSize=text.querySelector('.size')
const commandeMarque=text.querySelector('.marque')
const size1=commandeSize.querySelectorAll('.cmd div')
let libs=new Librairie(templateLib)
libs.Append() 
for (const book of books) {
    book.addEventListener('click',(e)=>{
        document.querySelector('.heroSection').classList.add('none')
        for (const b of books) {
            b.classList.add('none')
        }
        //recuperation de donnees du book
        const imgBook=e.currentTarget.querySelector('.book-img img').cloneNode(true)
        imgBook.style.width='200px'//style img
        const bookHeader=e.currentTarget.querySelector('.book-title').cloneNode(true)
        const bookDescription=e.currentTarget.querySelector('.book-description').cloneNode(true)
        const textContainer=document.createElement('div')
        textContainer.innerHTML=text
         // creation header pour book
         const headTemp=document.getElementById('book-header');
         let headBook=headTemp.content.cloneNode(true)
         let head=headBook.querySelector('.book-header')
         head.append(bookHeader.cloneNode(true))//<img src="asset/positif.jpg" alt="positif-thinking-img">
         head.append(bookDescription.cloneNode(true))
         document.body.append(headBook)

        const containerBook=createlement('div',{
            class:'container'
        })
        const containerElement=createlement('div',{
            class:'container jf-center'
        })
        const containerElementHorizontal=createlement('div',{
            class:'container jf-column'
        })
        console.log(containerBook)
        containerElementHorizontal.append(bookHeader)
        containerElementHorizontal.append(bookDescription)
        containerElement.append(imgBook)
        containerElement.append(containerElementHorizontal)
        containerBook.append(containerElement)
        containerBook.append(text)

        let bk=new Book(containerBook)
        bk.AppendBook()
    })
}
// commande pour la lecture 

commandSize(commandeSize,commandeMarque)
size1.forEach(sizes => {
    sizes.addEventListener('click',(e)=>{
        let dataget=e.currentTarget.dataset.size
        console.log(dataget)
        // console.log(paragraph)
        switch(dataget){
            case '24':
                paragraph.style.fontSize="24px"
                break

            case '14':
                paragraph.style.fontSize="14px"
                break

            case '16':
                paragraph.style.fontSize="16px"
                break

            case '18':
                paragraph.style.fontSize="18px"
                break

            case '32':
                paragraph.style.fontSize="32px"
                break    
        }
    })
});
// user fomction 
createAccount()
userToken()

//onclick to btn Premuim
let btnPremuim=document.querySelectorAll('.btnBuy')
let singinzone=document.querySelector('#sing-in-place')
btnPremuim.forEach(btn=>{
    btn.addEventListener('click',(e)=>{
        singinzone.classList.add('sing-in-place')
        document.body.style.overflow='hidden'
        e.preventDefault()
      })
      
})
document.addEventListener('keydown',(e)=>{
    console.log(e)
    if(e.ctrlKey==true && e.key=='b'){
        e.preventDefault()
        console.log('raccourcie')
        document.querySelector('#search').classList.toggle('clickSearch')
        document.querySelector('#searchSuggession').classList.toggle('searchSuggession')
    }
})
