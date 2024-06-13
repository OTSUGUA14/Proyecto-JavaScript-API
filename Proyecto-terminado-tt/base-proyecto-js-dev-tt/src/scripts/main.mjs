import { getAllUsers } from "./users/getUsers.mjs";
import { addUser } from "./users/addUser.mjs";
import { getAllPost } from "./posts/getAllPost.mjs";
import { logInUser } from "./users/logIn.mjs";
import { getAllProducts } from "./productos/getAllProducts.mjs";
import { vali } from "./registro/valiRegistro.mjs";
import { valueRegex } from "./registro/valiRegistro.mjs";
import { getAllReciper } from "./recetas/getAllReciper.mjs";
import { getAllUser } from "./users/getAllUser.mjs";

window.onload = () => {
    getAllUsers();
    vali();
} 



const $ = selector => document.querySelector(selector)

// ____FORM______ 
const $btnFormRegistro = $('.registro')
const $btnFormInicio = $('.inicio')
const $Registrar = $('#btn-registro')
const $btnLogIn = $('#btn-login')

// _______FORM REGISTRO INPUT_________
const $nombre = $('#nombre')
const $apellido = $('#apellido')
const $usuario = $('#usuario')
const $password = $('#password')

// _______FORM LOGIN INPUT_________
const $logInUser = $('#login-user')
const $logInPassword = $('#login-password')

// _______SELECTOR HOME  = YA INICIADO_________
const $home = $(".r-s")
const $sectionHome = $("#sect-home")

// ______NAV_________ 
const $btnRegistrarse = $('#registrarse')
const $btnIniciar = $('#iniciar-sesion')
const $btnPosts = $('#show-posts')
const $btnReceta = $('#show-recetas')
const $btnProducto = $('#show-products')
const $btnUser = $('#show-users')
const $btnCerrarSesion = $('#cerrar-sesion')


// ______CONTENEDOREs_________ 
const $conterPro=$('#products')
const $conterRece=$('#recetas')
const $conterUser=$('#users')
const $conterPost=$('#posts')



// Manje nuestro estado de LOGIN.

if(!localStorage.getItem('stateLogin')){
    localStorage.setItem('stateLogin', JSON.stringify({
            state: false,
            user:{
                firstName : "",
                lastName : "",
                username:"",
                email:"",
                image:"",
                cart: []
            }
    }))
}else{
    console.log("Ya está creado el stateLogin");
}



export let logInState = JSON.parse(localStorage.getItem('stateLogin'))

if(logInState.state){
    $btnFormInicio.classList.add('ocultar')
        $home.classList.remove('ocultar')
        $btnReceta.classList.remove('ocultar')
        $btnProducto.classList.remove('ocultar')
        $btnUser.classList.remove('ocultar')
        $btnCerrarSesion.classList.remove('ocultar')
        $btnRegistrarse.classList.add('ocultar')
        $btnIniciar.classList.add('ocultar')
        $btnPosts.classList.remove('ocultar')
        $sectionHome.classList.remove('ocultar')

        $sectionHome.innerHTML = `
        <img src=${logInState.user.image} alt="">
		<h1>Bienvenido <span id="home-name-user">${logInState.user.firstName}</span></h1>
        `
}

// ____________EVENTOS__________________

// _________ BTN NAV - SECCION REGISTRO __________

$btnRegistrarse.addEventListener('click', () =>{
    $btnFormRegistro.classList.remove('ocultar')
    $btnFormInicio.classList.add('ocultar')
    
})

// _________ BTN NAV - SECCION INICIO __________

$btnIniciar.addEventListener('click', () =>{

    $btnFormRegistro.classList.add('ocultar')
    $btnFormInicio.classList.remove('ocultar')

})


// ________ REGISTRAR UN USUARIO ______________
$Registrar.addEventListener('click', (e) => {
    e.preventDefault();
    if(valueRegex.nombre && valueRegex.apellido && valueRegex.edad && valueRegex.usuario && valueRegex.password && valueRegex.repetir && valueRegex.email){
        addUser($nombre.value, $apellido.value, $usuario.value, $password.value)
        alert('El registro fue exitoso')
        $nombre.value = ""
        $apellido.value = ""
        $usuario.value = ""
        $password.value = ""
        $btnFormRegistro.classList.add('ocultar')
        $btnFormInicio.classList.remove('ocultar')
    }
})
// __________ Mostrar USUARIOS__________

$btnUser.addEventListener('click',()=>{
   
    getAllUser();
    $conterPost.classList.add("ocultar")
    $conterPro.classList.add("ocultar")
    $conterRece.classList.add("ocultar")
    $conterUser.classList.remove("ocultar")

})
// __________ MOSTRAR TODOS LAS RECETAS __________
$btnReceta.addEventListener('click', ()=>{
   
    getAllReciper();
    $conterPost.classList.add("ocultar")
    $conterPro.classList.add("ocultar")
    $conterRece.classList.remove("ocultar")
    $conterUser.classList.add("ocultar")
})

// __________ MOSTRAR TODOS LOS POST DE DUMMYJSON __________

$btnPosts.addEventListener('click', () => {
    getAllPost();
   
   
    $conterPost.classList.remove("ocultar")
    $conterPro.classList.add("ocultar")
    $conterRece.classList.add("ocultar")
    $conterUser .classList.add("ocultar")
    
})
// __________ COMENTARIO DE  POST __________
// $conterComent.addEventListener('click',() =>{
//     console.log("xd")
// })

// ______________ Evento Productos ________________________
$btnProducto.addEventListener('click', () => {
    
    getAllProducts()
    $conterPost.classList.add("ocultar")
    $conterPro.classList.remove("ocultar")
    $conterRece.classList.add("ocultar")
    $conterUser .classList.add("ocultar")
    
})

// ___________ FORM LOGIN __________ ( OBTENEMOS LOS DATOS PASADOS POR LOGIN Y COMPARAMOS)

$btnLogIn.addEventListener('click', (e) => {
    e.preventDefault();
    let resLogIn = logInUser($logInUser.value, $logInPassword.value)
    if(resLogIn){
        $btnFormInicio.classList.add('ocultar')
        $home.classList.remove('ocultar')
        $btnReceta.classList.remove('ocultar')
        $btnProducto.classList.remove('ocultar')
        $btnUser.classList.remove('ocultar')
        $btnCerrarSesion.classList.remove('ocultar')
        $btnRegistrarse.classList.add('ocultar')
        $btnIniciar.classList.add('ocultar')
        $sectionHome.classList.remove('ocultar')
        $btnPosts.classList.remove('ocultar')

        $sectionHome.innerHTML = `
        <img src=${logInState.user.image} alt="">
		<h1>Bienvenido <span id="home-name-user">${logInState.user.firstName}</span></h1>
        `

        $logInPassword.value = ""
        $logInUser.value = ""
    }else{
        alert('Contraseña/Usuario incorrecta')
    }
    
})

// __________ CERRAR SESION ______ (RESETEAMOS LOGINSTATE)

$btnCerrarSesion.addEventListener('click', () => {
    $btnFormInicio.classList.remove('ocultar')
        $home.classList.add('ocultar')
        $btnReceta.classList.add('ocultar')
        $btnProducto.classList.add('ocultar')
        $btnUser.classList.add('ocultar')
        $btnCerrarSesion.classList.add('ocultar')
        $btnRegistrarse.classList.remove('ocultar')
        $btnIniciar.classList.remove('ocultar')
        $sectionHome.classList.add('ocultar')
        $btnPosts.classList.add('ocultar')
        handleLogInState()

        console.log(logInState);
})





// _____________ FUNCION PARA GUARDAR DATOS DE USUARIO QUE INICIO SESION _________
export const handleLogInState = (firstName = "", lastName = "", username = "", email = "", image = "", state = false) => {
    logInState.state = state
    logInState.user.firstName = firstName
    logInState.user.lastName = lastName
    logInState.user.username = username
    logInState.user.email = email
    logInState.user.image = image
    localStorage.setItem('stateLogin', JSON.stringify(logInState))
}


