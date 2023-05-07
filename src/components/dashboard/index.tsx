import "./Dashboard.scss"
import api from "../../api/data.json"

type DashboardProps = {
     day: number
}

const Dashboard = ({ day }: DashboardProps) => {
     const days: string[] =  [
          "Dom",
          "Seg",
          "Ter",
          "Qua",
          "Qui",
          "Sex",
          "Sab"
     ]   

     return (
          <section className="body__dashboard">
               <p className='dashboard__title'>Gastos - Últimos 7 dias</p>
               <div className='dashboard__graphics'>
                    {days.map(( _day: string, index: number )  => {
                         const ifTrue = index == day
                         const color = ifTrue ? 'rgb(118, 181, 188)' : 'rgb(236, 119, 95)'

                         const mouseOver = ( el: EventTarget & HTMLDivElement ): void => {
                              if (el.style.backgroundColor != 'rgb(118, 181, 188)') {
                                   el.style.backgroundColor = 'rgb(243, 169, 155)'
                              } else {
                                   el.style.backgroundColor = 'rgb(152 209 215)'
                              }     
                              
                              const elBro = el.parentNode?.childNodes[0] as HTMLDivElement;

                              elBro.style.display = 'flex'
                         }

                         const mouseOut = ( el: EventTarget & HTMLDivElement ): void => {
                              el.style.backgroundColor = color   
                              
                              const elBro = el.parentNode?.childNodes[0] as HTMLDivElement;

                              elBro.style.display = 'none'
                         }

                         return (
                              <div className='dashboard__graphic' key={index}>
                                   <div className="graphic__amount"><p>R${api[index].amount}</p></div>
                                   <div 
                                        className='graphic__info' 
                                        style={{ 
                                             backgroundColor: color, 
                                             height: `${api[index].height}px`
                                        }}
                                        onMouseOver={ e => mouseOver(e.currentTarget)}
                                        onMouseOut ={ e => mouseOut(e.currentTarget)}
                                   >

                                   </div>
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
