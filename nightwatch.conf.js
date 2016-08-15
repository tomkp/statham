const SELENIUM_CONFIGURATION = {
  start_process: true,
  server_path: 'bin/selenium-server-standalone-2.53.1.jar',
  host: '127.0.0.1',
  port: 4444,
  cli_args : {
    "webdriver.chrome.driver" : "bin/chromedriver"
  }
};

const CHROME_CONFIGURATION = {
  browserName: 'chrome',
  javascriptEnabled: true,
  acceptSslCerts: true,
  chromeOptions : {
    args : ["start-fullscreen"]
  }
};

const DEFAULT_CONFIGURATION = {
  launch_url: 'http://localhost',
  selenium_port: 4444,
  selenium_host: 'localhost',
  desiredCapabilities: CHROME_CONFIGURATION
};

const ENVIRONMENTS = {
  default: DEFAULT_CONFIGURATION
};

module.exports = {
  src_folders: ['test/ui'],
  output_folder : "log",
  selenium: SELENIUM_CONFIGURATION,
  test_settings: ENVIRONMENTS
};

/*{
  "src_folders" : ["test"],
  "output_folder" : "log",

  "selenium" : {
    "start_process" : true,
    "server_path" : "bin/selenium-server-standalone-2.53.1.jar",
    "log_path" : "log",
    "host" : "127.0.0.1",
    "port" : 4444,
    "cli_args" : {
      "webdriver.chrome.driver" : "bin/chromedriver"
    }
  },

  "test_settings" : {
    "default" : {
      "launch_url" : "http://localhost",
      "selenium_port"  : 4444,
      "selenium_host"  : "localhost",
      "silent": true,
      "filter" : "test/ui/!*-test.js",
      "screenshots" : {
        "enabled" : true,
        "on_failure" : true,
        "path" : "log"
      },
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true,
        "acceptSslCerts": true,
        "chromeOptions" : {
          "args" : ["start-fullscreen"]
        }
      }
    }
  }
}*/
