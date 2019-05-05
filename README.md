# safeQuerySelector
A typescript querySelector that can be used for static client side apps to get elements via querySelector, that you know exist. (Without strict null checks).

Let's say you have a ```p``` element with an id of "test". You want to set its innerHTML to "Hello World". You know it exists, but TypeScript can't be sure, and makes you perform strict null checks, and cluttering pointless ```if``` statments in your code. ```safeQuerySelector```fixes that: 
Before ```safeQuerySelector```:
```ts
const elem = document.querySelector("#test");
if (elem) {
  elem.innerHTML = "Hello World";
}
```
If you have multiple elements involved in a program, this can become cluttered. But, with ```safeQuerySelector```, your code looks like:
```ts
const elem = safeQuerySelector("#test");
elem.innerHTML = "Hello World";
```
No need to worry about strict null checks! If the query dosen't return anything, you get back a div element that won't do anything, as it has not been added to the DOM.
