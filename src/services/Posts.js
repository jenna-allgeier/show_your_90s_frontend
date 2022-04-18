import Client from "./api";

export const GetRecentPosts = async () => {
    try {
        const res = await Client.get('api/posts/recent')
        // console.log(res.data)
        return res.data
      } catch (error) {
        throw error
      }
}

export const GetPostByPk = async () => {
    try {
        const res = await Client.get('api/posts/:post_id')
        console.log(res.data)
        return res.data
    } catch (error) {
        throw error
    }
}
