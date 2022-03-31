import React from "react"
import ContentLoader from "react-content-loader"
import "./Loading.scss"

const SkeletonForProfile = () => {
        return (
            <ContentLoader className="skeleton"
                           height={200}
                           width={500}
                           viewBox="0 0 530 300"
                           backgroundColor="#707079"
                           foregroundColor="#dbdbdb">

                    <rect x="0" y="0" rx="-100" ry="10" width="530" height="100"/>
                    <circle cx="50" cy="160" r="45"/>

                    <rect x="120" y="115" rx="3" ry="3" width="135" height="15"/>
                    <rect x="120" y="135" rx="3" ry="3" width="132" height="15"/>
                    <rect x="120" y="155" rx="3" ry="3" width="130" height="15"/>
                    <rect x="120" y="175" rx="3" ry="3" width="127" height="15"/>
                    <rect x="120" y="195" rx="3" ry="3" width="125" height="15"/>


                    <rect x="5" y="215" rx="3" ry="3" width="100" height="15"/>
                    <rect x="5" y="240" rx="3" ry="3" width="70" height="15"/>


            </ContentLoader>
        )
}

export default SkeletonForProfile

