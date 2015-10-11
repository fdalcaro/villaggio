#!/bin/bash
sshpass -p 4LfdGKh% rsync --delete --exclude='locale/' --exclude='*~' --exclude='*.bash' -azv -e "ssh -p 30022" ~/Documenti/Sistemi_Informativi/Esame/progetto/ fdalcaro@localhost:tecweb/public_html
