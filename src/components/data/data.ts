export enum pageUrl {
    saucedemo = 'https://www.saucedemo.com/',
    saucedemoInventory = 'https://www.saucedemo.com/inventory.html',
    saucedemoCheckoutComplete = 'https://www.saucedemo.com/checkout-complete.html'
}


export const ProductNames = {
    sauceLabsBackpack: 'Sauce Labs Backpack',
    sauceLabsBikeLight: 'Sauce Labs Bike Light',
};

export const UserCredentials = {
    standardUser: {
        username: 'standard_user',
        password: 'secret_sauce',
    },
    invalidUser: {
        username: 'invalid_user',
        password: 'secret_sauce',
    },
    lockedoutUser: {
        username: 'locked_out_user',
        password: 'secret_sauce',
    },
    problemUser: {
        username: 'problem_user',
        password: 'secret_sauce',
    },
    performanceGlitchUser: {
        username: 'performance_glitch_user',
        password: 'secret_sauce',
    },
    errorUser: {
        username: 'error_user',
        password: 'secret_sauce',
    },
    visualUser: {
        username: 'visual_user',
        password: 'secret_sauce',
    }
};

export const ErrorMsg = {
    restrictedAccess: `Epic sadface: You can only access '/inventory.html' when you are logged in.`,
    invalidLogin: `Epic sadface: Username and password do not match any user in this service`,
};