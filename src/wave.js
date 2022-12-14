
class Wave {
    
    constructor (svg, anchors, minSpeed, maxSpeed, color) {

        this.anchors = anchors - 1;

        this.svg = svg;
        this.path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        this.svg.appendChild(this.path);

        this.width = this.svg.getAttribute("viewBox").split(" ")[2];
        this.height = this.svg.getAttribute("viewBox").split(" ")[3] / 2;

        this.points = [];
        this.paused = false;

        for (var i = 0; i <= this.anchors; i++) {
            this.points.push(new Point(Math.floor(this.width * i / this.anchors), this.height, minSpeed, maxSpeed, i, this.anchors));
        }

        if(color) {
            this.path.setAttribute('style', `fill: ${color}`);
        }

        this.animate();

    } 

    draw () {

        var svgString = `M ${this.points[0].x}, ${this.points[0].y} `;
    
        for (var i = 0; i < this.points.length - 1; i++) {

            var x_mid = (this.points[i].x + this.points[i+1].x) / 2;
            var y_mid = (this.points[i].y + this.points[i+1].y) / 2;
            
            var cp_x1 = (x_mid + this.points[i].x) / 2;
            var cp_x2 = (x_mid + this.points[i+1].x) / 2;

            svgString += `Q ${cp_x1}, ${this.points[i].y} ${x_mid}, ${y_mid} `;
            svgString += `Q ${cp_x2}, ${this.points[i+1].y} ${this.points[i+1].x}, ${this.points[i+1].y} `;

        }
        
        svgString += `L ${this.width}, ${this.height * 2} L ${0}, ${this.height * 2} Z`;

        this.path.setAttribute("d", svgString);
    
        for (var i = 0; i < this.points.length; i++) {
            this.points[i].update();
        }

    }

    pause () {
        this.paused = true;
    }

    animate () {
        if (!this.paused) {
            this.draw();
            window.requestAnimationFrame(this.animate.bind(this));
        }
    }

}


class Point {

    constructor (x, max, minSpeed, maxSpeed, n, total) {
        this.height = this.random(max / 2, max);
        this.min = this.random(0, max / 2);

        this.x = x;
        this.y = 0;

        this.speed = this.random(minSpeed, maxSpeed);

        /*  
            Use this.cur = (n / total) * 180 * Math.PI / 180 for sine wave 
            & this.cur = n * 180 * Math.PI / 180 for standing sine wave. 
            & this.cur = this.random(0, Math.PI) for random wave.
        */

        this.cur = this.random(0, Math.PI);
    }

    update () {

        this.cur += this.speed;
        this.y = this.min + Math.sin(this.cur) * (this.height - this.min) + this.height;

    }

    random (minSpeed , maxSpeed) {
        return Math.random() * (maxSpeed - minSpeed) + minSpeed;
    }

}
