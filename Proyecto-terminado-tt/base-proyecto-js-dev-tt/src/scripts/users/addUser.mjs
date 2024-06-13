const addUser = async (firstName, lastName, username, password, image = "https://cdn-icons-png.freepik.com/256/149/149071.png?semt=ais_hybrid") => {
    //agarrra la api
    const postUser =await fetch('https://dummyjson.com/user/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        //elegi los elementos a agregar
        body: JSON.stringify({
          firstName,
          lastName,
          username,
          password,
          image
        })
      })
      //trae todos los elemntos de la base
    const users = JSON.parse(localStorage.getItem('DBTT')) 
      //guarda los datos en una constante
    const user = await postUser.json();
    //agrega el usuario 
    users.push(user)
    localStorage.setItem('DBTT', JSON.stringify(users))
}

export{
    addUser
}
