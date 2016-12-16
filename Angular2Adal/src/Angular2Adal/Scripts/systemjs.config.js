(function (global) {
    // map tells the System loader where to look for things
    var map = {
        'app': 'app',
        '@angular': 'js/@angular',
        'rxjs': 'js/rxjs',
        'ng2-adal': 'js/ng2-adal',
        'adal': 'js/adal-angular/lib',
        '@angular/material': 'js/@angular/material/material.umd.js'
    };
    // packages tells the System loader which filename and/or extensions to look for by default (when none are specified)
    var packages = {
        'app': { main: 'main.js', defaultExtension: 'js' },
        'rxjs': { defaultExtension: 'js' },
        'ng2-adal': { main: 'core.js', defaultExtension: 'js' },
        'adal': { main: 'adal.js', defaultExtension: 'js' }
    };
    // configure @angular packages
    var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'upgrade',
    'router',
    'forms'
    ];
    function packIndex(pkgName) {
        packages['@angular/' + pkgName] = {
            main: 'index.js',
            defaultExtension: 'js'
        };
    }
    function packUmd(pkgName) {
        packages['@angular/' + pkgName] = {
            main: '/bundles/' + pkgName +
            '.umd.js', defaultExtension: 'js'
        };
    };
    var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
    ngPackageNames.forEach(setPackageConfig);
    var config = {
        map: map,
        packages: packages
    }
    System.config(config);
})(this);