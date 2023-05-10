import Balance from '../balance';
import FlipSwiper from '../swiper'
import './Body.scss';

const Body = () => {
      const date: number = new Date().getDay();

      return (
            <main className="container__body">
                  <Balance />
                  <FlipSwiper date={date}/>
            </main>
      )
}

export default Body;