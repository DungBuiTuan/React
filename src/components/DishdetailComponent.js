import React from 'react';
import { Card, CardImg, CardImgOverlay, CardBody,
    CardTitle } from 'reactstrap'



function RenderDish({ dish }) {
    if (dish != null)
        return (
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay >
                    <CardTitle>{dish.name}</CardTitle>
                    <CardBody>{dish.description}</CardBody>
                </CardImgOverlay>
            </Card>
        )
    else {
        return (
            <div></div>
        )
    }
}

function RenderComments({ comments }) {
    if (comments != null) {
        const comment = comments.map((comment) => {
            return (
                <div key={comment.id}>
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author},
                            &nbsp;
                            {new Intl.DateTimeFormat('en-US',
                                {
                                    year: 'numeric',
                                    month: 'short',
                                    day: '2-digit'
                                }).format
                                (new Date(Date.parse(comment.date)))}
                        </p>
                    </li>
                </div>
            );
        });
        return (
            <div >
                <h4> Comments </h4>
                <ul>
                    {comment}
                </ul>

            </div>
        )
    }

    else {
        return (
            <div></div>
        )
    }
}

const DishDetail = (props) => {
    const dish = props.dish;
    console.log(dish);

    if (dish == null) {
        return (<div></div>);
    }
    const dishItem = RenderDish(dish);
    const commentItem = RenderComments(dish.comments);
    return (
        <div className='col-12 col-md-5 m-1'>
            {dishItem}
            {commentItem}
        </div>
    )
}

export default DishDetail