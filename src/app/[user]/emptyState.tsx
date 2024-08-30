import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Repo Idol | Home',
  description: 'Home page',
}

interface EmptyStateProps {
  wrongTerm?: string | undefined | string[]
}

export const EmptyState = (props: EmptyStateProps) => {
  const { wrongTerm } = props
  return (
    <main className="flex justify-center items-center flex-col">
      <h1 className="text-heading-1 text-primary mt-[136px]">{`"${wrongTerm}"`}</h1>
      <h2 className="text-heading-1 text-grey-neutral">
        Nenhum usuário encontrado
      </h2>
      <h5 className="text-heading-5 text-grey-neutral">
        Verifique se a escrita está correta ou tente novamente
      </h5>
      <Image
        src="/images/emptyStateImage_2.svg"
        alt="search empty image"
        width={230}
        height={257}
      />
    </main>
  )
}
