INSERT INTO `cummins-project`.`Client`
(`clientId`,
`clientName`,
`clientDesc`,
`clientIndustry`,
`clientSector`)
VALUES
(1, 'Applied Energetics, Inc.', 'Applied Energetics, Inc. is an American arms manufacturer. 
It develops directed-energy weapons, mainly electrolasers with a range of tens of meters.',
'Aerospace & Defense', 'Capital Goods');

INSERT INTO `cummins-project`.`Client`
(`clientId`,
`clientName`,
`clientDesc`,
`clientIndustry`,
`clientSector`)
VALUES
(2, 'Air Industries Group', 'Supplying flight critical & other sophisticated parts and assemblies to the world’s premier aerospace and ground power companies
FOR OVER 50 YEARS',
'Aerospace & Defense', 'Capital Goods');

INSERT INTO `cummins-project`.`Client`
(`clientId`,
`clientName`,
`clientDesc`,
`clientIndustry`,
`clientSector`)
VALUES
(3, 'Deere & Co', 'John Deere is the brand name of Deere & Company, an American corporation that manufactures agricultural, construction, and forestry machinery, diesel engines, drivetrains used in heavy equipment, and lawn care equipment. ',
' Construction & Mining Machinery', 'Capital Goods');

INSERT INTO `cummins-project`.`Client`
(`clientId`,
`clientName`,
`clientDesc`,
`clientIndustry`,
`clientSector`)
VALUES
(4,'erex Corp', 
'Terex Corporation is an American worldwide manufacturer of lifting and material handling solutions for a variety of industries, including construction, infrastructure, quarrying, recycling, energy, mining, shipping, transportation, refining and utilities.  ',
' Construction & Mining Machinery', 'Capital Goods');

INSERT INTO `cummins-project`.`Client`
(`clientId`,
`clientName`,
`clientDesc`,
`clientIndustry`,
`clientSector`)
VALUES
(5,'IdealPower Inc.',
'Ideal Power (NASDAQ: IPWR) is a power conversion technology company that delivers innovative cleantech solutions to system integrators and project developers, enabling distributed energy resources for applications both on and off the grid. Our products deliver superior reliability and compelling return on investment for renewable energy and storage applications at a competitive cost, backed by first-rate customer service',
'Industrial Machinery and Components', 'Capital Goods');

INSERT INTO `cummins-project`.`Client`
(`clientId`,
`clientName`,
`clientDesc`,
`clientIndustry`,
`clientSector`)
VALUES
(6,'Ford Motor Corp',
'The company sells automobiles and commercial vehicles under the Ford brand and most luxury cars under the Lincoln brand.',
'Auto & Truck Manufacturers', 'Consumer Discretionary');


INSERT INTO `cummins-project`.`Client`
(`clientId`,
`clientName`,
`clientDesc`,
`clientIndustry`,
`clientSector`)
VALUES
(7,'Freightcar America, Inc.',
'FreightCar America is a manufacturer of freight cars for the railway industry. ',
'Railroads', 'Transportation ');


INSERT INTO `cummins-project`.`Client`
(`clientId`,
`clientName`,
`clientDesc`,
`clientIndustry`,
`clientSector`)
VALUES
(8,'Sino Agro Food, Inc.',
'Sino Agro Food Inc. (OTCQX: SIAF | OSE: SIAF-ME), a United States corporation, is a vertically integrated and diversified protein food company with subsidiaries operating in China. ',
'Agricultural Production', 'Consumer Non Cyclical');

create table ClientProduct(clientPdtId int primary key, 
clientId int, productId int,
constraint CP_FK1 foreign key (productId) references ProductType(productId),
constraint CP_FK2 foreign key (clientId) references Client(clientId)
);

INSERT INTO `cummins-project`.`ClientProduct`
(`clientPdtId`,
`clientId`,
`productId`)
VALUES
(1, 1, 1);
INSERT INTO `cummins-project`.`ClientProduct`
(`clientPdtId`,
`clientId`,
`productId`)
VALUES
(2, 2, 1);
INSERT INTO `cummins-project`.`ClientProduct`
(`clientPdtId`,
`clientId`,
`productId`)
VALUES
(3, 3, 1);
INSERT INTO `cummins-project`.`ClientProduct`
(`clientPdtId`,
`clientId`,
`productId`)

select * from Client;
UPDATE `cummins-project`.`Client`
SET
`clientName` = 'Terex Corp'

WHERE `clientId` = 4;

VALUES
(4, 4, 1);
INSERT INTO `cummins-project`.`ClientProduct`
(`clientPdtId`,
`clientId`,
`productId`)
VALUES
(5, 5, 1);
INSERT INTO `cummins-project`.`ClientProduct`
(`clientPdtId`,
`clientId`,
`productId`)
VALUES
(6, 6, 1);

INSERT INTO `cummins-project`.`ClientProduct`
(`clientPdtId`,
`clientId`,
`productId`)
VALUES
(7, 7, 1);

INSERT INTO `cummins-project`.`ClientProduct`
(`clientPdtId`,
`clientId`,
`productId`)
VALUES
(8, 8, 1);

select * from ProductType where productId=1;


UPDATE `cummins-project`.`Client`
SET
`clientLogo` = 'img/sino.jpg' WHERE `clientId` = 8;

desc Client;

create table Prod

select * from Client;

create table Sensors (sensorId INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  sensorName varchar(50) NOT NULL,
  sensorDescription varchar(400) NOT NULL,manufacturer varchar(400) NOT NULL ,totalLifeExpentancyHours INT NOT NULL);

create table SensorDeployed (sensorDeployedId INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  sensorId INT NOT NULL,purchaseId INT NOT NULL,
  serialNumber varchar(50),deployedDate varchar(50),
  CONSTRAINT FK_SensorDep1 FOREIGN KEY (sensorId)
    REFERENCES Sensors(sensorId),
   CONSTRAINT FK_SensorDep2 FOREIGN KEY (purchaseId)
    REFERENCES ProductPurchased(purchaseId));

create Table sensorTimeSeries (timeSeriesId INT PRIMARY KEY AUTO_INCREMENT NOT NULL, sensorDeployedId int not null ,
  dataCollectedDate date,output float(14, 10) not null,heatRate float(14, 10) not null,
  compressorEfficiency float(14, 10) not null,availability float(14, 10) not null,
  reliability float(14, 10) not null,firedHours float(14, 10) not null,
  trips int not null,starts int not null,
  CONSTRAINT FK_time1 FOREIGN KEY (sensorDeployedId)
    REFERENCES SensorDeployed(sensorDeployedId));

create table ProductPurchased 
(purchaseId int primary key, clientId int, productId int, productSeries varchar(300),
power varchar(300), torque varchar(300), certification varchar(300), pdtImg varchar(300),
constraint purchased_FK1 foreign key(clientId) references Client(clientId),
constraint purchased_FK2 foreign key(productId) references ProductType(productId)
);







INSERT INTO `cummins-project`.`ProductPurchased`
(`purchaseId`,
`clientId`,
`productId`,
`productSeries`,
`power`,
`torque`,
`certification`,
`pdtImg`)
VALUES
(1, 1, 1, 'X15 Performance Series (2017)',
'485 - 605  hp & 362 - 451  kW', '1650 - 2050  lb-ft &
2237 - 2779  N•m', 'EPA 2017', 'img/pdtpur1.png' );

INSERT INTO `cummins-project`.`ProductPurchased`
(`purchaseId`,
`clientId`,
`productId`,
`productSeries`,
`power`,
`torque`,
`certification`,
`pdtImg`)
VALUES
(2, 1, 1, 'X15 Efficiency Series (2017)',
'400 - 500  hp &
298 - 373  kW', '1450 - 1850  lb-ft &
1966 - 2508  N•m', 'EPA 2017', 'img/pdtpur2.png' );
