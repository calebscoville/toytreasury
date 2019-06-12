select first_name, last_name, username, city, email, user_id from users
where user_id = $1;
-- select * from users;
