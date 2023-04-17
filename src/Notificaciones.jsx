import { useContext, useState } from "react"
import { NotificationsContext } from "./App"
import Notification from "./components/Notification"
import Header from "./Header"

export default function Notificaciones() {
  const {notifications} = useContext(NotificationsContext)
  const [readNotifications, setReadNotifications] = useState(notifications)
  function handleSetRead(){
    setReadNotifications(readNotifications.map(notificacion =>{
      return {
        ...notificacion,
        isReaded: true
      }
    }))
  }
  return (
    <div className="App">
      <Header />
      <header className='App__header'>
        <h2 className='App__header-noti'>Notifications <span className='number__noti'>{readNotifications.filter(not => not.isReaded == false).length}</span></h2>
        <a onClick={handleSetRead} className='App__header-action'>Mark all as read</a>
      </header>
      <ul className='App__ul'>
        {readNotifications.map(noti => {
          const { id, Nombre, Fecha, userImg, Descripcion,isReaded, action, Costo } = noti
          const className = isReaded ? 'App__ul-li-readed' : 'App__ul-li-unreaded'
          return (
            <li className={className} key={id}>
              <Notification
                Nombre={Nombre}
                Fecha={Fecha}
                userImg={userImg}
                Descripcion={Descripcion}
                action={action}
                isReaded={isReaded}
                Costo={Costo}
              />
            </li>
          )
        })
        }
      </ul>
    </div>
  )
}