import React from 'react';



function Food({fav}) {
  console.log(fav);
  
return <h1>I like {fav}!</h1>
}

function App() {
  return (
    <div className="App">
      <h1>Hello!!</h1>
      <Food favorite="dduckbbockki"/>
      <Food fav="ramen" />
      <Food favorite="americano" />
      <Food fav="dduck" />
    </div>
  );
}

export default App;
