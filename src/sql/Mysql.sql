
drop database udc_proyecto;

create database if not exists udc_proyecto;

use udc_proyecto;

-- Delete Tables
drop table Simulator;
drop table setBalanceMateria;
drop table getBalanceMateria;
drop table setBalanceEnergia;
drop table getBalanceEnergia;
drop table setEstudianteBalanceEnergia;
drop table setEstudianteBalanceMateria;

-- Tabla Principal y De Anexos
CREATE TABLE IF NOT EXISTS Simulator(
	id int primary key auto_increment not null,
    
    -- Foreing Key Para los Datos de BalanceMateria
    idsetBalanceMateria int,
    idgetBalanceMateria int,
    
    -- Foreing Key Para los Datos de BalanceEnergia
	idsetBalanceEnergia int,
	idgetBalanceEnergia int,
    
    -- Foreing Key Para los Datos que Ingresa el Estudiante
	idsetEstudianteBalanceMateria int,
	idgetEstudianteBalanceEnergia int,
    
    
    -- RELACIONES
	FOREIGN KEY (idsetBalanceMateria) REFERENCES setBalanceMateria(id) ON DELETE CASCADE,
    FOREIGN KEY (idgetBalanceMateria) REFERENCES getBalanceMateria(id) ON DELETE CASCADE,
    FOREIGN KEY (idsetBalanceEnergia) REFERENCES setBalanceEnergia(id) ON DELETE CASCADE,
    FOREIGN KEY (idgetBalanceEnergia) REFERENCES getBalanceEnergia(id) ON DELETE CASCADE,
    FOREIGN KEY (idsetEstudianteBalanceMateria) REFERENCES setEstudianteBalanceMateria(id) ON DELETE CASCADE,
    FOREIGN KEY (idgetEstudianteBalanceEnergia) REFERENCES getEstudianteBalanceEnergia(id) ON DELETE CASCADE
);

-- Datos de Entrada de Balance de Energia
CREATE TABLE IF NOT EXISTS setBalanceMateria( 
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
	-- idSimulador INT,  -- FK
	CantidadInical FLOAT ,	
	HumedadInical FLOAT, 		
	HumedadFinal FLOAT, 		
	FluidoServicio FLOAT
);

-- Datos de Procesos de las Formulas de Balance de Energia
CREATE TABLE IF NOT EXISTS getBalanceMateria (	
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	-- idSimulador INT , -- FK
	Solidos FLOAT,
	gHumedadInicial FLOAT, 	
	gHumedadFinal FLOAT, 		
	AguaEvaporada FLOAT, 		
	FlujoAireSeco FLOAT 
);

-- Datos de Entrada de Balance de Energia
CREATE TABLE IF NOT EXISTS setBalanceEnergia(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	-- idSimulador INT, -- FK
	TemInical FLOAT , 		
	TemFinal FLOAT, 		
	LambDa FLOAT,			
	CalorEspMa FLOAT, 		
	CalorEspAg FLOAT 		
);

-- Datos de Procesos de las Formulas de Balance de Energia
CREATE TABLE IF NOT EXISTS getBalanceEnergia(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,	
	-- idSimulador INT, -- FK		
	QLatenteAg FLOAT, 		
	QSencibleMat FLOAT, 		
	Qtotal FLOAT
);

-- Datos de Entrada de Resultados del Estudiante de Balance de Energia
CREATE TABLE IF NOT exists setEstudianteBalanceMateria(  
	id  INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
	-- idSimulador  INT,  -- FK
	QLatenteAg  FLOAT,
	QSencibleMat  FLOAT,
	Qtotal  FLOAT
);

-- Datos de Entrada de Resultados del Estudiante de Balance de Materia
CREATE TABLE IF NOT EXISTS getEstudianteBalanceEnergia( 
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	-- idSimulador INT, -- FK
	CantidadInical FLOAT, 	
	HumedadInical FLOAT, 		
	HumedadFinal FLOAT, 		
	FluidoServicio FLOAT	
);
