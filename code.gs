const empnum = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('config').getRange('B1').getValue();
const empname = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('config').getRange('B2').getValue();
var today = new Date();
var ftoday = Utilities.formatDate(today,"JST", "MMdd");


function main() {
  if (isSend()) {
    send_start();
  }
}

function isSend() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('target');
  Logger.log(sheet.getName());
  
  var startrow = 3;
  var startcolumn = 2;
  var numrows = 31;
  var numcolumns = 3
  var range = sheet.getRange(startrow, startcolumn, numrows, numcolumns);
  
  var datecol = 1;
  var targetrow = 3;

  
  for(var row = 1; row <= range.getNumRows(); row++) {
    var date = range.getCell(row, datecol).getValue();
    var fdate = Utilities.formatDate(new Date(date),"JST", "MMdd");
    
    if (ftoday === fdate) {
      Logger.log(fdate);     
      var target = range.getCell(row, targetrow).getValue();
      
      if (target === '〇') {
        Logger.log('send');
        return true;
      } 
    }
  } 
}
