'use client'
import { FC, useEffect, useState } from 'react'
import useSWRInfinite from 'swr/infinite'

import { ArrowUp } from '@/assets/icons/arrowUp'
import { GithubUserRepo, RepoCard } from '@/components/repoCard'
import { RepoEmptyState } from '@/components/repoEmptyState'
import { FAVORITES_KEY } from '@/constants/storageKeys'
import { getFavoriteRepos } from '@/services/favorites'
import { fetcher, GITHUB_API_URL } from '@/services/githubApi'

import { ReposSkeleton } from '../favorites/skeleton'

const PAGE_SIZE = 10

interface RepositoryListProps {
  username: string
}

export const RepositoryList: FC<RepositoryListProps> = ({ username }) => {
  const [favoriteRepos, setFavoriteRepos] = useState<number[]>([])
  const [showBackToTop, setShowBackToTop] = useState(false)
  const getKey = (
    pageIndex: number,
    previousPageData: GithubUserRepo[] | null,
  ) => {
    if (previousPageData && !previousPageData.length) return null
    return username
      ? `${GITHUB_API_URL}/users/${username}/repos?per_page=${PAGE_SIZE}&page=${pageIndex + 1}`
      : null
  }

  const { data, size, setSize, isValidating, error, isLoading } =
    useSWRInfinite<GithubUserRepo[]>(getKey, fetcher)

  const reposData = data ? data.flat() : []

  const isReachingEnd = data && data[data.length - 1]?.length < PAGE_SIZE

  function handleToggleFavorite(repoId: number) {
    toggleFavoriteRepo(repoId)
    setFavoriteRepos(getFavoriteRepos())
  }

  function toggleFavoriteRepo(repoId: number): void {
    const favoriteRepos = getFavoriteRepos()
    const updatedFavorites = favoriteRepos.includes(repoId)
      ? favoriteRepos.filter((id) => id !== repoId)
      : [...favoriteRepos, repoId]
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites))
  }

  function handleBackToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const stored = localStorage.getItem(FAVORITES_KEY)
    setFavoriteRepos(stored ? JSON.parse(stored) : [])
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement
      if (
        scrollTop + clientHeight >= scrollHeight - 20 &&
        !isReachingEnd &&
        !isValidating
      ) {
        setSize(size + 1)
      }
      if (window.scrollY > window.innerHeight) {
        setShowBackToTop(true)
      } else {
        setShowBackToTop(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isReachingEnd, isValidating, size, setSize])

  if (error || (reposData.length === 0 && !isLoading)) return <RepoEmptyState />
  if (isLoading) return <ReposSkeleton />

  return reposData[0]?.status === '404' ? (
    <RepoEmptyState />
  ) : (
    <div className="overflow-auto ">
      <ul className="mt-2">
        {reposData?.map((repo: GithubUserRepo) => (
          <li key={repo.id}>
            <RepoCard
              repo={repo}
              isFavorited={favoriteRepos.includes(repo.id)}
              toggleFavorite={handleToggleFavorite}
            />
          </li>
        ))}
      </ul>
      {isValidating && (
        <div className="h-12 flex items-center mb-6">
          <p className="text-paragraph-md text-grey-dark">
            Carregando mais repositórios...
          </p>
        </div>
      )}
      {showBackToTop && (
        <button
          aria-label="Back to top"
          name="Back to top"
          className="flex items-center justify-center w-12 h-12 p-3 fixed bottom-4 left-4 bg-primary-dark text-white rounded-full shadow-lg"
          onClick={() => handleBackToTop()}
        >
          <ArrowUp />
        </button>
      )}
    </div>
  )
}
