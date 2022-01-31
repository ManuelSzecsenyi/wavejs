# wavejs
A javascript library that allows you to create random animated SVG waves.  
Demo🌊 https://vedantyadu.github.io/wavejs/

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
Create an `svg` tag
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

## Modifying `wave.js` ##
### In the ***Point*** class ###
- Use `this.cur = (n / total) * 180 * Math.PI / 180` for sine wave. 
- Use `this.cur = n * 180 * Math.PI / 180` for standing sine wave.
- Use `this.cur = this.random(0, Math.PI)` for random wave.

## Screenshot ##
![Screenshot](img/wave_desktop.JPG)
