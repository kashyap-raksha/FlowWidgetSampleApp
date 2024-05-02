 Configure and run the sample Applicaton
 * Open index.html under FlowWidgetTest
 * Modify 'clientID' property in applicationConfig object to point to AAD application registered.
 * Open command prompt and go to folder FlowWidgetTestApp
 * Run "npm install" to install the dependencies.
 * Run "node server.js" to start the application.
 * Open browser and type http://localhost:30662
 * Select "Sign In" button to authenticate to AAD and acquire flow access token.
 * You will notice that access token text box is populated with the access token. 
 * Select Load Flows widget or Create Flow from TemplateID widget to embed the widget.