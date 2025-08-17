import { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './TimingList.css'

const TimingList = () => {

const [timeHovered,setTimeHovered] = useState(null)
const [activeTime,setActiveTime] = useState(null)

const TimeList = [
    {
        id:1,
        time:"Morning",
        duration:"8am-12pm",
        icon:"bi bi-sun"
    },
    {
        id:2,
        time:"Afternoon",
        duration:"12pm-4pm",
        icon:"bi bi-sunrise"
    },
    {
        id:3,
        time:"Evening",
        duration:"4pm-8pm",
        icon:"bi bi-moon"
    },
    {
        id:4,
        time:"Late Evening",
        duration:"8pm-11pm",
        icon:"bi bi-moon-stars"
    }
] 

const getTimeCardColor = (timing) => {
    if (timing === "Morning") return "var(--color-pale-blue)";
    if (timing === "Afternoon") return "var(--color-pale-yellow)";
    if (timing === "Evening") return "var(--color-light-pink)";
    if (timing === "Late Evening") return "var(--color-light-lavender)";
    return "transparent"

}

  return (
    <Swiper modules={[Navigation, Pagination]} id='timingContainer'
        spaceBetween={40}
        breakpoints={{
              0: {          // small screens (mobile)
                slidesPerView: 1,
              },
              400: {        // sm (>=640px)
                slidesPerView: 1,
              },
              640: {        // sm (>=640px)
                slidesPerView: 2,
              },
              768: {        // md (>=768px)
                slidesPerView: 3,
              },
              1024: {       // lg (>=1024px)
                slidesPerView: 4,
              }
            }}
        navigation={true}   // <-- enables arrows
        pagination={{ clickable: true }} // optional dots
        loop={true} >
        {
          TimeList.map((each) => {

            const timeCardColor = getTimeCardColor(each.time);
            const isCardHovered = timeHovered === each.time;
            const isCardActive = activeTime === each.time;
            return(
                <SwiperSlide className="time-container mb-5" key={each.id}
                onMouseEnter={() => setTimeHovered(each.time)}
                onMouseLeave={() => setTimeHovered(null)}
                onClick={() => setActiveTime(each.time)}
                style={{
                    backgroundColor: isCardHovered ? timeCardColor: isCardActive? timeCardColor : "white",
                    border: (isCardHovered || isCardActive) ? `2px solid ${timeCardColor}`: '2px solid #ddd',
                    boxShadow: (isCardHovered || isCardActive) ? `0 0 25px ${timeCardColor}`: '0 0 5px #ddd',
                    transition:"all 0.3s ease-in-out"
                }}
                >
                    <div>
                        <h5>{each.time}</h5>
                        <p>{each.duration}</p>
                    </div>
                    <i className={each.icon}></i>
                </SwiperSlide>
            )
          })
        }
        
      </Swiper>
  )
}

export default TimingList
