import React from 'react'

function TestimonialCard({description,name,image,profession}) {
    return (
        <div class='card bg-transparent border rounded p-4 mx-2'>
            <i className="fa fa-quote-left fa-2x text-primary mb-3" />
            <p>{description}</p>
            <div className="d-flex align-items-center">
                <img className="img-fluid flex-shrink-0 rounded-circle" src={image} style={{ width: 50, height: 50 }} />
                <div className="ps-3">
                    <h5 className="mb-1">{name}</h5>
                    <small>{profession}</small>
                </div>
            </div>
        </div>)
}

export default TestimonialCard