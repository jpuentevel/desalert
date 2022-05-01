class Medico {
  constructor(nombre="", edad=0, id="", especialidad="") {
    this.nombre = nombre;
    this.edad = edad;
    this.id = id;
    this.especialidad = especialidad;
  }

  //Getters

  getNombre() {
    return this.nombre;
  }

  getEdad() {
    return this.edad;
  }

  getId() {
    return this.id;
  }

  getEspecialidad() {
    return this.especialidad;
  }

  //Setters

  setNombre(nombre) {
    this.nombre = nombre;
  }

  setEdad(edad) {
    this.edad = edad;
  }

  setId(id) {
    this.id = id;
  }

  setEspecialidad(especialidad) {
    this.especialidad = especialidad;
  }

  //Metodos
}