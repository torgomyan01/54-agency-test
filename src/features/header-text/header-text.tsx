import React, { useRef } from 'react';
import styled from 'styled-components';

const HeaderTextDiv = styled.div`
  margin-top: 201px;
  text-align: center;
  perspective: 1000px;
  transition: 1s;

  &.active {
    margin-top: 151px;
    path {
      transform: rotateX(0);
    }
  }
  &.openText {
    path {
      transform: rotateX(0);
    }
  }

  svg {
    width: 100%;
    path {
      fill: #454545;
      transform: rotateX(-90deg);
      transition: 0.5s;
      transform-origin: center;
    }
  }
`;

function HeaderText() {
  const activeHeaderText = useRef<any>(null);

  setTimeout(() => {
    if (activeHeaderText.current) {
      activeHeaderText.current.classList.add('openText');
    }
  }, 1000);

  setTimeout(() => {
    if (activeHeaderText.current) {
      activeHeaderText.current.classList.add('active');
    }
  }, 2500);
  return (
    <HeaderTextDiv ref={activeHeaderText}>
      <svg
        width="1764"
        height="248"
        viewBox="0 0 1764 248"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1525.68 4.4751H1591.48L1644.78 95.9371L1698.74 4.4751H1763.88L1671.76 150.88V243H1615.5V150.222L1525.68 4.4751Z"
          fill="#808080"
          style={{ transitionDelay: '0.8s' }}
        />
        <path
          d="M1499.76 154.17H1555.03C1546.15 209.442 1501.73 247.277 1441.53 247.277C1367.17 247.277 1322.1 199.901 1322.1 123.573C1322.1 48.2319 1368.49 0.526855 1443.17 0.526855C1502.72 0.526855 1545.49 39.3489 1553.39 93.6339H1498.12C1491.86 61.0629 1467.85 46.9159 1441.2 46.9159C1407.97 46.9159 1381.65 74.8809 1381.65 123.573C1381.65 173.91 1407.64 200.888 1441.86 200.888C1466.53 200.888 1492.52 190.36 1499.76 154.17Z"
          fill="#808080"
          style={{ transitionDelay: '0.7s' }}
        />
        <path
          d="M1313.24 243H1244.81L1149.07 78.5001V243H1094.79V4.4751H1163.22L1258.96 168.975V4.4751H1313.24V243Z"
          fill="#808080"
          style={{ transitionDelay: '0.6s' }}
        />
        <path
          d="M896.372 243V4.4751H1079.3V53.8251H952.631V95.6081H1072.39V145.287H952.631V193.321H1079.3V243H896.372Z"
          fill="#808080"
          style={{ transitionDelay: '0.5s' }}
        />
        <path
          d="M765.692 0.526855C818.661 0.526855 861.102 27.1759 872.617 79.1579H817.345C812.081 62.7079 795.631 46.9159 765.034 46.9159C730.489 46.9159 703.511 72.5779 703.511 122.915C703.511 173.252 728.186 200.888 766.021 200.888C792.012 200.888 818.99 191.018 818.99 160.75V156.144H761.415V110.084H875.249V243H832.15L830.505 216.68C815.042 237.736 791.683 247.277 757.467 247.277C687.39 247.277 643.962 199.243 643.962 122.915C643.962 47.5739 693.312 0.526855 765.692 0.526855Z"
          fill="#808080"
          style={{ transitionDelay: '0.4s' }}
        />
        <path
          d="M425.418 243L515.235 4.4751H577.087L667.233 243H606.039L591.563 200.559H499.443L485.296 243H425.418ZM545.832 64.0241L514.906 154.828H576.429L545.832 64.0241Z"
          fill="#808080"
          style={{ transitionDelay: '0.3s' }}
        />
        <path
          d="M306.434 75.2101L249.846 144.958H306.434V75.2101ZM393.619 144.958V192.663H360.719V243H306.434V192.663H190.297V150.222L310.382 4.4751H360.719V144.958H393.619Z"
          fill="#808080"
          style={{ transitionDelay: '0.2s' }}
        />
        <path
          d="M96.5574 207.139C120.574 207.139 138.669 192.005 138.669 164.369C138.669 135.088 118.6 120.941 97.5444 120.941C78.7914 120.941 64.9734 129.166 56.7484 144.629L7.06936 139.694L23.8484 4.4751H183.413V48.5611H68.9214L63.3284 93.3051C74.8434 85.4091 93.9254 80.8031 110.704 80.8031C153.803 80.8031 194.599 108.768 194.599 164.04C194.599 218.654 149.526 247.277 97.2154 247.277C47.8654 247.277 8.71436 220.299 0.818359 169.633H53.1294C58.0644 197.269 75.5014 207.139 96.5574 207.139Z"
          fill="#808080"
          style={{ transitionDelay: '0.1s' }}
        />
      </svg>
    </HeaderTextDiv>
  );
}

export default HeaderText;
