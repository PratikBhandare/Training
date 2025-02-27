

select * from Employees;

select fname, salary, Country 
from Employees as e1
where salary in (select max(salary) from Employees as e2 where e1.Country=e2.Country )



