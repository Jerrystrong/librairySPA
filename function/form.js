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
    // console.log('hkhk')
    connexionContainer.addEventListener('submit',(e)=>{
        let nom=new FormData(connexionContainer).get('name')
        let password=new FormData(connexionContainer).get('mot-de-passe')
        if(nom=='Jeremie' && password=='password'){
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