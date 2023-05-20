import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
const SwiperPortfolio = ({mUp1 , mUp2 , mUp3 , mUp4 , mUp5 , mUp6 , mUp7 , mUp8}) => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="BoxPortfolio">
                <div ><img width={350} src={mUp1} alt="img-" className="contImgPort" /></div>
                <div className="paragraphPort" ><p><span>TEST PAGE:</span> I made this project to practice <br />  html and css . {`It's`} simple but fun.</p></div>
                <div><a href="https://portafolio-gen22.netlify.app/" target="_blank" rel="noopener noreferrer"><button>View Site</button></a></div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="BoxPortfolio">
                <div><img width={350} src={mUp2} alt="img-" className="contImgPort" /></div>
                <div className="paragraphPort" ><p><span>DATING APP: </span> Let words transform your day. <br /> Explore our phrases page and discover the magic of words that inspire, <br /> motivate and uplift your spirit.</p></div>
                <div><a href="https://app-quote.netlify.app/" target="_blank" rel="noopener noreferrer"><button>View Site</button></a></div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="BoxPortfolio">
                <div><img width={350} src={mUp3} alt="img-" className="contImgPort" /></div>
                <div className="paragraphPort" ><p><span>RICK AND MORTY: </span>Immerse yourself in the cosmic mayhem of Rick and Morty on our website. <br /> Discover exclusive content and unleash your interdimensional side!</p></div>
                <div><a href="https://rick-and-morty-joel.netlify.app/" target="_blank" rel="noopener noreferrer"><button>View Site</button></a></div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="BoxPortfolio">
                <div><img width={350} src={mUp4} alt="img-" className="contImgPort" /></div>
                <div className="paragraphPort" ><p><span>MAKEUP WEBSITE: </span>Unleash your creativity and transform your appearance with our makeup website. <br /> Discover trends, tutorials and essential products.</p></div>
                <div><a href="https://maquillaje-web.netlify.app/" target="_blank" rel="noopener noreferrer"><button>View Site</button></a></div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="BoxPortfolio">
                <div><img width={350} src={mUp5} alt="img-" className="contImgPort" /></div>
                <div className="paragraphPort" ><p><span>APP POKEDEX: </span>Are you ready to be a Pokémon Master? Discover our website and immerse yourself <br /> in the fascinating world of Pokémon battles, trades and adventures.</p></div>
                <div><a href="https://pokedex-joel.netlify.app/" target="_blank" rel="noopener noreferrer"><button>View Site</button></a></div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="BoxPortfolio">
                <div><img width={350} src={mUp6} alt="img-" className="contImgPort" /></div>
                <div className="paragraphPort" ><p><span>WEATHER APP: </span>Discover how our weather app will keep you informed and prepared for any weather condition. Try it right now.</p></div>
                <div><a href="https://app-clima-joel.netlify.app/" target="_blank" rel="noopener noreferrer"><button>View Site</button></a></div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="BoxPortfolio">
                <div><img width={350} src={mUp7} alt="img-" className="contImgPort" /></div>
                <div className="paragraphPort" ><p><span>CPP WEBSITE: </span>Learn the programming language c++.</p></div>
                <div><a href="https://cpp-language.netlify.app/" target="_blank" rel="noopener noreferrer"><button>View Site</button></a></div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="BoxPortfolio">
                <div><img width={350} src={mUp8} alt="img-" className="contImgPort" /></div>
                <div className="paragraphPort" ><p><span>ESPAM UNIVERSITY: </span>Replicate my university website. This is the original site → <a className="styleAncore" href="http://www.espam.edu.ec/inicio.aspx" target="_blank" rel="noopener noreferrer">Espam Mfl</a></p></div>
                <div><a href="https://espam-mfl.netlify.app/" target="_blank" rel="noopener noreferrer"><button>View Site</button></a></div>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default SwiperPortfolio