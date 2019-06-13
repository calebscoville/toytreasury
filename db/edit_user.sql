update users set
(image,
first_name,
last_name,
username,
email,
city,
password)
= ($2, $3, $4, $5, $6, $7, $8) where user_id = $1
returning * ;
