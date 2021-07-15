import {By, Key} from "selenium-webdriver";

import {findElementBy} from "./utils";
import {driver} from "../factories/driverFactory";


export const login = async (username, password) =>{
    (await findElementBy(By.id("username"))).sendKeys(username);
    (await findElementBy(By.id("password"))).sendKeys(password, Key.RETURN);
};

export const navigateToPage = async () => {
    await driver.get("http://login.salesforce.com");
};

export const closeDriver = async () =>{
    await driver.quit()
};