import {Actions, until} from "selenium-webdriver";
import {By, Key} from "selenium-webdriver";

import {driver} from "../factories/driverFactory";


export const findElementBy = (locator) => {
    return driver.wait(until.elementLocated(locator), 25 * 1000).then(el => {
        return el;
    });
};

export const elementIsVisible = (element) => {
    return driver.wait(until.elementIsVisible(element), 25 * 1000).then(() => {
        return element;
    });
}

export const switchTabs = async () => {
    const action = driver.actions();
    await action.keyDown(Key.CONTROL).keyDown(Key.TAB).perform();
}

export const findElementsBy = (locator) => {
    return driver.wait(until.elementsLocated(locator), 15 * 1000).then(elements => {
        return elements;
    });
};

export const selectElement = async (locator) =>{
    let el = await findElementBy(locator);
    await el.click();
};

export const selectElementShort = async (locator) =>{
    let el = await findElementBy(locator);
    await el.click();
};