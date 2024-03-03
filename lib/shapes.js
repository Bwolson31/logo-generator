class Shape {
    constructor() {
        this.color = '';
    }

setColor(color) {
    this.color = color;
}

render() {
    return `<svg width="300" height="200"><rect width="100%" height="100%" fill="${this.color}" /></svg>`;

}
}

class Triangle extends Shape {
    render () {
        return `<svg width="300" height="200"><polygon points="150, 18 244, 182 56, 182" fill="${this.color}" /></svg>`;


    }
}

class Circle extends Shape {
    render () {
        return `<svg width="300" height="200"><circle cx="150" cy="100" r="80" fill="${this.color}" /></svg>`;


    }
}

class Square extends Shape {
    render () {
        return `<svg width="300" height="200"><rect width="80%" height="80%" x="10%" y="10%" fill="${this.color}" /></svg>`;

    }
}

module.exports = {Shape, Triangle, Circle, Square};

