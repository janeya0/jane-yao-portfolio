import './About.scss';
import ProfilePic from '../../images/about-pfp.jpg'

const About = () => {
    return (
        <div>
            <div className='about'>
                <div className='about-text'>
                    Nice to meet you :)
                </div>
                <div className='grid grid-cols-2 pb-10'>
                    <div className=''>
                        <img src={ProfilePic}/>
                    </div>
                    <div className='about-description'>
                        Hey 👋 I'm Jane, <br></br><br></br>

                        If you were to describe me in a few bullet points, I would be.. <br></br><br></br>
                        <div className='pl-14'>
                            <li>curious about problem-solving in the creative space</li>
                            <li>invested in telling stories that makes you go "ooooo"</li>
                            <li>looking for opportunities to grow :)</li>
                            <li>always pushing the boundaries of my comfort zone (the desire to learn and grow 
                                waged war on my internal urge to stay within my comfort zone and there's been a 
                                ceaseless battle ever since)</li>
                        </div>
                        <br></br>
                            I am a computer science student at the <span className='highlight-text'>University of Waterloo 🪿 </span> 
                        <br></br><br></br>
                            My work at <span className='highlight-text'>1Password, Nokia, BitBakery,</span> and <span className='highlight-text'>Insticator</span> have
                            fostered my adaptability in a wide range of collaborative and fast-paced environments and is reflected through my work as a <span className='highlight-text'>Tools 
                            & DevOps developer, Front-end developer, Browser Extension test architect, Security Intern,</span> as well as personal passion projects. 
                        <br></br><br></br>
                        <span className='highlight-text'>Recently...</span> <br></br><br></br>
                        <div className=''>
                            I've delved into Unity projects, game design & development, and game jams to scratch my itch for world building, character building, and storytelling in the context of programming :)
                        </div>
                        <br></br>
                        {/* <a href="#" className='know-more-link' onClick={e => {
                            e.preventDefault();
                            const targetElement = document.getElementById('passions');
                            const {top, left} = targetElement?.getBoundingClientRect() || {top: 0, left: 0};
                            window.scrollTo(top + window.scrollY, left + window.scrollX);
                        }}>👉 Get to know me more</a> */}
                    </div>
                </div>
                <div id='passions'>
                    <div className='music'>
                    </div>
                    <div className='sports'>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About



