import React from 'react'

const Formulario = ({setPeso, setAltura, peso, altura, setValido, setImc}) => {
  
    function handleSubmit(e) {
        e.preventDefault()
        if (peso <= 0 || altura <= 0 ) {
            console.log("hay algun fallo")
        } else {
            console.log("VALIDADO!!")
            setValido(true)
            const medidaCuadrada = Math.pow(170,2)
            const medidafinal = peso / medidaCuadrada
            const IMC = medidafinal * (10000)
            setImc(Number(IMC.toFixed(2)))

        }
    }

    return (

    <div className='container content-center grid place-items-center'>
        <div className='max-w-4xl rounded-3xl justify-center text-center bg-slate-200 items-center'>
        <p className='text-justify p-9  font-mono'>El índice de masa corporal (IMC) es un número que se calcula con base en el peso y la estatura de la persona. Para la mayoría de las personas, el IMC es un indicador confiable de la gordura y se usa para identificar las categorías de peso que pueden llevar a problemas de salud.</p>
        <form
            onSubmit={handleSubmit}
        >
            <div className=''>
            <label className='font-medium text-xl'>Introduce tu peso en <span className='text-indigo-700'>KILOGRAMOS</span></label>
            <input 
                className='rounded-md p-3 m-2 align-middle text-center text-xl'
                value={peso}
                onChange={ (e) => {
                    setPeso(e.target.value)

                }}

            /><span>KG</span>
            </div>
            <div>
            <label className='font-medium text-xl'>Introduce tu altura en <span className='text-indigo-700'>CENTIMETROS</span></label>
            <input 
                className='rounded-md p-3 m-2 align-middle text-center text-xl'
                value={altura}
                onChange={ (e) => {
                    setAltura(e.target.value)
                }}

            /><span>CM</span>
            </div>
            <button
                className='bg-indigo-600 text-white px-5 py-3 rounded-lg text-xl m-6 font-medium uppercase'
            >Calcular ahora</button>


        </form>
        
        
        </div>
    </div>
  )
}

export default Formulario