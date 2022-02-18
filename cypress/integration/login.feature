Feature: Login Page

    FeaturePage where the users can login to their accounts
    Background:
        Given A user enters to the login page

    Scenario Outline: Succes Login
        When A user enters the username "<username>" and password "<password>"
        And A user click on the login button
        Then A user will be logged in

        Examples:
            | username      | password     |
            | standard_user | secret_sauce |

    Scenario Outline: Locked User
        When A user enters the username "<username>" and password "<password>"
        And A user click on the login button
        Then The error message "Epic sadface: Sorry, this user has been locked out." is displayed

        Examples:
            | username        | password     |
            | locked_out_user | secret_sauce |

    Scenario: Incorrect User Login
        When A user enters incorrect credentials
            | username  | password     |
            | test-user | secret_sauce |
        And A user click on the login button
        Then The error message "Epic sadface: Username and password do not match any user in this service" is displayed

    Scenario: Incorrect Password Login
        When A user enters incorrect credentials
            | username      | password     |
            | standard_user | testPassword |
        And A user click on the login button
        Then The error message "Epic sadface: Username and password do not match any user in this service" is displayed