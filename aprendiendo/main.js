
    console.log("Empezando la clase JS");
    //alert("SOY UNA ALERTA");

    //EMACSCRIPT
    //VAR = ! YA NO SE USA ¡
    //LET = LA NUEVA FORMA DE DECLARAR VARIABLES
    //EN JS NO SE DECLARAN TIPOS DE DATOS, EL LOS INTERPRETA
    //interpreta
    //SCOPE:El scope puede definirse como el alcance que una variable tendrá en tu código. 
    //En otras palabras, el scope decide a qué variables tienes acceso en cada parte del código.
    //EJEMPLO: el escope de cada funcion

    var primera = 23;
    let segunda = 47;
    let tres ="hola";
    const estable="no cambio";

    let resultado = primera+segunda;
    console.log(resultado);
    console.log(tres);

    function salir(){
        //scope 2
        let on = true;
        console.log(on);
    }

    salir();
    //console.log(test);
    //console.log(on);
    

    //rest: junta los elementos en un arreglo
    function saludarRest(saludo, ...nombres){
        for( i in nombres){
            console.log(`${saludo} ${nombres[i]}`);
        }
    }
    saludarRest("hola","maria","juan","jose","eduardo");

    //Spread: Esparce los elemetos como si fueran enviados en forma separada
    function saludarSpread(saludo, ...nombres){
        console.log(`${saludo} ${nombres}.`)
    }

    //otro ejemplo de spread 
    let partes =["piernas","brazos"];
    let cuerpo = ["cabeza","cuello",...partes, "pies","cabello"];

    console.log(cuerpo);


    //Clases: es una plantillaa, define las propiedades y metodos de un odjeto.
    //Se pueden reutilizar por medio de istancia.
    //cada clase tiene unas propiedades y metodos 
    //Todas las clases tienen un constructor donde se definen datos iniciales.

    console.log("***---***");
    
    class persona{
        constructor(nombre,edad,sexo){
            this.nombre = nombre;
            this.edad = edad;
            this.sexo = sexo;
        }
        getName(){
            console.log("tu te llamas " +this.nombre)
        }

        getAllInfo(){
            console.log(`tu nombre es ${this.nombre} tienes ${this.edad} años y eres un(a) ${this.sexo}`)
        }
    }

    let juanes = new persona("juanes","47","masculino");
    juanes.getName();
    juanes.getAllInfo();

    class Aprendiz extends persona {
        constructor(nombre,edad,sexo,programa,competencia){
        super(nombre,edad,sexo)
        this.programa = programa;
        this.competencia = competencia;
        }
        getAprendiz(){
            console.log(`te llamas ${this.nombre} tienes ${this.edad} años eres un(a) ${this.sexo}, tu programa es ${this.programa} y estas dando ${this.competencia}`)
    }
    }
    let julian = new Aprendiz("Julian", 19,"masculino", "motores", "mantenimiento de vehiculo pesado");
    julian.getAprendiz();

    console.log("***--- Asincronia ** ---")
    //Promises 