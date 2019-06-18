insert into users(first_name, last_name, email, username, password, city, image)
values (${firstname}, ${lastname}, ${email}, ${username}, ${password}, ${city}, ${image})
    returning *
;
