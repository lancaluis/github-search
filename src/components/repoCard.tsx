import clsx from 'clsx'
import { format } from 'date-fns'
import Link from 'next/link'

import { getLanguageColor } from '@/app/utils/getLanguageColor'
import { HeartFilled, HeartOutline } from '@/assets/icons'

export interface GithubUserRepo {
  id: number
  name: string
  description: string
  language: string
  html_url: string
  updated_at: string
  status: string
}

interface RepoCardProps {
  repo: GithubUserRepo
  isFavorited: boolean
  toggleFavorite: (repoId: number) => void
}

export const RepoCard: React.FC<RepoCardProps> = (props: RepoCardProps) => {
  const { repo, isFavorited, toggleFavorite } = props

  const parseUpdateAt = format(new Date(repo.updated_at), 'dd MMM yyyy')
  const parseColor = getLanguageColor(repo.language)

  return (
    <article className="flex flex-col justify-between my-4 p-4 w-full min-w-[896px] max-w-[896px] min-h-[140px] max-h-[140px] border-[1px] border-border-and-line rounded-[4px]">
      <header className="flex items-center justify-between">
        <Link href={repo.html_url} target="_blank" rel="noreferrer">
          <h2 className="text-heading-2 text-grey-neutral">{repo.name}</h2>
        </Link>
        <button
          aria-label="Favorite repo"
          onClick={() => toggleFavorite(repo.id)}
          className={clsx(
            isFavorited
              ? 'border-primary bg-none border-[1px]'
              : 'border-none bg-white-matte',
            'py-3 px-[10px] border-[1px] rounded-full',
          )}
        >
          {isFavorited ? (
            <HeartFilled width={18} height={16} />
          ) : (
            <HeartOutline width={18} height={16} fill="#8C8C8C" />
          )}
        </button>
      </header>
      <p className="text-placeholder text-paragraph-md line-clamp-2 max-w-[564px]">
        {repo.description}
      </p>
      <section className="flex items-center gap-6">
        {repo.language ? (
          <>
            <div className="flex items-center gap-2">
              <span
                className={`w-3 h-3 rounded-full`}
                style={{ background: parseColor }}
              />
              <span className="text-grey-neutral text-paragraph-sm">
                {repo.language}
              </span>
            </div>
          </>
        ) : (
          false
        )}
        <span className="text-grey-neutral text-paragraph-sm">
          Updated on {parseUpdateAt}
        </span>
      </section>
    </article>
  )
}
