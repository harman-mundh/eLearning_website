Feature: Registering a new account and logging in as an existing user
	
	Background: 
		Given: The browser is open on Log in page
	
	Scenario: Register a new account
		When I click on "Register" button
		Then "Register New User" form should appear
		And I enter "student3" into the Username field
		And I enter "p455w0rd" into the Password field
		And I enter "p455w0rd" into the Password(again) field
		And I click on the Create button 
		Then I should be taken back into Log in page
	
	Scenario: Logging in as existing user
		When I enter "teacher1" into Username field
		When I enter "p455w0rd" into Password field
		And I click on "Log in" button
		And I should be taken into the Home page
		Then text "Logged in as teacher1" should be shown
		Then there should be a link to add new content
		Then there should be a button "Log out" 

	Scenario: Logging out from the home page
		Given I am logged in as "teacher1" user
		And I should be able to see Log out button
		When I click on "Log out" button
		Then I should see the Log in form
