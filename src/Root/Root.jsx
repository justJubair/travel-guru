import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"

const Root = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-4">
        <Navbar/>
      </div>
      <Outlet/>
    </div>
  )
}

export default Root
