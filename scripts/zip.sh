#!/bin/bash

printf "%s\n" "Starting archiving with zip..."

find . -type f ! -path "*/node_modules/*" ! -path "*/.git/*" ! -path "*/.turbo/*" ! -path "*/.venv/*" ! -path "*/.next/*" ! -path "*/__pycache__/*" -print | zip archive.zip -@

printf "%s\n" "Zipping was successful..."