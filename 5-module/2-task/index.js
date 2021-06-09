function toggleText() {
  let button = document.querySelector('.toggle-text-button');
  let div = document.querySelector('#text');
  button.onclick = function() {
    // div.hidden = !div.hidden;
    div.toggleAttribute('hidden');
  }
}
