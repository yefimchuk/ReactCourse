import React from "react";
import MessageAccounts from "./MessageInfo/MessageAccounts";
import s from "./MessageInfo/Message.module.css"


let Message = (props) => {
    let messageData = [
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
            avatar: "https://sun9-17.userapi.com/impg/6Yn-TcKq4Jnk1aFmd3lDt8PcoVrmMiQ9TnaWWw/XRvrx-r8H_c.jpg?size=502x526&quality=96&sign=64a965e82d8183e487a8c2241209948e&c_uniq_tag=6EbJMad2UYmiScU2TjbaJnZ8OaTXDKLhHoyTd25Yni0&type=album"
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
    let messageDataBLL = messageData.map(review => <MessageAccounts nickname={review.nickname}
                                                                    address={review.address}
                                                                    avatar={review.avatar}/>)

    return (
        <div className={s.account}>
            <div>
                {messageDataBLL}

            </div>

        </div>

    )
}
export default Message