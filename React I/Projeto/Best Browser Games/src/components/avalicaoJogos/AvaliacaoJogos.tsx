type StarRatingType = {
    handleClick: (e:any) => any
    rating: any
}

const StarRating = (props:StarRatingType) => {
return (
    <div>
      {[1, 2, 3, 4, 5].map((value) => (
        <span key={value} onClick={() => props.handleClick(value)} style={{ cursor: 'pointer', color: value <= props.rating ? 'gold' : 'gray' }}>&#9733; {/* Estrela preenchida */}
        </span>
      ))}
    </div>
  );
};

export default StarRating;
