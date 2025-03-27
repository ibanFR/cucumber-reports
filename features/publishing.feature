Feature: Publishing

  Scenario:
    When David publishes a report
    And David views the report they just published
    Then David should see their test results
