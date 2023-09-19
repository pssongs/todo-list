const addForm = document.getElementById("newListing")
const addButton = document.getElementById('add-button')
const closeButton = document.getElementById('close')

addButton.addEventListener('click', () => {
  addToList()
})
closeButton.addEventListener('click', () => {
  close()
})

function addToList() {
  addForm.classList.remove("invisible")
}

function close() {
  addForm.classList.add("invisible")
}

