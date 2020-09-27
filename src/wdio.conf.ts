let {join} = require( 'path' );
exports.config = {
    runner: 'local',
    port: 4723,
    path: '/wd/hub',
    sync: true,
    specs: [
        './src/tests/**/*.js'
    ],
    exclude: [],
    maxInstances: 1,
    capabilities: [{
        'appium:platformName': 'Android',
        'appium:platformVersion': '8.1',
        'appium:deviceName': 'Nexus 6P',
        'appium:automationName': 'UiAutomator2',
        'appium:app': join( process.cwd(), './apk/ApiDemos-debug.apk' ),
        'appium:autoGrantPermissions': true,
        'appium:clearDeviceLogsOnStart': true,
        'appium:newCommandTimeout': 300000
    }],
    logLevel: 'error',
    bail: 0,
    waitforTimeout: 28000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        //ui: 'bdd',
        timeout: 60000,
        //compilers:'tsconfig-paths/register'
        //compilers: ['ts:ts-node/register'],
        //requires: ['./test/helpers/common.js']
        require: ['ts-node/register']
    }
};
