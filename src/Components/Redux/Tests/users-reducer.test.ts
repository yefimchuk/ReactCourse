import {
    follow,
    isLogin,
    setCurrentPage,
    setNewTotalCount,
    setUsers,
    ToggleWaitingFollow,
    unfollow,
    UsersReducers
} from "../userspage-reducer";

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

it('followed should be true when u follow', function () {
    let action = follow(1)

    let newState = UsersReducers(state, action)
    newState.users.map((u: any) => {
        if (u.id === action.id) {
            expect(u.followed).toBe(true)
        }
    })

});
it('followed should be false when u unfollow', function () {
    let action = unfollow(1)

    let newState = UsersReducers(state, action)
    newState.users.map((u: any) => {
        if (u.id === action.id) {
            expect(u.followed).toBe(false)
        }
    })

});
it('length should be 2 when u set users', function () {
    let action = setUsers([{}, {}])

    let newState = UsersReducers(state, action)

    expect(newState.users.length).toBe(2)

});
it('WaitingFollow length should be 1 when u following', function () {
    let action = ToggleWaitingFollow(true, 1)

    let newState = UsersReducers(state, action)

    expect(newState.WaitingFollow.length).toBe(1)

});

it('current page should be 15', function () {
    let action = setCurrentPage(15)

    let newState = UsersReducers(state, action)

    expect(newState.currentPage).toBe(15)

});
it('Total count page should be 228', function () {
    let action = setNewTotalCount(228)

    let newState = UsersReducers(state, action)

    expect(newState.totalUserCount).toBe(228)

});
it('IsLogin should be false', function () {
    let action = isLogin(false)

    let newState = UsersReducers(state, action)

    expect(newState.isLogin).toBe(false)

});