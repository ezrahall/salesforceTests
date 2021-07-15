import {By} from "selenium-webdriver";

import {findElementBy} from "./utils";

export const newRelatedRecord =  async (objectName) => {
    let el = await findElementBy(By.xpath("//span[@title ='"+objectName+"']/parent::*/parent::*/parent::*/parent::*/parent::*/following-sibling::*/following-sibling::*//a[@title='New']"));
    await el.click();
}

export const findRelatedRecord = async (list) =>{
    for (let i = 0; i < list.length; i++) {
        await findElementBy(By.xpath("//*[text() = '"+list[i]+"']"))
    }
}