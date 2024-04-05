/*
    Here We'll create tables
*/
CREATE TABLE DataObtained (
    idDataObtained INT PRIMARY KEY AUTO_INCREMENT,
    idSimulator INT,
    
    total_mass FLOAT,
    humidity_percentage FLOAT,
    solids_percentage FLOAT,
    initial_solids FLOAT,
    specific_heat_of_wheat FLOAT,
    temperature_change FLOAT,
    latent_heat_of_water_evaporation FLOAT
);



CREATE TABLE ResultEquationsMachine (
    IdDataObtained INT PRIMARY KEY AUTO_INCREMENT,
    IdSimulator INT,
    
    initial_humidity FLOAT,
    total_mass_wheat_exit FLOAT,
    evaporated_water FLOAT,
    sensible_heat FLOAT,
    latent_heat FLOAT,
    total_heat FLOAT
);

CREATE TABLE Simulator (
    IdSimulator INT PRIMARY KEY AUTO_INCREMENT,
    IdDataObtained INT,
    IdResults INT,
    
    UserId INT,
    FOREIGN KEY (IdDataObtained) REFERENCES DataObtained(IdDataObtained),
    FOREIGN KEY (IdResults) REFERENCES ResultEquationsMachine(IdDataObtained),
    -- FOREIGN KEY (UserId) REFERENCES Users(UserId)
);



