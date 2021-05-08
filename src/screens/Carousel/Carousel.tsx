import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import { config } from "react-spring";
import Style from './Carousel.module.css'

import dynamic from "next/dynamic";

const Carousel = dynamic(() => import("react-spring-3d-carousel"), {
  ssr: false,
});

export default class Example extends Component {

  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.slow,
    interval: null
  };

  slides = [
    {
      key: uuidv4(),
      content: <img src="/icons/Apple_Explore.png" alt="1" />
    },
    {
        key: uuidv4(),
        content: <img  src="/icons/Apple_Explore.png" alt="2" />
    },
    {
        key: uuidv4(),
        content: <img  src="/icons/Apple_Explore.png" alt="2" />
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });


  componentDidMount(){
    const interval = setInterval(() => {
          this.setState({goToSlide: this.state.goToSlide+1 })
      }, 5000);

      this.setState({interval:interval})
  }


  componentWillUnmount(){
    clearInterval(this.state.interval)
  }

  render() {
    return (
      <div style={{ width: "100%", height: "500px",textAlign:'center',marginTop:'40px' }}>
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
           showNavigation={false}
          animationConfig={this.state.config}
        />
      </div>
    );
  }
}
