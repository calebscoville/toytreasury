select *, users.username
from toy_info join users
on users.user_id = toy_info.user_id
order by id desc;