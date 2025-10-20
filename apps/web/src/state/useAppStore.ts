import { create } from 'zustand';

interface AppState {
  isSidebarOpen: boolean;
  theme: 'light' | 'dark';
  language: 'en' | 'ar';
  toggleSidebar: () => void;
  setTheme: (theme: 'light' | 'dark') => void;
  setLanguage: (lang: 'en' | 'ar') => void;
  updateLanguage: (lang: 'en' | 'ar') => void;
}

export const useAppStore = create<AppState>((set, get) => ({
  isSidebarOpen: false,
  theme: 'light',
  language: 'en',
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  setTheme: (theme) => set({ theme }),
  setLanguage: (language) => set({ language }),
  updateLanguage: (language) => {
    set({ language });
    // Update document direction based on language
    const dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
  }
}));

interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

export const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));

interface UserState {
  user: { name: string; email: string } | null;
  setUser: (user: { name: string; email: string }) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));