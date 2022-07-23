import 'styles/globals.scss'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { credits } from 'utils/credits'

function MyApp({ Component, pageProps }: AppProps) {
	useEffect(credits, [])
	return <Component {...pageProps} />
}

export default MyApp
