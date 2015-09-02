-- year to date totals of business permits
SELECT permit_week,
MAX(CASE permit_year WHEN '2011' THEN ytd ELSE NULL END) "2011",
MAX(CASE permit_year WHEN '2012' THEN ytd ELSE NULL END) "2012",
MAX(CASE permit_year WHEN '2013' THEN ytd ELSE NULL END) "2013",
MAX(CASE permit_year WHEN '2014' THEN ytd ELSE NULL END) "2014",
MAX(CASE permit_year WHEN '2015' THEN ytd ELSE NULL END) "2015"
FROM
(
  SELECT EXTRACT (YEAR FROM "Date") permit_year, to_char("Date", 'IW') permit_week,
    sum(count(*)) OVER (partition by EXTRACT (YEAR FROM "Date") order by to_char("Date", 'IW')) ytd
  FROM "2691aff1-e555-48d3-9188-aebf1fa8323e"
  GROUP BY 1, 2
) as totals
GROUP BY permit_week
ORDER BY permit_week


-- as CKAN API url

http://www.civicdata.com/api/action/datastore_search_sql?sql=SELECT permit_week, MAX(CASE permit_year WHEN '2011' THEN ytd ELSE NULL END) "2011", MAX(CASE permit_year WHEN '2012' THEN ytd ELSE NULL END) "2012", MAX(CASE permit_year WHEN '2013' THEN ytd ELSE NULL END) "2013", MAX(CASE permit_year WHEN '2014' THEN ytd ELSE NULL END) "2014", MAX(CASE permit_year WHEN '2015' THEN ytd ELSE NULL END) "2015" FROM (   SELECT EXTRACT (YEAR FROM "Date") permit_year, to_char("Date", 'IW') permit_week,     sum(count(*)) OVER (partition by EXTRACT (YEAR FROM "Date") order by to_char("Date", 'IW')) ytd   FROM "2691aff1-e555-48d3-9188-aebf1fa8323e"   GROUP BY 1, 2 ) as totals GROUP BY permit_week ORDER BY permit_week
