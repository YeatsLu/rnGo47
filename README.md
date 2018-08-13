# rnGo47
Test repo for https://github.com/facebook/react-native/issues/20628

### steps
1. launch android emulator 
2. `npm i`
3. `react-native run-android`
4. set `dev=false` `minify=true` at `Dev Settings` of App's DevTools
5. `react-native log-android` for viewing console.log
6. `curl "http://localhost:8081/index.android.bundle?platform=android&dev=false\&hot=false&minify=true" -o index.android.jsbundle`
7. click the button to throw error
8. use line & column of error stack (app crash view OR console.log) to locate the position at jsbundle from step 6
