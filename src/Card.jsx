import { useState} from 'react';
import HeartToggle from "./HeartToggle";

export default function Card({id, title, year, director, image, isFavourite, onClick}){

    const [favouriteImage, setFavouriteImage] = useState(isFavourite);
    const toggleHeart = () => {
        setFavouriteImage(!favouriteImage);
        onClick(id);
    };
    

    return (
        <div key={id} className="card"
            style= {{background: `linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(255, 255, 255, 0)), url(${image})`, backgroundSize: "cover", cursor: 'pointer' }}
            onClick={toggleHeart} >
            <HeartToggle favouriteImage={favouriteImage} toggleHeart={() => onClick(id)} />
            <h2>{title}</h2>
            <p>{director}</p>
            <p><span>{year}</span></p>
            
            
        </div>
    )
};