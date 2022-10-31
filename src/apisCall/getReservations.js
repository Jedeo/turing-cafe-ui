const getReservations = async() => {
    const resp = await fetch("http://localhost:3001/api/v1/reservations")
    try{
        if(resp.status <= 200){
            const reservations = await resp.json()
            return await reservations
        }
        
    }catch(err){

    }

}

export default getReservations;