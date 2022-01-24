
  
/* 
SQLyog Community v12.3.2 (64 bit) 
MySQL - 5.7.21-log : Database - etiqaschool 
********************************************************************* 
*/

 
7 /*!40101 SET NAMES utf8 */; 
8 
 
9 /*!40101 SET SQL_MODE=''*/; 
10 
 
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */; 
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */; 
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */; 
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */; 
CREATE DATABASE /*!32312 IF NOT EXISTS*/`myschool` /*!40100 DEFAULT CHARACTER SET latin1 */; 
 
 
/*Table structure for table `hibernate_sequence` */ 
 
 
DROP TABLE IF EXISTS `hibernate_sequence`; 
 
 
CREATE TABLE `hibernate_sequence` ( 
  `next_val` bigint(20) DEFAULT NULL 
) ENGINE=InnoDB DEFAULT CHARSET=latin1; 
 
 
/*Data for the table `hibernate_sequence` */ 

 
27 insert  into `hibernate_sequence`(`next_val`) values(9); 
29 
 
30 /*Table structure for table `students` */ 
31 
 
32 DROP TABLE IF EXISTS `students`; 
33 
 
34 CREATE TABLE `students` ( 
35   `std_id` int(11) NOT NULL AUTO_INCREMENT, 
36   `std_firstname` varchar(100) DEFAULT NULL, 
37   `std_lastname` varchar(100) DEFAULT NULL, 
38   `std_course` varchar(20) DEFAULT NULL, 
39   PRIMARY KEY (`std_id`) 
40 ) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=latin1; 
41 
 
42 /*Data for the table `students` */ 
43 
 
44 insert  into `students`(`std_id`,`std_firstname`,`std_lastname`,`std_course`) values ^M 
45 (1,'ali','abu','Pure Science'),
46 (2,'ahmad','ali','Science Computer'); 
47 
 
48 /*!40101 SET SQL_MODE=@OLD_SQL_MODE */; 
49 /*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */; 
50 /*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */; 
51 /*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */; 












 



 


 







 




  