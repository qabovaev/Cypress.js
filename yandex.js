describe('Тестирование Яндекс', function () {

     it('Поиск котяток', function () {
        cy.visit('https://yandex.ru/');
        
        cy.get('.input')
        .type('Котятки')
        .type('{enter}');
        
        cy.get('.Composite > :nth-child(1) > .UniSearchHeader > .Link > .UniSearchHeader-Title-Text')
        .contains('Картинки по запросу «Котятки»');
        })
})
