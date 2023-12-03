# Test Case: Validate Unsuccessful Login with Invalid Credentials

**Objective:** Ensure that the website appropriately handles login attempts with invalid credentials.

**Preconditions:**
- The user should not be logged in to the website.

## Test Procedure and Expected Results

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Open the Browser: Launch the browser and navigate to "https://www.saucedemo.com/". | The login page of "https://www.saucedemo.com/" should be displayed. |
| 2 | Enter Invalid Username: Locate the username input field and enter an invalid username, such as `invalid_user`. | The invalid username `invalid_user` should be entered into the username field. |
| 3 | Enter Invalid Password: Locate the password input field and enter an invalid password, such as `wrong_password`. | The invalid password `wrong_password` should be entered into the password field. |
| 4 | Attempt to Login: Locate the login button and click it. | The user should not be redirected to the products page. An error message should be displayed indicating that the login was unsuccessful due to incorrect username and/or password. **Expected Error Message** `Epic sadface: Username and password do not match any user in this service`|

## Post-Conditions:

- The system remains on the login page, allowing for further login attempts or testing.
