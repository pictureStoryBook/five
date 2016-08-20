var gulp = require('gulp');
gulp.task('default',['task1','task2'],function(){
    console.log('hello world')
})

gulp.task('task1',function(cb){
    setTimeout(function(){
        console.log('task1');
        //这里通过传入cb参数来调用的方式实现同步转化
        cb();
    },2000)
})

gulp.task('task2',function(cb){
    var stream = gulp.src('src/*.css')
        .pipe(gulp.dest('dest'))
    //读取文件流也是异步操作，通过返回stream流来变成同步的方式
    return stream;
})