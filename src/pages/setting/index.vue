
<template>
    <div>
      <span>{{ showText }}</span>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        timer: null, //settimeout
        showText: "",
      };
    },
   
    mounted() {
      this.appear(
        "点评批评！！！！！！！！！！！！！！！！！！！！！！！！！！！！！"
      );
    },
   
    methods: {
      appear(content) {
        const _this = this;
   
        this.showText = "";
        clearTimeout(this.timer);
   
        var speed = 50; //设置定时的速度 越来越快
        var count = 1;
   
        function changeContent() {
          _this.showText = content.substring(0, count); //截取字符串
          count++;
   
          if (count != content.length + 1) {
            speed -= 1;
            if (speed < 5) speed = 5;
   
            _this.timer = setTimeout(changeContent, speed);
          }
        }
        changeContent();
      },
    },
  };
  </script>