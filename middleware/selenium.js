require("chromedriver");
const selenium = require ("selenium-webdriver");


const runSelenium= async function(url ,name,namefurikana,ph,email,year,month,day,sex,occupation){
  const  driver = new selenium.Builder().forBrowser("chrome").build();
  const By = selenium.By ;

  //get the browser open
await  driver.get(url);

  //name

await  driver.findElement(By.css("#textfield000")).sendKeys(name);

  //furikana name
await  driver.findElement(By.css("#textfield001")).sendKeys(namefurikana);

  //ph
await  driver.findElement(By.css("#textfield002")).sendKeys(ph);

  //email
await driver.findElement(By.css("#jsi-mailaddress")).sendKeys(email);

  //birthday date
await driver.findElement(By.xpath(`//select[@id='jsi-date-birth-year']//option[@value=${year}]`)).click();
await driver.findElement(By.xpath(`//select[@id='selectfield001']//option[@value=${month}]`)).click();
await driver.findElement(By.xpath(`//select[@id='selectfield002']//option[@value=${day}]`)).click();

  //sex
  //driver.findElement(By.xpath("//li//label[@for='men']")).click();
await driver.findElement(By.css(`#${sex}`)).click();



  //current occupation
await  driver.findElement(By.xpath(`//select[@id='selectfield003']//option[@value=${occupation}]`)).click();

await  driver.findElement(By.xpath("//div[@class='center-btn-wrap']//input[@value='同意して送信']")).click();

//await  driver.findElement(By.xpath("//div[@class='btn-wrap']//input")).click();



};

module.exports.runSelenium=runSelenium;
