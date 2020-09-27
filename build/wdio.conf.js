"use strict";
let { join } = require('path');
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
            'appium:app': join(process.cwd(), './apk/ApiDemos-debug.apk'),
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
        timeout: 60000,
        require: ['ts-node/register']
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Rpby5jb25mLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3dkaW8uY29uZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBSSxFQUFDLElBQUksRUFBQyxHQUFHLE9BQU8sQ0FBRSxNQUFNLENBQUUsQ0FBQztBQUMvQixPQUFPLENBQUMsTUFBTSxHQUFHO0lBQ2IsTUFBTSxFQUFFLE9BQU87SUFDZixJQUFJLEVBQUUsSUFBSTtJQUNWLElBQUksRUFBRSxTQUFTO0lBQ2YsSUFBSSxFQUFFLElBQUk7SUFDVixLQUFLLEVBQUU7UUFDSCxxQkFBcUI7S0FDeEI7SUFDRCxPQUFPLEVBQUUsRUFBRTtJQUNYLFlBQVksRUFBRSxDQUFDO0lBQ2YsWUFBWSxFQUFFLENBQUM7WUFDWCxxQkFBcUIsRUFBRSxTQUFTO1lBQ2hDLHdCQUF3QixFQUFFLEtBQUs7WUFDL0IsbUJBQW1CLEVBQUUsVUFBVTtZQUMvQix1QkFBdUIsRUFBRSxjQUFjO1lBQ3ZDLFlBQVksRUFBRSxJQUFJLENBQUUsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLDBCQUEwQixDQUFFO1lBQy9ELDZCQUE2QixFQUFFLElBQUk7WUFDbkMsK0JBQStCLEVBQUUsSUFBSTtZQUNyQywwQkFBMEIsRUFBRSxNQUFNO1NBQ3JDLENBQUM7SUFDRixRQUFRLEVBQUUsT0FBTztJQUNqQixJQUFJLEVBQUUsQ0FBQztJQUNQLGNBQWMsRUFBRSxLQUFLO0lBQ3JCLHNCQUFzQixFQUFFLEtBQUs7SUFDN0Isb0JBQW9CLEVBQUUsQ0FBQztJQUN2QixTQUFTLEVBQUUsT0FBTztJQUNsQixTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUM7SUFDbkIsU0FBUyxFQUFFO1FBRVAsT0FBTyxFQUFFLEtBQUs7UUFJZCxPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztLQUNoQztDQUNKLENBQUMifQ==