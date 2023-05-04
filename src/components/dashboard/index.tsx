import "./Dashboard.scss"

const Dashboard = () => {
     return (
          <div className="body__dashboard">
               <p className='dashboard__title'>Gastos - Últimos 7 dias</p>
               <div className='dashboard__graphics'>
                    <div className='dashboard__graphic'>
                              <div className='graphic__info'></div>
                              <p>Dom</p>
                    </div>
                    <div className='dashboard__graphic'>
                              <div className='graphic__info'></div>
                              <p>Seg</p>
                    </div>
                    <div className='dashboard__graphic'>
                              <div className='graphic__info'></div>
                              <p>Ter</p>
                    </div>
                    <div className='dashboard__graphic'>
                              <div className='graphic__info'></div>
                              <p>Qua</p>
                    </div>
                    <div className='dashboard__graphic'>
                              <div className='graphic__info'></div>
                              <p>Qui</p>
                    </div>
                    <div className='dashboard__graphic'>
                              <div className='graphic__info'></div>
                              <p>Sex</p>
                    </div>
                    <div className='dashboard__graphic'>
                              <div className='graphic__info'></div>
                              <p>Sab</p>
                    </div>
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