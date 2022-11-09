const removeCartItemButton = document.getElementsByClassName('btn-danger')
for (let i = 0; i < removeCartItemButton.length; i++) {
  let button = removeCartItemButton[i];
  button.addEventListener('click', function(event) {
    let buttonClick = event.target
    buttonClick.parentElement.parentElement.remove
  })
}
