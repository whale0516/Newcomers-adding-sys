function onOpen() {
var ss = SpreadsheetApp.getActiveSpreadsheet(),
    menuItems = [{name: "Add UP!", functionName: "showForm"}];
ss.addMenu("Add NewComers", menuItems);
}
/**
* Read in the Html from file "index.html"
* and create and display the form.
*/
function showForm() {
var ss = SpreadsheetApp.getActiveSpreadsheet(),
    html = HtmlService.createHtmlOutputFromFile('index')
           .setSandboxMode(HtmlService.SandboxMode.IFRAME);
html.setWidth(500);
html.setHeight(450);
ss.show(html);
}
/**
* Take a form as an argument and use the input element name
* attribute to reference the text values entered by the user
* and write these values to the active spreadsheet.
*
* @param {form}
* @return null
*/
function getValuesFromForm(form){
var firstName = form.firstName,
    lastName = form.lastName,
    email=form.email,
    mobile=form.mobile,
    reach=form.reach,
    date=form.date,
    follow=form.follow,
    note=form.note,
    sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
sheet.appendRow([firstName, lastName, email,mobile,reach,date,follow,note]);
}
