## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"** 
1) **Look at the drawing and name the HTML elements you'll need to realize your vision**
1. Will need three `<section>` to contain our stuff. 
  First `<section>`:
    Will need two `<input>` for ingredients and quantity. 
    Will need one `<select>` for dropdown menu with 5 options
    Will need one `<button></button>` to submit
    Will need `<form></form>` to wrap above inputs and buttons
    Will need `<ul>` for displaying ingredients
    Will need  another `<button></button>` for removal of item.
   Second `<section>`:
    Will need `<input>` for meal name
    Will need `<button>` for saving meal.
   Third  `<section>`:
   will need `<ul>` for displaying saved meals
1) **Look at the drawing and imagine using the app. What _state_ do you need to track?** 
1. We need to track the state of the inputs in the form. Objects in Arrays
    We need to track the input from the meal name. Objects in Arrays
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1. We will need to get form inputs with `document.getElementById`
   We will need to get 
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
