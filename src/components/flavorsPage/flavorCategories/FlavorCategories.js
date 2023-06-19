import React from "react";
import { useParams } from "react-router-dom";
import './FlavorCategories.css'
import Quote from "../../quoteForm/Quote";

const FlavorCategories = () => {
  const { category } = useParams();

  const flavorCategories = {
    softFruit: [
      'Sweet',
      'Tart',
      'Floral',
      'Juicy',
      'Subtly Earthy',
      'Nutty'
    ],
    citrus: [
      'Tangy',
      'Refreshing',
      'Zesty',
      'Bitter-Sweet',
      'Citrus-Sweet',
      'Tropical'
    ],
    tropical: [
      'Sweet',
      'Tart',
      'Floral',
      'Juicy',
      'Subtly Earthy',
      'Nutty'
    ]
  };


  return (
    <div id="flavor-categories-wrapper">
      <div id="flavor-categories-body-container">
        <div id="flavor-categories-header">
          <h1>Flavor category name</h1>
        </div>
        <div id="list-group-container">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Aldehyde-Free, Berry</li>
            <li className="list-group-item">Aldehyde-Free, Cherry</li>
            <li className="list-group-item">Apple (various)</li>
            <li className="list-group-item">Apple, Baked</li>
            <li className="list-group-item">Apricot</li>
            <li className="list-group-item">Etc...</li>
          </ul>
        </div>
      </div>
      <div id="flavorCategories-quoteForm-container">
        <Quote/>
      </div>
    </div>
  )
}

export default FlavorCategories;
