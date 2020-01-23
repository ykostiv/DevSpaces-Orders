//
// Read All Eng Import Tickets - same as in Workscript
// For each Eng Import ticket find DH ticket, get DS/Docker tickets and link them to Eng Import
// If there is no DH ticket and "DevHub Compatible" - create DS and Docker tickets, link them to Eng Import
//
var eiQuery = "issuetype = 'Eng Import' and status = Closed and (resolution != 'Won\'t Do' or resolution is EMPTY) order by created desc";
var eiQueryFields = "key,project,summary,status,resolution"; 
y3k.JIRA_URL = "https://jira.devfactory.com/rest/api/latest";
y3k.JIRA_TOKEN = "c2VydmljZS5kZXZodWI6NXBKI0BjZlRiblM3"; //service.devhub
y3k.MAX_RESULTS = 500;

function myFunction() {
  
  
}
