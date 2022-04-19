import Client from "./api";


export const GetCommentsByPostPk = async (postId) => {
    try {
        const res = await Client.get(`api/comments/${postId}`)
        return res.data
    } catch (error) {
        throw error
    }
}