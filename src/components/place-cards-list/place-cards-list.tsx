import PlaceCard from '../../components/place-card/place-card';
import { OfferPreview } from '../../types/offer';
import {useState} from 'react';

type PlaceCardsListProps = {
  offers: OfferPreview[];
};

function PlaceCardsList({offers}: PlaceCardsListProps): JSX.Element {
  const [activePlaceCard, setActivePlaceCard] = useState(offers[0].id);

  const onPlaceCardOver = (evt : OfferPreview) => {
    setActivePlaceCard(evt.id);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((dataCard) => (
        <PlaceCard
          variant="cities"
          size="large"
          key={dataCard.id}
          offer={dataCard}
          setIsEditing={onPlaceCardOver}
        />
      ))}
    </div>);
}

export default PlaceCardsList;
