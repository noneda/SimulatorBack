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


CREATE TABLE IF NOT EXISTS simulator_report (
    simulator_report_id INT NOT NULL AUTO_INCREMENT,
    total_mass VARCHAR(50),
    user_id INT AUTO_INCREMENT NOT NULL,
    humidity_percentage VARCHAR(50),
    solids_percentage VARCHAR(50),
    initial_solids VARCHAR(50),
    specific_heat_trigo VARCHAR(50),
    temperature_change VARCHAR(50),
    latent_heat_evaporation_water VARCHAR(50),
    initial_humidity VARCHAR(50),
    total_wheat_mass_exit VARCHAR(50),
    evaporated_water VARCHAR(50),
    sensible_heat VARCHAR(50),
    latent_heat VARCHAR(50),
    total_heat VARCHAR(50),
    PRIMARY KEY (simulator_report_id),
    FOREIGN KEY (user_id) REFERENCES users (user_id) ON UPDATE CASCADE
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

