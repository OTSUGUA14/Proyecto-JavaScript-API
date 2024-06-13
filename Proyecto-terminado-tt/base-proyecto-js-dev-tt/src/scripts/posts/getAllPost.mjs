const comments =async (id,ver) => {
    document.querySelector(`.añadir${id}`).innerHTML=""
    const res = await fetch(`https://dummyjson.com/comments/post/${id}`)
    //{}desestructura el objeto JSON resultante para extraer la propiedad comments.
    const {comments} = await res.json()

    if (ver){
        if (comments.length==0) {
                console.log(" asdd");
                document.querySelector(`.añadir${id}`).classList.remove('ocultar')
                document.querySelector(`.añadir${id}`).innerHTML+="no hay comentarios"
        }else{

            comments.forEach( co =>{
                console.log(co);
                    document.querySelector(`.añadir${id}`).classList.remove('ocultar')
                    document.querySelector(`.añadir${id}`).innerHTML+=`${co.body}<br>`
                
             
            })
        }
    }else{
        document.querySelector(`.añadir${id}`).classList.add('ocultar')
    }
   
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
                                  </svg>18
                              </div>
                              <div>
                                  <svg fill="#000000" xmlns:xlink="http://www.w3.org/2000/xlink" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-2.5 0 32 32">
                                      <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                                      <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
                                      <g id="SVGRepo_iconCarrier">
                                          <g id="icomoon-ignore"></g>
                                          <path fill="#000000" d="M0 10.284l0.505 0.36c0.089 0.064 0.92 0.621 2.604 0.621 0.27 0 0.55-0.015 0.836-0.044 3.752 4.346 6.411 7.472 7.060 8.299-1.227 2.735-1.42 5.808-0.537 8.686l0.256 0.834 7.63-7.631 8.309 8.309 0.742-0.742-8.309-8.309 7.631-7.631-0.834-0.255c-2.829-0.868-5.986-0.672-8.686 0.537-0.825-0.648-3.942-3.3-8.28-7.044 0.11-0.669 0.23-2.183-0.575-3.441l-0.352-0.549-8.001 8.001zM1.729 10.039l6.032-6.033c0.385 1.122 0.090 2.319 0.086 2.334l-0.080 0.314 0.245 0.214c7.409 6.398 8.631 7.39 8.992 7.546l-0.002 0.006 0.195 0.058 0.185-0.087c2.257-1.079 4.903-1.378 7.343-0.836l-13.482 13.481c-0.55-2.47-0.262-5.045 0.837-7.342l0.104-0.218-0.098-0.221-0.031 0.013c-0.322-0.632-1.831-2.38-7.498-8.944l-0.185-0.215-0.282 0.038c-0.338 0.045-0.668 0.069-0.981 0.069-0.595 0-1.053-0.083-1.38-0.176z"></path>
                                      </g>
                                  </svg>7
                              </div>
                              <div>
                                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                      <g id="SVGRepo_iconCarrier">
                                          <path opacity="0.1" d="M21 6C21 7.65685 19.6569 9 18 9C16.3431 9 15 7.65685 15 6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6Z" fill="#323232"></path>
                                          <path opacity="0.1" d="M21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18Z" fill="#323232"></path>
                                          <path opacity="0.1" d="M9 12C9 13.6569 7.65685 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12Z" fill="#323232"></path>
                                          <path d="M21 6C21 7.65685 19.6569 9 18 9C16.3431 9 15 7.65685 15 6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6Z" stroke-width="2"></path>
                                          <path d="M21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18Z" stroke-width="2"></path>
                                          <path d="M9 12C9 13.6569 7.65685 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12Z" stroke-width="2"></path>
                                          <path d="M8.7207 10.6397L15.0001 7.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                          <path d="M8.70605 13.353L15 16.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                      </g>
                                  </svg>2
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
                  <p class="añadir${post.id} text" ></p>
            
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
        var ver=true
        coment.forEach(coo => {
           
          coo.addEventListener('click', () => {
            if (ver){
               
                comments(coo.dataset.id,ver)
                ver=false
                console.log(ver);
            }else{

                //optener el valor del id
                comments(coo.dataset.id,ver)
                    ver=true
                    console.log(ver);
            }
                
            
          });
      });

  } catch (e) {
      console.error(e);
  }
};
