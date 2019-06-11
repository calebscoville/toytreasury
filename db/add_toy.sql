insert into toy_info(title, description, condition, missing_pieces, extra_info, url)
values (${title}, ${description}, ${condition}, ${missingpieces}, ${extrainfo}, ${url})
    returning *
;