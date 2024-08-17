import Header from '../../components/header/header';
import LocationsList from '../../components/locations-list/locations-list';
import { CityMap } from '../../const';
import { OfferPreview } from '../../types/offer';
import PlaceCardsList from '../../components/place-cards-list/place-cards-list';
import Map from '../../components/map/map';
import {useState} from 'react';


type MainScreenProps = {
  offers: OfferPreview[];
  locations: typeof CityMap;
};

function MainScreen ({offers, locations} : MainScreenProps) : JSX.Element{

  const [activeSity ,setactiveSity] = useState('Paris');

  const onActiveSityClick = (sityName : string) => {
    setactiveSity(sityName);
  };

  const [activePlaceCard ,setActivePlaceCard] = useState(offers[0]);

  const onPlaceCardOver = (evt : OfferPreview) => {
    setActivePlaceCard(evt);
  };

  const offersInSelectSity = offers.filter((offer)=>offer.city.name === activeSity);

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsList onActiveSityClick = {onActiveSityClick} locations={locations}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersInSelectSity.length} places to stay in {activeSity}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <PlaceCardsList offers={offersInSelectSity} onOverCard={onPlaceCardOver}/>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={offersInSelectSity[0].city} points={offersInSelectSity.slice(0,4)} selectedPoint={activePlaceCard}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
