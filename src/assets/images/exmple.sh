#!/bin/bash

find ./ -type f -name "*.JPG" | while read file; do
    magick "$file" -strip -quality 85 "${file%.*}.JPG"
done
