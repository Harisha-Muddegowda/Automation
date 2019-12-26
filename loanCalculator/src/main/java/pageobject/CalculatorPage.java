package pageobject;

import baseclass.BaseClass;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.Select;

public class CalculatorPage extends BaseClass {

    public static By calculatePageHeader = By.className("text--white");
    public static By applicationTypeSingle = By.xpath("//label[@for='application_type_single']");
    public static By applicationTypeJoint = By.xpath("//label[@for='application_type_joint']");
    public static By noOfDependantsDropDown = By.xpath("//*[@title='Number of dependants']");
    public static By homeToLiveIn = By.xpath("//*[@for='borrow_type_home']");
    public static By residentialInvestment = By.xpath("//*[@for='borrow_type_investment']");
    public static By incomeField = By.xpath("//*[@aria-labelledby='q2q1']");
    public static By jointApplicantIncomeField = By.xpath("//*[@aria-labelledby='q2q3']");
    public static By otherIncomeField = By.xpath("//*[@aria-labelledby='q2q2']");
    public static By jointApplicantOtherIncomeField = By.xpath("//*[@aria-labelledby='q2q4']");
    public static By livingExpenseField = By.id("expenses");
    public static By homeLoanRepaymentField = By.id("homeloans");
    public static By otherLoanRepaymentField = By.id("otherloans");
    public static By otherCommitmentsField = By.xpath("//*[@aria-labelledby='q3q4']");
    public static By creditCardLimitsField = By.id("credit");
    public static By borrowButton = By.xpath("//*[contains(@class, 'btn--borrow__calculate')]");
    public static By borrowAmount = By.className("borrow__result__text__amount");
    public static By startOverButton = By.className("start-over");
    public static By singleApplicantRadioButton = By.xpath("//*[@id='main-container']/div[1]/div/div/div[2]/div/div/div/div/div[1]/div/div[2]/div/div[1]/div/div[1]/ul/li[1]");
    public static By jointApplicantRadioButton = By.xpath("//*[@id='main-container']/div[1]/div/div/div[2]/div/div/div/div/div[1]/div/div[2]/div/div[1]/div/div[1]/ul/li[2]");
    public static By livingPurposeRadioButton = By.xpath("//*[@id='main-container']/div[1]/div/div/div[2]/div/div/div/div/div[1]/div/div[2]/div/div[1]/div/div[3]/ul/li[1]");
    public static By investmentPurposeRadioButton = By.xpath("//*[@id='main-container']/div[1]/div/div/div[2]/div/div/div/div/div[1]/div/div[2]/div/div[1]/div/div[3]/ul/li[1]");
    public static By borrowErrorMessage = By.className("borrow__error__text");

    public static void selectApplicationtype(String type){
        if(type.contains("Single")){
            driver.findElement(applicationTypeSingle).click();
            log.info("Selected application type is Single");
        }else{
            driver.findElement(applicationTypeJoint).click();
            log.info("Selected application type is Joint");
        }
    }

    public static void selectNoOfDependants(int dependants){
        Select dependantDropDownField = new Select(driver.findElement(noOfDependantsDropDown));
        dependantDropDownField.selectByVisibleText(String.valueOf(dependants));
        log.info("Selected number of dependants is " + dependants);
    }

    public static void selectPurposeOfBuy(String purpose){
        if(purpose.contains("Live")){
            driver.findElement(homeToLiveIn).click();
            log.info("Selected Property you would like to buy is Home to live in");
        }else{
            driver.findElement(residentialInvestment).click();
            log.info("Selected Property you would like to buy is Residential Investment");
        }
    }

    public static void enterYourIncome(int income){
        driver.findElement(incomeField).sendKeys(String.valueOf(income));
        log.info("Entered Income before tax is "+ income);
    }

    public static void enterOtherIncome(int otherIncome){
        driver.findElement(otherIncomeField).sendKeys(String.valueOf(otherIncome));
        log.info("Entered Other Income is "+ otherIncome);
    }

    public static void enterJointApplicantIncome(int jointIncome){
        driver.findElement(jointApplicantIncomeField).sendKeys(String.valueOf(jointIncome));
        log.info("Entered joint applicant Income before tax is "+ jointIncome);
    }

    public static void enterJointApplicantOtherIncome(int jointOtherIncome){
        driver.findElement(jointApplicantOtherIncomeField).sendKeys(String.valueOf(jointOtherIncome));
        log.info("Entered joint applicant Other Income is "+ jointOtherIncome);
    }

    public static void enterLivingExpenses(int expense){
        driver.findElement(livingExpenseField).sendKeys(String.valueOf(expense));
        log.info("Entered Living expenses is "+ expense);
    }

    public static void enterHomeLoanRepayment(int repayment){
        driver.findElement(homeLoanRepaymentField).sendKeys(String.valueOf(repayment));
        log.info("Enter Current Home loan repayment is "+ repayment);
    }

    public static void enterOtherLoanRepayment(int otherRepayment){
        driver.findElement(otherLoanRepaymentField).sendKeys(String.valueOf(otherRepayment));
        log.info("Enter Other loan repayment is "+ otherRepayment);
    }

    public static void enterOtherCommitments(int otherCommitment){
        driver.findElement(otherCommitmentsField).sendKeys(String.valueOf(otherCommitment));
        log.info("Enter Other Commitments is "+ otherCommitment);
    }

    public static void enterTotalCreditCardLimit(int creditCardLimit){
        driver.findElement(creditCardLimitsField).sendKeys(String.valueOf(creditCardLimit));
        log.info("Enter Total credit card limits is "+ creditCardLimit);
    }

    public static void clickOnWorkOutBorrowBtn(){
        driver.findElement(borrowButton).click();
        log.info("Clicked on Work out Borrow button");
    }

    public static void clickOnStartOverBtn(){
        driver.findElement(startOverButton).click();
        log.info("Clicked on Start over button");
    }
}
