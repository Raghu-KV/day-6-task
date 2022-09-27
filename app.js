class Movie {
    constructor(title,studio,rating= "PG"){
        this.title = title
        this.studio = studio
        this.rating = rating
    }
    
}
const newMovie = new Movie("Casino Royale","Eon Productions","PG13")
console.log(newMovie)

class Circle {
    constructor(radius, color){
        this.radius = radius
        this.color = color
    }
    getRadius(){return this.radius}
    setRadius(newRadius){return this.radius = newRadius}
    getColor(){return this.colour}
    setColor(newColor){return this.color = newColor}
    toString(){return `Circle[radius = ${this.radius},color = ${this.color}]`}
    getArea(){return 3.14*(this.radius*this.radius).toFixed(2)}
    getcircumference(){return ((2*3.14)*this.radius).toFixed(2)}
}
const cir = new Circle(5,"blue")
console.log(cir)
