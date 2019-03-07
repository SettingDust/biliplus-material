const gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    prettier = require('gulp-prettier'),
    webpack = require('webpack'),
    moment = require('moment'),
    monkey = require('./monkey.dev.config'),
    fs = require('fs');
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

gulp.task('monkey', () => {
    if (!fs.existsSync('test')) fs.mkdirSync('test');
    fs.writeFileSync('./test/header.js', monkey.buildedHeader());

    console.log(
        `[${colors.grey(`${moment().format('HH:mm:ss')}`)}] ${colors.green(
            'Copy the content of test/header.js to your TamperMonkey plugin'
        )}`
    );
});

gulp.task('monkey:watch', () => {
    gulp.watch('./monkey.config.js').on('change', gulp.series('monkey'));
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
    gulp.series('stylus', gulp.parallel('stylus:watch', 'webpack:dev', 'monkey', 'monkey:watch'))
);
