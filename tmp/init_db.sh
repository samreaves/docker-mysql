#!/bin/bash
/usr/bin/mysqld_safe &
sleep 5000
mysql -uadmin -padmin -e "CREATE DATABASE brnr"
mysql -uadmin -padmin brnr < ./seed.sql