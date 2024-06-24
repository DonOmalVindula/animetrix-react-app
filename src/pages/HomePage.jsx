import { useEffect, useState } from "react";
import { DefaultLayout } from "../layouts/Default";
import "../styles/HomePage.css";
import { getMovieCategories } from "../api/movies";
import { Loader } from "../components/Loader";

export const HomePage = () => {

    const [ categories, setCategories ] = useState([]);
    const [ isRequestLoading, setIsRequestLoading ] = useState(false);

    useEffect(() => {
        setIsRequestLoading(true);

        // Fetch all movie categories.
        getMovieCategories()
            .then((response) => {
                setCategories(response);
            }).catch((error) => {
                console.log("Error occured while fetching movie categories", error);
            }).finally(() => {
                setIsRequestLoading(false);
            });
    }, []);

    return (
        <DefaultLayout>
            <div className='container'>
                <div className='hero-section'>
                    <div className='hero-content'>
                        <div className='text-content'>
                            <h1>Naruto: Shippuden</h1>
                            <p>
                                a young ninja who dreams of becoming the Hokage, the strongest ninja and leader of his
                                village. Despite facing adversity due to the nine-tailed fox demon sealed within him,
                                Naruto's determination and unwavering belief in his dreams inspire those around him.
                            </p>
                            <button className='hero-button'>Watch now</button>
                        </div>
                    </div>
                </div>
                {
                    isRequestLoading ? (
                        <Loader />
                    ) : (
                        <div className='main-content-wrapper'>
                            {
                                categories && categories.map((category, index) => (
                                    <section className='category' key={ index }>
                                        <h2>{ category.catergoryName }</h2>
                                        <div className="movie-list-container">
                                        {
                                            category.resources.map((resource, index) => (
                                                <div className='resource-card' key={ index }>
                                                    <div className='card-content'>
                                                        <img 
                                                            className="movie-image" 
                                                            src={ resource.image }
                                                            alt='movie poster' 
                                                        />    
                                                        <h2>{ resource.name }</h2>
                                                        <p>{ resource.description }</p>
                                                        <a href='#' className='card-link'>
                                                            Watch now <span>➔</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            )) 
                                        }
                                        </div>
                                    </section>
                                )) 
                            }
                        </div>
                    )
                }
            </div>
        </DefaultLayout>
    );
};


