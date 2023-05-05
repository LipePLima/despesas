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
          <div className="body__dashboard">
               <p className='dashboard__title'>Gastos - Últimos 7 dias</p>
               <div className='dashboard__graphics'>
                    {days.map(( _day: string, index: number )  => {

                         const ifTrue = index == day
                         const color = ifTrue ? `hsl(186, 34%, 60%)` : `hsl(10, 79%, 65%)`

                         return (
<                             div className='dashboard__graphic' key={index}>
                                   <div className='graphic__info' style={{ backgroundColor: color }}></div>
                                   <p>{ _day }</p>
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
          </div>
     )
}

export default Dashboard;