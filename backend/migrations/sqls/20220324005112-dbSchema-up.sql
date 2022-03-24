CREATE SCHEMA catastrogeosat;

CREATE TABLE catastrogeosat.propietarios (
    id SERIAL PRIMARY KEY,
    nombre TEXT NOT NULL,
    direccion TEXT NOT NULL,
    telefono TEXT NOT NULL,
    email VARCHAR NOT NULL UNIQUE,
    tipo TEXT NOT NULL,
    cc_nit TEXT NOT NULL
);

CREATE TABLE catastrogeosat.predios(
    pid SERIAL PRIMARY KEY,
    nombrep TEXT NOT NULL,
    avaluo TEXT NOT NULL,
    departamento TEXT NOT NULL,
    municipio TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL  DEFAULT now(),
    propietariosid INTEGER REFERENCES catastrogeosat.propietarios(id)
);
CREATE INDEX ON catastrogeosat.predios(propietariosid);

CREATE TABLE catastrogeosat.construcciones(
    cid SERIAL PRIMARY KEY,
    nombrec TEXT NOT NULL,
    area TEXT NOT NULL,
    agua BOOLEAN NOT NULL DEFAULT false,
    valor TEXT NOT NULL,
    predioid INTEGER REFERENCES catastrogeosat.predios(pid)
);
CREATE INDEX ON catastrogeosat.construcciones(predioid);

CREATE TABLE catastrogeosat.terrenos(
    tid SERIAL PRIMARY KEY,
    nombret TEXT NOT NULL,
    area TEXT NOT NULL,
    direccion TEXT NOT NULL,
    valor TEXT NOT NULL,
    construccionid INTEGER REFERENCES catastrogeosat.construcciones(cid)
);
CREATE INDEX ON catastrogeosat.terrenos(construccionid);