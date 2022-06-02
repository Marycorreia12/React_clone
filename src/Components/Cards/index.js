import './styles.css';
const cards = [
    {
        header: 'Declarative',
        content1: 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes',
        content2: 'Declarative views make your code more predictable and easier to debug',
    }, 
    {
        header: 'Declarative',
        content1: 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes',
        content2: 'Declarative views make your code more predictable and easier to debug',

    }, 
    {
        header: 'Declarative',
        content1: 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes',
        content2: 'Declarative views make your code more predictable and easier to debug',

    }
]
const Cards = () => {
    return (
            <section className="main-cards">
                <div className="main-cards-container">
                        {cards.map(({header, content1, content2}) =>
                        <>
                        <div className="cards-content">
                            <h3>{header}</h3>
                            <p>{content1}</p>
                            <p>{content2}</p>
                        </div>
                        </>
                        )}
                </div>
            </section>
    )
} 

export default Cards;