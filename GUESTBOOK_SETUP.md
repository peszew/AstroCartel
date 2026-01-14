# Google Sheets Guestbook Setup

Follow these steps to connect your guestbook to Google Sheets:

## Step 1: Create Google Sheet

1. Go to https://sheets.google.com
2. Create a new sheet called "AstroCartel Guestbook"
3. In the first row, add these headers:
   - Column A: `timestamp`
   - Column B: `name`
   - Column C: `email`
   - Column D: `message`

## Step 2: Create Apps Script

1. In your Google Sheet, go to **Extensions** → **Apps Script**
2. Delete any existing code
3. Copy and paste this script:

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

4. Click **Save** (💾 icon)
5. Click **Deploy** → **New deployment**
6. Click the gear icon ⚙️ → Select **Web app**
7. Set:
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
8. Click **Deploy**
9. **Copy the Web App URL** (looks like: `https://script.google.com/macros/s/AKfyc...`)

## Step 3: Update Guestbook

Replace `YOUR_GOOGLE_SCRIPT_URL` in `guestbook.html` with your Web App URL.

## Step 4: Test

1. Open your guestbook
2. Submit a test entry
3. Check your Google Sheet - new row should appear!
4. Refresh guestbook - entry should display

## Moderation

To remove spam or inappropriate entries:
- Simply delete the row in Google Sheet
- Entries update automatically when page reloads

## Tips

- Keep the Sheet open to see entries come in real-time
- You can export entries to CSV anytime
- Add additional columns if you want (e.g., approved/rejected)
- The script is rate-limited to prevent spam (Google's limits)

---

**All done!** Your guestbook is now fully automated with Google Sheets! 🎉
