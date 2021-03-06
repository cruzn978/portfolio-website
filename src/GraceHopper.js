import React from "react";
import Plx from "react-plx";

const parallaxData = [
  {
    start: "self",
    duration: 500,
    properties: [
      {
        startValue: -100,
        endValue: 0,
        property: "translateX",
      },
      {
        startValue: 0,
        endValue: 1,
        property: "opacity",
      },
      {
        startValue: 10,
        endValue: 0,
        property: "translateY",
      },
    ],
  },
];

function GraceHopper() {
  return (
    <Plx className="MyAwesomeParallax" parallaxData={parallaxData}>
    <svg viewBox="0 0 1000 200" version="1.1">
      <title>grace-hopper-color-on-white</title>
      <desc>Created with Sketch.</desc>
      <defs>
        <linearGradient
          x1="49.9328221%"
          y1="118.093165%"
          x2="49.9328221%"
          y2="8.36798561%"
          id="linearGradient-1"
        >
          <stop stop-color="#C3161C" offset="0%"></stop>
          <stop stop-color="#C51A1C" offset="25.29%"></stop>
          <stop stop-color="#CD251D" offset="48.97%"></stop>
          <stop stop-color="#D9381F" offset="72.02%"></stop>
          <stop stop-color="#EB5221" offset="94.55%"></stop>
          <stop stop-color="#F05A22" offset="100%"></stop>
        </linearGradient>
        <linearGradient
          x1="0.00399002494%"
          y1="50.0108205%"
          x2="99.9542394%"
          y2="50.0108205%"
          id="linearGradient-2"
        >
          <stop stop-color="#8BC53F" offset="0%"></stop>
          <stop stop-color="#87C445" offset="12.23%"></stop>
          <stop stop-color="#7AC254" offset="27.82%"></stop>
          <stop stop-color="#65BE6F" offset="45.24%"></stop>
          <stop stop-color="#48B993" offset="63.97%"></stop>
          <stop stop-color="#24B3C1" offset="83.54%"></stop>
          <stop stop-color="#00ADEE" offset="100%"></stop>
        </linearGradient>
        <linearGradient
          x1="0.0234413965%"
          y1="50.0431644%"
          x2="99.9542394%"
          y2="50.0431644%"
          id="linearGradient-3"
        >
          <stop stop-color="#F05A22" offset="0%"></stop>
          <stop stop-color="#F16220" offset="3.958988%"></stop>
          <stop stop-color="#F6841A" offset="22.19%"></stop>
          <stop stop-color="#FA9F15" offset="40.81%"></stop>
          <stop stop-color="#FDB211" offset="59.76%"></stop>
          <stop stop-color="#FEBD0F" offset="79.22%"></stop>
          <stop stop-color="#FFC10E" offset="100%"></stop>
        </linearGradient>
        <linearGradient
          x1="42.9574813%"
          y1="69.8866359%"
          x2="104.678304%"
          y2="22.2674347%"
          id="linearGradient-4"
        >
          <stop stop-color="#F05A22" offset="0%"></stop>
          <stop stop-color="#DE3F20" offset="32.66%"></stop>
          <stop stop-color="#CA211D" offset="75.64%"></stop>
          <stop stop-color="#C3161C" offset="100%"></stop>
        </linearGradient>
        <linearGradient
          x1="0.014713217%"
          y1="49.9993865%"
          x2="100.023441%"
          y2="49.9993865%"
          id="linearGradient-5"
        >
          <stop stop-color="#00ADEE" offset="0%"></stop>
          <stop stop-color="#24B3C1" offset="16.46%"></stop>
          <stop stop-color="#48B993" offset="36.03%"></stop>
          <stop stop-color="#65BE6F" offset="54.76%"></stop>
          <stop stop-color="#7AC254" offset="72.18%"></stop>
          <stop stop-color="#87C445" offset="87.77%"></stop>
          <stop stop-color="#8BC53F" offset="100%"></stop>
        </linearGradient>
        <linearGradient
          x1="49.9904908%"
          y1="89.2666307%"
          x2="49.9904908%"
          y2="-6.96835853%"
          id="linearGradient-6"
        >
          <stop stop-color="#EB008B" offset="0%"></stop>
          <stop stop-color="#E70089" offset="19.56%"></stop>
          <stop stop-color="#DC0084" offset="37.89%"></stop>
          <stop stop-color="#C9007A" offset="55.73%"></stop>
          <stop stop-color="#AE006D" offset="73.27%"></stop>
          <stop stop-color="#8C005D" offset="90.43%"></stop>
          <stop stop-color="#760052" offset="100%"></stop>
        </linearGradient>
      </defs>
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g id="grace-hopper-color-on-white">
          <g id="grace-hopper-logo">
            <g id="Layer_1">
              <g id="Group">
                <g id="Shape">
                  <polygon
                    fill="url(#linearGradient-1)"
                    points="127.8 120 160.4 138.9 160.4 102.3 127.8 83.3"
                  ></polygon>
                  <polygon
                    fill="url(#linearGradient-2)"
                    points="80.2 37.6 160.4 84.1 160.4 46.9 80.2 0"
                  ></polygon>
                  <polygon
                    fill="url(#linearGradient-3)"
                    points="127.8 120.1 80.2 147.5 80.2 185.1 160.4 138.9 160.4 138.9 127.8 120"
                  ></polygon>
                  <polygon
                    fill="url(#linearGradient-4)"
                    points="0 46.3 32.6 65.1 80.2 37.6 80.2 37.6 80.2 37.6 80.2 0 80.2 0"
                  ></polygon>
                  <polygon
                    fill="url(#linearGradient-5)"
                    points="0 138.9 0 138.9 80.2 185.2 80.2 185.1 80.2 147.5 80.2 147.5 32.6 120.1 32.6 120"
                  ></polygon>
                  <polygon
                    fill="url(#linearGradient-6)"
                    points="0 46.3 0 138.9 32.6 120 32.6 65.1 32.6 65.1"
                  ></polygon>
                </g>
                <g
                  transform="translate(203.000000, 39.000000)"
                  id="Shape"
                  fill="#333333"
                >
                  <g>
                    <path d="M22,0.2 C25,0.2 27.8,0.8 30.4,1.9 C33,3 35.3,4.6 37.3,6.5 L32.2,11.6 C29.4,8.8 26.1,7.4 22.1,7.4 C18.2,7.4 14.8,8.8 12,11.6 C9.2,14.4 7.9,17.8 7.9,21.7 C7.9,25.6 9.3,29 12,31.8 C14.8,34.6 18.2,35.9 22.1,35.9 C24.2,35.9 26.2,35.5 28.1,34.6 C29.9,33.8 31.5,32.6 32.9,31 L32.9,25.1 L22,25.1 L22,18 L40,18 L40,33.3 C39,34.7 37.9,36.1 36.6,37.3 C35.3,38.5 33.9,39.5 32.4,40.4 C30.9,41.2 29.2,41.9 27.5,42.4 C25.8,42.9 24,43.1 22.1,43.1 C16.2,43.1 11.1,41 6.9,36.8 C2.7,32.6 0.6,27.6 0.6,21.6 C0.6,15.7 2.7,10.6 6.9,6.4 C11,2.3 16.1,0.2 22,0.2"></path>
                    <path d="M87.9,43.2 L79.6,28.9 L67.5,28.9 L67.5,43.2 L60.4,43.2 L60.4,0.2 L81.9,0.2 C85.8,0.2 89.2,1.6 92,4.4 C94.8,7.2 96.2,10.6 96.2,14.5 C96.2,17.5 95.4,20.2 93.7,22.6 C92,25 89.9,26.7 87.4,27.7 L96.2,43.1 L87.9,43.1 L87.9,43.2 Z M81.9,7.4 L67.5,7.4 L67.5,21.6 L81.9,21.7 C83.8,21.7 85.5,21 86.9,19.6 C88.3,18.2 89,16.5 89,14.5 C89,12.6 88.3,10.9 86.9,9.5 C85.5,8.1 83.8,7.4 81.9,7.4 L81.9,7.4 Z"></path>
                    <path d="M147.9,36 L128.2,36 L124.6,43.2 L116.6,43.2 L138,0.2 L159.5,43.1 L151.5,43.1 L147.9,36 L147.9,36 Z M131.7,28.9 L144.3,28.9 L138,16.2 L131.7,28.9 L131.7,28.9 Z"></path>
                    <path d="M193.2,0.2 C196.2,0.2 198.9,0.8 201.5,1.9 C204.1,3 206.4,4.6 208.3,6.5 L203.2,11.6 C200.4,8.8 197,7.4 193.1,7.4 C191.1,7.4 189.3,7.8 187.5,8.5 C185.8,9.2 184.3,10.3 183,11.6 C181.7,12.9 180.7,14.4 179.9,16.1 C179.1,17.8 178.8,19.7 178.8,21.7 C178.8,23.7 179.2,25.5 179.9,27.3 C180.7,29 181.7,30.5 183,31.8 C184.3,33.1 185.8,34.1 187.5,34.9 C189.3,35.6 191.1,36 193.1,36 C197,36 200.3,34.6 203.2,31.9 L208.3,36.9 C206.3,38.9 204,40.4 201.5,41.5 C198.9,42.6 196.1,43.2 193.2,43.2 C190.2,43.2 187.4,42.6 184.8,41.5 C182.2,40.4 179.9,38.8 178,36.9 C176,35 174.5,32.7 173.4,30.1 C172.3,27.5 171.7,24.7 171.7,21.7 C171.7,18.8 172.3,16.1 173.4,13.4 C174.5,10.8 176.1,8.5 178,6.5 C180,4.5 182.2,3 184.8,1.9 C187.4,0.8 190.2,0.2 193.2,0.2"></path>
                    <polygon points="257.3 0.2 257.3 7.4 235.9 7.4 235.9 18.2 257.3 18.2 257.3 25.3 235.9 25.3 235.9 36 257.3 36 257.3 43.2 228.7 43.2 228.7 0.2"></polygon>
                    <polygon points="304.6 0.2 311.7 0.2 311.7 18.1 333.2 18.1 333.2 0.2 340.4 0.2 340.4 43.2 333.2 43.2 333.2 25.3 311.7 25.3 311.7 43.2 304.6 43.2"></polygon>
                    <path d="M382.2,0.2 C388.1,0.2 393.2,2.3 397.4,6.5 C401.6,10.7 403.8,15.8 403.8,21.7 C403.8,27.7 401.7,32.7 397.4,36.9 C393.2,41.1 388.2,43.2 382.2,43.2 C376.3,43.2 371.2,41.1 367,36.9 C362.8,32.7 360.7,27.7 360.7,21.7 C360.7,15.8 362.8,10.7 367,6.5 C371.2,2.3 376.3,0.2 382.2,0.2 M382.2,7.4 C378.3,7.4 374.9,8.8 372.1,11.6 C369.3,14.4 368,17.8 368,21.7 C368,25.6 369.4,29 372.1,31.8 C374.9,34.6 378.3,35.9 382.2,35.9 C386.1,35.9 389.5,34.5 392.3,31.8 C395.1,29 396.5,25.6 396.5,21.7 C396.5,17.8 395.1,14.4 392.3,11.6 C389.5,8.8 386.2,7.4 382.2,7.4"></path>
                    <path d="M431.3,28.9 L431.3,43.2 L424.2,43.2 L424.2,0.2 L445.7,0.2 C449.6,0.2 453,1.6 455.8,4.4 C458.6,7.2 460,10.6 460,14.5 C460,18.4 458.6,21.8 455.8,24.6 C453,27.4 449.6,28.7 445.7,28.7 L431.3,28.7 L431.3,28.9 Z M431.3,7.4 L431.3,21.7 L445.7,21.7 C447.6,21.7 449.3,21 450.7,19.6 C452.1,18.2 452.8,16.5 452.8,14.6 C452.8,12.6 452.1,10.9 450.7,9.5 C449.3,8.1 447.6,7.4 445.7,7.4 L431.3,7.4 L431.3,7.4 Z"></path>
                    <path d="M487.5,28.9 L487.5,43.2 L480.4,43.2 L480.4,0.2 L501.9,0.2 C505.8,0.2 509.2,1.6 512,4.4 C514.8,7.2 516.2,10.6 516.2,14.5 C516.2,18.4 514.8,21.8 512,24.6 C509.2,27.4 505.8,28.7 501.9,28.7 L487.5,28.7 L487.5,28.9 Z M487.5,7.4 L487.5,21.7 L501.9,21.7 C503.8,21.7 505.5,21 506.9,19.6 C508.3,18.2 509,16.5 509,14.6 C509,12.6 508.3,10.9 506.9,9.5 C505.5,8.1 503.8,7.4 501.9,7.4 L487.5,7.4 L487.5,7.4 Z"></path>
                    <polygon points="565.1 0.2 565.1 7.4 543.7 7.4 543.7 18.2 565.1 18.2 565.1 25.3 543.7 25.3 543.7 36 565.1 36 565.1 43.2 536.6 43.2 536.6 0.2"></polygon>
                    <path d="M613.1,43.2 L604.8,28.9 L592.7,28.9 L592.7,43.2 L585.6,43.2 L585.6,0.2 L607,0.2 C610.9,0.2 614.3,1.6 617.1,4.4 C619.9,7.2 621.3,10.6 621.3,14.5 C621.3,17.5 620.5,20.2 618.8,22.6 C617.2,25 615,26.7 612.5,27.7 L621.3,43.1 L613.1,43.1 L613.1,43.2 Z M607,7.4 L592.6,7.4 L592.6,21.6 L607,21.7 C608.9,21.7 610.6,21 612,19.6 C613.4,18.2 614.1,16.5 614.1,14.5 C614.1,12.6 613.4,10.9 612,9.5 C610.6,8.1 609,7.4 607,7.4 L607,7.4 Z"></path>
                  </g>
                  <g transform="translate(177.000000, 75.000000)">
                    <path d="M23.2,26.7 L8.9,26.7 L6.2,31.9 L0.4,31.9 L16,0.7 L31.6,31.9 L25.8,31.9 L23.2,26.7 L23.2,26.7 Z M11.4,21.5 L20.6,21.5 L16,12.3 L11.4,21.5 L11.4,21.5 Z"></path>
                    <path d="M53.7,0.7 C55.9,0.7 57.9,1.1 59.7,1.9 C61.6,2.7 63.2,3.8 64.7,5.3 L61,9 C59,7 56.5,5.9 53.7,5.9 C52.3,5.9 50.9,6.2 49.7,6.7 C48.4,7.2 47.3,8 46.4,8.9 C45.5,9.8 44.7,10.9 44.2,12.2 C43.6,13.5 43.4,14.8 43.4,16.2 C43.4,17.6 43.7,19 44.2,20.2 C44.8,21.5 45.5,22.6 46.4,23.5 C47.3,24.4 48.4,25.2 49.7,25.7 C51,26.2 52.3,26.5 53.8,26.5 C56.6,26.5 59.1,25.5 61.1,23.5 L64.8,27.1 C63.4,28.5 61.7,29.7 59.8,30.5 C57.9,31.3 55.9,31.7 53.8,31.7 C51.7,31.7 49.6,31.3 47.7,30.5 C45.8,29.7 44.2,28.6 42.7,27.2 C41.3,25.8 40.2,24.1 39.3,22.3 C38.5,20.4 38.1,18.4 38.1,16.2 C38.1,14.1 38.5,12.1 39.3,10.2 C40.1,8.3 41.2,6.6 42.7,5.2 C44.1,3.8 45.8,2.7 47.7,1.8 C49.5,1.1 51.6,0.7 53.7,0.7"></path>
                    <path d="M100,26.7 L85.7,26.7 L83,31.9 L77.2,31.9 L92.8,0.7 L108.4,31.9 L102.6,31.9 L100,26.7 L100,26.7 Z M88.3,21.5 L97.5,21.5 L92.9,12.3 L88.3,21.5 L88.3,21.5 Z"></path>
                    <path d="M120.9,0.7 L131.3,0.7 C133.4,0.7 135.4,1.1 137.3,1.9 C139.2,2.7 140.8,3.9 142.3,5.3 C143.7,6.7 144.8,8.4 145.7,10.3 C146.5,12.2 146.9,14.2 146.9,16.3 C146.9,18.4 146.5,20.4 145.7,22.3 C144.9,24.2 143.8,25.8 142.4,27.3 C141,28.7 139.3,29.8 137.4,30.7 C135.5,31.5 133.5,31.9 131.4,31.9 L121,31.9 L121,0.7 L120.9,0.7 Z M131.3,26.7 C132.7,26.7 134.1,26.4 135.3,25.9 C136.6,25.4 137.7,24.6 138.6,23.7 C139.5,22.7 140.3,21.6 140.8,20.4 C141.3,19.1 141.6,17.8 141.6,16.4 C141.6,15 141.3,13.7 140.8,12.4 C140.3,11.1 139.5,10 138.6,9.1 C137.6,8.1 136.5,7.4 135.3,6.9 C134,6.4 132.7,6.1 131.3,6.1 L126.1,6.1 L126.1,26.9 L131.3,26.9 L131.3,26.7 Z"></path>
                    <polygon points="180.2 0.7 180.2 5.9 164.6 5.9 164.6 13.8 180.2 13.8 180.2 18.9 164.6 18.9 164.6 26.7 180.2 26.7 180.2 31.9 159.4 31.9 159.4 0.7"></polygon>
                    <polygon points="197.9 13.3 197.9 31.9 192.7 31.9 192.7 0.7 208.3 16.3 224 0.7 224 31.9 218.7 31.9 218.7 13.3 208.3 23.7"></polygon>
                    <polygon points="260.9 0.7 267.5 0.7 254.7 17.1 254.7 31.9 249.5 31.9 249.5 17.4 236.5 0.7 243.1 0.7 252 12.1"></polygon>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
    </Plx>
  );
}

export default GraceHopper;
