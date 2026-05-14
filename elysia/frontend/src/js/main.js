// ==========================================
// 1. IMPORTACIONES (Siempre al principio)
// ==========================================
import { animate, utils, createDraggable, spring } from 'animejs';
import Swal from 'sweetalert2';

// ==========================================
// 2. CONFIGURACIÓN INICIAL Y ANIMACIONES
// ==========================================
window.addEventListener('load', () => {
    console.log("¿Anime.js cargado?", typeof animate);
    console.log("Iniciando prueba de Anime.js v4...");

    // Verificación de elementos para animación
    const logoElements = utils.$('.logo.js');
    const buttonElements = utils.$('button');

    if (logoElements.length > 0) {
        const $logo = logoElements[0];
        
        // Animación de rebote (Loop)
        animate('.logo.js', {
            scale: [
                { to: 1.25, ease: 'in-out(3)', duration: 200 },
                { to: 1, ease: spring({ bounce: 0.7 }) }
            ],
            loop: true,
            loopDelay: 250,
        });

        // Hacer el logo arrastrable
        createDraggable('.logo.js', {
            container: [0, 0, 0, 0],
            releaseEase: spring({ bounce: 0.7 })
        });
    }

    // ==========================================
    // 3. FUNCIONALIDAD DE BOTONES DEL HERO
    // (Ahora dentro de 'load' para asegurar que existan)
    // ==========================================
    const btnProductos = document.getElementById('btn-productos');
    const btnPedidos = document.getElementById('btn-pedidos');
    const btnSeguimiento = document.getElementById('btn-seguimiento');

    if (btnProductos) {
        btnProductos.addEventListener('click', () => {
            document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
        });
    }
    if (btnPedidos) {
        btnPedidos.addEventListener('click', () => {
            document.getElementById('pedidos').scrollIntoView({ behavior: 'smooth' });
        });
    }
    if (btnSeguimiento) {
        btnSeguimiento.addEventListener('click', () => {
            Swal.fire({
                title: 'Seguimiento',
                text: 'Esta función estará disponible muy pronto.',
                icon: 'info',
                confirmButtonColor: '#c084fc'
            });
        });
    }
});

// ==========================================
// 4. SCROLL SUAVE EN NAVEGACIÓN
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ==========================================
// 5. MANEJO DEL FORMULARIO DE PEDIDOS
// ==========================================
const formulario = document.querySelector('#pedidos form');

if (formulario) {
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Extraemos los datos de forma profesional
        const datos = new FormData(e.target);
        const pedido = Object.fromEntries(datos);
        
        console.log("Datos del pedido capturados:");
        console.table(pedido);

        // Notificación profesional con SweetAlert2
        Swal.fire({
            title: '¡Pedido Recibido!',
            text: `Gracias ${pedido.nombre}, estamos preparando tu postre ${pedido.postre}.`,
            icon: 'success',
            confirmButtonColor: '#c084fc'
        });
    });
}
import { createTimer } from 'animejs';

const [ $time, $count ] = utils.$('.value');

createTimer({
  duration: 1000,
  loop: true,
  frameRate: 30,
  onUpdate: self => $time.innerHTML = self.currentTime,
  onLoop: self => $count.innerHTML = self._currentIteration
});