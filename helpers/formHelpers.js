import {By} from "selenium-webdriver";

import {findElementBy} from "./utils";

export const toggleCheckboxByField = async (fieldName) => {
    let el = await findElementBy(By.xpath("//span[text() =  '"+fieldName+"']/parent::*/parent::*//input"))
    el.click();
}

export const fillField = async (fieldName, inputString) => {
    let el = await findElementBy(By.xpath("//label[text()='"+fieldName+"']/following-sibling::div//input"))
    el.sendKeys(inputString);
}

export const lookFieldSelector = async (fieldName, inputString) => {
    let tag = await (await findElementBy(By.xpath("//*[text() = '"+fieldName+"']/parent::*"))).getTagName()
    if (tag === 'lightning-grouped-combobox'){
        await lookupFieldNotRequired(fieldName, inputString)
    }
}

export const lookupField = async (fieldName, inputString) => {
    let el = await findElementBy(By.xpath("//label[span[text()='"+fieldName+"']]/following-sibling::div//input"))
    el.sendKeys(inputString);
    let resultEl  = await findElementBy(By.xpath("//mark[text() = '"+inputString+"']"));
    await resultEl.click();
}

export const lookupFieldNotRequired = async (fieldName, inputString) => {
    let el = await findElementBy(By.xpath("//label[text()='"+fieldName+"']/following-sibling::div//input"))
    el.sendKeys(inputString);
    let resultEl  = await findElementBy(By.xpath("//strong[text() = '"+inputString+"']"));
    await resultEl.click();
}

export const fillTextArea = async (fieldName, inputString) => {
    let el = await findElementBy(By.xpath("//label[text()='"+fieldName+"']/following-sibling::div//textarea"))
    el.sendKeys(inputString);
}

export const pickListSelect = async (fieldName, picklistValue) => {
    let el = await findElementBy(By.xpath("//*[text() = '"+fieldName+"']/parent::*"));
    let tag = await el.getTagName();
    if (tag === 'lightning-combobox'){
        await selectFromCombobox(fieldName, picklistValue)
    }else if (tag == 'span'){
        await auraPickList(fieldName, picklistValue)
    }
}

export const selectFromCombobox = async (fieldName, picklistValue) => {
        let el = await findElementBy(By.xpath("//label[text() = '" + fieldName + "']/following-sibling::*//input"));
        await el.sendKeys('');
        await el.click();
        let element = await findElementBy(By.xpath("//*[text() = '" + fieldName + "']/following-sibling::*//*[text() = '" + picklistValue + "']/parent::*/parent::*"));
        try {
            await element.click();
        } catch (e) {
            await selectFromCombobox(fieldName, picklistValue);
        }
}

export const auraPickList = async (fieldName, picklistValue) => {
    await (await findElementBy(By.xpath("//*[text() = '"+fieldName+"']/parent::*/following-sibling::*"))).click();
    let element = await findElementBy(By.xpath("//*[text() = '"+picklistValue+"']"));
    element.click();
}

export const saveRecord = async () => {
    let el = await findElementBy(By.xpath("//button[text()='Save']"));
    await el.click();
}

export const assertValidationError = async (expectedError) => {
    await findElementBy(By.xpath(("//h2[text() = 'We hit a snag.']")));
    await findElementBy(By.xpath("//a[text() = '"+expectedError+"']"));
}

export const  sleep = (time) =>  {
    return new Promise(resolve => setTimeout(resolve, time));
}