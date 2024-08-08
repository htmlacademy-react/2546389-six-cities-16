import {getMockReviewsByOfferId} from '../../mocks/reviews';
import ReviewItem from '../../components/review-item/review-item';
import { getAuthorizationStatus } from '../../utils/card';
import { AuthorizationStatus } from '../../const';
import ReviewsForm from '../../components/review-form/review-form';

type ReviewsListProps = {
    offerId: string | undefined;
  };

function ReviewsList ({offerId} : ReviewsListProps) : JSX.Element{
  const offerReviews = getMockReviewsByOfferId(offerId).slice(0,10);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{offerReviews.length}</span></h2>
      <ul className="reviews__list">
        {offerReviews.map ((review) => <ReviewItem key = {review.id} review={review} />)}
      </ul>
      {getAuthorizationStatus() === AuthorizationStatus.Auth ? <ReviewsForm/> : null}
    </section>);
}

export default ReviewsList;
