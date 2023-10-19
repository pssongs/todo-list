const addBtn = document.getElementById('add-button')
const form = document.getElementById('newListing')
const list = document.querySelector('.list')
const formElement = document.getElementById("form")
let detailBtn = [...document.querySelectorAll('#details')]
let editBtn = [...document.querySelectorAll('#edit')]
const closeForm = document.getElementById('close')
let currentBtn
let editId

class Library {
  constructor(){
    this.listing = []
  }

  addListing(newListing){
    this.listing.push(newListing)
  }

  getListing(id) {
    return this.listing.find((todo) => todo.getId() == id)
  }

  removeListing(id) {
    return this.listing.filter((todo) => todo.getId() != id)
  }
}

class Listing{
  constructor(title,detail,date,priority,id){
    this.title = title
    this.detail = detail
    this.date = date
    this.priority = priority
    this.id = id
  }

  getTitle() {
    return this.title
  }

  getDetail(){
    return this.detail
  }

  getDate() {
    return this.date
  }

  getPriority() {
    return this.priority
  }

  getId(){
    return this.id
  }

  setTitle(title) {
    this.title = title
  }

  setDetail(detail){
    this.detail = detail
  }

  setDate(date){
    this.date = date
  }

  setPriority(priority){
    this.priority = priority
  }
}

addBtn.addEventListener('click', () => {
  showForm()
  currentBtn = 0
})

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const cleaned = cleanValues(e.target)
  const htmlListing = createHTMLListing(cleaned) 
  addingListingToLib(cleaned)
  closeTheForm()
  //edit form mode
  if (currentBtn){
    toDoListing.removeListing(editId)
    document.querySelector(`[data-num="${editId}"]`).replaceWith(htmlListing)
  } else //add form mode 
  {
    list.appendChild(htmlListing)
  }

  detailBtn = [...document.querySelectorAll('#details')]
  editBtn = [...document.querySelectorAll('#edit')]
  details()
  editBtns()
})

function addingListingToLib([title,description,date,priority,id]) {
  const add = new Listing(title,description,date,priority,id)
  toDoListing.addListing(add)
}

function cleanValues(values){
  const title = values[0].value
  const description = values[1].value
  const date = values[2].value
  const priority = findChecked([...values])
  const id = Date.now()

  return [title,description,date,priority,id] 
}

function findChecked(arr){
  for (let i = 0; i < arr.length; i++){
    if (arr[i].checked == true) {
      return arr[i].value
    }
  }
}

function createHTMLListing([title,description,date,priority,id]) {
  const listItem = document.createElement('div')
  listItem.setAttribute("id","list-item")
  listItem.setAttribute("data-num",`${id}`)
  
  const leftList = document.createElement('div')
  leftList.setAttribute("id","left-list-item")
  
  const rightList = document.createElement('div')
  rightList.setAttribute("id","right-list-item")

  const checkbox = document.createElement('div')
  checkbox.setAttribute("id","checkbox")
  checkbox.textContent = "[]"

  const titleDiv = document.createElement('div')
  titleDiv.setAttribute('id','title')
  titleDiv.textContent = `${title}`

  const details = document.createElement('div')
  details.setAttribute('id','details')
  details.textContent = "DETAILS"

  const dateItem = document.createElement('div')
  dateItem.setAttribute("id","date-item")
  dateItem.textContent = `${date}`

  const priorityItem = document.createElement('div')
  priorityItem.setAttribute('id','priority-item')
  priorityItem.textContent = `${priority}`
  
  const edit = document.createElement('div')
  edit.setAttribute('id','edit')
  edit.textContent = "E"

  const deleteItem = document.createElement('div')
  deleteItem.setAttribute('id','delete')
  deleteItem.setAttribute('onclick','this.parentNode.parentNode.remove()')
  deleteItem.textContent = "D"

  leftList.appendChild(checkbox)
  leftList.appendChild(titleDiv)

  rightList.appendChild(details)
  rightList.appendChild(dateItem)
  rightList.appendChild(priorityItem)
  rightList.appendChild(edit)
  rightList.appendChild(deleteItem)

  listItem.appendChild(leftList)
  listItem.appendChild(rightList)

  return listItem
}

function details() {
  detailBtn.forEach(btn => {
    btn.addEventListener('click',(e) => {
      const detail = toDoListing.getListing(e.target.parentNode.parentNode.getAttribute('data-num')).getDetail()

      const detailDiv = document.querySelector('#descriptionOfItem')
      detailDiv.firstChild.textContent = `${detail}`
      detailDiv.classList.remove('invisible')
    })
  })
}

function editBtns() {
  editBtn.forEach(btn => {
    btn.addEventListener('click',(e) => {
      currentBtn = 1
      editId = e.target.parentNode.parentNode.getAttribute('data-num')
      showForm()
    })
  }

  )
}

function closeTheForm() {
  form.classList.add('invisible')
  formElement.reset()  
}

function showForm() {
  form.classList.remove('invisible')
}

const toDoListing = new Library()
const firstListing = new Listing("swim","About to go swim with friends", "2023-10-20", "Low","0")
toDoListing.addListing(firstListing)
details()
editBtns()