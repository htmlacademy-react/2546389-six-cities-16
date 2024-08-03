import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import PlaceCard from '../../components/place-card/place-card';
import { OfferPreview } from '../../types/offer';
import FavoritesEmptyScreen from '../../pages/favorites-empty-screen/favorites-empty-screen';

type FavoritesScreenProps = {
  offers: OfferPreview[];
};

function getFavoritesByLocation(items: OfferPreview[]) {
  return items.reduce<{ [key: string]: OfferPreview[]}>((acc, current) => {
    const location = current.city.name;
    if (!(location in acc)) {
      acc[location] = [];
    }
    acc[location].push(current);
    return acc;
  }, {});
}

function FavoritesScreen ({ offers }: FavoritesScreenProps) : JSX.Element{
  const favorites = offers.filter((item) => item.isFavorite);
  const favoritesByLocation = getFavoritesByLocation(favorites);
  const hasFavorites = Boolean(favorites?.length);

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {hasFavorites ? (
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {Object.entries(favoritesByLocation).map(
                  ([location, groupedFavorites]) => (
                    <li className="favorites__locations-items" key={location}>
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                          <a className="locations__item-link" href="#">
                            <span>{location}</span>
                          </a>
                        </div>
                      </div>
                      <div className="favorites__places">
                        {groupedFavorites.map((offer) => (
                          <PlaceCard
                            key={offer.id}
                            offer={offer}
                            variant="favorites"
                            size="small"
                          />
                        )
                        )}
                      </div>
                    </li>
                  )
                )}
              </ul>
            </section>
          )
            : <FavoritesEmptyScreen/>}
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default FavoritesScreen;
