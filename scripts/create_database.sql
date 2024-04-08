systemctl start mysql
mysql -u root -p
CREATE USER 'ActiveMe'@'localhost' IDENTIFIED BY '';
CREATE DATABASE active_me_db;
GRANT ALL PRIVILEGES ON active_me_db.* TO 'ActiveMe'@'localhost';
FLUSH PRIVILEGES;
EXIT;