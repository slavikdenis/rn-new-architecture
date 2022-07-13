import type {TurboModule} from 'react-native';
import {TurboModuleRegistry} from 'react-native';

export interface Spec extends TurboModule {
  readonly getConstants: () => {};

  showNotification(title: string, content: string): void;
}

export default TurboModuleRegistry.get<Spec>('NativeSampleModule');
