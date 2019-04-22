import React from 'react';
import './style.css'
 
const ImgDisplay = (props) => {
    return(
        <div className="image">
            <img onClick={() => props.imageClicked(props.id)} alt={props.name} src={props.image} />
        </div>
    )
}

export default ImgDisplay; 