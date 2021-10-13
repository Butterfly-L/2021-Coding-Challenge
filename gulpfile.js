const { src, watch, dest, series} = require('gulp');
const htmlmin = require('gulp-htmlmin')
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const cssmin = require('gulp-cssmin');
const autoPrefixer  = require('gulp-autoprefixer');
const purgecss = require('gulp-purgecss')
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();
const clean = require('gulp-clean');


function cleanFolder(){
    return src(['dist'],{allowEmpty:true,read:false})
           .pipe(clean())
}

//html task
function htmlTask() {
    return src('app/pages/*.html')
    	.pipe(htmlmin({
        	removeEmptyAttibutes: true, // 移出所有空属性
        	collapseWhitespace: true // 压缩 html
    	}))
    	.pipe(dest('./dist/pages'))
}

//SASS task
function scssTask(){
    return src('app/styles/*.scss',{sourcemaps: true}) //1.先找到檔案
    .pipe(sass()) //2.解析
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([cssnano()])) //3.壓縮
    .pipe(autoPrefixer())
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(dest('dist/styles',{sourcemaps: '.'})) //dest = destination要存放的要存放的save in the same location
}


//tailwind Task
function processTailwind() {
    return src('app/styles/tailwind.css')
            .pipe(postcss())
            .pipe(cssmin())
            .pipe(dest('dist/styles',{sourcemaps: '.'}))
}


//JS task
function jsTask(){
    console.log('env:'+process.env.NODE_ENV);
    return src(['app/scripts/*.js','!app/scripts/three/*'], {sourcemaps: true})
    .pipe(babel())
    .pipe(terser()) //minify the file
    .pipe(rename({suffix: '.min'}))
    .pipe(dest('dist/scripts',{sourcemaps: '.'})) //save in the same location
}

//Three js
function threeTask(){
    return src(['app/scripts/three/*'])
    .pipe(dest('dist/scripts/three',{sourcemaps: '.'})) //save in the same location
}

//staticTask
function staticTask(){
    return src('app/assets/**')
    .pipe(dest('dist/assets'))
}

//browser sync task
function browsersyncServe(){
    browsersync.init({
        server: {
            baseDir: '.',
        }
    });
}

function browsersyncReload(){
    browsersync.reload();
}

// watch task
function watchTask(){
    watch('**/*.html', series(htmlTask,browsersyncReload));
    watch(['app/styles/**/*.scss','app/styles/**/*.css','app/scripts/**/*.js'],series(
        scssTask,
        processTailwind,
        jsTask,
        browsersyncReload
    ));
}



// gulp default tasks, 執行gulp@commandLine時會依序執行
exports.default = series(
    cleanFolder,
    htmlTask,
    scssTask,
    processTailwind,
    jsTask,
    threeTask,
    staticTask,
    browsersyncServe,
    watchTask
)

