import React from 'react';



function Addpopup(props) {
    return (
        <div>
            <div className="text-center"><button className="review_button" onClick={props.addReview}>Add Review</button></div>
        </div>
    );
}

export default Addpopup;