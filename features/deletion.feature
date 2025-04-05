Feature: Deletion

  Scenario: Deletion is scheduled for 24 hours after publication
    When Bruno publishes a report
    And Bruno views the report they just published
    Then Bruno should see that the report is scheduled for deletion

  Scenario: Proactively deleting a report
    When Clara publishes a report
    And Clara views the report they just published
    And Clara deletes the report
    Then Clara should see that the report was deleted

  Scenario: Viewing a deleted report
    Given a report previously published by Esme has been deleted
    When Esme attempts to view their report
    Then Esme should see that no report was found