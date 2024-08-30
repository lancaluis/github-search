import '@testing-library/jest-dom'

import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { useRouter } from 'next/navigation'

import { SearchBar } from '@/components/searchBar'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

describe('SearchBar', () => {
  const mockPush = jest.fn()
  const userName = 'gamadv'

  beforeEach(() => {
    ;(useRouter as jest.Mock).mockReturnValue({ push: mockPush })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('navigates to the correct URL when a search is performed', async () => {
    render(<SearchBar />)

    fireEvent.change(screen.getByPlaceholderText('Buscar usuário'), {
      target: { value: userName },
    })

    fireEvent.click(screen.getByRole('button'))

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith(`/${userName}`)
    })
  })

  it('navigates to the root URL when the search input is cleared', async () => {
    render(<SearchBar />)

    fireEvent.change(screen.getByPlaceholderText('Buscar usuário'), {
      target: { value: userName },
    })

    fireEvent.change(screen.getByPlaceholderText('Buscar usuário'), {
      target: { value: '' },
    })

    fireEvent.click(screen.getByRole('button'))

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith('/')
    })
  })
})
