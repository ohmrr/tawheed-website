for file in *.jpg; do
  cwebp -q 70 "$file" -o "${file%.*}.webp"
done