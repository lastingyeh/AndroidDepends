# AndroidDepends

ＪＳ呼叫 建立原生方法 （建議使用原生開發時，開啟Android studio || Xcode 可避免不必要語法錯誤）

Android 使用步驟

1.建立 HelloWorld.java (路徑：${projectroot}/AndroidDepends/android/app/src/main/java/com/AndroidDepends/HelloWorld.java)
      
      public class HelloWorld extends ReactContextBaseJavaModule {

        public HelloWorld(ReactApplicationContext reactContext) {
            super(reactContext);
        }

        @Override
        public String getName() {
            return "HelloWorld";
        }

        @ReactMethod
        public void greeting(String name) {
           Log.i("HelloWorld", "Hello " + name);
        }
      }
      
2.建立 HelloWorldPackage.java (路徑：${projectroot}/AndroidDepends/android/app/src/main/java/com/AndroidDepends/HelloWorldPackage.java)

      public class HelloWorldPackage implements ReactPackage {

        @Override
        public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {

            List<NativeModule> modules = new ArrayList<>();
            modules.add(new HelloWorld(reactContext));
            return modules;
	}   

        @Override
        public List<Class<? extends JavaScriptModule>> createJSModules() {
            return Collections.emptyList();
        }

        @Override
        public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
            return Collections.emptyList();
        }
       }
       
3.開啟 MainApplication (路徑：${projectroot}/AndroidDepends/android/app/src/main/java/com/AndroidDepends/MainApplication.java)
  
	  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
		@Override
		protected boolean getUseDeveloperSupport() {
		    return BuildConfig.DEBUG;
		}

		@Override
		protected List<ReactPackage> getPackages() {
		    return Arrays.<ReactPackage>asList(
			    new MainReactPackage(),
			    new LinearGradientPackage(), 
			    new HelloWorldPackage()); //加入HelloWorldPackage()
		}
	   };

4.js 呼叫 greeting(...)

	var HelloWorld = NativeModules.HelloWorld;
        HelloWorld.greeting("HelloWorld");

5.備註：查看 Log.i(..)訊息 在專案目錄下 terminal: 
	
	adb logcat | grep HelloWorld
	
iOS使用步驟

1. 建立 CalendarManager.h (路徑: $(projectroot)/AndroidDepends/ios/CalendarManager.h)

	      #ifndef CalendarManager_h
	      #define CalendarManager_h
	      #import "RCTBridgeModule.h"

	      @interface CalendarManager :NSObject <RCTBridgeModule>

	      @end
   
2. 建立 CalendarManager.m (路徑: $(projectroot)/AndroidDepends/ios/CalendarManager.m)

	       #import "CalendarManager.h"
	       #import "RCTLog.h"

	       @implementation CalendarManager

	       RCT_EXPORT_MODULE();

	       RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location)
	       {
		   RCTLogInfo(@"Pretending to create an event %@ at %@",name,location);
	       }

	       @end     

3. js 呼叫 addEvent(...,...)

		var CalendarManager = NativeModules.CalendarManager;
        	CalendarManager.addEvent('Birthday Party', '4 Private Drive, Surrey');
 
 資料來源：
 
 1.https://github.com/bonniee/learning-react-native

 2.https://facebook.github.io/react-native/docs/native-modules-ios.html
