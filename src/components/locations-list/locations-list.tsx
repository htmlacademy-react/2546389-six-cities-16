import { CityMap } from '../../const';
import {setCurrentCity} from '../../store/slices/offerSlice';
import {useAppDispatch} from '../../store/hooks';
import { CitiesName } from '../../const';

type LocationsListProps = {
  locations : typeof CityMap;
};

function LocationsList ({locations} : LocationsListProps) : JSX.Element{

  const dispatch = useAppDispatch();
  const handleCityChange = (sity : CitiesName) => {
    dispatch(setCurrentCity(sity));
  };

  return (
    <ul className ="locations__list tabs__list" >
      {
        Object.values(locations).map((city) => (
          <li key={city.name} className="locations__item">
            <a className="locations__item-link tabs__item" href="#">
              <span onClick={() => handleCityChange(city.name)}>
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
