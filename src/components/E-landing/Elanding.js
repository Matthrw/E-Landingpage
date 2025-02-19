import React from "react";
import image from "./image/Group 9.png";
import "./elanding.css";
export default function Elanding() {
  return (
    <div className="container">
      <div className="header">
        <h2>skilled</h2>
        <button>Get Started</button>
      </div>
      <div className="second_content">
        <div className="left_content">
          <span>Maximize skill,</span>
          <br></br>
          <span>minimize budget</span>
          <p>Our modern courses across a range of in-demand</p>
          <p>skills will give you the knowledge you need to live</p>
          <p> the life you want.</p>
          <button>Get Started</button>
        </div>
        <div className="right_content">
          <div className="purple_background"></div>
          <img src={image} alt="page_img" />
        </div>
      </div>
      <div className="box_container">
        <div className="first_box">Check out our most popular course</div>
        <div className="second_box">
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Group 8">
              <circle
                id="Oval"
                cx="28"
                cy="28"
                r="28"
                fill="url(#paint0_linear_0_416)"
              />
              <g id="Running">
                <path
                  id="Shape"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M34.8761 18.7159C34.8634 19.4681 34.5346 20.1802 33.9703 20.6777C33.1606 21.297 32.0705 21.4056 31.1546 20.9582C30.2387 20.5108 29.6543 19.5843 29.6451 18.565C29.6617 17.8243 29.9686 17.1198 30.4996 16.6031C30.9731 16.2279 31.5555 16.0163 32.1594 16C32.8807 15.9972 33.5732 16.2824 34.0833 16.7923C34.5934 17.3022 34.8787 17.9947 34.8761 18.7159ZM25.172 21.1902C25.1986 21.1739 25.218 21.1619 25.218 21.1306L25.2126 21.1276C26.996 20.8279 28.827 21.2047 30.3471 22.1843C30.6763 22.3497 30.9954 22.5344 31.3027 22.7376C31.3784 22.7501 31.4486 22.7851 31.5042 22.838H31.4544C31.4285 22.8635 31.4157 22.8761 31.403 22.8889C31.3904 22.9014 31.378 22.9141 31.3533 22.9392C32.4256 23.6417 33.7627 23.8087 34.9749 23.3913H35.0255C35.0255 23.3598 35.0448 23.3479 35.0716 23.3314C35.0878 23.3214 35.1068 23.3097 35.1259 23.2909C35.9507 22.9561 36.6532 22.3769 37.1391 21.631C37.1776 21.5549 37.2295 21.4864 37.2923 21.4287C38.3989 20.5743 40.2603 21.8318 39.3039 23.0894C38.9193 23.6647 38.463 24.1887 37.946 24.6489C36.2736 26.0977 33.9688 26.5741 31.859 25.9072C30.954 27.4667 30.0988 29.0261 29.2428 30.6354C29.5961 30.8362 29.9478 31.0378 30.2497 31.2393L30.1493 31.3397C31.0575 31.9443 31.9602 32.6486 32.5135 33.1022C33.2603 33.6551 34.1303 35.5906 34.811 37.105C35.0012 37.5282 35.1767 37.9186 35.3305 38.2367C35.6055 38.7107 35.5224 39.3111 35.129 39.6927C34.8024 39.9553 34.3748 40.0569 33.965 39.9692C33.5552 39.8815 33.2067 39.6138 33.0162 39.2406C32.904 38.997 32.7761 38.7103 32.6385 38.4015C32.0355 37.0486 31.2442 35.2735 30.7532 34.8648C29.4825 33.8526 28.0768 33.0226 26.5767 32.3988C26.5533 32.3988 26.5166 32.3867 26.4793 32.3744C26.4407 32.3618 26.4016 32.3489 26.3759 32.3489C24.2766 34.9659 20.587 35.6695 17.6719 34.0088C17.2385 33.7444 16.9819 33.2663 17.001 32.759C17.0201 32.2516 17.3119 31.7942 17.7639 31.5631C18.2159 31.3319 18.7576 31.3631 19.1801 31.6447C21.4952 32.9528 23.8585 31.2424 24.9659 29.079C26.0227 26.9632 26.8281 25.4573 27.6833 23.8978C25.9721 23.3438 24.4126 23.8457 23.1558 25.6083C22.1994 27.016 19.8353 25.6581 20.8407 24.2496C21.2411 23.6863 21.6962 23.1639 22.1994 22.6901C23.0329 21.9745 24.0388 21.489 25.1176 21.2816V21.231C25.1366 21.212 25.1557 21.2003 25.172 21.1902Z"
                  fill="white"
                />
              </g>
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_0_416"
                x1="0"
                y1="0"
                x2="0"
                y2="56"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF6F48" />
                <stop offset="1" stop-color="#F02AA6" />
              </linearGradient>
            </defs>
          </svg>
          <h3>Animation</h3>
          <p>
            Learn the latest animation techniques to create stunning motion
            design and capivate your audience
          </p>
          <button>Get Started</button>
        </div>
        <div className="third_box">
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Group 16">
              <circle
                id="Oval"
                cx="28"
                cy="28"
                r="28"
                fill="url(#paint0_linear_0_428)"
              />
              <g id="ic_filter_b_and_w">
                <path
                  id="Mask"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M35 19H21C19.9 19 19 19.9 19 21V35C19 36.1 19.9 37 21 37H35C36.1 37 37 36.1 37 35V21C37 19.9 36.1 19 35 19ZM35 35L28 27V35H21L28 27V21H35V35Z"
                  fill="white"
                />
                <mask
                  id="mask0_0_428"
                  //   style="mask-type:luminance"
                  maskUnits="userSpaceOnUse"
                  x="19"
                  y="19"
                  width="18"
                  height="18"
                >
                  <path
                    id="Mask_2"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M35 19H21C19.9 19 19 19.9 19 21V35C19 36.1 19.9 37 21 37H35C36.1 37 37 36.1 37 35V21C37 19.9 36.1 19 35 19ZM35 35L28 27V35H21L28 27V21H35V35Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_0_428)"></g>
              </g>
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_0_428"
                x1="0"
                y1="0"
                x2="0"
                y2="56"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF6F48" />
                <stop offset="1" stop-color="#F02AA6" />
              </linearGradient>
            </defs>
          </svg>

          <h3>Design</h3>
          <p>
            Create beautiful,usable interface to help shape the future of how
            the web looks
          </p>
          <button>Get Started</button>
        </div>

        <div className="fourth_box">
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Group 17">
              <circle
                id="Oval"
                cx="28"
                cy="28"
                r="28"
                fill="url(#paint0_linear_0_469)"
              />
              <path
                id="Mask"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M25 18L23.17 20H20C18.9 20 18 20.9 18 22V34C18 35.1 18.9 36 20 36H36C37.1 36 38 35.1 38 34V22C38 20.9 37.1 20 36 20H32.83L31 18H25ZM31.2 28C31.2 29.7673 29.7673 31.2 28 31.2C26.2327 31.2 24.8 29.7673 24.8 28C24.8 26.2327 26.2327 24.8 28 24.8C29.7673 24.8 31.2 26.2327 31.2 28ZM23 28C23 30.76 25.24 33 28 33C30.76 33 33 30.76 33 28C33 25.24 30.76 23 28 23C25.24 23 23 25.24 23 28Z"
                fill="white"
              />
              <mask
                id="mask0_0_469"
                // style="mask-type:luminance"
                maskUnits="userSpaceOnUse"
                x="18"
                y="18"
                width="20"
                height="18"
              >
                <path
                  id="Mask_2"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M25 18L23.17 20H20C18.9 20 18 20.9 18 22V34C18 35.1 18.9 36 20 36H36C37.1 36 38 35.1 38 34V22C38 20.9 37.1 20 36 20H32.83L31 18H25ZM31.2 28C31.2 29.7673 29.7673 31.2 28 31.2C26.2327 31.2 24.8 29.7673 24.8 28C24.8 26.2327 26.2327 24.8 28 24.8C29.7673 24.8 31.2 26.2327 31.2 28ZM23 28C23 30.76 25.24 33 28 33C30.76 33 33 30.76 33 28C33 25.24 30.76 23 28 23C25.24 23 23 25.24 23 28Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_0_469)"></g>
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_0_469"
                x1="0"
                y1="0"
                x2="0"
                y2="56"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF6F48" />
                <stop offset="1" stop-color="#F02AA6" />
              </linearGradient>
            </defs>
          </svg>

          <h3>Photography</h3>
          <p>
            Explore critical fundamentals like lighting,composition,and focus to
            capture excepotional photos
          </p>
          <button>Get Started</button>
        </div>
        <div className="fifth_box">
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Group 20">
              <circle
                id="Oval"
                cx="28"
                cy="28"
                r="28"
                fill="url(#paint0_linear_0_443)"
              />
              <path
                id="Mask"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M26 28C24.9 28 24 28.9 24 30C24 31.1 24.9 32 26 32C27.1 32 28 31.1 28 30C28 28.9 27.1 28 26 28ZM22 24C20.9 24 20 24.9 20 26C20 27.1 20.9 28 22 28C23.1 28 24 27.1 24 26C24 24.9 23.1 24 22 24ZM22 32C20.9 32 20 32.9 20 34C20 35.1 20.9 36 22 36C23.1 36 24 35.1 24 34C24 32.9 23.1 32 22 32ZM34 24C35.1 24 36 23.1 36 22C36 20.9 35.1 20 34 20C32.9 20 32 20.9 32 22C32 23.1 32.9 24 34 24ZM30 32C28.9 32 28 32.9 28 34C28 35.1 28.9 36 30 36C31.1 36 32 35.1 32 34C32 32.9 31.1 32 30 32ZM34 28C32.9 28 32 28.9 32 30C32 31.1 32.9 32 34 32C35.1 32 36 31.1 36 30C36 28.9 35.1 28 34 28ZM30 24C28.9 24 28 24.9 28 26C28 27.1 28.9 28 30 28C31.1 28 32 27.1 32 26C32 24.9 31.1 24 30 24ZM26 20C24.9 20 24 20.9 24 22C24 23.1 24.9 24 26 24C27.1 24 28 23.1 28 22C28 20.9 27.1 20 26 20Z"
                fill="white"
              />
              <mask
                id="mask0_0_443"
                // style="mask-type:luminance"
                maskUnits="userSpaceOnUse"
                x="20"
                y="20"
                width="16"
                height="16"
              >
                <path
                  id="Mask_2"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M26 28C24.9 28 24 28.9 24 30C24 31.1 24.9 32 26 32C27.1 32 28 31.1 28 30C28 28.9 27.1 28 26 28ZM22 24C20.9 24 20 24.9 20 26C20 27.1 20.9 28 22 28C23.1 28 24 27.1 24 26C24 24.9 23.1 24 22 24ZM22 32C20.9 32 20 32.9 20 34C20 35.1 20.9 36 22 36C23.1 36 24 35.1 24 34C24 32.9 23.1 32 22 32ZM34 24C35.1 24 36 23.1 36 22C36 20.9 35.1 20 34 20C32.9 20 32 20.9 32 22C32 23.1 32.9 24 34 24ZM30 32C28.9 32 28 32.9 28 34C28 35.1 28.9 36 30 36C31.1 36 32 35.1 32 34C32 32.9 31.1 32 30 32ZM34 28C32.9 28 32 28.9 32 30C32 31.1 32.9 32 34 32C35.1 32 36 31.1 36 30C36 28.9 35.1 28 34 28ZM30 24C28.9 24 28 24.9 28 26C28 27.1 28.9 28 30 28C31.1 28 32 27.1 32 26C32 24.9 31.1 24 30 24ZM26 20C24.9 20 24 20.9 24 22C24 23.1 24.9 24 26 24C27.1 24 28 23.1 28 22C28 20.9 27.1 20 26 20Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_0_443)"></g>
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_0_443"
                x1="0"
                y1="0"
                x2="0"
                y2="56"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF6F48" />
                <stop offset="1" stop-color="#F02AA6" />
              </linearGradient>
            </defs>
          </svg>

          <h3>Crypto</h3>
          <p>
            All you need to know to get started investing in crypto.Go from
            beginner to advanced with the 54 hour course
          </p>
          <button>Get Started</button>
        </div>
        <div className="sixth_box">
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Group 18">
              <circle
                id="Oval"
                cx="28"
                cy="28"
                r="28"
                fill="url(#paint0_linear_0_485)"
              />
              <path
                id="Mask"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M35 22H33C33 19.24 30.76 17 28 17C25.24 17 23 19.24 23 22H21C19.9 22 19.01 22.9 19.01 24L19 36C19 37.1 19.9 38 21 38H35C36.1 38 37 37.1 37 36V24C37 22.9 36.1 22 35 22ZM28 19C29.66 19 31 20.34 31 22H25C25 20.34 26.34 19 28 19ZM28 29C25.24 29 23 26.76 23 24H25C25 25.66 26.34 27 28 27C29.66 27 31 25.66 31 24H33C33 26.76 30.76 29 28 29Z"
                fill="white"
              />
              <mask
                id="mask0_0_485"
                // style="mask-type:luminance"
                maskUnits="userSpaceOnUse"
                x="19"
                y="17"
                width="18"
                height="21"
              >
                <path
                  id="Mask_2"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M35 22H33C33 19.24 30.76 17 28 17C25.24 17 23 19.24 23 22H21C19.9 22 19.01 22.9 19.01 24L19 36C19 37.1 19.9 38 21 38H35C36.1 38 37 37.1 37 36V24C37 22.9 36.1 22 35 22ZM28 19C29.66 19 31 20.34 31 22H25C25 20.34 26.34 19 28 19ZM28 29C25.24 29 23 26.76 23 24H25C25 25.66 26.34 27 28 27C29.66 27 31 25.66 31 24H33C33 26.76 30.76 29 28 29Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_0_485)"></g>
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_0_485"
                x1="0"
                y1="0"
                x2="0"
                y2="56"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF6F48" />
                <stop offset="1" stop-color="#F02AA6" />
              </linearGradient>
            </defs>
          </svg>

          <h3>Business</h3>
          <p>
            A step-by-step playbookto help you start,scale,and sustain your
            business without outside investment
          </p>

          <button>Get Started</button>
        </div>
      </div>
      <div className="footer">
        <h2>skilled</h2>
        <button>Get Started</button>
      </div>
    </div>
  );
}
