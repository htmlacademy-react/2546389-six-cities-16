import { CityMap } from '../../const';

type LocationsListProps = {
  locations : typeof CityMap;
  onActiveSityClick? : (sityName : string) => void;
};

function LocationsList ({locations,onActiveSityClick} : LocationsListProps) : JSX.Element{
  return (
    <ul className ="locations__list tabs__list" >
      {
        Object.values(locations).map((city) => (
          <li key={city.name} className="locations__item">
            <a className="locations__item-link tabs__item" href="#">
              <span onClick={() => {
                if (onActiveSityClick){
                  onActiveSityClick(city.name);
                }
              }}
              >
                {city.name}
              </span>
            </a>
          </li>
        ))
      }
    </ul>
  );
}

export default LocationsList;
