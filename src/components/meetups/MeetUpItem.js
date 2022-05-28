import { useContext } from "react";
import { Card } from "../ui/Card";
import classes from "./MeetUpItem.module.css";
import FavouriteContext from '../../store/favourites-context'

const MeetUpItem = (props) => {
  const favoritesCtx =  useContext(FavouriteContext);
  const itemIsFavorite = favoritesCtx.isFavorite(props.id);
  let toggleFavoritesStatusHandler = () => {
    if(itemIsFavorite) {
      favoritesCtx.removeFavorites(props.id)
    }
    else {
      favoritesCtx.addFavorites({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address
      })
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>

        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
            
        <div className={classes.actions}>
          <button onClick={toggleFavoritesStatusHandler} >{itemIsFavorite ? 'Remove Favorite' : 'To Favourites'}</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetUpItem;
