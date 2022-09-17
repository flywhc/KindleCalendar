
# Battery Saving Calendar for Kindle

## Features
| en| 中 |
|--- |---|
| Weather forecasting | 天气预报 |
| Chinese lunar calendar | 中国农历 |
| Random Chinese Poetrys | 随机古诗 |
| No server required. Pure local HTML5 files | 纯HTML5，无须服务器 |
| Save battery - avoid network traffic if possbile - may work offline if weather is not required. | 省电设计，尽量避免网络连接，甚至可以关闭天气预报以达到离线模式。|

* 注意：本版更新中文件名改成index.html（多了一个l), 配置里的天气服务键由weather_key改名为qweather_key。

![screenshot](screenshot.jpg)

## 使用方法
1. 在https://dev.qweather.com/上注册一个账号并创建一个key。应用名称可以是任意名称。密钥Key的格式应该是这样的：
**44de7becc22b4e8ca4971595fbab4c7f**。
1. 编辑**accounts.js**，将**qweather_key**的值替换为上一步中的key。
1. 将 **weather_location** 设置为 qweather的位置代码（可以从 qweather 文档中找到）或天气位置的GPS坐标。
1. 将 Kindle 连接到 PC 的 USB 端口。
1. 将 **\docs** 下的所有文件复制到 **\Calendar** 文件夹中。
1. 断开 Kindle。
1. 打开 Kindle 网络浏览器并输入以下 URL：
``
file：///mnt/us/calendar/index.html
``

* 有些版本的Kindle无法打开上面这种 "file://"地址。可以用浏览器访问下面这个地址，缺点是您只能在Kindle上手工输入天气服务的key：
``
https://flywhc.github.io/KindleCalendar/ 
``

* 您可以点击天气预报区域，点取消按钮切换离线模式以节省耗电，或者重新输入天气服务的key。
* 还可以点击古诗区域换一首古诗。
* 也可以点击时间区域切换天气和周历。


## Usage
1. Register an account on https://dev.qweather.com/ and create a key.Application name can be any name. The key format should be like 	
**44de7becc22b4e8ca4971595fbab4c7f**.
1. Edit **accounts.js** and replace the value of **qweather_key** to the key in the previous step.
1. Set **weather_location** to a qweather location code (may find it from qweather document) or a GPS coordinate of the location for weather.
1. Connect Kindle to PC USB port.
1. Copy all files under **\docs** into **\Calendar** folder.
1. Disconnect the Kindle.
1. Open the Kindle web browser and enter the following URL:  
``
file:///mnt/us/calendar/index.html
``

* Some version of Kindle doesn't support 'file://' address as above. In this case, you may access the url below from your Kindle web browser. However, you will have to enter the QWeather key on your Kindle.
``
https://flywhc.github.io/KindleCalendar/ 
``

* You may click on weather area and then click on Cancel to disable weather to save power, or change the QWeather key.
* Clicking on Poetry area may change a poetry.
* Clicking on Time area to togge between weather and calendar.

## Change History
2022-9-18
* 修复天气预报日期显示错误
* 捕获网络错误显示错误提示

2022-2-7: 
* 修正古诗排版；
* 修正农历算法错误。
* 提供在线网页。
* 支持天气KEY的运行时配置和离线设置。
* 支持点击切换古诗。
* 支持点击切换离线周历。


## Issues
Only tested on my jailbroken KPW3.  
* 首次加载古诗时间较长，因为方正侠客行书字体太大。可以尝试更换字体。欢迎推荐支持GB18030行书的体积较小的免费字体。
* 有时字体或者布局不能正常显示，刷新即可。  
* 反复点刷新可能会导致浏览器内存溢出而崩溃。可以尝试更换字体。  
* Kindle 内置的NetFront Web Browser兼容性较差，相当多的H5特性不能正常支持。

## Licenses
* The MIT License (MIT)
* Copyright (C) 2022 Jason Wang
* The services and data used by this software may be only free for non-commercial usage.
* 本软件使用的服务(如天气)和数据（如字体）可能仅限于个人才能免费试用。


## References and Thanks:
#### Weather Service 天气服务
https://dev.qweather.com/

#### Chinese Poetry 古诗数据源
https://github.com/chinese-poetry/huajianji/tree/master/data

#### Chinese Lunar Calendar 中国农历算法
https://github.com/StuPig/calendar-converter

#### Free Fonts 免费字体
chesstype.chesstype.ttf:  
https://www.1001fonts.com/led-fonts.html

FZXiaKTJF.ttf:
https://www.foundertype.com/index.php/FindFont/index.html?hot=118


#### Kindle JavaScript and JQuery supports
https://decadecity.net/blog/2015/04/17/e-ink-kindle-web-browsers
