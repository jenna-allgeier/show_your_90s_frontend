import Client from './api'

export const GetAllUsers = async () => {
  try {
    const res = await Client.get('api/users')
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetUserProfile = async (userId) => {
    try {
      const res = await Client.get(`api/users/${userId}`)
      return res.data
    } catch (error) {
      throw error
    }
}

