function createRectangle(width, height, color) {
    return {
        width: width,
        height: height,
        color: color.charAt(0).toUpperCase() + color.slice(1),
        calcArea() {
            return this.width * this.height;
        }
    };
}

let rectangle = createRectangle(4, 5, 'red');
console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.color);
console.log(rectangle.calcArea()); 
