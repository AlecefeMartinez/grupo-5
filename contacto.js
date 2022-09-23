window.addEventListener("load", () => {
    console.log("DOM CARGADO")
    let formulario = this.document.getElementById("form")
    formulario.addEventListener("submit", (e) => {
        e.preventDefault()
        let nombre = this.document.querySelector("#name")
        let email = this.document.querySelector("#email")
        let mensaje = this.document.querySelector("#message")
        console.log("Funciona el evento")
        console.log("El nombre es" + " " +nombre.value)
        console.log("El email es" + " " + email.value)
        console.log("El mensaje es" + " " + mensaje.value)     
    })
})