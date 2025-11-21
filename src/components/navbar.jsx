import '../css/comp.css' // CRITICAL FIX: Modified path from '../css/comp.css'
// CRITICAL: Ensure you receive the props here
export default function Navbar({ scrollToSection, sectionRefs }) {
    return (
        <>
            <br></br>
            <nav className="nav">
                <h1 className="logo">----</h1>
                <ul className="nav-links">

                    {/* MODIFICATION: Calling scrollToSection(sectionRefs.about) */}
                    <li>
                        <button className="btn2" onClick={() => scrollToSection(sectionRefs.about)}>
                            <span className="spn2">About</span>
                        </button>
                    </li>

                    {/* MODIFICATION: Calling scrollToSection(sectionRefs.skills) */}
                    <li>
                        <button className="btn2" onClick={() => scrollToSection(sectionRefs.skills)}>
                            <span className="spn2">Skills</span>
                        </button>
                    </li>



                    <li>
                        <button className="btn2" onClick={() => scrollToSection(sectionRefs.hero)}>
                            <span className="spn2">Hero</span>
                        </button>
                    </li>





                    {/* MODIFICATION: Calling scrollToSection(sectionRefs.projects) */}
                    <li>
                        <button className="btn2" onClick={() => scrollToSection(sectionRefs.projects)}>
                            <span className="spn2">Projects</span>
                        </button>
                    </li>

                    {/* MODIFICATION: Calling scrollToSection(sectionRefs.contact) */}
                    <li>
                        <button className="btn2" onClick={() => scrollToSection(sectionRefs.contact)}>
                            <span className="spn2">Contact</span>
                        </button>
                    </li>
                </ul>
            </nav >
        </>
    );
}