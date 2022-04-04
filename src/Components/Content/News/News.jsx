import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "../../../BLL/test";


let News = (props) => {
    console.log("hello")
    let dispatch = useDispatch()
    let count = 1
    count = useSelector(state => state.toolkit.value)
    return (
        <div>
            <button>{count}</button>
            <button onClick={() => {
                dispatch(increment({hello: 1, hh: 11}))
            }}>increment
            </button>
            <button onClick={() => {
                dispatch(decrement())
            }}>decrement
            </button>
        </div>
    );
}
export default News