CREATE FUNCTION catastrogeosat.add_predio (pid int, nombrep text, avaluo text, departamento text, municipio text)
  RETURNS catastrogeosat.predios
  AS $$
DECLARE
  predio catastrogeosat.predios;
BEGIN
  INSERT INTO catastrogeosat.predios (id, nombrep, avaluo, departamento, municipio)
    VALUES (id, nombrep, avaluo, departamento, municipio)
  RETURNING
    * INTO predio;
  INSERT INTO catastrogeosat.predios (id, nombrep, avaluo, departamento, municipio)
    VALUES (id, nombrep, avaluo, departamento, municipio);
  RETURN predio;
END;
$$
LANGUAGE plpgsql
STRICT