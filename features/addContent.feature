Feature: Adding new Content 
	The logged in user flagged as teacher should be able to add new content

	Background: 
		Given: The browser is open on Log in page

	Scenario: Logging in as "student1"
		When I enter "student1" into Username field
		And  I enter "p455w0rd" into Password field
		And I click on Log in button
		Then I should be taken into the Home page
		Then I should see the content posted by user "teacher1"
		When on Home page I should not see Add Content link
		When I try to type "/add" into the URL and press enter
		Then the page should not change but stay on "home page"
		When I click on "Log out" button 
		Then I should be able to see the "Log in" page
		
	Scenario: Logging in as "teacher1"
		When I enter "teacher1" into Username field
		When I enter "p455w0rd" into Password field
		And I click on "Log in" button
		And I should be taken into the "Home page"
		Then I should be able to see a "Add Content" link
		When I click on Add Content 
		Then I should be able to see the "Add content" form
		And there should be a "Home page" and Log out button
		When I click on "Home Page" button 
		Then the "Add content" form should close
		And I should be able to see the "Home page"

	Scenario: Adding content as "teacher1"
		When I log in as "teacher1"
		Then I should be able to see the home page
		Then there should a link for "Add Content"
		When I click on the link
		Then I should be able to see the "Add new Content" form
		Then under Add new content text should say "Logged in as teacher1"
		Then I type into "Tittle" field 
		Then I type into "Content" field using markdown format
		And text in HTML format should appear under "Content" field
		Then I don't click on "Choose your file" button
		When I click on "Upload" button
		Then I should be taken back to "Home page"
		Add new Content should have been added to database