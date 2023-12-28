import React from 'react';
import { Video } from '../../components/Video';
import './Projects.scss';
import fishyCat from '../../images/fishyCatDemo2.mp4';
import honkNHurdle from '../../images/honkNHurdle.mp4';
import simonSays from '../../images/simonSays.mp4';
import targetPractice from '../../images/targetPractice.mp4';
import { useNavigate } from "react-router-dom";

const Projects = () => {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `/projects2`; 
        navigate(path);
    }

    return (
        <div>
            <div className='main-projects'>
                <div className='projects-text'>
                    Projects
                </div>
                <div className="h-64 flex grid grid-cols-2">
                    {/* Section 0 */}
                    <div className="project-container flex-1 pr-10">
                        <div className='projects-title'>
                            <a href="https://janeyao.itch.io/target-practice" rel="noreferrer">Target Practice</a>
                            <div className='wrapper'><div className='projects-tools'>Unity | C#</div></div>
                        </div>
                        <hr/>
                        <div className='projects-description'>
                            Players are immersed in a first person shooting range designed to practice movement, aim, and agility commonly required in FPS games. 
                            The target changes to a random position once hit and the player must move their position accordingly to find and hit the next target.
                        </div>
                    </div> 
                    <div className="text-white flex-1 p-6">
                        <Video src={targetPractice} id="video0" ratio='4_3'/>
                    </div>

                    {/* Section 1 */}
                    <div className="project-container flex-1 pr-10">
                        <div className='projects-title'>
                            <a href="https://janeyao.itch.io/fishy-cat-v2" rel="noreferrer">Fishy Cat</a>
                            <div className='wrapper'><div className='projects-tools'>Unity | C#</div></div>
                        </div>
                        <hr/>
                        <div className='projects-description'>
                            Players play as a charming feline protagonist on a journey to catch a variety of fish in order to collect new cat friends and earn coins.
                        </div>
                    </div> 
                    <div className="text-white flex-1 p-6">
                        <Video src={fishyCat} id="video1" ratio='4_3'/>
                    </div>

                    {/* Section 2 */}
                    <div className="project-container flex-1 pr-10">
                        <div className='projects-title'>
                            <a href="https://janeyao.itch.io/honk-n-hurdle" rel="noreferrer">Honk n Hurdle</a>
                            <div className='wrapper'><div className='projects-tools'>Unity | C#</div></div>
                        </div>
                        <hr/>
                        <div className='projects-description'>
                            An infinite 2D runner game where players play as a goose dodging obstacles while chasing a student on the University of Waterloo campus.
                        </div>
                    </div> 
                    <div className="text-white flex-1 p-6">
                        <Video src={honkNHurdle} id="video2" ratio='4_3'/>
                    </div>

                    {/* Section 3 */}
                    <div className="project-container flex-1 pr-10">
                        <div className='projects-title'>
                            <a href="https://deft-beignet-abf8a7.netlify.app/" rel="noreferrer">Simon Says</a>
                            <div className='wrapper'><div className='projects-tools'>TypeScript | Vite</div></div>
                        </div>
                        <hr/>
                        <div className='projects-description'>
                            An implementation of the classic Simon Says game. Players must mimic a button sequence generated by the computer in the exact order to advance to the next level.
                        </div>
                    </div> 
                    <div className="text-white flex-1 p-6">
                        <Video src={simonSays} id="video3" ratio='4_3'/>
                    </div>

                    {/* Pages */}
                    <div className='wrapperNextBtn' >
                        <div className='nextBtnDiv' onClick={routeChange}> → </div>
                    </div>
                    <div></div>
                    <br></br>
                </div>
            </div>
        </div>
    )
}

export default Projects



