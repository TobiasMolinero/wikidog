/* eslint-disable no-unused-vars */
import Carousel from 'react-bootstrap/Carousel';
import '../css/Carrousel.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { imagesCarousel } from '../constants/constants';

const Carrousel = () => {

  const [imgsCarousel, setImgsCarousel] = useState([])

  const getImages = async () => {
    let response = await axios.get(imagesCarousel)
    setImgsCarousel(response.data)
  }

  useEffect(() => {
    getImages()
  }, [])

  return (
    <Carousel className='carousel'>
      {imgsCarousel.map(imagen =>
        <Carousel.Item key={imagen.id}>
          <img
            className="d-block"
            src={imagen.url}
            alt="First slide"
          />
          {/* <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
        </Carousel.Item>
      )}
    </Carousel>
  )
}

export default Carrousel
