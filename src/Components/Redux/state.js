

let state = {
    profilePage: {
        ReviewData:  [
            {
                avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp8KJh4iMd90SSfuNCU02ss6lX6CokNaWwzQ&usqp=CAU",
                likes: "11",
                message: "Hello, i am is a doctor"
            },
            {
                avatar: "https://seedsouth.com/wp-content/uploads/2021/02/Elon-Musk-1999.jpg",
                likes: "2287278",
                message: "Hello, I'm Elon Mask"
            },
            {
                avatar: "https://upload.wikimedia.org/wikipedia/commons/1/16/Emblem_of_National_Aviation_University.png",
                likes: "-15105",
                message: "I'm Zubin"
            },
            {
                avatar: "https://www.meme-arsenal.com/memes/91e83b00c27bf4d5bb849a6ac2b81fe5.jpg",
                likes: "11105",
                message: "I love c#"
            },
        ],
        PersonalData: [
            {
                avatar: "https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png",
                name: "Dmitriy Yefimchuk",
                city: "Bakhmach",
                born: "2003-01-12",
                education: "National Aviation University",
                site: "https://github.com/yefimchuk"
            }
        ]
    },
    messagePage: {
        messageData: [
            {
                nickname: "Arthur Demenskiy",
                address: 1,
                avatar: "https://images.aif.by/007/318/b53425339c1eab74cda53465696a4aaf.jpg"
            },
            {
                nickname: "Illya Kozhevnikov",
                address: 2,
                avatar: "https://www.meme-arsenal.com/memes/91e83b00c27bf4d5bb849a6ac2b81fe5.jpg"
            },
            {
                nickname: "Oleg Razno",
                address: 3,
                avatar: "data:image/jpeg;base64,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g"
            },
            {
                nickname: "Nicolay Chernenkyi",
                address: 4,
                avatar: "https://avatarfiles.alphacoders.com/252/thumb-252847.jpg"
            },
            {
                nickname: "Anatoliy Karpenko",
                address: 5,
                avatar: "https://svirtus.cdnvideo.ru/QrQIraA4Iy9FHmMUuE-CAtBI-WM=/0x0:1200x800/1200x1200/filters:quality(100)/https://hb.bizmrg.com/cybersportru-media/24/2485176d748d488dd5886e665dd3636b.jpg?m=cfad76b0d9fd9e90c28dccecc98bf104"
            },
            {
                nickname: "Vladislav Sidorenko",
                address: 6,
                avatar: "https://lh3.googleusercontent.com/xGwxQS8E_TgS53kA02U4OW31mGgrhY6Ey5zrbEP62dFq-BJJmuiMM1B3ACCU5VW0fY8H25SjxWuLF5bWZF-R5uWH"
            }

        ]
    }
}
export default state