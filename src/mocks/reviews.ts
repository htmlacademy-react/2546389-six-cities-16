import { Reviews } from '../types/reviews';

export const REVIEWS: Reviews[] =
[
  {
    id : 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a',
    date : '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Oliver Conner',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam',
    rating: 4
  },
  {
    id : 'f641a4cd-06b9-4a1d-8957-3e19fcad7948',
    date : '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Oliver Conner',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam',
    rating: 4
  }
];

export const getMockReviewsByOfferId = (offerId : string | undefined) => REVIEWS.filter((offer)=>offer.id === offerId);
