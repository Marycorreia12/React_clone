import './styles.css';
import Hero from '../Hero';
import Cards from '../Cards';
import Button from '../Button'
const Main = () => {
    return (
        <main className="main-bg">
           <Hero />
           <Cards/>
           <div className="button-bottom-bg">
                <Button/>
           </div>
        </main>
    )
} 

export default Main;