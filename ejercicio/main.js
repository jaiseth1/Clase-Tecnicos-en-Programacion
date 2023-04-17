let aprendices = {"juan","raul"};

class aprendiz{
    constructor(nombre,edad,sexo,competencia,aprendices){
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.competencia = competencia;
    this.aprendices = aprendices;
    }
    showInfoaprendiz(){
        console.log(`tu nombre es ${this.nombre} tienes ${this.edad} años y eres un(a) ${this.sexo} tu competencia es ${this.competencia}`)
    }
    recorrerA(){
        let i = 0;
        while(i<=5){
            if(this.aprendices[i].starswith(`c`)){
                console.log(`${nombre}"no puede pasar"`)
            }else if(nombre.starswith("a")){
                console.log(`${nombre}"espere un momento"`)
            }else{
                console.log(`${nombre}"ingrese"`)
            }
            i++;
            }
        }
    }
    let programacion = new aprendices("Julian",23,"masculino","javaSE")
    programacion.showInfoaprendiz();
    programacion.recorrerA();