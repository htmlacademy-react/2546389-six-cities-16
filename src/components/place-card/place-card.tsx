import PlaceCardMark from "../../components/place-card-mark/place-card-mark";

type PlaceCardProps = {
    priceValue: number;
    priceText: string;
    img: string;
    description: string;
    rating : string;
    typeCard : string;
    visualMark: boolean;
  };




function PlaceCard ( {priceValue, priceText,img ,description,rating, typeCard,visualMark} : PlaceCardProps) : JSX.Element{
    return (
        <article className= {typeCard + '__card place-card'} >
            <PlaceCardMark visual = {visualMark} /> 
            <div className= {typeCard + '__image-wrapper place-card__image-wrapper'}>
                <a href="#">
                <img className="place-card__image" src={img} width={260} height={200} alt="Place image" />
                </a>
            </div>
            <div className="place-card__info">
                <div className="place-card__price-wrapper">
                <div className="place-card__price">
                    <b className="place-card__price-value">&euro;{priceValue}</b>
                    <span className="place-card__price-text">&#47;&nbsp;{priceText}</span>
                </div>
                <button className="place-card__bookmark-button button" type="button">
                    <svg className="place-card__bookmark-icon" width="18" height="19">
                    <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                </button>
                </div>
                <div className="place-card__rating rating">
                <div className="place-card__stars rating__stars">
                    <span style={
                                    {width : rating}
                                }></span>
                    <span className="visually-hidden">Rating</span>
                </div>
                </div>
                <h2 className="place-card__name">
                <a href="#">{description}</a>
                </h2>
                <p className="place-card__type">Apartment</p>
            </div>
        </article>
    )

}

export default PlaceCard;