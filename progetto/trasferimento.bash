#!/bin/bash
sshpass -p 5LfdGKh% rsync --delete --exclude='locale/' --exclude='villaggio/' --exclude='*~' --exclude='*.bash' -azv -e "ssh -p 30022" ~/Documenti/Sistemi_Informativi/Esame/progetto/ fdalcaro@localhost:tecweb/public_html
