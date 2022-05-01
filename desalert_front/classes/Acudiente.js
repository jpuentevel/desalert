class Acudiente{
    constructor(nombre="", id="", contacto="", parentesco="" ){
        this.nombre = nombre;
        this.id = id;
        this.contacto = contacto;
        this.parentesco = parentesco;
    }

    //Getters

    getNombre(){
        return this.nombre;
    }

    getId(){
        return this.id;
    }

    getContacto(){
        return this.contacto;
    }

    getParentesco(){
        return this.parentesco;
    }

    //Setters

    setNombre(nombre){
        this.nombre = nombre;
    }

    setId(id){
        this.id = id;
    }

    setContacto(contacto){
        this.contacto = contacto;
    }

    setParentesco(parentesco){
        this.parentesco = parentesco;
    }

    //Metodos
}