import { changeState, createlement} from "./function/Dom.js";
import { Librairie,Book } from "./function/lib.js";
changeState()

const libFromPage=document.getElementById("lib")
let templateLib=libFromPage.content.cloneNode(true)
const books=templateLib.querySelectorAll('.book')
const textTemp=document.getElementById('temp-desc')
const text=textTemp.content.cloneNode(true)
console.log(books)

function createBook(e){
    
}
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
        console.log(bookHeader)
       

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
        
        // if (typeof(libs)=={}){
        //      libs=null
        //      libs.Append() 
        // }
        // else{
        //     libs=new Librairie(templateLib)
        // }
        
    })
}