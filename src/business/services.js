import dal from '../data/dal.js';

// Business Logic Layer
export const ProductService = {
  getAll: () => dal.getProducts(),
  getById: (id) => dal.getProductById(id),
  create: (data) => dal.addProduct(data),
  update: (id, data) => dal.updateProduct(id, data),
  delete: (id) => dal.deleteProduct(id),
  search: (query) => {
    const products = dal.getProducts();
    return products.filter(p => 
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase())
    );
  }
};

export const OrderService = {
  getAll: () => dal.getOrders(),
  create: (data) => dal.addOrder(data),
  updateStatus: (id, status) => dal.updateOrderStatus(id, status),
  getStats: () => {
    const orders = dal.getOrders();
    const totalRevenue = orders.reduce((sum, o) => sum + (o.total || 0), 0);
    const pending = orders.filter(o => o.status === 'processing').length;
    const shipped = orders.filter(o => o.status === 'shipped').length;
    return { totalRevenue, totalOrders: orders.length, pending, shipped };
  }
};

export const AuthService = {
  login: (email, password) => dal.validateUser(email, password),
  isAdmin: (user) => user && user.role === 'admin',
  getCurrentUser: () => {
    if (typeof window !== 'undefined') {
      const stored = sessionStorage.getItem('luxemart_user');
      return stored ? JSON.parse(stored) : null;
    }
    return null;
  },
  setCurrentUser: (user) => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('luxemart_user', JSON.stringify(user));
    }
  },
  logout: () => {
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('luxemart_user');
    }
  }
};

export const CartService = {
  getCart: () => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('luxemart_cart');
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  },
  addToCart: (product, qty = 1) => {
    const cart = CartService.getCart();
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      existing.quantity += qty;
    } else {
      cart.push({ ...product, quantity: qty });
    }
    localStorage.setItem('luxemart_cart', JSON.stringify(cart));
    return cart;
  },
  removeFromCart: (id) => {
    const cart = CartService.getCart().filter(item => item.id !== id);
    localStorage.setItem('luxemart_cart', JSON.stringify(cart));
    return cart;
  },
  clearCart: () => {
    localStorage.removeItem('luxemart_cart');
    return [];
  },
  getTotal: () => {
    return CartService.getCart().reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }
};
