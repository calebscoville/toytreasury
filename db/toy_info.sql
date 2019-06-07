insert into toy_info(title, description, condition, missingpieces, extrainfo, url)
values (${title}, ${description}, ${condition, ${missingpieces, ${extrainfo}, ${url})
    returning *
;