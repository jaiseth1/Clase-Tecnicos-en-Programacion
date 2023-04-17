console.log("***--- Asincronia ** ---")
    //Promises 
    //pido el listado de 5mil usuarios
    //mues

    const tareaAsincrona = () => {
        let promise = new promise( (resolve, reject ) => {
            setTimeout(() => {
                console.log("proceso asincrono terminado");
                resolve(); 
            }, 1300)
        })
        return promise;
    }
    tareaAsincrona().then( function() {
        console.log("todo OK")
    });

    console.log("veamos si funciona");