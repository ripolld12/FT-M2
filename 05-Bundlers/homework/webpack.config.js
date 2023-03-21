module.exports = {
    entry: "./app.js", //Aqui coloco el entry point
    output: {
        path: __dirname + "/browser2", //donde quiero que quede. con _dirname indico la carpeta actual y le digo que me cree en esta carta un folder llamado browser
        filename: "bundle.js"

    }
}