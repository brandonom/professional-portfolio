import vogueimage from '../assets/urbanvogue.jpg';
import '../styles/urbanvogue.scss';

function UrbanVogue() {
    return(
        <div className="vogue-container">
            <h1 className="title-container" >UrbanVogue</h1>
                <div className='content-container'>
                <a href="https://urban-vogue-pj3-a02ec0642fcf.herokuapp.com/">
                    <img src={vogueimage} className="img-fluid" alt="UrbanVogue"/>
                </a>
                <p>A simply styled dynamic site that serves as a ecommerce site  </p>
                </div>

        </div>

    );
}

export default UrbanVogue;