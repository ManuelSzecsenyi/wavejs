# wavejs
A javascript library that allows you to create random SVG waves.

## Setup ##
### HTML ###
Include `wave.js`  
```html
<script src="./src/wave.js"></script>
```  
Include `index.js`
```html
<script src="index.js"></script>
```
Create an SVG tag
```html
<svg class="wave" id="wave" preserveAspectRatio="none" viewbox="0 0 1200 50"></svg>
```

### Javascript ###
Inside `index.js`
Create a wave with the following parameters  
- HTML SVG element
- Number of ***anchor*** points
- Minimum speed of a point
- Maximum speed of a point
```js
var w1 = new Wave(document.querySelector("#wave"), 10, 0.03, 0.05);
```
