import {expect} from 'chai';

describe('Sample test', () => {

    it("should verify that the text entry dialog username & password fields are editable", () => {
        let appBtn: any = $("~App");
        let alertDialogBtn: any = $('//android.widget.TextView[@content-desc="Alert Dialogs"]');
        let textEntryDialogBtn: any = $('//android.widget.Button[@content-desc="Text Entry dialog"]');
        let userNameField: any = $(
            '//android.widget.EditText[@resource-id="io.appium.android.apis:id/username_edit"]');
        let passwordField: any = $(
            '//android.widget.EditText[@resource-id="io.appium.android.apis:id/password_edit"]');

        appBtn.click();
        alertDialogBtn.click();
        textEntryDialogBtn.click();

        let testuser: string = "Test User";
        userNameField.addValue(testuser);
        passwordField.addValue("password");
        expect(userNameField.getText()).equal(testuser);
    });
});
