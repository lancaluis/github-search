import { Metadata } from 'next'

import { FavoritesList } from './favoritesList'

export const metadata: Metadata = {
  title: 'Favorites | RI',
  description: 'Página de favoritos do RI',
}
export default function Favorites() {
  return (
    <main className="flex min-h-screen flex-col items-center py-6">
      <div className="text-heading-1 text-primary mb-2">Meus Favoritos</div>
      <FavoritesList />
    </main>
  )
}
