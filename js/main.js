const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

//const pant = localStorage.getItem("pantalla", pantalla.textContent)

botones.forEach(boton =>{
    boton.addEventListener("click", () =>{
        const botonA = boton.textContent;
        if (boton.id === "c") {
            pantalla.textContent = "0";
            return;
        }

        if (boton.id === "borrar"){
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if (boton.id === "igual"){
            try {
                pantalla.textContent = eval(pantalla.textContent);  
            }catch{
            pantalla.textContent = "Error";
            }
            return;
        }

        if(pantalla.textContent === "0"){
            pantalla.textContent = botonA;
        } else {
           pantalla.textContent += botonA;
        }
    }
    )
})

let historial = []
Historial.push(pantalla.textContent)

localStorage.setItem("historial", JSON.stringify(historial));

