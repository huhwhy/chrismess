console.log("it works")
console.warn("omar coming")
console.error()
const button = document.querySelector("button1")
const form = document.querySelector('form#flickform')



const change = function() {

   const p = document.querySelector("h2")
   p.textContent = "Default Message"


 }


const change2 = function(FormInput) {

   const p = document.querySelector("h2")
   p.textContent = FormInput

 }

const change3 = function(event)  {
   
    event.preventDefault()

   const f = event.target // look up target ( maybe form?)

   const flickName = f.flickName.value //raw name
   const flickYear = f.flickYear.value // raw year
	const list = document.querySelector('#flicks') // empty list of #flicks

   const name = document.createElement("span") // creates a span object ( used to group inline elements in a doc)
   const br = document.createElement("br") // creates a break in page
   const year = document.createElement("span") // refer to first variable
   name.textContent = flickName + ' ' // flickName needs space in order to concat and account for adding to list
   name.className = "Cinema" // assigning the name of the class

   list.appendChild(name) // appends span object to list
	
   year.textContent = flickYear // getting text content of the year 
   year.className = "CinemaYear" // assigning the name of the class

   list.appendChild(year) // appends year to list
   list.appendChild(br) // appends break object to list
 
   
   
    const flicks = {           // make flicks an object ( dict ) containing the value of the movie name and movie year
    name: f.flickName.value,
    year : f.flickYear.value
   // favorite = ''
   } 

   a = []

   a.push(flicks)
 //  
   

   console.log(a)




//make a function to make a delete button
// make a function to make functionality for delete button
   f.reset() // empties the boxes you hit reset on

   buttonMaker()
}

buttonMaker = function() {

	var btn = document.createElement("BUTTON");        // Create a <button> element
    var t = document.createTextNode("Delete");       // Create a text node
    btn.appendChild(t);                                // Append the text to <button>
    document.body.appendChild(btn); // appends the btn too
    buttonFunction() 

}
   



buttonFunction = function () {
    var elem = document.getElementById("buttons")
    elem.parentNode.removeChild(elem)
    return false
}

   





form.addEventListener('submit', change3)

