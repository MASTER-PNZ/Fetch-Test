import { test, expect, Page } from '@playwright/test';
import { ScalePage } from '../pages/scale-page';

const td = {
    'bars1' : ['0','1','2'],
    'bars2' : ['3','4','5'],
    'bars3' : ['6','7','8'],
    'less' : '<',
    'greater' : '>',
    'equal' : '='
};

test.describe('9 Gold Bars', () => {
    
    test('Verify bar with least weight', async ({ page }) => {
        await page.goto('http://sdetchallenge.fetch.com/');
        const scalePage = new ScalePage(page);
        // Entering first bars into scale and making measurement
        await scalePage.enterScaleVal(td.bars1, td.bars2);
        await scalePage.clickWeigh();
        // Getting the operand to compare
        let firstWeigh = await scalePage.getResult();
        let finalBars;
        // First Scale comparison + entering next set of bars to compare
        if (firstWeigh == td.equal) {
            await scalePage.clickReset();
            await scalePage.enterScaleVal2(td.bars3);
            finalBars = td.bars3;
        } 
        else if (firstWeigh == td.less){
            await scalePage.clickReset();
            await scalePage.enterScaleVal2(td.bars1);
            finalBars = td.bars1;
        }
        else if (firstWeigh == td.greater){
            await scalePage.clickReset();
            await scalePage.enterScaleVal2(td.bars2);
            finalBars = td.bars2;
        }
        await scalePage.clickWeigh();
        // Getting the operand to compare
        let secondWeigh = await scalePage.getResult();
        // Handling expected alert from button clicks
        page.on('dialog', async dialog => {
            expect(dialog.message()).toContain('Yay! You find it!')
        })
        // Second Scale comparison
        if (secondWeigh == td.less){
            // Clicks the bar button on the page 
            await scalePage.clickBar(finalBars[0]);
        }
        else if (secondWeigh == td.greater){
            await scalePage.clickBar(finalBars[1]);
        }
        else if (secondWeigh == td.equal){
            await scalePage.clickBar(finalBars[2]);
        }
    });
});
