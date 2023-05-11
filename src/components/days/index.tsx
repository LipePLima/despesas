import './Days.scss'

type DayProps = {
     days: string[],
     date: number,
     month: number
}

const Days = ({ days, date, month }: DayProps) => {
     return (
          <section className='container__days'>
               <div className="days__information">
                    <input type="number" />
                    <input type="text" />
                    <button></button>
               </div>
               <hr />
               <table className="days__costs">
                    
               </table>
               <hr />
               <div>
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