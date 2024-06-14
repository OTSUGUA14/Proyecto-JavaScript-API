const comments =async (id,ver) => {
    document.querySelector(`.añadir${id}`).innerHTML=""
    const res = await fetch(`https://dummyjson.com/comments/post/${id}`)
    //{}desestructura el objeto JSON resultante para extraer la propiedad comments.
    const {comments} = await res.json()

    if (ver){
        if (comments.length==0) {
            var newText = document.createElement("p");
            newText.innerHTML ="No hay comentarios"
                
                var parentElement = document.querySelector(`.añadir${id}`);
                newText.classList.add('coo1')
                if (parentElement) { // Verificar que el elemento existe
                    parentElement.classList.remove('ocultar');
                    parentElement.classList.add('text');
                    parentElement.appendChild(newText);
                } else {
                    console.error(`Elemento con la clase 'añadir${id}' no encontrado.`);
                }
        }else{

           

            comments.forEach(co => {

                var newFrom = document.createElement("p");
                newFrom.innerHTML=`@${co.user.username}: `
                newFrom.classList.add('username');
                
                var newText = document.createElement("p");

                newText.innerHTML = `${co.body}<br>`; // Usar innerHTML para interpretar <br>
        
                newText.classList.add('coo1')
                newText.classList.add('text');
                
                var parentElement = document.querySelector(`.añadir${id}`);
                
                if (parentElement) { // Verificar que el elemento existe
                    parentElement.classList.remove('ocultar');
                   
                    parentElement.appendChild(newFrom);
                    parentElement.appendChild(newText);
                } else {
                    console.error(`Elemento con la clase 'añadir${id}' no encontrado.`);
                }
            });
        }
    }else{
        document.querySelector(`.añadir${id}`).classList.add('ocultar')
    }
   
}
    const likess=(id,valor)=>{

        var lii = document.querySelector(`#like${id}`);
        
        let valorActual = parseInt(lii.textContent, 10);
        if (valor){
            // Obtiene el valor actual del contador y lo convierte a número
            valorActual++;
        
        }else{
            valorActual--;
        }
        lii.textContent=valorActual;
    
    }


export const getAllPost = async () => {
  document.querySelector('#posts').innerHTML = "";
  
  try {
      const res = await fetch('https://dummyjson.com/posts?limit=9');
      const { posts } = await res.json();
   
    //está generando un array de promesas 
      const postElements = posts.map(async post => {
         
          const res = await fetch(`https://dummyjson.com/users/filter?key=id&value=${post.userId}`);
          const { users } = await res.json();
          const re = await fetch(`https://dummyjson.com/comments/post/${post.id}`)
            const {comments} = await re.json()
          return `
              <div class="card2">
                  <div class="body">
                      <p class="text">${post.body}</p><span class="username">from: ${users[0].username}</span>
                      <div class="footer">
                          <div>
                              <div class="co" data-id=${post.id}>
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                      <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                                      <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
                                      <g id="SVGRepo_iconCarrier">
                                          <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" d="M16 10H16.01M12 10H12.01M8 10H8.01M3 10C3 4.64706 5.11765 3 12 3C18.8824 3 21 4.64706 21 10C21 15.3529 18.8824 17 12 17C11.6592 17 11.3301 16.996 11.0124 16.9876L7 21V16.4939C4.0328 15.6692 3 13.7383 3 10Z"></path>
                                      </g>
                                  </svg>${comments.length}
                              </div>
                              <div>
                                  <label class="container lik"  data-id=${post.id}>
    '                                             <input type="checkbox">
                                        <svg id="Glyph" version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M29.845,17.099l-2.489,8.725C26.989,27.105,25.804,28,24.473,28H11c-0.553,0-1-0.448-1-1V13  c0-0.215,0.069-0.425,0.198-0.597l5.392-7.24C16.188,4.414,17.05,4,17.974,4C19.643,4,21,5.357,21,7.026V12h5.002  c1.265,0,2.427,0.579,3.188,1.589C29.954,14.601,30.192,15.88,29.845,17.099z" id="XMLID_254_"></path><path d="M7,12H3c-0.553,0-1,0.448-1,1v14c0,0.552,0.447,1,1,1h4c0.553,0,1-0.448,1-1V13C8,12.448,7.553,12,7,12z   M5,25.5c-0.828,0-1.5-0.672-1.5-1.5c0-0.828,0.672-1.5,1.5-1.5c0.828,0,1.5,0.672,1.5,1.5C6.5,24.828,5.828,25.5,5,25.5z" id="XMLID_256_"></path></svg>
                                        </label><p id="like${post.id}">${post.reactions.likes}'</p>
                              </div>
                              <div>
                                <label class="container dis" data-id=${post.id}>
                                    <input type="checkbox">
                                    <svg id="Glyph" version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M2.156,14.901l2.489-8.725C5.012,4.895,6.197,4,7.528,4h13.473C21.554,4,22,4.448,22,5v14  c0,0.215-0.068,0.425-0.197,0.597l-5.392,7.24C15.813,27.586,14.951,28,14.027,28c-1.669,0-3.026-1.357-3.026-3.026V20H5.999  c-1.265,0-2.427-0.579-3.188-1.589C2.047,17.399,1.809,16.12,2.156,14.901z" id="XMLID_259_"></path><path d="M25.001,20h4C29.554,20,30,19.552,30,19V5c0-0.552-0.446-1-0.999-1h-4c-0.553,0-1,0.448-1,1v14  C24.001,19.552,24.448,20,25.001,20z M27.001,6.5c0.828,0,1.5,0.672,1.5,1.5c0,0.828-0.672,1.5-1.5,1.5c-0.828,0-1.5-0.672-1.5-1.5  C25.501,7.172,26.173,6.5,27.001,6.5z" id="XMLID_260_"></path></svg>
                                    </label><p id="dislike${post.id}">${post.reactions.dislikes}'</p>
                              </div>
                          </div>
                          <div class="viewer">
                              <span>
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                      <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                                      <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
                                      <g id="SVGRepo_iconCarrier">
                                          <path stroke-width="2" stroke="#ffffff" d="M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8Z"></path>
                                          <path stroke-linecap="round" stroke-width="2" stroke="#ffffff" d="M3 21C3.95728 17.9237 6.41998 17 12 17C17.58 17 20.0427 17.9237 21 21"></path>
                                      </g>
                                  </svg>
                              </span>
                              <span>
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                      <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                                      <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
                                      <g id="SVGRepo_iconCarrier">
                                          <path stroke-width="2" stroke="#ffffff" d="M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8Z"></path>
                                          <path stroke-linecap="round" stroke-width="2" stroke="#ffffff" d="M3 21C3.95728 17.9237 6.41998 17 12 17C17.58 17 20.0427 17.9237 21 21"></path>
                                      </g>
                                  </svg>
                              </span>
                              <span>
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                      <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                                      <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
                                      <g id="SVGRepo_iconCarrier">
                                          <path stroke-width="2" stroke="#ffffff" d="M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8Z"></path>
                                          <path stroke-linecap="round" stroke-width="2" stroke="#ffffff" d="M3 21C3.95728 17.9237 6.41998 17 12 17C17.58 17 20.0427 17.9237 21 21"></path>
                                      </g>
                                  </svg>
                              </span>
                              <span>+20</span>
                              
                          </div>
                          
                      </div>
                      
                  </div>
                  <p class="añadir${post.id}" ></p>
            
              </div>
              
          `;
      });
      //La función Promise.all toma un array de promesas y devuelve una nueva promesa 
      //Se resuelve cuando todas las promesas del array han sido resueltas.
      //Se rechaza si alguna de las promesas del array se rechaza.
      const postElementsHTML = await Promise.all(postElements);
      //Una vez que postElementsHTML contiene todas las plantillas HTML generadas,
      // se utiliza join('') para combinar estas cadenas en una sola cadena de HTML. 
      //Luego, esta cadena combinada se inserta en el contenedor #posts.
      document.querySelector('#posts').innerHTML = postElementsHTML.join('');

  
      const coment = document.querySelectorAll('.co');
    
      const dislike=document.querySelectorAll('.dis')
   
    coment.forEach(coo => {
        var ver=true
          coo.addEventListener('click', () => {
            if (ver){
                comments(coo.dataset.id,ver)
                ver=false
                
            }else{
                //optener el valor del id
                comments(coo.dataset.id,ver)
                    ver=true 
            }
          });
      });
      const like=document.querySelectorAll('.lik')
  
      like.forEach(li =>{
       
        let isLiked = false;
 
         li.addEventListener('click', (e) => {
             e.stopPropagation();
             isLiked = !isLiked;
        
           likess(li.dataset.id,isLiked)
       }, { once: true});
       });
      
//   dislike.addEventListener('click', () => {
//   });
  } catch (e) {
      console.error(e);
  }
};
