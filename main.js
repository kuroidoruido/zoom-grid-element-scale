import './style.css';

document.querySelector('#app').innerHTML = `
<div class="container">
  <div class="element">
    <div class="wrapper">Element</div>
  </div>
  <div class="element x2">
    <div class="wrapper">Element X2</div>
  </div>
  <div class="element x3">
    <div class="wrapper">Element X3</div>
  </div>
</div>

<form>
  <ul>
    <li>
      <label for="small">
        <input type="radio" name="zoom" value="small" id="small" />
        Small
      </label>
    </li>
    <li>
      <label for="medium">
        <input type="radio" name="zoom" value="medium" id="medium" checked />
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
`;
