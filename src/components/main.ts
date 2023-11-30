export class Main {
    get title() {return '#root > div > div.login_logo';}

    get userNameInput() {return 'user-name';}

    get userPassInput() {return 'password';}

    get loginButtion() {return 'login-button';}

    get loginErrorMsg() {return '[data-test="error"]';}

    get errorMsgCloseBtn() {return '[data-test="error"] > button';}
}