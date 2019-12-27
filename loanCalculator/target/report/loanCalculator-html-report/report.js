$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("borrowingCalculator.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# This feature file consists of Borrowing Calculator scenarios"
    },
    {
      "line": 2,
      "value": "# @Author: Harisha M"
    },
    {
      "line": 3,
      "value": "# Version 1.0"
    }
  ],
  "line": 6,
  "name": "Borrowing calculator",
  "description": "",
  "id": "borrowing-calculator",
  "keyword": "Feature",
  "tags": [
    {
      "line": 5,
      "name": "@Calculate"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "I want to estimate how much I may be able to borrow based on my current income and existing financial commitments",
  "description": "",
  "id": "borrowing-calculator;i-want-to-estimate-how-much-i-may-be-able-to-borrow-based-on-my-current-income-and-existing-financial-commitments",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@EstimateBorrow"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am in borrowing calculator page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I fill my details \"\u003cApplicant_Type\u003e\" \"\u003cDependants\u003e\" \"\u003cPurpose_Of_Buy\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I fill my earnings details \"\u003cIncome\u003e\" \"\u003cOther_Income\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I fill my expenses \"\u003cExpense\u003e\" \"\u003cHome_Loan_Repayment\u003e\" \"\u003cOther_Loan_Payment\u003e\" \"\u003cCommitments\u003e\" \"\u003cCreditCard_Limit\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on work out borrow button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should get borrowing estimate of \"\u003cEstimate\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
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
      "line": 18,
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
        "470000"
      ],
      "line": 19,
      "id": "borrowing-calculator;i-want-to-estimate-how-much-i-may-be-able-to-borrow-based-on-my-current-income-and-existing-financial-commitments;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 46445142,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "I want to estimate how much I may be able to borrow based on my current income and existing financial commitments",
  "description": "",
  "id": "borrowing-calculator;i-want-to-estimate-how-much-i-may-be-able-to-borrow-based-on-my-current-income-and-existing-financial-commitments;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@EstimateBorrow"
    },
    {
      "line": 5,
      "name": "@Calculate"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am in borrowing calculator page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I fill my details \"Single\" \"0\" \"Live\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I fill my earnings details \"80000\" \"10000\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
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
  "line": 14,
  "name": "I click on work out borrow button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should get borrowing estimate of \"470000\"",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CalculateBorrowing.i_am_in_borrowing_calculator_page()"
});
formatter.result({
  "duration": 52353738914,
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
  "duration": 1915017721,
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
  "duration": 2489205304,
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
  "duration": 1127677807,
  "status": "passed"
});
formatter.match({
  "location": "CalculateBorrowing.i_click_on_work_out_borrow_button()"
});
formatter.result({
  "duration": 245262901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "470000",
      "offset": 36
    }
  ],
  "location": "CalculateBorrowing.i_should_get_borrowing_estimate_of(int)"
});
formatter.result({
  "duration": 2083704157,
  "status": "passed"
});
formatter.after({
  "duration": 1572184,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 21,
  "name": "I want to clear all the entered loan details",
  "description": "",
  "id": "borrowing-calculator;i-want-to-clear-all-the-entered-loan-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "I am in borrowing calculator page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I fill my details \"\u003cApplicant_Type\u003e\" \"\u003cDependants\u003e\" \"\u003cPurpose_Of_Buy\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I fill my earnings details \"\u003cIncome\u003e\" \"\u003cOther_Income\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I fill my expenses \"\u003cExpense\u003e\" \"\u003cHome_Loan_Repayment\u003e\" \"\u003cOther_Loan_Payment\u003e\" \"\u003cCommitments\u003e\" \"\u003cCreditCard_Limit\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on work out borrow button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on start over button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "All the fields gets cleared",
  "keyword": "Then "
});
formatter.examples({
  "line": 30,
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
      "line": 31,
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
      "line": 32,
      "id": "borrowing-calculator;i-want-to-clear-all-the-entered-loan-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1378711,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "I want to clear all the entered loan details",
  "description": "",
  "id": "borrowing-calculator;i-want-to-clear-all-the-entered-loan-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Calculate"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I am in borrowing calculator page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I fill my details \"Joint\" \"2\" \"Investment\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I fill my earnings details \"80000\" \"10000\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
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
  "line": 26,
  "name": "I click on work out borrow button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on start over button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "All the fields gets cleared",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculateBorrowing.i_am_in_borrowing_calculator_page()"
});
formatter.result({
  "duration": 6146248245,
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
  "duration": 753300603,
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
  "duration": 1231700938,
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
  "duration": 1099618190,
  "status": "passed"
});
formatter.match({
  "location": "CalculateBorrowing.i_click_on_work_out_borrow_button()"
});
formatter.result({
  "duration": 144621271,
  "status": "passed"
});
formatter.match({
  "location": "CalculateBorrowing.i_click_on_start_over_button()"
});
formatter.result({
  "duration": 237011608,
  "status": "passed"
});
formatter.match({
  "location": "CalculateBorrowing.all_the_fields_gets_cleared()"
});
formatter.result({
  "duration": 738532001,
  "status": "passed"
});
formatter.after({
  "duration": 1279406,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 34,
  "name": "I want to estimate borrow by filling only living expenses and leaving all other fields as zero",
  "description": "",
  "id": "borrowing-calculator;i-want-to-estimate-borrow-by-filling-only-living-expenses-and-leaving-all-other-fields-as-zero",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 35,
  "name": "I am in borrowing calculator page",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "I fill only living expenses \"\u003cExpense\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on work out borrow button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should not get estimation and get valid proper error message",
  "keyword": "Then "
});
formatter.examples({
  "line": 40,
  "name": "",
  "description": "",
  "id": "borrowing-calculator;i-want-to-estimate-borrow-by-filling-only-living-expenses-and-leaving-all-other-fields-as-zero;",
  "rows": [
    {
      "cells": [
        "Expense"
      ],
      "line": 41,
      "id": "borrowing-calculator;i-want-to-estimate-borrow-by-filling-only-living-expenses-and-leaving-all-other-fields-as-zero;;1"
    },
    {
      "cells": [
        "1"
      ],
      "line": 42,
      "id": "borrowing-calculator;i-want-to-estimate-borrow-by-filling-only-living-expenses-and-leaving-all-other-fields-as-zero;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2536127,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "I want to estimate borrow by filling only living expenses and leaving all other fields as zero",
  "description": "",
  "id": "borrowing-calculator;i-want-to-estimate-borrow-by-filling-only-living-expenses-and-leaving-all-other-fields-as-zero;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Calculate"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "I am in borrowing calculator page",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "I fill only living expenses \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on work out borrow button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should not get estimation and get valid proper error message",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculateBorrowing.i_am_in_borrowing_calculator_page()"
});
formatter.result({
  "duration": 8855230199,
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
  "duration": 139836233,
  "status": "passed"
});
formatter.match({
  "location": "CalculateBorrowing.i_click_on_work_out_borrow_button()"
});
formatter.result({
  "duration": 160493784,
  "status": "passed"
});
formatter.match({
  "location": "CalculateBorrowing.i_should_not_get_estimation_and_get_valid_proper_error_message()"
});
formatter.result({
  "duration": 62618138,
  "status": "passed"
});
formatter.after({
  "duration": 2271598,
  "status": "passed"
});
});