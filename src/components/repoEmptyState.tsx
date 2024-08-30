import Image from 'next/image'

export const RepoEmptyState: React.FC = () => {
  return (
    <>
      <h2 className="text-heading-1 text-grey-dark my-2">
        Nenhum repositório encontrado
      </h2>
      <Image
        src="images/emptyStateImage_3.svg"
        alt="empty favorites list"
        width={230}
        height={257}
      />
    </>
  )
}
