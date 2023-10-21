import button from "react-bootstrap";
import { Col, Row } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
 
  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>Inicia a generar tus ingresos desde la comodidad de tu casa<br/> Escribemos ahora mismo</h3>
            </Col>
            <Col md={6} xl={7}>
              <form >
                <div className="new-email-bx">
                  <button type="submit" ><a href="https://t.me/Mineros12" > Adquierelo Aqui</a></button>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      </Col>
  )
}
