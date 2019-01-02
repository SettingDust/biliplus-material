const gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    prettier = require('gulp-prettier'),
    webpack = require('webpack'),
    moment = require('moment');
const colors = require('colors');

const paths = {
    stylus: {
        all: './src/style/**/*.styl',
        main: './src/style/*.styl'
    },
    js: {
        all: ['./javascript/**/*.js', './*.js', './dist/*.js']
    }
};

gulp.task('format:js', () => {
    return gulp
        .src(paths.js.all)
        .pipe(prettier())
        .pipe(gulp.dest(file => file.base));
});

gulp.task('format', gulp.series(gulp.parallel('format:js')));

gulp.task('stylus', () => {
    return gulp
        .src(paths.stylus.main)
        .pipe(stylus())
        .pipe(gulp.dest(file => file.base));
});

gulp.task('stylus:watch', () =>
    gulp.watch(paths.stylus.all).on('change', gulp.series('stylus'))
);

gulp.task('webpack', callback =>
    webpack(require('./webpack.config'), (err, stats) => {
        callback();
        if (err) console.log(err);
        console.log(
            `[${colors.grey(`${moment().format('HH:mm:ss')}`)}][${colors.grey(
                'Webpack'
            )}] Build '${colors.cyan(stats.hash)}' after ${colors.magenta(
                `${moment(stats.endTime).diff(moment(stats.startTime))}ms`
            )}`
        );
    })
);
gulp.task('webpack:dev', () =>
    webpack(require('./webpack.dev.config'), (err, stats) => {
        if (err) console.log(err);
        console.log(
            `[${colors.grey(`${moment().format('HH:mm:ss')}`)}][${colors.grey(
                'Webpack'
            )}] Build '${colors.cyan(stats.hash)}' after ${colors.magenta(
                `${moment(stats.endTime).diff(moment(stats.startTime))}ms`
            )}`
        );
    })
);

gulp.task('build', gulp.series('stylus', 'webpack', 'format'));

gulp.task(
    'default',
    gulp.series('stylus', gulp.parallel('stylus:watch', 'webpack:dev'))
);
