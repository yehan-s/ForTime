        var canvas = document.querySelector("#canvas");
        var ctx = canvas.getContext('2d');

        let w = 1200;
        let h = 800;
        //画线
        function drawLine(x1, y1, x2, y2, color, width) {
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.strokeStyle = color || '#000';
            ctx.lineWidth = width;
            ctx.lineCap = 'round';
            ctx.stroke();
            ctx.closePath();
        }
        //画字
        function drawText(text, x, y) {
            ctx.font = "180px 微软雅黑";
            //fillStyle不会因为关闭路径而消失
            ctx.fillStyle = '#000';
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(text, x, y);
        }
        //画圆
        function drawCircular(x, y, r, color) {
            ctx.beginPath();
            ctx.arc(x, y, r, 0, Math.PI * 2, true);
            ctx.fillStyle = color || '#000';
            ctx.fill();
            ctx.closePath();
        }

        var userText = prompt('请输入您想生成的像素文字');
        if (userText == '' || userText == null) {
            //创建终点字
            drawText('英 ❤', w / 2, h / 2);
        } {
            drawText(userText, w / 2, h / 2);
        } {
        }
        // 随机数
        let random = function (num) {
            return parseInt(Math.random() * num);//你个憨憨记得加return
        }
        //运动次数
        let times = 100;
        //创建像素素组
        let pixelBallArry = [];
        //像素点的类
        function pixelBall(xEend, yEend) {//终点需要传进来
            this.xStart = random(w);
            this.yStart = random(h);
            this.xEend = xEend;
            this.yEend = yEend;

            this.x = this.xStart;
            this.y = this.yStart;//开始坐标

            this.xSpeed = (this.xEend - this.xStart) / times;//this你能少吗
            this.ySpeed = (this.yEend - this.yStart) / times;

            this.r = 5;
            this.color = "#" + parseInt(Math.random() * 0xffffff).toString(16);
        }

        pixelBall.prototype.show = function () {
            //计算每次运动的坐标
            this.x += this.xSpeed;
            this.y += this.ySpeed;
            drawCircular(this.x, this.y, this.r, this.color);

        }

        var copya = ctx.getImageData(0, 0, w, h);
        ctx.clearRect(0, 0, w, h);


        //筛选有效像素点，a大于128
        var leap = 12;//间隔
        for (var y = 0; y < h; y += leap) {
            for (var x = 0; x < w; x += leap) {
                var index = x + y * w;
                var a = copya.data[index * 4 + 3];
                if (a > 128) {
                    //drawCircular(x,y,4,'#f00');
                    //调用小球类
                    var pixel = new pixelBall(x, y);
                    //存入数组
                    pixelBallArry.push(pixel);
                    //显示小球
                    pixel.show();
                }
            }
        }

        let endTimer = 0;
        //运动呗
        let pixelTimer = setInterval(function () {
            endTimer++;//想想这个的顺序
            //清除画布
            ctx.clearRect(0, 0, w, h);
            for (var i = 0; i < pixelBallArry.length; i++) {//通过遍历数组找到像素
                pixelBallArry[i].show();
            }
            //判断何时停止
            if (endTimer == times - 1) {
                clearInterval(pixelTimer);
            }

        }, 25)//画得有问题

        setTimeout(function () {
            setInterval(function () {
                ctx.clearRect(0, 0, w, h);
                for (var i = 0; i < pixelBallArry.length; i++) {
                    pixelBallArry[i].show();
                }
            }, 25)

        }, 5500)