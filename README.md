#### miniProgress (本项目是一个使用了自定义组件的代码片段)
##### 自定义  半圆进环度条  canvas绘制


>效果

<img src="http://qiniu.xueshiming.cn/%E5%8D%8A%E5%9C%86%E8%BF%9B%E5%BA%A6%E6%9D%A1.jpg" width="50%" height="50%">

>体验代码片段

[半圆环进度条](https://developers.weixin.qq.com/s/Jmlz01mq7v94)

>使用

直接将 ```<miniprogress />```组件，引入要使用的页面

``` 
<view class='progress'>
    <miniprogress score="60" />
</view>
```

progress.wxss

```
.progress {
    padding: 0 10%;
    background: #5182e9;
    height: 320rpx;
}
```



并在该页面的json文件中将 ```<miniprogress /> ``` 关联
```
"usingComponents": {
      "miniprogress": "../common/miniprogress"
}
```
