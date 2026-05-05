// API Service for AdminHub Dashboard
// Uses mock data for all operations - no real API calls

import type {
  ApiResponse,
  PaginatedApiResponse,
  Contact,
  WaitlistEntry,
  VendorSignup,
  BuyerSignup,
  BusinessCategory,
  ProductCategory,
  CreateCategoryRequest,
  CreateProductCategoryRequest,
  LoginCredentials,
  LoginResponse,
  SuspendVendorRequest,
  ReinstateVendorRequest,
  OrdersQuery,
  OrdersResponse,
  OrderItemsResponse,
  OrdersMetrics,
  TicketsResponse,
  TicketMessagesResponse,
  NotificationResponse,
  OverviewStats,
  Ticket,
} from "../types/api";

import { useAuthStore } from "../stores/authStore";
import {
  mockContacts,
  mockWaitlist,
  mockVendorSignups,
  mockBuyerSignups,
  mockOrders,
  mockBusinessCategories,
  mockProductCategories,
  mockNotifications,
  mockTickets,
  mockOverviewStats,
  paginate,
  simulateDelay,
} from "./mockData";

class ApiService {

  // Mock login - accepts any credentials
  async login(credentials: LoginCredentials): Promise<LoginResponse> {
    await simulateDelay({}, 500);
    
    // Build a structurally-valid JWT (header.payload.signature) so jwt-decode
    // can parse it and the token-expiry checks in authStore don't immediately
    // log the user back out. Expires in 24h.
    const base64UrlEncode = (obj: unknown) =>
      btoa(JSON.stringify(obj))
        .replace(/=+$/, "")
        .replace(/\+/g, "-")
        .replace(/\//g, "_");

    const nowSec = Math.floor(Date.now() / 1000);
    const header = base64UrlEncode({ alg: "none", typ: "JWT" });
    const payload = base64UrlEncode({
      sub: "user-1",
      email: credentials.email,
      iat: nowSec,
      exp: nowSec + 60 * 60 * 24,
    });
    const mockToken = `${header}.${payload}.mock-signature`;

    const { setAuth } = useAuthStore.getState();
    setAuth(mockToken, { id: "user-1", email: credentials.email, name: credentials.email.split("@")[0] });
    localStorage.setItem("auth_token", mockToken);

    return { status: 200, error: false, message: "Login successful", token: mockToken };
  }

  logout() {
    const { logout } = useAuthStore.getState();
    logout();
  }

  isAuthenticated(): boolean {
    const { isAuthenticated, checkTokenExpiry } = useAuthStore.getState();
    return isAuthenticated ? checkTokenExpiry() : false;
  }

  // Contacts
  async getContacts(page: number = 1, perPage: number = 20): Promise<PaginatedApiResponse<Contact>> {
    await simulateDelay({});
    const result = paginate(mockContacts, page, perPage);
    return {
      status: 200,
      error: false,
      message: "Success",
      data: result.data as Contact[],
      pagination: result.pagination,
    };
  }

  async getContact(id: string): Promise<ApiResponse<Contact>> {
    await simulateDelay({});
    const contact = mockContacts.find((c) => c.id === id);
    if (!contact) {
      throw new Error("Contact not found");
    }
    return { status: 200, error: false, message: "Success", data: contact };
  }

  async getAllContacts(): Promise<PaginatedApiResponse<Contact>> {
    await simulateDelay({});
    const result = paginate(mockContacts, 1, 10000);
    return {
      status: 200,
      error: false,
      message: "Success",
      data: result.data as Contact[],
      pagination: result.pagination,
    };
  }

  // Waitlist
  async getWaitlist(page: number = 1, perPage: number = 20): Promise<PaginatedApiResponse<WaitlistEntry>> {
    await simulateDelay({});
    const result = paginate(mockWaitlist, page, perPage);
    return {
      status: 200,
      error: false,
      message: "Success",
      data: result.data as unknown as WaitlistEntry[],
      pagination: result.pagination,
    };
  }

  async getWaitlistEntry(id: string): Promise<ApiResponse<WaitlistEntry>> {
    await simulateDelay({});
    const entry = mockWaitlist.find((w) => w.id === id);
    if (!entry) {
      throw new Error("Waitlist entry not found");
    }
    return { status: 200, error: false, message: "Success", data: entry as unknown as WaitlistEntry };
  }

  async getAllWaitlist(): Promise<PaginatedApiResponse<WaitlistEntry>> {
    await simulateDelay({});
    const result = paginate(mockWaitlist, 1, 10000);
    return {
      status: 200,
      error: false,
      message: "Success",
      data: result.data as unknown as WaitlistEntry[],
      pagination: result.pagination,
    };
  }

  // Vendor Signups
  async getVendorSignups(page: number = 1, perPage: number = 20): Promise<PaginatedApiResponse<VendorSignup>> {
    await simulateDelay({});
    const result = paginate(mockVendorSignups, page, perPage);
    return {
      status: 200,
      error: false,
      message: "Success",
      data: result.data as VendorSignup[],
      pagination: result.pagination,
    };
  }

  async getVendorSignup(id: string): Promise<ApiResponse<VendorSignup>> {
    await simulateDelay({});
    const signup = mockVendorSignups.find((v) => v.vendorId === id || v.id === id);
    if (!signup) {
      throw new Error("Vendor signup not found");
    }
    return { status: 200, error: false, message: "Success", data: signup };
  }

  async getAllVendorSignups(): Promise<PaginatedApiResponse<VendorSignup>> {
    await simulateDelay({});
    const result = paginate(mockVendorSignups, 1, 10000);
    return {
      status: 200,
      error: false,
      message: "Success",
      data: result.data as VendorSignup[],
      pagination: result.pagination,
    };
  }

  async toggleVendorStatus(_id: string): Promise<ApiResponse<void>> {
    await simulateDelay({});
    return { status: 200, error: false, message: "Status toggled successfully", data: undefined as never };
  }

  async approveVendor(_id: string): Promise<ApiResponse<void>> {
    await simulateDelay({});
    return { status: 200, error: false, message: "Vendor approved successfully", data: undefined as never };
  }

  async suspendVendor(_id: string, _data: SuspendVendorRequest): Promise<ApiResponse<void>> {
    await simulateDelay({});
    return { status: 200, error: false, message: "Vendor suspended successfully", data: undefined as never };
  }

  async reinstateVendor(_id: string, _data: ReinstateVendorRequest): Promise<ApiResponse<void>> {
    await simulateDelay({});
    return { status: 200, error: false, message: "Vendor reinstated successfully", data: undefined as never };
  }

  // Buyer Signups
  async getBuyerSignups(page: number = 1, perPage: number = 20): Promise<PaginatedApiResponse<BuyerSignup>> {
    await simulateDelay({});
    const result = paginate(mockBuyerSignups, page, perPage);
    return {
      status: 200,
      error: false,
      message: "Success",
      data: result.data as BuyerSignup[],
      pagination: result.pagination,
    };
  }

  async getBuyerSignup(id: string): Promise<ApiResponse<BuyerSignup>> {
    await simulateDelay({});
    const signup = mockBuyerSignups.find((b) => b.buyerId === id || b.id === id);
    if (!signup) {
      throw new Error("Buyer signup not found");
    }
    return { status: 200, error: false, message: "Success", data: signup };
  }

  async getAllBuyerSignups(): Promise<PaginatedApiResponse<BuyerSignup>> {
    await simulateDelay({});
    const result = paginate(mockBuyerSignups, 1, 10000);
    return {
      status: 200,
      error: false,
      message: "Success",
      data: result.data as BuyerSignup[],
      pagination: result.pagination,
    };
  }

  async toggleBuyerStatus(_id: string): Promise<ApiResponse<void>> {
    await simulateDelay({});
    return { status: 200, error: false, message: "Buyer status toggled successfully", data: undefined as never };
  }

  // Orders
  async getOrders(query: OrdersQuery): Promise<OrdersResponse> {
    await simulateDelay({});
    let filteredOrders = [...mockOrders];

    if (query.status) {
      filteredOrders = filteredOrders.filter((o) => o.status === query.status);
    }
    if (query.paymentMethod) {
      filteredOrders = filteredOrders.filter((o) => o.paymentMethod === query.paymentMethod);
    }

    const page = query.page || 1;
    const perPage = query.perPage || 20;
    const paginated = paginate(filteredOrders, page, perPage);

    return {
      status: 200,
      error: false,
      message: "Success",
      data: paginated.data,
      pagination: paginated.pagination,
    };
  }

  async getOrdersSummary(): Promise<ApiResponse<OrdersMetrics>> {
    await simulateDelay({});
    return {
      status: 200,
      error: false,
      message: "Success",
      data: {
        totalOrders: mockOrders.length,
        deliveredOrders: mockOrders.filter((o) => o.status === "delivered").length,
        returnedOrders: mockOrders.filter((o) => o.status === "cancelled").length,
        cancelledOrders: mockOrders.filter((o) => o.status === "cancelled").length,
        pendingOrders: mockOrders.filter((o) => o.status === "pending").length,
      },
    };
  }

  async updateOrderStatus(_id: string, status: string): Promise<ApiResponse<void>> {
    await simulateDelay({});
    return { status: 200, error: false, message: `Order status updated to ${status}`, data: undefined as never };
  }

  async getOrderItems(_orderNo: string): Promise<OrderItemsResponse> {
    await simulateDelay({});
    return {
      items: [
        {
          productId: "prod-1",
          productName: "Sample Product",
          quantity: 2,
          price: 5000,
          productImages: ["https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop"],
        },
        {
          productId: "prod-2",
          productName: "Premium Item",
          quantity: 1,
          price: 15000,
          productImages: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop"],
        },
      ],
    };
  }

  // Business Categories
  async getBusinessCategories(): Promise<ApiResponse<BusinessCategory[]>> {
    await simulateDelay({});
    return { status: 200, error: false, message: "Success", data: mockBusinessCategories };
  }

  async getBusinessCategory(id: string): Promise<ApiResponse<BusinessCategory>> {
    await simulateDelay({});
    const category = mockBusinessCategories.find((c) => c.id === id);
    if (!category) {
      throw new Error("Category not found");
    }
    return { status: 200, error: false, message: "Success", data: category };
  }

  async createBusinessCategory(data: CreateCategoryRequest): Promise<ApiResponse<BusinessCategory>> {
    await simulateDelay({});
    const newCategory: BusinessCategory = {
      id: String(Date.now()),
      categoryName: data.categoryName,
      associatedBusinesses: "0",
      createdAt: new Date().toISOString().split("T")[0],
      updatedAt: new Date().toISOString().split("T")[0],
    };
    mockBusinessCategories.push(newCategory);
    return { status: 200, error: false, message: "Success", data: newCategory };
  }

  async updateBusinessCategory(id: string, data: CreateCategoryRequest): Promise<ApiResponse<BusinessCategory>> {
    await simulateDelay({});
    const index = mockBusinessCategories.findIndex((c) => c.id === id);
    if (index === -1) {
      throw new Error("Category not found");
    }
    mockBusinessCategories[index] = { ...mockBusinessCategories[index], categoryName: data.categoryName };
    return { status: 200, error: false, message: "Success", data: mockBusinessCategories[index] };
  }

  async deleteBusinessCategory(id: string): Promise<ApiResponse<void>> {
    await simulateDelay({});
    const index = mockBusinessCategories.findIndex((c) => c.id === id);
    if (index === -1) {
      throw new Error("Category not found");
    }
    mockBusinessCategories.splice(index, 1);
    return { status: 200, error: false, message: "Category deleted successfully", data: undefined as never };
  }

  // Product Categories
  async getProductCategories(page: number = 1, perPage: number = 20): Promise<PaginatedApiResponse<ProductCategory>> {
    await simulateDelay({});
    const result = paginate(mockProductCategories, page, perPage);
    return {
      status: 200,
      error: false,
      message: "Success",
      data: result.data as unknown as ProductCategory[],
      pagination: result.pagination,
    };
  }

  async getAllProductCategories(): Promise<PaginatedApiResponse<ProductCategory>> {
    await simulateDelay({});
    const result = paginate(mockProductCategories, 1, 10000);
    return {
      status: 200,
      error: false,
      message: "Success",
      data: result.data as unknown as ProductCategory[],
      pagination: result.pagination,
    };
  }

  async createProductCategory(data: CreateProductCategoryRequest): Promise<ApiResponse<ProductCategory>> {
    await simulateDelay({});
    const newCategory: ProductCategory = {
      categoryId: String(Date.now()),
      categoryName: data.categoryName,
      associatedProducts: "0",
      createdAt: new Date().toISOString().split("T")[0],
      updatedAt: new Date().toISOString().split("T")[0],
    };
    mockProductCategories.push(newCategory);
    return { status: 200, error: false, message: "Success", data: newCategory };
  }

  async updateProductCategory(id: string, data: CreateProductCategoryRequest): Promise<ApiResponse<ProductCategory>> {
    await simulateDelay({});
    const index = mockProductCategories.findIndex((c) => c.categoryId === id);
    if (index === -1) {
      throw new Error("Category not found");
    }
    mockProductCategories[index] = { ...mockProductCategories[index], categoryName: data.categoryName };
    return { status: 200, error: false, message: "Success", data: mockProductCategories[index] };
  }

  async deleteProductCategory(id: string): Promise<ApiResponse<void>> {
    await simulateDelay({});
    const index = mockProductCategories.findIndex((c) => c.categoryId === id);
    if (index === -1) {
      throw new Error("Category not found");
    }
    mockProductCategories.splice(index, 1);
    return { status: 200, error: false, message: "Category deleted successfully", data: undefined as never };
  }

  async updateCommission(_data: { commissionRate: number }): Promise<ApiResponse<void>> {
    await simulateDelay({});
    return { status: 200, error: false, message: "Commission rate updated successfully", data: undefined as never };
  }

  async getCommission(): Promise<ApiResponse<{ commissionRate: number }>> {
    await simulateDelay({});
    return { status: 200, error: false, message: "Success", data: { commissionRate: 5.0 } };
  }

  // Tickets
  async getTickets(page: number = 1, perPage: number = 10, search?: string): Promise<TicketsResponse> {
    await simulateDelay({});
    let filteredTickets = [...mockTickets];

    if (search) {
      filteredTickets = filteredTickets.filter(
        (t) => t.subject.toLowerCase().includes(search.toLowerCase())
      );
    }

    const paginated = paginate(filteredTickets, page, perPage);
    return {
      tickets: paginated.data as unknown as Ticket[],
      pagination: paginated.pagination,
    };
  }

  async getTicketMessages(ticketId: string): Promise<TicketMessagesResponse> {
    await simulateDelay({});
    return {
      messages: [
        { 
          messageId: "msg-1", 
          ticketId,
          message: "Initial ticket message", 
          messageType: "TEXT",
          senderType: "BUYER",
          senderId: "user-1",
          senderInfo: { id: "user-1", name: "John Doe", email: "john@example.com", type: "BUYER" },
          isOwnMessage: false,
          isRead: true,
          createdAt: new Date().toISOString() 
        },
        { 
          messageId: "msg-2", 
          ticketId,
          message: "Support response", 
          messageType: "TEXT",
          senderType: "ADMIN",
          senderId: "admin-1",
          senderInfo: { id: "admin-1", name: "Admin", email: "admin@adminhub.com", type: "ADMIN" },
          isOwnMessage: true,
          isRead: true,
          createdAt: new Date().toISOString() 
        },
      ],
    };
  }

  async replyToTicket(_ticketId: string, _message: string): Promise<ApiResponse<void>> {
    await simulateDelay({});
    return { status: 200, error: false, message: "Reply sent successfully", data: undefined as never };
  }

  // Notifications
  async getNotifications(options?: { page?: number; perPage?: number }): Promise<NotificationResponse> {
    await simulateDelay({});
    const page = options?.page || 1;
    const perPage = options?.perPage || 10;
    const paginated = paginate(mockNotifications, page, perPage);

    return {
      status: 200,
      error: false,
      message: "Success",
      notifications: paginated.data,
      unreadCount: mockNotifications.filter((n) => n.isRead === "0").length,
      pagination: paginated.pagination,
    };
  }

  async markNotificationAsRead(notificationId: string): Promise<ApiResponse<void>> {
    await simulateDelay({});
    const notification = mockNotifications.find((n) => n.notificationId === notificationId);
    if (notification) {
      notification.isRead = "1";
    }
    return { status: 200, error: false, message: "Notification marked as read", data: undefined as never };
  }

  // Overview
  async getOverviewStats(): Promise<ApiResponse<OverviewStats>> {
    await simulateDelay({});
    return { status: 200, error: false, message: "Success", data: mockOverviewStats };
  }
}

export const apiService = new ApiService();
