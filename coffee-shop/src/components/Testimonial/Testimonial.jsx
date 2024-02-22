import React from 'react'
import Slider from "react-slick";

const TestimonialData = [
    {
      id: 1,
      name: "Dilshad",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://picsum.photos/101/101",
    },
    {
      id: 2,
      name: "Sabir ali",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://picsum.photos/102/102",
    },
    {
      id: 3,
      name: "Dipankar kumar",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://picsum.photos/104/104",
    },
    {
      id: 5,
      name: "Satya Narayan",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://picsum.photos/103/103",
    },
  ];
  

const Testimonial = () => {
  return (
    <>
    <div className="py-14 mb-10">
    <div className="container">
        {/* header section */}
        <div className="text-center mb-10">
            <h1 className="text-4xl font-bold font-cursive text-gray-800">Testimonial Section</h1>
        </div>

        {/* testimonial sections */}
        <div>
            <Slider>
              {TestimonialData.map((data , index) =>{
                return (
                <div className="my-6" key={data.id}>

                </div>)
              })}
            </Slider>
        </div>
    </div>
    </div>
    </>
  )
}

export default Testimonial