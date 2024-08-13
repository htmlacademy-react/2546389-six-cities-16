import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { OfferPreview } from '../../types/offer';
import { getRatingWidth } from '../../utils/card';
import FavoriteButton from '../../components/favorite-button/favorite-button';
import clsx from 'clsx';

type Size = 'small' | 'medium' | 'large';

type CardType = 'favorites' | 'cities' | 'near-places';

type OfferCardProps = {
  offer: OfferPreview;
  size: Size;
  variant?: CardType;
  onOverCard? : (evt : OfferPreview) => void;
};

function getImageSize(size: Size) {
  if (size === 'small') {
    return { width: '150', height: '110' };
  }
  if (size === 'large') {
    return { width: '260', height: '200' };
  }
}

function PlaceCard({offer,variant,size,onOverCard}: OfferCardProps): JSX.Element {
  return (
    <article onMouseOver={() => {
      //setIsEditing(offer);
      if (onOverCard){
        onOverCard(offer);
      }
    }} className={clsx(variant && `${variant}__card`, 'place-card')}
    >
      {
        offer.isPremium
          ? <div className="place-card__mark"><span>Premium</span></div>
          : null
      }
      <div
        className={clsx(
          variant && `${variant}__image-wrapper`,
          'place-card__image-wrapper'
        )}
      >
        <Link to={`${AppRoute.Offer}/${offer.id}`}>
          <img
            className="place-card__image"
            src={`${offer.previewImage}`}
            {...getImageSize(size)}
            alt={offer.title}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoriteButton className='place-card' isFavorites = {offer.isFavorite}/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${getRatingWidth(offer.rating)}` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
