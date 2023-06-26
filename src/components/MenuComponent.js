import React from 'react';
import { Card, CardImg, CardImgOverlay,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

// function RenderCard({item, isLoading, errMess}) {
    
//     if (isLoading) {
//         return(
//                 <Loading />
//         );
//     }
//     else if (errMess) {
//         return(
//                 <h4>{errMess}</h4>
//         );
//     }
//     else 
//         return(
//             <Card>
//                 <CardImg src={item.image} alt={item.name} />
//                 <CardBody>
//                 <CardTitle>{item.name}</CardTitle>
//                 {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
//                 <CardText>{item.description}</CardText>
//                 </CardBody>
//             </Card>
//         );

// }

    function RenderMenuItem ({dish, onClick}) {
        return (
            <Card>
                <Link to={`/menu/${dish.id}`} >
                <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Link>
            </Card>
        );
    }

                    // <RenderMenuItem dish={dish} onClick={props.onClick}/> below line 54
                    // <RenderCard item={props.dish} isLoading={props.dishesLoading} errMess={props.dishesErrMess}/>

    const Menu = (props) => {

        const menu = props.dishes.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-6"  key={dish.id}>
                    <RenderMenuItem dish={dish} />
                </div>
                
            );
        });
        if (props.dishes.isLoading) {
            return(
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.dishes.errMess) {
            return(
                <div className="container">
                    <div className="row">
                        <h4>{props.dishes.errMess}</h4>
                    </div>
                </div>
            );
        }
        else
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    {menu}
                </div>
            </div>
        );

    }
    
export default Menu;
