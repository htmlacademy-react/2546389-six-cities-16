import PlaceCard from '../../components/place-card/place-card';

type PlaceCardProps = {
    priceValue: number;
    priceText: string;
    img: string;
    description: string;
    rating : string ;
    visualMark : boolean;
    id : number;
  };

const CARDS : PlaceCardProps[] = [
  {img : 'img/apartment-01.jpg',
    priceValue : 120,
    priceText : 'night',
    description : 'Beautiful &amp; luxurious apartment at great location',
    rating : '80%',
    visualMark : true,
    id : 1
  },
  {img : 'img/room.jpg',
    priceValue : 80,
    priceText : 'night',
    description : 'Wood and stone place',
    rating : '80%',
    visualMark : false,
    id : 2
  },
  {
    img : 'img/apartment-02.jpg',
    priceValue : 132,
    priceText : 'night',
    description : 'Canal View Prinsengracht',
    rating : '80%',
    visualMark : false,
    id : 3
  },
  {
    img : 'img/apartment-03.jpg',
    priceValue : 180,
    priceText : 'night',
    description : 'Nice, cozy, warm big bed apartment',
    rating : '100%',
    visualMark : true,
    id : 4
  },
  {
    img : 'img/room.jpg',
    priceValue : 80,
    priceText : 'night',
    description : 'Wood and stone place',
    rating : '80%',
    visualMark : false,
    id : 5
  }] as const;

type PlacesListProps = {
        countCard: number;
      };
function PlacesList ({countCard}:PlacesListProps) : JSX.Element{
  return (
    <div className="cities__places-list places__list tabs__content">
      {CARDS.slice(0,countCard).map((sity) => <PlaceCard key = {sity.id} img ={sity.img} rating={sity.rating} description={sity.description} priceText={sity.priceText} priceValue={sity.priceValue} visualMark = {sity.visualMark}/>)}
    </div>
  );
}

export default PlacesList;
