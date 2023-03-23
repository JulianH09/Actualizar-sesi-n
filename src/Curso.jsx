import React, { useContext } from 'react'
import { useState } from 'react'
import './Curso.css'

function Curso() {

    const [curso, setCurso] = useState ("Curso de react")
    const [software, setSoftware] = useState("Adobe")
    const [description, setDescription] = useState ("Curso de react con Hooks")
    const [image, setImage] = useState ("./images/car.jpg")

    const actualizarCurso = (e) => {
        e.preventDefault();
        const valueInput = e.target.previousSibling.value;
        setCurso(valueInput);

        e.target.previousSibling.value = '';
    }

    const actualizarSoftware = (e) => {
        e.preventDefault();
        const valueInput = e.target.previousSibling.value;
        setSoftware(valueInput);

        e.target.previousSibling.value = '';
    }

    const actualizarDescription = (e) => {
        e.preventDefault();
        const valueInput = e.target.previousSibling.value;
        setDescription(valueInput);

        e.target.previousSibling.value = '';
    }

    const actualizarImage = (e) => {
        e.preventDefault();
        const valueInput = e.target.src;
        setImage(valueInput);

    }



  return (
        <div className="row">
            <div className="col-12 col-lg-6 d-flex align-items-center background" style={{ background: `url(${image}) center/cover`}}>
                <div className='ms-3'>
                    <h1 className='text-light ms-4 fw-bolder'>Curso de {curso}</h1>
                    <h5 className='text-light ms-4 fw-bolder'>Software: {software}</h5>
                    <p className='text-light ms-4'>{description}</p>
                    <button className='mt-4 ms-4 px-3 border'>¡Inscribete ahora!</button>
                </div>
            </div>
            <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
                <section className=''>
                    <form action="">
                        <div className='py-3'>
                            <input className='form-control padd' type="text" placeholder='Nombre del curso'/>
                            <button className='px-3 border mt-3' onClick={actualizarCurso}>Actualizar</button>
                        </div>
                        <div className='py-3'>
                            <input className='form-control padd' type="text" placeholder='Software' />
                            <button className='px-3 border mt-3' onClick={actualizarSoftware}>Actualizar</button>
                        </div>
                        <div className='py-3'>
                            <textarea className='form-control padd' type="area-text" placeholder='Descripción' />
                            <button className='px-3 border mt-3' onClick={actualizarDescription}>Actualizar</button>
                        </div>
                    </form>
                    <div onClick={actualizarImage}>
                        <p className='fw-bolder' >Nueva imagen:</p>
                        <a href=""><img className='me-2' src="../images/car.jpg" alt="" width="65px" height="50px" /></a>
                        <a href=""><img className='me-2' src="../images/K6Rz.gif" alt="" width="65px" height="50px" /></a>
                        <a href=""><img className='me-2' src="../images/film.jpg" alt="" width="65px" height="50px" /></a>
                        <a href=""><img className='me-2' src="../images/3d.jpg" alt="" width="65px" height="50px" /></a>
                    </div>
                </section>
            </div>
        </div>
  )
}

export default Curso