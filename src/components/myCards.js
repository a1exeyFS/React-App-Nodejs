import React, { useState, useEffect } from "react";
import PageHeader from "./common/pageHeader";
import cardService from "../services/cardService";
import Card from "./card";
import { Link } from "react-router-dom";
import { apiUrl } from "../config.json";
import axios from 'axios'
import { toast } from "react-toastify";

function MyCards(){

const [cards, setCards]=useState([])

useEffect(() => {
	async function fetchData() {
	 const { data } = await cardService.getMyCards();
		setCards(data);
	}
	fetchData();
}, []);

const remover = async (e) =>{
	await axios.delete(`${apiUrl}/cards/${e}`)
	toast("Removing Card");
	const { data } = await cardService.getMyCards();
	  	setCards(data);
}

    return (
      <div className="container">
        <PageHeader titleText="My Cards Page" />
        <div className="row">
          <div className="col-12">
            <p>Your cards in the list below...</p>
          </div>
        </div>
		<Link to={`/create-card`}><button className="btn btn-primary">Add new Card</button></Link>
        <div className="row" >
			{cards.length >0?  cards.map(card => 
				<Card key={card._id} card={card} delcard={remover} />) : <div className="alert alert-danger mx-auto mt-5 text-center" role="alert">
				No Cards Yet!<br/>Please add the first card.</div>}
        </div>
      </div>
    );
  }

export default MyCards;