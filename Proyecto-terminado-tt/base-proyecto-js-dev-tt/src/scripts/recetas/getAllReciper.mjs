const instru = async (id, ver) => {
    const res = await fetch(`https://dummyjson.com/recipes/${id}`);
    const { ingredients, instructions } = await res.json();
    const container = document.querySelector(`#inst${id}`);
    container.innerHTML = "";

    if (ver) {
        let inContent = document.createElement("p");
        inContent.innerHTML = "Ingredientes:<br>";
        ingredients.forEach(ingre => {
            inContent.innerHTML += `${ingre}<br>`;
        });
        inContent.classList.add('instrucciones');
        container.appendChild(inContent);

        let agre = document.createElement("p");
        agre.innerHTML += `INTRUCCIONES:<br>`;
        instructions.forEach(intro => {
            agre.innerHTML += `${intro}<br>`;
        });
        agre.classList.add('instrucciones');
        container.appendChild(agre);

        container.classList.remove('ocultar');
        document.querySelector(`.info${id}`).classList.add('ocultar');
    } else {
        container.classList.add('ocultar');
        document.querySelector(`.info${id}`).classList.remove('ocultar');
    }
}

export const getAllReciper = async () => {
    document.querySelector('#recetas').innerHTML = "";
    try {
        const res = await fetch('https://dummyjson.com/recipes');
        const { recipes } = await res.json();

        recipes.forEach(receta => {
            document.querySelector('#recetas').innerHTML += `
                <div class="card">
                    <div class="content">
                        <div class="back">
                            <div class="back-content">
                                <img src="${receta.image}" height="80%" width="80%">
                                <strong>Pasame por encima</strong>
                            </div>
                        </div>
                        <div class="front">
                            <div class="img">
                                <div class="circle"></div>
                                <div class="circle" id="right"></div>
                                <div class="circle" id="bottom"></div>
                            </div>
                            <div class="front-content">
                                <small class="badge">${receta.cuisine}</small>
                                <div class="description">
                                    <div class="title">
                                        <p class="title">
                                            <strong>${receta.name}</strong>
                                        </p>
                                        <button class="Button" data-id=${receta.id}>Instrucciones</button>
                                    </div>
                                    <p class="card-footer info${receta.id}">
                                        ${receta.prepTimeMinutes} Mins preparar <br>${receta.cookTimeMinutes} Mins de Cocción
                                    </p>
                                    <p id="inst${receta.id}" class="dynamic-content"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
        });

        const buttons = document.querySelectorAll('.Button');
        buttons.forEach(button => {
            let ver = true;
            button.addEventListener('click', () => {
                instru(button.dataset.id, ver);
                ver = !ver;
            });
        });
    } catch (e) {
        console.error(e);
    }
}
