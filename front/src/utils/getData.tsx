import useGetData from './useGetData'

const baseURL = '/data.json'

export default (userId: number, stat: string) => {
	let data

	if (baseURL.endsWith('.json')) {
		data = useGetData(baseURL)
		if (data && data[stat]) {
			data = data[stat].find((el: any) => el.id === userId || el.userId === userId)
		}
	} else {
		data = useGetData(`${baseURL}/${userId}/${stat === 'infos' ? '' : stat}`)
	}

	return data
}
