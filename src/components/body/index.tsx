import './Body.scss'
import { Fragment } from "react";

const Body = () => {
      return (
            <Fragment>
                  <section className="container__body">
                        <div className="body__balance">
                              <div>
                                    <h1>Meus gastos</h1>
                                    <p>R$ 499,00</p>
                              </div>
                              <div className='balance__circles'>
                                    <div className='circles__circleBorder'></div>
                                    <div className='circles__circleFull'></div>

                              </div>
                        </div>
                        <div className="body__dashboard">
                              <p>Gastos - Últimos 7 dias</p>
                        </div>
                  </section>
            </Fragment>
      )
}

export default Body;