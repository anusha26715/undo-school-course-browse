import { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './CategoryList.css'

const CategoryList = () => {
    const [categoryHovered, setCategoryHovered] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null)

    const categories = [
        {
            id:1,
            title:"Coding",
            image:"src/assets/images/laptop.png"
        },
        {
            id:2,
            title:"Public Speaking",
            image:"src/assets/images/mike.png"
        },
        {
            id:3,
            title:"Chess",
            image:"src/assets/images/horse.png"
        },
        {
            id:4,
            title:"Home Work help",
            image:"src/assets/images/book.png"
        },
        {
            id:5,
            title:"App Building",
            image:"src/assets/images/mobile.png"
        }
    ]

    const getCategoryCardColor = (category) => {
        if(category === "Coding") return "var(--color-orange-yellow)";
        if(category === "Public Speaking") return "var(--color-green)";
        if(category === "Chess") return "var(--color-dark-yellow)";
        if(category === "Home Work help") return "var(--color-blue)";
        if(category === "App Building") return "var(--color-red)";
        return "transparent"
    }

  return (
    <Swiper modules={[Navigation, Pagination]} id='categoryContainer'
        spaceBetween={40}
        breakpoints={{
              0: {          // small screens (mobile)
                slidesPerView: 1,
              },
              440: {        // sm (>=640px)
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
              },
              1280: {       // xl (>=1280px)
                slidesPerView: 5,
              }
            }}
        navigation={true}   // <-- enables arrows
        pagination={{ clickable: true }} // optional dots
        loop={true} >
        {
          categories.map((category) => {

            const categoryCardColor = getCategoryCardColor(category.title);
            const isCardHovered = categoryHovered === category.title;
            const isCardActive = activeCategory === category.title;
            return(
                <SwiperSlide className="category-container" key={category.id}
                onMouseEnter={() => setCategoryHovered(category.title)}
                onMouseLeave={() => setCategoryHovered(null)}
                onClick={() => setActiveCategory(category.title)}
                style={{
                    backgroundColor: isCardHovered ? categoryCardColor: isCardActive? categoryCardColor : "white",
                    border: (isCardHovered || isCardActive) ? `2px solid ${categoryCardColor}`: '2px solid #ddd',
                    boxShadow: (isCardHovered || isCardActive) ? `0 0 15px ${categoryCardColor}`: '0 0 5px #ddd',
                    transition:"all 0.3s ease-in-out"
                }}
                >
                    <img src={category.image} alt={category.title} className='category-img img-fluid'/>
                    <span>{category.title}</span>
                </SwiperSlide>
            )
          })
        }
        
      </Swiper>
  )
}

export default CategoryList
