import { useContext } from "react";
import MeetUpList from "../components/meetups/MeetUpList";
import FavouriteContext from '../store/favourites-context'

const Favourites = () => {
  const favouritesCtx = useContext(FavouriteContext);
  let content;
  console.log(favouritesCtx.totalFavorites)
  if(favouritesCtx.totalFavorites === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>
  } 
  else {
    content =  <MeetUpList meetups={favouritesCtx.favorites} />
  }
  return (
    <section>
        <h1>My Favorites</h1>
        {content}
    </section>
  )
}

export default Favourites