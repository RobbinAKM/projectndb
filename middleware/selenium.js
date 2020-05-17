require("chromedriver");
const selenium = require ("selenium-webdriver");

/*var name=req.body.name;
var namefurikana=req.body.namefurikana;
var ph=req.body.phone;
var email=req.body.email;
var sex=req.body.gender;
var year=req.body.year;
var month=req.body.month;
var day=req.body.day;
var occupation=req.body.occupation ; */

const runSelenium= async function(name,namefurikana,ph,email,year,month,day,sex,occupation){

  const  driver = new selenium.Builder().forBrowser("chrome").build();
  const By = selenium.By ;

  const url = "https://townwork.net/appInpt/?joid=Y005F65N";

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
await  driver.findElement(By.xpath(`//li//label[@for="${sex}"]`)).click();


  //current occupation
await  driver.findElement(By.xpath(`//select[@id='selectfield003']//option[@value=${occupation}]`)).click();

await  driver.findElement(By.xpath("//input[@type='submit']")).submit();

};

module.exports.runSelenium=runSelenium;
