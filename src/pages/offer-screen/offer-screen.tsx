import Header from '../../components/header/header';
import { Navigate, useParams } from 'react-router-dom';
import {getMockNearOfferCardsById, getMockOfferCardsById} from '../../mocks/offers';
import { AppRoute } from '../../const';
import PlaceCard from '../../components/place-card/place-card';
import OfferContainer from '../../components/offer-container/offer-container';
import Map from '../../components/map/map';

function OfferScreen () : JSX.Element{

  const {offerId: offerId} = useParams();

  const nearOfferCards = getMockNearOfferCardsById(offerId).slice(0,3);
  const currentOffer = getMockOfferCardsById(offerId);

  if (!currentOffer){
    return <Navigate to={AppRoute.NotFound} replace/>;
  }

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {currentOffer.images.map((image) => (
                <div key = {image} className="offer__image-wrapper">
                  <img className="offer__image" src={image} alt="Photo studio"/>
                </div>
              ))}
            </div>
          </div>
          <OfferContainer offer={currentOffer}/>
          <section className="offer__map map">
            <Map city={nearOfferCards[0].city} points={nearOfferCards} selectedPoint={undefined} />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {nearOfferCards.map((offerCard) => <PlaceCard key = {offerCard.id} offer = {offerCard} variant = 'near-places' size='large'/>)}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferScreen;
