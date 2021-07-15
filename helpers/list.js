import {By} from "selenium-webdriver";

import {findElementBy, selectElement} from "./utils";


export const changeListView = async (listViewName) => {
    await selectElement(By.xpath("//button[@title = 'Select List View']/parent::*"));
    await selectElement(By.xpath("//span[text() =  '"+listViewName+"']/parent::*"));
    await findElementBy(By.xpath("//span[contains(text(), 'Filtered by All accounts')]"));
};

export const selectFromList = async (selectValue) => {
    await selectElement(By.xpath("//a[@title =  '"+selectValue+"']"));
};

export const createNewRecord = async () =>{
    await selectElement(By.xpath("//div[@title = 'New']"));
}