const Card = ({icon,skill,description}) => {
    return (
      <>
       <span className="font-roboto text-2xl flex justify-center gap-4">
        <img  className="h-8 " src={icon} ></img>
        {skill}
        </span>
        <p>{description}</p>
      </>
    );
  };
  
  export default Card;
  
  
  