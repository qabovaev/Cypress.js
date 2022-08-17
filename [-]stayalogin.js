
describe('Тестирование staya', function () {

     it('Авторизация [-]', function () {
        cy.visit('https://staya.dog/');

        cy.get('.header-bottom__right--link')
               .click();

        cy.get('.auth-form > form > [type="email"]')
               .type('123qwerty@mail.ru');

        cy.get('.auth-form > form > [type="password"]')
               .type('asd$%$W@##');

        cy.get('.auth-form__submit')
               .click();
               
        cy.get('.error-label')
               .contains('Невозможно войти с предоставленными учетными данными.');
        })
})