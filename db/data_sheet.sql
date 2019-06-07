create table toy_info (
    title varchar(100),
    description varchar(350),
    condition varchar(100),
    missing_pieces int,
    extra_info varchar(200),
    url TEXT,
    id serial primary key
);