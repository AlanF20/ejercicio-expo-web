import { createContext, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Formulario from './Formulario' 
import Notificaciones from './Notificaciones'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Formulario />
  },
  {
    path: '/Notifications',
    element: <Notificaciones  />
  }
])
export const NotificationsContext = createContext(null)
function App() {
  const [notifications, setNotifications] = useState([
    {
      "id": 1,
      "Nombre": 'Oscar Moreno',
      "Descripcion": 'Ya no es rey mago.',
      "action": '...',
      "isReaded": false,
      "userImg": 'https://scontent.fntr4-1.fna.fbcdn.net/v/t39.30808-6/291114063_2741821312628208_9194783873925310319_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEGgZGBAnGh-719Q3SMmKzrVo0s7ceIfRxWjSztx4h9HPCXZIlgp9qgN-TO71kaOYknKUim8S9fY4TqbVqrxEDZ&_nc_ohc=rZYgj7OwbY8AX9inSL7&_nc_oc=AQnFEswPyNbT2oeZqY2HdkEeDFTrCA8lMaAtMnB6tzFx_92qdqkdCqirJY30Q4wOkck&_nc_ht=scontent.fntr4-1.fna&oh=00_AfB5-j0cR20JfIbIYV6Q8Kqjhcb_U8NHsJBFLgCtTFDn_A&oe=64179E07',
      "Fecha": '2 weeks ago',
      "Costo": '$1250'
    },
    {
      "id": 2,
      "Nombre": 'Fatima Garza',
      "Descripcion": 'Por eso se hacen los',
      "action": 'chismes...',
      "isReaded": false,
      "userImg": 'https://scontent.fntr4-1.fna.fbcdn.net/v/t39.30808-6/335395039_941476093657343_3414297302311109418_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5b7eaf&_nc_eui2=AeHhXgFvbtMIHN6yWB6tFD56z54at_Ek4PTPnhq38STg9C0GFgRxUIf7QHMbqBgwbJbSzjVqLaA4DDrxbpQGnkCl&_nc_ohc=_MvLBQLHsa8AX8EgLoQ&_nc_ht=scontent.fntr4-1.fna&oh=00_AfBu7RLExQbQTrXXaACL05s0UrwZkBNkeGKUNq2R6IDFrw&oe=64186569',
      "Fecha": '1 month ago',
      "Costo": '$350'
    },
    {
      "id": 3,
      "Nombre": 'Alan F',
      "Descripcion": 'Por eso se hacen los',
      "action": 'chismes...',
      "isReaded": false,
      "Fecha": '1 month ago',
      "Costo": '$550'
    }
  ])
  return (
    <NotificationsContext.Provider value={{notifications, setNotifications}}>
      <RouterProvider router={router} />
    </NotificationsContext.Provider>
  )
}

export default App
