import { Offer } from '../../types/offer';
import FavoriteButton from '../favorite-button/favorite-button';
import { getRatingWidth, getBedroomsString, getAdultsString } from '../../utils/card';
import ReviewsList from '../reviews-list/reviews-list';


type OfferContainerProps = {
    offer: Offer;
  };

function OfferContainer ({offer} : OfferContainerProps) : JSX.Element{
  const {isPremium,title,isFavorite,rating,type,bedrooms,maxAdults,price,goods,host,description} = offer;
  return (
    <div className="offer__container container">
      <div className="offer__wrapper">
        {isPremium ? (
          <div className="offer__mark">
            <span>Premium</span>
          </div>
        ) : null}
        <div className="offer__name-wrapper">
          <h1 className="offer__name">
            {title}
          </h1>
          <FavoriteButton className='offer' isFavorites = {isFavorite}/>
        </div>
        <div className="offer__rating rating">
          <div className="offer__stars rating__stars">
            <span style={{ width: `${getRatingWidth(offer.rating)}` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
          <span className="offer__rating-value rating__value">{rating}</span>
        </div>
        <ul className="offer__features">
          <li className="offer__feature offer__feature--entire">
            {type}
          </li>
          <li className="offer__feature offer__feature--bedrooms">
            {getBedroomsString(bedrooms)}
          </li>
          <li className="offer__feature offer__feature--adults">
            {getAdultsString(maxAdults)}
          </li>
        </ul>
        <div className="offer__price">
          <b className="offer__price-value">&euro;{price}</b>
          <span className="offer__price-text">&nbsp;night</span>
        </div>
        <div className="offer__inside">
          <h2 className="offer__inside-title">What&apos;s inside</h2>
          <ul className="offer__inside-list">
            {goods.map((goodItem) => (
              <li key = {goodItem} className="offer__inside-item">
                {goodItem}
              </li>
            ))}
          </ul>
        </div>
        <div className="offer__host">
          <h2 className="offer__host-title">Meet the host</h2>
          <div className="offer__host-user user">
            <div className={`offer__avatar-wrapper ${host.isPro ? 'offer__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
              <img className="offer__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar"/>
            </div>
            <span className="offer__user-name">
              {host.name}
            </span>
            {host.isPro ? (
              <span className="offer__user-status">
                Pro
              </span>
            ) : null}
          </div>
          <div className="offer__description">
            <p className="offer__text">
              {description}
            </p>
          </div>
        </div>
        <ReviewsList offerId={offer.id} />
      </div>
    </div>
  );
}

export default OfferContainer;
