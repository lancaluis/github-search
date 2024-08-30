import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Repo Idol',
  description: 'Home page',
}

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col">
      <h1 className="text-heading-1 text-grey-neutral mt-[168px]">
        Procure pelo Nome ou Nome de Usuário
      </h1>
      <h5 className="text-heading-5 text-grey-neutral mb-12">
        Encontre os repositórios de algum usuário digitando no campo acima
      </h5>
      <Image
        src="/images/emptyStateImage.svg"
        alt="search empty image"
        width={230}
        height={257}
      />
    </main>
  )
}
