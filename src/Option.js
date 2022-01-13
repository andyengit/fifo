const Option = ({el}) => {


  return( <div className='options'>
    <h5>Nombre
    </h5>
    <div className='bar'>
      <p>Tiempo faltante: <b>{el}</b></p>
    </div>
  </div>
  )
}

export default Option
