import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

 
class Carousel1 extends Component {
    render() {
        return (
            <Carousel interval={3000} transitionTime={700} showStatus={false} showThumbs={false} showArrows={true} dynamicHeight={true} autoPlay infiniteLoop>
                <div>
                    <img height="300px" src="https://www.tozore.com/images/tozore/k/syl12785.jpg" />
                    <p className="legend">Criss Cross Crash</p>
                </div>
                <div>
                    <img height="300px" src="https://pagebean-pagebean.netdna-ssl.com/sciplus/productImages/Regular/63830.jpg" />
                    <p className="legend">Toy Robot Kit</p>
                </div>
                <div>
                    <img height="300px" src="https://images.crateandbarrel.com/is/image/Crate/FirestationHLSHF18/?$web_product_hero$&180807131336&wid=625&hei=625" />
                    <p className="legend">Firehouse Playset</p>
                </div>
                <div>
                    <img height="300px" src="https://li4.rightinthebox.com/images/384x384/201811/bmscfx1541406400701.jpg" />
                    <p className="legend">Magnetic Balls</p>
                </div>
                <div>
                    <img height="300px" src="https://media3.s-nbcnews.com/j/newscms/2018_42/1377791/41vkuzhlhrl_7ac8fe2098fb5192b4f9194c6279a433.fit-720w.jpg" />
                    <p className="legend">Hey Clay</p>
                </div>
            </Carousel>
        );
    }
};

export default Carousel1