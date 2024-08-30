'use client'
import { useParams } from 'next/navigation'
import useSWR from 'swr'

import { fetcher, GITHUB_API_URL } from '@/services/githubApi'

import { EmptyState } from './emptyState'
import { RepositoryList } from './repositoryList'
import { UserSkeleton } from './skeleton'
import { GithubUser, UserCard } from './userCard'

export default function User() {
  const params = useParams()
  const userSearched = params?.user
  const {
    data: userData,
    error,
    isLoading,
  } = useSWR<GithubUser>(
    userSearched ? `${GITHUB_API_URL}/users/${userSearched}` : null,
    fetcher,
  )

  if (error && !isLoading) return <EmptyState wrongTerm={userSearched ?? ''} />
  if (isLoading) return <UserSkeleton />

  return (
    <main className="flex items-start gap-12 mt-[23px] mx-6">
      <section>
        <UserCard user={userData} />
      </section>
      <section className="h-full max-h-dvh w-full">
        <h3 className="text-heading-1 text-primary">Repositórios</h3>
        <RepositoryList username={userSearched as string} />
      </section>
    </main>
  )
}
