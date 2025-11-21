import { forwardRef } from 'react';
import "../css/projects.css"
import '../css/comp.css';

const Projects = forwardRef((props, ref) => {
    return (
        <>
            <br></br>
            <div className="sk">
                <div className="btn"><a href="#">Projects</a></div>
            </div>
            <br></br>
            <br></br>
            <section className='gensk'>
                <div className="card">
                    <img className="card-image" src='public/Screenshot (76).png'></img>
                    <br></br>
                    <a href='https://avo101.netlify.app'>  <button>
                        <span>AVO</span>
                    </button></a>
                    <p className="card-body">
                        Avo is a hybrid decentralized application (dapp) designed to provide
                        secure file storage and streamlined communication using Web3
                        technologies. The platform integrates blockchain-based
                        authentication, off-chain distributed file storage, and modern
                        React-based UI to deliver a fast, privacy-focused user experience.
                    </p>
                    <p className="footer">PixelPro<br></br><span className=" by-name"><a href="https://avo101.netlify.app"> Demo</a></span> <span className="date">(c)</span></p>
                </div >

                <div className="card">

                    <img className="card-image" src='public/Screenshot (77).png'></img>
                    <br></br>
                    <a href='https://hauser.netlify.app'>  <button>
                        <span>HAUSER</span>
                    </button></a>
                    <p className="card-body">
                        Hauser is a full real-estate listing platform designed to allow agents and
                        landlords to publish properties, manage listings, and track user interactions. I
                        built Hauser as a full-stack web application with a strong focus on
                        automation, clean UI, and scalable property-management features.
                        The platform includes a dynamic agent and landlord dashboard,
                        authenticated through a custom Email and Password login system instead of traditional
                        user accounts. User roles (agent, landlord, visitor) are auto-detected and routed
                        to different dashboards for a seamless experience. The platform also includes a
                        dynamic agent and landlord dashboard, authenticated through a custom Email and Password
                        login system instead of traditional user accounts. User roles (agent, landlord, visitor)
                        are auto-detected and routed to different dashboards for a seamless experience. authentication and storage  are handled by googles firebase.
                    </p>
                    <p className="footer">PixelPro<br></br><span className=" by-name"><a href="https://avo101.netlify.app"> Demo</a></span> <span className="date">(c)</span></p>
                </div >


            </section >
        </>
    );
});

export default Projects;