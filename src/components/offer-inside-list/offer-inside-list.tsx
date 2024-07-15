
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

type OfferInsideListProps = {
  insides : string[];
};


function OfferInsideList ({insides} : OfferInsideListProps) : JSX.Element{
  return (
    <ul className="offer__inside-list">
      {
        insides.map((inside) => <OfferInsideItem key= {inside} inside ={inside}/>)
      };
    </ul>
  );
}

export default OfferInsideList;
