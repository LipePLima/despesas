import Balance from '../balance';
import Dashboard from '../dashboard'
import './Body.scss';

const Body = () => {
      return (
            <section className="container__body">
                  <Balance />
                  <Dashboard />
            </section>
      )
}

export default Body;