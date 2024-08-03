const SITIES : ReadonlyArray<Sity> = [
  {
    name :'Paris',
    id : 1,
  },
  {
    name :'Cologne',
    id : 2,
  },
  {
    name :'Brussels',
    id : 3,
  },
  {
    name :'Amsterdam',
    id : 1,
  },
  {
    name :'Hamburg',
    id : 1,
  },
  {
    name :'Dusseldorf',
    id : 1,
  }] as const;

type Sity = {
  name : string;
  id : number;
};

type LocationsItemProps = {
    sity : string;
  };

function LocationsItem ({sity} : LocationsItemProps) : JSX.Element{
  return (
    <li className="locations__item">
      <a className="locations__item-link tabs__item" href="#">
        <span>{sity}</span>
      </a>
    </li>
  );
}

function LocationsList () : JSX.Element{
  return (
    <ul className ="locations__list tabs__list">
      {
        SITIES.map((sity) => <LocationsItem key = {sity.id} sity ={sity.name}/>)
      }
    </ul>
  );
}

export default LocationsList;
