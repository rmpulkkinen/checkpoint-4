CREATE TABLE Tableware (
    id SERIAL PRIMARY KEY,  
    name varchar(255) NOT NULL, 
    qty int NOT NULL
);

CREATE TABLE Office (
    id SERIAL PRIMARY KEY,
    name varchar(255) NOT NULL,
    location varchar(255) NOT NULL,
    starting_year int NOT NULL
);

ALTER TABLE Tableware
ADD COLUMN office_id int,
ADD CONSTRAINT fk_office
    FOREIGN KEY(office_id)
        REFERENCES Office(id)