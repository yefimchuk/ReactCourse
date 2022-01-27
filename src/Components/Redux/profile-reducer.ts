const addnewreview = "ADD-NEW-REVIEW";
const updatereviewtext = "UPDATE-REVIEW-TEXT";
const sendLike = "SEND-LIKE";
let initialState = {
    ReviewData: [
        {
            id: 1,
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp8KJh4iMd90SSfuNCU02ss6lX6CokNaWwzQ&usqp=CAU",
            likes: 1112,
            message: "Hello, i am is a doctor"
        },
        {
            id: 2,
            avatar: "https://seedsouth.com/wp-content/uploads/2021/02/Elon-Musk-1999.jpg",
            likes: 14242343,
            message: "Hello, I'm Elon Mask"
        },
        {
            id: 3,
            avatar: "https://upload.wikimedia.org/wikipedia/commons/1/16/Emblem_of_National_Aviation_University.png",
            likes: -23423,
            message: "I'm Zubin"
        },
        {
            id: 4,
            avatar: "https://www.meme-arsenal.com/memes/91e83b00c27bf4d5bb849a6ac2b81fe5.jpg",
            likes: 23423,
            message: "I love c#"
        },
    ],
    PersonalData:
        {
            avatar: "https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png",
            name: "Dmitriy Yefimchuk",
            city: "Bakhmach",
            born: "2003-01-12",
            education: "National Aviation University",
            site: "https://github.com/yefimchuk"
        },

    NewReviewText: ""

}
export const ProfileReducer = (state: any = initialState, action: { type: string; newText: string; numberLikes: { id: number; likes: number }; }) => {

    switch (action.type) {
        case addnewreview:
            let NewReview = {
                avatar: "https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png",
                likes: "0",
                message: state.NewReviewText
            }
            state.ReviewData.push(NewReview)
            state.NewReviewText = ''
            debugger
            return state
        case updatereviewtext:
            state.NewReviewText = action.newText

            return state
        case sendLike:

            state.ReviewData.filter((el: any) =>
                el.id === action.numberLikes.id ? el.likes++ : el.likes
            )

            return state

        default:
            return state

    }


}
export const addNewReviewActionCreator = () => {
    return {type: addnewreview}
}
export const updateReviewTextActionCreator = (text: string) => {

    return {type: updatereviewtext, newText: text}
}
export const sendLikesActionCreator = (numberLikes: number) => {


    return {type: sendLike, numberLikes: numberLikes}
}
