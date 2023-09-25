// const addForm = document.getElementById("newListing")
// const addBtn = document.getElementById('add-button')
// const closeBtn = document.getElementById('close')
// const editClose = document.getElementById('editClose')
// const form = document.getElementById('form')
// const list = document.querySelector('.list')
// const editForm = document.getElementById('editForm')
// var editBtn = [...document.querySelectorAll("#edit")]
// var num = 1
// var currentEdit 

// form.addEventListener('submit', (e) => {
//   e.preventDefault()
//   createListing()
//   close(form.parentNode)
//   form.reset()
//   editBtn = [...document.querySelectorAll("#edit")]
//   console.log(editBtn)

//   checkForEdit()
// })

// editForm.addEventListener('submit', (e) => {
//   e.preventDefault()
//   let element = document.querySelector(`[data-num='${currentEdit}']`)
//   let newListing = createEditListing(editedValues(e.target))
//   element.replaceWith(newListing)
//   close(editForm.parentNode)
//   editForm.reset()
//   editBtn = [...document.querySelectorAll("#edit")]
//   console.log(editBtn)

//   checkForEdit()
// } )

// function checkForEdit() {
//   editBtn.forEach(btn => {
//     btn.addEventListener('click',(e) => {
//       showForm(editForm.parentNode)
//       currentEdit = e.target.parentNode.parentNode.getAttribute("data-num")
//       console.log(btn)
//     })
    
//   });
// }

// function createEditListing(arr) {
//   const title = document.createElement('div')
//   const description = document.createElement('div')
//   description.textContent = "DETAILS"
//   const longDetails = document.createElement('div')
//   const date = document.createElement('div')
//   const priority = document.createElement('div')
//   const listItem = document.createElement('div')
//   const left = document.createElement('div')
//   const right = document.createElement('div')
//   const checkBox = document.createElement('div')
//   //edit Button
//   const edit = document.createElement('div')
//   edit.textContent = "E"
//   //delete Button
//   const dlt = document.createElement('div')
//   dlt.textContent = "D"

//   title.textContent = arr[0]
//   longDetails.textContent = arr[1]
//   date.textContent = arr[2]
//   priority.textContent = arr[3]
//   checkBox.textContent = '[]'

//   title.setAttribute('id', "item-description")
//   description.setAttribute('id', 'details')
//   longDetails.setAttribute('id','long-details')
//   date.setAttribute('id','date-item')
//   priority.setAttribute('id','priority-item')
//   listItem.setAttribute('id','list-item')
//   left.setAttribute('id','left-list-item')
//   right.setAttribute('id','right-list-item')
//   checkBox.setAttribute('id','checkbox')
//   edit.setAttribute('id','edit')
//   dlt.setAttribute('id','delete')
//   dlt.setAttribute('onclick','this.parentNode.parentNode.remove()')
//   listItem.setAttribute('data-num',`${currentEdit}`)

//   left.appendChild(checkBox)
//   left.appendChild(title)

//   right.appendChild(description)
//   right.appendChild(date)
//   right.appendChild(priority)
//   right.appendChild(edit)
//   right.appendChild(dlt)

//   listItem.appendChild(left)
//   listItem.appendChild(right)


//   return listItem
//   }

// addBtn.addEventListener('click', () => {
//   showForm(addForm)
// })

// editClose.addEventListener('click', () => {
//   close(editForm.parentNode)
// })

// closeBtn.addEventListener('click', () => {
//   close(addForm)
// })

// function showForm(form) {
//   form.classList.remove("invisible")
// }

// function close(theForm) {
//   theForm.classList.add("invisible")
// }

// function createListing() {
//   const title = document.createElement('div')
//   const description = document.createElement('div')
//   description.textContent = "DETAILS"
//   const longDetails = document.createElement('div')
//   const date = document.createElement('div')
//   const priority = document.createElement('div')
//   const listItem = document.createElement('div')
//   const left = document.createElement('div')
//   const right = document.createElement('div')
//   const checkBox = document.createElement('div')
//   //edit Button
//   const edit = document.createElement('div')
//   edit.textContent = "E"
//   //delete Button
//   const dlt = document.createElement('div')
//   dlt.textContent = "D"

//   title.textContent = document.getElementById('title').value
//   longDetails.textContent = document.getElementById('description').value
//   date.textContent = document.getElementById('date').value
//   priority.textContent = document.querySelector('input[name="priority"]:checked').value;
//   checkBox.textContent = '[]'

//   title.setAttribute('id', "item-description")
//   description.setAttribute('id', 'details')
//   longDetails.setAttribute('id','long-details')
//   date.setAttribute('id','date-item')
//   priority.setAttribute('id','priority-item')
//   listItem.setAttribute('id','list-item')
//   left.setAttribute('id','left-list-item')
//   right.setAttribute('id','right-list-item')
//   checkBox.setAttribute('id','checkbox')
//   edit.setAttribute('id','edit')
//   dlt.setAttribute('id','delete')
//   dlt.setAttribute('onclick','this.parentNode.parentNode.remove()')
//   listItem.setAttribute('data-num',`${num}`)
//   num +=1


//   left.appendChild(checkBox)
//   left.appendChild(title)

//   right.appendChild(description)
//   right.appendChild(date)
//   right.appendChild(priority)
//   right.appendChild(edit)
//   right.appendChild(dlt)

//   listItem.appendChild(left)
//   listItem.appendChild(right)

//   list.appendChild(listItem)
//   }

// function editedValues(arr){
//   const title = arr[0].value
//   const longDetails = arr[1].value
//   const date = arr[2].value
//   const priority = findChecked([...arr])

//   return [title,longDetails,date,priority]
// }

// function findChecked(arr){
//   for (let i = 0; i < arr.length; i++){
//     if (arr[i].checked == true) {
//       return arr[i].value
//     }
//   }
// }



// checkForEdit()