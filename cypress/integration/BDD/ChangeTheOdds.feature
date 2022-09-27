 Feature: Change odds format

    Feature Description
    Scenario Outline: User should be able to add bets to betslip

      Given PokerStar is launched
      When I change the format of the odds "<type>"
	  Then The format is changed to the "<expectedType>"

      Example: 
       |type      |expectedType  |
       |fracional |exFractional  |
       |American  |exAmerican    |
       |Decimal   |expectedType  |