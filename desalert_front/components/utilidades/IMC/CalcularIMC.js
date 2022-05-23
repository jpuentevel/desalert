const calcularIMC = (altura, peso) => {
  const IMC = peso / (altura * altura)
  return IMC
}

const calcularRango = (imc, edad) => {
  let rango = 0
  if (edad >= 0 && edad <= 5) {
    if (imc < 12.1) {
      rango = "d-s"
      return rango
    } else if (imc >= 12.1 && imc <= 12.9) {
      rango = "d-m"
      return rango
    } else if (imc >= 13.0 && imc <= 14.0) {
      rango = "d-l"
      return rango
    } else if (imc >= 14.1 && imc <= 16.5) {
      rango = "n"
      return rango
    } else if (imc >= 16.6 && imc <= 18.2) {
      rango = "s"
      return rango
    } else if (imc >= 18.3) {
      rango = "o"
      return rango
    } else {
      rango = "error"
      return rango
    }
  } else if (edad == 6) {
    if (imc < 12.1) {
      rango = "d-s"
      return rango
    } else if (imc >= 12.1 && imc <= 12.9) {
      rango = "d-m"
      return rango
    } else if (imc >= 13.0 && imc <= 14.0) {
      rango = "d-l"
      return rango
    } else if (imc >= 14.1 && imc <= 16.7) {
      rango = "n"
      return rango
    } else if (imc >= 16.8 && imc <= 18.4) {
      rango = "s"
      return rango
    } else if (imc >= 18.5) {
      rango = "o"
      return rango
    } else {
      rango = "error"
      return rango
    }
  } else if (edad == 7) {
    if (imc < 12.3) {
      rango = "d-s"
      return rango
    } else if (imc >= 12.3 && imc <= 13.0) {
      rango = "d-m"
      return rango
    } else if (imc >= 13.1 && imc <= 14.1) {
      rango = "d-l"
      return rango
    } else if (imc >= 14.2 && imc <= 16.9) {
      rango = "n"
      return rango
    } else if (imc >= 17.0 && imc <= 18.9) {
      rango = "s"
      return rango
    } else if (imc >= 19.0) {
      rango = "o"
      return rango
    } else {
      rango = "error"
      return rango
    }
  } else if (edad == 8) {
    if (imc < 12.4) {
      rango = "d-s"
      return rango
    } else if (imc >= 12.4 && imc <= 13.2) {
      rango = "d-m"
      return rango
    } else if (imc >= 13.3 && imc <= 14.3) {
      rango = "d-l"
      return rango
    } else if (imc >= 14.4 && imc <= 17.3) {
      rango = "n"
      return rango
    } else if (imc >= 17.3 && imc <= 19.6) {
      rango = "s"
      return rango
    } else if (imc >= 19.7) {
      rango = "o"
      return rango
    } else {
      rango = "error"
      return rango
    }
  } else if (edad == 9) {
    if (imc < 12.6) {
      rango = "d-s"
      return rango
    } else if (imc >= 12.6 && imc <= 13.4) {
      rango = "d-m"
      return rango
    } else if (imc >= 13.5 && imc <= 14.5) {
      rango = "d-l"
      return rango
    } else if (imc >= 14.6 && imc <= 17.8) {
      rango = "n"
      return rango
    } else if (imc >= 17.9 && imc <= 20.4) {
      rango = "s"
      return rango
    } else if (imc >= 20.5) {
      rango = "o"
      return rango
    } else {
      rango = "error"
      return rango
    }
  } else if (edad == 10) {
    if (imc < 12.8) {
      rango = "d-s"
      return rango
    } else if (imc >= 12.8 && imc <= 13.6) {
      rango = "d-m"
      return rango
    } else if (imc >= 13.7 && imc <= 14.8) {
      rango = "d-l"
      return rango
    } else if (imc >= 14.9 && imc <= 18.4) {
      rango = "n"
      return rango
    } else if (imc >= 18.5 && imc <= 21.3) {
      rango = "s"
      return rango
    } else if (imc >= 21.4) {
      rango = "o"
      return rango
    } else {
      rango = "error"
      return rango
    }
  } else if (edad == 11) {
    if (imc < 13.1) {
      rango = "d-s"
      return rango
    } else if (imc >= 13.1 && imc <= 14.0) {
      rango = "d-m"
      return rango
    } else if (imc >= 14.1 && imc <= 15.2) {
      rango = "d-l"
      return rango
    } else if (imc >= 15.3 && imc <= 19.1) {
      rango = "n"
      return rango
    } else if (imc >= 19.2 && imc <= 22.4) {
      rango = "s"
      return rango
    } else if (imc >= 22.5) {
      rango = "o"
      return rango
    } else {
      rango = "error"
      return rango
    }
  } else if (edad == 12) {
    if (imc < 13.4) {
      rango = "d-s"
      return rango
    } else if (imc >= 13.4 && imc <= 14.4) {
      rango = "d-m"
      return rango
    } else if (imc >= 14.5 && imc <= 15.7) {
      rango = "d-l"
      return rango
    } else if (imc >= 15.8 && imc <= 19.8) {
      rango = "n"
      return rango
    } else if (imc >= 19.9 && imc <= 23.5) {
      rango = "s"
      return rango
    } else if (imc >= 23.6) {
      rango = "o"
      return rango
    } else {
      rango = "error"
      return rango
    }
  } else if (edad == 13) {
    if (imc < 13.8) {
      rango = "d-s"
      return rango
    } else if (imc >= 13.8 && imc <= 14.8) {
      rango = "d-m"
      return rango
    } else if (imc >= 14.9 && imc <= 16.3) {
      rango = "d-l"
      return rango
    } else if (imc >= 16.4 && imc <= 20.7) {
      rango = "n"
      return rango
    } else if (imc >= 20.8 && imc <= 24.7) {
      rango = "s"
      return rango
    } else if (imc >= 24.8) {
      rango = "o"
      return rango
    } else {
      rango = "error"
      return rango
    }
  } else if (edad == 14) {
    if (imc < 14.3) {
      rango = "d-s"
      return rango
    } else if (imc >= 14.3 && imc <= 15.4) {
      rango = "d-m"
      return rango
    } else if (imc >= 15.5 && imc <= 16.9) {
      rango = "d-l"
      return rango
    } else if (imc >= 17.0 && imc <= 21.7) {
      rango = "n"
      return rango
    } else if (imc >= 21.8 && imc <= 25.8) {
      rango = "s"
      return rango
    } else if (imc >= 25.9) {
      rango = "o"
      return rango
    } else {
      rango = "error"
      return rango
    }
  } else if (edad == 15) {
    if (imc < 14.7) {
      rango = "d-s"
      return rango
    } else if (imc >= 14.7 && imc <= 15.9) {
      rango = "d-m"
      return rango
    } else if (imc >= 16.0 && imc <= 17.5) {
      rango = "d-l"
      return rango
    } else if (imc >= 17.6 && imc <= 22.6) {
      rango = "n"
      return rango
    } else if (imc >= 22.7 && imc <= 26.9) {
      rango = "s"
      return rango
    } else if (imc >= 27.0) {
      rango = "o"
      return rango
    } else {
      rango = "error"
      return rango
    }
  } else if (edad == 16) {
    if (imc < 15.1) {
      rango = "d-s"
      return rango
    } else if (imc >= 15.1 && imc <= 16.4) {
      rango = "d-m"
      return rango
    } else if (imc >= 16.5 && imc <= 18.1) {
      rango = "d-l"
      return rango
    } else if (imc >= 18.2 && imc <= 23.4) {
      rango = "n"
      return rango
    } else if (imc >= 23.5 && imc <= 27.8) {
      rango = "s"
      return rango
    } else if (imc >= 27.9) {
      rango = "o"
      return rango
    } else {
      rango = "error"
      return rango
    }
  } else if (edad == 17) {
    if (imc < 15.4) {
      rango = "d-s"
      return rango
    } else if (imc >= 15.4 && imc <= 16.8) {
      rango = "d-m"
      return rango
    } else if (imc >= 16.9 && imc <= 18.7) {
      rango = "d-l"
      return rango
    } else if (imc >= 18.8 && imc <= 24.2) {
      rango = "n"
      return rango
    } else if (imc >= 24.3 && imc <= 28.5) {
      rango = "s"
      return rango
    } else if (imc >= 28.6) {
      rango = "o"
      return rango
    } else {
      rango = "error"
      return rango
    }
  } else if (edad == 18) {
    if (imc < 15.7) {
      rango = "d-s"
      return rango
    } else if (imc >= 15.7 && imc <= 17.2) {
      rango = "d-m"
      return rango
    } else if (imc >= 17.3 && imc <= 191) {
      rango = "d-l"
      return rango
    } else if (imc >= 19.2 && imc <= 24.8) {
      rango = "n"
      return rango
    } else if (imc >= 24.9 && imc <= 29.1) {
      rango = "s"
      return rango
    } else if (imc >= 29.2) {
      rango = "o"
      return rango
    } else {
      rango = "error"
      return rango
    }
  } else {
    rango = "error"
  }
}

const definirColor = (rango) => {
  let color = "error"

  if (rango == "d-s") {
    color = "rojo"
    return color
  } else if (rango == "d-m") {
    color = "naranja"
    return color
  } else if (rango == "d-l") {
    color = "amarillo"
    return color
  } else if (rango == "n") {
    color = "blanco"
    return color
  } else if (rango == "s") {
    color = "lila"
    return color
  } else if (rango == "o") {
    color = "morado"
    return color
  } else {
    color = "error"
    return color
  }
}

export { calcularIMC, calcularRango, definirColor }
