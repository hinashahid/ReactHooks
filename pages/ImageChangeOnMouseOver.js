import React from "react";
import ImageToggleOnMouseOver from "../src/ImageToggleOnMouseOver"

const ImageChangeOnMouseOver = () => {

    return (
        <div>            
            <ImageToggleOnMouseOver primaryImg ="/images/ImageBW.png" secondaryImg="/images/ImageColor.png"/>            
        </div>
    );
}

export default ImageChangeOnMouseOver;