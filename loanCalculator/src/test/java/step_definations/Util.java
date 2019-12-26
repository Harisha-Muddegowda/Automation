package step_definations;

import baseclass.BaseClass;
import com.github.mkolisnyk.cucumber.runner.AfterSuite;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

import java.io.IOException;


public class Util extends BaseClass {
    public static String scenarioName;
    public static Scenario scenario;

    @Before
    public void before(Scenario scenarios) throws IOException {
        initialize();
        scenarioName = scenarios.getName();
        scenario = scenarios;
        log.info("================================================================================================");
        log.info("============================== Scenario Name: " + scenarioName + " =============================");
        log.info("================================================================================================");
    }

    @After
    public void after(){
        if(scenario.isFailed()){
            takeScreenShot(scenario);
            log.error("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
            log.error("++++++++++++++++++++++++++ Failed: Scenario Name- " + scenarioName + "++++++++++++++++++++++++++");
            log.error("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
        }else{
            log.info("------------------------------------------------------------------------------------------------");
            log.info("-------------------------- Passed: Scenario Name- " + scenarioName + " -------------------------");
            log.info("------------------------------------------------------------------------------------------------");
        }
    }

    @AfterSuite
    public static void tearDown() {
        driver.quit();
        isBrowserOpened = false;
    }
}
