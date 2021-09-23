import React from 'react';
import { FaHandHolding } from 'react-icons/fa';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
function List(props) {
    return (
        <div className="col-4 card_margin">
            
                <Card>
                    
                    <CardBody className="mt-6">
                        <CardTitle tag="h5">{props.name}</CardTitle>
                        {
                            props.quantity != undefined ?
                            <CardSubtitle tag="h6" className="mb-2 text-muted">
                            Quantity:{props.quantity} 
                            </CardSubtitle>
                            :
                            <CardSubtitle tag="h6" className="mb-2 text-muted">
                             Age:{props.age}
                            </CardSubtitle>
                        }
                        {
                            props.price != undefined?
                            <CardText>Price:{props.price}</CardText>
                            :
                            <CardText>Phone:{props.phone}</CardText>
                        }
                        {/* <CardText>Price:{props.price}</CardText> */}
                        {
                            props.expiry != undefined?
                            <CardText>Expiry:{props.expiry}</CardText>
                            :
                            <CardText>Disease:{props.disease}</CardText>

                        }
                        {
                            props.onDelete != undefined?
                            <Button style={{marginRight:'10px'}} onClick={()=>props.onDelete() }>Delete</Button>
                            :
                            <Button style={{marginRight:'10px'}}>Delete</Button>
                        }
                        {
                            props.onEdit != undefined?
                            <Button onClick={()=>props.onEdit()}>Edit</Button>
                            :
                            <Button>Edit</Button>
                        }
                        
                    </CardBody>
                </Card>
            
        </div>
    );
}

export default List;