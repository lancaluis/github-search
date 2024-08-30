'use client'
import { useRouter } from 'next/navigation'
import { ChangeEvent, FC, KeyboardEvent, useState } from 'react'

import { SearchOutline } from '@/assets/icons'

export const SearchBar: FC = () => {
  const [query, setQuery] = useState<string>('')
  const router = useRouter()

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value)
  }

  function handleSearch() {
    if (query.trim() === '') {
      router.push('/')
    } else {
      router.push(`/${query.trim()}`)
    }
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className="flex items-center w-full max-w-[668px] h-10 border-border-and-line border-[1px] rounded-[4px] mx-6">
      <input
        type="text"
        placeholder="Buscar usuário"
        value={query}
        onChange={(event) => handleChange(event)}
        onKeyDown={handleKeyDown}
        className="px-4 rounded-md w-full outline-none text-grey-dark"
      />
      <button
        onClick={handleSearch}
        aria-label="Buscar"
        className="pr-4"
        name="Search button"
      >
        <SearchOutline fill="#8C8C8C" width={24} height={24} />
      </button>
    </div>
  )
}
