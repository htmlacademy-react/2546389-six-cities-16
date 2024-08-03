
type OfferInsideItemProps = {
    inside : string;
  };

function OfferInsideItem ({inside} : OfferInsideItemProps) : JSX.Element{
  return (
    <li className="offer__inside-item">
      {inside}
    </li>
  );
}

type inside = {
  name : string;
  id : number;
}

type OfferInsideListProps = {
  insides : ReadonlyArray<inside>;
};

function OfferInsideList ({insides} : OfferInsideListProps) : JSX.Element{
  return (
    <ul className="offer__inside-list">
      {
        insides.map((inside) => <OfferInsideItem key= {inside.id} inside ={inside.name}/>)
      };
    </ul>
  );
}

export default OfferInsideList;
