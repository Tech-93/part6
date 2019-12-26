import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
  }

const get = async (id) => {
  const response = await axios.get(baseUrl + '/' + id)
  return response.data
}


  const create = async content => {
    const object = { content, votes: 0 }
    const response = await axios.post(baseUrl, object)
    return response.data
  }

  const updateVote = (id, object) => axios.put(baseUrl + '/' + id, object)
    
  export default { getAll, create, updateVote, get }
