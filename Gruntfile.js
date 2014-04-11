'use strict';

module.exports = function (grunt) {

    // Load grunt tasks automatically.
    require('load-grunt-tasks')(grunt);

    // Define the configuration for all the tasks.
    grunt.initConfig({

        // Project settings.
        config: {
            // Configurable paths.
            app: '.',
            dist: 'dist'
        },

        // Watches files for changes and runs tasks based on the changed files.
        watch: {
            gruntfile: {
                files: ['Gruntfile.js']
            },
            compass: {
                files: ['<%= config.app %>/*.{scss,sass}'],
                tasks: ['compass']
            },
            styles: {
                files: ['<%= config.app %>/*.css'],
                tasks: ['newer:autoprefixer']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= config.app %>/*.html',
                    '<%= config.app %>/*.css'
                ]
            }
        },

        // The actual grunt server settings.
        connect: {
            options: {
                port: 9000,
                livereload: 35729,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        '.tmp',
                        '<%= config.app %>'
                    ]
                }
            },
            dist: {
                options: {
                    open: true,
                    base: '<%= config.dist %>',
                    livereload: false
                }
            }
        },

        // Empties folders to start fresh.
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= config.dist %>/*',
                        '!<%= config.dist %>/.git*'
                    ]
                }]
            }
        },

        // Compiles Sass to CSS and generates necessary files if requested.
        compass: {
            all: {
                options: {
                    sassDir: '<%= config.app %>/',
                    cssDir: '<%= config.app %>/'
                }
            }
        },

        // Add vendor prefixed styles.
        autoprefixer: {
            options: {
                browsers: ['last 2 version']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>/',
                    src: '*.css',
                    dest: '<%= config.app %>/'
                }]
            }
        },

        cssmin: {
            all: {
                files: {
                    '<%= config.dist %>/fork.min.css': [
                        '<%= config.app %>/*.css'
                    ]
                }
            }
        },

        copy: {
            all: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= config.app %>',
                    dest: '<%= config.dist %>',
                    src: [
                        '*.{css,scss}'
                    ]
                }]
            }
        },
    });


    grunt.registerTask('serve', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'compass',
            'autoprefixer',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('build', [
        'clean:dist',
        'compass',
        'autoprefixer',
        'cssmin',
        'copy'
    ]);

    grunt.registerTask('default', [
        'build'
    ]);
};
