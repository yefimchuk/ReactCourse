import {follow, UsersReducers} from "./userspage-reducer";

let state = {
    users: [{
        followed: false,
        id: 1,
        name: "",
        photos: {
            small: '/social-network-React/static/media/—Pngtree—vector avatar icon_4013749.d7f0e99a072186ca4adc.png',
            large: null
        },
        status: null,
        uniqueUrlName: null
    }],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 0,
    isLogin: false,
    WaitingFollow: []
}

it('follow should be true when u follow', function () {
    let action = follow(1)

    let newState = UsersReducers(state, action)
    newState.users.map((u: any) => {
        if (u.id === action.id) {
            expect(u.followed).toBe(true)
        }
    })

});