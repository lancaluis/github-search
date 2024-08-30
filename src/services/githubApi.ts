export const GITHUB_API_URL = 'https://api.github.com'

type FetchError = Error & {
  info?: string
  status?: string | number
}

export const fetcher = async (url: string) => {
  const res = await fetch(url, {
    headers: {
      Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
    },
  })
  if (!res.ok) {
    const error: FetchError = new Error(
      'An error occurred while fetching the data.',
    )
    error.info = await res.json()
    error.status = res.status
    throw error
  }

  return res.json()
}

export const multiFetch = async (url: string) => {
  return Promise.all(url.split(',').map((urlItem) => fetcher(urlItem)))
}
