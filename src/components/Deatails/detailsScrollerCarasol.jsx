import * as React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function ImageGallaryComponent (){
    return (
       
            <Carousel autoPlay infiniteLoop interval="2000" transitionTime="500">
                <div>
                    <img src="https://picsum.photos/700/400?img=1" />
                    <p className="legend">My Classic Still 1</p>
                </div>
                <div>
                    <img src="https://picsum.photos/700/400?img=2" />
                    <p className="legend">My Classic Still 2</p>
                </div>
                <div>
                    <img src="https://picsum.photos/700/400?img=3" />
                    <p className="legend">My Classic Still 3</p>
                </div>
             
            </Carousel>
        
    )
}