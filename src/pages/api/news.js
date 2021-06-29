import { v4 as uuidv4 } from 'uuid'

import mockResponse from './mock-response'

const addPostID = response => ({
	...response,
	data: response.data.map(post => ({ ...post, id: uuidv4() }))
})

export default function handler(req, res) {
	res.status(200).json(mockResponse)
}
