--
-- Database Schema:  caeschema
-- Automatically generated sql script for the service FAQBackend, created by the CAE.
-- --------------------------------------------------------

--
-- Table structure for table faqs.
--
CREATE TABLE caeschema.faqs (
  category VARCHAR(255) ,
  answer VARCHAR(255) ,
  id ID ,
  question VARCHAR(255) ,
CONSTRAINT id_PK PRIMARY KEY (id)
 
);



