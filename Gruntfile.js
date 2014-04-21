'use strict';

module.exports = function (grunt) {

    // Load grunt tasks automatically.
    require('load-grunt-tasks')(grunt);

    // Define the configuration for all the tasks.
    grunt.initConfig({

        // Watches files for changes and runs tasks based on the changed files.
        watch: {
            gruntfile: {
                files: ['Gruntfile.js']
            },
            sass: {
                files: ['{,*/}*.{scss,sass}'],
                tasks: ['sass:dev']
            },
            styles: {
                files: ['*.css'],
                tasks: ['newer:autoprefixer']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '*.html',
                    '*.css'
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
                        '.'
                    ]
                }
            },
            dist: {
                options: {
                    open: true,
                    base: '.',
                    livereload: false
                }
            }
        },

        // Empties folders to start fresh.
        clean: {
            all: {
                files: [{
                    src: [
                        '*.css',
                    ]
                }]
            }
        },

        sass: {
            options: {
                loadPath: 'scss'
            },
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'fork.css': 'main.scss'
                }
            },
            distCompress: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'fork.min.css': 'fork.css'
                }
            },
            dev: {
                options: {
                    lineNumbers: true,
                    style: 'expanded'
                },
                files: {
                    'fork.css': 'main.scss'
                }
            }
        },

        // Add vendor prefixed styles.
        autoprefixer: {
            options: {
                browsers: ['last 2 versions']
            },
            all: {
                src: 'fork.css',
                dest: 'fork.css'
            }
        }
    });


    grunt.registerTask('serve', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'sass:dev',
            'autoprefixer',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('build', [
        'clean:all',
        'sass:dist',
        'autoprefixer',
        'sass:distCompress'
    ]);

    grunt.registerTask('default', [
        'build'
    ]);
};
