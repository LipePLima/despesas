import "./Dashboard.scss"
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ApiResponse } from "../../interface/api"

type DashboardProps = {
     day: number,
     days: string[]
}

const Dashboard = ({ day, days }: DashboardProps) => {
     const [data, setData] = useState<ApiResponse[] | null>(null);

     useEffect(() => {
          const fetchData = async () => {
            try {
              const response = await axios.get('/public/api/data.json');
              setData(response.data);
            } catch (error) {
              console.error('Erro ao buscar os dados da API:', error);
            }
          };
      
          fetchData();
     }, []);

     return (
          <section className="body__dashboard">
               <p className='dashboard__title'>Gastos - Últimos 7 dias</p>
               <div className='dashboard__graphics'>
                    {days.map(( _day: string, index: number )  => {
                         const ifTrue = index == day
                         const color = ifTrue ? 'rgb(118, 181, 188)' : 'rgb(236, 119, 95)'

                         const mouseOver = ( el: EventTarget & HTMLDivElement ): void => {
                              const elBro = el.parentNode?.childNodes[0] as HTMLDivElement;

                              if (el.style.backgroundColor != 'rgb(118, 181, 188)') {
                                   el.style.backgroundColor = 'rgb(243, 169, 155)'
                              } else {
                                   el.style.backgroundColor = 'rgb(152 209 215)'
                              }     

                              elBro.style.display = 'flex'
                         }

                         const mouseOut = ( el: EventTarget & HTMLDivElement ): void => {
                              const elBro = el.parentNode?.childNodes[0] as HTMLDivElement;

                              el.style.backgroundColor = color   
                              elBro.style.display = 'none'
                         }

                         return (
                              <div className='dashboard__graphic' key={index}>
                                   {data ? (
                                        <><div className="graphic__amount">
                                             <p>R${data[index].amount}</p>
                                        </div><div
                                             className='graphic__info'
                                             style={{
                                                  backgroundColor: color,
                                                  height: `${data[index].height}px`
                                             }}
                                             onMouseOver={e => mouseOver(e.currentTarget)}
                                             onMouseOut={e => mouseOut(e.currentTarget)}
                                        >
                                        </div>
                                        </>
                                   ) : (
                                        <p>Carregando dados...</p>
                                   )}
                                   <p className="graphic__text">{ _day }</p>
                              </div>
                         )
                    })}
               </div>
               <hr />
               <p className='total__title'>Total este mês</p>
               <div className='container__total'>
                    <p className='total__amount'>R$ 478,33</p>
                    <div className='total__comparison'>
                              <p className='total__percent'>+2.4%</p>
                              <p className='total__lastMonth'>Relação com o último mês</p>
                    </div>
               </div>
          </section>
     )
}

export default Dashboard;
