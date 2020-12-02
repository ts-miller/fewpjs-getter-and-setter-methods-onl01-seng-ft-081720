class Circle {
    constructor(radius) {
        this.radius = radius
    }

    get diameter() {
        return (this.radius * 2)
    }

    get circumference() {
        return (this.diameter * Math.PI)
    }

    get area() {
        return (this.radius ** 2) * Math.PI
    }

    set diameter(dia) {
        this.radius = (dia / 2)
    }

    set circumference(cir) {
        this.radius = (cir / Math.PI) / 2
    }

    set area(area) {
        this.radius = Math.sqrt(area / Math.PI)
    }
}