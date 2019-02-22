const gulp = require("gulp")
const apidoc = require("gulp-apidoc")

gulp.task("apidoc", done => {
  apidoc(
    {
      src: "./src/routes",
      dest: "./src/docs/api"
    },
    done
  )
})

gulp.task("watch", () => {
  gulp.watch(["./src/routes/**"], ["apidoc"])
})
