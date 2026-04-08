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
// ================= FORMULARIO CONTACTO =================
const form = document.getElementById("contactForm");

if (form) {
    const msg = document.getElementById("msgEnviado");

    form.addEventListener("submit", async function(e) {
        e.preventDefault();

        try {
            const response = await fetch("https://formspree.io/f/xwvwzbpe", {
                method: "POST",
                body: new FormData(form),
                headers: { 
                    Accept: "application/json"
                }
            });

            // 🔥 NO intentamos leer JSON
            if (response.ok) {
                form.reset(); // 🧹 ahora sí limpia
                msg.style.display = "block";
                msg.innerText = "✅ Mensaje enviado correctamente";
            } else {
                msg.style.display = "block";
                msg.innerText = "❌ Error al enviar el mensaje";
            }

        } catch (error) {
            msg.style.display = "block";
            msg.innerText = "❌ Error de conexión";
        }
    });
}