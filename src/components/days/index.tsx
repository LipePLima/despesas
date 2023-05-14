import './Days.scss'
import { ApiResponse } from "../../interface/api"

type DayProps = {
     api: ApiResponse[],
     days: string[],
     hour: number,
     minutes: number
}

const Days = ({ api, days, hour, minutes }: DayProps) => {
     function selectDay(clicked: HTMLButtonElement): void {
          const content = clicked.textContent as string;
          const section = clicked.parentElement?.parentElement

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

          const formattedNumber = parseFloat(number.value);

          const newDrive = {
               value: formatToReal(formattedNumber),
               description: text.value,
               timetable: `${newTime(hour)}:${newTime(minutes)}`
          };

          const updatedJsonData = api.map((item) => ({
               ...item,
               costs: [...item.costs, newDrive]
          }));
          api[0].costs.push(newDrive)
          
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
                         {api[0].costs.map( (e, i: number) => {  
                              const number = parseFloat(e.value.replace("R$", "").replace(",", "."))
                              let color

                              if (number < 0) {
                                   color = '#FF0000';
                              } else {
                                   color = '#25FF01';
                              }

                              return (
                                   <tr key={i}>
                                        <td id='infoValue' style={{color: color}}>{e.value}</td>
                                        <td id='infoDesc'>{e.description}</td>
                                        <td>{e.timetable}</td>
                                   </tr>
                              )
                         })}
                    </tbody>
               </table>
               <hr />
               <div className='days__days'>
                    {days.map( (_value: string, index: number) => {
                         return(
                              <button 
                                   key={index} 
                                   id={_value} 
                                   className={_value} 
                                   onClick={e => 
                                        selectDay(e.currentTarget)
                                   }
                              >
                                   {_value}
                              </button>
                         )
                    })}
               </div>
          </section>
     )
}

export default Days;