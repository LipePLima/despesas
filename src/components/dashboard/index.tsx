import "./Dashboard.scss"

const Dashboard = (props: { day: number }) => {
     const dayGraphic = document.getElementById(`${props.day}`) as HTMLElement;
     console.log(dayGraphic)

     
     return (
          <div className="body__dashboard">
               <p className='dashboard__title'>Gastos - Últimos 7 dias</p>
               <div className='dashboard__graphics'>
                    <div className='dashboard__graphic'>
                              <div className='graphic__info' id="0"></div>
                              <p>Dom</p>
                    </div>
                    <div className='dashboard__graphic'>
                              <div className='graphic__info' id="1"></div>
                              <p>Seg</p>
                    </div>
                    <div className='dashboard__graphic'>
                              <div className='graphic__info' id="2"></div>
                              <p>Ter</p>
                    </div>
                    <div className='dashboard__graphic'>
                              <div className='graphic__info' id="3"></div>
                              <p>Qua</p>
                    </div>
                    <div className='dashboard__graphic'>
                              <div className='graphic__info' id="4"></div>
                              <p>Qui</p>
                    </div>
                    <div className='dashboard__graphic'>
                              <div className='graphic__info' id="5"></div>
                              <p>Sex</p>
                    </div>
                    <div className='dashboard__graphic'>
                              <div className='graphic__info' id="6"></div>
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