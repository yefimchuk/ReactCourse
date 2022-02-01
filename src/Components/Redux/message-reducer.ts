const addnewmessage = "ADD-NEW-MESSAGE";
const updatemessagetext = "UPDATE-MESSAGE-TEXT";
let initialState = {
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

        ],
        NewMessageText: ""
    }
export const MessageReducer = (state: any = initialState, action: any) => {

    switch (action.type) {

        case updatemessagetext:

            state.NewMessageText = action.newText
            debugger
            return state
        case addnewmessage:
            let NewMessage = {
                message: state.NewMessageText
            }
            state.dialogsData.push(NewMessage)
            state.NewMessageText = '';
            return state
        default:
            return state
    }

}


export const addNewMessageActionCreator = () => {
    return {type: addnewmessage}
}
export const updateMessageTextActionCreator = (text: string) => {

    return {type: updatemessagetext, newText: text }
}

