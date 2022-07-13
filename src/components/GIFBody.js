import React from 'react';

function GifBody(props) {
    return (
        <div className='images'>
            {
                props.gifs.map((gif, index) => {
                    return <div key={index} className='image-div'><img key={index} alt="" src={gif.images.fixed_height.url} /></div>
                })
            }
        </div>
    )
}

export default GifBody;