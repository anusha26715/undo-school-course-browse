import React, { useState, useEffect } from 'react';
import './AgeComponent.css';

const AgeComponent = () => {
  const [ageArray, setAgeArray] = useState([]);
  const [selectedAge, setSelectedAge] = useState(null);

  useEffect(() => {
    const ages = [];
    for (let i = 1; i < 20; i++) {
      ages.push(i);
    }
    setAgeArray(ages);
  }, []);

  const getColor = (age) => {
    if (age >= 1 && age <= 3) return 'var(--color-yellow)';
    if (age >= 4 && age <= 6) return 'var(--color-orange-yellow)';
    if (age >= 7 && age <= 11) return 'var(--color-pink)';
    if (age >= 12 && age <= 15) return 'var(--color-green)';
    if (age >= 16 && age <= 20) return 'var(--color-purple)'; 
    return 'transparent';
  };

  return (
    <section className="age-container">
      <h3>How old Are You? 🎯</h3>
      <p className='pt-2 pb-2 text-center'>Pick your age and find the perfect courses just for you!</p>
      <div className="age-options">
        {ageArray.map((age) => {
          const color = getColor(age);
          return (
            <div
              className="age-option"
              key={age}
              onClick={() => setSelectedAge(age)}
              style={{
                border: `2px solid ${color}`, // Border applied on load
                backgroundColor: selectedAge === age ? color : 'transparent', // Background only when clicked
                boxShadow: `0 0 3px ${color}`
              }}
            >
              <span className="age-number">{`${age}-${age + 1}`}</span>
              <p className="age-text">Years</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AgeComponent;
