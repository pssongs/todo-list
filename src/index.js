const addBtn = document.getElementById('add-button')
const addForm = document.getElementById('newListing')

class Library {
  constructor(){
    this.listing = []
  }

  addListing(newListing){
    this.listing.push(newListing)
  }

  getListing(id) {
    return this.listing.find((todo) => todo.id === id)
  }

  removeListing(id) {
    return this.listing.filter((todo) => todo.id !== id)
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
  addForm.classList.remove('invisible')
})

addForm.addEventListener('submit', (e) => {
  e.preventDefault()
  createListing(e.target)
})

function createListing(values){
  const title = values[0].value
  const description = values[1].value
  const date = values[2].value
  const priority = findChecked([...values])

  const activity = new Listing(title,description,date,priority,Date.now())
  toDoListing.addListing(activity)

}

function findChecked(arr){
  for (let i = 0; i < arr.length; i++){
    if (arr[i].checked == true) {
      return arr[i].value
    }
  }
}

const toDoListing = new Library()