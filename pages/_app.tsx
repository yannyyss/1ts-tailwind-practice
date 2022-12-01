import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (<section className="bg-french-rose-300 dark:bg-blue-900 transition-colors min-h-screen flex flex-col items-center justify-center">
    <Component {...pageProps} />
  </section>)
}
//bg-gradient-to-t from-bg-french-rose-300 via-purple-500 to-blue-200 Couldn't make work on dark mode