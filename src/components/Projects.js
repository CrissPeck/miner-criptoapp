import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/1.svg";
import projImg2 from "../assets/img/2.svg";
import projImg3 from "../assets/img/3.svg";
import projImg4 from "../assets/img/4.svg";
import projImg5 from "../assets/img/5.svg";
import projImg6 from "../assets/img/6.svg";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Interfaz de Usuario Elegante y Facil de usar ",
      description: " Nuestra interfaz de usuario moderna y fácil de usar permite a los principiantes y expertos navegar por el mundo de las criptomonedas con confianza.",
      imgUrl: projImg1,
    },
    {
      title: "Atención al Cliente 24/7:",
      description: "Nuestro equipo de soporte está disponible las 24 horas del día, los 7 días de la semana, para ayudarte con cualquier pregunta o problema que puedas tener.",
      imgUrl: projImg2,
    },
    {
      title: "Diversidad de Criptomonedas",
      description: "Accede a una amplia gama de criptomonedas populares y emergentes, desde Bitcoin, Ethereum, Litecoin de última generación entre otras mas.",
      imgUrl: projImg3,
    },
    {
      title: "Análisis en Tiempo Real",
      description: "Obtén el software exclisuvamente para ti y tus ganancias seran unicamente para ti, no recibimos comision ni porcentajes aparte de el costo de la key. todo lo generado por ti es unicamente para ti.",
      imgUrl: projImg4,
    },
    {
      title: "Acompañamiento totalmente personalizados",
      description: " Cualquier duda o inquietud te lo resolvemos inmediatamente, escribes a nustro telegram y uno de nuestros encargados del equipo de soporte te resolvera tu problema",
      imgUrl: projImg5,
    },
    {
      title: "Seguridad de Nivel Bancario:",
      description: "Utilizamos tecnología de cifrado de vanguardia para garantizar que tus activos digitales estén seguros en todo momento.",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Características Destacadas:</h2>
                <p>CryptoMiner Pro se ha convertido en la elección número uno para miles de personas interesadas en el mundo de criptomonedas debido a nuestra dedicación a la seguridad, la simplicidad y el rendimiento. Estamos comprometidos a brindarte la mejor experiencia en el mundo de las criptomonedas y a ayudarte a alcanzar tus objetivos financieros.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first"></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second"></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third"></Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>asjhsajshajahasjh</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>
¿COMO FUNCIONAN LAS LICENCIAS?
Las licencias funcionan por tiempo de expiración, tambien estan limitadas en rango de busqueda; es decir, mientras mas grande sea la licencia, mas rango de busqueda y por supuesto, mayor ganancia a encontrar. (La licencia diaria si encuentra fondos en el mismo dia, pero no se iguala al resto)
<br/>
¿COMO RETIRO LOS FONDOS?
La parte mas importante: antes de iniciar/ejecutar el programa, este mismo te pedira una direccion de destino, la cual debe ser de una wallet especifica las cuales te permitiran recibir todas las criptos sin necesidad de escoger una red (Los fondos del software a la wallet demoran 30min en la version basica y 5min aproximadamente dependiendo la version
<br/>
¿QUE SON LAS LICENCIAS?
Las licencias son la key privada del programa, es necesaria ya que sin ella no habra acceso alguno al programa. Estas licencias son únicas y especificas, ya que si son introducidas en 2 PC iguales, esta se bloqueará.
</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
