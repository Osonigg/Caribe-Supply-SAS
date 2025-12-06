Caribe Supply E-commerce: Catálogo y Venta al Detalle
🌟 Descripción Ejecutiva del Proyecto
Caribe Supply es una plataforma de comercio electrónico dinámica y responsiva, construida con React y Bootstrap, diseñada para la venta y distribución de productos variados, incluyendo plásticos, artículos del hogar y accesorios.

El objetivo principal es ofrecer a los clientes una experiencia de navegación fluida, permitiéndoles filtrar, paginar y visualizar productos de manera eficiente, optimizando tanto el rendimiento como la accesibilidad. El sistema utiliza el enrutamiento de React Router DOM para simular la navegación entre el catálogo, el carrito y el proceso de checkout.

🛠️ Tecnologías y Servicios Utilizados
💻 Tecnologías Core
Frontend Principal: React v18+ (Construcción de la interfaz de usuario).

Estilos y Diseño: Bootstrap 5 (Estructura responsiva y componentes de UI).

Navegación: React Router DOM (Enrutamiento de URL entre Catálogo, Home, About).

🔗 APIs y Servicios
Datos de Productos: JavaScript Array (productsData.js).

Tipo de API: Local/Mock Data (Almacenamiento simulado de la base de datos de productos).

Mapa de Ubicación: Google Maps Embed (iframe).

Tipo de API: API de Incrustación (Embed API).

Propósito: Muestra la ubicación de la tienda en el componente About.

Lógica de Estado: React Hooks (useState, useEffect, useCallback).

Propósito: Gestión interna del estado, la sincronización de datos y optimización de funciones.

💡 Problemas Técnicos Resueltos
Esta sección documenta los desafíos técnicos clave y las soluciones implementadas para garantizar la funcionalidad y las mejores prácticas de React.

1. Sincronización de Filtros y Paginación
Problema: Inicialmente, la lógica de paginación y filtrado fallaba o entraba en bucles debido a la desincronización entre el estado local de React (useState) y los parámetros de la URL (searchParams).

Solución: Se implementó la Estrategia "URL-Primero". Se eliminó el uso de useState para la categoría y la página, forzando al componente Catalogo.jsx a leer los valores directamente de location.search en cada render. Esto aseguró que la vista siempre refleje la URL más reciente.

2. Conflicto de Componentes de Navegación
Problema: El uso del componente <Link to="#"> para los botones de filtro, combinado con el onClick que iniciaba la navegación con Maps(), causaba conflictos en el enrutamiento y, a veces, interrumpía la acción del filtro.

Solución: Se reemplazó el componente <Link> por un <button> simple en la lista de filtros del catálogo. Esto eliminó el conflicto de enrutamiento y la necesidad de usar e.preventDefault() en la función, simplificando el handler.

3. Advertencias de Dependencias de React Hooks (ESLint)
Problema: La consola mostraba advertencias (react-hooks/exhaustive-deps) debido a la omisión de dependencias (activeCategory, currentPage) dentro del useEffect, lo cual comprometía la eficiencia.

Solución: Se incluyeron todas las variables de estado utilizadas en el array de dependencias del useEffect. Además, la función updateUrl fue encapsulada en useCallback para evitar su recreación innecesaria en cada render.

4. Accesibilidad y Usabilidad del Filtro (a11y)
Problema: La solución intermedia de usar un ancla simple (<a href="#">) para el filtro generaba advertencias de accesibilidad (jsx-a11y/anchor-is-valid), ya que un elemento que ejecuta una acción debería ser un botón.

Solución: Se adoptó el estándar de accesibilidad correcto, manteniendo la etiqueta <button> para los filtros. Esto asegura que los lectores de pantalla y las herramientas de accesibilidad identifiquen correctamente la funcionalidad del elemento.

📈 Métricas de Rendimiento (Lighthouse)
(Resultado de las pruebas de rendimiento y accesibilidad)

Rendimiento: [EJEMPLO: 95/100]

Accesibilidad: [EJEMPLO: 100/100]

First Contentful Paint (FCP): [EJEMPLO: 1.2s]

Largest Contentful Paint (LCP): [EJEMPLO: 2.5s]

