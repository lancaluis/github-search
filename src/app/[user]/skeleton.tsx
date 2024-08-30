'use client'
import Skeleton from 'react-loading-skeleton'

import { ReposSkeleton } from '../favorites/skeleton'

export function UserSkeleton() {
  return (
    <div className="flex items-start gap-12 mt-[23px] mx-6">
      <section>
        <div className="flex flex-col items-center justify-center min-w-[448px] max-w-[448px] h-full min-h-[420px] max-h-[420px] px-6 py-10 rounded-[4px] border-[1px] border-border-and-line">
          <Skeleton
            className="w-[200px] h-[200px] rounded-full mb-6 opacity-15"
            baseColor="#545976"
            duration={0.5}
          />
          <div className="mb-6 flex flex-col items-center justify-center">
            <Skeleton
              className="w-[151px] h-[32px] rounded-full mb-6 opacity-15"
              baseColor="#545976"
              duration={0.5}
            />
            <Skeleton
              className="w-[153px] h-[20px] rounded-full mb-6 opacity-15"
              baseColor="#545976"
              duration={0.5}
            />
          </div>
          <Skeleton
            className="w-[400px] h-[20px] rounded-full mb-6 opacity-15"
            baseColor="#545976"
            duration={0.5}
          />
        </div>
      </section>
      <section className="h-full max-h-dvh w-full">
        <Skeleton
          className="w-[220px] h-[28px] rounded-full mb-6 opacity-15"
          baseColor="#545976"
          duration={0.5}
        />
        <ReposSkeleton />
      </section>
    </div>
  )
}
