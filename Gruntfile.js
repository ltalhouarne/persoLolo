module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            css: {
                src: [
                    'css/normalize.css', 'css/demo.css', 'css/component.css','css/style.css'
                ],
                dest: 'css/combined.css'
            },
            js: {
                src : [
                    'js/main.js','js/modernizr.js','js/jquery.superslides.min.js','js/jqBootstrapValidation.js', 'js/contact_me.js'
                ],
                dest : 'js/combined.js'
            }
        },
        cssmin : {
            css:{
                src: 'css/combined.css',
                dest: 'css/lolo.min.css'
            }
        },
        uglify : {
            js: {
                files: {
                    'js/lolo.js' : [ 'js/combined.js' ]
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', [ 'concat:css', 'cssmin:css', 'concat:js', 'uglify:js' ]);
};
