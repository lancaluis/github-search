import { languageColors } from '@/constants/languageColors'

export function getLanguageColor(language: string): string {
  const color = languageColors[language as keyof typeof languageColors]

  return color || '#000'
}
