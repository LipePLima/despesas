import './Days.scss'

type DayProps = {
     days: string[],
     date: number,
     month: number
}

const Days = ({ days, date, month }: DayProps) => {
     let newMonth = month.toString();
     let newDate  = date.toString();

     if(month < 10) {
          newMonth = '0' + month
     }

     if(date < 10) {
          newDate = '0' + date
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
                    <button>Confirmar</button>
               </div>
               <hr />
               <table className="days__costs">
                    <tr>
                         <td>135,00</td>
                         <td>Descrição do gastos e ganhos 1</td>
                         <td>{newDate}/{newMonth}</td>
                    </tr>
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