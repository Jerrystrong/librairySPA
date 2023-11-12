export function createAccount(){
    let containerAccount=document.querySelector('.create-account')
    let btnAccess=document.querySelector('.createAccount')
    let btnConnect=document.querySelector('.connectAccount')
    let connexionContainer=document.querySelector('.connexion-place')
    btnAccess.addEventListener('click',(e)=>{
        connexionContainer.classList.add('none')
        containerAccount.classList.remove('create-account')
        let p=document.createElement('p')
       p.innerHTML=`<small>Please we are not able to register people, please use this account to connect to the sit name=<span style="font-weight:bold;color:#5f9ea0;">'Jeremie'</span> and password=<span style="font-weight:bold;color:#5f9ea0;">'password'<span></small>`
       containerAccount.append(p) 
        e.preventDefault()
    })
    btnConnect.addEventListener('click',(e)=>{
        connexionContainer.classList.remove('none')
        containerAccount.classList.add('none')
        e.preventDefault()
    })
    
}
export function validationForm(){
    let connexionContainer=document.querySelector('.connexion-place')
    let containerAccount=document.querySelector('.create-account')
    let singinzone=document.querySelector('#sing-in-place')

    // here we'll allow people to see their password
    /**
     * icon eye
     * @typedef seePass HTMLElement
     */
    let seePass=document.querySelector('.form-controle i')
    /**
     * input type password
     * @typedef passField HTMLElement
     */
    let passField=document.querySelector('#mot-de-passe')
    seePass.addEventListener('click',(e)=>{
        let changeTypeToSee=passField.getAttribute('type') == 'password'?'text':'password'
        passField.setAttribute('type',changeTypeToSee)
        e.currentTarget.classList.toggle('fa-eye')
    })
    // console.log('hkhk')
    connexionContainer.addEventListener('submit',(e)=>{
        var formAnnonceName=document.querySelector('#control-nom')
        var nom=new FormData(connexionContainer).get('name')
        let password=new FormData(connexionContainer).get('mot-de-passe')
        // document.body.style.color='#ff0000'
        localStorage.setItem('boom',nom)
        // si l'user valide le form avec le bon nom et mot de passe on change le local storage et puis il prend son tokken
        // if(nom===null){
        //     formAnnonceName.classList.add('control-nom')
        //     formAnnonceName.classList.remove('none')
        //     formAnnonceName.innerText='mettez le contenu  au nom'
        //     singinzone.classList.add('sing-in-place')
        // }
        // else
         if(nom=='Jeremie' || password=='password'){
            let contentStorage=localStorage.getItem('tokken') !==nom?nom:nom
            // localStorage.setItem('tokken',contentStorage)
            const callToAction=document.getElementById('premuim')
            if(localStorage.getItem('tokken') == nom){
                callToAction.classList.add('none')
                callToAction.classList.remove('desable')
                window.scrollTo(0,0)
                localStorage.clear()
                localStorage.setItem('tokken',nom)
            }
            else{
                callToAction.classList.add('desable')
                callToAction.classList.remove('none')
                window.scrollTo(0,0)
            }
            return true
            
        }
        else{
            document.getElementById('premuim').classList.add('deseave')
        }
        // console.log('form envoyez')
        e.preventDefault()
        return false
    })
    containerAccount.addEventListener('submit',(e)=>{
       let p=document.createElement('p')
       p.innerHTML=`<small>Please we are not able to register people,use this account to connect to the sit name=<span style="font-weight:bold;color:#5f9ea0;">'Jeremie'</span> and password=<span style="font-weight:bold;color:#5f9ea0;">'password'<span></small>`
       containerAccount.append(p) 
       e.preventDefault()
    })
}