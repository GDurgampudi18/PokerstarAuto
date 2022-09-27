import { And, Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import Poker from "../../PokerPOM"

const po = new Poker();
Given("PokerStar is launched",()=>{
  po.openpokerwebsite()
  po.clickonacceptallcookies()
})
When ("User adds the bets to the betslip",()=>{
  po.enterbet1()
  po.enterbet2()
})
And ("User removes the bets from the betslip",()=>{
  po.enterbet1()
  po.enterbet2()
}) 
Then ("The bets are added to the betslip",()=>{
  po.verifycounting()
})
Then ("The bets are removed from the betslip",()=>{
  po.verifycountingafterremoving()
})