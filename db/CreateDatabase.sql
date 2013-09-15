CREATE DATABASE macadamia_cluster;

USE macadamia_cluster;

CREATE TABLE `shortcuts` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `app_name` varchar(256) NOT NULL DEFAULT '',
  `name` varchar(256) NOT NULL DEFAULT '',
  `shortcut` varchar(256) NOT NULL DEFAULT '',
  `image` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

INSERT INTO shortcuts(id, app_name, name, shortcut, image)
VALUES ('1', 'Photoshop','Copy','Ctrl+C','');

INSERT INTO shortcuts(id, app_name, name, shortcut, image)
VALUES ('2', 'Photoshop','Paste','Ctrl+V','');

INSERT INTO shortcuts(id, app_name, name, shortcut, image)
VALUES ('3', 'Photoshop','Cut','Ctrl+X','');

INSERT INTO shortcuts(id, app_name, name, shortcut, image)
VALUES ('4', 'emacs','Copy','Ctrl+C','');

INSERT INTO shortcuts(id, app_name, name, shortcut, image)
VALUES ('5', 'Photoshop','Duplicate Layer','Ctrl+J','');

SELECT * FROM shortcuts;
