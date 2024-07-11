import { expect, Locator, Page } from '@playwright/test';
export class ScalePage {
    readonly page: Page;
    // Scale grid inputs
    readonly left0 : Locator;
    readonly left1 : Locator;
    readonly left2 : Locator;
    readonly right0 : Locator;
    readonly right1 : Locator;
    readonly right2 : Locator;
    // Weight and Reset buttons
    readonly weighBtn : Locator;
    readonly resetBtn : Locator;
    // Result value button
    readonly result : Locator;
    // Bar buttons
    readonly barBtn : Locator;

    constructor(page: Page) {
        this.left0 = page.locator("#left_0");
        this.left1 = page.locator("#left_1");
        this.left2 = page.locator("#left_2");
        this.right0 = page.locator("#right_0");
        this.right1 = page.locator("#right_1");
        this.right2 = page.locator("#right_2");
        this.weighBtn = page.locator("#weigh");
        this.resetBtn = page.getByText('Reset');
        this.result = page.locator(".result").getByRole('button');
    }

    /**
     * Fills in the values for the input fields of the scale grid
     * @param {Array} scaleValues1 - contains values of bars in an array.
     * @param {Array} scaleValues2 - contains values of bars in an array.
     */
    async enterScaleVal(scaleValues1 , scaleValues2) {
        await this.left0.fill(scaleValues1[0]);
        await this.left1.fill(scaleValues1[1]);
        await this.left2.fill(scaleValues1[2]);
        await this.right0.fill(scaleValues2[0]);
        await this.right1.fill(scaleValues2[1]);
        await this.right2.fill(scaleValues2[2]);
    }

    async clickWeigh(){
        await this.weighBtn.click();
    }
    
    // method for getting weigh in result text to use in test logic
    async getResult(){
        let result = await this.result.textContent();
        return result;
    }

    // clicks reset button
    async clickReset(){
        await this.resetBtn.click();
    }

    /**
     * Fills in the values for the input fields of the scale grid
     * @param {Array} scaleValues3 - contains values of bars in an array.
     */
    async enterScaleVal2(scaleValues3){
        await this.left0.fill(scaleValues3[0]);
        await this.right0.fill(scaleValues3[1]);
    }
}
