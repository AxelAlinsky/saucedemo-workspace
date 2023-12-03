# Test Case: Validate End-to-End Shopping Process for a Specific Product

**Objective:** To verify that users can successfully log in, select a specific product ('Sauce Labs Backpack'), add it to the cart, and complete the checkout process.

**Preconditions:**
- The user must have a valid username and password (`standard_user` / `secret_sauce`).
- The website, "https://www.saucedemo.com/", should be operational.

## Test Procedure and Expected Results

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Launch Browser: Open the browser and navigate to "https://www.saucedemo.com/". | The login page of Saucedemo should be displayed. |
| 2 | Enter Credentials: Input `standard_user` in the username field and `secret_sauce` in the password field. | Correct credentials should be entered in their respective fields. |
| 3 | Login: Click the login button. | The products page should be loaded, displaying various products. with the expected url `https://www.saucedemo.com/inventory.html` |
| 4 | Select Product: Locate and click on the 'Sauce Labs Backpack'. | The detail page for 'Sauce Labs Backpack' should be displayed, showing price and description. |
| 5 | Add to Cart: Click on the "Add to Cart" button for 'Sauce Labs Backpack'. | The 'Sauce Labs Backpack' should be added to the cart. The cart icon should show a count of 1. |
| 6 | View Cart: Click on the shopping cart icon. | The cart page should display 'Sauce Labs Backpack' as a listed item. |
| 7 | Checkout: Click on the "Checkout" button. | The checkout information page should be displayed. |
| 8 | Enter Checkout Details: Input first name, last name, and zip code in the respective fields. | Provided checkout information should be entered correctly. |
| 9 | Continue: Click on the "Continue" button. | The overview page listing 'Sauce Labs Backpack' along with its price and total should be displayed. |
| 10 | Finalize Purchase: Click on the "Finish" button. | A confirmation page with a message like "Thank you for your order" should be displayed, indicating successful purchase. |

## Post-Conditions:

- The user should log out by clicking the logout link in the menu.
- The browser should be closed, resetting the application for future tests.
