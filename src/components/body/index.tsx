import './Body.scss'
import { Fragment } from "react";

const Body = () => {
      return (
            <Fragment>
                  <section className="container__body">
                        <div className="body__balance">
                              <h1>Meus gastos</h1>
                              <p>R$ 499,00</p>
                              <div></div>
                              <div></div>
                        </div>
                        <div className="body__dashboard">
                              <p>Gastos - Últimos 7 dias</p>
                        </div>
                  </section>
            </Fragment>
      )
}

export default Body;