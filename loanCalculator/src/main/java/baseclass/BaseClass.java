package baseclass;

import cucumber.api.Scenario;
import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

public class BaseClass {

    public static WebDriver driver;
    public static Properties config;
    public static Boolean isInitialized = false;
    public static Boolean isBrowserOpened = false;
    public static Logger log;

    public static void initialize() throws IOException {
        if(!isInitialized){
            log = Logger.getLogger(BaseClass.class.getName());
            PropertyConfigurator.configure("log4j.properties");
            config = new Properties();
            FileInputStream ip = new FileInputStream(new File(System.getProperty("user.dir") + "\\src\\main\\resources\\config\\config.properties"));
            config.load(ip);
            isInitialized = true;
        }
    }

    public static void openBrowser(){
        if(!isBrowserOpened){
            if(config.getProperty("Browser").equalsIgnoreCase("IE")){
                System.setProperty("webdriver.ie.driver", System.getProperty("user.dir") + "\\src\\main\\resources\\drivers\\IEDriverServer.exe");
                driver = new InternetExplorerDriver();
            }else if(config.getProperty("Browser").equalsIgnoreCase("Chrome")){
                System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "\\src\\main\\resources\\drivers\\chromedriver.exe");
                driver = new ChromeDriver();
            }else{
                System.setProperty("webdriver.gecko.driver", System.getProperty("user.dir") + "\\src\\main\\resources\\drivers\\geckodriver.exe");
                driver = new FirefoxDriver();
            }
        }
        driver.manage().window().maximize();
        driver.navigate().to(config.getProperty("URL"));
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        isBrowserOpened = true;
    }

    public static void takeScreenShot(Scenario scenario){
        byte[] screenShot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
        scenario.embed(screenShot, "image/png");
    }
}
