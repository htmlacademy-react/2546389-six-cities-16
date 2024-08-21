import Header from '../../components/header/header';
import LocationsList from '../../components/locations-list/locations-list';
import { CityMap, sortOffers, SortVariants } from '../../const';
import { OfferPreview } from '../../types/offer';
import PlaceCardsList from '../../components/place-cards-list/place-cards-list';
import Map from '../../components/map/map';
import {useState} from 'react';
import {useAppSelector} from '../../store/hooks';
import SortOptions from '../../components/sort-options/sort-options';

type MainScreenProps = {
  offers: OfferPreview[];
  locations: typeof CityMap;
};

function MainScreen ({offers, locations} : MainScreenProps) : JSX.Element{

  const [activePlaceCard ,setActivePlaceCard] = useState(offers[0]);

  const onPlaceCardOver = (evt : OfferPreview) => {
    setActivePlaceCard(evt);
  };

  const currentCity = useAppSelector((state) => state.offers.city);

  let filteredOffers = useAppSelector(
    (state) => state.offers.offers.filter((offer) => offer.city.name === currentCity)
  );

  const currentSortVariant = useAppSelector(
    (state) => state.offers.sortVariant
  );

  const sortedOffers = sortOffers.find((variant) => variant.sortVariant === currentSortVariant as SortVariants)?.sort(filteredOffers);
  if(sortedOffers) {
    filteredOffers = sortedOffers;
  }

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsList locations={locations}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{filteredOffers.length} places to stay in {currentCity}</b>
              <SortOptions/>
              <PlaceCardsList offers={filteredOffers} onOverCard={onPlaceCardOver}/>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={filteredOffers[0].city} points={filteredOffers.slice(0,4)} selectedPoint={activePlaceCard}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
