import { OfferPreview } from '../../types/offer';
import PlaceCard from '../../components/place-card/place-card';
import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';
import {useState} from 'react';

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

type FavoriteContainerProps = {
  offers: OfferPreview[];
  };

function FavoriteContainer ({ offers }: FavoriteContainerProps) : JSX.Element{

  const favoritesByLocation = getFavoritesByLocation(offers);

  const results = useState(offers[0].id);
  const setActivePlaceCard = results[1];

  const onPlaceCardOver = (evt : OfferPreview) => {
    setActivePlaceCard(evt.id);
  };

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {Object.entries(favoritesByLocation).map(
          ([location, groupedFavorites]) => (
            <li className="favorites__locations-items" key={location}>
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <Link className="locations__item-link" to={AppRoute.Root}>
                    <span>{location}</span>
                  </Link>
                </div>
              </div>
              <div className="favorites__places">
                {groupedFavorites.map((offer) => (
                  <PlaceCard
                    key={offer.id}
                    offer={offer}
                    variant="favorites"
                    size="small"
                    setIsEditing={onPlaceCardOver}
                  />
                ))}
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
}

export default FavoriteContainer;
