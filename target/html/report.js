$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("OBInsightsBody.feature");
formatter.feature({
  "line": 2,
  "name": "Test and validate the body of the Insights Page",
  "description": "",
  "id": "test-and-validate-the-body-of-the-insights-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@testOBInsightBody"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 4,
      "value": "#Check Happy Path"
    }
  ],
  "line": 5,
  "name": "",
  "description": "",
  "id": "test-and-validate-the-body-of-the-insights-page;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on Insights Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I select View as \"\u003ctopic\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I select from as \"\u003cdate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Insight page is returned with expected \"\u003clinkdate\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "test-and-validate-the-body-of-the-insights-page;;",
  "rows": [
    {
      "cells": [
        "topic",
        "date",
        "linkdate"
      ],
      "line": 12,
      "id": "test-and-validate-the-body-of-the-insights-page;;;1"
    },
    {
      "cells": [
        "All topics",
        "201610",
        "10/16"
      ],
      "line": 13,
      "id": "test-and-validate-the-body-of-the-insights-page;;;2"
    },
    {
      "cells": [
        "All topics",
        "201609",
        "09/16"
      ],
      "line": 14,
      "id": "test-and-validate-the-body-of-the-insights-page;;;3"
    },
    {
      "cells": [
        "Account Management",
        "201609",
        "09/16"
      ],
      "line": 15,
      "id": "test-and-validate-the-body-of-the-insights-page;;;4"
    },
    {
      "cells": [
        "News",
        "201608",
        "08/16"
      ],
      "line": 16,
      "id": "test-and-validate-the-body-of-the-insights-page;;;5"
    },
    {
      "cells": [
        "Development",
        "201402",
        "02/14"
      ],
      "line": 17,
      "id": "test-and-validate-the-body-of-the-insights-page;;;6"
    },
    {
      "cells": [
        "UX",
        "201507",
        "07/15"
      ],
      "line": 18,
      "id": "test-and-validate-the-body-of-the-insights-page;;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "",
  "description": "",
  "id": "test-and-validate-the-body-of-the-insights-page;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@testOBInsightBody"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on Insights Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I select View as \"All topics\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I select from as \"201610\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Insight page is returned with expected \"10/16\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "OBInsightsBody.i_am_on_Insights_Page()"
});
formatter.result({
  "duration": 20836943227,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "All topics",
      "offset": 18
    }
  ],
  "location": "OBInsightsBody.i_select_View_as(String)"
});
formatter.result({
  "duration": 106342558,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201610",
      "offset": 18
    }
  ],
  "location": "OBInsightsBody.i_select_from_as(String)"
});
formatter.result({
  "duration": 10201576929,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10/16",
      "offset": 40
    }
  ],
  "location": "OBInsightsBody.insight_page_is_returned_with_expected(String)"
});
formatter.result({
  "duration": 137271982,
  "status": "passed"
});
formatter.after({
  "duration": 590780667,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "",
  "description": "",
  "id": "test-and-validate-the-body-of-the-insights-page;;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@testOBInsightBody"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on Insights Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I select View as \"All topics\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I select from as \"201609\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Insight page is returned with expected \"09/16\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "OBInsightsBody.i_am_on_Insights_Page()"
});
formatter.result({
  "duration": 22302014399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "All topics",
      "offset": 18
    }
  ],
  "location": "OBInsightsBody.i_select_View_as(String)"
});
formatter.result({
  "duration": 87015125,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201609",
      "offset": 18
    }
  ],
  "location": "OBInsightsBody.i_select_from_as(String)"
});
formatter.result({
  "duration": 10179372010,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "09/16",
      "offset": 40
    }
  ],
  "location": "OBInsightsBody.insight_page_is_returned_with_expected(String)"
});
formatter.result({
  "duration": 238155059,
  "status": "passed"
});
formatter.after({
  "duration": 473051021,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "",
  "description": "",
  "id": "test-and-validate-the-body-of-the-insights-page;;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@testOBInsightBody"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on Insights Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I select View as \"Account Management\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I select from as \"201609\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Insight page is returned with expected \"09/16\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "OBInsightsBody.i_am_on_Insights_Page()"
});
formatter.result({
  "duration": 18989583531,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account Management",
      "offset": 18
    }
  ],
  "location": "OBInsightsBody.i_select_View_as(String)"
});
formatter.result({
  "duration": 244627823,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201609",
      "offset": 18
    }
  ],
  "location": "OBInsightsBody.i_select_from_as(String)"
});
formatter.result({
  "duration": 10168797918,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "09/16",
      "offset": 40
    }
  ],
  "location": "OBInsightsBody.insight_page_is_returned_with_expected(String)"
});
formatter.result({
  "duration": 129774478,
  "status": "passed"
});
formatter.after({
  "duration": 543972922,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "",
  "description": "",
  "id": "test-and-validate-the-body-of-the-insights-page;;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@testOBInsightBody"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on Insights Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I select View as \"News\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I select from as \"201608\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Insight page is returned with expected \"08/16\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "OBInsightsBody.i_am_on_Insights_Page()"
});
formatter.result({
  "duration": 19522987498,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "News",
      "offset": 18
    }
  ],
  "location": "OBInsightsBody.i_select_View_as(String)"
});
formatter.result({
  "duration": 301493338,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201608",
      "offset": 18
    }
  ],
  "location": "OBInsightsBody.i_select_from_as(String)"
});
formatter.result({
  "duration": 10165054105,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "08/16",
      "offset": 40
    }
  ],
  "location": "OBInsightsBody.insight_page_is_returned_with_expected(String)"
});
formatter.result({
  "duration": 159884980,
  "status": "passed"
});
formatter.after({
  "duration": 466112502,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "",
  "description": "",
  "id": "test-and-validate-the-body-of-the-insights-page;;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@testOBInsightBody"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on Insights Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I select View as \"Development\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I select from as \"201402\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Insight page is returned with expected \"02/14\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "OBInsightsBody.i_am_on_Insights_Page()"
});
formatter.result({
  "duration": 19714194967,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Development",
      "offset": 18
    }
  ],
  "location": "OBInsightsBody.i_select_View_as(String)"
});
formatter.result({
  "duration": 230887865,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201402",
      "offset": 18
    }
  ],
  "location": "OBInsightsBody.i_select_from_as(String)"
});
formatter.result({
  "duration": 10167137952,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "02/14",
      "offset": 40
    }
  ],
  "location": "OBInsightsBody.insight_page_is_returned_with_expected(String)"
});
formatter.result({
  "duration": 110651677,
  "status": "passed"
});
formatter.after({
  "duration": 494885390,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "",
  "description": "",
  "id": "test-and-validate-the-body-of-the-insights-page;;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@testOBInsightBody"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on Insights Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I select View as \"UX\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I select from as \"201507\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Insight page is returned with expected \"07/15\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "OBInsightsBody.i_am_on_Insights_Page()"
});
formatter.result({
  "duration": 19377282948,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "UX",
      "offset": 18
    }
  ],
  "location": "OBInsightsBody.i_select_View_as(String)"
});
formatter.result({
  "duration": 233111951,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201507",
      "offset": 18
    }
  ],
  "location": "OBInsightsBody.i_select_from_as(String)"
});
formatter.result({
  "duration": 10166113213,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07/15",
      "offset": 40
    }
  ],
  "location": "OBInsightsBody.insight_page_is_returned_with_expected(String)"
});
formatter.result({
  "duration": 174577384,
  "status": "passed"
});
formatter.after({
  "duration": 482731132,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 20,
      "value": "#Check Unhappy Path"
    }
  ],
  "line": 21,
  "name": "",
  "description": "",
  "id": "test-and-validate-the-body-of-the-insights-page;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "I am on Insights Page",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I select View as \"\u003ctopic\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select from as \"\u003cdate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Insight page has expected message as \"No posts found\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "test-and-validate-the-body-of-the-insights-page;;",
  "rows": [
    {
      "cells": [
        "topic",
        "date"
      ],
      "line": 28,
      "id": "test-and-validate-the-body-of-the-insights-page;;;1"
    },
    {
      "cells": [
        "Account Management",
        "201610"
      ],
      "line": 29,
      "id": "test-and-validate-the-body-of-the-insights-page;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 29,
  "name": "",
  "description": "",
  "id": "test-and-validate-the-body-of-the-insights-page;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@testOBInsightBody"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I am on Insights Page",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I select View as \"Account Management\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select from as \"201610\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Insight page has expected message as \"No posts found\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OBInsightsBody.i_am_on_Insights_Page()"
});
formatter.result({
  "duration": 19969136548,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account Management",
      "offset": 18
    }
  ],
  "location": "OBInsightsBody.i_select_View_as(String)"
});
formatter.result({
  "duration": 209271953,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201610",
      "offset": 18
    }
  ],
  "location": "OBInsightsBody.i_select_from_as(String)"
});
formatter.result({
  "duration": 10157810614,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No posts found",
      "offset": 38
    }
  ],
  "location": "OBInsightsBody.insight_page_has_expected_message_as(String)"
});
formatter.result({
  "duration": 86592430,
  "status": "passed"
});
formatter.after({
  "duration": 503779367,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 32,
      "value": "#Check the Insights Banner Title"
    }
  ],
  "line": 33,
  "name": "Validate Insights Banner Title",
  "description": "",
  "id": "test-and-validate-the-body-of-the-insights-page;validate-insights-banner-title",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 34,
  "name": "I am on Insights Page",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "The banner is displayed as \"Inside the minds of innovators\"",
  "keyword": "Then "
});
formatter.match({
  "location": "OBInsightsBody.i_am_on_Insights_Page()"
});
formatter.result({
  "duration": 25445166581,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Inside the minds of innovators",
      "offset": 28
    }
  ],
  "location": "OBInsightsBody.the_banner_is_displayed_as(String)"
});
formatter.result({
  "duration": 44452109,
  "status": "passed"
});
formatter.after({
  "duration": 518334692,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 37,
      "value": "#Check ViewDropDown options"
    }
  ],
  "line": 38,
  "name": "",
  "description": "",
  "id": "test-and-validate-the-body-of-the-insights-page;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 39,
  "name": "I am on Insights Page",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I validate viewDropDown against available options",
  "rows": [
    {
      "cells": [
        "All topics",
        "Account Management",
        "Agile",
        "Culture",
        "Design",
        "News",
        "Opinion",
        "Development",
        "UX"
      ],
      "line": 41
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "OBInsightsBody.i_am_on_Insights_Page()"
});
formatter.result({
  "duration": 18548349988,
  "status": "passed"
});
formatter.match({
  "location": "OBInsightsBody.i_validate_viewDropDown_against_available_options(DataTable)"
});
formatter.result({
  "duration": 244442944,
  "status": "passed"
});
formatter.after({
  "duration": 547402283,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 44,
      "value": "#Check FromDropDown options"
    },
    {
      "line": 45,
      "value": "#Scenario:"
    },
    {
      "line": 46,
      "value": "#When I am on Insights Page"
    },
    {
      "line": 47,
      "value": "#Then I validate fromDropDown against available options"
    },
    {
      "line": 48,
      "value": "#| All of time | October 2016 | September 2016 | August 2016 | July 2016 | June 2016 | May 2016 | April 2016 | March 2016 | January 2016 | November 2015 | October 2015 | September 2015 | August 2015 | July 2015 | June 2015 | May 2015 | April 2015 | March 2015 | February 2015 | November 2014 | October 2014 | September 2014 |August 2014 | July 2014 | June 2014 | April 2014 | March 2014 | February 2014 | January 2014 | December 2013 | November 2013 | August 2013| July 2013 | June 2013 | May 2013 | April 2013 | May 2012 |"
    },
    {
      "line": 49,
      "value": "#"
    },
    {
      "line": 50,
      "value": "#"
    },
    {
      "line": 51,
      "value": "#Contect Check"
    }
  ],
  "line": 52,
  "name": "",
  "description": "",
  "id": "test-and-validate-the-body-of-the-insights-page;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 53,
  "name": "I am on Insights Page",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "I validate the below \"\u003ccontents\u003e\" with below \"\u003clocators\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 56,
  "name": "",
  "description": "",
  "id": "test-and-validate-the-body-of-the-insights-page;;",
  "rows": [
    {
      "cells": [
        "contents",
        "locators"
      ],
      "line": 57,
      "id": "test-and-validate-the-body-of-the-insights-page;;;1"
    },
    {
      "comments": [
        {
          "line": 58,
          "value": "#Check Happy Path"
        }
      ],
      "cells": [
        "View",
        "base_2_lblView1"
      ],
      "line": 59,
      "id": "test-and-validate-the-body-of-the-insights-page;;;2"
    },
    {
      "cells": [
        "from",
        "base_2_lblFrom"
      ],
      "line": 60,
      "id": "test-and-validate-the-body-of-the-insights-page;;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "comments": [
    {
      "line": 58,
      "value": "#Check Happy Path"
    }
  ],
  "line": 59,
  "name": "",
  "description": "",
  "id": "test-and-validate-the-body-of-the-insights-page;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@testOBInsightBody"
    }
  ]
});
formatter.step({
  "line": 53,
  "name": "I am on Insights Page",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "I validate the below \"View\" with below \"base_2_lblView1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "OBInsightsBody.i_am_on_Insights_Page()"
});
formatter.result({
  "duration": 24411696247,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "View",
      "offset": 22
    },
    {
      "val": "base_2_lblView1",
      "offset": 40
    }
  ],
  "location": "OBInsightsBody.i_validate_the_below_with_below(String,String)"
});
formatter.result({
  "duration": 3279752198,
  "status": "passed"
});
formatter.after({
  "duration": 1035363375,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "",
  "description": "",
  "id": "test-and-validate-the-body-of-the-insights-page;;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@testOBInsightBody"
    }
  ]
});
formatter.step({
  "line": 53,
  "name": "I am on Insights Page",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "I validate the below \"from\" with below \"base_2_lblFrom\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "OBInsightsBody.i_am_on_Insights_Page()"
});
formatter.result({
  "duration": 22118890280,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "from",
      "offset": 22
    },
    {
      "val": "base_2_lblFrom",
      "offset": 40
    }
  ],
  "location": "OBInsightsBody.i_validate_the_below_with_below(String,String)"
});
formatter.result({
  "duration": 3258711862,
  "status": "passed"
});
formatter.after({
  "duration": 550170737,
  "status": "passed"
});
});