import foodFinder from '../assets/foodFinder.png';
import '../styles/foodfinder.scss';

function Foodfinder() {
    return(
        <div className="foodfinder-container">
            <h1 className="title-container" >FoodFinder</h1>
                <div className='content-container'>
                <a href="https://sharktank3800.github.io/recipe_finder/">
                    <img src={foodFinder} className="img-fluid" alt="FoodFinder"/>
                </a>
                <p>A food repository that doubles as a search engine for both food and their corresponding recipes </p>
                </div>

        </div>

    );
}

export default Foodfinder;