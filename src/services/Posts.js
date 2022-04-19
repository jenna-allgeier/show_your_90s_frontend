import Client from "./api";

export const GetRecentPosts = async () => {
    try {
        const res = await Client.get('api/posts/recent')
        return res.data
      } catch (error) {
        throw error
      }
}

export const GetPostByPk = async (id) => {
    try {
        const res = await Client.get(`api/posts/${id}`)
        return res.data
    } catch (error) {
        throw error
    }
}
