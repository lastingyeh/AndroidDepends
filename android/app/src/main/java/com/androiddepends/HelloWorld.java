package com.androiddepends;

import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by yuhung on 2016/11/23.
 */

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
