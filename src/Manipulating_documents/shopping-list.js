const list = document.querySelector('ul');

document.querySelector('button').onclick = function() {
  const input = document.querySelector('input');
  const value = input.value;
  input.value = ''; // reset
  if (value=='') return;

  const li = document.createElement('li');
  const itemName = document.createElement('span');
  itemName.textContent = value;
  const button = document.createElement('button');
  button.textContent = "Cancel"
  button.onclick = function() { li.remove(); }
  li.appendChild(itemName);
  li.appendChild(button);
  list.appendChild(li);
  
  // focus back to input
  input.focus();
}

