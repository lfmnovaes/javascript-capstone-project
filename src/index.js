import './style.css';

const main = document.getElementsByTagName('main');
const content = `
<h2>Hello world!</h2>
`;
main[0].insertAdjacentHTML('beforeend', content);
