#!/bin/sh

cordova prepare
cordova build ios --device --prod --buildConfig
