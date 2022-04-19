import Client from './api'

export const GetAllUsers = async () => {
  try {
    const res = await Client.get('/users')
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetUserByPk = async () => {
    try {
      const res = await Client.getbyPk('/users')
      return res.data
    } catch (error) {
      throw error
    }
}

