/* eslint-disable react/no-unescaped-entities */
import '../css/Main.css'
import perroMain from '../assets/perro-main.png'

const Main = () => {
  return (
    <section className='px-5'>
        <h1 className='text-center mt-5 brandTitulo px-2'>Welcome to WIKI - DOGS</h1>
        <div className="row main-contenido mt-4">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 mt-4">
                <figure className='d-flex justify-content-center'>
                    <img className='perro-main' src={perroMain} alt="foto" title='foto'/>
                </figure>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 mt-4 px-2 d-flex flex-column justify-content-center gap-3 info">
                <h2 className='title-info text-center mt-4'>What is WIKI - DOGS?</h2>
                <p className='info-text text-center'>Hi, I'm Tobias, a programmer student and a big fan of dogs, so i created this website about dog breeds to practice. You can spend your time researching and learning about the different breeds of dogs that exist in the world. Or you can try to find the breed of your dog. In any case I hope you enjoy it!</p>
                <p>Source: <a href="http://thedogapi.com">The Dog Api</a></p>
                <p className='info-text text-center'><b>PD:</b> It is possible that some breeds do not appear since it uses information provided by third parties that is not complete. Thank you for understanding. :)</p>
            </div>
        </div>
    </section>
  )
}

export default Main
