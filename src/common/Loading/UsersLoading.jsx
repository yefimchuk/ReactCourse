import React from 'react'
import ContentLoader from 'react-content-loader'


const UsersLoading = props => {
    return (
        <ContentLoader
            width={1000}
            height={750}

            backgroundColor="#707079"
            foregroundColor="#4ca2d7"
            {...props}
        >




            <rect x="114" y="14" rx="6" ry="6" width="700" height="70" />
            <circle cx="57" cy="50" r="40" />
            <rect x="114" y="114" rx="6" ry="6" width="600" height="70" />
            <circle cx="57" cy="150" r="40" />
            <rect x="114" y="214" rx="6" ry="6" width="700" height="70" />
            <circle cx="57" cy="250" r="40" />
            <rect x="114" y="314" rx="6" ry="6" width="600" height="70" />
            <circle cx="57" cy="350" r="40" />
            <rect x="114" y="414" rx="6" ry="6" width="700" height="70" />
            <circle cx="57" cy="450" r="40" />
            <circle cx="57" cy="550" r="40" />
            <rect x="114" y="514" rx="6" ry="6" width="600" height="70" />
            <circle cx="57" cy="650" r="40" />
            <rect x="114" y="614" rx="6" ry="6" width="700" height="70" />

        </ContentLoader>
    )
}



export default UsersLoading