/**
 * This base class contains Before and After methods
 *
 * @Author: Harisha M
 * @version 1.0
 * @Date   27-12-2019
 */

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

    /**
     * This method will be executed before each scenario
     * @param scenarios
     * @throws IOException
     */
    @Before
    public void before(Scenario scenarios) throws IOException {
        initialize();
        scenarioName = scenarios.getName();
        scenario = scenarios;
        log.info("================================================================================================");
        log.info("======== Scenario Name: " + scenarioName + " ========");
        log.info("================================================================================================");
    }

    /**
     * This method will be executed after each scenario and logs the Pass/Fail
     *
     */
    @After
    public void after(){
        if(scenario.isFailed()){
            takeScreenShot(scenario);
            log.error("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
            log.error("++++++++ Failed: Scenario Name- " + scenarioName + "++++++++");
            log.error("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
        }else{
            log.info("------------------------------------------------------------------------------------------------");
            log.info("--------- Passed: Scenario Name- " + scenarioName + " ---------");
            log.info("------------------------------------------------------------------------------------------------");
        }
    }

}
