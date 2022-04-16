import Client from "./api";

export const TestGetAllPosts = () => {
    return [
    {
        id: 1,
        postName: "Tamagotchi",
        releaseDate: "1990",
        description: "Best thing to have while waiting at the Dr.'s office.",
        images: "https://m.media-amazon.com/images/I/819ZUKGJraS._AC_SX425_.jpg",
        userId: 1,
        likes: 5
    },
    {
        id: 2,
        postName: "Lava Lamp",
        releaseDate: "1990",
        description: "Sets the mood!",
        images: "https://target.scene7.com/is/image/Target/GUEST_540f59a6-44d3-4f76-b5a2-b0c4fc75a81f?wid=488&hei=488&fmt=pjpeg",
        userId: 1,
        likes: 10
    },
]
}

export const TestGetPostByPk = () => {
    return {
        id: 1,
        postName: "Tamagotchi",
        releaseDate: "1990",
        description: "Best thing to have while waiting at the Dr.'s office.",
        images: "https://m.media-amazon.com/images/I/819ZUKGJraS._AC_SX425_.jpg",
        userId: 1,
        likes: 5
    }
}