import { ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts'

/**
 * Export the function for the chart
 * @function
 * @param {Number} props.data - The data used to create the score graph. Default value is 0.
 * @returns {JSX.Element} A JSX element that represents the ScoreGraph component.
 */

export default ({ data = 0 }: { data?: number }) => {
	return (
		<div className='score'>
			<div className='title_container'>
				<div className='Wcircle'>
					<h2 className='title'>Score</h2>
					<p className='sentence'>
						<span className='percentage'>{data * 100 + '%'}</span>
						<br></br> de votre objectif
					</p>
				</div>
			</div>
			<ResponsiveContainer width='100%' height='100%'>
				<RadialBarChart
					innerRadius='71%'
					outerRadius='95%'
					data={[
						{ name: 'score', value: data * 100, fill: '#E60000' },
						{ name: 'fill', value: 100, fill: '#FBFBFB' },
					]}
					startAngle={210}
					endAngle={-150}
				>
					<RadialBar background={{ fill: '#FBFBFB' }} dataKey='value' cornerRadius={50} />
				</RadialBarChart>
			</ResponsiveContainer>
		</div>
	)
}
