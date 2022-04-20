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

export const AddPost = async (userId, data) => {
    try{
        const res = await Client.post(`api/posts/${userId}`, data)
        return res.data
    } catch (error) {
        throw error
    }
}

export const UpdatedPost = async (postId, data) => {
    try{
        const res = await Client.put(`api/posts/${postId}`, data)
        return res.data
    } catch (error) {
        throw error
    }
}
