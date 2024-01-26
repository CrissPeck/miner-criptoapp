import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>𝘾𝙐𝘼𝙉𝙏𝙊 𝙋𝙐𝙀𝘿𝙊 𝙂𝘼𝙉𝘼𝙍 𝙋𝙊𝙍 𝘿𝙄𝘼</h2>
                        <p>Teniendo en cuenta que las wallets pueden tener cualquier cantidad de fondos, las wallets sin fondos son automáticamente rechazadas la efectividad depende del tipo de plan que obtengas y el tiempo que debes el software trabajando, entre mayor sea el plan mayor efectividad tendras a la hora de encontar criptomonedas.<br/>𝗖𝗨𝗔𝗡𝗧𝗢 𝗧𝗔𝗥𝗗𝗔 𝗘𝗡 𝗘𝗡𝗖𝗢𝗡𝗧𝗥𝗔𝗥 𝗙𝗢𝗡𝗗𝗢𝗦? El tiempo aproximado para encontrar fondos es de 1hs hasta 5hs.<br/> Costo de la Key y efectividad:</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Diaria</h5>
                                <h5>C$20</h5>
                                
                            </div>
                            <div className="item">
                                <img src={meter2} alt="image" />
                                <h5>Semanal</h5>
                                <h5>C$30</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Mensual</h5>
                                <h5>C$50</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Anual</h5>
                                <h5>C$80</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>De por vida y socio</h5>
                                <h5>C$200</h5>
                            </div>
                        </Carousel>
                        <p>Los pagos se hacen mediante la moneda TetherUsdt por medio de Binance</p>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
