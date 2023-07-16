import '../css/Footer.css'

const Footer = () => {
  return (
    <footer className="container mt-5">
      <div className="row px-4">
        <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column mt-4'>
          <h3 className='text-center'>Info - Contacto</h3>
          <div className='d-flex justify-content-center'>
            <ul>
              <li className='item-info-contacto'><i className="bi bi-telephone-fill item-info-contacto-icon me-3"></i>+54 3815673581</li>
              <li className='item-info-contacto'><i className="bi bi-envelope-at-fill item-info-contacto-icon me-3"></i>tobiasmolinero98@gmail.com</li>
              <li className='item-info-contacto'><i className="bi bi-geo-alt-fill item-info-contacto-icon me-3"></i>Tucuman, Argentina</li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-4 px-5 d-flex flex-column align-items-center justify-content-center">

          <div className='mt-3'>
            <h3 className='text-center'>Redes</h3>
            <div className="redes d-flex justify-content-center gap-3">
              <a className='icons-redes' href="https://www.instagram.com/tobiasmolinero98/?next=%2F" rel="noreferrer" target='_blank'><i className="bi bi-instagram"></i></a>
              <a className='icons-redes' href="https://www.facebook.com/tobias.molinero" rel="noreferrer" target='_blank'><i className="bi bi-facebook"></i></a>
              <a className='icons-redes' href="https://github.com/TobiasMolinero" rel="noreferrer" target='_blank'><i className="bi bi-github"></i></a>

            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4 pt-3 px-5 derechos">
        <p className="text-center">Developed by Tobias Molinero, 2023 &#169;</p>
      </div>
    </footer>
  )
}

export default Footer
