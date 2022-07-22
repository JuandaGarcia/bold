import { SVGProps } from 'react'

const BoldLogo = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="141"
		height="50"
		fill="none"
		viewBox="0 0 141 50"
		{...props}
	>
		<mask
			id="mask0_1654_137613"
			style={{ maskType: 'alpha' }}
			width="141"
			height="50"
			x="0"
			y="0"
			maskUnits="userSpaceOnUse"
		>
			<path fill="#fff" d="M.001 0h140.654v49.778H.003L0 0z"></path>
		</mask>
		<g mask="url(#mask0_1654_137613)">
			<path
				fill="#fff"
				fillRule="evenodd"
				d="M42.446 33.766c.839 8.968 8.328 16.013 17.416 16.013 9.093 0 16.582-7.045 17.42-16.013H42.447zm17.416-19.35c-9.088 0-16.578 7.046-17.416 16.014h34.837c-.839-8.968-8.328-16.014-17.421-16.014zM84.455 49.78h14.19V0h-14.19v49.779zm42.013 0h14.189V0h-14.19v49.779h.001zM0 49.779h14.19V0H0v49.779H0zm17.593-.08V14.496c8.872.848 15.841 8.417 15.841 17.6 0 9.187-6.97 16.754-15.841 17.603zm105.569-35.203V49.7c-8.87-.849-15.841-8.416-15.841-17.6 0-9.188 6.971-16.755 15.841-17.603z"
				clipRule="evenodd"
			></path>
		</g>
	</svg>
)

export default BoldLogo
