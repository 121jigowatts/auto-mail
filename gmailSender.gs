function send_start() {
  const status_start = '開始';
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('address');
  
  var range = sheet.getDataRange();
  var values = range.getValues();
  
  var to = [];
  var cc = [];
  for (var i = 0; i < values.length; i++) {
    
    if (values[i][0] == 'to') {
      to.push(values[i][1]);
    }
    
    if (values[i][0] == 'cc') {
      cc.push(values[i][1]);
    }    
  }
  
  var addressto = to.join(',');
  var addresscc = cc.join(',');
  Logger.log(addressto);
  Logger.log(addresscc);

  const subject = `${empnum}_${empname}_${ftoday}_${status_start}`;
  Logger.log(subject);

  const body = '';
  const option = {cc: addresscc};

  GmailApp.sendEmail(
    addressto,
    subject,
    body,
    option
  );
}
