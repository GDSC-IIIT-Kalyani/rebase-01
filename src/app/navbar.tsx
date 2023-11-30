import './globals.css'

const navbar = () => {
    return(
        <section id='navbar'>
            <ul className='flex float-right gap-24 text-2xl mr-24'>
                <li><a href="#">About</a></li>
                <li><a href="#">Schedule</a></li>
                <li><a href="#">Tracks</a></li>
                <li><a href="#">Prizes</a></li>
                <li><a href="#">Sponsors</a></li>
                <li><a href="#">FAQs</a></li>
            </ul>
        </section>
    )
}

export default navbar