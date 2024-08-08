import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { OfferPreview } from '../../types/offer';
import FavoritesEmptyScreen from '../../pages/favorites-empty-screen/favorites-empty-screen';
import FavoriteContainer from '../../components/favorite-container/favorite-container';

type FavoritesScreenProps = {
  offers: OfferPreview[];
};

function FavoritesScreen ({ offers }: FavoritesScreenProps) : JSX.Element{
  const favorites = offers.filter((item) => item.isFavorite);
  const hasFavorites = Boolean(favorites?.length);

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {hasFavorites ? (
            <FavoriteContainer offers={favorites}/>
          )
            : <FavoritesEmptyScreen/>}
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default FavoritesScreen;
