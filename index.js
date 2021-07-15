const {findElementBy} = require("./helpers/utils");

const {By} = require("selenium-webdriver");

const fillField = async (fieldName, inputString) => {
    let el = await findElementBy(By.xpath("//label[text()='"+fieldName+"']/following-sibling::div//input"))
    el.sendKeys(inputString);
}

exports.fillField = fillField;

