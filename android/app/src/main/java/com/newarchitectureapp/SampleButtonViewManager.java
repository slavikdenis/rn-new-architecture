package com.newarchitectureapp;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.common.MapBuilder;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewManagerDelegate;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.viewmanagers.RNSSampleButtonManagerDelegate;
import com.facebook.react.viewmanagers.RNSSampleButtonManagerInterface;

//import java.util.Map;

@ReactModule(name = SampleButtonViewManager.REACT_CLASS)
public class SampleButtonViewManager extends SimpleViewManager<SampleButton>
        implements RNSSampleButtonManagerInterface<SampleButton> {

    public static final String REACT_CLASS = "RNSSampleButton";

    private final ViewManagerDelegate<SampleButton> mDelegate;

    public SampleButtonViewManager() {
        mDelegate = new RNSSampleButtonManagerDelegate<>(this);
    }

    @Nullable
    @Override
    protected ViewManagerDelegate<SampleButton> getDelegate() {
        return mDelegate;
    }

    @NonNull
    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @NonNull
    @Override
    protected SampleButton createViewInstance(@NonNull ThemedReactContext reactContext) {
        return new SampleButton(reactContext);
    }

//    @Override
//    public Map getExportedCustomBubblingEventTypeConstants() {
//        return MapBuilder.builder()
//                .put(
//                        "press",
//                        MapBuilder.of(
//                                "phasedRegistrationNames",
//                                MapBuilder.of("bubbled", "handlePress")
//                        )
//                ).build();
//    }

    @Override
    @ReactProp(name = "text")
    public void setText(SampleButton view, @Nullable String value) {
        view.setText(value);
    }

    @Override
    @ReactProp(name = "enabled")
    public void setEnabled(SampleButton view, boolean value) {
        view.setEnabled(value);
    }
}