import { useState, useEffect } from 'react'
import axios, { AxiosRequestConfig } from 'axios'

export default (url: string, options?: AxiosRequestConfig<any>) => {
	const [data, setData] = useState<any>(null)

	const getData = async () => {
		try {
			const response = await axios.get(url, options)
			setData(response.data)
		} catch (error: any) {
			if (error.response) {
				console.error(error.response)
				setData(error.response)
			} else if (error.request) {
				console.error(error.request)
			} else {
				console.error(error.message)
			}
		}
	}

	useEffect(() => {
		const controller = new AbortController()

		getData()

		return controller.abort()
	}, [url, options])

	return data
}
