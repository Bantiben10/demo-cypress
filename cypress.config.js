const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.cy.js",
    screenshotOnRunFailure: true,
    video: false,
    env:{
      url:"https://demo.opencart.com/",
      username:"Chinmaya.ben10@gmail.com",
      password:"Qwerty@123",
      lawFrmMem: "madhumita",
      lawFrmAdmin:"manoj",
      FirstName : "Chinmaya",
      LastName :  "Dhir",
    },
  

    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    
    },
  },
 

});
