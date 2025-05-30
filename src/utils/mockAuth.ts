
export interface User {
  id: string;
  email: string;
  username: string;
}

export const mockAuth = {
  signIn: async (email: string, password: string): Promise<User> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mock validation
    if (email === 'demo@codecraft.com' && password === 'password123') {
      const user = {
        id: '1',
        email: email,
        username: 'Demo User'
      };
      localStorage.setItem('codecraft_user', JSON.stringify(user));
      return user;
    }
    
    throw new Error('Invalid credentials');
  },

  signUp: async (username: string, email: string, password: string): Promise<User> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock validation
    if (email && password.length >= 6) {
      const user = {
        id: Date.now().toString(),
        email: email,
        username: username
      };
      localStorage.setItem('codecraft_user', JSON.stringify(user));
      return user;
    }
    
    throw new Error('Invalid registration data');
  },

  signInWithGoogle: async (): Promise<User> => {
    // Simulate Google OAuth
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const user = {
      id: 'google_' + Date.now(),
      email: 'user@gmail.com',
      username: 'Google User'
    };
    localStorage.setItem('codecraft_user', JSON.stringify(user));
    return user;
  },

  getCurrentUser: (): User | null => {
    const userStr = localStorage.getItem('codecraft_user');
    return userStr ? JSON.parse(userStr) : null;
  },

  signOut: () => {
    localStorage.removeItem('codecraft_user');
  }
};
