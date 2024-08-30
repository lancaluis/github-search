'use client'

import { FC, useEffect, useState } from 'react'
import useSWR from 'swr'

import { GithubUserRepo, RepoCard } from '@/components/repoCard'
import { RepoEmptyState } from '@/components/repoEmptyState'
import { FAVORITES_KEY } from '@/constants/storageKeys'
import { getFavoriteRepos } from '@/services/favorites'
import { GITHUB_API_URL, multiFetch } from '@/services/githubApi'

import { ReposSkeleton } from './skeleton'

export const FavoritesList: FC = () => {
  const [favoriteRepos, setFavoriteRepos] = useState<number[]>(
    getFavoriteRepos() || [],
  )

  const hasFavoritesList = favoriteRepos.length > 0

  const { data, error } = useSWR<GithubUserRepo[]>(
    hasFavoritesList
      ? favoriteRepos
          .map((repoId) => `${GITHUB_API_URL}/repositories/${repoId}`)
          .join(',')
      : null,
    multiFetch,
  )

  function handleToggleFavorites(repoId: number) {
    const updatedFavorites = getFavoriteRepos().filter((id) => id !== repoId)
    setFavoriteRepos(updatedFavorites)
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites))
  }

  useEffect(() => {
    setFavoriteRepos(getFavoriteRepos())
  }, [])

  if (error) return <div>Erro ao carregar repositórios favoritos.</div>
  if (hasFavoritesList && !data) return <ReposSkeleton />

  return (
    <section className="w-full gap-4 flex flex-col items-center">
      {!hasFavoritesList ? (
        <RepoEmptyState />
      ) : (
        <>
          <ul className="mt-2">
            {data?.map((repo: GithubUserRepo) => (
              <li key={repo.id}>
                <RepoCard
                  key={repo.id}
                  repo={repo}
                  isFavorited={favoriteRepos.includes(repo.id)}
                  toggleFavorite={() => handleToggleFavorites(repo.id)}
                />
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  )
}
