create database Erp;

use Erp;

-- landing signup -- 

create table LandingSignup(id int primary key auto_increment,ClientId varchar(200),ClientEmail varchar(200),ClientPassword varchar(200),ClientPhone varchar(200),ClientCompanyName varchar(200),ClientWebsite varchar(200) ,created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);

select * from LandingSignup;

drop table LandingSignup;

-- landing login-- 

CREATE TABLE LandingLogin (
    id INT PRIMARY KEY AUTO_INCREMENT,
    LoginEmail VARCHAR(200) NOT NULL,
    LoginPassword varchar(200),
    Login_Time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    Statuss VARCHAR(50) NOT NULL -- e.g., "success" or "failure"
);

select * from LandingLogin;

drop table LandingLogin;
