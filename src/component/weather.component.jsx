import React from 'react';

const Weather = props=>{

  return(
  <div className="container">
    <div>
      <h1>
        {props.city}, {props.country}
      </h1>
    </div>
    <div>
      <h3>
        The weather symbol
      </h3>
    </div>
    <div>
    <h4>
      {props.temperature}
    </h4>
    <h5>
      {props.description}
    </h5>
    </div>
  </div>

  );
};

export default Weather;
