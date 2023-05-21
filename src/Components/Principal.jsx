import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";


const Principal = ({whatsapp , linkedin , html , css , js , react , github , slack , notion , bootstrap , t}) => {



  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
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
            <div className="contPrincipal" >
                <div className="contPrincipalData">
                <div><h2>{t("title.¡Hi!")}</h2></div>
                <div><h1>{t("title.I'm")} <span id="myName">{t("title.Joel-Saldarriaga-Mera")}</span></h1></div>
                <div><h2>{t("title.Developer")} <span className="spanPrinc">{t("title.Web-Frontend")}</span></h2></div>
                <div className="positBtn">
                    <a href="https://api.whatsapp.com/send?phone=593962915626" target="_blank" rel="noopener noreferrer"><button><img width={30} src={whatsapp} alt="" /></button></a>
                    <a href="https://www.linkedin.com/in/joel-mera-32760923a" target="_blank" rel="noopener noreferrer"><button><img width={30} src={linkedin} alt="" /></button></a>
                </div>
                </div>
            </div>
            </SwiperSlide>
        <SwiperSlide>
            <div className="contPrincipal" >
                <div className="contPrincipalData">
                    <p>{t("title.I-like-programming-and-web-development.")} <br />
                    {t("title.I-love-learning,-improving,-and-honing-my-soft-and-human-skills,")} <br /> {t("title.I-specialize-in-frontend-technologies.")} <br /> {t("title.Although-I-am-always-willing-to-explore")} <br /> {t("title.new-languages-and-tools-for-development.")}
                    </p>
                </div>
            </div>
            </SwiperSlide>
        <SwiperSlide>
            <div className="contPrincipal" >
                <div className="contPrincipalData">
                <p>{t("title.In-my-path-as-a-developer-,-I-have-taken-skills")}<br /> 
                    {t("title.and-a-variety-of-technologies-that-allow-me-to-carry-out-all-kinds-of-projects.")}
                    </p>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="contPrincipal " >
                <div className="contPrincipalData ">
                  <div><h3>{t("title.I-know-how-to-use")}:</h3></div>
                    <div className="contPrincipal_row">
                        <div><img width={25} src={html} alt="" /><span>HTML</span></div>
                        <div><img width={25} src={css} alt="" /><span>CSS</span></div>
                        <div><img width={25} src={js} alt="" /><span>JS</span></div>
                        <div><img width={25} src={react} alt="" /><span>{t("title.REACT")}</span></div>
                        <div><img width={25} src={github} alt="" /><span>GITHUB</span></div>
                        <div><img width={25} src={slack} alt="" /><span>SLACK</span></div>
                        <div><img width={25} src={notion} alt="" /><span>NOTION</span></div>
                        <div><img width={25} src={bootstrap} alt="" /><span>BOOTSTRAP</span></div>
                    </div>
                </div>
            </div>
            </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Principal