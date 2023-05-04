import Balance from '../balance';
import Dashboard from '../dashboard'
import './Body.scss';

const Body = () => {
      const date: number = new Date().getDay();

      return (
            <section className="container__body">
                  <Balance />
                  <Dashboard day={date}/>
            </section>
      )
}

export default Body;