import { CityMap } from '../../const';

function LocationsList (locations : typeof CityMap) : JSX.Element{
  return (
    <ul className ="locations__list tabs__list">
      {
        Object.values(locations).map((city) => (
          <li key={city.name} className="locations__item">
            <a className="locations__item-link tabs__item" href="#">
              <span>{city.name}</span>
            </a>
          </li>
        ))
      }
    </ul>
  );
}

export default LocationsList;
