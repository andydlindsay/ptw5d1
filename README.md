# Front End Fundamentals: Week 5 Day 1

### To Do
- [ ] Create and manipulate elements on a page using jQuery
- [ ] Collect user input via forms

### JavaScript Review
- **console.log**: helper function that prints to the console/terminal
- **Data Types**: every value in JavaScript has a _type_
  1. **Number**: add, subtract, multiple, and divide numbers
  2. **String**: a _string_ of characters (eg. name, email, title)
  3. **Boolean**: only two values: `true` or `false`
- **Variables**: store values for reuse
- **Functions**: store code/actions for reuse
- **If Statements**: allow us to control the flow of logic in our code based on conditions
- **Data Structures**: store related data in one variable
  1. **Array**: collection of stored values
  2. **Object**: information stored as key/value pairs
- **Loops**: repeat the same or code action multiples times (eg. for each item in an array)

### Assignment Review
- Fizz Buzz
- Yellow Pager
- Word Count

### The DOM
- **D**ocument **O**bject **M**odel: when the browser loads an HTML page, it stores it in a data structure called the DOM
- Changing a page's style or markup is accessing and changing the DOM
- JavaScript is very good at accessing the DOM and changing it

### Adding JavaScript
- In order to use JavaScript in the browser, we need to create a file ending in `.js`
- And include that file into our `index.html` page using **script** tags

```html
<script src="./path/to/file.js" type="text/javascript"></script>
```

### jQuery
- A popular JavaScript library for making webpages interactive
- Provides developers with many _helper methods_ that perform various tasks (eg. hiding elements when they are clicked)
- **NOTE:** A library is just a file we can add to our apps that contains helpful functions that make common tasks easier to execute

### Adding jQuery
- We need to include a **script** tag with a `src` pointing to jQuery's **C**ontent **D**elivery **N**etwork or **CDN**
- Make sure to include jQuery (or any other library) before your own JavaScript file so that your code will be able to use the library

### Getting Started with jQuery
- For our query functions to behave the way we want them to, we need to make sure the entire webpage has been loaded first
- jQuery has a special function that will run when the page is fully loaded or _ready_

```js
$(document).ready(function() {
  // code goes here
});

$(function() {
  // code goes here
});
```

### Selecting Elements with jQuery
- We start with the `$` which is a shorthand for calling jQuery
- We select elements using the same syntax as we use in CSS
  1. Tag Names: `$('p')`
  2. Nested Tag Names: `$('section p span')`
  3. Classes: `$('.class-name')`
  4. ID's: `$('#id-name')`

### jQuery Animations
- We can use jQuery to animate elements on a webpage
- Each of the helper methods take an argument that represents the amount of time the animation will run for (similar to `transition-duration` in CSS)
- Commonly used methods: `hide`, `show`, `slideUp`, `slideDown`, `delay`

```js
// hide main element
$('main').hide(1000);

// show main element
$('main').show(3000);

// slide up main
$('main').slideUp(1000);

// slide down main
$('main').slideDown(3000);

// add a delay
$('main').delay(2000).slideUp(1000);
```

### Event Listeners
- Enables us to write code that runs when an _event_ happens
- Example events: form submission, button click, hovering over an element
- We can use jQuery to listen for these events and then run code when they occur
- Common events: `click`, `mouseenter`, `mouseleave`

```js
// listen for a click event on main element
$('main').click(function() {
  $('.second-square').slideUp(2000);
});

// mouse enter event
$('.square-one').on('mouseenter', function() {
  $('.square-one').hide(1000);
});

// mouse leave event
$('.square-two').on('mouseleave', function() {
  $('.square-two').hide(1000).show(2000);
});
```

### Forms
- To create a form, HTML has a semantic `<form>` tag
- `input` tags will actually collect the user's input
- We set the `type` attribute to the type of input we are expecting (eg. number, text, password, email)

```html
<form>
  <input type="text" />
  <button type="submit">Submit</button>
</form>
```

### Form Submission
- We can handle the form submission event using jQuery
- The shorthand function for the _submit_ event is `.submit()`
- On submit, the default behaviour of the browser is to refresh the page, to prevent this, we use `event.preventDefault()`
- We can get the value from an input field using the function `.val()`

```js
$('form').submit(function(event) {
  event.preventDefault();
  var inputValue = $('input').val();
  console.log('inputValue:', inputValue);
});
```

### Useful Links
- [MDN "First HTML Form" Tutorial](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Your_first_HTML_form)
- [jQuery Documentation](http://api.jquery.com])
- [Target Elements, jQuery Practice](https://learn.freecodecamp.org/front-end-libraries/jquery/target-html-elements-with-selectors-using-jquery/)
- [Use jQuery to Modify a Page](https://learn.freecodecamp.org/front-end-libraries/jquery/use-jquery-to-modify-the-entire-page/)
