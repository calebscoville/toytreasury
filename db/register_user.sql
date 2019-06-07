insert into users(first_name, last_name, email, username, password, city)
values (${firstname}, ${lastname}, ${email}, ${username}, ${password}, ${city})
    returning *
;
