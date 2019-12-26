$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("borrowingCalculator.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Harisha M"
    },
    {
      "line": 2,
      "value": "#Version 1.0"
    }
  ],
  "line": 5,
  "name": "Borrowing calculator",
  "description": "",
  "id": "borrowing-calculator",
  "keyword": "Feature",
  "tags": [
    {
      "line": 4,
      "name": "@Clalculate"
    }
  ]
});
formatter.scenarioOutline({
  "line": 7,
  "name": "I want to estimate how much I may be able to borrow based on my current income and existing financial commitments",
  "description": "",
  "id": "borrowing-calculator;i-want-to-estimate-how-much-i-may-be-able-to-borrow-based-on-my-current-income-and-existing-financial-commitments",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I am in borrowing calculator page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I fill my details \"\u003cApplicant_Type\u003e\" \"\u003cDependants\u003e\" \"\u003cPurpose_Of_Buy\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I fill my earnings details \"\u003cIncome\u003e\" \"\u003cOther_Income\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I fill my expenses \"\u003cExpense\u003e\" \"\u003cHome_Loan_Repayment\u003e\" \"\u003cOther_Loan_Payment\u003e\" \"\u003cCommitments\u003e\" \"\u003cCreditCard_Limit\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on work out borrow button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should get borrowing estimate of \"\u003cEstimate\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "borrowing-calculator;i-want-to-estimate-how-much-i-may-be-able-to-borrow-based-on-my-current-income-and-existing-financial-commitments;",
  "rows": [
    {
      "cells": [
        "Applicant_Type",
        "Dependants",
        "Purpose_Of_Buy",
        "Income",
        "Other_Income",
        "Expense",
        "Home_Loan_Repayment",
        "Other_Loan_Payment",
        "Commitments",
        "CreditCard_Limit",
        "Estimate"
      ],
      "line": 16,
      "id": "borrowing-calculator;i-want-to-estimate-how-much-i-may-be-able-to-borrow-based-on-my-current-income-and-existing-financial-commitments;;1"
    },
    {
      "cells": [
        "Single",
        "0",
        "Live",
        "80000",
        "10000",
        "500",
        "0",
        "100",
        "0",
        "10000",
        "479000"
      ],
      "line": 17,
      "id": "borrowing-calculator;i-want-to-estimate-how-much-i-may-be-able-to-borrow-based-on-my-current-income-and-existing-financial-commitments;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 306507120,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "I want to estimate how much I may be able to borrow based on my current income and existing financial commitments",
  "description": "",
  "id": "borrowing-calculator;i-want-to-estimate-how-much-i-may-be-able-to-borrow-based-on-my-current-income-and-existing-financial-commitments;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Clalculate"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am in borrowing calculator page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I fill my details \"Single\" \"0\" \"Live\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I fill my earnings details \"80000\" \"10000\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I fill my expenses \"500\" \"0\" \"100\" \"0\" \"10000\"",
  "matchedColumns": [
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on work out borrow button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should get borrowing estimate of \"479000\"",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CalculateBorrowing.i_am_in_borrowing_calculator_page()"
});
formatter.result({
  "duration": 72604034312,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Single",
      "offset": 19
    },
    {
      "val": "0",
      "offset": 28
    },
    {
      "val": "Live",
      "offset": 32
    }
  ],
  "location": "CalculateBorrowing.i_fill_my_details_something_something_something(String,int,String)"
});
formatter.result({
  "duration": 1127547181,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "80000",
      "offset": 28
    },
    {
      "val": "10000",
      "offset": 36
    }
  ],
  "location": "CalculateBorrowing.i_fill_my_earnings_details_something_something(int,int)"
});
formatter.result({
  "duration": 2126644009,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 20
    },
    {
      "val": "0",
      "offset": 26
    },
    {
      "val": "100",
      "offset": 30
    },
    {
      "val": "0",
      "offset": 36
    },
    {
      "val": "10000",
      "offset": 40
    }
  ],
  "location": "CalculateBorrowing.i_fill_my_expenses_something_something_something_something_something(int,int,int,int,int)"
});
formatter.result({
  "duration": 1039682648,
  "status": "passed"
});
formatter.match({
  "location": "CalculateBorrowing.i_click_on_work_out_borrow_button()"
});
formatter.result({
  "duration": 157428913,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "479000",
      "offset": 36
    }
  ],
  "location": "CalculateBorrowing.i_should_get_borrowing_estimate_of(int)"
});
formatter.result({
  "duration": 2039621866,
  "error_message": "java.lang.NumberFormatException: For input string: \"\"\r\n\tat java.lang.NumberFormatException.forInputString(NumberFormatException.java:65)\r\n\tat java.lang.Integer.parseInt(Integer.java:592)\r\n\tat java.lang.Integer.parseInt(Integer.java:615)\r\n\tat step_definations.CalculateBorrowing.i_should_get_borrowing_estimate_of(CalculateBorrowing.java:63)\r\n\tat ✽.Then I should get borrowing estimate of \"479000\"(borrowingCalculator.feature:13)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 866186259,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "I want to clear all the entered loan details",
  "description": "",
  "id": "borrowing-calculator;i-want-to-clear-all-the-entered-loan-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "I am in borrowing calculator page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I fill my details \"\u003cApplicant_Type\u003e\" \"\u003cDependants\u003e\" \"\u003cPurpose_Of_Buy\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I fill my earnings details \"\u003cIncome\u003e\" \"\u003cOther_Income\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I fill my expenses \"\u003cExpense\u003e\" \"\u003cHome_Loan_Repayment\u003e\" \"\u003cOther_Loan_Payment\u003e\" \"\u003cCommitments\u003e\" \"\u003cCreditCard_Limit\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on work out borrow button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on start over button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "All the fields gets cleared",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "borrowing-calculator;i-want-to-clear-all-the-entered-loan-details;",
  "rows": [
    {
      "cells": [
        "Applicant_Type",
        "Dependants",
        "Purpose_Of_Buy",
        "Income",
        "Other_Income",
        "Expense",
        "Home_Loan_Repayment",
        "Other_Loan_Payment",
        "Commitments",
        "CreditCard_Limit",
        "Estimate"
      ],
      "line": 29,
      "id": "borrowing-calculator;i-want-to-clear-all-the-entered-loan-details;;1"
    },
    {
      "cells": [
        "Joint",
        "2",
        "Investment",
        "80000",
        "10000",
        "500",
        "100",
        "100",
        "100",
        "10000",
        "479000"
      ],
      "line": 30,
      "id": "borrowing-calculator;i-want-to-clear-all-the-entered-loan-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2973619,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "I want to clear all the entered loan details",
  "description": "",
  "id": "borrowing-calculator;i-want-to-clear-all-the-entered-loan-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Clalculate"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I am in borrowing calculator page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I fill my details \"Joint\" \"2\" \"Investment\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I fill my earnings details \"80000\" \"10000\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I fill my expenses \"500\" \"100\" \"100\" \"100\" \"10000\"",
  "matchedColumns": [
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on work out borrow button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on start over button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "All the fields gets cleared",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculateBorrowing.i_am_in_borrowing_calculator_page()"
});
formatter.result({
  "duration": 4553039753,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joint",
      "offset": 19
    },
    {
      "val": "2",
      "offset": 27
    },
    {
      "val": "Investment",
      "offset": 31
    }
  ],
  "location": "CalculateBorrowing.i_fill_my_details_something_something_something(String,int,String)"
});
formatter.result({
  "duration": 602571258,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "80000",
      "offset": 28
    },
    {
      "val": "10000",
      "offset": 36
    }
  ],
  "location": "CalculateBorrowing.i_fill_my_earnings_details_something_something(int,int)"
});
formatter.result({
  "duration": 1242661404,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 20
    },
    {
      "val": "100",
      "offset": 26
    },
    {
      "val": "100",
      "offset": 32
    },
    {
      "val": "100",
      "offset": 38
    },
    {
      "val": "10000",
      "offset": 44
    }
  ],
  "location": "CalculateBorrowing.i_fill_my_expenses_something_something_something_something_something(int,int,int,int,int)"
});
formatter.result({
  "duration": 1150810929,
  "status": "passed"
});
formatter.match({
  "location": "CalculateBorrowing.i_click_on_work_out_borrow_button()"
});
formatter.result({
  "duration": 625660364,
  "status": "passed"
});
formatter.match({
  "location": "CalculateBorrowing.i_click_on_start_over_button()"
});
formatter.result({
  "duration": 315116792,
  "status": "passed"
});
formatter.match({
  "location": "CalculateBorrowing.all_the_fields_gets_cleared()"
});
formatter.result({
  "duration": 1053844903,
  "status": "passed"
});
formatter.after({
  "duration": 1455349,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 32,
  "name": "I want to estimate borrow by filling only living expenses and leaving all other fields as zero",
  "description": "",
  "id": "borrowing-calculator;i-want-to-estimate-borrow-by-filling-only-living-expenses-and-leaving-all-other-fields-as-zero",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 33,
  "name": "I am in borrowing calculator page",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "I fill only living expenses \"\u003cExpense\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on work out borrow button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I should not get estimation and get valid proper error message",
  "keyword": "Then "
});
formatter.examples({
  "line": 38,
  "name": "",
  "description": "",
  "id": "borrowing-calculator;i-want-to-estimate-borrow-by-filling-only-living-expenses-and-leaving-all-other-fields-as-zero;",
  "rows": [
    {
      "cells": [
        "Expense"
      ],
      "line": 39,
      "id": "borrowing-calculator;i-want-to-estimate-borrow-by-filling-only-living-expenses-and-leaving-all-other-fields-as-zero;;1"
    },
    {
      "cells": [
        "1"
      ],
      "line": 40,
      "id": "borrowing-calculator;i-want-to-estimate-borrow-by-filling-only-living-expenses-and-leaving-all-other-fields-as-zero;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1753267,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "I want to estimate borrow by filling only living expenses and leaving all other fields as zero",
  "description": "",
  "id": "borrowing-calculator;i-want-to-estimate-borrow-by-filling-only-living-expenses-and-leaving-all-other-fields-as-zero;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Clalculate"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "I am in borrowing calculator page",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "I fill only living expenses \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on work out borrow button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I should not get estimation and get valid proper error message",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculateBorrowing.i_am_in_borrowing_calculator_page()"
});
formatter.result({
  "duration": 8566744856,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 29
    }
  ],
  "location": "CalculateBorrowing.i_fill_only_living_expenses_something(int)"
});
formatter.result({
  "duration": 131808784,
  "status": "passed"
});
formatter.match({
  "location": "CalculateBorrowing.i_click_on_work_out_borrow_button()"
});
formatter.result({
  "duration": 150307121,
  "status": "passed"
});
formatter.match({
  "location": "CalculateBorrowing.i_should_not_get_estimation_and_get_valid_proper_error_message()"
});
formatter.result({
  "duration": 73551607,
  "error_message": "java.lang.AssertionError: Proper error message is not displayed\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat step_definations.CalculateBorrowing.i_should_not_get_estimation_and_get_valid_proper_error_message(CalculateBorrowing.java:113)\r\n\tat ✽.Then I should not get estimation and get valid proper error message(borrowingCalculator.feature:36)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 487172814,
  "status": "passed"
});
});