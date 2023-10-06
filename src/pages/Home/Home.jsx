
import "./Home.css"
import BannerLeftSide from "../../components/BannerLeftSide/BannerLeftSide";
import BannerRightSide from "../../components/BannerRightSide/BannerRightSide";

const Home = () => {
  

  return (
    <div className=" background ">
      <div className="flex justify-around">
       <div className="w-[35rem]">
       <BannerLeftSide/>
       </div>
        <div className="w-80">
        <BannerRightSide/>
        </div>
      </div>
    </div>
  )
}

export default Home
