import '@testing-library/jest-dom'

import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'

import { RepoCard } from '@/components/repoCard'

const repo = {
  id: 1,
  name: 'example-repo',
  description: 'This is an example repo',
  language: 'JavaScript',
  updated_at: '2022-08-16T00:00:00Z',
  html_url: 'https://github.com/gamadv',
  status: 'open',
}

describe('RepoCard', () => {
  it('renders repo information correctly', () => {
    render(
      <RepoCard repo={repo} isFavorited={false} toggleFavorite={() => {}} />,
    )

    expect(screen.getByText('example-repo')).toBeInTheDocument()
    expect(screen.getByText('This is an example repo')).toBeInTheDocument()
    expect(screen.getByText('JavaScript')).toBeInTheDocument()

    expect(
      screen.getByText(
        (content, element) =>
          content.includes('15 Aug 2022') &&
          element?.tagName.toLowerCase() === 'span',
      ),
    ).toBeInTheDocument()
  })

  it('calls toggleFavorite when the heart button is clicked', () => {
    const toggleFavorite = jest.fn()
    render(
      <RepoCard
        repo={repo}
        isFavorited={false}
        toggleFavorite={toggleFavorite}
      />,
    )

    fireEvent.click(screen.getByRole('button', { name: /Favorite/i }))
    expect(toggleFavorite).toHaveBeenCalledTimes(1)
  })
})
