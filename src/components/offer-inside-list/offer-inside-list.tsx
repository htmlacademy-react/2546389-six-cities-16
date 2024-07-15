
type OfferInsideItemProps = {
    inside : String
  };

function OfferInsideItem ({inside} : OfferInsideItemProps) : JSX.Element{
    return (
        <li className="offer__inside-item">
            {inside}
          </li>
    )
}

type OfferInsideListProps = {
  insides : String[]
};


function OfferInsideList ({insides} : OfferInsideListProps) : JSX.Element{
    return (
        <ul className="offer__inside-list">
          {insides.map((inside) => <OfferInsideItem  inside ={inside}/>)};
        </ul>

    );
}


export default OfferInsideList;