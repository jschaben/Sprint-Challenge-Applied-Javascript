// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const header = document.createElement('div');
    const date = document.createElement('span');
    const headTitle = document.createElement('h1');
    const temp = document.createElement('span');

    header.appendChild(date);
    header.appendChild(headTitle);
    header.appendChild(temp);

    date.textContent = 'November 8, 2019';
    headTitle.textContent = 'Lambda Times';
    temp.textContent = '21°';

    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    return header;
}

const NewHeader = document.querySelector(".header-container");

NewHeader.appendChild(Header());
