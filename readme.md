
# Battery Saving Calendar for Kindle

## Features
| en| 中 |
|--- |---|
| Weather forecasting | 天气预报 |
| Chinese lunar calendar | 中国农历 |
| Random Chinese Poetrys | 随机古诗 |
| No server required. Pure local HTML5 files | 纯HTML5，无须服务器 |
| Save battery - avoid network traffic if possbile - may work offline if weather is not required. | 省电设计，尽量避免网络连接，甚至可以关闭天气预报以达到离线模式。|

![screenshot](screenshot.jpg)

## Usage
1. Register an account on https://dev.qweather.com/ and create a key.Application name can be any name. The key format should be like 	
**44de7becc22b4e8ca4971595fbab4c7f**.
1. Edit **accounts.js** and replace the value of **weather_key** to the key in the previous step.
1. Set **weather_location** to a qweather location code (may find it from qweather document) or a GPS coordinate of the location for weather.
1. Connect Kindle to PC USB port.
1. Copy all files under **\calendar** into **\Calendar** folder.
1. Disconnect the Kindle.
1. Open the Kindle web browser and enter the following URL:  
``
file:///mnt/us/calendar/index.htm
``

* Alternatively, you may also upload files on a web server and open the address to the web server from your Kindle.
* Offline Mode by Disable weather forecasting for power-saving:
Edit index.htm and change
``
var Disable_Weather = false;
``
to
``
var Disable_Weather = true;
``
## 使用方法
1. 在https://dev.qweather.com/上注册一个账号并创建一个key。应用名称可以是任意名称。密钥Key的格式应该是这样的：
**44de7becc22b4e8ca4971595fbab4c7f**。
1. 编辑**accounts.js**，将**weather_key**的值替换为上一步中的key。
1. 将 **weather_location** 设置为 qweather的位置代码（可以从 qweather 文档中找到）或天气位置的GPS坐标。
1. 将 Kindle 连接到 PC 的 USB 端口。
1. 将**\calendar** 下的所有文件复制到**\Calendar** 文件夹中。
1. 断开 Kindle。
1. 打开 Kindle 网络浏览器并输入以下 URL：
``
file：///mnt/us/calendar/index.htm
``

* 或者，您也可以在网络服务器上上传文件并从 Kindle 打开网络服务器的地址。
* 通过禁用天气预报离线模式以更省电：
编辑 index.htm 并更改
``
var Disable_Weather = false；
``
到
``
var Disable_Weather = true;
``

## Issues
Only tested on my jailbroken KPW3.  
首次加载方正侠客行书字体时间稍长。  
有时字体不能正常显示，刷新即可。  
反复点刷新可能会导致浏览器内存溢出而崩溃。  
Kindle 内置的NetFront Web Browser兼容性较差，相当多的H5特性不能正常支持。

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

#### Chinese Lunar Calendar 万年历算法
http://www.forasp.cn/html/593.html

#### Free Fonts 免费字体
chesstype.chesstype.ttf:  
https://www.1001fonts.com/led-fonts.html

FZXiaKTJF.ttf:
https://www.foundertype.com/index.php/FindFont/index.html?hot=118


#### Kindle JavaScript and JQuery supports
https://decadecity.net/blog/2015/04/17/e-ink-kindle-web-browsers
