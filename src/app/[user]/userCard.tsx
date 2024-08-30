import Image from 'next/image'

export interface GithubUser {
  login: string
  avatar_url: string
  bio: string | null
  name: string | null
  status?: string
}

interface UserCardProps {
  user?: GithubUser
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <article
      className="flex flex-col items-center justify-center min-w-[448px] max-w-[448px] h-full min-h-[420px] max-h-[420px] px-6 py-10 rounded-[4px] border-[1px] border-border-and-line"
      aria-labelledby="user-card-title"
    >
      {user ? (
        <>
          <Image
            src={user.avatar_url}
            alt={user.name || ''}
            className="rounded-full mb-6"
            width={200}
            height={200}
            aria-label="User avatar"
          />
          <div className="mb-6 flex flex-col items-center justify-center">
            <h2
              className="text-heading-1 text-grey-neutral"
              id="user-card-title"
            >
              {user.name}
            </h2>
            <p className="text-paragraph-md text-grey-neutral"> {user.login}</p>
          </div>
          <p
            className="text-paragraph-md text-grey-neutral"
            aria-describedby="user-bio"
          >
            {user.bio || ''}
          </p>
        </>
      ) : (
        false
      )}
    </article>
  )
}
