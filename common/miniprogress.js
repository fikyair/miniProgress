Component({
    /**
     * 组件的属性列表
     */
    properties: {
        score: {
            type: Number
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },
    ready: function () {
        const query = this.createSelectorQuery()
        query.select('#ring').boundingClientRect(res => {
            this.drawRing('ring', res.width, res.height, this.data.score)
        }).exec()
    },

    /**
     * 组件的方法列表
     */
    methods: {
        drawRing: function (canvasId, width, height, angle) {
            var context = wx.createCanvasContext(canvasId, this)
            // 外层圆环
            context.beginPath()
            context.arc(width / 2, height - 20, width / 2 - 30, 1 * Math.PI, 2 * Math.PI)
            context.setLineWidth(5)
            context.setLineCap('round')
            context.setStrokeStyle('rgba(255, 255, 255, 0.3)')
            context.stroke()

            // 外层进度圆环
            context.beginPath()
            context.arc(width / 2, height - 20, width / 2 - 30, 1 * Math.PI, (1 + angle / 100) * Math.PI)
            context.setLineWidth(5)
            context.setLineCap('round')
            context.setStrokeStyle('#fff')
            context.stroke()

            // 指示器
            const xAxis = Math.cos(Math.PI * 2 / 360 * (1.8 * (100 + angle))) * (width / 2 - 30)
            const yAxis = Math.sin(Math.PI * 2 / 360 * (1.8 * (100 + angle))) * (width / 2 - 30)
            context.beginPath()
            context.arc(width / 2 + xAxis, height - 20 + yAxis, 10, 0, 2 * Math.PI)
            context.setFillStyle('#fff')
            context.fill()
            context.beginPath()
            context.arc(width / 2 + xAxis, height - 20 + yAxis, 5, 0, 2 * Math.PI)
            context.setFillStyle('#2EC7C8')
            context.fill()

            // 文本
            let sizeNormal = 14, sizeBold = 34
            const textY = Math.sin(Math.PI * 2 / 360 * (1.8 * (100 + 15))) * (width / 2 - 30)
            if (width < 375) {
                sizeNormal = 14
                sizeBold = 16
            }
            context.beginPath()
            context.setFillStyle('#fff')
            context.setFontSize(sizeNormal)
            context.setTextAlign('center')
            context.setTextBaseline('middle')
            context.fillText('综合得分', width / 2, height - 20 + textY)
            context.font = `normal bold ${sizeBold}px sans-serif`;
            context.fillText(angle + '分', width / 2, height - 20 + textY + sizeBold + sizeNormal)

            // 内层圆环
            context.beginPath()
            context.arc(width / 2, height - 20, width / 2 - 60, 1 * Math.PI, 2 * Math.PI)
            context.setLineWidth(3)
            context.setLineDash([5, 8], 0);
            context.setLineCap('round')
            context.setStrokeStyle('#fff')
            context.stroke()

            context.draw()
        },
    }
})
