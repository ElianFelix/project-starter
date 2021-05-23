import React from 'react';
import './Tag.css';
import tag_img from '../tag.png';

function Tag(props) {

    return (
        <div class="container">
            <img src={tag_img} className="resize" alt="tag"/>
                <div class="centered text-dark">{props.category}</div>
         </div>
    )
}

export default Tag;