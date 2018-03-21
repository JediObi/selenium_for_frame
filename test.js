//import login from './login';

const login=require('./login');
const webdriver=require('selenium-webdriver');
let By = webdriver.By;
let until = webdriver.until;
//let MyWebDriver = webdriver.WebDriver;
//const driver = new MyWebDriver(ccap,null);

const driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get('file:///home/fc/selenium/selenium_projects/lis7_scripts/test.html');
driver.findElement(By.xpath('//dl[2]//dd[2]')).then((element)=>{
    element.getTagName().then(text=>{console.log('test111:',text)});
});
console.log(1);

