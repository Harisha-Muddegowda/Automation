/**
 * This base class contains the scenario scripts
 *
 * @Author: Harisha M
 * @version 1.0
 * @Date   27-12-2019
 */

package step_definations;

import baseclass.BaseClass;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.support.ui.Select;
import pageobject.CalculatorPage;

public class CalculateBorrowing extends BaseClass {
    public static String applicantType;

    @Given("^I am in borrowing calculator page$")
    public void i_am_in_borrowing_calculator_page() throws Throwable {
        openBrowser();
        if(driver.findElement(CalculatorPage.calculatePageHeader).getText().contains("How much could I borrow")){
            log.info("I am in borrowing calculator page");
        }else{
            log.info("I am not in borrowing calculator page");
            Assert.assertTrue("I am not in borrowing calculator page", false);
        }
    }

    @When("^I fill my details \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
    public void i_fill_my_details_something_something_something(String applcntYype, int dependants, String purposeofbuy) throws Throwable {
        applicantType = applcntYype;
        CalculatorPage.selectApplicationtype(applcntYype);
        CalculatorPage.selectNoOfDependants(dependants);
        CalculatorPage.selectPurposeOfBuy(purposeofbuy);
    }

    @And("^I fill my earnings details \"([^\"]*)\" \"([^\"]*)\"$")
    public void i_fill_my_earnings_details_something_something(int income, int otherincome) throws Throwable {
        CalculatorPage.enterYourIncome(income);
        CalculatorPage.enterOtherIncome(otherincome);
        if(applicantType.equalsIgnoreCase("Joint")){
            CalculatorPage.enterJointApplicantIncome(income);
            CalculatorPage.enterJointApplicantOtherIncome(otherincome);
        }
    }

    @And("^I fill my expenses \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
    public void i_fill_my_expenses_something_something_something_something_something(int expense, int homeloanrepayment, int otherloanpayment, int commitements, int creditcardlimit) throws Throwable {
        CalculatorPage.enterLivingExpenses(expense);
        CalculatorPage.enterHomeLoanRepayment(homeloanrepayment);
        CalculatorPage.enterOtherLoanRepayment(otherloanpayment);
        CalculatorPage.enterOtherCommitments(commitements);
        CalculatorPage.enterTotalCreditCardLimit(creditcardlimit);
    }

    @And("^I click on work out borrow button$")
    public void i_click_on_work_out_borrow_button() throws Throwable {
        CalculatorPage.clickOnWorkOutBorrowBtn();
    }

    @Then("^I should get borrowing estimate of \"([^\"]*)\"$")
    public void i_should_get_borrowing_estimate_of(int estimate) throws Throwable {
        Thread.sleep(2000);
        String est = driver.findElement(CalculatorPage.borrowAmount).getText().replace("$","").replace(",","");
        System.out.println("Estimation borrow: "+ est);
        if(Integer.parseInt(est) == estimate){
            log.info("Borrowing estimation is same as expected");
            log.info("Expected estimation: " + estimate + ", Actual estimation: "+ est);
        }else{
            log.info("Borrowing estimation is wrong");
            log.info("Expected estimation: " + estimate + ", Actual estimation: "+ est);
            Assert.assertTrue("Borrowing estimation is wrong, Expected estimation: " + estimate + " Actual estimation: "+ est, false);
        }
    }

    @And("^I click on start over button$")
    public void i_click_on_start_over_button() throws Throwable {
        CalculatorPage.clickOnStartOverBtn();
    }

    @Then("^All the fields gets cleared$")
    public void all_the_fields_gets_cleared() throws Throwable {
        Assert.assertTrue("Application type field is not cleared", driver.findElement(CalculatorPage.singleApplicantRadioButton).getAttribute("class").equalsIgnoreCase("selected"));
        Select dependantDropDownField = new Select(driver.findElement(CalculatorPage.noOfDependantsDropDown));
        Assert.assertTrue("No of dependants field is not cleared", dependantDropDownField.getFirstSelectedOption().getText().equalsIgnoreCase("0"));
        Assert.assertTrue("Purpose of buy fields is not cleared", driver.findElement(CalculatorPage.livingPurposeRadioButton).getAttribute("class").equalsIgnoreCase("selected"));
        Assert.assertTrue("Income field is not cleared", driver.findElement(CalculatorPage.incomeField).getAttribute("value").equalsIgnoreCase("0"));
        Assert.assertTrue("Other Income field is not cleared", driver.findElement(CalculatorPage.otherIncomeField).getAttribute("value").equalsIgnoreCase("0"));
        Assert.assertTrue("Joint Income field is displayed after start over", !(driver.findElement(CalculatorPage.jointApplicantIncomeField).isDisplayed()));
        Assert.assertTrue("Expense field is not cleared", driver.findElement(CalculatorPage.livingExpenseField).getAttribute("value").equalsIgnoreCase("0"));
        Assert.assertTrue("Home loan repayment field is not cleared", driver.findElement(CalculatorPage.homeLoanRepaymentField).getAttribute("value").equalsIgnoreCase("0"));
        Assert.assertTrue("Other loan repayment field is not cleared", driver.findElement(CalculatorPage.otherLoanRepaymentField).getAttribute("value").equalsIgnoreCase("0"));
        Assert.assertTrue("Commitments field is not cleared", driver.findElement(CalculatorPage.otherCommitmentsField).getAttribute("value").equalsIgnoreCase("0"));
        Assert.assertTrue("Total credit card limit field is not cleared", driver.findElement(CalculatorPage.creditCardLimitsField).getAttribute("value").equalsIgnoreCase("0"));
        Assert.assertTrue("Work out borrow button is not displayed after clear", driver.findElement(CalculatorPage.borrowButton).isDisplayed());
        log.info("All the fields are cleared after clicking on start over button");
    }


    @And("^I fill only living expenses \"([^\"]*)\"$")
    public void i_fill_only_living_expenses_something(int expense) throws Throwable {
        CalculatorPage.enterLivingExpenses(expense);
    }

    @Then("^I should not get estimation and get valid proper error message$")
    public void i_should_not_get_estimation_and_get_valid_proper_error_message() throws Throwable {
        String errorMsg = driver.findElement(CalculatorPage.borrowErrorMessage).getText();
        if(errorMsg.equalsIgnoreCase(config.getProperty("ErrorMessage"))){
            log.info("Displayed proper error message");
            log.info("Expected Message: " + config.getProperty("ErrorMessage"));
            log.info("Actual Message: " + errorMsg);
        }else{
            log.info("Proper error message is not displayed");
            log.info("Expected Message: " + config.getProperty("ErrorMessage"));
            log.info("Actual Message: " + errorMsg);
            Assert.assertTrue("Proper error message is not displayed, /n Expected Message: " + config.getProperty("ErrorMessage") + "/n Actual Message: " + errorMsg, false);
        }
    }
}
