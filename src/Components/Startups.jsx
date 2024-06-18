import React from "react";
import Heading from "./Heading";
import StartupCard from "./StartupCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { collection, onSnapshot } from "firebase/firestore";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";

const Startups = (props) => {
  // const { startup_list } = props;
  const [startup_list, set_startup_list] = useState([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "Meraki-Startups"),
      (snapshot) => {
        const updatedList = snapshot.docs.map((doc) => doc.data());
        set_startup_list(updatedList);
        console.log(startup_list);
      }
    );
    return () => unsubscribe(); // Unsubscribe from the snapshot listener when the component unmounts
  }, []);
  return (
    <>
      {startup_list.length > 0 && (
        <div className="startupbg pb-24" id="startups">
          <Heading start={"Meet the"} end={"Startups"} color={"blue"} />
          <div
            style={{ padding: "5rem 2rem" }}
            className="mx-auto flex justify-center items-center pb-16"
          >
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              pagination={true}
              loop={true}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[EffectCoverflow, Autoplay, Navigation]}
              className="swiper py-5 mx-auto flex justify-center items-center"
            >
              {startup_list.map((item, idx) => (
                <SwiperSlide className="swiper-slide" key={idx}>
                  <StartupCard item={item} />
                </SwiperSlide>
              ))}
              {/* <SwiperSlide className="swiper-slide">
                <StartupCard />
              </SwiperSlide> */}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
};

export default Startups;
