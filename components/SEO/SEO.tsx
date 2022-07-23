import Head from 'next/head'

const SEO = () => {
	return (
		<Head>
			<title>Bold - Dashboard</title>
			<meta name="description" content="Pon tu negocio sobre ruedas con Bold" />
			<meta
				name="author"
				content="Juan David García Rincón, juandagarciadev@gmail.com"
			/>
			<meta property="og:title" content="Bold - Dashboard" />
			<meta
				property="og:description"
				content="Pon tu negocio sobre ruedas con Bold"
			/>
			<meta
				property="og:image"
				content="https://bold-dashboard.vercel.app/img/mini.jpg"
			/>
			<meta property="og:url" content="https://bold-dashboard.vercel.app/" />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content="Bold - Dashboard" />
			<meta name="twitter:site" content="@JuandaGarciaDev" />
			<meta name="twitter:creator" content="@JuandaGarciaDev" />
			<meta
				name="twitter:image"
				content="https://bold-dashboard.vercel.app/img/mini.jpg"
			/>
			<meta
				name="twitter:image:src"
				content="https://bold-dashboard.vercel.app/img/mini.jpg"
			/>
			<meta name="twitter:image:alt" content="Bold - Dashboard" />
		</Head>
	)
}

export default SEO
