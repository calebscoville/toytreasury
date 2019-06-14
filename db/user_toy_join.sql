select toy_info.title
from users join toy_info
on users.user_id = toy_info.user_id
where users.user_id = ${user_id}
