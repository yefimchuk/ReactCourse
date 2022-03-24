import React, {useRef} from "react";

function getFetchUrl(query) {
    return 'https://hn.algolia.com/api/v1/search?query=' + query;
}

let News = (props) => {
    const inputEl = useRef(null);
    debugger
    const onButtonClick = () => {
        // `current` points to the mounted text input element
        inputEl.current.value();
    };
    return (
        <>
            <input ref={inputEl} type="text"/>
            <button onClick={onButtonClick}>Focus the input</button>
        </>
    );
}
export default News