import { ProductService, OrderService, AuthService, CartService } from '../business/services.js';

// API Layer - Unified interface for presentation
export const API = {
  // Products
  async fetchProducts() { return ProductService.getAll(); },
  async fetchProduct(id) { return ProductService.getById(id); },
  async searchProducts(query) { return ProductService.search(query); },
  
  // Orders
  async fetchOrders() { return OrderService.getAll(); },
  async createOrder(orderData) { return OrderService.create(orderData); },
  async updateOrderStatus(id, status) { return OrderService.updateStatus(id, status); },
  async getOrderStats() { return OrderService.getStats(); },
  
  // Auth
  async login(email, password) { 
    const user = AuthService.login(email, password);
    if (user) AuthService.setCurrentUser(user);
    return user;
  },
  async logout() { AuthService.logout(); },
  getCurrentUser() { return AuthService.getCurrentUser(); },
  isAdmin() { const user = AuthService.getCurrentUser(); return AuthService.isAdmin(user); },
  
  // Cart
  getCart() { return CartService.getCart(); },
  addToCart(product, qty) { return CartService.addToCart(product, qty); },
  removeFromCart(id) { return CartService.removeFromCart(id); },
  clearCart() { return CartService.clearCart(); },
  getCartTotal() { return CartService.getTotal(); }
};

export default API;
