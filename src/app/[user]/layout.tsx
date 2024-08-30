import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'User Repos | RI',
  description: 'User repos page',
}

export default function UserRepoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>{children}</section>
}
