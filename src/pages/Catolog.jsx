import React, { useState, useEffect, useCallback } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import productsData from "./productsData";
import Product from "./Product";

const PRODUCTS_PER_PAGE = 4;

function Catalogo() {
    const location = useLocation();
    const navigate = useNavigate();

    const searchParams = new URLSearchParams(location.search);
    const urlCategory = searchParams.get('category') || 'todos';
    const urlPage = parseInt(searchParams.get('page')) || 1;

    const [activeCategory, setActiveCategory] = useState(urlCategory);
    const [currentPage, setCurrentPage] = useState(urlPage);

    // 1. Usamos useCallback para que esta función no cambie en cada render
    //    y solo se recree si 'navigate' cambia (lo cual no sucede)
    const updateUrl = useCallback((category, page) => {
        let path = "/catalog";
        let params = [];

        if (category !== 'todos') {
            params.push(`category=${category}`);
        }
        if (page > 1) {
            params.push(`page=${page}`);
        }
        
        if (params.length > 0) {
            path += `?${params.join('&')}`;
        }
        navigate(path);
    }, [navigate]); // Solo depende de 'navigate'


    // 2. Corregimos las dependencias del useEffect
    useEffect(() => {
        setActiveCategory(urlCategory);
        
        if (urlPage !== currentPage) {
             setCurrentPage(urlPage);
        } else if (urlCategory !== activeCategory) {
            setCurrentPage(1);
            // Al usar updateUrl, necesitamos que esté en el array
            // o que esté envuelta en useCallback (como hicimos arriba)
            updateUrl(urlCategory, 1); 
        }
        
    }, [urlCategory, urlPage, activeCategory, currentPage, updateUrl]);


    // Handler para cambio de categoría
    const handleCategoryChange = (categoryKey) => {
        setActiveCategory(categoryKey); 
        setCurrentPage(1);
        updateUrl(categoryKey, 1);
    };

    // Handler para cambio de página
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        updateUrl(activeCategory, newPage);
    };
    
    // Lista de filtros
    const filters = [
        { label: 'Todos', key: 'todos' },
        { label: 'Plásticos', key: 'plasticos' },
        { label: 'Hogar', key: 'hogar' },
        { label: 'Accesorios', key: 'accesorios' },
        { label: 'Artesanía', key: 'artesania' },
        { label: 'Consumibles', key: 'consumibles' },
        { label: 'Kits de Regalo', key: 'kits' },
    ];


    // Filtrar productos
    const filteredProducts = productsData.filter(product => {
        if (activeCategory === 'todos') {
            return true;
        }
        return product.category === activeCategory;
    });
    
    // Lógica de Paginación
    const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
    const indexOfLastProduct = currentPage * PRODUCTS_PER_PAGE;
    const indexOfFirstProduct = indexOfLastProduct - PRODUCTS_PER_PAGE;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);


    return (
        <div className="container">
            <nav>
                <div className="overflow-auto">
                    <ul className="nav nav-tabs flex-wrap">
                        {filters.map((filter) => (
                            <li className="nav-item" key={filter.key}>
                                <Link
                                    className={`nav-link text-secondary ${
                                        activeCategory === filter.key ? "active" : ""
                                    }`}
                                    onClick={() => handleCategoryChange(filter.key)}
                                    to="#"
                                >
                                    {filter.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            <h1 className="catalog-title p-3">
                Catálogo de Productos ({filteredProducts.length})
            </h1>
            <div className="catalog-container">
                <div className="product-list row">
                    {currentProducts.length > 0 ? (
                        currentProducts.map((product) => (
                            <Product key={product.id} product={product} />
                        ))
                    ) : (
                         <div className="col-12 text-center my-5">
                            <p className="lead text-muted">No se encontraron productos en la categoría "{filters.find(f => f.key === activeCategory)?.label || 'seleccionada'}".</p>
                            <button 
                                className="btn btn-primary"
                                onClick={() => handleCategoryChange('todos')}
                            >
                                Mostrar todos los productos
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Controles de Paginación */}
            {totalPages > 1 && (
                <nav className="my-4 d-flex justify-content-center">
                    <ul className="pagination">
                        {/* Botón Anterior */}
                        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                            <button 
                                className="page-link"
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                Anterior
                            </button>
                        </li>

                        {/* Números de página */}
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                            <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
                                <button 
                                    className="page-link"
                                    onClick={() => handlePageChange(page)}
                                >
                                    {page}
                                </button>
                            </li>
                        ))}

                        {/* Botón Siguiente */}
                        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                            <button 
                                className="page-link"
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                            >
                                Siguiente
                            </button>
                        </li>
                    </ul>
                </nav>
            )}
        </div>
    );
}

export default Catalogo;