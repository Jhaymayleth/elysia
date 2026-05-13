// ========================
// ELYSIA SWEETS - Main JavaScript
// ========================

// 1. SCROLL SUAVE EN NAVEGACIÓN
document.querySelectorAll('a[href^="#"]').forEach(link => {
  // Selecciona TODOS los links que comienzan con #
  
  link.addEventListener('click', function(e) {
    // Escucha cuando hagas click en el link
    
    e.preventDefault();
    // DETIENE el salto brusco por defecto
    
    const target = document.querySelector(this.getAttribute('href'));
    // Obtiene la sección con ese id (ej: #productos)
    
    if (target) {
      // Si la sección existe...
      
      target.scrollIntoView({ behavior: 'smooth' });
      // ...desplázate hacia ella suavemente
    }
  });
});

// 2. FUNCIONALIDAD DE BOTONES DEL HERO
const btnProductos = document.getElementById('btn-productos');
const btnPedidos = document.getElementById('btn-pedidos');
const btnSeguimiento = document.getElementById('btn-seguimiento');

if (btnProductos) {
  btnProductos.addEventListener('click', function() {
    document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
  });
}
if (btnPedidos) {
  btnPedidos.addEventListener('click', function() {
    document.getElementById('pedidos').scrollIntoView({ behavior: 'smooth' });
  });
}
if (btnSeguimiento) {
  btnSeguimiento.addEventListener('click', function() {
    alert('Botón de seguimiento presionado');
  });
}