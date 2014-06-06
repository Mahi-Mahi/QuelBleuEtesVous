// Generated on 2014-05-26 using generator-angular 0.8.0
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  grunt.loadNpmTasks('grunt-html-snapshot');

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    yeoman: {
      // configurable paths
      app: require('./bower.json').appPath || 'app',
      dist: 'dist',
      baseurl: '/quizlesbleus2014'
    },

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['bowerInstall']
      },
      js: {
        files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
        tasks: ['newer:jshint:all'],
        options: {
          livereload: true
        }
      },
      compass: {
        files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
        tasks: ['compass:server', 'autoprefixer']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.app %>/{,*/}*.html',
          '.tmp/styles/{,*/}*.css',
          '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          // open: true,
          base: [
            '.tmp',
            '<%= yeoman.app %>'
          ]
        }
      },
      test: {
        options: {
          port: 9001,
          base: [
            '.tmp',
            'test',
            '<%= yeoman.app %>'
          ]
        }
      },
      dist: {
        options: {
          base: '<%= yeoman.dist %>'
        }
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        ignores: [
          '*xtcore.js'
        ],
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= yeoman.app %>/scripts/{,*/}*.js'
      ],
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/spec/{,*/}*.js']
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          // dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/*',
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      }
    },

    // Automatically inject Bower components into the app
    bowerInstall: {
      app: {
        src: ['<%= yeoman.app %>/index.html'],
        ignorePath: '<%= yeoman.app %>/'
      },
      sass: {
        src: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
        ignorePath: '<%= yeoman.app %>/bower_components/'
      }
    },

    // Compiles Sass to CSS and generates necessary files if requested
    compass: {
      options: {
        sassDir: '<%= yeoman.app %>/styles',
        cssDir: '.tmp/styles',
        generatedImagesDir: '.tmp/images/generated',
        imagesDir: '<%= yeoman.app %>/images',
        javascriptsDir: '<%= yeoman.app %>/scripts',
        fontsDir: '<%= yeoman.app %>/fonts',
        importPath: '<%= yeoman.app %>/bower_components',
        httpImagesPath: '<%= yeoman.baseurl %>/images',
        httpGeneratedImagesPath: '<%= yeoman.baseurl %>/images/generated',
        httpFontsPath: '<%= yeoman.baseurl %>/fonts',
        relativeAssets: false,
        assetCacheBuster: true,
        raw: 'Sass::Script::Number.precision = 10\n'
      },
      dist: {
        options: {
          generatedImagesDir: '<%= yeoman.dist %>/images/generated',
          httpImagesPath: '<%= yeoman.baseurl %>/images',
          httpGeneratedImagesPath: '<%= yeoman.baseurl %>/images/generated',
          httpFontsPath: '<%= yeoman.baseurl %>/fonts',
          debugInfo: false,
          outputStyle: 'expanded'
        }
      },
      server: {
        options: {
          debugInfo: true
        }
      }
    },

    // Renames files for browser caching purposes
    rev: {
      dist: {
        files: {
          src: [
            '<%= yeoman.dist %>/scripts/{,*/}*.js',
            '<%= yeoman.dist %>/styles/{,*/}*.css',
            // '<%= yeoman.dist %>/images/{,*/}bg-*.{png,jpg,jpeg,gif,webp,svg}',
            // '<%= yeoman.dist %>/images/footer/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
            // '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
            // '<%= yeoman.dist %>/fonts/*'
          ]
        }
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: '<%= yeoman.app %>/index.html',
      options: {
        dest: '<%= yeoman.dist %>',
        flow: {
          html: {
            steps: {
              js: ['concat', 'uglifyjs'],
              css: ['cssmin']
            },
            post: {}
          }
        }
      }
    },

    // Performs rewrites based on rev and the useminPrepare configuration
    usemin: {
      html: ['<%= yeoman.dist %>/{,*/}*.html'],
      css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
      options: {
        assetsDirs: ['<%= yeoman.dist %>']
      }
    },

    // The following *-min tasks produce minified files in the dist folder
    cssmin: {
      options: {
        root: '<%= yeoman.app %>'
      }
    },

    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },

    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: ['*.html', 'views/{,*/}*.html'],
          dest: '<%= yeoman.dist %>'
        }]
      }
    },

    // ngmin tries to make the code safe for minification automatically by
    // using the Angular long form for dependency injection. It doesn't work on
    // things like resolve or inject so those have to be done manually.
    ngmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/scripts',
          src: '*.js',
          dest: '.tmp/concat/scripts'
        }]
      }
    },

    // Replace Google CDN references
    cdnify: {
      dist: {
        html: ['<%= yeoman.dist %>/*.html']
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            '*.html',
            'views/{,*/}*.html',
            'images/{,*/}*.{webp}',
            'images/**',
            'fonts/*',
            'data/*',
            'backend/*'
          ]
        }, {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= yeoman.dist %>/images',
          src: ['generated/*']
        }]
      },
      styles: {
        expand: true,
        cwd: '<%= yeoman.app %>/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
        'compass:server'
      ],
      test: [
        'compass'
      ],
      dist: [
        'compass:dist',
        'imagemin',
        'svgmin'
      ]
    },

    // By default, your `index.html`'s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    // cssmin: {
    //   dist: {
    //     files: {
    //       '<%= yeoman.dist %>/styles/main.css': [
    //         '.tmp/styles/{,*/}*.css',
    //         '<%= yeoman.app %>/styles/{,*/}*.css'
    //       ]
    //     }
    //   }
    // },
    // uglify: {
    //   dist: {
    //     files: {
    //       '<%= yeoman.dist %>/scripts/scripts.js': [
    //         '<%= yeoman.dist %>/scripts/scripts.js'
    //       ]
    //     }
    //   }
    // },
    // concat: {
    //   dist: {}
    // },

    uglify: {
      options: {
        mangle: false
      }
    },

    rsync: {
      options: {
        args: ["--verbose"],
        exclude: [".git*", "*.scss", "node_modules", ".svn"],
        recursive: true
      },
      staging: {
        options: {
          src: "./dist/",
          dest: "/home/askmedia/QuelBleuEtesVous/quizlesbleus2014",
          host: "root@vps.mahi-mahi.fr",
          syncDestIgnoreExcl: true
        }
      },
      prod: {
        options: {
          src: "../dist/",
          dest: "/var/www/site",
          host: "user@live-host",
          syncDestIgnoreExcl: true
        }
      }
    },

    exec: {
      removeMissingFiles: {
        cmd: "svn rm $( svn status | sed -e '/^!/!d' -e 's/^!//' )"
      },
      addFiles: {
        cmd: "svn add $( svn status )"
      },
      commitFiles: {
        cmd: "svn commit -m ''"
      }
    },

    htmlSnapshot: {
      debug: {
        options: {
          snapshotPath: 'dist',
          sitePath: 'http://quelbleuetesvous-dist.localhost/',
          msWaitForPages: 1000,
          fileNamePrefix: '',
          sanitize: function(requestUri) {
            //returns 'index.html' if the url is '/', otherwise a prefix
            if (/\/$/.test(requestUri)) {
              return 'index.html';
            } else {
              return requestUri.replace(/quizlesbleus2014\/#\//g, '/').replace(/\/\//g, '/').replace(/\/1/g, '/index');
            }
          },
          //if you would rather not keep the script tags in the html snapshots
          //set `removeScripts` to true. It's false by default
          removeScripts: true,
          //set `removeLinkTags` to true. It's false by default
          removeLinkTags: false,
          //set `removeMetaTags` to true. It's false by default
          removeMetaTags: false,
          //Replace arbitrary parts of the html
          replaceStrings: [{
            '</body>': function() {
              return grunt.file.read('tracker.js.html') + '</body>';
            }
          }, {
            '/old/path/': '/new/path'
          }],
          // allow to add a custom attribute to the body
          bodyAttr: 'data-prerendered',
          // a list of cookies to be put into the phantomjs cookies jar for the visited page
          cookies: [
            // {"path": "/", "domain": "localhost", "name": "lang", "value": "en-gb"}
          ],
          //here goes the list of all urls that should be fetched
          urls: [
            '<%= yeoman.baseurl %>/#/resultat/hugo-lloris/1',
            '<%= yeoman.baseurl %>/#/resultat/bacary-sagna/1',
            '<%= yeoman.baseurl %>/#/resultat/mathieu-debuchy/1',
            '<%= yeoman.baseurl %>/#/resultat/raphael-varane/1',
            '<%= yeoman.baseurl %>/#/resultat/mamadou-sakho/1',
            '<%= yeoman.baseurl %>/#/resultat/laurent-koscielny/1',
            '<%= yeoman.baseurl %>/#/resultat/patrice-evra/1',
            '<%= yeoman.baseurl %>/#/resultat/yohan-cabaye/1',
            '<%= yeoman.baseurl %>/#/resultat/paul-pogba/1',
            '<%= yeoman.baseurl %>/#/resultat/blaise-matuidi/1',
            '<%= yeoman.baseurl %>/#/resultat/moussa-sissoko/1',
            '<%= yeoman.baseurl %>/#/resultat/antoine-griezmann/1',
            '<%= yeoman.baseurl %>/#/resultat/mathieu-valbuena/1',
            '<%= yeoman.baseurl %>/#/resultat/franck-ribery/1',
            '<%= yeoman.baseurl %>/#/resultat/loic-remy/1',
            '<%= yeoman.baseurl %>/#/resultat/karim-benzema/1',
            '<%= yeoman.baseurl %>/#/resultat/olivier-giroud/1',
            '<%= yeoman.baseurl %>/#/resultat/mickael-landreau/1',
            '<%= yeoman.baseurl %>/#/resultat/lucas-digne/1',
            '<%= yeoman.baseurl %>/#/resultat/eliaquim-mangala/1',
            '<%= yeoman.baseurl %>/#/resultat/rio-mavuba/1',
            '<%= yeoman.baseurl %>/#/resultat/clement-grenier/1',
            '<%= yeoman.baseurl %>/#/resultat/stephane-ruffier/1'
          ]
        }
      }
    }

  });

  grunt.registerTask('createConfig', function(target) {
    grunt.file.write("./app/scripts/services/config.js", '"use strict";' + "\n" + 'angular.module("quelBleuEtesVousApp")' +
      '.constant("prod", ' + ((target === 'dist') ? 'true' : 'false') + ')' +
      ';');
  });

  grunt.registerTask('serve', function(target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'createConfig',
      'clean:server',
      'bowerInstall',
      'concurrent:server',
      'autoprefixer',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('server', function(target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve:' + target]);
  });

  grunt.registerTask('test', [
    'clean:server',
    'concurrent:test',
    'autoprefixer',
    'connect:test'
  ]);

  grunt.registerTask('build', [
    'createConfig:dist',
    'clean:dist',
    'bowerInstall',
    'useminPrepare',
    'concurrent:dist',
    'autoprefixer',
    'concat',
    'ngmin',
    'copy:dist',
    'cdnify',
    'cssmin',
    'uglify',
    'rev',
    'usemin',
    'htmlmin',
    'htmlSnapshot',
    'rsync:staging',
    // 'commit',
    'createConfig:dev'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'test',
    'build'
  ]);
};