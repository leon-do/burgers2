-- Create the database event_saver_db and specified it for use.
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table events.
CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
`burger_name` varchar(255) NOT NULL,
`devoured` tinyint(1) DEFAULT 0,
`date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);


