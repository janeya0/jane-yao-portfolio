import { Video } from '../../components/Video';
import './Projects.scss';
import janescamera from '../../images/janescamera.mp4';
import { useNavigate } from "react-router-dom";

const Projects2 = () => {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `/projects`; 
        navigate(path);
    }

    return (
        <div>
            <div className='main-projects'>
                <div className='projects-text'>
                    Projects
                </div>
                <div className="h-64 flex grid grid-cols-2">
                    {/* Section 4 */}
                    <div className="project-container flex-1 pr-10">
                        <div className='projects-title'>
                            <a href="https://janescamera.netlify.app/" rel="noreferrer">Photography Site</a>
                            <div className='wrapper'><div className='projects-tools'>JavaScript</div></div>
                        </div>
                        <hr/>
                        <div className='projects-description'>
                        A personal photography site that celebrates the essence of minimalistic photography. Immerse yourself in a serene visual experience captured and curated by me throughout my high school and post-secondary years :)
                        </div>
                    </div> 
                    <div className="text-white flex-1 p-10"><Video src={janescamera} id="video4" ratio='4_3'/></div>

                    {/* Pages */}
                    <div className='wrapperNextBtn' >
                        <div className='nextBtnDiv' onClick={routeChange}> ← </div>
                    </div>
                    <div></div>

                </div>
            </div>
        </div>
    )
}

export default Projects2



