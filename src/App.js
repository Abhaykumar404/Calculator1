import React from 'react'
import './index.css';

//Using 'const' instead of 'let' for variables that don't change.
const input = document.getElementById('inputBox');
const buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML === '=') {
            try {
                string = (new Function('return ' + string))() ||"";
                input.value = string;
            } catch (error) {
                // if operation is invalid it shows the error
                input.value = 'Error';
            }
        } else if (e.target.innerHTML === 'AC') {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML === 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        } 
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})

const App = () => {
  return (
    <>
      <div className="calculator">
        <input type="text" placeholder="0" id="inputBox"/>
        <div>
            <button className="operator">AC</button>
            <button className="operator">DEL</button>
            <button className="operator">%</button>
            <button className="operator">/</button>
        </div>
        <div>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button className="operator">*</button>
        </div>
        <div>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button className="operator">-</button>
        </div>
        <div>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button className="operator">+</button>
        </div>
        <div>
            <button>00</button>
            <button>0</button>
            <button>.</button>
            <button className="equalBtn">=</button>
        </div>
    </div>
    </>
  );
}

export default App;