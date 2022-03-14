# Example 3 for Cordova

## Как пользоваться

    npm install
    cd cordova
    cordova prepare
    cd ..
    npm run android-emulate
    npm run ios-emulate

## Генерация хранилища ключей для подписи файла Android приложения

    keytool -genkeypair -v -storetype PKCS12 -keystore development-key.keystore -alias key-alias -keyalg RSA -keysize 2048 -validity 10000

    keytool -genkeypair -v -storetype PKCS12 -keystore production-key.keystore -alias key-alias -keyalg RSA -keysize 2048 -validity 10000

Ключ валиден 10000 дней. 
При создании ключа нужно будет ввести пароль, а также данные о владельце.

## Команды для сборки дев и прод версий

    npm run ios_dev
    npm run ios_prod

    npm run android_dev
    npm run android_prod

## Видео с объяснением как это все работает здесь:

https://youtu.be/-R3fA4cVWFM


## Другие видео по  Codova:

- Введиние в Cordova, превращаем существующее приложение в мобильное https://youtu.be/O5mQRVTmUf4

## Полезные видео по настройке webpack:

- Настройка горячей перезагрузки - https://youtu.be/oOpzkF2nU0s

- Настройка сборки проекта с подгрузкой файлов css/scss/изображений - https://youtu.be/3B-NGZmMe-Y

- Модульный принцип конфигурации проекта - https://youtu.be/fnUqyWyG5kk

