var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// watch files for changes and reload
gulp.task('sync', function() {
	browserSync.init(null, {
		proxy: "http://localhost:3000",
		port: 4000
	});

  // Listening the change on front-end port.
	gulp.watch(['views/*.jade', 'public/**/*.styl', 'public/**/*.js'], reload);
});
