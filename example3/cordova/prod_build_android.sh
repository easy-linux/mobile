#!/bin/sh

cordova prepare
cordova build android --release --device --buildConfig
