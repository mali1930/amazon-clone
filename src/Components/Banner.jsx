import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


const Banner = () => {
  return (
      <div className=" relative w-full">
        <div className="absolute  h-36 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-10 " />
        <Carousel
          autoPlay
          infiniteLoop
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
          interval={4000}
        >
          <div>
            <img
              loading="lazy"
              className="h-[70vh]"
              src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              className="h-[70vh]"
              src="https://m.media-amazon.com/images/G/01/digital/video/merch/subs/benefit-id/g-l/hbomaxus/heroes/web_3p-collection-banner_3000x600._CB604965535_UR3000,600_SX3000_FMwebp_.jpg"
              alt="banner"
            />
          </div>
          <div>
            <img
              loading="lazy"
              className="h-[70vh]"
              src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/StockingStuffers/GW/Heros/DT/HOL22_GW_TallHero3_Under20_DT_2x._CB604914721_.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              className="h-[70vh]"
              src="https://m.media-amazon.com/images/I/61GJjpKUNzL._SX3000_.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              className="h-[70vh]"
              src="https://m.media-amazon.com/images/I/61sndKnXlbL._SX3000_.jpg"
              alt=""
            />
          </div>
        </Carousel>
      </div>

  );
};

export default Banner;
