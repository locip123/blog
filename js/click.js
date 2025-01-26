(function() {
    // 随机生成 RGB 颜色
    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);  // 生成 0-255 的随机数
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgba(${r}, ${g}, ${b}, 0.7)`;  // 返回带透明度的随机颜色
    }

    // 创建一个显示鼠标特效的小圆点
    function createCircle(event, isClickEffect) {
        // 创建一个新的圆点元素
        let circle = document.createElement("div");
        circle.style.position = "absolute";
        circle.style.pointerEvents = "none";
        circle.style.width = "30px";
        circle.style.height = "30px";
        circle.style.borderRadius = "50%";
        circle.style.transform = "translate(-50%, -50%)";
        circle.style.zIndex = "9999";
        circle.style.transition = "transform 0.4s, opacity 0.5s";

        // 设置颜色
        if (isClickEffect) {
            // 点击时冰蓝色
            circle.style.background = "rgba(173, 216, 230, 0.7)"; // Ice blue
        } else {
            // 鼠标移动时随机颜色
            circle.style.background = getRandomColor();  // 使用随机颜色
        }

        // 设置圆点的位置
        circle.style.left = `${event.pageX}px`;
        circle.style.top = `${event.pageY}px`;

        // 添加到页面
        document.body.appendChild(circle);

        // 使圆点缩小并消失
        setTimeout(() => {
            circle.style.transform = "translate(-50%, -50%) scale(0)";
            circle.style.opacity = "0";
        }, 10);  // 延迟给浏览器足够时间应用初始样式

        // 移除圆点元素
        setTimeout(() => {
            circle.remove();
        }, 500);  // 在300ms后移除圆点
    }

    // 监听鼠标移动事件
    document.addEventListener("mousemove", function(event) {
        createCircle(event, false);  // false表示鼠标移动的特效
    });

    // 监听鼠标点击事件
    document.addEventListener("click", function(event) {
        createCircle(event, true);  // true表示鼠标点击的特效
    });

    document.body.style.cursor = "url('blog/images/arrow.cur'), auto"; // 使用自定义的鼠标样式

})();
