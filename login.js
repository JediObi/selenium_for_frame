exports.login=function(webdriver){
//const webdriver = require('selenium-webdriver');
let By = webdriver.By;
let Key = webdriver.Key;
let until = webdriver.until;

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    //.withCapabilities(webdriver.Capabilities.chrome())
    .build();


// driver.get('http://115.159.207.102:8080/rh/indexlis.jsp');
// driver.get('http://139.219.239.23:28080/fwd_dat');
driver.get('http://localhost:8080/');

driver.switchTo().defaultContent();
driver.wait(until.elementLocated(By.name('fraInterface')),5*1000);



    driver.switchTo().frame('fraInterface');
    
    driver.wait(until.elementLocated(By.id('UserCode2')),10*1000);
    
    driver.findElement(By.id('UserCode2')).click();
    driver.findElement(By.id('UserCode2')).clear();
    driver.findElement(By.id('UserCode2')).sendKeys('fw001');
    
    driver.findElement(By.id('password_PWD2')).click();
    driver.findElement(By.id('password_PWD2')).clear();
    driver.findElement(By.id('password_PWD2')).sendKeys('001');
    
    
    /*
    let stationCode;
    for(let i=0;i<3;i++){
        driver.findElement(By.id('StationCode')).click();
        driver.wait(until.elementLocated(By.id('codeselect')),5*1000);
        actions.click(driver.findElement(By.xpath('//span[@id="spanCode"]/select[@id="codeselect"]/option[@value="86"]'))).perform();
        stationCode = driver.findElement(By.id("StationCode")).getText();
        if (stationCode) break;
    }
    if (!stationCode){
        driver.quit();
    }
    */
    driver.findElement(By.id('StationCode')).click();
    driver.findElement(By.id('StationCode')).clear();
    driver.findElement(By.id('StationCode')).sendKeys('86310000');
    driver.findElement(By.id('StationCode')).click();
    
    driver.findElement(By.id('password_PWD2')).click();
    
    //const actions = driver.actions();
    //actions.sendKeys(Key.ENTER).perform();
    console.log(1);
    driver.findElement(By.id('submit2')).click();
return driver;

}