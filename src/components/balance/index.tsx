import { FiCheck } from 'react-icons/fi'
import { AiOutlineEdit } from 'react-icons/ai'
import "./Balance.scss"

const Balance = () => {
     const changeBalance = (e: Element) => {
          const balance = e.parentNode?.querySelector('.balance__balance') as Element;

     }

     return (
          <section className="container__balance">
               <div className='balance__info'>
                    <div>
                         <h1>Meus saldo</h1>
                         <div className='balance__balance'>
                              <p>R$ 499,00</p>
                              <input type="number" />
                         </div>
                    </div>
                    <div onClick={ e => changeBalance(e.currentTarget)}>
                         <AiOutlineEdit
                              className="balance__icon"
                              size={26}
                         />
                    </div>
               </div>
               <div className='balance__circles'>
                    <div className='circles__circleBorder'></div>
                    <div className='circles__circleFull'></div>
               </div>
          </section>
     )
}

export default Balance;