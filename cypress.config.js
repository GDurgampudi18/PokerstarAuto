const { defineConfig } = require("cypress");
//const { default: preprocessor } = require("cypress-cucumber-preprocessor");
const cucumber = require('cypress-cucumber-preprocessor').default


module.exports = defineConfig({
  projectId: 'hjsj72',
  //projectId: 'cciioe',
   //projectId: 'r2z3js',
    // projectId: 'xtb28a',
     peojectId: 'i3s8ni',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor',cucumber()) 
      
    },
    "chromeWebSecurity": false,
    "pageLoadTimeout" : 60000,
    
     //specPattern:'cypress/integration/*.js',
     specPattern:'cypress/integration/BDD/*.feature'

  },


 
});
