const { Circle, Triangle, Square } = require('./shapes');

describe('Circle', () => {
    it('Renders green circle with blue text that says FN', () => {
        const newCircle = new Circle('FN', 'blue', 'green');
        const testSVG = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" fill="green" stroke-width="5"/>
            <text x="20%" y="20%" dominant-baseline="middle" text-anchor="middle" fill="blue" font-size="16">
                FN
            </text>
        </svg>`
        expect(newCircle.render()).toEqual(testSVG);
    })
})
describe('Triangle', () => {
    it('Renders green triangle with blue text that says FN', () => {
        const newTriangle = new Triangle('FN', 'blue', 'green');
        const testSVG = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="50, 10 90, 90 10, 90" fill="green" stroke-width="5"/>
            <text x="20%" y="20%" dominant-baseline="middle" text-anchor="middle" fill="blue" font-size="16">
                FN
            </text>
        </svg>`
        expect(newTriangle.render()).toEqual(testSVG);
    })
})
describe('Square', () => {
    it('Renders green square with blue text that says FN', () => {
        const newSquare = new Square('FN', 'blue', 'green');
        const testSVG = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="80" height="80" fill="green" stroke-width="5"/>
            <text x="20%" y="20%" dominant-baseline="middle" text-anchor="middle" fill="blue" font-size="16">
                FN
            </text>
        </svg>`
        expect(newSquare.render()).toEqual(testSVG);
    })
})