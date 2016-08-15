module.exports = {
    'layout test' : function (browser) {
        browser
            .url('http://localhost:3011')
            .waitForElementVisible('body', 1000)
            //.setValue('input[type=text]', 'nightwatch')
            //.waitForElementVisible('button[name=btnG]', 1000)
            //.click('button[name=btnG]')
            //.pause(1000)
            .assert.containsText('.footer', 'Footer')
            .end();
    }
};