select user_id, user_id
from users join toy_info
on users.user_id = toy_info.user_id;