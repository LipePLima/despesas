import "./Balance.scss"

const Balance = () => {
     return (
          <div className="body__balance">
               <div className='balance__info'>
                    <h1>Meus saldo</h1>
                    <p>R$ 499,00</p>
               </div>
               <div className='balance__circles'>
                    <div className='circles__circleBorder'></div>
                    <div className='circles__circleFull'></div>
               </div>
          </div>
     )
}

export default Balance;