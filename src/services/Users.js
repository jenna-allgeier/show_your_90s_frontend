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

export const TestGetAllUsers = () => {
    return [
    {
        id: 1,
        firstName: "Cody",
        lastName: "Johnson",
        userName: "cody.johnson",
        about: "Amazing country artist.",
        email: "cody.johnson@gmail.com",
        password: "12345"
    },
    {
        id: 2,
        firstName: "Shania",
        lastName: "Twain",
        userName: "shania.twain",
        about: "Man! I feel like a woman!",
        email: "shania.twain@gmail.com",
        password: "6789"
    }
]
}

export const TestGetUserByPk = () => {
    return {
        id: 1,
        firstName: "Cody",
        lastName: "Johnson",
        userName: "cody.johnson",
        about: "Amazing country artist.",
        email: "cody.johnson@gmail.com",
        password: "12345"
    }
}