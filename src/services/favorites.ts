import { FAVORITES_KEY } from '@/constants/storageKeys'

export const getFavoriteRepos = (): number[] => {
  if (typeof window === 'undefined') return [0]
  const stored = localStorage.getItem(FAVORITES_KEY)
  return stored ? JSON.parse(stored) : []
}
