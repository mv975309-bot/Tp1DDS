const btnDark = document.getElementById("darkBtn");

// aplicar modo guardado al cargar la página
const modoGuardado = localStorage.getItem("modo");

if (modoGuardado === "dark") {
    document.body.classList.add("dark");
}

// cambiar modo al hacer click
btnDark.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("modo", "dark");
    } else {
        localStorage.setItem("modo", "light");
    }
});