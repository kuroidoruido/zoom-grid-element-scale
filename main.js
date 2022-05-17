import './style.scss';

document.querySelector('#app').innerHTML = `
<!-- ZOOM LEVEL SELECTOR -->
<form>
  <ul>
    <li>
      <label for="small">
        <input type="radio" name="zoom" value="small" id="small" checked />
        Small
      </label>
    </li>
    <li>
      <label for="medium">
        <input type="radio" name="zoom" value="medium" id="medium" />
        Medium
      </label>
    </li>
    <li>
      <label for="large">
        <input type="radio" name="zoom" value="large" id="large" />
        Large
      </label>
    </li>
  </ul>
</form>

<!-- ZOOMED ELEMENTS -->

<div id="container" class="zoom-small">
  ${range(1, 10)
    .map(
      (elt) => `
    <div class="element">
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
