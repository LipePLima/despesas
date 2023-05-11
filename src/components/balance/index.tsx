import { AiOutlineEdit } from 'react-icons/ai'
import "./Balance.scss"

const Balance = () => {
     const showInput = ( el: Element ) => {
          const balance = el.parentNode?.querySelector('.balance__balance') as Element;
          const input   = balance.childNodes[1] as HTMLInputElement;

          input.style.display = 'initial'
          input.focus()
     }

     const changeBalance = ( e: HTMLInputElement ) => {
          let newNumber = e.value
          const balanceFinal = e.parentNode?.querySelector('p') as Element;

          if (newNumber.length > 0) {
               const valueInReais = parseFloat(newNumber) / 100;
               newNumber = valueInReais.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

               balanceFinal.innerHTML = `${newNumber}`;
          } else {
               balanceFinal.innerHTML = "R$ 00,00"; 

          }          

          e.style.display = 'none'
     }

     return (
          <section className="container__balance">
               <div className='balance__info'>
                    <div>
                         <h1>Meus saldo</h1>
                         <div className='balance__balance'>
                              <p>R$ 00,00</p>
                              <input type="text" pattern="[0-9]{11}" maxLength={11} onBlur={ e => changeBalance(e.currentTarget)}/>
                         </div>
                    </div>
                    <div onClick={ e => showInput(e.currentTarget)}>
                         <span>
                              <AiOutlineEdit
                                   className="balance__icon"
                                   size={26}
                              />
                         </span>
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