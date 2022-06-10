import React from 'react'

const Agregar = () => {


    return (
        <form
            // esta clase me ayuda a que el formulario se vaya para abajo
            className='fixed-bottom input-group p-3 bg-dark'
        >
            <input type="text"
                className='form-control'
            />

            <div
                className='input-group-append'
            >
                <button
                    className='btn btn-primary'
                    // para que permita el enter de mi boton
                    type='submit'
                >
                    Enviar
                </button>
            </div>

        </form>
    )
}

export default Agregar