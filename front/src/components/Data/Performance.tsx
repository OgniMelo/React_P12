import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts'

type PropsType = {
	kind?: { [index: number | string]: string }
	data?: Array<{ kind: number | string; value: number }>
}

const defaultData: PropsType = {
	kind: {
		1: 'cardio',
		2: 'energy',
		3: 'endurance',
		4: 'strength',
		5: 'speed',
		6: 'intensity',
	},
	data: [
		{ kind: 1, value: 0 },
		{ kind: 2, value: 0 },
		{ kind: 3, value: 0 },
		{ kind: 4, value: 0 },
		{ kind: 5, value: 0 },
		{ kind: 6, value: 0 },
	],
}

/**
 * Export the function for the chart
 * @function
 * @param {PropsType} [data=defaultData] - Data for the chart
 * @returns {JSX.Element} A JSX element representing the performance chart component.
 */

export default ({ kind = defaultData.kind, data = defaultData.data }: PropsType) => {
	data!.map((data) => (data && typeof data.kind === 'number' ? (data.kind = kind![data.kind]) : null))

	return (
		<div className='performance'>
			<ResponsiveContainer width='100%' height='100%'>
				<RadarChart outerRadius={75} data={data}>
					<PolarGrid radialLines={false} />
					<PolarAngleAxis dataKey='kind' axisLine={false} tickLine={false} dy={4} tick={{ fontSize: 12, fontWeight: 500 }} />
					<Radar dataKey='value' fill='#FF0101' fillOpacity={0.75} stroke='transparent' />
				</RadarChart>
			</ResponsiveContainer>
		</div>
	)
}
