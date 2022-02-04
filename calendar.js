        // Constants for Weather API: register an free account on https://dev.qweather.com/
        var weather_realtime_url = "https://devapi.qweather.com/v7/weather/now?";
        var weather_forecast_hour_url = "https://devapi.qweather.com/v7/weather/24h?"
        var weather_forecast_day_url = "https://devapi.qweather.com/v7/weather/7d?"

        function padding0(num, length) {
            for(var len = (num + "").length; len < length; len = num.length) {
                num = "0" + num;
            }
            return num;
        }

        $(document).ready(function(){
            var now = new Date();
            try{
            // Date in Chinese format
            var dateString = now.toLocaleString("zh-CN", { dateStyle: 'full' });
            $("#dateBlock").text(dateString);
            }catch(e){
                alert('toLocaleString error');
            }
            // Chinese Lunar Calendar
            var chineseDateString = now.toLocaleString("zh-CN-u-ca-chinese", { dateStyle: "medium" })
                .replace(/(\d+)\s*?年/, (_, y) => "甲乙丙丁戊己庚辛壬癸".charAt((y - 4) % 10) + "子丑寅卯辰巳午未申酉戌亥".charAt((y - 4) % 12) + "年");
            $("#chineseDateBlock").text(chineseDateString);
            // Time
            var timeString = padding0(now.getHours(), 2) + ':' + padding0(now.getMinutes(), 2);
            $("#timeBlock").text(timeString);

            // Chinese Poetry
            var poery = (Math.random() < 0.5) ? tangshi300 : songci300;
            var index = Math.floor(Math.random() * poery.length);

            var formatedPoery = "";
            poery[index].paragraphs.forEach(line => {
                formatedPoery += line + "<br />"
            });

            $("#poetryBlock").html(
                poery[index].title
                + "<br />" + poery[index].dynasty
                + " " + poery[index].author
                + "<br/>" + formatedPoery);

            // Current Weather
            $.get(weather_realtime_url + "key=" + weather_key + "&location=" + weather_location + "&lang=" + weather_lang + "&unit" + weather_unit,
                function (data, status) {
                    if (status == "success" && data.code == "200") {
                        var weather = "<i class='qi-" + data.now.icon + "'></i>"
                            + " 当前天气" + data.now.text
                            + " 温度" + data.now.temp + "℃"
                            + " 体感温度" + data.now.feelsLike + "℃"
                            + " 风向" + data.now.windDir
                            + " 风力" + data.now.windScale + "级"
                            + " 湿度" + data.now.humidity + "%"
                            + " 降水" + data.now.precip + "mm/小时"
                            + " 能见度" + data.now.vis + "KM"
                            ;
                        $("#weatherNowBlock").html(weather);
                        $("#weatherInfoBlock").text("观测时间: " + data.now.obsTime);
                    }
                    else {
                        $("#weatherInfoBlock").text("数据: " + JSON.stringify(data) + "\n状态: " + status);
                    }
                });
            /*
                // Hourly Weather
                $.get(weather_forecast_hour_url + "key=" + weather_key + "&location=" + weather_location + "&lang=" + weather_lang + "&unit" + weather_unit,
                    function(data, status){
                        if(status == "success" && data.code == "200")
                        {
                            data.hourly.forEach(hourData => {
                                var weather = "时间: " + hourData.fxTime
                                + "<i class='qi-" + hourData.icon +"'></i>"
                                + " 天气" + hourData.text
                                + " 温度" + hourData.temp + "℃"
                                + " 风向" + hourData.windDir
                                + " 风力" + hourData.windScale + "级"
                                + " 湿度" + hourData.humidity + "%"
                                + " 降水" + hourData.precip + "mm/小时 <br />"
                                ;
                                $("#weatherhourlyBlock").append(weather);
                            });
                        }
                        else
                        {
                            $("#weatherInfoBlock").text("数据: " + JSON.stringify(data) + "\n状态: " + status);
                        }
                });
            */
        });
/*

        // 窗口加载事件仅用于窗口高度取决于图像 
        $(window).bind("load", function () {
            var footerHeight = 0,
                footerTop = 0,
                $footer = $("#footer");
            positionFooter();
            //定义positionFooter function 
            function positionFooter() {
                //取到div#footer高度 
                footerHeight = $footer.height();
                //div#footer离屏幕顶部的距离 
                footerTop = ($(window).scrollTop() + $(window).height() - footerHeight) + "px";
                //如果页面内容高度小于屏幕高度，div#footer将绝对定位到屏幕底部，否则div#footer保留它的正常静态定位 
                if (($(document.body).height() + footerHeight) < $(window).height()) {
                    $footer.css({
                        position: "absolute"
                    }).stop().animate({
                        top: footerTop
                    });
                } else {
                    $footer.css({
                        position: "static"
                    });
                }
            }
            $(window).scroll(positionFooter).resize(positionFooter);
        });
*/