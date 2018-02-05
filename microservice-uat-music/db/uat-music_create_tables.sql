--
-- Database Schema:  uatTest
-- Automatically generated sql script for the service uat-music, created by the CAE.
-- --------------------------------------------------------

--
-- Table structure for table tblMusic.
--
CREATE TABLE uatTest.tblMusic (
  imageId INT(11) ,
  musicId INT(11) ,
  musicName VARCHAR(255) ,
  musicUrl VARCHAR(255) ,
CONSTRAINT musicId_PK PRIMARY KEY (musicId)
 
);



