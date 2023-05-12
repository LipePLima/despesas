import './Days.scss'
import { ApiResponse } from "../../interface/api"

type DayProps = {
     api: ApiResponse[],
     days: string[],
     hour: number,
     minutes: number
}

const Days = ({ days, hour, minutes }: DayProps) => {
     function newTime(data: number) {
          let newData = data.toString()
     
          if(data < 10) {
               newData = '0' + data
               return newData
          }

          return newData
     }

     function formatToReal(value: number): string {
          return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
     }

     function clear(element: HTMLInputElement) {
          element.value = ''
     }

     const capture = (e: HTMLButtonElement) => {
          const number = e.parentElement?.querySelector('#number') as HTMLInputElement;
          const text   = e.parentElement?.querySelector('#text') as HTMLInputElement;
          const value  = document.querySelector('#infoValue') as HTMLElement;
          const desc   = document.querySelector('#infoDesc') as HTMLElement;

          const formattedNumber = parseFloat(number.value);

          if (formattedNumber < 0) {
               value.style.color = '#FF0000'
          } else {
               value.style.color = '#25FF01'
          }

          value.innerHTML = formatToReal(formattedNumber);
          desc.innerHTML  = text.value;

          clear(number);
          clear(text);
     }
          
     return (
          <section className='container__days'>
               <div className="days__information">
                    <div className='information__value'>
                         <label htmlFor="number">Valor</label>
                         <input type="number" id='number' />
                    </div>
                    <div className='information__description'>
                         <label htmlFor="text">Descrição</label>
                         <input type="text" id='text' maxLength={30} />
                    </div>
                    <button onClick={e => capture(e.currentTarget)}>Confirmar</button>
               </div>
               <hr />
               <table className="days__costs">
                    <tbody>
                         <tr>
                              <td id='infoValue'>{}</td>
                              <td id='infoDesc'>Descrição do gastos e ganhos 1</td>
                              <td>{newTime(hour)}:{newTime(minutes)}</td>
                         </tr>
                    </tbody>
               </table>
               <hr />
               <div className='days__days'>
                    {days.map( (_value: string, index: number) => {
                         return(
                              <button key={index}>
                                   {_value}
                              </button>
                         )
                    })}
               </div>
          </section>
     )
}

export default Days;