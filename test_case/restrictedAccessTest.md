# Test Case: Validate Direct Access to Inventory Page without Login

**Objective:** Ensure that direct access to "https://www.saucedemo.com/inventory.html" without logging in is restricted and displays an appropriate error message.

**Preconditions:**
- The user should not be logged in to the website.

## Test Procedure and Expected Results

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Open Browser and Directly Access to Inventory: Enter the URL "https://www.saucedemo.com/inventory.html" directly into the browser's address bar. | The browser should attempt to navigate to the inventory page. |
| 2 | Verify Access Restriction: Observe the behavior of the website after attempting to access the inventory page. | Instead of displaying the inventory page, the website should redirect to the login page or display an error message, such as `Epic sadface: You can only access '/inventory.html' when you are logged in.` |

## Post-Conditions:

- The user remains not logged in, and the website is ready for further testing or use.
