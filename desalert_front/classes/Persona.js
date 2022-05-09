class Persona {
    constructor(nombre="", sexo="", identificacion=0, fechaNacimiento="") {
        this.nombre = nombre;
        this.sexo = sexo;
        this.identificacion = identificacion;
        this.fechaNacimiento = fechaNacimiento;
    }

    //Getters

    getNombre() {
        return this.nombre;
    }

    getSexo() {
        return this.sexo;
    }

    getIdentificacion() {
        return this.identificacion;
    }

    getFechaNacimiento() {
        return this.fechaNacimiento;
    }

    //Setters

    setNombre(nombre) {
        this.nombre = nombre;
    }

    setSexo(sexo) {
        this.sexo = sexo;
    }

    setIdentificacion(identificacion) {
        this.identificacion = identificacion;
    }

    setFechaNacimiento(fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }
}