package com.newarchitectureapp;

import android.content.Context;
import android.graphics.Color;

import androidx.appcompat.widget.AppCompatButton;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.RCTModernEventEmitter;

public class SampleButton extends AppCompatButton {
    public SampleButton(Context context) {
        super(context);
        this.setTextColor(Color.parseColor("#ffffff"));
        this.setBackgroundColor(Color.parseColor("#76d4fc"));
//        this.setOnClickListener(viewClicked -> {
//            WritableMap event = Arguments.createMap();
//            event.putString("action", "click");
//
//            ReactContext reactContext = (ReactContext) getContext();
//            reactContext
//                    .getJSModule(RCTModernEventEmitter.class)
//                    .receiveEvent(
//                            getId(),  // Id of native view
//                            "press",  // Event's name
//                            event // Event's data
//                    );
//        });
    }
}
