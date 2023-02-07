import React from 'react'

const Resultado = ({imc, setValido}) => {

  return (
    <div className='container content-center grid place-items-center'>
        <div className='max-w-4xl rounded-3xl justify-center text-center bg-slate-200 items-center w-2/3 m-5 p-5'>
        <p>Una linea horizontal que explique el porentaje de IMC</p>
        <h2 className='text-4xl font-medium py-5'>Tu <span className='text-indigo-700'>IMC</span> es de <span className='text-indigo-700'>{imc}</span></h2>
        <h3>ESTO ES CONDICIONAL. Si sale sobrepeso mostrar una cosa y si sale inferior mostrar otra</h3>
        <p>Si al graficar tu Índice de Masa Corporal (IMC) se ubica por encima de 25 indica que tienes sobrepeso u obesidad. Es importante para tu salud estar lo más cercano a un IMC saludable entre 18,5 y 24,9</p>
        <p>
        1. Visita a tu médico para que verifique que no padezcas ninguna enfermedad.
        2. Visita a tu nutricionista de confianza para que te realice un plan de atención nutricional individual y para que te ayude a bajar de peso de una forma adecuada.
        </p>
        <button
            className='w-2/4 px-5 mt-5 p-3 rounded-lg font-medium text-xl uppercase bg-slate-500'
        >¿Necesitas un nutricionista?</button>
        <button
            className='w-3/4 px-5 bg-indigo-700 mb-10 mt-3 p-3 rounded-lg text-white font-medium text-2xl uppercase'
            onClick={() => {
                setValido(false)
            }}
        >Volver a calcular</button>
    
    
        </div>
    </div>
  )
}

export default Resultado