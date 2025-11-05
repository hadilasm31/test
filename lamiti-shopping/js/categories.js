// Categories page JavaScript

// Category data
const categoryData = {
    vetements: {
        name: 'Vêtements',
        description: 'Collection tendance pour tous les styles',
        subcategories: [
            { name: 'T-Shirts', count: 234, image: 'https://images.unsplash.com/photo-1521572163474-824ae1b704d3?w=300&h=200&fit=crop' },
            { name: 'Chemises', count: 156, image: 'https://images.unsplash.com/photo-1596755094514-f87e53485c56?w=300&h=200&fit=crop' },
            { name: 'Pantalons', count: 189, image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=300&h=200&fit=crop' },
            { name: 'Vestes', count: 98, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=200&fit=crop' },
            { name: 'Pulls', count: 134, image: 'https://images.unsplash.com/photo-1583743814966-8936f455b1e6?w=300&h=200&fit=crop' },
            { name: 'Shorts', count: 87, image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=300&h=200&fit=crop' },
            { name: 'Robes', count: 76, image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300&h=200&fit=crop' },
            { name: 'Manteaux', count: 45, image: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=300&h=200&fit=crop' }
        ],
        featured: [
            { id: '5', name: 'T-Shirt Premium', price: 49.99, image: 'https://images.unsplash.com/photo-1521572163474-824ae1b704d3?w=400&h=300&fit=crop' },
            { id: '7', name: 'Veste en Jean', price: 159.99, image: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=400&h=300&fit=crop' },
            { id: '10', name: 'Chemise Casual', price: 69.99, image: 'https://images.unsplash.com/photo-1596755094514-f87e53485c56?w=400&h=300&fit=crop' },
            { id: '12', name: 'Pantalon Chino', price: 89.99, image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=300&fit=crop' }
        ]
    },
    accessoires: {
        name: 'Accessoires',
        description: 'Complétez votre look avec style',
        subcategories: [
            { name: 'Montres', count: 67, image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=300&h=200&fit=crop' },
            { name: 'Lunettes', count: 89, image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=200&fit=crop' },
            { name: 'Sacs', count: 134, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=200&fit=crop' },
            { name: 'Portefeuilles', count: 76, image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=200&fit=crop' },
            { name: 'Ceintures', count: 45, image: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?w=300&h=200&fit=crop' },
            { name: 'Bijoux', count: 198, image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=200&fit=crop' },
            { name: 'Chapeaux', count: 56, image: 'https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?w=300&h=200&fit=crop' },
            { name: 'Écharpes', count: 92, image: 'https://images.unsplash.com/photo-1556172732-baa72172f417?w=300&h=200&fit=crop' }
        ],
        featured: [
            { id: '3', name: 'Lunettes de Soleil', price: 89.99, image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop' },
            { id: '6', name: 'Sac à Dos Urbain', price: 79.99, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop' },
            { id: '11', name: 'Portefeuille Cuir', price: 59.99, image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop' },
            { id: '13', name: 'Montre Classic', price: 199.99, image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400&h=300&fit=crop' }
        ]
    },
    chaussures: {
        name: 'Chaussures',
        description: 'Marchez avec style et confort',
        subcategories: [
            { name: 'Baskets', count: 156, image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=300&h=200&fit=crop' },
            { name: 'Running', count: 89, image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=200&fit=crop' },
            { name: 'Boots', count: 67, image: 'https://images.unsplash.com/photo-1606107557195-0e29e996b665?w=300&h=200&fit=crop' },
            { name: 'Sandales', count: 45, image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=300&h=200&fit=crop' },
            { name: 'Chaussures habillées', count: 78, image: 'https://images.unsplash.com/photo-1531310197839-ccf54634509e?w=300&h=200&fit=crop' },
            { name: 'Espadrilles', count: 34, image: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=300&h=200&fit=crop' },
            { name: 'Tongs', count: 56, image: 'https://images.unsplash.com/photo-1603360827599-2029103bb305?w=300&h=200&fit=crop' },
            { name: 'Chaussons', count: 92, image: 'https://images.unsplash.com/photo-1575537302964-96cd56cafe42?w=300&h=200&fit=crop' }
        ],
        featured: [
            { id: '4', name: 'Chaussures Sport', price: 129.99, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop' },
            { id: '8', name: 'Baskets Lifestyle', price: 189.99, image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&h=300&fit=crop' },
            { id: '14', name: 'Sneakers Running', price: 159.99, image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop' },
            { id: '18', name: 'Boots Hiver', price: 219.99, image: 'https://images.unsplash.com/photo-1606107557195-0e29e996b665?w=400&h=300&fit=crop' }
        ]
    }
};

// Initialize categories page
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('subcategories-container')) {
        initializeCategories();
    }
});

function initializeCategories() {
    loadSubcategories();
    loadFeaturedProducts();
    
    // Check URL parameters for category
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('cat');
    if (category && categoryData[category]) {
        openCategory(category);
    }
}

function loadSubcategories() {
    const container = document.getElementById('subcategories-container');
    if (!container) return;
    
    let allSubcategories = [];
    
    // Collect all subcategories from all categories
    Object.keys(categoryData).forEach(categoryKey => {
        const category = categoryData[categoryKey];
        category.subcategories.forEach(subcat => {
            allSubcategories.push({
                ...subcat,
                parentCategory: category.name,
                parentKey: categoryKey
            });
        });
    });
    
    // Shuffle and take first 8
    allSubcategories = allSubcategories.sort(() => 0.5 - Math.random()).slice(0, 8);
    
    container.innerHTML = allSubcategories.map(subcat => `
        <div class="subcategory-item bg-white rounded-xl shadow-lg overflow-hidden card-hover cursor-pointer"
             onclick="openCategory('${subcat.parentKey}')">
            <div class="relative h-32">
                <img src="${subcat.image}" alt="${subcat.name}" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                    <h3 class="text-white font-semibold text-lg">${subcat.name}</h3>
                </div>
            </div>
            <div class="p-4">
                <p class="text-sm text-gray-600">${subcat.parentCategory}</p>
                <p class="text-lg font-bold text-blue-600">${subcat.count} produits</p>
            </div>
        </div>
    `).join('');
}

function loadFeaturedProducts() {
    const container = document.getElementById('featured-products');
    if (!container) return;
    
    // Get featured products from all categories
    let allFeatured = [];
    Object.keys(categoryData).forEach(categoryKey => {
        allFeatured = allFeatured.concat(categoryData[categoryKey].featured);
    });
    
    // Shuffle and take first 8
    allFeatured = allFeatured.sort(() => 0.5 - Math.random()).slice(0, 8);
    
    container.innerHTML = allFeatured.map(product => `
        <div class="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
            <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">${product.name}</h3>
                <div class="flex justify-between items-center">
                    <span class="text-xl font-bold text-blue-600">${window.LamitiShopping.formatPrice(product.price)}</span>
                    <button class="add-to-cart bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition-colors" 
                            data-product-id="${product.id}"
                            data-product-name="${product.name}"
                            data-product-price="${product.price}"
                            data-product-image="${product.image}">
                        <i class="fas fa-shopping-cart"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    // Add event listeners to new product cards
    addProductEventListeners();
}

function openCategory(categoryKey) {
    const category = categoryData[categoryKey];
    if (!category) return;
    
    const modal = document.getElementById('category-modal');
    const title = document.getElementById('modal-title');
    const content = document.getElementById('modal-content');
    
    if (!modal || !title || !content) return;
    
    title.textContent = category.name;
    
    content.innerHTML = `
        <div class="mb-8">
            <p class="text-xl text-gray-600 mb-6">${category.description}</p>
            
            <h4 class="text-2xl font-bold text-gray-900 mb-4">Sous-catégories</h4>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                ${category.subcategories.map(subcat => `
                    <div class="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors cursor-pointer">
                        <img src="${subcat.image}" alt="${subcat.name}" class="w-full h-24 object-cover rounded-lg mb-2">
                        <h5 class="font-semibold text-gray-900">${subcat.name}</h5>
                        <p class="text-sm text-gray-600">${subcat.count} produits</p>
                    </div>
                `).join('')}
            </div>
            
            <h4 class="text-2xl font-bold text-gray-900 mb-4">Produits recommandés</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                ${category.featured.map(product => `
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img src="${product.image}" alt="${product.name}" class="w-full h-32 object-cover">
                        <div class="p-3">
                            <h5 class="font-semibold text-gray-900 mb-1">${product.name}</h5>
                            <div class="flex justify-between items-center">
                                <span class="text-lg font-bold text-blue-600">${window.LamitiShopping.formatPrice(product.price)}</span>
                                <button class="add-to-cart bg-blue-600 text-white px-2 py-1 rounded text-sm hover:bg-blue-700 transition-colors" 
                                        data-product-id="${product.id}"
                                        data-product-name="${product.name}"
                                        data-product-price="${product.price}"
                                        data-product-image="${product.image}">
                                    <i class="fas fa-shopping-cart"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div class="flex justify-center mt-8">
            <button onclick="goToCategory('${categoryKey}')" 
                    class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Voir tous les produits
            </button>
        </div>
    `;
    
    modal.classList.remove('hidden');
    
    // Add event listeners to new product cards
    addProductEventListeners();
}

function closeCategoryModal() {
    const modal = document.getElementById('category-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

function goToCategory(categoryKey) {
    closeCategoryModal();
    window.location.href = `catalogue.html?category=${categoryKey}`;
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

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    const modal = document.getElementById('category-modal');
    if (modal && e.target === modal) {
        closeCategoryModal();
    }
});

// Export functions for use in other files
window.Categories = {
    categoryData,
    openCategory,
    closeCategoryModal
};