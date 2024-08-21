import PlaceCard from '../../components/place-card/place-card';
import { OfferPreview } from '../../types/offer';

type PlaceCardsListProps = {
  offers: OfferPreview[];
  onOverCard? : (evt : OfferPreview) => void;
};

function PlaceCardsList({offers,onOverCard}: PlaceCardsListProps): JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((dataCard) => (
        <PlaceCard
          variant="cities"
          size="large"
          key={dataCard.id}
          offer={dataCard}
          onOverCard={onOverCard}
        />
      ))}
    </div>);
}

export default PlaceCardsList;
