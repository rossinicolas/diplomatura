-- MySQL dump 10.19  Distrib 10.3.31-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: basquetdiplomatura
-- ------------------------------------------------------
-- Server version	10.3.31-MariaDB-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `novedades`
--

DROP TABLE IF EXISTS `novedades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `novedades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) NOT NULL,
  `subtitulo` text DEFAULT NULL,
  `cuerpo` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `novedades`
--

LOCK TABLES `novedades` WRITE;
/*!40000 ALTER TABLE `novedades` DISABLE KEYS */;
INSERT INTO `novedades` VALUES (1,'ASAMBLEA ANUAL ORDINARIA','Convocatoria','“Convocase a los socios del Club Atlético Estudiantes para la Asamblea General Ordinaria (conforme art. 27 del Estatuto) que tendrá lugar el día Domingo 19 de septiembre del 2021 a las 08:30hs en la Sede Central del Club, sita en Los Vascos 729 de Paraná, para tratar los siguientes temas: ORDEN DEL DÍA: 1) Constitución de la Asamblea y designación de dos socios para que juntamente con Presidente y Secretario General, para que firmen el acta respectiva; 2) Consideración de la Memoria del ejercicio vencido; 3) Consideración del Balance de la Tesorería ejercicio vencido; 4) Informe de la Comisión Fiscalizadora; 5) Renovación parcial de las siguientes autoridades: Secretario de Actas, Pro-Tesorero, vocal primero y vocal tercero titular, todos los vocales suplentes (cinco) y Todos los miembros de la Comisión Fiscalizadora (tres miembros titulares y dos suplentes).- Se fija horario para que los socios ejerciten su derecho al voto de la hora 10 a la hora 16:00hs Hasta el día 3 de septiembre a la hora 12:00hs, podrán presentarse las listas de candidatos, en Secretaría del Club.- (Art.19 Estatuto-) Art.25 del Estatuto del CAE: Cuando se presentare una sola lista en condiciones estatutarias, la misma quedará proclamada en la Asamblea sin necesidad de realizar el acto eleccionario.- Comuníquese el presente, y póngase copia en todas las Sedes de la Institución La Comisión Electoral ha quedado integrada de la siguiente manera: El señor presidente del Club Dr. Emilio Fouces y cuatro socios Sres Félix Correa, Miguel Adrián Campanini; Cristian Dume, Carlos Cubasso. Art.38 del Estatuto del Club Atlético Estudiantes: (Quorum para la Asamblea Ordinaria): \"El quorum para la Asamblea Ordinaria será de la mitad más uno de los socios con derecho a participar de la misma. Transcurrida media hora de fijada en la convocatoria, su constitución será válida con el número de socios presentes.\" Art.32 \"Todas las resoluciones de las Asambleas serán tomadas por mayoría absoluta de votos, salvo disposición expresa en contrario.\"'),(2,'CAMPAÑA SOLIDARIA ABRAZÁ CON UN ABRIGO','Iniciativa de Fundación La Delfina','En el día de hoy personal de la Esc. Nº8 Juan Martín de Pueyrredón se acercó a la Sede para retirar las donaciones recibidas hasta ahora en el marco de la Campaña \"Abrazá con un Abrigo\", iniciativa de La Delfina - Fundación a la que nos sumamos. Agradecemos la ENORME generosidad de todas las personas que acercaron su colaboración, tan valiosa es estos días de frío y a Mabel, vicedirectora de la Escuela que junto al personal docente y no docente, harán llegar todo a las familias de la comunidad educativa que más lo necesiten. Seguiremos recibiendo pantalones, pulóveres, camperas, calzado, guantes, gorras, bufandas y frazadas, para seguir ayudando.'),(3,'ASAMBLEA ORDINARIA POSPUESTA','Urgente','Estimados socios: Debido a la situación sanitaria, se informa que la Comisión Directiva ha dispuesto reprogramar la Asamblea Anual Ordinaria convocada para el 25 de Julio del corriente, en consonancia con lo pedido por las autoridades provinciales. Saludamos atte.-');
/*!40000 ALTER TABLE `novedades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Nicolas','81dc9bdb52d04dc20036dbd8313ed055');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'basquetdiplomatura'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-10 22:49:33
