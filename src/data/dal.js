// Data Access Layer - Handles direct data operations
class DAL {
  constructor() {
    this.data = {
      products: [],
      orders: [],
      users: []
    };
    this.init();
  }

  async init() {
    // In browser, try fetch, fallback to localStorage or mock data
    if (typeof window !== 'undefined') {
      try {
        const response = await fetch('./src/data/db.json');
        if (response.ok) {
          this.data = await response.json();
          return;
        }
      } catch (e) {
        console.log('Using local data storage');
      }
      
      const stored = localStorage.getItem('luxemart_db');
      if (stored) {
        this.data = JSON.parse(stored);
      } else {
        // Mock data initialization
        this.data = {
          products: [
            { id: 1, name: "Luxury Watch", price: 299.99, category: "accessories", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=600&q=80", stock: 15 },
            { id: 2, name: "Premium Leather Bag", price: 149.99, category: "bags", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80", stock: 8 }
          ],
          orders: [],
          users: [
            { id: 1, email: "admin@luxemart.com", password: "admin123", role: "admin", name: "Admin User" }
          ]
        };
        this.save();
      }
    }
  }

  save() {
    if (typeof window !== 'undefined') {
      localStorage.setItem('luxemart_db', JSON.stringify(this.data));
    }
  }

  // Products
  getProducts() { return this.data.products; }
  getProductById(id) { return this.data.products.find(p => p.id === parseInt(id)); }
  addProduct(product) {
    product.id = Date.now();
    this.data.products.push(product);
    this.save();
    return product;
  }
  updateProduct(id, updates) {
    const index = this.data.products.findIndex(p => p.id === parseInt(id));
    if (index !== -1) {
      this.data.products[index] = { ...this.data.products[index], ...updates };
      this.save();
      return this.data.products[index];
    }
    return null;
  }
  deleteProduct(id) {
    this.data.products = this.data.products.filter(p => p.id !== parseInt(id));
    this.save();
    return true;
  }

  // Orders
  getOrders() { return this.data.orders; }
  addOrder(order) {
    order.id = 'ORD-' + Date.now();
    order.date = new Date().toISOString().split('T')[0];
    this.data.orders.unshift(order);
    this.save();
    return order;
  }
  updateOrderStatus(id, status) {
    const order = this.data.orders.find(o => o.id === id);
    if (order) {
      order.status = status;
      this.save();
      return order;
    }
    return null;
  }

  // Users
  getUsers() { return this.data.users; }
  getUserByEmail(email) { return this.data.users.find(u => u.email === email); }
  validateUser(email, password) {
    const user = this.getUserByEmail(email);
    if (user && user.password === password) {
      return { ...user, password: undefined };
    }
    return null;
  }
}

const dal = new DAL();
export default dal;
