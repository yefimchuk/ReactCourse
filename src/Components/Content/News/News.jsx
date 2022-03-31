import React, {useRef} from "react";
import MyLoader from "../../../common/Loading/Skeleton";
import ListingWithThumbnail from "../../../common/Loading/UsersLoading";

function getFetchUrl(query) {
    return 'https://hn.algolia.com/api/v1/search?query=' + query;
}

let News = (props) => {

    return (
        <>
<ListingWithThumbnail/>
        </>
    );
}
export default News