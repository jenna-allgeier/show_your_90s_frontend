import Client from './api'

export const GetAllUsers = async () => {
  try {
    const res = await Client.get('/users')
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetUserByPk = async (userId) => {
    try {
      const res = await Client.get(`api/users/${userId}`)
      console.log(res.data)
      return res.data
    } catch (error) {
      throw error
    }
}

