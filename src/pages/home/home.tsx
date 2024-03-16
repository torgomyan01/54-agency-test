import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import './home.scss';
import styled from 'styled-components';
import Navbar from '../../features/navbar/navbar';
import HeaderText from '../../features/header-text/header-text';
import { Fade } from 'react-awesome-reveal';
import videoPlay from '../../assets/videos/header-video.mp4';
import gsap from 'gsap';

import Scrollbar from 'smooth-scrollbar';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const H1 = styled.h1`
  color: rgb(255, 255, 255);
  font-size: 54px;
  font-weight: 500;
  line-height: 66px;
  text-align: left;
  margin-top: 100px;

  @media (max-width: 960px) {
    font-size: 38px;
    line-height: unset;
  }
  @media (max-width: 768px) {
    font-size: 30px;
  }
  @media (max-width: 468px) {
    font-size: 24px;
  }
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
  transition: 0.1s;
  &:hover {
    color: rgb(191, 231, 44);
  }

  @media (max-width: 768px) {
    font-size: 18px;
    margin-top: 24px;
  }
  @media (max-width: 480px) {
    font-size: 16px;
    margin-top: 24px;
  }
`;

const VideoBlock = styled.div`
  width: 20%;
  height: 20vh;
  overflow: hidden;
  border-radius: 30px;
  transform: translateY(-550px);
  margin-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: width 0.2s;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 660px) {
    transform: translateY(0);
    width: 100%;
    height: 90vh;
  }
`;

let videoX = 0;
function Home() {
  const videoRef = useRef<any>(null);
  const containerRef = useRef<any>(null);
  const PageWrapper = useRef<any>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const container = containerRef.current;
    const element = videoRef.current;
    const PGWrapper: any = PageWrapper.current;

    if (!container || !element || !PGWrapper) {
      return;
    }

    const bodyScrollBar: any = Scrollbar.init(PGWrapper, {
      damping: 0.1
      // delegateTo: document,
      // alwaysShowTracks: true
    });
    // bodyScrollBar.setPosition(0, 0);
    // bodyScrollBar.track.xAxis.element.remove();

    ScrollTrigger.scrollerProxy(PGWrapper, {
      scrollTop(value) {
        if (arguments.length) {
          bodyScrollBar.scrollTop = value;
        }
        return bodyScrollBar.scrollTop;
      }
    });

    bodyScrollBar.addListener((e: any) => {
      ScrollTrigger.refresh();
      ScrollTrigger.update();
    });

    gsap.to(element, {
      scrollTrigger: {
        trigger: container,
        start: 'top top-=-50',
        end: 'top top-=750',
        // markers: true,
        scrub: true,
        onUpdate(self) {
          if (window.innerWidth > 660) {
            const percent = +(self.progress * 100).toFixed();
            const containerBounds = container.getBoundingClientRect();
            const elementBounds = element.getBoundingClientRect();
            const maxX = containerBounds.width - elementBounds.width;

            const elementLeft = elementBounds.left - containerBounds.left;

            const difference = (elementLeft + elementBounds.width - containerBounds.width) / 3;

            videoX = difference > 0 ? videoX - difference : videoX;
            gsap.to(element, {
              x: videoX,
              y: -(550 - (550 * percent) / 100),
              width: percent >= 20 ? `${percent}%` : '20%',
              height: percent >= 30 ? `${percent - 10}vh` : '20vh',
              ease: 'power2.out'
            });
          }
        }
      }
    });

    const onMouseMove = (event: any) => {
      const containerBounds = container.getBoundingClientRect();
      const elementBounds = element.getBoundingClientRect();
      const maxX = containerBounds.width - elementBounds.width;
      const x = event.clientX - containerBounds.left;

      videoX = videoX + event.movementX;

      // console.log(videoX);
      if (videoX < 0) {
        videoX = 0;
      } else if (videoX > maxX) {
        videoX = maxX;
      }

      if (window.innerWidth > 660) {
        gsap.to(element, {
          x: videoX,
          // x: x < 0 ? 0 : x > maxX ? maxX : x,
          ease: 'power2.out'
        });
      }
    };

    container.addEventListener('mousemove', onMouseMove);

    return () => {
      bodyScrollBar.destroy();
      container.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  const [openVideo, setOpenVideo] = useState<boolean>(false);

  setTimeout(() => {
    setOpenVideo(true);
  }, 4000);

  return (
    <div ref={PageWrapper} className="PageWrapper">
      <Navbar />
      <div className="container " ref={containerRef}>
        <HeaderText />
        <Fade delay={3200} direction="left" duration={2000} triggerOnce>
          <H1>
            Создаем цифровые продукты, <br /> которые покоряют с первого клика
          </H1>
        </Fade>
        <Fade delay={3500} direction="left" duration={2000} triggerOnce>
          <Discuss>Обсудить ваш проект →</Discuss>
        </Fade>
        <div style={{ height: 2000, opacity: openVideo ? 1 : 0 }}>
          <VideoBlock className="video-block" ref={videoRef}>
            <video src={videoPlay} autoPlay={true} muted loop />
          </VideoBlock>
        </div>
      </div>
    </div>
  );
}

export default Home;
