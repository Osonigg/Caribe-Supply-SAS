// -------------------------------------------------------------
//  DOCUMENTACIÓN DE ARQUITECTURA GENERAL DEL PROYECTO
// -------------------------------------------------------------

export const projectStructure = {
  tecnologias: {
    frontend: "React + Vite",
    backendSimulado: "MockAPI (productos, usuarios, tracking)",
    estilos: "CSS Modules / Tailwind (dependiendo del grupo)"
  },

  estructuraCarpetas: {
    src: {
      components: "Componentes reutilizables: Header, ProductCard, CartItem...",
      pages: "Páginas principales: Home, Catalog, Login, Checkout",
      services: "Servicios que consumen APIs externas y mock backend",
      context: "Estados globales: AuthContext, CartContext",
      hooks: "Hooks personalizados opcionales",
      utils: "Funciones auxiliares como formateo de moneda",
      architecture: "Documentación del sistema (este archivo)"
    }
  },

  descripcionGeneral: `
    CaribeSupply se construyó bajo una arquitectura modular.
    Esto permite separar completamente:
    - La lógica del negocio
    - La UI y los componentes
    - Los servicios externos (APIs)
    - El estado global (contexts)

    Esta estructura facilita la escalabilidad y el mantenimiento,
    y asegura que los datos fluyan correctamente entre las capas.
  `
};
