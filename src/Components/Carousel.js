import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

 
class Carousel1 extends Component {
    render() {
        return (
            <Carousel stopOnHove={true} interval={2750} transitionTime={1000} showStatus={false} showThumbs={false} showArrows={true} dynamicHeight={true} autoPlay infiniteLoop>
                <div>
                    <img height="200px" src="https://images.unsplash.com/photo-1508896694512-1eade558679c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
                    <p className="legend">Red Volkswagon</p>
                </div>
                <div>
                    <img height="200px" src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
                    <p className="legend">Learning Toys</p>
                </div>
                <div>
                    <img height="200px" src="https://images.pexels.com/photos/1249159/pexels-photo-1249159.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    <p className="legend">Mini Animals</p>
                </div>
                <div>
                    <img height="200px" src="https://images.unsplash.com/photo-1550432163-9cb326104944?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
                    <p className="legend">WALL-E Robot</p>
                </div>
                <div>
                    <img height="200px" src="https://images.unsplash.com/photo-1558877385-6fc9b25e3adf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=1119&q=80" />
                    <p className="legend">Train Set (Small)</p>
                </div>
            </Carousel>
        );
    }
};

export default Carousel1