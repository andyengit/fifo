const Option = ({el,aprox,i}) => {


  return( <div className='options'>
    <h5>P{i}
    </h5>
    <div className='bar'>
      <p>Tiempo faltante: <b>{el}</b></p>
      {!!aprox && <p>Tiempo de Rafaga: <b>{aprox}</b></p>}
    </div>
  </div>
  )
}

export default Option
