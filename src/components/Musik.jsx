import Musikimg from "../assets/image.png";
import '../styles/musik.scss';




function Musik() {
    return (
        <div className="musik-container">
            <h1>Musik</h1>
            <div className="content-container">
                <p>A hybrid music repository and social media platform using the Spotify Api</p>
                <a href="https://arcane-refuge-32686-92d3868f1b08.herokuapp.com/">
                    < img src={Musikimg} alt="Musik Image " />
                </a>
            </div>
        </div>
    );
}

export default Musik