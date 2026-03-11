class LoginPage {
    constructor(page){
        this.page = page;
        this.username = page.getByPlaceholder('Username');;
        this.password = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('Button', {name: 'Login'});
    }
    async login(user, pass){
        await this.username.fill(user)
        await this.password.fill(pass)
        await this.loginButton.click();
    }
}

module.exports = LoginPage