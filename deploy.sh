#!/bin/sh

cd /home/cseadmin/IITHCompilers 
bundle exec jekyll build

rsync -avr  --delete-after --delete-excluded _site/ /var/www/html/compilers/
#rsync -avr --rsh='ssh -p2222' --delete-after --delete-excluded _site/ cseadmin@compilers.cse.iith.ac.in:/var/www/html/compilers/
