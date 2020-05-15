require("chromedriver");
const selenium = require ("selenium-webdriver");
const  driver = new selenium.Builder().forBrowser("chrome").build();
const By = selenium.By ;

const url = "https://townwork.net/appInpt/?joid=Y0055J4X";

var name=document.getElementById("name").value;
var namefurikana=document.getElementById("nameHirakana").value;
var ph="07021669796";
var email="dd@gmail.com";
var sex="men";
var year="1990";
var month="05";
var day="22";
var occupation="05"

const runSelenium= async function(){
event.preventDefault();

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

runSelenium();
