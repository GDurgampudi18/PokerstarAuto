
class Poker{
    openpokerwebsite()
    {
        cy.visit("https://www.pokerstars.uk/sports/")
    }

    clickonacceptallcookies()
    {
        return cy.get('#onetrust-accept-btn-handler').click()
    } 

    enterbet1()
    {
        return cy.xpath("(//em[@class='button__bet__odds'])[1]").click({force:true})
    }
       
    enterbet2()
    {
        return cy.xpath("(//em[@class='button__bet__odds'])[2]").click({force:true})
    }

    verifycounting()
    {
        return cy.get("#betslip__betCounter").find("div[class*=betCounter--animate-up]").should('have.length',2)
    }

    verifycountingafterremoving()
    {
       return cy.get("#betslip__betCounter").find("div[class*=betCounter--animate-up]").should('have.length',0)
    }
}
export default Poker