class Infante{
    constructor(nombre="", id="", edad=0, sexo="", peso=0, altura=0){
        this.nombre = nombre;
        this.id = id;
        this.edad = edad;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }

    //Getters

    getNombre(){
        return this.nombre;
    }

    getId(){
        return this.id;
    }

    getEdad(){
        return this.edad;
    }

    getSexo(){
        return this.sexo;
    }

    getPeso(){
        return this.peso;
    }

    getAltura(){  
        return this.altura;
    }

    //Setters

    setNombre(nombre){
        this.nombre = nombre;
    }

    setId(id){
        this.id = id;
    }

    setEdad(edad){
        this.edad = edad;
    }

    setSexo(sexo){
        this.sexo = sexo;
    }

    setPeso(peso){
        this.peso = peso;
    }

    setAltura(altura){
        this.altura = altura;
    }

    //Metodos
}