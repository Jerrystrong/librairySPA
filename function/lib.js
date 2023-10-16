export class Librairie{
    #book
    /**
     * 
     * @param book {HTMLElement}
     */
    constructor(book){
        this.#book=book  
    }
    
    Append(){
        document.body.append(this.#book)
    }

}

export class Book{
    #element
    constructor(element){
        this.#element=element
    }
    AppendBook(){
        document.body.append(this.#element)
    }
}