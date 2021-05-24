import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { config } from 'react-spring';
import Style from './Carousel.module.css';

import dynamic from 'next/dynamic';


interface Props{
  onTextChange : React.Dispatch<React.SetStateAction<string>>;
}

const Carousel = dynamic(() => import('react-spring-3d-carousel'), {
    ssr: false
});

export default class Example extends Component<Props> {
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
            content: <img src="/icons/Apple_Explore.png" alt="1" />,
            text: 'DISCOVER & EXPLORE'
        },
        {
            key: uuidv4(),
            content: <img src="/icons/Apple_Explore (1).png" alt="2" />,
            text: 'DISCOVER & EXPLORE'
        },
        {
            key: uuidv4(),
            content: <img src="/icons/Apple_Explore (2).png" alt="3" />,
            text: 'MEETUP SCHEDULING'
        },
        {
            key: uuidv4(),
            content: <img src="/icons/Apple_Explore (3).png" alt="4" />,
            text: 'MULTILINGUALITY'
        },
        {
            key: uuidv4(),
            content: <img src="/icons/Apple_Explore (4).png" alt="5" />,
            text: 'VIDEO CALLS'
        },
        {
            key: uuidv4(),
            content: <img src="/icons/Apple_Explore (5).png" alt="6" />,
            text: 'CHATS'
        }
    ].map((slide, index) => {
        return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
    });

    componentDidMount() {
        const interval = setInterval(() => {
            this.setState({ goToSlide: this.state.goToSlide + 1 });
            this.props.onTextChange(this.slides[(this.state.goToSlide)%this.slides.length].text)
        }, 5000);

        this.setState({ interval: interval });
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render() {
        return (
            <div className={Style['container']} style={{  height: '500px', textAlign: 'center', marginTop: '40px' }}>
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
