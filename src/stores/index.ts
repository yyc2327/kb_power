import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import type { User, Region } from '@/types'

interface AppState {
  user: User | null
  setUser: (user: User | null) => void
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      isLoading: false,
      setIsLoading: (isLoading) => set({ isLoading }),
    }),
    {
      name: 'app-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ user: state.user }),
    }
  )
)

interface KnowledgeState {
  domains: Region[]
  setDomains: (domains: Region[]) => void
  selectedDomain: string | null
  setSelectedDomain: (domainId: string | null) => void
}

export const useKnowledgeStore = create<KnowledgeState>()(
  (set) => ({
    domains: [],
    setDomains: (domains) => set({ domains }),
    selectedDomain: null,
    setSelectedDomain: (domainId) => set({ selectedDomain: domainId }),
  })
)
