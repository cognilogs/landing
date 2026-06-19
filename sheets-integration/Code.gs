/**
 * CogniLogs Waitlist — Google Apps Script
 *
 * Deployment steps:
 * 1. Open your sheet: https://docs.google.com/spreadsheets/d/1i43z_JKVWIk83lLJbxsQx-rQvVvNdukzm3UEkGufs7Y/edit
 * 2. Extensions → Apps Script
 * 3. Paste this entire file, save, deploy as Web App
 * 4. Run setupSheet() once to create headers
 */

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    const email = e.parameter.email;
    const timestamp = e.parameter.timestamp || new Date().toISOString();
    const source = e.parameter.source || "website";

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Timestamp", "Email", "Source"]);
    }

    sheet.appendRow([timestamp, email, source]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: "ok" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function setupSheet() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.getRange("A1:C1").setValues([["Timestamp", "Email", "Source"]]);
  sheet.getRange("A1:C1").setFontWeight("bold");
}
