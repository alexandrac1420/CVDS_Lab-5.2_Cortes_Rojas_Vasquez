import React from 'react';



async function HelloWorld() {
var result;
var response = await fetch('http://localhost:8080/new')
  .then(response => response.text())
  .then(data => {result=data;})
  .catch(error => console.error(error));
  return (
    <div className="HelloWorld">
        <p>
            {result}
        </p>
    </div>
  );
}
export default HelloWorld;

