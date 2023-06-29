
import SwiperPortfolio from "./SwiperPortfolio"

const Portfolio = ({isOnSPort , mUp1 , mUp2 , mUp3 , mUp4 , mUp5 , mUp6 , mUp7 , mUp8 , t , mUp9 , mUp10}) => {
    
  return (
    <>
    <div className={`${isOnSPort} aOff`}>
        <SwiperPortfolio t={t} mUp1={mUp1} mUp2={mUp2} mUp3={mUp3} mUp4={mUp4} mUp5={mUp5} mUp6={mUp6} mUp7={mUp7} mUp8={mUp8} mUp9={mUp9} mUp10={mUp10} />
    </div>
    </>
  )
}

export default Portfolio