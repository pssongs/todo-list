const addForm = document.getElementById("newListing")
const addBtn = document.getElementById('add-button')
const closeBtn = document.getElementById('close')
const editClose = document.getElementById('editClose')
const form = document.getElementById('form')
const list = document.querySelector('.list')
const editForm = document.getElementById('editDiv')
const editBtn = [...document.querySelectorAll("#edit")]


form.addEventListener('submit', (e) => {
  e.preventDefault()
  createListing()
  form.reset()
  close()
})

editBtn.forEach(btn => {
  btn.addEventListener('click',() => {
    showForm(editForm)
  })
});

editForm.addEventListener('submit', (e) => {
  
})


addBtn.addEventListener('click', () => {
  showForm(addForm)
})

editClose.addEventListener('click', () => {
  close(editForm)
})

closeBtn.addEventListener('click', () => {
  close(addForm)
})

function showForm(form) {
  form.classList.remove("invisible")
}

function close(form) {
  form.classList.add("invisible")
}

function createListing() {
  const title = document.createElement('div')
  const description = document.createElement('div')
  description.textContent = "DETAILS"
  const longDetails = document.createElement('div')
  const date = document.createElement('div')
  const priority = document.createElement('div')
  const listItem = document.createElement('div')
  const left = document.createElement('div')
  const right = document.createElement('div')
  const checkBox = document.createElement('div')
  //edit Button
  const edit = document.createElement('div')
  edit.textContent = "E"
  //delete Button
  const dlt = document.createElement('div')
  dlt.textContent = "D"

  title.textContent = document.getElementById('title').value
  longDetails.textContent = document.getElementById('description').value
  date.textContent = document.getElementById('date').value
  priority.textContent = document.querySelector('input[name="priority"]:checked').value;
  checkBox.textContent = '[]'

  title.setAttribute('id', "item-description")
  description.setAttribute('id', 'details')
  longDetails.setAttribute('id','long-details')
  date.setAttribute('id','date-item')
  priority.setAttribute('id','priority-item')
  listItem.setAttribute('id','list-item')
  left.setAttribute('id','left-list-item')
  right.setAttribute('id','right-list-item')
  checkBox.setAttribute('id','checkbox')
  edit.setAttribute('id','edit')
  dlt.setAttribute('id','delete')
  dlt.setAttribute('onclick','this.parentNode.parentNode.remove()')

  left.appendChild(checkBox)
  left.appendChild(title)

  right.appendChild(description)
  right.appendChild(date)
  right.appendChild(priority)
  right.appendChild(edit)
  right.appendChild(dlt)

  listItem.appendChild(left)
  listItem.appendChild(right)

  list.appendChild(listItem)
  }

