// Admin functionality for LAMITI SHOP
class AdminManager {
    constructor() {
        this.isAdmin = false;
        this.init();
    }

    init() {
        this.bindEvents();
        this.checkAdminSession();
    }

    bindEvents() {
        // Login form submission
        const loginForm = document.getElementById('admin-login-form');
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleAdminLogin();
            });
        }

        // Login button click
        const loginBtn = document.querySelector('.login-btn');
        if (loginBtn) {
            loginBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.handleAdminLogin();
            });
        }

        // Enter key in login form
        const usernameInput = document.getElementById('admin-username');
        const passwordInput = document.getElementById('admin-password');
        
        if (usernameInput && passwordInput) {
            passwordInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.handleAdminLogin();
                }
            });
        }
    }

    checkAdminSession() {
        const adminSession = localStorage.getItem('lamiti-admin');
        if (adminSession) {
            try {
                const session = JSON.parse(adminSession);
                const now = new Date();
                const loginTime = new Date(session.loginTime);
                const sessionDuration = now - loginTime;
                
                // Check if session is still valid (1 hour)
                if (sessionDuration < 3600000) {
                    this.isAdmin = true;
                    this.showAdminDashboard();
                    this.loadAdminContent();
                } else {
                    // Session expired
                    localStorage.removeItem('lamiti-admin');
                }
            } catch (error) {
                console.error('Invalid admin session:', error);
                localStorage.removeItem('lamiti-admin');
            }
        }
    }

    handleAdminLogin() {
        const username = document.getElementById('admin-username').value.trim();
        const password = document.getElementById('admin-password').value.trim();

        // Simple admin authentication (demo)
        if (username === 'admin' && password === 'lamiti2024') {
            this.isAdmin = true;
            
            // Save admin session
            localStorage.setItem('lamiti-admin', JSON.stringify({
                username,
                loginTime: new Date().toISOString()
            }));
            
            this.showAdminDashboard();
            this.showNotification('Connexion admin réussie!', 'success');
            this.loadAdminContent();
        } else {
            this.showNotification('Identifiants incorrects!', 'error');
            
            // Add shake animation to form
            const loginContainer = document.querySelector('.login-container');
            if (loginContainer) {
                loginContainer.style.animation = 'shake 0.5s ease-in-out';
                setTimeout(() => {
                    loginContainer.style.animation = '';
                }, 500);
            }
        }
    }

    showAdminDashboard() {
        const loginSection = document.getElementById('admin-login');
        const dashboardSection = document.getElementById('admin-dashboard');
        
        if (loginSection && dashboardSection) {
            loginSection.style.display = 'none';
            dashboardSection.style.display = 'block';
        }
    }

    loadAdminContent() {
        // Load dashboard stats
        this.loadDashboardStats();
        
        // Initialize charts
        this.initializeCharts();
        
        // Load products
        this.loadAdminProducts();
        
        // Load categories
        this.loadAdminCategories();
        
        // Load orders
        this.loadAdminOrders();
        
        // Load customers
        this.loadAdminCustomers();
    }

    loadDashboardStats() {
        if (!window.shop) return;
        
        const totalProducts = window.shop.products.length;
        const totalOrders = window.shop.orders.length;
        const totalRevenue = window.shop.orders.reduce((sum, order) => sum + order.total, 0);
        const lowStockItems = window.shop.products.filter(p => p.stock < 5).length;
        const pendingOrders = window.shop.orders.filter(o => o.status === 'pending').length;
        const completedOrders = window.shop.orders.filter(o => o.status === 'delivered').length;
        
        const elements = {
            'total-products': totalProducts,
            'total-orders': totalOrders,
            'total-revenue': window.shop.formatPrice(totalRevenue),
            'low-stock-items': lowStockItems,
            'pending-orders': pendingOrders,
            'completed-orders': completedOrders
        };

        Object.entries(elements).forEach(([id, value]) => {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = value;
            }
        });
    }

    initializeCharts() {
        // Initialize charts if ECharts is available
        if (typeof echarts !== 'undefined') {
            // Sales Chart
            const salesChart = echarts.init(document.getElementById('sales-chart'));
            const salesOption = {
                title: {
                    text: 'Ventes des 6 derniers mois',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'axis'
                },
                xAxis: {
                    type: 'category',
                    data: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun']
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} FCFA'
                    }
                },
                series: [{
                    data: [120000, 200000, 150000, 80000, 70000, 110000],
                    type: 'line',
                    smooth: true,
                    itemStyle: {
                        color: '#d4af37'
                    },
                    areaStyle: {
                        color: 'rgba(212, 175, 55, 0.3)'
                    }
                }]
            };
            salesChart.setOption(salesOption);
        }
    }

    loadAdminProducts() {
        // Implementation for loading products table
        console.log('Loading admin products...');
    }

    loadAdminCategories() {
        // Implementation for loading categories
        console.log('Loading admin categories...');
    }

    loadAdminOrders() {
        // Implementation for loading orders
        console.log('Loading admin orders...');
    }

    loadAdminCustomers() {
        // Implementation for loading customers
        console.log('Loading admin customers...');
    }

    logout() {
        localStorage.removeItem('lamiti-admin');
        this.isAdmin = false;
        location.reload();
    }

    showNotification(message, type = 'info', duration = 3000) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close" onclick="this.parentElement.parentElement.remove()">&times;</button>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Auto remove after duration
        setTimeout(() => {
            if (notification.parentElement) {
                notification.classList.remove('show');
                setTimeout(() => {
                    if (notification.parentElement) {
                        notification.remove();
                    }
                }, 300);
            }
        }, duration);
        
        // Show notification
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
    }
}

// Initialize admin manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.adminManager = new AdminManager();
});

// Add shake animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
`;
document.head.appendChild(style);