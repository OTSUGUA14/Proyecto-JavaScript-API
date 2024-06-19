
const instru =async (id,ver)=>{
    const res=await fetch(`https://dummyjson.com/recipes/${id}`)
    const  {ingredients,instructions}  = await res.json();
    document.querySelector(`#inst${id}`).innerHTML=""
    if (ver){
        ingredients.forEach(ingre => {
            var inContent= document.createElement("p")
            inContent.innerHTML=`ingredientes: ${ingre}<br>`
            
            var inContainer =document.querySelector(`#inst${id}`)
            if (inContainer) {
                inContainer.classList.remove('ocultar')
                inContainer.appendChild(inContent)
            }
        });
    }else{
        document.querySelector(`#inst${id}`).classList.add('ocultar')
       
        }

    }


export const getAllReciper= async()=>{

    document.querySelector('#recetas').innerHTML =""
    try{
        const res=await fetch('https://dummyjson.com/recipes')
        const  {recipes}  = await res.json();
    
    
    
        recipes.forEach (receta=> {
            document.querySelector('#recetas').innerHTML +=`
            <div class="card">
            <div class="content">
            <div class="back">
            <div class="back-content">
                <img src=" ${receta.image}" height="80%" width="80%" >
                
    
                <strong>Hover Me</strong>
            </div>
            </div>
            <div class="front">
            
            <div class="img">
                <div class="circle">
                </div>
                <div class="circle" id="right">
                </div>
                <div class="circle" id="bottom">
                </div>
            </div>
    
            <div class="front-content">
                <small class="badge">${receta.cuisine}</small>
                <div class="description">
                <div class="title">
                    <p class="title">
                    <strong ">${receta.name}</strong>
                    </p>
                    <button class="Button" data-id=${receta.id}>Instrucciones</button>
                   
                </div>
                <p class="card-footer">
                    ${receta.prepTimeMinutes} Mins preparar <br>${receta.cookTimeMinutes} Mins de Cocción
                </p>
                <p id="inst${receta.id}"></p>
                </div>
            </div>
            </div>
        </div>
        </div>
            `
            
        });

        const buto=document.querySelectorAll('.Button')
        buto.forEach(bu =>{
            var ver=true
            bu.addEventListener('click',() =>{
                if (ver){
                     instru (bu.dataset.id,ver)
                    ver=false
                    
                }else{
                    //optener el valor del id
                     instru (bu.dataset.id,ver)
                        ver=true 
                }
            })
        })
    }catch(e) {
        console.error(e)
    }
}