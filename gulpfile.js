
// Requires

var gulp = require('gulp');
var del = require('del');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-butternut');
var cleanCSS = require('gulp-clean-css');

//
// Clean
// ==========================================================================

// Clean docs Folder
gulp.task('clean:docs', function() {
    return del.sync('docs');
});

//
// Browser Preview
// ==========================================================================

// Browser Preview and Synchronisation
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'docs',
        },
        port: '8081',
    });
});

//
// CSS
// ==========================================================================

// Compile SASS
gulp.task('sass', function(){
  return gulp.src('app/scss/styles.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
        stream: true
    }))
});

// Minify CSS
gulp.task('minify-css', function() {
  return gulp.src('app/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('docs/css'));
});

// Migrate CSS Plugins
gulp.task('css-plugins', function() {
    return gulp.src('app/css/plugins/*.css')
        .pipe(gulp.dest('docs/css/plugins'))
});

// CSS Build Sequence - Compile Sass, then Minify CSS
gulp.task('build-css', gulp.series('sass', 'minify-css', 'css-plugins'));


//
// JS
// ==========================================================================

// Global
// ======

// Concatenate JS Files into one main.js file
gulp.task('concat', function () {
    return gulp.src(['app/js/_dev/**/*.js'])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('app/js'));
});

// Compress and migrate main.js file
gulp.task('compress', function () {
    return gulp.src('app/js/*.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('docs/js'));
});

// Migrate JS Plugins
gulp.task('js-plugins', function() {
    return gulp.src('app/js/plugins/*.js')
        .pipe(gulp.dest('docs/js/plugins'));
});

// JS Build Sequence
gulp.task('build-js', gulp.series('concat', 'compress', 'js-plugins'));

//
// Migrate HTML, Fonts, Images and Icons
// ==========================================================================

// Copy Fonts to 'docs'
gulp.task('fonts', function() {
    return gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('docs/fonts'));
});

// Copy HTML to 'docs'
gulp.task('html', function() {
    return gulp.src(['app/*.{html,htm,php}'])
        .pipe(gulp.dest('docs'));
});

// Copy Images to 'docs'
gulp.task('images', function() {
    return gulp.src('app/img/**/*')
        .pipe(gulp.dest('docs/img'));
});

// Copy icons to 'docs'
gulp.task('icons', function() {
    return gulp.src('app/*.{png,ico}')
        .pipe(gulp.dest('docs'));
});

// Copy data to 'docs'
gulp.task('data', function(){
    return gulp.src('app/data/*.{json,xml}')
        .pipe(gulp.dest('docs/data'));
})

// Migration Sequence
gulp.task('migrate-assets', gulp.series('fonts', 'html', 'images', 'icons', 'data'));

//
// Main Build Sequence
// ==========================================================================

gulp.task('global-build-sequence', gulp.series('migrate-assets', 'build-js', 'build-css', 'browserSync'));

//
// Global Gulp Build and Watch Task
// ==========================================================================

gulp.task('default', gulp.series('global-build-sequence', function() {
    
    // Watch SCSS Files for Changes
    gulp.watch('app/scss/**/*.scss', ['build-css']);

    // Watch JS Files for Changes
    gulp.watch('app/js/**/*.js', ['build-js']);

    // Watch HTML, HTM and PHP files for Changes
    gulp.watch('app/*.{html,htm,php}', ['html']);

    // Reloads the browser whenever HTML or JS files change
    gulp.watch('docs/css/*.css', browserSync.reload);
    gulp.watch('docs/*.{html,htm,php}', browserSync.reload); 
    gulp.watch('docs/js/**/*.js', browserSync.reload); 
}));
