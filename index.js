import {findElementBy} from "./helpers/utils";
import {By} from "selenium-webdriver";

export const fillField = async (fieldName, inputString) => {
    let el = await findElementBy(By.xpath("//label[text()='"+fieldName+"']/following-sibling::div//input"))
    el.sendKeys(inputString);
}

