import React from "react"

import { PhotoCard } from "../PhotoCard"

export const PhotoCardList = () => {
    return (
        <ul>
           { [1, 2, 3, 4].map( id => <PhotoCard key={id} />) }
        </ul>
    )
}