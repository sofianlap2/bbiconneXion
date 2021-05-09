import React from 'react'

const ImgComp = ({src}) => {

    let imgStyles = {
        width : 100 + "%",
        height: "60vh",
        objectFit: "contain"
    }

    return (
       <img src={src} alt="slideImg" style={imgStyles}></img>
    )
}

export default ImgComp
