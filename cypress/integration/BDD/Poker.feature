  
    Feature: Add or remove bets from betslip

    Feature Description
    Scenario: User should be able to add bets to betslip

      Given PokerStar is launched
      When User adds the bets to the betslip
	    Then The bets are added to the betslip

    Scenario: User should be able to remove bets from betslip

      Given PokerStar is launched
      When User adds the bets to the betslip
      And  User removes the bets from the betslip
	    Then The bets are removed from the betslip

    