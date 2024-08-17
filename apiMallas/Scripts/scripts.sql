-- Database: apiIcoMallas

-- DROP DATABASE IF EXISTS "apiIcoMallas";

CREATE DATABASE "apiIcoMallas"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Spanish_Colombia.1252'
    LC_CTYPE = 'Spanish_Colombia.1252'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

    -- Table: public.userType

-- DROP TABLE IF EXISTS public."userType";

CREATE TABLE IF NOT EXISTS public."userType"
(
    id integer NOT NULL DEFAULT nextval('"userType_id_seq"'::regclass),
    nombre character varying(250) COLLATE pg_catalog."default" NOT NULL,
    estado boolean NOT NULL,
    CONSTRAINT "userType_pkey" PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."userType"
    OWNER to postgres;

    -- Table: public.Users

-- DROP TABLE IF EXISTS public."Users";

CREATE TABLE IF NOT EXISTS public."Users"
(
    id integer NOT NULL DEFAULT nextval('"Users_id_seq"'::regclass),
    nit character varying(50) COLLATE pg_catalog."default" NOT NULL,
    razon_social character varying(250) COLLATE pg_catalog."default" NOT NULL,
    correo character varying(250) COLLATE pg_catalog."default" NOT NULL,
    telefono character varying(50) COLLATE pg_catalog."default" NOT NULL,
    usuario_responsable integer NOT NULL,
    fecha_creacion timestamp without time zone NOT NULL,
    estado boolean NOT NULL,
    usertype integer NOT NULL,
    CONSTRAINT "Users_pkey" PRIMARY KEY (id),
    CONSTRAINT unique_correo UNIQUE (correo),
    CONSTRAINT unique_nit UNIQUE (nit),
    CONSTRAINT unique_telefono UNIQUE (telefono),
    CONSTRAINT fk_usertype FOREIGN KEY (usertype)
        REFERENCES public."userType" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE SET NULL
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Users"
    OWNER to postgres;



    INSERT INTO public."userType" (nombre, estado)
VALUES ('Administrador', TRUE);

INSERT INTO public."userType" (nombre, estado)
VALUES ('Cliente', TRUE);

INSERT INTO public."Users"(
	nit, razon_social, correo, telefono, usuario_responsable, fecha_creacion, estado, usertype)
	VALUES ('1234567890', 'superAdmin', 'superadminicomallas@gmail.com','1234567890', 1, CURRENT_TIMESTAMP, true,1);