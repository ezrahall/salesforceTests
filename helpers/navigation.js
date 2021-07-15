import {By} from "selenium-webdriver";

import {selectElement, selectElementShort, switchTabs} from "./utils";

export const goToAnyAppOrItem = async (appName) => {
    try {
        await selectElementShort(By.xpath("//div[@class='slds-icon-waffle']"));
        await selectElementShort(By.xpath("//button[text() = 'View All']"));
    }
    catch (error){
        await goToAnyAppOrItem(appName);
    }
    await selectElement(By.xpath("//p[text() = '"+appName+"']/parent::*/parent::*/parent::*/parent::*/parent::*"));
};

export const goToTab = async (tabName) => {
    await selectElement(By.xpath("//a[@title = '" + tabName + "']/parent::*"));
    try{
        await selectElement(By.xpath("//a[@title = '" + tabName + "']/parent::*"));
    }catch (error){
        await goToTab(tabName);
        console.log(error.message);
    }
};

export const navigateToSetup = async () => {
    await selectElement(By.xpath("//div[@class = 'setupGear']"));
    await selectElement(By.xpath("//a[@title='Setup']"));
}

const wait = async (seconds) => {
    await new Promise((r) => setTimeout(r, seconds));
}