# Fetch-Test
After you clone the files to your local coding environment, follow Playwright's install instructions to your local machine: https://playwright.dev/docs/intro. This will allow you to run the Playwright commands locally and view the test details in the ui debugger.

## Notes:
This was a fun project that I used to practice abstracting functions into a page object. There were a few locators I initially attempted to use in this way but I ran into 'undefined' errors when trying to dynamically source locator values in parameters to be called in the test file in some of the logic. 
Setting up the weighing was interesting and on a refactor iterating over the if statements may be desirable. 
I used a positive assertion of the alert text for finding the gold bar with the least weight. 