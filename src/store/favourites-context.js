import {createContext, useState} from 'react';

const FavouriteContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorites: (favoriteMeetUp) => {},
    removeFavorites: (idMeetUp) => {},
    isFavorite: (idMeetUp) => {}
});

export function FavouriteContextProvider(props) {

    const [userFavourites,setUserFavourites] = useState([]);

    let addFavoritesHandler = (favoriteMeetUp) => {
        setUserFavourites((prevFavorites) => {
            return prevFavorites.concat(favoriteMeetUp);
        }) 
    }

    let removeFavoritesHandler = (meetUpID) => {
        setUserFavourites((prevFavorites) => {
            return prevFavorites.filter(meetUp => meetUp.id !== meetUpID);
        })
    }

    let itemIsFavoritesHandler = (meetUpID) => {
        return userFavourites.some(meetUp => meetUp.id === meetUpID);
    }

    const context = {
        favorites: userFavourites,
        totalFavorites: userFavourites.length,
        addFavorites: addFavoritesHandler,
        removeFavorites: removeFavoritesHandler,
        isFavorite: itemIsFavoritesHandler
    }

    return <FavouriteContext.Provider value={context} >
        {props.children}
    </FavouriteContext.Provider> 
}

export default FavouriteContext;