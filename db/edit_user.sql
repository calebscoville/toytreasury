update user set
image,
first_name,
last_name,
username,
email,
city,
password
= $2 where user_id = $1
