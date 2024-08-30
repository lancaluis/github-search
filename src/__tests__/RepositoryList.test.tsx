import '@testing-library/jest-dom'

import { fireEvent, render, screen, waitFor } from '@testing-library/react'

import { RepositoryList } from '@/app/[user]/repositoryList'
import { fetcher } from '@/services/githubApi'

jest.mock('@/services/githubApi', () => ({
  fetcher: jest.fn(),
}))

const mockUserRepos = [
  {
    id: 1,
    name: 'repo1',
    description: 'Description of repo1',
    language: 'JavaScript',
    updated_at: '2022-08-15T12:34:56Z',
    html_url: 'https://github.com/gamadv/aula-agenda',
  },
  {
    id: 2,
    name: 'repo2',
    description: 'Description of repo2',
    language: 'TypeScript',
    updated_at: '2022-08-16T12:34:56Z',
    html_url: 'https://github.com/gamadv/aula-agenda',
  },
]

Object.defineProperty(window, 'scrollTo', { value: jest.fn() })

describe('RepositoryList', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('fetches and displays repositories, and handles favorites and scroll', async () => {
    ;(fetcher as jest.Mock).mockImplementation(() =>
      Promise.resolve(mockUserRepos),
    )

    render(<RepositoryList username="octocat" />)

    expect(await screen.findByText('repo1')).toBeInTheDocument()
    expect(await screen.findByText('Description of repo1')).toBeInTheDocument()
    expect(await screen.findByText('JavaScript')).toBeInTheDocument()
    expect(
      await screen.findByText('Updated on 15 Aug 2022'),
    ).toBeInTheDocument()

    expect(await screen.findByText('repo2')).toBeInTheDocument()
    expect(await screen.findByText('Description of repo2')).toBeInTheDocument()
    expect(await screen.findByText('TypeScript')).toBeInTheDocument()
    expect(
      await screen.findByText('Updated on 16 Aug 2022'),
    ).toBeInTheDocument()

    fireEvent.scroll(window, { target: { scrollY: 800 } })
    await waitFor(() => {
      expect(
        screen.getByRole('button', { name: 'Back to top' }),
      ).toBeInTheDocument()
    })

    fireEvent.click(screen.getByRole('button', { name: 'Back to top' }))
    await waitFor(() => {
      expect(window.scrollTo).toHaveBeenCalledWith({
        top: 0,
        behavior: 'smooth',
      })
    })
  })
})
