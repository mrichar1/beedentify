#!/bin/bash
OUTPUT="[\n"
for file in img/*; do OUTPUT=${OUTPUT}"{\"active\":false, \"url\": \"assets/${file}\"},\n"; done
# Strip last comma
OUTPUT=${OUTPUT::-3}
OUTPUT=${OUTPUT}"\n]"
echo -e $OUTPUT
