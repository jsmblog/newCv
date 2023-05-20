import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
const Principal = ({whatsapp , linkedin , html , css , js , react , github , slack , notion , bootstrap}) => {
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
            <div className="contPrincipal" >
                <div className="contPrincipalData">
                <div><h2>¡ HI !</h2></div>
                <div><h1>{`I'm Joel Saldarriaga Mera`}</h1></div>
                <div><h2>Developer <span className="spanPrinc">Web Frontend</span></h2></div>
                <div className="positBtn">
                    <button><img width={30} src={whatsapp} alt="" /></button>
                    <button><img width={30} src={linkedin} alt="" /></button>
                </div>
                </div>
            </div>
            </SwiperSlide>
        <SwiperSlide>
            <div className="contPrincipal" >
                <div className="contPrincipalData">
                    <p> I like programming and web development. <br />
                    I love learning, improving, and honing my soft and human skills, <br /> I specialize in frontend technologies. <br /> Although I am always willing to explore <br /> new languages and tools for development.
                    </p>
                </div>
            </div>
            </SwiperSlide>
        <SwiperSlide>
            <div className="contPrincipal" >
                <div className="contPrincipalData">
                <p>In my path as a developer , I have taken skills <br /> and a variety of technologies
                    that allow me to carry out all kinds of projects.
                    </p>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="contPrincipal " >
                <div className="contPrincipalData ">
                    <div className="contPrincipal_row">
                        <div><img width={25} src={html} alt="" /><span>HTML</span></div>
                        <div><img width={25} src={css} alt="" /><span>CSS</span></div>
                        <div><img width={25} src={js} alt="" /><span>JS</span></div>
                        <div><img width={25} src={react} alt="" /><span>REACT</span></div>
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