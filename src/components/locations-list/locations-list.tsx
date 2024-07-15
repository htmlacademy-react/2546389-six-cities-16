const SITIES : String[] = ['Paris','Cologne','Brussels','Amsterdam','Hamburg','Dusseldorf'] as const;

type LocationsItemProps = {
    sity : String
  };

function LocationsItem ({sity} : LocationsItemProps) : JSX.Element{
    return (
        <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>{sity}</span>
                </a>
              </li>
    )
}

function LocationsList () : JSX.Element{
    return (
            <ul className ="locations__list tabs__list">
              {SITIES.map((sity) => <LocationsItem  sity ={sity}/>)}
            </ul>
    );
}


export default LocationsList;