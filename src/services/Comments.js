import Client from "./api";

export const GetCommentsByPostPk = async (postId) => {
  try {
    const res = await Client.get(`api/comments/${postId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const CreateComment = async (userId, postId, data) => {
  try {
    const res = await Client.post(`api/comments/${userId}/${postId}`, data);
    return res.data;
  } catch (error) {
    throw error;
  }
};
