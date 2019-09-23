#!/usr/bin/node

function text_display(arg)  {
  return arg == "--text"
}

if (process.argv.includes("--text")) {
  var text_arg_index = process.argv.findIndex(text_display);
  console.log(process.argv[text_arg_index + 1])
}
