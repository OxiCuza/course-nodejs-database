CREATE TABLE sample
(
    id varchar(100) not null,
    name varchar(100) not null,
    primary key (id)
) engine innodb;

CREATE TABLE customers
(
    id varchar(100) not null,
    name varchar(100) not null,
    email varchar(100) not null,
    gender varchar(100),
    phone varchar(100) not null,
    primary key (id),
    constraint customers_email_unique unique (email),
    constraint customers_phone_unique unique (phone)
) engine innodb;