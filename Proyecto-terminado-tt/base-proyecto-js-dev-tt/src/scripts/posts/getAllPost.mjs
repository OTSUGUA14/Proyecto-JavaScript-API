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
      document.querySelector('#arrow').innerHTML=`
      
<button class="cta2">
  <span class="span2">NEXT</span>
  <span class="second2">
    <svg
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 66 43"
      height="20px"
      width="50px"
    >
      <g
        fill-rule="evenodd"
        fill="none"
        stroke-width="1"
        stroke="none"
        id="arrow2"
      >
        <path
          fill="#FFFFFF"
          d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
          class="one2"
        ></path>
        <path
          fill="#FFFFFF"
          d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
          class="two2"
        ></path>
        <path
          fill="#FFFFFF"
          d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
          class="three2"
        ></path>
      </g>
    </svg>
  </span>
</button>
<button class="cta">
  <span class="span">NEXT</span>
  <span class="second">
    <svg
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 66 43"
      height="20px"
      width="50px"
    >
      <g
        fill-rule="evenodd"
        fill="none"
        stroke-width="1"
        stroke="none"
        id="arrow"
      >
        <path
          fill="#FFFFFF"
          d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
          class="one"
        ></path>
        <path
          fill="#FFFFFF"
          d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
          class="two"
        ></path>
        <path
          fill="#FFFFFF"
          d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
          class="three"
        ></path>
      </g>
    </svg>
  </span>
</button>

      `
      
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
