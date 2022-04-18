import Client from "./api";


export const TestGetAllComments = () => {
    return [
        {
            id: 1,
            name: 'Cody Johnson',
            description: 'I love this memory!',
            postId: 1,
            userId: 1,
            likes: 5

        },
        {
            id: 2,
            name: 'Cody Johnson',
            description: 'Wow what a throwback!',
            postId: 2,
            userId: 1,
            likes: 5

        }
    ]
}

