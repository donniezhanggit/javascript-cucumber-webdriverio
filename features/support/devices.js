module.exports = {

    /*
    TODO:
    - make use to load different devices
    - some caps may need changing due to appium / selenium redesigns
    */

    chrome: {
        browserName: 'chrome'
    },
    firefox: {
        browserName: 'firefox'
    },
    android_emulator: {
        deviceName: 'name_of_device',
        platformName: 'Android',
        platformVersion: 'x.x.x',
        avd: 'name_of_emulator',
        avdReadyTimeout: 60000
    },
    android_physical_device: {
        deviceName: 'name_of_device',
        udid: 'udid_of_device',
        platformName: 'Android',
        platformVersion: 'x.x.x'
    },
    ios_simulator: {
        deviceName: 'name_of_device',
        platformName: 'iOS',
        platformVersion: 'x.x',
        automationName: 'xcuitest (depends on platformVer)'
    },
    ios_physical_device: {
        name: 'name_of_device',
        udid: 'udid_of_device',
        platformName: 'iOS',
        platformVersion: 'x.x',
        automationName: 'xcuitest (depends on platformVer)'
    }

};