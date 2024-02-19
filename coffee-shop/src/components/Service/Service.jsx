import React from 'react'
import Img2 from "../../assets/website/coffee2.png";

const ServicesData =[
    {
        id: 1,
        img: Img2,
        name: "Espresso",
        description:
          "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
        aosDelay: "100",
      },
      {
        id: 2,
        img: Img2,
        name: "Americano",
        description:
          "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
        aosDelay: "300",
      },
      {
        id: 3,
        img: Img2,
        name: "Cappuccino",
        description:
          "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
        aosDelay: "500",
      },
]

const Service = () => {
  return (
<>
    <span id='services'></span>
    <div className="py-10">
        <div className="container">
            {/* header title */}
            <div className='text-center mb-20'>
                <h1 className="text-4xl font-bold font-cursive text-gray-800">Best Coffee for you</h1>
            </div>

            {/* services card section */}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
                {ServicesData.map((data ,index) =>{
                    return(
                        <div
                        data-aos="fade-up"

                         data-aos-delay={data.aosDelay}

                        key={index} className="rounded-2xl bg-white hover:bg-primary hover:text-white shadow-xl duration-200 max-w-[300px] ">
                            <div className="h-[122px]">
                                <img className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-110 group-hover:rotate-6 duration-300" src={data.img} alt="" srcset="" />
                            </div>

                            {/* text-content */}
                            <div className="p-4 text-center">
                                <h1 className="text-xl font-bold">{data.name}</h1>
                                <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">{data.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>

    </>
  )
}

export default Service