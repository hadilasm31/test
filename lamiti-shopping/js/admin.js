// Admin panel JavaScript

// Sample data for admin dashboard
const adminData = {
    orders: [
        {
            id: 'CMD001',
            customer: 'Jean Dupont',
            amount: 299.99,
            status: 'validée',
            date: '2024-01-15',
            items: 3
        },
        {
            id: 'CMD002',
            customer: 'Marie Martin',
            amount: 159.99,
            status: 'expédiée',
            date: '2024-01-14',
            items: 2
        },
        {
            id: 'CMD003',
            customer: 'Pierre Bernard',
            amount: 89.99,
            status: 'en attente',
            date: '2024-01-13',
            items: 1
        },
        {
            id: 'CMD004',
            customer: 'Sophie Durand',
            amount: 449.99,
            status: 'livrée',
            date: '2024-01-12',
            items: 5
        },
        {
            id: 'CMD005',
            customer: 'Lucas Moreau',
            amount: 199.99,
            status: 'validée',
            date: '2024-01-11',
            items: 2
        }
    ],
    products: [
        {
            id: '1',
            name: 'Montre Connectée Pro',
            category: 'Électronique',
            price: 299.99,
            stock: 25,
            status: 'actif',
            image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop'
        },
        {
            id: '2',
            name: 'Casque Audio Premium',
            category: 'Électronique',
            price: 199.99,
            stock: 42,
            status: 'actif',
            image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=100&h=100&fit=crop'
        },
        {
            id: '3',
            name: 'Lunettes de Soleil',
            category: 'Accessoires',
            price: 89.99,
            stock: 67,
            status: 'actif',
            image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=100&h=100&fit=crop'
        },
        {
            id: '4',
            name: 'Chaussures Sport',
            category: 'Chaussures',
            price: 129.99,
            stock: 38,
            status: 'inactif',
            image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=100&fit=crop'
        },
        {
            id: '5',
            name: 'T-Shirt Premium',
            category: 'Vêtements',
            price: 49.99,
            stock: 156,
            status: 'actif',
            image: 'https://images.unsplash.com/photo-1521572163474-824ae1b704d3?w=100&h=100&fit=crop'
        }
    ]
};

let salesChart, categoryChart;

// Initialize admin panel
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('dashboard-section')) {
        initializeAdmin();
    }
});

function initializeAdmin() {
    loadDashboard();
    setupEventListeners();
}

function setupEventListeners() {
    // Product form submission
    const productForm = document.getElementById('product-form');
    if (productForm) {
        productForm.addEventListener('submit', handleProductSubmit);
    }
}

function showSection(sectionName) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.add('hidden'));
    
    // Show selected section
    const targetSection = document.getElementById(`${sectionName}-section`);
    if (targetSection) {
        targetSection.classList.remove('hidden');
    }
    
    // Update sidebar active state
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    sidebarItems.forEach(item => item.classList.remove('active'));
    
    const activeItem = document.querySelector(`[onclick="showSection('${sectionName}')"]`);
    if (activeItem) {
        activeItem.classList.add('active');
    }
    
    // Load section specific data
    switch (sectionName) {
        case 'dashboard':
            loadDashboard();
            break;
        case 'products':
            loadProducts();
            break;
        case 'orders':
            loadOrders();
            break;
        case 'customers':
            loadCustomers();
            break;
        case 'promotions':
            loadPromotions();
            break;
        case 'settings':
            loadSettings();
            break;
    }
}

function loadDashboard() {
    loadRecentOrders();
    initializeCharts();
}

function loadRecentOrders() {
    const ordersTable = document.getElementById('orders-table');
    if (!ordersTable) return;
    
    ordersTable.innerHTML = adminData.orders.map(order => `
        <tr class="hover:bg-gray-50">
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${order.id}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${order.customer}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${window.LamitiShopping.formatPrice(order.amount)}</td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(order.status)}">
                    ${order.status}
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${window.LamitiShopping.formatDate(order.date)}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button onclick="viewOrder('${order.id}')" class="text-blue-600 hover:text-blue-900 mr-3">
                    <i class="fas fa-eye"></i>
                </button>
                <button onclick="editOrder('${order.id}')" class="text-green-600 hover:text-green-900 mr-3">
                    <i class="fas fa-edit"></i>
                </button>
                <button onclick="deleteOrder('${order.id}')" class="text-red-600 hover:text-red-900">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

function loadProducts() {
    const productsTable = document.getElementById('products-table');
    if (!productsTable) return;
    
    productsTable.innerHTML = adminData.products.map(product => `
        <tr class="hover:bg-gray-50">
            <td class="px-6 py-4 whitespace-nowrap">
                <input type="checkbox" class="product-checkbox" value="${product.id}">
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <img src="${product.image}" alt="${product.name}" class="w-10 h-10 rounded-lg object-cover">
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                <div>
                    <div class="font-semibold">${product.name}</div>
                    <div class="text-xs text-gray-500">Réf: PRD-${product.id.padStart(6, '0')}</div>
                </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">${product.category}</span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                <div>
                    <div class="font-semibold">${window.LamitiShopping.formatPrice(product.price)}</div>
                    ${product.originalPrice ? `<div class="text-xs text-gray-500 line-through">${window.LamitiShopping.formatPrice(product.originalPrice)}</div>` : ''}
                </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                <div class="flex items-center">
                    <span class="${product.stock < 10 ? 'text-red-600' : product.stock < 50 ? 'text-yellow-600' : 'text-green-600'}">${product.stock}</span>
                    ${product.stock < 10 ? '<i class="fas fa-exclamation-triangle text-red-500 ml-1 text-xs"></i>' : ''}
                </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${product.status === 'actif' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}">
                    ${product.status}
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div class="flex space-x-2">
                    <button onclick="viewProduct('${product.id}')" class="text-blue-600 hover:text-blue-900 p-1" title="Voir">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button onclick="editProduct('${product.id}')" class="text-green-600 hover:text-green-900 p-1" title="Éditer">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button onclick="duplicateProduct('${product.id}')" class="text-purple-600 hover:text-purple-900 p-1" title="Dupliquer">
                        <i class="fas fa-copy"></i>
                    </button>
                    <button onclick="deleteProduct('${product.id}')" class="text-red-600 hover:text-red-900 p-1" title="Supprimer">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

function initializeCharts() {
    // Sales Chart
    const salesCtx = document.getElementById('salesChart');
    if (salesCtx) {
        salesChart = new Chart(salesCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun'],
                datasets: [{
                    label: 'Ventes (€)',
                    data: [12000, 19000, 15000, 25000, 22000, 30000],
                    borderColor: '#3498db',
                    backgroundColor: 'rgba(52, 152, 219, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return '€' + value.toLocaleString();
                            }
                        }
                    }
                }
            }
        });
    }
    
    // Category Chart
    const categoryCtx = document.getElementById('categoryChart');
    if (categoryCtx) {
        categoryChart = new Chart(categoryCtx, {
            type: 'doughnut',
            data: {
                labels: ['Vêtements', 'Accessoires', 'Chaussures', 'Électronique'],
                datasets: [{
                    data: [35, 25, 20, 20],
                    backgroundColor: ['#3498db', '#e74c3c', '#2ecc71', '#f39c12'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }
}

function getStatusColor(status) {
    switch (status) {
        case 'en attente':
            return 'bg-yellow-100 text-yellow-800';
        case 'validée':
            return 'bg-blue-100 text-blue-800';
        case 'expédiée':
            return 'bg-purple-100 text-purple-800';
        case 'livrée':
            return 'bg-green-100 text-green-800';
        case 'annulée':
            return 'bg-red-100 text-red-800';
        default:
            return 'bg-gray-100 text-gray-800';
    }
}

function openProductModal() {
    const modal = document.getElementById('product-modal');
    if (modal) {
        modal.classList.remove('hidden');
    }
}

function closeProductModal() {
    const modal = document.getElementById('product-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

function handleProductSubmit(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target);
    const productData = Object.fromEntries(formData);
    
    // Simulate product creation/update
    window.LamitiShopping.showNotification('Produit enregistré avec succès !', 'success');
    
    // Close modal
    closeProductModal();
    
    // Refresh products list
    loadProducts();
}

// CRUD Operations
function viewOrder(orderId) {
    window.LamitiShopping.showNotification(`Visualisation de la commande ${orderId}`, 'info');
}

function editOrder(orderId) {
    window.LamitiShopping.showNotification(`Modification de la commande ${orderId}`, 'info');
}

function deleteOrder(orderId) {
    if (confirm(`Êtes-vous sûr de vouloir supprimer la commande ${orderId} ?`)) {
        // Remove from data
        adminData.orders = adminData.orders.filter(order => order.id !== orderId);
        loadRecentOrders();
        window.LamitiShopping.showNotification('Commande supprimée avec succès', 'success');
    }
}

function viewProduct(productId) {
    window.LamitiShopping.showNotification(`Visualisation du produit ${productId}`, 'info');
}

function editProduct(productId) {
    openProductModal();
    window.LamitiShopping.showNotification(`Modification du produit ${productId}`, 'info');
}

function duplicateProduct(productId) {
    const product = adminData.products.find(p => p.id === productId);
    if (product) {
        const newProduct = { ...product, id: window.LamitiShopping.generateId(), name: product.name + ' (Copie)' };
        adminData.products.push(newProduct);
        loadProducts();
        window.LamitiShopping.showNotification('Produit dupliqué avec succès', 'success');
    }
}

function deleteProduct(productId) {
    if (confirm(`Êtes-vous sûr de vouloir supprimer le produit ${productId} ?`)) {
        // Remove from data
        adminData.products = adminData.products.filter(product => product.id !== productId);
        loadProducts();
        window.LamitiShopping.showNotification('Produit supprimé avec succès', 'success');
    }
}

// Advanced functions
function exportProducts() {
    window.LamitiShopping.showNotification('Exportation des produits en cours...', 'info');
    
    // Simulate CSV export
    setTimeout(() => {
        const csvContent = "data:text/csv;charset=utf-8," + 
            "ID,Nom,Catégorie,Prix,Stock,Statut\n" +
            adminData.products.map(p => `${p.id},"${p.name}",${p.category},${p.price},${p.stock},${p.status}`).join('\n');
        
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', 'produits_lamiti.csv');
        link.click();
        
        window.LamitiShopping.showNotification('Produits exportés avec succès', 'success');
    }, 1000);
}

function importProducts() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.csv';
    input.onchange = function(e) {
        const file = e.target.files[0];
        if (file) {
            window.LamitiShopping.showNotification('Importation des produits en cours...', 'info');
            setTimeout(() => {
                window.LamitiShopping.showNotification('Produits importés avec succès', 'success');
                loadProducts();
            }, 2000);
        }
    };
    input.click();
}

function searchProducts() {
    const searchTerm = document.getElementById('product-search').value.toLowerCase();
    const filteredProducts = adminData.products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
    
    // Update table with filtered results
    const productsTable = document.getElementById('products-table');
    if (!productsTable) return;
    
    productsTable.innerHTML = filteredProducts.map(product => `
        <tr class="hover:bg-gray-50">
            <td class="px-6 py-4 whitespace-nowrap">
                <input type="checkbox" class="product-checkbox" value="${product.id}">
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <img src="${product.image}" alt="${product.name}" class="w-10 h-10 rounded-lg object-cover">
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${product.name}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${product.category}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${window.LamitiShopping.formatPrice(product.price)}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${product.stock}</td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${product.status === 'actif' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}">
                    ${product.status}
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button onclick="viewProduct('${product.id}')" class="text-blue-600 hover:text-blue-900 mr-3">
                    <i class="fas fa-eye"></i>
                </button>
                <button onclick="editProduct('${product.id}')" class="text-green-600 hover:text-green-900 mr-3">
                    <i class="fas fa-edit"></i>
                </button>
                <button onclick="deleteProduct('${product.id}')" class="text-red-600 hover:text-red-900">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

function previousPage() {
    window.LamitiShopping.showNotification('Page précédente', 'info');
}

function nextPage() {
    window.LamitiShopping.showNotification('Page suivante', 'info');
}

function loadOrders() {
    // Orders section is already loaded in dashboard
    window.LamitiShopping.showNotification('Section Commandes chargée', 'info');
}

function loadCustomers() {
    window.LamitiShopping.showNotification('Section Clients chargée', 'info');
}

function loadPromotions() {
    window.LamitiShopping.showNotification('Section Promotions chargée', 'info');
}

function loadSettings() {
    window.LamitiShopping.showNotification('Section Paramètres chargée', 'info');
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    const modal = document.getElementById('product-modal');
    if (modal && e.target === modal) {
        closeProductModal();
    }
});

// Export functions for use in other files
window.Admin = {
    showSection,
    openProductModal,
    closeProductModal,
    viewOrder,
    editOrder,
    deleteOrder,
    viewProduct,
    editProduct,
    deleteProduct
};