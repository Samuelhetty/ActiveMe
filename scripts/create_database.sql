sudo service mysql start
mysql -u root -p
CREATE USER 'ActiveMeUser'@'localhost' IDENTIFIED BY '';
CREATE DATABASE active_me_user_db;
GRANT ALL PRIVILEGES ON active_me_user_db.* TO 'ActiveMeUser'@'localhost';
FLUSH PRIVILEGES;
USE ActiveMeUser;
CREATE TABLE ActiveMeUser.users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
SHOW TABLES;
SHOW CREATE TABLE users;
EXIT;