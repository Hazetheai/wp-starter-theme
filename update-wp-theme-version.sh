#!/bin/bash

# Check if the style file argument is provided
if [ -z "$1" ]; then
  echo "Error: Please provide the path to the style.css file as an argument."
  exit 1
fi

# Get the absolute path to the style.css file
style_file=$(readlink -f "$1" 2>/dev/null || realpath "$1" 2>/dev/null || echo "$1")

# Check if the style_file exists
if [ ! -e "$style_file" ]; then
  echo "Error: The file $style_file does not exist."
  exit 1
fi

# Get the version argument or auto-increment
if [ -n "$2" ]; then
  new_version="$2"
else
  current_version=$(grep -o 'Version: [0-9.]*' "$style_file" | sed 's/Version: //')
  if [ -n "$current_version" ]; then
    IFS='.' read -r major minor patch <<< "$current_version"
    new_patch=$((patch + 1))
    new_version="$major.$minor.$new_patch"
  else
    echo "Error: Could not determine the current version in $style_file"
    exit 1
  fi
fi

# Use sed to replace the version number in the style.css file
sed -i "" "s/Version: [0-9.]*$/Version: $new_version/" "$style_file"

echo "WordPress theme version updated to $new_version in $style_file"

# Update the version in the package.json
if [ -f "package.json" ]; then
  current_version=$(grep -o '"version": "[0-9.]*",' package.json | sed 's/"version": "//' | sed 's/",//')
  if [ -n "$current_version" ]; then
    sed -i "" "s/\"version\": \"$current_version\",/\"version\": \"$new_version\",/" package.json
    echo "Package.json version updated to $new_version"
  else
    echo "Error: Could not determine the current version in package.json"
  fi
else
  echo "Warning: package.json file not found. Package version not updated."
fi
