import {
    DonutMaker
} from "../../src/js/DonutMaker.js"

describe('DonutMaker.js provides a class for making DonutMaker objects', () => {
    it("We can create new DonutMaker objects", () => {
        let underTest = new DonutMaker();
        expect(underTest instanceof DonutMaker).toBeTruthy();
    })
    describe('A DonutMaker object can record clicks and turn them into donuts.', () => {
        it("Should start with zero donuts.", () => {
            let underTest = new DonutMaker();
            expect(underTest.getDonutCount()).toBe(0);
        })
        it("Should record a click and turn it into a donut.", () => {
            let underTest = new DonutMaker();
            underTest.recordClick();
            expect(underTest.getDonutCount()).toBe(1);
        })
    })

});