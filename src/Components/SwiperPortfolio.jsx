import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
const SwiperPortfolio = ({mUp1 , mUp2 , mUp3 , mUp4 , mUp5 , mUp6 , mUp7 , mUp8 , mUp9 , mUp10, t}) => {
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
                <div className="paragraphPort" ><p><span>TEST PAGE: </span>{t("title.I-made-this-project-to-practice")}  <br /> {t("title.html-and-css-.-It's-simple-but-fun.")}  </p></div>
                <div><a href="https://portafolio-gen22.netlify.app/" target="_blank" rel="noopener noreferrer"><button>{t("title.View-Site")}</button></a></div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="BoxPortfolio">
                <div><img width={350} src={mUp2} alt="img-" className="contImgPort" /></div>
                <div className="paragraphPort" ><p><span>QUOTE APP: </span> {t("title.Let-words-transform-your-day.")} <br /> {t("title.Explore-our-phrases-page-and-discover-the-magic-of-words-that-inspire-,")} <br /> {t("title.motivate-and-uplift-your-spirit.")}</p></div>
                <div><a href="https://app-quote.netlify.app/" target="_blank" rel="noopener noreferrer"><button>{t("title.View-Site")}</button></a></div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="BoxPortfolio">
                <div><img width={350} src={mUp3} alt="img-" className="contImgPort" /></div>
                <div className="paragraphPort" ><p><span>RICK AND MORTY: </span>{t("title.Immerse-yourself-in-the-cosmic-mayhem-of-Rick-and-Morty-on-our-website.")} <br /> {t("title.Discover-exclusive-content-and-unleash-your-interdimensional-side!")}</p></div>
                <div><a href="https://rick-and-morty-joel.netlify.app/" target="_blank" rel="noopener noreferrer"><button>{t("title.View-Site")}</button></a></div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="BoxPortfolio">
                <div><img width={350} src={mUp4} alt="img-" className="contImgPort" /></div>
                <div className="paragraphPort" ><p><span>MAKEUP WEBSITE: </span>{t("title.Unleash-your-creativity-and-transform-your-appearance-with-our-makeup-website.")} <br /> {t("title.Discover-trends,-tutorials-and-essential-products.")}</p></div>
                <div><a href="https://maquillaje-web.netlify.app/" target="_blank" rel="noopener noreferrer"><button>{t("title.View-Site")}</button></a></div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="BoxPortfolio">
                <div><img width={350} src={mUp5} alt="img-" className="contImgPort" /></div>
                <div className="paragraphPort" ><p><span>APP POKEDEX: </span>{t("title.Are-you-ready-to-be-a-Pokémon-Master?-Discover-our-website-and-immerse-yourself")} <br /> {t("title.in-the-fascinating-world-of-Pokémon-battles,-trades-and-adventures.")}</p></div>
                <div><a href="https://pokedex-joel.netlify.app/" target="_blank" rel="noopener noreferrer"><button>{t("title.View-Site")}</button></a></div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="BoxPortfolio">
                <div><img width={350} src={mUp6} alt="img-" className="contImgPort" /></div>
                <div className="paragraphPort" ><p><span>WEATHER APP: </span>{t("title.Discover-how-our-weather-app-will-keep-you-informed-and-prepared-for-any-weather-condition.-Try-it-right-now.")}</p></div>
                <div><a href="https://app-clima-joel.netlify.app/" target="_blank" rel="noopener noreferrer"><button>{t("title.View-Site")}</button></a></div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="BoxPortfolio">
                <div><img width={350} src={mUp7} alt="img-" className="contImgPort" /></div>
                <div className="paragraphPort" ><p><span>CPP WEBSITE: </span>{t("title.Learn-the programming-language-c++.")}</p></div>
                <div><a href="https://cpp-language.netlify.app/" target="_blank" rel="noopener noreferrer"><button>{t("title.View-Site")}</button></a></div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="BoxPortfolio">
                <div><img width={350} src={mUp8} alt="img-" className="contImgPort" /></div>
                <div className="paragraphPort" ><p><span>ESPAM UNIVERSITY: </span>{t("title.Replicate-my-university-website.-This-is-the-original-site-→")} <a className="styleAncore" href="http://www.espam.edu.ec/inicio.aspx" target="_blank" rel="noopener noreferrer">Espam Mfl</a></p></div>
                <div><a href="https://espam-mfl.netlify.app/" target="_blank" rel="noopener noreferrer"><button>{t("title.View-Site")}</button></a></div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="BoxPortfolio">
                <div><img width={350} src={mUp9} alt="img-" className="contImgPort" /></div>
                <div className="paragraphPort" ><p><span>TIC TAC TOE: </span>{t("title.Play-with-a-partner-or-with-the-computer.")}</p></div>
                <div><a href="https://game-joel.netlify.app/" target="_blank" rel="noopener noreferrer"><button>{t("title.View-Site")}</button></a></div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="BoxPortfolio">
                <div><img width={350} src={mUp10} alt="img-" className="contImgPort" /></div>
                <div className="paragraphPort" ><p><span>SNAKE GAME: </span>{t("title.Have-fun-playing-this-classic-snake-game.")}</p></div>
                <div><a href="https://snake-jsm.netlify.app/" target="_blank" rel="noopener noreferrer"><button>{t("title.View-Site")}</button></a></div>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default SwiperPortfolio