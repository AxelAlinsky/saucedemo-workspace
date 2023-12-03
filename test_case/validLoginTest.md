# Test Case: Validate Successful Login

**Objective:** Ensure that users can log in with valid credentials.

**Preconditions:**
- The user must have a valid username and password.

## Test Procedure and Expected Results

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Open the Browser: Launch the browser and navigate to "https://www.saucedemo.com/". | The login page of "https://www.saucedemo.com/" should be displayed. |
| 2 | Enter Username: Locate the username input field and enter the valid username `standard_user`. | The username `standard_user` should be entered into the username field. |
| 3 | Enter Password: Locate the password input field and enter the corresponding valid password `secret_sauce`. | The password `secret_sauce` should be entered into the password field. | 
| 4 | Initiate Login: Locate the login button and click it. | The user should be redirected to the products page, and the URL should include "/inventory.html". |

## Post-Conditions:

- The user should log out after the test to return the application to the initial state for future tests.
