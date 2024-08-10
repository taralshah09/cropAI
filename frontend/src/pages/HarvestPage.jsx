import React from 'react';

const HarvestPage = () => {
  return (
    <div className='harvest-page'>
      <form className='harvest-form'>
        <input
          type='text'
          id='harvest-input'
          name='harvest'
          className='harvest-input'
          placeholder='Enter your loaction eg : Ahmedabad , India'
        />
        <button type="submit">Submit</button>
      </form>
      <div className="harvest-answer-box">

      </div>
    </div>
  );
};

export default HarvestPage;
