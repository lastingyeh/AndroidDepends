//
//  CalendarManager.m
//  AndroidDepends
//
//  Created by yuhung on 2016/11/24.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "CalendarManager.h"
#import "RCTLog.h"

@implementation CalendarManager

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location){

  RCTLogInfo(@"Pretending to create an event %@ at %@",name,location);
}


@end
