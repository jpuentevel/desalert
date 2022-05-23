import React from "react"
import Swal from "sweetalert2"

const Toast = Swal.mixin({
  toast: true,
  position: "top-right",
  iconColor: "white",
  customClass: {
    popup: "colored-toast",
  },
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true,
})

function swalIMC(imc, color) {
  let text = "error desde el principio"
  let background = "#82FF80"

  if (color == "rojo") {
    text = "¡Atención! El infante tiene desnutrición severa"
    background = "#E42323"
  } else if (color == "naranja") {
    text = "¡Atención! El infante tiene desnutrición moderada"
    background = "#E46823"
  } else if (color == "amarillo") {
    text = "¡Cuidado! El infante tiene desnutrición moderada"
    background = "#E4DE23"
  } else if (color == "blanco") {
    text = "¡Excelente! El infante tiene un peso dentro de lo normal"
    background = "#A0EAEB"
  } else if (color == "lila") {
    text = "¡Cuidado! El infante tiene sobrepeso"
    background = "#8F87D7"
  } else if (color == "morado") {
    text = "¡Atención! El infante tiene obesidad"
    background = "#5C26D1"
  } else {
    text = "error"
    background = "#82FF00"
  }

  return Swal.fire({
      customClass: {
          text: "text-white",
          title: "text-white"
      },
    icon: "warning",
    text: text,
    title: imc,
    background: background,
  })
}

function swalSuccess(mensaje) {
  return Toast.fire({
    icon: "success",
    title: mensaje,
  })
}

function swalError(mensaje) {
  Toast.fire({
    icon: "error",
    title: mensaje,
  })
}

export { swalSuccess, swalError, swalIMC }
