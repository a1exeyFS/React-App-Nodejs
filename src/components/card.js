import React from "react";
import { Link } from "react-router-dom";

const Card = ({ card, delcard }) => {

  return (
    <div className="col-md-6 col-lg-4 mt-3" >
      <div className="card" style={{boxShadow: '0 0 5px'}}>
        <img
          className="p-2"
          src={card.bizImage}
          width="150"
          alt={card.bizName}
        />
        <div className="card-body">
          <h5 className="card-title">Name: {card.bizName}</h5>
          <p className="card-text"><b>Description:</b> {card.bizDescription}</p>
          <p className="card-text border-top pt-2">
            <b>Tel: </b>
            {card.bizPhone}
            <br />
			<b>Address: </b>
            {card.bizAddress}
          </p>
          <Link to={`/my-cards/edit/${card._id}`}><button className="btn btn-link">Edit</button></Link>|
		  <button className="btn btn-link" onClick={()=>delcard(card._id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Card;