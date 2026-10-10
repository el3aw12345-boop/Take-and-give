const scriptURL = "https://script.google.com/macros/s/AKfycbwQhkji2i9JG0kiHDhbvhPnPapwJtknNNE78TlIM6TWf_wBle-CQNae9ckFownEtd1AkA/exec"

let form = document.getElementById("form_contact");


form.addEventListener("submit" , (e) => {
    e.preventDefault()

    fetch(scriptURL , {
        method: "POST",
        body: new FormData(form),
    })
    .then((response) => {
        setTimeout(() => {
            localStorage.removeItem("cart")
            window.location.reload()
        },3000)
    })
    .catch((error) => console.error("eroor!" , error.message))
})