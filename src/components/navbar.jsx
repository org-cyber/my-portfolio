import '../css/comp.css'


export default function Navbar() {
    return (
        <>
            <br></br>
            <nav className="nav">
                <h1 className="logo">----</h1>
                <ul className="nav-links">
                    <li><button className="btn2"><a className="spn2" href="#about">About</a></button></li>
                    <li><button className="btn2"><a className="spn2" href="#skills">Skills</a></button></li>
                    <li><button className="btn2"><a className="spn2" href="#projects">Projects</a></button></li>
                    <li><button className="btn2"><a className="spn2" href="#contact">Contact</a></button></li>
                </ul>
            </nav >
        </>
    );
}
