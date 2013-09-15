# ************************************************************
# Sequel Pro SQL dump
# Version 4096
#
# http://www.sequelpro.com/
# http://code.google.com/p/sequel-pro/
#
# Host: localhost (MySQL 5.5.27)
# Database: macadamia_cluster
# Generation Time: 2013-09-15 11:08:15 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table shortcuts
# ------------------------------------------------------------

DROP TABLE IF EXISTS `shortcuts`;

CREATE TABLE `shortcuts` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `app_name` varchar(256) NOT NULL DEFAULT '',
  `name` varchar(256) NOT NULL DEFAULT '',
  `shortcut` varchar(256) NOT NULL DEFAULT '',
  `image` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `shortcuts` WRITE;
/*!40000 ALTER TABLE `shortcuts` DISABLE KEYS */;

INSERT INTO `shortcuts` (`id`, `app_name`, `name`, `shortcut`, `image`)
VALUES
	(1,'Photoshop','Zoom','Z','icons/photoshop/zoom.png'),
	(2,'Photoshop','Magic Wand','W','icons/photoshop/wand.png'),
	(3,'Photoshop','Text','T','icons/photoshop/text.png'),
	(5,'Photoshop','Slice','C','icons/photoshop/slice.png'),
	(6,'Photoshop','Move','V','icons/photoshop/arrow.png'),
	(7,'Photoshop','Brush','B','icons/photoshop/brush.png'),
	(8,'Photoshop','Crop','C','icons/photoshop/crop.png'),
	(9,'Photoshop','Eraser','E','icons/photoshop/eraser.png'),
	(10,'Photoshop','Eyedropper','I','icons/photoshop/eyedropper.png'),
	(11,'Photoshop','Gradient','G','icons/photoshop/gradient.png'),
	(12,'Photoshop','Hand','H','icons/photoshop/hand.png'),
	(13,'Photoshop','Lasso','L','icons/photoshop/lasso.png'),
	(14,'Photoshop','Direct Selection','A','icons/photoshop/path.png'),
	(15,'Photoshop','Pen','P','icons/photoshop/pen.png'),
	(17,'Photoshop','Rectangular Marquee','M','icons/photoshop/select.png'),
	(18,'Photoshop','Shape','U','icons/photoshop/shape.png'),
	(19,'Gmail','Go to Inbox','G+I','icons/gmail/googlemail-128.png'),
	(20,'Gmail','Go to Drafts','G+D','icons/gmail/googlemail-128.png'),
	(21,'Gmail','Go to Sent Items','G+T','icons/gmail/googlemail-128.png'),
	(22,'Gmail','Go to Contacts','G+C','icons/gmail/googlemail-128.png'),
	(23,'Gmail','Select All Conversations','*+A','icons/gmail/googlemail-128.png'),
	(24,'Gmail','Deselect All Converesations','*+N','icons/gmail/googlemail-128.png'),
	(25,'Gmail','Open Conversation','O','icons/gmail/googlemail-128.png'),
	(26,'Gmail','Read Previous Message','P','icons/gmail/googlemail-128.png'),
	(27,'Gmail','Read Next Message','N','icons/gmail/googlemail-128.png'),
	(28,'Gmail','Compose','C','icons/gmail/googlemail-128.png'),
	(29,'Gmail','Search Mail','/','icons/gmail/googlemail-128.png'),
	(30,'Gmail','Select Conversation','X','icons/gmail/googlemail-128.png'),
	(31,'Gmail','Archive','E','icons/gmail/googlemail-128.png'),
	(32,'Gmail','Delete','#','icons/gmail/googlemail-128.png'),
	(33,'Gmail','Reply','R','icons/gmail/googlemail-128.png'),
	(34,'Gmail','Forward','F','icons/gmail/googlemail-128.png'),
	(35,'Photoshop','Desaturate','Shift+Ctrl+D','icons/photoshop/desaturate.png'),
	(36,'Photoshop','Merge Layers','Ctrl+E','icons/photoshop/mergelayers.png'),
	(37,'Photoshop','New Layer','Shift+Ctrl+N','icons/photoshop/newlayer.png');

/*!40000 ALTER TABLE `shortcuts` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
