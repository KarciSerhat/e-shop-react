import React from 'react'
import Slider from 'react-slick'

const SliderComponent = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
          <Slider {...settings}>
          <div className='flex items-center bg-gray-100'>
            <div className=''>
              <div className='font-bold'>Ayakkabılar</div>
              <div className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci minus error fugiat, dignissimos beatae nostrum, quam accusantium, laudantium ut quidem dolor consequatur quas maxime facilis placeat quia vitae magni quibusdam?</div>
              <div className='border rounded-full cursor-pointer text-2xl w-[150px] h-12 flex items-center justify-center bg-gray-200'>İncele</div>
            </div>
            <img className='w-full h-80' src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c9b5fe2c-acd6-47ca-98f4-69f0c085b8dc/flex-runner-2-ayakkab%C4%B1s%C4%B1-9X4MNC.png'/>
          </div>
          <div className='flex items-center bg-gray-100'>
          <div className=''>
              <div className='font-bold'>Ayakkabılar</div>
              <div className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci minus error fugiat, dignissimos beatae nostrum, quam accusantium, laudantium ut quidem dolor consequatur quas maxime facilis placeat quia vitae magni quibusdam?</div>
              <div className='border rounded-full cursor-pointer text-2xl w-[150px] h-12 flex items-center justify-center bg-gray-200'>İncele</div>
            </div>
            <img className='w-full h-80' src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8a811235-fbad-4343-8b18-09b8984bf3d2/air-force-1-07-ayakkab%C4%B1s%C4%B1-s2qHxf.png'/>
          </div>
       </Slider>
    </div>
  )
}

export default SliderComponent