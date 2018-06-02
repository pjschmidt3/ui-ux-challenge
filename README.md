# UI/UX Challenge

## Getting Started

### Installing dependencies

#### Global Dependencies
```npm i -g quasar-cli vue-cli jest-cli```
or
```yarn global add quasar-cli vue-cli jest-cli```

For mobile:
```npm i -g cordova```

#### Local Dependencies
```npm i```
or
```yarn```

### Running the tests
```npm/yarn test```


### Running the app
#### In a browser
```quasar dev```


### Building as a mobile app
For android, install Android Studio and desired SDKs, and add the android SDK to your PATH:

```
export ANDROID_HOME="$HOME/Android/Sdk"
PATH=$PATH:$ANDROID_HOME/tools; PATH=$PATH:$ANDROID_HOME/platform-tools
```

Add the cordova build mode:
```quasar mode -a cordova```

See https://quasar-framework.org/guide/cordova-configuring-cordova.html for more information
