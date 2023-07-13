/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import '../css/MainBreed.css'
import { useParams, Link } from "react-router-dom"
import axios from 'axios'
import { home } from '../constants/constants'

const MainBreed = () => {

    const { id } = useParams()

    const [breed, setBreed] = useState([])
    const [urlImg, setUrlImg] = useState([])
    let idImg

    const getBreed = async() => {
        let response = await axios.get(`https://api.thedogapi.com/v1/breeds/${id}`)
        setBreed(response.data)
        idImg = response.data.reference_image_id
    }

    const getImg = async() => {
        let response = await axios.get(`https://api.thedogapi.com/v1/images/${idImg}`)
        setUrlImg(response.data.url)
    }

    useEffect(() => {
        getBreed()
        setTimeout(() => {
            getImg()
        },1000)
    }, [])

  return (
    <section className='breed'>
        <div className="row px-4 mt-4">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 d-flex justify-content-center">
                <figure className='container-img'>
                    <img className='breed-img' src={urlImg} alt="foto" />
                </figure>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                <h1 className='breed-name text-center'>{breed.name}</h1>
                <div className='container-info-list'>
                    <ul className='info-list'>
                        <h2 className='info-title'>Info</h2>
                        <li className='info-item'><b>Group:</b> {breed.breed_group === undefined || breed.breed_group === "" ? ' - ' : breed.breed_group}</li>
                        <li className='info-item'><b>Breed for:</b> {breed.bred_for}</li>
                        <li className='info-item'><b>Life Expectancy:</b> {breed.life_span}</li>
                        <li className='info-item'><b>Temperament:</b> {breed.temperament}</li>
                        <li className='info-item'><b>Origin: </b> {breed.origin === undefined || breed.origin === "" ? ' - ' : breed.origin}</li>
                        {/* <li className='info-item'><b>Weight: </b>
                            <ul>
                                <li><b>Imperial:</b></li>
                                <li><b>Metric:</b></li>
                            </ul>
                        </li>
                        <li className='info-item'><b>Height: </b>
                            <ul>
                                <li><b>Imperial:</b></li>
                                <li><b>Metric:</b></li>
                            </ul>
                        </li> */}
                        <div className= 'mt-4'>
                            <Link className='link-back' to={home}>
                                <button className='btn btn-back'>Back to Home</button>
                            </Link>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MainBreed
