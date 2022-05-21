const guardarOpcionLocalStorage = (opcion) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('rol', JSON.stringify(opcion))
    }
}

const obtenerOpcionLocalStorage = () => {
    let existe = saberSiExisteRolLocalStorage();
    let rol;
    if (typeof window !== 'undefined') {
        if (existe) {
            rol = localStorage.getItem('rol');
        } else {
            rol = "error";
        }
    } else {
        rol = "error";
    }
    return rol;
}

const saberSiExisteRolLocalStorage = () => {
    let existe = false;
    if (typeof window !== 'undefined') {
        if (localStorage.getItem('rol') === null || localStorage.getItem('rol') === "") {
            existe = false;
        } else {
            existe = true;
        }
    }
    return existe;
}

const vaciarLocalStorage = () => {
    if (typeof window !== 'undefined') {
        localStorage.clear();
    }
}

export {
    guardarOpcionLocalStorage,
    obtenerOpcionLocalStorage,
    vaciarLocalStorage,
}