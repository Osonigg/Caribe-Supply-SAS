
const PRODUCTOS = [
 
    { id: 'art001', nombre: 'Tazas de aluminio', precio: 850, categoria: 'otros', imagen: 'tazas.png' },
    { id: 'art002', nombre: 'Pulsera de Larimar', precio: 3200, categoria: 'joyería', imagen: 'larimar.png' },
    { id: 'art003', nombre: 'Café Orgánico de Barahona (500g)', precio: 450, categoria: 'consumibles', imagen: 'cafeb.png' },
    { id: 'art004', nombre: 'Muñeca sin rostro', precio: 1200, categoria: 'artesanía', imagen: 'muneca.png' },
    { id: 'art005', nombre: 'Puros Dominicanos', precio: 5000, categoria: 'consumibles', imagen: 'puros.png' },
    { id: 'art006', nombre: 'Ron Añejo Reserva', precio: 1500, categoria: 'consumibles', imagen: 'ron.png' },
    { id: 'art007', nombre: 'Collar Ambar', precio: 2500, categoria: 'joyería', imagen: 'ambar.png' },
    { id: 'art008', nombre: 'Mamajuana Premium', precio: 780, categoria: 'consumibles', imagen: 'mamajuana.png' }, 
    { id: 'art009', nombre: 'Pilones', precio: 430, categoria: 'otros', imagen: 'pilones.png' },
    { id: 'art010', nombre: 'Grecas', precio: 650, categoria: 'otros', imagen: 'grecas.png' },
    { id: 'art011', nombre: 'Cafe Santo Domingo', precio: 280, categoria: 'consumibles', imagen: 'cafesd.png' },
    { id: 'art012', nombre: 'Souvenir', precio: 250, categoria: 'otros', imagen: 'souvenir.png' },
    { id: 'art013', nombre: 'Carteras de Guano', precio: 700, categoria: 'otros', imagen: 'carteras.png' },
    { id: 'art014', nombre: 'Artesanía taina', precio: 500, categoria: 'artesania', imagen: 'taina.png' },
    { id: 'art015', nombre: 'Maracas', precio: 350, categoria: 'otros', imagen: 'maracas.png' },
    { id: 'art016', nombre: 'Dominos RD', precio: 600, categoria: 'otros', imagen: 'dominos.png' },
    { id: 'art017', nombre: 'Gorra RD', precio: 950, categoria: 'gorras', imagen: 'gorra1.png' },
    { id: 'art018', nombre: 'Gorra Las Aguilas', precio: 950, categoria: 'gorras', imagen: 'gorra2.png' },
    { id: 'art019', nombre: 'Gorra Licey', precio: 950, categoria: 'gorras', imagen: 'gorra3.png' },
    { id: 'art020', nombre: 'Gorra Los Gigantes', precio: 950, categoria: 'gorras', imagen: 'gorra4.png' },
    { id: 'art021', nombre: 'Merengue', precio: 3200, categoria: 'pinturas', imagen: 'pintura1.png' },
    { id: 'art022', nombre: 'Samaná: Playa Bonita', precio: 500, categoria: 'pinturas', imagen: 'pintura2.png' },
    { id: 'art023', nombre: 'La Costa', precio: 500, categoria: 'pinturas', imagen: 'pintura3.png' },
    { id: 'art024', nombre: 'Kit de Regalo 1', precio: 450, categoria: 'kits', imagen: 'kit1.png' },
    { id: 'art025', nombre: 'Kit de Regalo 2', precio: 1200, categoria: 'kits', imagen: 'kit2.png' },
    { id: 'art026', nombre: 'Kit de Regalo 3', precio: 420, categoria: 'kits', imagen: 'kit3.png' },
    { id: 'art027', nombre: 'Kit de Regalo 4', precio: 420, categoria: 'kits', imagen: 'kit4.png' },
    { id: 'art028', nombre: 'Kit de Regalo 5', precio: 560, categoria: 'kits', imagen: 'kit5.png' },
    { id: 'art029', nombre: 'Kit de Regalo 6', precio: 470, categoria: 'kits', imagen: 'kit6.png' },
    { id: 'art030', nombre: 'Kit de Regalo 7', precio: 1100, categoria: 'kits', imagen: 'kit7.png' }
];


// --- CONFIGURACIÓN ---//
const CARRO_KEY = 'caribeSupplyCarrito'; // Clave usada en localStorage para la persistencia.
let carrito = []; 
const TASA_IMPUESTOS = 0.18; // ITBIS simulado 18%



function cargarCarritoDesdeLocalStorage() {
    const carritoJSON = localStorage.getItem(CARRO_KEY);
    try {
        carrito = carritoJSON ? JSON.parse(carritoJSON) : [];
        carrito.forEach(item => item.cantidad = Number(item.cantidad));
    } catch (error) {
        carrito = [];
    }
}

function guardarCarritoEnLocalStorage() {
    localStorage.setItem(CARRO_KEY, JSON.stringify(carrito));
}

// --- LÓGICA DEL CARRITO ---

function agregarAlCarrito(productoId) {
    const productoExistente = carrito.find(item => item.id === productoId);
    const productoInfo = PRODUCTOS.find(p => p.id === productoId);
    
    if (!productoInfo) return;

    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        carrito.push({
            id: productoId,
            nombre: productoInfo.nombre,
            precio: productoInfo.precio,
            cantidad: 1
        });
    }
    
    guardarCarritoEnLocalStorage();
    actualizarVistaCarrito();
}

function eliminarDelCarrito(productoId) {
    carrito = carrito.filter(item => item.id !== productoId);
    
    guardarCarritoEnLocalStorage();
    actualizarVistaCarrito();
}

function calcularTotales() {
    const subtotal = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
    const impuestos = subtotal * TASA_IMPUESTOS;
    const total = subtotal + impuestos;
    
    return { subtotal, impuestos, total };
}



function renderizarProductos(productosAMostrar = PRODUCTOS) {
    const catalogoEl = document.getElementById('catalogo-productos');
    if (!catalogoEl) return;

    catalogoEl.innerHTML = productosAMostrar.map(p => `
        <div class="producto-card" aria-labelledby="nombre-${p.id}">
            <img src="/assets/${p.imagen || 'placeholder.jpg'}" alt="${p.nombre}"> 
            <h4 id="nombre-${p.id}">${p.nombre}</h4>
            <p>Categoría: ${p.categoria}</p>
            <p class="precio">RD$${p.precio.toFixed(2)}</p>
            <button class="btn-agregar" data-id="${p.id}" onclick="agregarAlCarrito('${p.id}')">
                Agregar al Carrito
            </button>
        </div>
    `).join('');
}


function actualizarVistaCarrito() {
    const carritoItemsEl = document.getElementById('carrito-items');
    const msgVacioEl = document.getElementById('carrito-vacio-msg');
    const checkoutBtn = document.getElementById('proceder-checkout');
    
   
    if (carrito.length === 0) {
        carritoItemsEl.innerHTML = '';
        if (msgVacioEl) msgVacioEl.style.display = 'block';
        if (checkoutBtn) checkoutBtn.disabled = true;
    } else {
        if (msgVacioEl) msgVacioEl.style.display = 'none';
        if (checkoutBtn) checkoutBtn.disabled = false;
        
        carritoItemsEl.innerHTML = carrito.map(item => `
            <div class="carrito-item" aria-label="${item.nombre}, cantidad ${item.cantidad}">
                <span>${item.nombre} x ${item.cantidad}</span>
                <span>RD$${(item.precio * item.cantidad).toFixed(2)}</span>
                <button onclick="eliminarDelCarrito('${item.id}')" aria-label="Eliminar ${item.nombre}">
                    &times; Eliminar
                </button>
            </div>
        `).join('');
    }

    
    const { subtotal, impuestos, total } = calcularTotales();
    
    document.getElementById('subtotal').textContent = subtotal.toFixed(2);
    document.getElementById('impuestos').textContent = impuestos.toFixed(2);
    document.getElementById('total').textContent = total.toFixed(2);
    document.getElementById('contador-carrito').textContent = carrito.length;
}

// --- FILTROS ---

function aplicarFiltros() {
    const busqueda = document.getElementById('filtro-busqueda').value.toLowerCase();
    const categoria = document.getElementById('filtro-categoria').value;

    const productosFiltrados = PRODUCTOS.filter(p => {
        const coincideBusqueda = p.nombre.toLowerCase().includes(busqueda);
        const coincideCategoria = categoria === 'todos' || p.categoria === categoria;
        return coincideBusqueda && coincideCategoria;
    });

    renderizarProductos(productosFiltrados);
}

function configurarFiltros() {
   
    const categorias = [...new Set(PRODUCTOS.map(p => p.categoria))];
    const selectEl = document.getElementById('filtro-categoria');
    
    categorias.forEach(cat => {
        const option = document.createElement('option');
        option.value = cat;
        option.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
        selectEl.appendChild(option);
    });

    // Añadir Listeners
    document.getElementById('filtro-busqueda').addEventListener('input', aplicarFiltros);
    document.getElementById('filtro-categoria').addEventListener('change', aplicarFiltros);
}

// --- LÓGICA DE VALIDACIÓN DEL CHECKOUT ---

function mostrarError(fieldId, message) {
    const errorEl = document.getElementById(`error-${fieldId}`);
    if (errorEl) {
        errorEl.textContent = message;
    }
}

function limpiarErrores() {
    document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');
}

function validarFormularioCheckout() {
    limpiarErrores();
    let esValido = true;

    const nombre = document.getElementById('nombre');
    const correo = document.getElementById('correo');
    const telefono = document.getElementById('telefono');
    const direccion = document.getElementById('direccion');
    const provincia = document.getElementById('provincia');

    // Validaciones
    if (nombre.value.trim().length < 3) {
        mostrarError('nombre', 'El nombre debe tener al menos 3 caracteres.');
        esValido = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo.value)) {
        mostrarError('correo', 'Ingrese un correo electrónico válido.');
        esValido = false;
    }

    const telPattern = /^[0-9]{10,}$/;
    if (!telPattern.test(telefono.value)) {
        mostrarError('telefono', 'El teléfono debe contener solo números (mínimo 10 dígitos).');
        esValido = false;
    }

    if (direccion.value.trim().length < 10) {
        mostrarError('direccion', 'La dirección es demasiado corta.');
        esValido = false;
    }

    // 💡 VALIDACIÓN ACTUAL: Verifica que se haya seleccionado cualquier valor que no sea la opción vacía inicial ("").
    if (provincia.value === "") {
        mostrarError('provincia', 'Debe seleccionar un destino para el envío.');
        esValido = false;
    }

    return esValido;
}


// --- FUNCIÓN DE CONFIGURACIÓN DE MODALES Y EVENTOS ---

function configurarModal() {
    const modalCarrito = document.getElementById('modal-carrito');
    const modalCheckout = document.getElementById('modal-checkout');
    
    const abrirCarritoBtn = document.getElementById('abrir-carrito');
    const cerrarCarritoBtn = document.getElementById('cerrar-carrito');
    const procederCheckoutBtn = document.getElementById('proceder-checkout');
    const cerrarCheckoutBtn = document.getElementById('cerrar-checkout');
    const formularioCheckout = document.getElementById('formulario-checkout');

    // Manejo del Modal de Carrito
    abrirCarritoBtn.addEventListener('click', () => {
        modalCarrito.classList.add('visible');
    });
    cerrarCarritoBtn.addEventListener('click', () => {
        modalCarrito.classList.remove('visible');
    });
    modalCarrito.addEventListener('click', (e) => {
        if (e.target === modalCarrito) {
            modalCarrito.classList.remove('visible');
        }
    });

    // Transición Carrito -> Checkout
    procederCheckoutBtn.addEventListener('click', () => {
        const total = document.getElementById('total').textContent;
        document.getElementById('total-checkout').textContent = total; 

        modalCarrito.classList.remove('visible');
        modalCheckout.classList.add('visible');
    });

    // Manejo del Modal de Checkout
    cerrarCheckoutBtn.addEventListener('click', () => {
        modalCheckout.classList.remove('visible');
    });
    modalCheckout.addEventListener('click', (e) => {
        if (e.target === modalCheckout) {
            modalCheckout.classList.remove('visible');
        }
    });

    // Manejo y Validación del Formulario de Checkout
    formularioCheckout.addEventListener('submit', (e) => {
        e.preventDefault();

        if (validarFormularioCheckout()) {
            // Simulación de Transacción Exitosa
            const totalFinal = document.getElementById('total-checkout').textContent;
            
            alert(`✅ ¡Pedido de CaribeSupply Aprobado!\nSimulación completada.\nTotal: RD$${totalFinal}\n\nGracias por su compra ficticia.`);
            
            // Limpiar el carrito después de la compra simulada
            carrito = [];
            guardarCarritoEnLocalStorage();
            actualizarVistaCarrito();
            
            modalCheckout.classList.remove('visible');
            formularioCheckout.reset(); 
        } else {
            alert('❌ Por favor, corrija los errores en el formulario para continuar.');
        }
    });
}



function configurarListenerDeConcurrencia() {
    window.addEventListener('storage', (event) => {
        if (event.key === CARRO_KEY) {
            // Sincroniza el carrito si detecta un cambio en otra pestaña.
            cargarCarritoDesdeLocalStorage(); 
            actualizarVistaCarrito();
        }
    });
}


// --- INICIALIZACIÓN DE LA APLICACIÓN ---

document.addEventListener('DOMContentLoaded', () => {
    // Inicializar la persistencia y la solución de concurrencia
    configurarListenerDeConcurrencia(); 
    cargarCarritoDesdeLocalStorage();
    
    // Renderizar contenido
    renderizarProductos();
    actualizarVistaCarrito();
    
    // Configurar interacciones UI
    configurarFiltros();
    configurarModal(); 
});
