import {Rerender} from "../../render";

let state = {
    profilePage: {
        ReviewData: [
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
        ],
        NewReviewText: "yefimchuk"

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
                avatar: "https://awm-trade.ru/wp-content/uploads/2020/06/image2-1.jpg"
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

        ],
        dialogsData: [
            {message: "Hello"},
            {message: "Dima, how are u?"},
            {message: "Bye"},

        ]
    },
    sideBar: {

        friendsData: [
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
                avatar: "https://awm-trade.ru/wp-content/uploads/2020/06/image2-1.jpg"
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

export let AddNewReview = (message) => {
    let NewReview = {
        avatar: "https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png",
        likes: "0",
        message: message,
    }
    state.profilePage.ReviewData.push(NewReview)
Rerender(state)
state.profilePage.NewReviewText = "";
}
export let updateReviewText = (newText) => {

    state.profilePage.NewReviewText = newText
    Rerender(state)
}
export default state