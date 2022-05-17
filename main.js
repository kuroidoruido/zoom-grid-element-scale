import './style.scss';

document.querySelector('#app').innerHTML = `
<!-- ZOOM LEVEL SELECTOR -->
<form>
  <ul>
    <li>
      <input type="radio" name="zoom" value="small" id="small" checked />
      <label for="small">Small</label>
    </li>
    <li>
      <input type="radio" name="zoom" value="medium" id="medium" />
      <label for="medium">Medium</label>
    </li>
    <li>
      <input type="radio" name="zoom" value="large" id="large" />
      <label for="large">Large</label>
    </li>
  </ul>
</form>

<!-- ZOOMED CARDS -->

<div id="container" class="zoom-small">
  ${range(1, 9)
    .map(
      (elt) => `
    <div class="card">
      <div class="content">
        Element ${elt}
        <button type="button">Click on the 👻</button>
      </div>
    </div>`
    )
    .join('')}
</div>
`;

function range(from, to) {
  return new Array(1 + to - from).fill(null).map((_, elt) => from + elt);
}

function onZoomClick(size) {
  return () => {
    document.getElementById('container').className = 'zoom-' + size;
  };
}

document
  .getElementById('small')
  .addEventListener('click', onZoomClick('small'));
document
  .getElementById('medium')
  .addEventListener('click', onZoomClick('medium'));
document
  .getElementById('large')
  .addEventListener('click', onZoomClick('large'));
