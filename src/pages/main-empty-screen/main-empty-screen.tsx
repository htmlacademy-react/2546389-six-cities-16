import Header from '../../components/header/header';
import LocationsList from '../../components/locations-list/locations-list';
import { CityMap } from '../../const';

function MainEmptyScreen () : JSX.Element{
  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index page__main--index-empty">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsList Amsterdam={CityMap.Amsterdam} Brussels={CityMap.Brussels} Cologne={CityMap.Cologne} Dusseldorf={CityMap.Dusseldorf} Hamburg={CityMap.Hamburg} Paris={CityMap.Paris} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">No places to stay available</b>
                <p className="cities__status-description">We could not find any property available at the moment in Dusseldorf</p>
              </div>
            </section>
            <div className="cities__right-section"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainEmptyScreen;
