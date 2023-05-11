import Balance from '../balance';
import FlipSwiper from '../swiper'
import './Body.scss';

const Body = () => {
      const date: Date = new Date();
      const days: string[] =  [
            "Dom",
            "Seg",
            "Ter",
            "Qua",
            "Qui",
            "Sex",
            "Sab"
       ]   

      return (
            <main className="container__body">
                  <Balance />
                  <FlipSwiper 
                        dayOfWeek={date.getDay()}
                        days={days}
                        date={date.getDate()}
                        month={date.getMonth()+1}
                  />
            </main>
      )
}

export default Body;