//
//  RCTNativeSampleModule.m
//  NewArchitectureApp
//
//  Created by Denis Slavik on 13.07.2022.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>
#import <UserNotifications/UserNotifications.h>

#include "RCTNativeSampleModule.h"

@implementation NativeSampleModule
RCT_EXPORT_MODULE()

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:(const facebook::react::ObjCTurboModule::InitParams &)params {
  return std::make_shared<facebook::react::NativeSampleModuleSpecJSI>(params);
}

- (void)showNotification:(NSString *)title content:(NSString *)content {
  UNMutableNotificationContent *notificationContent = [[UNMutableNotificationContent alloc] init];
  notificationContent.title = title;
  notificationContent.body = content;
  notificationContent.sound = UNNotificationSound.defaultSound;
  
  UNTimeIntervalNotificationTrigger *trigger = [UNTimeIntervalNotificationTrigger
                                                triggerWithTimeInterval:0.1f
                                                repeats:NO];
  
  UNNotificationRequest *request = [UNNotificationRequest requestWithIdentifier:@"requestName"
                                                                        content:notificationContent
                                                                        trigger:trigger];
  
  UNUserNotificationCenter *center = [UNUserNotificationCenter currentNotificationCenter];
  dispatch_async(dispatch_get_main_queue(), ^{
    [center addNotificationRequest:request withCompletionHandler:nil];
  });
}

@end
