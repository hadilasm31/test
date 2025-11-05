// Catalogue page JavaScript

// Sample product data
const sampleProducts = [
    {
        id: '1',
        name: 'Montre Connectée Pro',
        price: 299.99,
        originalPrice: 399.99,
        category: 'electronique',
        brand: 'apple',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop',
        description: 'Design élégant et fonctionnalités avancées',
        rating: 4.5,
        stock: 25,
        tags: ['montre', 'connectée', 'smartwatch']
    },
    {
        id: '2',
        name: 'Casque Audio Premium',
        price: 199.99,
        category: 'electronique',
        brand: 'samsung',
        image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=300&fit=crop',
        description: 'Son exceptionnel et confort optimal',
        rating: 4.8,
        stock: 42,
        tags: ['casque', 'audio', 'musique']
    },
    {
        id: '3',
        name: 'Lunettes de Soleil',
        price: 89.99,
        category: 'accessoires',
        brand: 'nike',
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop',
        description: 'Protection UV et style moderne',
        rating: 4.2,
        stock: 67,
        tags: ['lunettes', 'soleil', 'protection']
    },
    {
        id: '4',
        name: 'Chaussures Sport',
        price: 129.99,
        category: 'chaussures',
        brand: 'adidas',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop',
        description: 'Confort et performance optimale',
        rating: 4.6,
        stock: 38,
        tags: ['chaussures', 'sport', 'running']
    },
    {
        id: '5',
        name: 'T-Shirt Premium',
        price: 49.99,
        category: 'vetements',
        brand: 'nike',
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop',
        description: 'Coton bio et coupe moderne',
        rating: 4.4,
        stock: 156,
        tags: ['tshirt', 'coton', 'bio']
    },
    {
        id: '6',
        name: 'Sac à Dos Urbain',
        price: 79.99,
        category: 'accessoires',
        brand: 'adidas',
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop',
        description: 'Style moderne et fonctionnel',
        rating: 4.3,
        stock: 73,
        tags: ['sac', 'dos', 'urbain']
    },
    {
        id: '7',
        name: 'Veste en Jean',
        price: 159.99,
        category: 'vetements',
        brand: 'nike',
        image: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=400&h=300&fit=crop',
        description: 'Jean de qualité supérieure',
        rating: 4.7,
        stock: 45,
        tags: ['veste', 'jean', 'qualité']
    },
    {
        id: '8',
        name: 'Baskets Lifestyle',
        price: 189.99,
        category: 'chaussures',
        brand: 'adidas',
        image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&h=300&fit=crop',
        description: 'Style urbain et confort',
        rating: 4.5,
        stock: 89,
        tags: ['baskets', 'lifestyle', 'urbain']
    },
    {
        id: '9',
        name: 'Écouteurs Sans Fil',
        price: 149.99,
        category: 'electronique',
        brand: 'apple',
        image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=300&fit=crop',
        description: 'Liberté de mouvement et qualité sonore',
        rating: 4.6,
        stock: 112,
        tags: ['ecouteurs', 'sansfil', 'bluetooth']
    },
    {
        id: '10',
        name: 'Chemise Casual',
        price: 69.99,
        category: 'vetements',
        brand: 'nike',
        image: 'https://images.unsplash.com/photo-1596755094514-f87e53485c56?w=400&h=300&fit=crop',
        description: 'Élégance décontractée',
        rating: 4.1,
        stock: 94,
        tags: ['chemise', 'casual', 'elegance']
    },
    {
        id: '11',
        name: 'Portefeuille Cuir',
        price: 59.99,
        category: 'accessoires',
        brand: 'adidas',
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop',
        description: 'Cuir véritable et artisanat',
        rating: 4.8,
        stock: 67,
        tags: ['portefeuille', 'cuir', 'artisanat']
    },
    {
        id: '12',
        name: 'Pantalon Chino',
        price: 89.99,
        category: 'vetements',
        brand: 'nike',
        image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=300&fit=crop',
        description: 'Confort et style intemporel',
        rating: 4.4,
        stock: 78,
        tags: ['pantalon', 'chino', 'confort']
    },
    {
        id: '13',
        name: 'Montre Classic',
        price: 199.99,
        category: 'accessoires',
        brand: 'samsung',
        image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400&h=300&fit=crop',
        description: 'Design intemporel et précision',
        rating: 4.7,
        stock: 34,
        tags: ['montre', 'classic', 'precision']
    },
    {
        id: '14',
        name: 'Sneakers Running',
        price: 159.99,
        category: 'chaussures',
        brand: 'adidas',
        image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop',
        description: 'Performance et amorti supérieur',
        rating: 4.5,
        stock: 56,
        tags: ['sneakers', 'running', 'performance']
    },
    {
        id: '15',
        name: 'Tablette Pro',
        price: 599.99,
        category: 'electronique',
        brand: 'apple',
        image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop',
        description: 'Puissance et mobilité professionnelle',
        rating: 4.9,
        stock: 23,
        tags: ['tablette', 'pro', 'mobilité']
    },
    {
        id: '16',
        name: 'Pull Over',
        price: 79.99,
        category: 'vetements',
        brand: 'nike',
        image: 'https://images.unsplash.com/photo-1583743814966-8936f455b1e6?w=400&h=300&fit=crop',
        description: 'Chaleur et confort hivernal',
        rating: 4.3,
        stock: 87,
        tags: ['pull', 'over', 'hiver']
    },
    {
        id: '17',
        name: 'Ceinture Cuir',
        price: 49.99,
        category: 'accessoires',
        brand: 'adidas',
        image: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400&h=300&fit=crop',
        description: 'Accessoire essentiel et qualité',
        rating: 4.2,
        stock: 124,
        tags: ['ceinture', 'cuir', 'accessoire']
    },
    {
        id: '18',
        name: 'Boots Hiver',
        price: 219.99,
        category: 'chaussures',
        brand: 'nike',
        image: 'https://images.unsplash.com/photo-1606107557195-0e29e996b665?w=400&h=300&fit=crop',
        description: 'Protection et style hivernal',
        rating: 4.6,
        stock: 41,
        tags: ['boots', 'hiver', 'protection']
    },
    {
        id: '19',
        name: 'Smartphone',
        price: 899.99,
        category: 'electronique',
        brand: 'samsung',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=300&fit=crop',
        description: 'Technologie de pointe et design',
        rating: 4.8,
        stock: 67,
        tags: ['smartphone', 'tech', 'design']
    },
    {
        id: '20',
        name: 'Veste Softshell',
        price: 139.99,
        category: 'vetements',
        brand: 'adidas',
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=300&fit=crop',
        description: 'Protection contre les intempéries',
        rating: 4.4,
        stock: 53,
        tags: ['veste', 'softshell', 'protection']
    },
    {
        id: '21',
        name: 'Sacoche Ordinateur',
        price: 99.99,
        category: 'accessoires',
        brand: 'nike',
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop',
        description: 'Transport sécurisé pour votre tech',
        rating: 4.5,
        stock: 76,
        tags: ['sacoche', 'ordi', 'tech']
    },
    {
        id: '22',
        name: 'Sandales Été',
        price: 59.99,
        category: 'chaussures',
        brand: 'adidas',
        image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=300&fit=crop',
        description: 'Confort et fraîcheur estivale',
        rating: 4.1,
        stock: 98,
        tags: ['sandales', 'été', 'confort']
    },
    {
        id: '23',
        name: 'Enceinte Bluetooth',
        price: 129.99,
        category: 'electronique',
        brand: 'samsung',
        image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop',
        description: 'Son puissant et connectivité sans fil',
        rating: 4.7,
        stock: 145,
        tags: ['enceinte', 'bluetooth', 'son']
    },
    {
        id: '24',
        name: 'Short Sport',
        price: 39.99,
        category: 'vetements',
        brand: 'nike',
        image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=300&fit=crop',
        description: 'Performance et liberté de mouvement',
        rating: 4.3,
        stock: 167,
        tags: ['short', 'sport', 'performance']
    }
];

let filteredProducts = [...sampleProducts];
let currentView = 'grid';
let currentSort = 'name';

// Initialize catalogue page
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('products-container')) {
        initializeCatalogue();
    }
});

function initializeCatalogue() {
    setupEventListeners();
    renderProducts();
    updateProductCount();
}

function setupEventListeners() {
    // Search functionality with suggestions
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
        searchInput.addEventListener('focus', showSearchSuggestions);
        searchInput.addEventListener('blur', hideSearchSuggestions);
    }

    // Sort functionality
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', handleSort);
    }

    // View toggle
    const gridView = document.getElementById('grid-view');
    const listView = document.getElementById('list-view');
    if (gridView && listView) {
        gridView.addEventListener('click', () => toggleView('grid'));
        listView.addEventListener('click', () => toggleView('list'));
    }

    // Price range filter
    const priceRange = document.getElementById('price-range');
    const priceValue = document.getElementById('price-value');
    if (priceRange && priceValue) {
        priceRange.addEventListener('input', (e) => {
            priceValue.textContent = `${e.target.value}€`;
            handlePriceFilter(e.target.value);
        });
    }

    // Category filters
    const categoryFilters = document.querySelectorAll('.category-filter');
    categoryFilters.forEach(filter => {
        filter.addEventListener('change', handleCategoryFilter);
    });

    // Brand filters
    const brandFilters = document.querySelectorAll('.brand-filter');
    brandFilters.forEach(filter => {
        filter.addEventListener('change', handleBrandFilter);
    });

    // Clear filters
    const clearFilters = document.getElementById('clear-filters');
    if (clearFilters) {
        clearFilters.addEventListener('click', clearAllFilters);
    }

    // Load more button
    const loadMore = document.getElementById('load-more');
    if (loadMore) {
        loadMore.addEventListener('click', loadMoreProducts);
    }

    // Search suggestions
    const searchSuggestions = document.querySelectorAll('.search-suggestion-item');
    searchSuggestions.forEach(suggestion => {
        suggestion.addEventListener('click', function() {
            const searchInput = document.getElementById('search-input');
            searchInput.value = this.textContent;
            hideSearchSuggestions();
            handleSearch({ target: searchInput });
        });
    });
}

function handleSearch(e) {
    const query = e.target.value.toLowerCase();
    filteredProducts = sampleProducts.filter(product => {
        return product.name.toLowerCase().includes(query) ||
               product.description.toLowerCase().includes(query) ||
               product.tags.some(tag => tag.toLowerCase().includes(query));
    });
    renderProducts();
    updateProductCount();
}

function handleSort(e) {
    currentSort = e.target.value;
    sortProducts();
    renderProducts();
}

function sortProducts() {
    switch (currentSort) {
        case 'name':
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            filteredProducts.sort((a, b) => b.rating - a.rating);
            break;
    }
}

function toggleView(view) {
    currentView = view;
    const gridView = document.getElementById('grid-view');
    const listView = document.getElementById('list-view');
    
    if (view === 'grid') {
        gridView.classList.add('text-blue-600', 'bg-blue-100');
        gridView.classList.remove('text-gray-600');
        listView.classList.remove('text-blue-600', 'bg-blue-100');
        listView.classList.add('text-gray-600');
    } else {
        listView.classList.add('text-blue-600', 'bg-blue-100');
        listView.classList.remove('text-gray-600');
        gridView.classList.remove('text-blue-600', 'bg-blue-100');
        gridView.classList.add('text-gray-600');
    }
    
    renderProducts();
}

function handlePriceFilter(maxPrice) {
    filteredProducts = sampleProducts.filter(product => product.price <= maxPrice);
    applyFilters();
}

function handleCategoryFilter() {
    applyFilters();
}

function handleBrandFilter() {
    applyFilters();
}

function applyFilters() {
    let filtered = [...sampleProducts];
    
    // Apply search filter
    const searchQuery = document.getElementById('search-input')?.value.toLowerCase();
    if (searchQuery) {
        filtered = filtered.filter(product => {
            return product.name.toLowerCase().includes(searchQuery) ||
                   product.description.toLowerCase().includes(searchQuery) ||
                   product.tags.some(tag => tag.toLowerCase().includes(searchQuery));
        });
    }
    
    // Apply price filter
    const maxPrice = document.getElementById('price-range')?.value;
    if (maxPrice) {
        filtered = filtered.filter(product => product.price <= maxPrice);
    }
    
    // Apply category filters
    const selectedCategories = Array.from(document.querySelectorAll('.category-filter:checked'))
        .map(cb => cb.value);
    if (selectedCategories.length > 0) {
        filtered = filtered.filter(product => selectedCategories.includes(product.category));
    }
    
    // Apply brand filters
    const selectedBrands = Array.from(document.querySelectorAll('.brand-filter:checked'))
        .map(cb => cb.value);
    if (selectedBrands.length > 0) {
        filtered = filtered.filter(product => selectedBrands.includes(product.brand));
    }
    
    filteredProducts = filtered;
    sortProducts();
    renderProducts();
    updateProductCount();
}

function clearAllFilters() {
    // Clear search
    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.value = '';
    
    // Clear price range
    const priceRange = document.getElementById('price-range');
    const priceValue = document.getElementById('price-value');
    if (priceRange && priceValue) {
        priceRange.value = 500;
        priceValue.textContent = '500€';
    }
    
    // Clear category filters
    document.querySelectorAll('.category-filter').forEach(cb => cb.checked = false);
    
    // Clear brand filters
    document.querySelectorAll('.brand-filter').forEach(cb => cb.checked = false);
    
    // Reset products
    filteredProducts = [...sampleProducts];
    sortProducts();
    renderProducts();
    updateProductCount();
}

function renderProducts() {
    const container = document.getElementById('products-container');
    if (!container) return;
    
    if (currentView === 'grid') {
        container.className = 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6';
        container.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
    } else {
        container.className = 'space-y-4';
        container.innerHTML = filteredProducts.map(product => createProductListItem(product)).join('');
    }
    
    // Add event listeners to new product cards
    addProductEventListeners();
}

function createProductCard(product) {
    const hasPromotion = product.originalPrice && product.originalPrice > product.price;
    const discountPercentage = hasPromotion ? Math.round((1 - product.price / product.originalPrice) * 100) : 0;
    
    return `
        <div class="product-card bg-white rounded-xl shadow-lg overflow-hidden card-hover" 
             data-name="${product.name}" 
             data-category="${product.category}">
            <div class="relative">
                <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
                ${hasPromotion ? `
                    <div class="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-lg text-sm font-semibold">
                        -${discountPercentage}%
                    </div>
                ` : ''}
                <div class="absolute top-2 right-2 bg-white bg-opacity-90 text-gray-700 px-2 py-1 rounded-lg text-sm">
                    ${product.rating} <i class="fas fa-star text-yellow-400"></i>
                </div>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-900 mb-2">${product.name}</h3>
                <p class="text-gray-600 mb-4">${product.description}</p>
                
                <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center space-x-2">
                        <span class="text-2xl font-bold text-blue-600">${window.LamitiShopping.formatPrice(product.price)}</span>
                        ${hasPromotion ? `
                            <span class="text-lg text-gray-500 line-through">${window.LamitiShopping.formatPrice(product.originalPrice)}</span>
                        ` : ''}
                    </div>
                    <span class="text-sm text-gray-500">${product.stock} en stock</span>
                </div>
                
                <div class="flex space-x-2">
                    <button class="add-to-cart flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors" 
                            data-product-id="${product.id}"
                            data-product-name="${product.name}"
                            data-product-price="${product.price}"
                            data-product-image="${product.image}">
                        <i class="fas fa-shopping-cart mr-2"></i>Ajouter
                    </button>
                    <button class="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

function createProductListItem(product) {
    const hasPromotion = product.originalPrice && product.originalPrice > product.price;
    
    return `
        <div class="product-card bg-white rounded-xl shadow-lg overflow-hidden card-hover p-6 flex items-center space-x-6"
             data-name="${product.name}" 
             data-category="${product.category}">
            <img src="${product.image}" alt="${product.name}" class="w-24 h-24 object-cover rounded-lg">
            <div class="flex-1">
                <h3 class="text-xl font-semibold text-gray-900 mb-2">${product.name}</h3>
                <p class="text-gray-600 mb-2">${product.description}</p>
                <div class="flex items-center space-x-4">
                    <span class="text-2xl font-bold text-blue-600">${window.LamitiShopping.formatPrice(product.price)}</span>
                    ${hasPromotion ? `
                        <span class="text-lg text-gray-500 line-through">${window.LamitiShopping.formatPrice(product.originalPrice)}</span>
                    ` : ''}
                    <span class="text-sm text-gray-500">${product.stock} en stock</span>
                    <span class="text-sm text-yellow-600">${product.rating} <i class="fas fa-star"></i></span>
                </div>
            </div>
            <div class="flex flex-col space-y-2">
                <button class="add-to-cart bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors" 
                        data-product-id="${product.id}"
                        data-product-name="${product.name}"
                        data-product-price="${product.price}"
                        data-product-image="${product.image}">
                    <i class="fas fa-shopping-cart mr-2"></i>Ajouter
                </button>
                <button class="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors">
                    <i class="fas fa-heart mr-2"></i>Favori
                </button>
            </div>
        </div>
    `;
}

function addProductEventListeners() {
    // Add to cart buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const productId = this.dataset.productId;
            const productName = this.dataset.productName;
            const productPrice = parseFloat(this.dataset.productPrice);
            const productImage = this.dataset.productImage;
            
            window.LamitiShopping.addToCart(productId, productName, productPrice, productImage);
        });
    });
}

function updateProductCount() {
    const countElement = document.getElementById('product-count');
    if (countElement) {
        countElement.textContent = filteredProducts.length;
    }
}

function loadMoreProducts() {
    // Simulate loading more products
    window.LamitiShopping.showNotification('Chargement de plus de produits...', 'info');
    
    // In a real application, you would fetch more products from the server
    setTimeout(() => {
        window.LamitiShopping.showNotification('Plus de produits chargés !', 'success');
    }, 1000);
}

// Quick filter functions
function quickFilter(filterType) {
    let filtered = [...sampleProducts];
    
    switch (filterType) {
        case 'promo':
            filtered = sampleProducts.filter(product => product.originalPrice && product.originalPrice > product.price);
            window.LamitiShopping.showNotification('Filtre promos appliqué', 'info');
            break;
        case 'new':
            filtered = sampleProducts.slice(0, 8); // Simulate new products
            window.LamitiShopping.showNotification('Filtre nouveautés appliqué', 'info');
            break;
        case 'bestseller':
            filtered = sampleProducts.filter(product => product.rating >= 4.5);
            window.LamitiShopping.showNotification('Filtre best-sellers appliqué', 'info');
            break;
    }
    
    filteredProducts = filtered;
    sortProducts();
    renderProducts();
    updateProductCount();
    
    // Add active filter display
    addActiveFilter(filterType);
}

function addActiveFilter(filterType) {
    const activeFiltersContainer = document.getElementById('active-filters');
    if (!activeFiltersContainer) return;
    
    activeFiltersContainer.classList.remove('hidden');
    
    const filterNames = {
        promo: 'Promotions',
        new: 'Nouveautés',
        bestseller: 'Best-sellers'
    };
    
    const filterTag = document.createElement('span');
    filterTag.className = 'bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center';
    filterTag.innerHTML = `
        ${filterNames[filterType]}
        <button onclick="removeActiveFilter('${filterType}')" class="ml-2 text-blue-600 hover:text-blue-800">
            <i class="fas fa-times text-xs"></i>
        </button>
    `;
    
    activeFiltersContainer.appendChild(filterTag);
}

function removeActiveFilter(filterType) {
    // Reset to all products
    filteredProducts = [...sampleProducts];
    sortProducts();
    renderProducts();
    updateProductCount();
    
    // Remove filter tag
    const filterTags = document.querySelectorAll('#active-filters span');
    filterTags.forEach(tag => {
        if (tag.textContent.includes('Promotions') && filterType === 'promo' ||
            tag.textContent.includes('Nouveautés') && filterType === 'new' ||
            tag.textContent.includes('Best-sellers') && filterType === 'bestseller') {
            tag.remove();
        }
    });
    
    // Hide container if no filters
    const activeFiltersContainer = document.getElementById('active-filters');
    if (activeFiltersContainer.children.length <= 1) {
        activeFiltersContainer.classList.add('hidden');
    }
}

// Search suggestions functions
function showSearchSuggestions() {
    const suggestions = document.getElementById('search-suggestions');
    if (suggestions) {
        suggestions.classList.remove('hidden');
    }
}

function hideSearchSuggestions() {
    setTimeout(() => {
        const suggestions = document.getElementById('search-suggestions');
        if (suggestions) {
            suggestions.classList.add('hidden');
        }
    }, 200);
}

// Export functions for use in other files
window.Catalogue = {
    sampleProducts,
    renderProducts,
    updateProductCount
};