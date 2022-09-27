# PokerstarAuto
Feature: Adding/removing bet/s from betslip

    @Scenario1
    Scenario: User should be able to add bet/s to betslip

      Given PokerStar is launched
      When User adds the bet/s to the betslip
	  Then The bet/s are added to the betslip

    @Scenario2
    Scenario: Odds button should turn to green when a bet is added to betslip

      Given PokerStar is launched
      When User adds the bet/s to the betslip
	  Then The odds button of bet turns into green with label "Added"
	  And It turns into dark green with the odds
	  
    @Scenario3
    Scenario: Bets are removed from betslip when user reclick the odds button

      Given PokerStar is launched
      When User adds the bet/s to the betslip
	  And The user reclicks the odds button of an added bet again
	  Then The bet is removed from the betslip
	  
	@Scenario4
    Scenario: Bets are removed from betslip when user clicks the remove button

      Given PokerStar is launched
      When User adds the bet/s to the betslip
	  And The user clicks the remove button for a bet in the betslip
	  Then The bet is removed from the betslip
	
	@Scenario5
    Scenario: The number in the betslip increases as you add the bets to betslip

      Given PokerStar is launched
      When User adds a bet to the betslip
	  And The user adds more bets to the betslip
	  Then The number increases in the betslip accordingly
	  
Feature: Chage the odds format

    @Scenario1
    Scenario: Change the odds format to Decimal

      Given PokerStar is launched
	  When The odds format is changed to decimal
	  Then The format of all the odds in the page should be in decimal 
      

    @Scenario2
    Scenario: Change the odds format to Fractional

      Given PokerStar is launched
	  When The odds format is changed to fractional
	  Then The format of all the odds in the page should be in fractional 
	  
    @Scenario3
     Scenario: Change the odds format to American

      Given PokerStar is launched
	  When The odds format is changed to American
	  Then The format of all the odds in the page should be in American 
	  
	@Scenario4
     Scenario: Change the odds format to back to back

      Given PokerStar is launched
	  When The odds format is changed to American
	  Then The format of all the odds in the page should be in American 
	  When The odds format is changed to Decimal again
	  Then The format of all the odds in the page should be change to Decimal 
