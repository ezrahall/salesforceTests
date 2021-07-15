import {By} from "selenium-webdriver";

import {findElementBy} from "./utils";

export const findText = async (text) => {
    await findElementBy(By.xpath("//*[text() = '"+text+"']"));
}

export const findLabelValuePair = async (label, value) =>{
    await findElementBy(By.xpath("//*[text() = '"+label+"']/following-sibling::*//*[text() = '"+value+"']"));
}

export const tabSelector = async (tabName) => {
    let el = await findElementBy(By.xpath("//a[text() ='"+tabName+"']"));
    el.click();
}