// Función para hacer scroll suave al formulario
function scrollToContact() {
    document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' });
}

// Función para enviar a WhatsApp
function enviarWhatsApp() {
    // 1. Obtener los datos del formulario
    let nombre = document.getElementById('nombre').value;
    let mensaje = document.getElementById('mensaje').value;
    let telefono = document.getElementById('telefono').value;

    // 2. Validar que no estén vacíos (básico)
    if(nombre === "" || mensaje === "") {
        alert("Por favor completa al menos tu nombre y el mensaje.");
        return;
    }

    // 3. Crear el mensaje de WhatsApp
    // \n significa salto de línea, %20 es espacio en URL
    let texto = `Hola BL Maquinarias, soy *${nombre}*.%0A`;
    texto += `Mi teléfono es: ${telefono}%0A`;
    texto += `Consulta: ${mensaje}`;

    // 4. Tu número de teléfono (código país + número)
    let numeroEmpresa = "51914100825"; // CAMBIA ESTO POR TU NÚMERO REAL

    // 5. Abrir la URL
    let url = `https://wa.me/${numeroEmpresa}?text=${texto}`;
    window.open(url, '_blank');
}

// Seleccionamos las secciones y los enlaces del menú
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

// Escuchamos el scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  // Posición actual del scroll
  let scrollY = window.pageYOffset;
  
  // --- CORRECCIÓN CLAVE ---
  // Verificamos si el usuario ha llegado al FINAL de la página
  // (Altura de la ventana + Scroll >= Altura total del documento - un pequeño margen)
  if ((window.innerHeight + scrollY) >= document.body.offsetHeight - 10) {
      // Si estamos al final, desactivamos todos y activamos 'Contacto'
      navLinks.forEach(link => link.classList.remove("active"));
      document.querySelector("nav a[href='#contacto']").classList.add("active");
      return; // Terminamos la función aquí para que no calcule nada más
  }
  // ------------------------

  // Si no estamos al final, hacemos el cálculo normal
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    
    // Ajustamos el offset (zona de detección) un poco más alto (150px) 
    // para compensar el menú fijo
    const sectionTop = current.offsetTop - 150; 
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      // Primero removemos la clase active de ese link específico para evitar duplicados
      // luego la añadimos si corresponde
      let currentLink = document.querySelector("nav a[href*=" + sectionId + "]");
      if(currentLink) {
          // Limpiamos todos primero para asegurar que solo uno brille
          navLinks.forEach(link => link.classList.remove("active"));
          currentLink.classList.add("active");
      }
    }
  });

}
