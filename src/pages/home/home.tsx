import React, { useEffect, useLayoutEffect, useRef } from 'react';
import './home.scss';
import styled from 'styled-components';
import Navbar from '../../features/navbar/navbar';
import HeaderText from '../../features/header-text/header-text';
import { Fade } from 'react-awesome-reveal';
import videoPlay from '../../assets/videos/header-video.mp4';
import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const H1 = styled.h1`
  color: rgb(255, 255, 255);
  font-size: 54px;
  font-weight: 500;
  line-height: 66px;
  text-align: left;
  margin-top: 100px;
`;

const Discuss = styled.div`
  display: inline-block;
  color: rgb(255, 255, 255);
  font-size: 24px;
  font-weight: 450;
  line-height: 28px;
  text-align: left;
  border-bottom: 1px solid #fff;
  margin-top: 46px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: rgb(191, 231, 44);
  }
`;

const VideoBlock = styled.div`
  width: 20%;
  overflow: hidden;
  border-radius: 30px;
  transform: translateY(-450px);
  margin-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  video {
    width: 100%;
    height: 100%;
  }
`;

function Home() {
  const videoRef = useRef<any>(null);
  const containerRef = useRef<any>(null);

  useEffect(() => {
    const container = containerRef.current;
    const element = videoRef.current;

    if (!container || !element) {
      return;
    }

    const onMouseMove = (event: any) => {
      const containerBounds = container.getBoundingClientRect();
      const elementBounds = element.getBoundingClientRect();
      const maxX = containerBounds.width - elementBounds.width;
      const x = event.clientX - containerBounds.left;

      gsap.to(element, {
        x: x < 0 ? 0 : x > maxX ? maxX : x,
        ease: 'power2.out'
      });
    };

    container.addEventListener('mousemove', onMouseMove);

    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: 'top top-=-100',
        end: 'top top-=500',
        // pin: true,
        onUpdate(e) {
          const boundingRect = element.getBoundingClientRect();
          const translateXValue = boundingRect.left - element.offsetLeft;

          const percent = +(e.progress * 100).toFixed();
          gsap.to(element, {
            y: -(450 - (450 * percent) / 100),
            width: percent >= 20 ? `${percent}%` : '20%',
            ease: 'power2.out'
          });
        }
      }
    });

    return () => {
      container.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="container" ref={containerRef}>
        <HeaderText />
        <Fade delay={3200} direction="left" duration={2000} triggerOnce>
          <H1>
            Создаем цифровые продукты, <br /> которые покоряют с первого клика
          </H1>
        </Fade>
        <Fade delay={3500} direction="left" duration={2000} triggerOnce>
          <Discuss>Обсудить ваш проект →</Discuss>
        </Fade>
        <div style={{ height: 2500 }}>
          <VideoBlock className="video-block" ref={videoRef}>
            <video src={videoPlay} autoPlay={true} muted loop />
          </VideoBlock>
        </div>
      </div>
    </>
  );
}

export default Home;
