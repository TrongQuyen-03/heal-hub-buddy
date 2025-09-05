const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-production-api.com/api' 
  : 'http://localhost:3000/api';

// Types for API responses
export interface User {
  id: string;
  username: string;
  role: 'admin' | 'doctor' | 'patient';
  fullName: string;
  email: string;
}

export interface Patient {
  _id: string;
  userId: string;
  fullName: string;
  dob: string;
  gender: 'male' | 'female' | 'other';
  phone: string;
  address: string;
  allergies: string[];
  createdAt: string;
}

export interface Appointment {
  _id: string;
  patientId: string;
  doctorId: string;
  date: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  notes?: string;
  createdAt: string;
}

export interface Visit {
  _id: string;
  patientId: string;
  doctorId: string;
  appointmentId?: string;
  date: string;
  symptoms?: string;
  diagnosis?: string;
  prescriptions: Array<{
    medicine: string;
    dose: string;
    duration: string;
  }>;
  notes?: string;
  createdAt: string;
}

export interface MedicalRecord {
  _id: string;
  patientId: string;
  title: string;
  fileUrl: string;
  uploadedAt: string;
}

export interface DashboardStats {
  totalPatients: number;
  totalDoctors: number;
  totalAppointments: number;
  todayAppointments: number;
  totalVisits: number;
  upcomingAppointments: Appointment[];
}

// Helper function to get auth headers
const getAuthHeaders = () => {
  const token = localStorage.getItem('authToken');
  return {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` }),
  };
};

// Helper function to handle API responses
const handleResponse = async (response: Response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Something went wrong');
  }
  return response.json();
};

export const api = {
  // Authentication endpoints
  auth: {
    login: async (data: { username: string; password: string }) => {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      return handleResponse(response);
    },

    register: async (data: {
      username: string;
      password: string;
      role: 'admin' | 'doctor' | 'patient';
      fullName: string;
      phone: string;
      email: string;
    }) => {
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      return handleResponse(response);
    },
  },

  // Patients endpoints
  patients: {
    getAll: async (page = 1, limit = 10) => {
      const response = await fetch(`${API_BASE_URL}/patients?page=${page}&limit=${limit}`, {
        headers: getAuthHeaders(),
      });
      return handleResponse(response);
    },

    create: async (data: Omit<Patient, '_id' | 'userId' | 'createdAt'>) => {
      const response = await fetch(`${API_BASE_URL}/patients`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(data),
      });
      return handleResponse(response);
    },

    getById: async (id: string) => {
      const response = await fetch(`${API_BASE_URL}/patients/${id}`, {
        headers: getAuthHeaders(),
      });
      return handleResponse(response);
    },

    update: async (id: string, data: Partial<Patient>) => {
      const response = await fetch(`${API_BASE_URL}/patients/${id}`, {
        method: 'PUT',
        headers: getAuthHeaders(),
        body: JSON.stringify(data),
      });
      return handleResponse(response);
    },

    delete: async (id: string) => {
      const response = await fetch(`${API_BASE_URL}/patients/${id}`, {
        method: 'DELETE',
        headers: getAuthHeaders(),
      });
      return handleResponse(response);
    },
  },

  // Appointments endpoints
  appointments: {
    getAll: async (page = 1, limit = 10) => {
      const response = await fetch(`${API_BASE_URL}/appointments?page=${page}&limit=${limit}`, {
        headers: getAuthHeaders(),
      });
      return handleResponse(response);
    },

    create: async (data: Omit<Appointment, '_id' | 'createdAt'>) => {
      const response = await fetch(`${API_BASE_URL}/appointments`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(data),
      });
      return handleResponse(response);
    },

    update: async (id: string, data: Partial<Appointment>) => {
      const response = await fetch(`${API_BASE_URL}/appointments/${id}`, {
        method: 'PUT',
        headers: getAuthHeaders(),
        body: JSON.stringify(data),
      });
      return handleResponse(response);
    },
  },

  // Visits endpoints
  visits: {
    getAll: async (page = 1, limit = 10) => {
      const response = await fetch(`${API_BASE_URL}/visits?page=${page}&limit=${limit}`, {
        headers: getAuthHeaders(),
      });
      return handleResponse(response);
    },

    create: async (data: Omit<Visit, '_id' | 'createdAt'>) => {
      const response = await fetch(`${API_BASE_URL}/visits`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(data),
      });
      return handleResponse(response);
    },

    getByPatient: async (patientId: string, page = 1, limit = 10) => {
      const response = await fetch(`${API_BASE_URL}/visits/patient/${patientId}?page=${page}&limit=${limit}`, {
        headers: getAuthHeaders(),
      });
      return handleResponse(response);
    },
  },

  // Medical Records endpoints
  records: {
    upload: async (formData: FormData) => {
      const token = localStorage.getItem('authToken');
      const response = await fetch(`${API_BASE_URL}/records`, {
        method: 'POST',
        headers: {
          ...(token && { 'Authorization': `Bearer ${token}` }),
        },
        body: formData,
      });
      return handleResponse(response);
    },

    getByPatient: async (patientId: string, page = 1, limit = 10) => {
      const response = await fetch(`${API_BASE_URL}/records/patient/${patientId}?page=${page}&limit=${limit}`, {
        headers: getAuthHeaders(),
      });
      return handleResponse(response);
    },
  },

  // Chatbot endpoints
  chatbot: {
    createSession: async () => {
      const response = await fetch(`${API_BASE_URL}/chatbot/sessions`, {
        method: 'POST',
        headers: getAuthHeaders(),
      });
      return handleResponse(response);
    },

    addMessage: async (sessionId: string, data: { role: 'user' | 'bot'; text: string }) => {
      const response = await fetch(`${API_BASE_URL}/chatbot/sessions/${sessionId}/messages`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(data),
      });
      return handleResponse(response);
    },

    getSessionsByUser: async (userId: string, page = 1, limit = 10) => {
      const response = await fetch(`${API_BASE_URL}/chatbot/sessions/user/${userId}?page=${page}&limit=${limit}`, {
        headers: getAuthHeaders(),
      });
      return handleResponse(response);
    },
  },

  // Notifications endpoints
  notifications: {
    create: async (data: {
      userId: string;
      type: 'in-app' | 'email' | 'sms';
      title: string;
      message: string;
    }) => {
      const response = await fetch(`${API_BASE_URL}/notifications`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(data),
      });
      return handleResponse(response);
    },

    getByUser: async (userId: string, page = 1, limit = 10) => {
      const response = await fetch(`${API_BASE_URL}/notifications/user/${userId}?page=${page}&limit=${limit}`, {
        headers: getAuthHeaders(),
      });
      return handleResponse(response);
    },

    markAsRead: async (id: string) => {
      const response = await fetch(`${API_BASE_URL}/notifications/${id}/read`, {
        method: 'PUT',
        headers: getAuthHeaders(),
      });
      return handleResponse(response);
    },

    delete: async (id: string) => {
      const response = await fetch(`${API_BASE_URL}/notifications/${id}`, {
        method: 'DELETE',
        headers: getAuthHeaders(),
      });
      return handleResponse(response);
    },
  },

  // Dashboard endpoints
  dashboard: {
    getStats: async (): Promise<DashboardStats> => {
      const response = await fetch(`${API_BASE_URL}/dashboard/stats`, {
        headers: getAuthHeaders(),
      });
      return handleResponse(response);
    },
  },
};

// Export utility functions
export const authUtils = {
  setToken: (token: string) => {
    localStorage.setItem('authToken', token);
  },

  getToken: () => {
    return localStorage.getItem('authToken');
  },

  removeToken: () => {
    localStorage.removeItem('authToken');
  },

  isAuthenticated: () => {
    return !!localStorage.getItem('authToken');
  },
};