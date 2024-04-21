import { Lato } from 'next/font/google'

const lato = Lato({
    subsets: ['latin'],
    variable: '--font-lato',
    weight: '100'
})

export const fonts = {
  lato,
}