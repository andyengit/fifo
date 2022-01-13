const Option = ({el,aprox}) => {


  return( <div className='options'>
    <h5>Nombre
    </h5>
    <div className='bar'>
      <p>Tiempo faltante: <b>{el}</b></p>
      {!!aprox && <p>Tiempo estimado: <b>{aprox}</b></p>}
    </div>
  </div>
  )
}

export default Option
