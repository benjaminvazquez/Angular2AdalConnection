﻿var gulp = require('gulp'),
gp_clean = require('gulp-clean'),
gp_concat = require('gulp-concat'),
gp_sourcemaps = require('gulp-sourcemaps'),
gp_typescript = require('gulp-typescript'),
gp_uglify = require('gulp-uglify');

/// Define paths
var srcPaths = {
    app: ['Scripts/app/main.ts', 'Scripts/app/**/*.ts'],
    js: ['Scripts/js/**/*.js',
        'node_modules/core-js/client/shim.min.js',
        'node_modules/zone.js/dist/zone.js',
        'node_modules/reflect-metadata/Reflect.js',
        'node_modules/systemjs/dist/system.src.js',
        'node_modules/typescript/lib/typescript.js',
        'Scripts/systemjs.config.js'
    ],
    js_angular: [
        'node_modules/@angular/**/*.js'
    ],
    js_rxjs: [
        'node_modules/rxjs/**/*.js'
    ],
    js_adal2: [
        'node_modules/ng2-adal/**/*.js'
    ],
    js_adal: [
        'node_modules/adal-angular/**/*.js'
    ]
};

var destPaths = {
    app: 'wwwroot/app/',
    js: 'wwwroot/js/',
    js_angular: 'wwwroot/js/@angular/',
    js_rxjs: 'wwwroot/js/rxjs/',
    js_adal2: 'wwwroot/js/ng2-adal',
    js_adal: 'wwwroot/js/adal-angular'
};

// Compile, minify and create sourcemaps all TypeScript files and place them to wwwroot/app, together with their js.map files.
gulp.task('app', function () {
    return gulp.src(srcPaths.app)
    .pipe(gp_sourcemaps.init())
    .pipe(gp_typescript(require('./tsconfig.json').compilerOptions))
    .pipe(gp_uglify({ mangle: false }))
    .pipe(gp_sourcemaps.write('/'))
    .pipe(gulp.dest(destPaths.app));
});

// Delete wwwroot/app contents
gulp.task('app_clean', function () {
    return gulp.src(destPaths.app + "*", { read: false })
    .pipe(gp_clean({ force: true }));
});

// Copy all JS files from external libraries to wwwroot/js
gulp.task('js', function () {
    gulp.src(srcPaths.js_angular)
        .pipe(gulp.dest(destPaths.js_angular));
    gulp.src(srcPaths.js_rxjs)
    .pipe(gulp.dest(destPaths.js_rxjs));
    gulp.src(srcPaths.js_adal2)
    .pipe(gulp.dest(destPaths.js_adal2));
    gulp.src(srcPaths.js_adal)
    .pipe(gulp.dest(destPaths.js_adal));
    return gulp.src(srcPaths.js)
    // .pipe(gp_uglify({ mangle: false })) // disable uglify
    // .pipe(gp_concat('all-js.min.js')) // disable concat
    .pipe(gulp.dest(destPaths.js));
});

// Delete wwwroot/js contents
gulp.task('js_clean', function () {
    return gulp.src(destPaths.js + "*", { read: false })
    .pipe(gp_clean({ force: true }));
});

// Watch specified files and define what to do upon file changes
gulp.task('watch', function () {
    gulp.watch([srcPaths.app, srcPaths.js], ['app', 'js']);
});

// Global cleanup task
gulp.task('cleanup', ['app_clean', 'js_clean', 'css_clean']);

// Define the default task so it will launch all other tasks
gulp.task('default', ['app', 'js', 'watch']);