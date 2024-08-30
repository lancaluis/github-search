import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'primary-light': '#D4EDEE',
      primary: '#32C0C6',
      'primary-dark': '#329599',
      placeholder: '#8C8C8C',
      'grey-neutral': '#616161',
      'grey-dark': '#4E4E4E',
      'white-light': '#FFFFFF',
      'white-matte': '#F3F3F5',
      'border-and-line': '#E3E6E9',
      success: '#5CB85C',
      warning: '#FFB22B',
      danger: '#FC4B6C',
    },
    fontSize: {
      'heading-1': [
        '21px',
        {
          fontWeight: '600',
          lineHeight: '31.5px',
        },
      ],
      'heading-2': [
        '18px',
        {
          fontWeight: '600',
          lineHeight: '28px',
        },
      ],
      'heading-3': [
        '18px',
        {
          fontWeight: '500',
          lineHeight: '28px',
        },
      ],
      'heading-4': [
        '16px',
        {
          fontWeight: '600',
          lineHeight: '24px',
        },
      ],
      'heading-5': [
        '16px',
        {
          fontWeight: '400',
          lineHeight: '24px',
        },
      ],
      'paragraph-md': [
        '14px',
        {
          lineHeight: '20px',
        },
      ],
      'paragraph-sm': [
        '12px',
        {
          lineHeight: '18px',
        },
      ],
    },
  },
  plugins: [],
}
export default config
