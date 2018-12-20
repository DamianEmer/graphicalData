-- MySQL dump 10.13  Distrib 8.0.11, for Win64 (x86_64)
--
-- Host: localhost    Database: testing
-- ------------------------------------------------------
-- Server version	8.0.11

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `sicks`
--

DROP TABLE IF EXISTS `sicks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `sicks` (
  `region` varchar(25) NOT NULL,
  `samples_received` int(11) NOT NULL,
  `samples_testable` int(11) NOT NULL,
  `samples_tested` int(11) NOT NULL,
  `samples_in_progress` int(11) NOT NULL,
  `sample_testable` int(11) DEFAULT NULL,
  PRIMARY KEY (`region`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sicks`
--

LOCK TABLES `sicks` WRITE;
/*!40000 ALTER TABLE `sicks` DISABLE KEYS */;
INSERT INTO `sicks` VALUES ('AMAZONAS',9,2,0,2,NULL),('ANTIOQUIA',656,139,94,45,NULL),('ARAUCA',91,17,12,5,NULL),('ATLANTICO',513,136,71,65,NULL),('BOGOTA',32,11,2,9,NULL),('BOLIVAR',568,215,183,32,NULL),('BOYACA',153,71,49,22,NULL),('CALDAS',112,44,39,5,NULL),('CAQUETA',50,22,5,17,NULL),('CASANARE',43,19,10,9,NULL),('CAUCA',17,11,4,7,NULL),('CESAR',104,39,20,19,NULL),('CHOCO',7,4,2,2,NULL),('CORDOBA',209,48,20,28,NULL),('CUNDINAMARCA',925,167,91,76,NULL),('GUAINIA',4,4,4,0,NULL),('GUAVIARE',48,1,1,0,NULL),('HUILA',719,249,80,169,NULL),('IMPORTADOS',6,3,1,2,NULL),('LA GUAJIRA',84,28,12,16,NULL),('MAGDALENA',571,152,70,82,NULL),('META',50,17,6,11,NULL),('NARIÑO',52,17,8,9,NULL),('NORTE DE SANTANDER',1767,746,378,368,NULL),('PUTUMAYO',165,63,50,13,NULL),('QUINDIO',10,5,1,4,NULL),('RISARALDA',165,66,55,11,NULL),('SAN ANDRES',124,103,95,8,NULL),('SANTANDER',155,44,22,22,NULL),('SIN DATO',145,4,2,2,NULL),('SUCRE',245,84,55,29,NULL),('TOLIMA',673,207,141,66,NULL),('VALLE DEL CAUCA',98,26,9,17,NULL),('VAUPES',0,0,0,0,NULL),('VICHADA',4,3,3,0,NULL);
/*!40000 ALTER TABLE `sicks` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-12-20 16:57:48
