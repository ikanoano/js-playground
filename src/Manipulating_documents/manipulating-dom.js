const link = document.querySelector('a');
link.textContent = 'Mozilla Developer Network';
link.href = 'https://developer.mozilla.org';
link.id = 'testid';

const alla = document.querySelectorAll('a');
console.log(alla);
const testid = document.querySelector('#testid');
console.log(testid);

const para = document.createElement('p');
para.textContent = 'I hope I\'m enjoying the ride.';
const sect = document.querySelector('section');
sect.appendChild(para);  // adding paragraph to the section

const text = document.createTextNode(' - the premier source for web development knowledge');
const linkPara = document.querySelector('p'); // hit the first <p> which has a link.
linkPara.appendChild(text); // Insert 'text' to the end of paragraph rather than adding it as a 'child'.

sect.appendChild(linkPara); // MOVING linkpara to the end from the head. NOT COPY !!
//linkPara.remove();  // remove


// manipulating style from js
//para.style.color = 'white';
//para.style.backgroundColor = 'black';
//para.style.padding = '10px';
//para.style.width = '250px';
//para.style.textAlign = 'center';

// or just assign the class. style is written in html linked with the class name
para.setAttribute('class', 'highlight highlight2');