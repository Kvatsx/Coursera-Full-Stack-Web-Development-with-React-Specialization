import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetailComponent extends Component {
    constructor(props) {
        super(props);
    }

    renderComments(comments) {
        if (comments.size == 0) {
            return (
                <div></div>
            );
        }
        else {
            const cmnts = comments.map((comment) => {
                return (
                    <ul className="list-unstyled" key={comment.id}>
                        <li>{comment.comment}</li>
                        <li>-- {comment.author}, {comment.date}</li>
                    </ul>
                );
            })
            return (
                <div>
                    <h4>Comments</h4>
                    {cmnts}
                </div>
            );
        }
    }

    render () {
        const {dish} = this.props;
        if (dish != null) {
            return(
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(dish.comments)}
                    </div>
                </div>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }
}

export default DishDetailComponent;