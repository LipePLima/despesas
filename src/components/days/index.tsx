import './Days.scss'
import { ApiResponse } from "../../interface/api"
import { useRef } from 'react'

type DayProps = {
     api: ApiResponse[],
     days: string[],
     hour: number,
     minutes: number
}

const Days = ({ api, days, hour, minutes }: DayProps) => {
     function selectDay(clicked: HTMLButtonElement): void {
          const content = clicked.textContent as string;

          api.map( (e: ApiResponse, i: number) => {
               const brothers = clicked.parentElement?.children as HTMLCollection;

               if (brothers[i].textContent != content) {
                    brothers[i].classList.remove('button__active');

               } else if(e.day == content) {
                    clicked.classList.add('button__active');

               }
          });    
     }

     function newTime(data: number): string {
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

     function clear(element: HTMLInputElement): void {
          element.value = ''
     }

     function capture (e: HTMLButtonElement): void {
          const number = e.parentElement?.querySelector('#number') as HTMLInputElement;
          const text   = e.parentElement?.querySelector('#text') as HTMLInputElement;
          const value  = document.querySelector('#infoValue') as HTMLElement;

          const formattedNumber = parseFloat(number.value);

          if (formattedNumber < 0) {
               value.style.color = '#FF0000';
          } else {
               value.style.color = '#25FF01';
          }

          const newDrive = {
               value: formatToReal(formattedNumber),
               description: text.value,
               timetable: `${newTime(hour)}:${newTime(minutes)}`
          };

          clear(number);
          clear(text);
     }

     const myElementRef = useRef(null);  
          
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
                         {api.map( (e: ApiResponse, i: number) => {                 
                              return (
                                   <tr key={i}>
                                        <td id='infoValue'>{}</td>
                                        <td id='infoDesc'>Descrição do gastos e ganhos 1</td>
                                        <td>{newTime(hour)}:{newTime(minutes)}</td>
                                   </tr>
                              )
                         })}
                    </tbody>
               </table>
               <hr />
               <div className='days__days'>
                    {days.map( (_value: string, index: number) => {
                         return(
                              <button ref={myElementRef} key={index} id={_value} onClick={e => selectDay(e.currentTarget)}>
                                   {_value}
                              </button>
                         )
                    })}
               </div>
          </section>
     )
}

export default Days;