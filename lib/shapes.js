class Shape {
    constructor() {
        this.color = '';
    }

setColor(color) {
    this.color = color;
}

render() {
    return `<rect width="100%" height="100%" fill="${this.color}" />`;

}
}

class Triangle extends Shape {
    render () {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;


    }
}

class Circle extends Shape {
    render () {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;


    }
}

class Square extends Shape {
    render () {
        return `<rect width="80%" height="80%" x="10%" y="10%" fill="${this.color}" />`;

    }
}

module.exports = {Shape, Triangle, Circle, Square};

