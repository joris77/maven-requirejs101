{
    appDir: "../webapp",
    baseUrl: "js",
    mainConfigFile: "../webapp/js/requireconfig.js",
    dir: "../../../target/requirejs101",
    skipDirOptimize : true,
    keepBuildDir : true,
    modules: [
        {
            name: "code",
            include: ["dependency","knockout","jqueryui"]
        }
    ]
}