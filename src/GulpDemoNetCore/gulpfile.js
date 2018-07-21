/// <binding  />
var gulp = require('gulp');

//-----Required Packages.
//Using package to minify html 
minifyHtml = require("gulp-minify-html");
//Using package to concat files 
concat = require("gulp-concat");
//Using package to minifying files 
uglify = require("gulp-uglify");
//Using package to minifying css files 
cssmin = require("gulp-cssmin");
//Using package to minifying files 
ext_replace = require("gulp-ext-replace");


var paths = {
    webroot: "./wwwroot/"
};

//-----Source Files Paths--------
//Getting Path of Htmlfiles to Minifying
paths.html = paths.webroot + "Htmlfiles/**/*.html";
//Getting Path of Javascript files 
paths.js = paths.webroot + "js/**/*.js";
//Getting Path of Javascript files 
paths.css = paths.webroot + "css/**/*.css";

//-----Destination Paths for compressed files--------
//Path to Writing minified Files after Minifying
paths.htmlDestination = paths.webroot + "Compressedfile";
//Path to Writing concatenated Files after concatenating
paths.jsDestination = paths.webroot + "ConcatenatedJsfiles";
//Path to Writing minified Files after minifying
paths.jsMinifiedDestination = paths.webroot + "MinifiedJavascriptfiles";
//Path to Writing minified Files after minifying
paths.cssDestination = paths.webroot + "MinifiedCssfiles";
//Path to Writing Changed extensions files
paths.extensionDestination = paths.webroot + "Changedextensionfiles";

var newconcat = "concatmain.js"; // Name of new file

gulp.task('minify-html', function () {   // path to your files
    gulp.src(paths.html)
   // Minifying files
   .pipe(minifyHtml())
   // Writing files to Destination
   .pipe(gulp.dest(paths.htmlDestination));
});

// Task Name [concatfiles]
gulp.task('concatfiles', function () {   // path to your files
    gulp.src(paths.js)
   // concat files
   .pipe(concat(newconcat))
   // Writing files to Destination
   .pipe(gulp.dest(paths.jsDestination));
});

// Task Name [MinifyingTask]
gulp.task('MinifyingTask', function () {   // path to your files
    gulp.src(paths.js)
   // concat files
   .pipe(uglify())
   // Writing files to Destination
   .pipe(gulp.dest(paths.jsMinifiedDestination));
});

// Task Name [MinifyingTask]
gulp.task('Minifying-Css-Task', function () {   // path to your files
    gulp.src(paths.css)
   .pipe(cssmin())
   // Writing files to Destination
   .pipe(gulp.dest(paths.cssDestination));
});

// Task Name [Changing Extension Javascript]
gulp.task('ChangingExtensionJavascriptTask', function () {
    // path to your files
    gulp.src(paths.js)
   // change file extenstion from .js to .min.js
   .pipe(ext_replace('.min.js'))
   // Writing files to Destination
   .pipe(gulp.dest(paths.extensionDestination));
});

// Task Name [Changing Extension Css]
gulp.task('ChangingExtensionCssTask', function () {
    // path to your files
    gulp.src(paths.css)
   // change file extenstion from css to .min.css
   .pipe(ext_replace('.min.css'))
   // Writing files to Destination
   .pipe(gulp.dest(paths.extensionDestination));
});

//----Final sample task to run manually-----
//// Main task to Call for Minifying html files
// gulp.task("demoHtml", ["minify-html"]);
//// Main task to Call for concatenating js files
// gulp.task("demoConcatJs", ["concatfiles"]);
//// Main task to Call for Minifying Task js files
// gulp.task("demoMinifiedJs", ["MinifyingTask"]);
// // Main task to Call for Minifying Task js files
// gulp.task("demoMinifiedCss", ["Minifying-Css-Task"]);
// //Syntax If you want to run more than one task sequentially
// gulp.task("MainTask", ["ChangingExtensionJavascriptTask", "ChangingExtensionCssTask"]);