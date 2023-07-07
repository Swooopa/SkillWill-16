import React from 'react';
import { useParams } from 'react-router-dom';

import careerPerson from './careerPerson'; // ამ მაგალითში არსებული careerPerson ობიექნება იდენტურიანი გამოყენება.

```javascript
import React from 'react';
import { useParams } from 'react-router-dom';

import careerPerson from './careerPerson'; // ამ მაგალითში არსებული careerPerson ობიექტის მიღება

const Fact = () => {
  const { factId } = useParams();
  const fact = careerPerson.facts.find((f) => f.id === parseInt(factId));

  if (!fact) {
    return <div>Fact not found</div>;
  }

  return (
    <div>
      <h3>Fact #{fact.id}</h3>
      <p>{fact.fact}</p>
    </div>
  );
};

export default Fact;
```
