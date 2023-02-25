import { useState, useEffect } from 'react'
import axios, { AxiosRequestConfig } from 'axios'

/**
@function
@async
@param {string} url - The URL to make a GET request to.
@param {AxiosRequestConfig} [options] - Additional options to pass to the axios.get() method.
@returns {Promise<any>} - The data received from the GET request.
@throws {Error} - If there is an error with the request, the error will be logged to the console and the error response will be returned.
*/

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
