import React from 'react';
import { Link } from 'react-router-dom';

import careerPerson from './careerPerson'; // ამ მაგალითში არსებული careerPerson ობიექტის მიღება

const About = () => {
  return (
    <div>
      <h2>About</h2>
      <img src={careerPerson.photo} alt={careerPerson.name} />
      <p>{careerPerson.generalInfo}</p>

      <h3>Some Facts</h3>
      <ul>
        {careerPerson.facts.map((fact) => (
          <li key={fact.id}>
            <Link to={`/${fact.id}`}>{fact.fact}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default About;
