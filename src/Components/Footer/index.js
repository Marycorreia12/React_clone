import './styles.css';
const Footer = () => {
const today = new Date();
const listaDocs = ['Installation', 'Main Concepts', 'Advanced Guides', 'API Reference', 'Hooks', 'Testing', 'Contributing', 'FAQ'];
const listaCommunity = ['Code of Conduct', 'Community Resources'];
const listaChannels = ['GitHub', 'Stack Overflow', 'Discussion Forums', 'Reactiflux Chat', 'DEV Community', 'Facebbok', 'Twitter'];
const listaMore = ['Tutorial', 'Blog', 'Acknowledgements', 'React Native', 'Privacy', 'Terms'];
    return (
        <footer>
            <div className='flex'>
            <div className='flex-items'>
                <p className='facebook'><a href="https://opensource.fb.com/projects/">FACEBOOK OPEN SOURCE</a></p>
                <p>Copyright &copy; {today.getFullYear()}  Meta Platforms, Inc.</p>
            </div>
            <div className='flex-items'>
                <ul>
                    <li className='title'>Docs</li>
                    {listaDocs.map((docs) => (
                        <li className='items'>{docs}</li>                   
                    ))}
                </ul>

                <ul>
                    <li className='title'>Community</li>
                    {listaCommunity.map((docs) => (
                        <li className='items'>{docs}</li>                   
                    ))}
                </ul>
            </div>
            <div className='flex-items'>
                <ul>
                    <li className='title'>Channel</li>
                    {listaChannels.map((docs) => (
                        <li className='items'>{docs}</li>                   
                    ))}
                </ul>

                <ul>
                    <li className='title'>More</li>
                    {listaMore.map((docs) => (
                        <li className='items'>{docs}</li>                   
                    ))}
                </ul>
            </div>

            </div>
           
        </footer>
    )
}

export default Footer