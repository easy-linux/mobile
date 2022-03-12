# Example 2 for Cordova

## Как пользоваться

    npm install
    cd cordova
    cordova prepare
    cd ..
    npm run android-emulate


## Переменные окружения для Mac

    export JAVA_HOME=/Applications/Android\ Studio.app/Contents/jre/Contents/Home/
    export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk

    export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools/
    export PATH=$PATH:$ANDROID_SDK_ROOT/cmdline-tools/latest/bin/
    export PATH=$PATH:$ANDROID_SDK_ROOT/emulator/
    export PATH=$PATH:$ANDROID_SDK_ROOT/build-tools/30.0.3/

## Установка и удаление build-tools

### _Установка версии 30.0.3_:

    sdkmanager --install "build-tools;30.0.3"

### _Удаление версии 33.0.0-rc1_:

    sdkmanager --uninstall "build-tools;33.0.0-rc1"

### _Удаление версии XXX_:

    sdkmanager --uninstall "build-tools;XXX"

### _Список установленных версий_:

    sdkmanager --list_installed | grep build-tools

### _Список всех версий_:

    sdkmanager --list | grep build-tools




## Видео с объяснением как это все работает здесь:

https://youtu.be/-R3fA4cVWFM


## Другие видео по  Codova:

- Введиние в Cordova, превращаем существующее приложение в мобильное https://youtu.be/O5mQRVTmUf4

## Полезные видео по настройке webpack:

- Настройка горячей перезагрузки - https://youtu.be/oOpzkF2nU0s

- Настройка сборки проекта с подгрузкой файлов css/scss/изображений - https://youtu.be/3B-NGZmMe-Y

- Модульный принцип конфигурации проекта - https://youtu.be/fnUqyWyG5kk

