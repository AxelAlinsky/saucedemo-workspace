export class Main {

    // Login Page Selectors
    get title() {return '#root > div > div.login_logo';}
    get userNameInput() {return '[id="user-name"]';}
    get userPassInput() {return '[id="password"]';}
    get loginButton() {return '[id="login-button"]';}
    get loginErrorMsg() {return '[data-test="error"]';}
    get errorMsgCloseBtn() {return '[data-test="error"] > button';}

    // Error Message Selectors
    get restrictedErrorMsg() {return '[class="error-message-container error"]';}

    // Product Page Selectors
    get yourCart() {return 'span[class="title"]';}
    get addToCartBtn() {return '[class="btn btn_primary btn_small btn_inventory"]';}
    get removeCartBtn() {return '[class="btn btn_secondary btn_small btn_inventory"]';}
    get sauceLabsBackpack() {return '[id="item_4_title_link"]';} // Specific product

    // Cart Selectors
    get cartBadge() {return 'span[class="shopping_cart_badge"]';}
    get checkoutBtn() {return 'button[id="checkout"]';}
    get cartBtn() {return '[id="shopping_cart_container"]';} // Interaction
    get inBasketItem() {return '[class="cart_item"]';}

    // Checkout Page Selectors
    get firstName() {return '[id="first-name"]';}
    get lastName() {return '[id="last-name"]';}
    get postalCode() {return '[id="postal-code"]';}
    get continueBtn() {return '[id="continue"]';}
    get finishBtn() {return '[id="finish"]';}
    get completeHeader() {return 'h2[class="complete-header"]';}
}