export const getAllUsers =async () => {
    try{
        //valida si la base local no esta creada
        if(!localStorage.getItem('DBTT')){
            //hagarra todos los usuarios de la api
            const res = await fetch('https://dummyjson.com/users?limit=0')
            const data = await res.json()
            //crea la base local con nombre DBTT
            localStorage.setItem('DBTT', JSON.stringify(data.users))
        }else{
            console.log("La bd ya está creada");
        }
        console.log('Todos los datos cargados!');
    }catch(error){
        console.error(error)
    }
}
