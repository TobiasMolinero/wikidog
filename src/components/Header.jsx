/* eslint-disable no-unused-vars */
import brand from '../assets/wiki-dog-brand-sinfondo.png'
import '../css/Header.css'

const Header = () => {
  return (
    <header>
        <figure className='d-flex justify-content-center'>
            <img src={brand} alt="" className='brand'/>
        </figure>
    </header>
  )
}

export default Header
