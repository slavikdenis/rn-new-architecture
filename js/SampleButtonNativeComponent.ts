// @ts-ignore TODO: remove once there is a .d.ts file with definitions
import codegenNativeComponentUntyped from 'react-native/Libraries/Utilities/codegenNativeComponent';
// @ts-ignore TODO: remove once there is a .d.ts file with definitions
import type {
  WithDefault,
  // DirectEventHandler,
  // @ts-ignore TODO: remove once there is a .d.ts file with definitions
} from 'react-native/Libraries/Types/CodegenTypes';
import type {ViewProps, HostComponent} from 'react-native';

// type Event = Readonly<Object>;

const codegenNativeComponent = codegenNativeComponentUntyped as <T extends {}>(
  name: string,
) => HostComponent<T>;

interface NativeProps extends ViewProps {
  // handlePress?: DirectEventHandler<Event>;
  text: string;
  enabled?: WithDefault<boolean, true>;
}

export default codegenNativeComponent<NativeProps>('RNSSampleButton');
