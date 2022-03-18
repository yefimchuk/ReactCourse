import { createSelector } from 'reselect'

export const GetAuthMeId = (state : any) => {
    return state.auth.id
}
export const GetId = (state : any) => {
    return state.profilePage.id
}
export const GetReviewData = (state : any) => {
    return state.profilePage.ReviewData
}
export const GetProfile = (state : any) => {
    return state.profilePage.Profile
}
export const GetStatus = (state : any) => {
    return state.profilePage.status
}
