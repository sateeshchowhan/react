function Buttons({onClickHandler,value,title}) {    //buttons components
  return (
    <button onClick={onClickHandler}value={value}className="btns">
      {title}
    </button>
  )
}

export default Buttons;