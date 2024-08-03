type PlaceCardMarkProps = {
    visual : boolean;
  };

function PlaceCardMark ({visual}:PlaceCardMarkProps) : JSX.Element{
  return (
    <div className="place-card__mark" hidden = {!visual} >
      <span>{'Premium'}</span>
    </div>
  );
}

export default PlaceCardMark;
