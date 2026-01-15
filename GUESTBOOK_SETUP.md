# Google Sheets Guestbook Setup

## IMPORTANT: Email Notifications Update

To receive email notifications when someone signs the guestbook, update your Apps Script with this enhanced version:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var timestamp = new Date();
    var name = e.parameter.name || '';
    var email = e.parameter.email || '';
    var message = e.parameter.message || '';
    
    // Append new row
    sheet.appendRow([timestamp, name, email, message]);
    
    //Send email notification
    var emailBody = '🎵 New guestbook entry!\n\n' +
                    'Name: ' + name + '\n' +
                    'Email: ' + (email || 'Not provided') + '\n' +
                    'Message: ' + message + '\n' +
                    'Time: ' + timestamp;
    
    MailApp.sendEmail({
      to: Session.getEffectiveUser().getEmail(),
      subject: '🎵 New AstroCartel Guestbook Entry from ' + name,
      body: emailBody
    });
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'success',
      'message': 'Entry added successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = sheet.getDataRange().getValues();
    var entries = [];
    
    // Skip header row, reverse order (newest first)
    for (var i = data.length - 1; i >= 1; i--) {
      entries.push({
        timestamp: data[i][0],
        name: data[i][1],
        email: data[i][2],
        message: data[i][3]
      });
    }
    
    return ContentService.createTextOutput(JSON.stringify(entries))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify([]))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

**To update:** Go to your Apps Script → Replace the code → Save → Deploy as new version

You'll now receive an email every time someone signs the guestbook!
