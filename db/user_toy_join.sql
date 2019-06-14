select *
from toy_info join users
on users.user_id = toy_info.user_id
where toy_info.id = ${toyId}
