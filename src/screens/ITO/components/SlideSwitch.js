import React from "react";

const SlideSwitch = () => {
  const [active, setActive] = React.useState('latest');

  const toggleSwitch = (value) => {
    setActive(value);
  };

  return (
    <div className="slide-switch">
      <button onClick={() => toggleSwitch('latest')} className={active === 'latest' ? 'active' : ''}>
        Latest
      </button>
      <button onClick={() => toggleSwitch('finished')} className={active === 'finished' ? 'active' : ''}>
        Finished
      </button>
    </div>
  );
};

export default SlideSwitch;
