import React from 'react'
import styled from 'styled-components'

const StyledFigure = styled.figure`
max-width: 300px;

figcaption {
    font-style:italic;
}

`

export default function Figure({ imageURL, caption }) {
    return (
        <figure>
            <img src={imageURL} />
            <figcaption>Neat picture taken on {caption}</figcaption>
        </figure>
    )
}
