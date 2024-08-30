'use client'
import Skeleton from 'react-loading-skeleton'

export function ReposSkeleton() {
  return (
    <div className="w-full gap-4 flex flex-col items-center">
      {Array.from({ length: 5 }).map((_, index) => (
        <article
          key={index}
          className="flex flex-col justify-between my-4 p-4 w-full max-w-[896px] h-full min-h-[140px] max-h-[140px] border-[1px] border-border-and-line rounded-[4px]"
        >
          <header className="flex items-center justify-between">
            <Skeleton
              className="w-[220px] h-[28px] opacity-15"
              baseColor="#545976"
              duration={0.5}
            />
            <Skeleton
              className="rounded-full w-[40px] h-[40px] opacity-15"
              baseColor="#545976"
              key={index}
              duration={0.5}
            />
          </header>
          <Skeleton
            className="w-[564px] h-[30px] opacity-15"
            baseColor="#545976"
            duration={0.5}
          />
          <section className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Skeleton
                className="w-[16px] h-[16px] opacity-15 rounded-full"
                baseColor="#545976"
                duration={0.5}
              />
              <Skeleton
                className="w-[73px] h-[18px] opacity-15"
                baseColor="#545976"
                duration={0.5}
              />
            </div>

            <Skeleton
              className="w-[137px] h-[18px] opacity-15"
              baseColor="#545976"
              duration={0.5}
            />
          </section>
        </article>
      ))}
    </div>
  )
}
