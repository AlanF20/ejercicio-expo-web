export default function Notification ({ Nombre, Descripcion, userImg = `https://placeimg.com/640/480/animals/${Math.random(11)}`, Fecha, isReaded, action, Costo }) {
  const haveAction = !action ? false : true
  return (
    <>
      <div className="notification__info">
        <div className="notification__info-div">
          <img className="notification__info-div-img" src={userImg} />
        </div>
        <div className="notification__info-desc">
          <p className="notification__info-desc-p">
          <strong className="notification__username">
            {Nombre} {" "} 
          </strong> 
           {Descripcion} 
          {haveAction && <strong className="action"> {action} </strong>} 
          <strong style={{color: 'black'}}> {Costo}</strong>
          {!isReaded &&<span className="badge">•</span>}</p>
          <span className="notification__info-desc-date"><strong style={{color: 'black'}}> {Fecha}</strong></span>
        </div>
      </div>
    </>
  )
}