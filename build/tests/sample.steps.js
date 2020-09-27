"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
describe('Sample test', () => {
    it("should verify that the text entry dialog username & password fields are editable", () => {
        let appBtn = $("~App");
        let alertDialogBtn = $('//android.widget.TextView[@content-desc="Alert Dialogs"]');
        let textEntryDialogBtn = $('//android.widget.Button[@content-desc="Text Entry dialog"]');
        let userNameField = $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/username_edit"]');
        let passwordField = $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/password_edit"]');
        appBtn.click();
        alertDialogBtn.click();
        textEntryDialogBtn.click();
        let testuser = "Test User";
        userNameField.addValue(testuser);
        passwordField.addValue("password");
        chai_1.expect(userNameField.getText()).equal(testuser);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FtcGxlLnN0ZXBzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3Rlc3RzL3NhbXBsZS5zdGVwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE0QjtBQUU1QixRQUFRLENBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRTtJQUV6QixFQUFFLENBQUMsa0ZBQWtGLEVBQUUsR0FBRyxFQUFFO1FBQ3hGLElBQUksTUFBTSxHQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QixJQUFJLGNBQWMsR0FBUSxDQUFDLENBQUMsMERBQTBELENBQUMsQ0FBQztRQUN4RixJQUFJLGtCQUFrQixHQUFRLENBQUMsQ0FBQyw0REFBNEQsQ0FBQyxDQUFDO1FBQzlGLElBQUksYUFBYSxHQUFRLENBQUMsQ0FDdEIsbUZBQW1GLENBQUMsQ0FBQztRQUN6RixJQUFJLGFBQWEsR0FBUSxDQUFDLENBQ3RCLG1GQUFtRixDQUFDLENBQUM7UUFFekYsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3ZCLGtCQUFrQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBRTNCLElBQUksUUFBUSxHQUFXLFdBQVcsQ0FBQztRQUNuQyxhQUFhLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2pDLGFBQWEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbkMsYUFBTSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwRCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIn0=