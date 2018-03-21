const webdriver = require('selenium-webdriver');
let By = webdriver.By;
let Key = webdriver.Key;
let until = webdriver.until;

const driver = new webdriver.Builder()
.forBrowser('chrome')
    //.withCapabilities(webdriver.Capabilities.chrome())
    .build();

let sleep_time=0;

// driver.get('http://115.159.207.102:8080/rh/indexlis.jsp');
 //driver.get('http://139.219.239.23:28080/fwd_dat');
driver.get('http://localhost:8080/');

driver.switchTo().defaultContent().then(()=>{
    console.log(2);
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
    
});


// after login
// select frame head 团险业务
//driver.switchTo().frame();
sleep_time+=5;
driver.sleep(sleep_time*1000).then(()=>{
    driver.switchTo().defaultContent().then(()=>{
        console.log(3);
        driver.wait(until.elementLocated(By.id('head')),10*1000);
        //driver.switchTo().frame('head');
        driver.switchTo().frame('head');
        driver.findElement(By.xpath('//div[@id="menuClass1"]/ul/li[2]')).click();
        console.log(4);
    });
});

// after click 团险业务
// click 财务管理 ok
// click 保费管理
// click 保费匹配
sleep_time+=1;
driver.sleep(sleep_time*1000).then(()=>{
    driver.switchTo().defaultContent().then(()=>{
        console.log(5);
        driver.wait(until.elementLocated(By.id('fraMenu')),10*1000);
        //driver.switchTo().frame('head');
        driver.switchTo().frame('fraMenu');
        // 财务管理 ok
        driver.findElement(By.xpath('//div[@id="divMenuTreeCopy"]/div[@class="left"]/ul/li[@id="4"]')).click();
        
        // 保费管理
        
    });
});

sleep_time+=1;
driver.sleep(sleep_time*1000).then(()=>{
    driver.switchTo().defaultContent().then(()=>{
        console.log(6);
        driver.wait(until.elementLocated(By.id('fraMenu')),10*1000);
        //driver.switchTo().frame('head');
        driver.switchTo().frame('fraMenu');
        // 保费管理 ok
        //const ele1 = 
        //ele1.getTagName().then(text=>{console.log('test1111:',text)});
        driver.findElement(By.xpath('//div[@id="huadong1"]/dl[2]/dt')).click();
        // 保费匹配 ok
        driver.sleep(1*1000).then(()=>{driver.findElement(By.xpath('//div[@id="huadong1"]/dl[2]/dd[2]/a')).click();});
        

    });
});

// 点击查询
sleep_time+=2;
driver.sleep(sleep_time*1000).then(()=>{
    driver.switchTo().defaultContent().then(()=>{
        console.log(6);
        driver.wait(until.elementLocated(By.id('fraInterface')),10*1000);
        driver.switchTo().frame('fraInterface');
        driver.findElement(By.xpath('//form/div[@id="divInfo1"]/input')).click();     
        // driver.wait(until.elementLocated(By.xpath('//div[@className="bDiv"]/table/tbody/tr/td/div/input')),2*1000);
        // driver.findElement(By.xpath('//div[@className="bDiv"]/table/tbody/tr/td/div/input')).click();
        
    });
});

sleep_time+=2;
driver.sleep(sleep_time*1000).then(()=>{
    driver.switchTo().defaultContent().then(()=>{
        console.log(6);
        driver.wait(until.elementLocated(By.id('fraInterface')),10*1000);
        driver.switchTo().frame('fraInterface');
        // driver.findElement(By.xpath('//div[@class="bDiv"]/table/tbody/tr/td/div/input[@id="MatchInfoGridSel0"]')).getAttribute().then(text=>{console.log('test1111:',text)});

        // driver.wait(until.elementLocated(By.xpath('//div[@className="bDiv"]/table/tbody/tr/td/div/input')),2*1000);
        driver.findElement(By.xpath('//div[@class="bDiv"]/table/tbody/tr/td/div/input[@id="MatchInfoGridSel0"]')).click().then(()=>{
            driver.findElement(By.xpath('//form/input')).click();
        });
        
    });
});

// 进入保费匹配
sleep_time+=2;
driver.sleep(sleep_time*1000).then(()=>{
    driver.switchTo().defaultContent().then(()=>{
        console.log(6);
        driver.wait(until.elementLocated(By.id('fraInterface')),10*1000);
        driver.switchTo().frame('fraInterface');
        // driver.findElement(By.xpath('//div[@class="bDiv"]/table/tbody/tr/td/div/input[@id="MatchInfoGridSel0"]')).getAttribute().then(text=>{console.log('test1111:',text)});

        // driver.wait(until.elementLocated(By.xpath('//div[@className="bDiv"]/table/tbody/tr/td/div/input')),2*1000);
        driver.findElement(By.xpath('//form[@id="fm1"]/div/input')).click();
        
    });
});



