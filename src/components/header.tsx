import Link from 'next/link'

import { HeartOutline } from '@/assets/icons'

import { SearchBar } from './searchBar'

export const Header = () => (
  <header className="h-20 flex justify-between items-center bg-gray-800 text-white border-b-[1px] border-border-and-line">
    <section className="w-full h-full flex items-center">
      <SearchBar />
    </section>
    <section
      className="h-full bg-primary flex items-center justify-center w-full max-w-[145px] ml-auto"
      aria-label="Favoritos"
    >
      <Link
        className="h-full w-full flex items-center justify-center"
        href="/favorites"
        aria-label="Página de Favoritos"
      >
        <button
          className="flex items-center justify-center btn btn-primary gap-2"
          aria-label="Ver favoritos"
        >
          <HeartOutline fill="#fff" width={24} height={20} />
          Favoritos
        </button>
      </Link>
    </section>
  </header>
)
