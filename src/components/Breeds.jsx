/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import axios from "axios"
import Card from 'react-bootstrap/Card';
import '../css/Breeds.css'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {raza} from '../constants/constants'


const Breeds = () => {

    const [breeds, setBreeds] = useState([])
    const [page, setPage] = useState(0)
    const [contador, setContador] = useState(1)

    const getBreeds = async() => {
        let response = await axios.get(`https://api.thedogapi.com/v1/breeds?limit=10&page=${page}`)
        setBreeds(response.data)
    }

    const getNextPage = () => {
        page === 17 ? setPage(17) : setPage(page + 1)
        contador === 18 ? setContador(18) : setContador(contador + 1)
    }

    const getPrevPage = () => {
        page === 0 ? setPage(0) : setPage(page - 1)
        contador === 1 ? setContador(1) : setContador(contador - 1)
    }

    useEffect(() => {
        getBreeds()
    }, [contador])

    return (
        <section className="search-breeds p-5">
            <h2 className="text-center title-breeds">Start to search!</h2>
            <div className="row mt-4">
                <div className="col-12 d-flex justify-content-center">
                    <div className="d-flex gap-3">
                        <button className="btn btn-danger" onClick={getPrevPage}>Prev</button>
                        <h5>{contador}/18</h5>
                        <button className="btn btn-danger" onClick={getNextPage}>Next</button>
                    </div>
                </div>
            </div>
            <div className="row ps-5 pe-5 pb-5">
                <div className="col-12 cards">
                    {breeds.map(breed => 
                        <Link className="card-link" key={breed.id} to={raza + breed.id}>
                            <Card  className="card">
                                <Card.Img variant="top" src={breed.image.url} />
                                <Card.Body className="card-body">
                                    <Card.Title className="card-title">{breed.name}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Breeds
