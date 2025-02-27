create table Departments_pr(
		dept_ID int primary key,
		dept_name varchar(50) not null
);
 
create table employee_pr(
	emp_ID int primary key,
	emp_name varchar(50) not null,
	emp_age int check(emp_age>=18),
	emp_salary decimal(10,2),
	emp_departmentID int,
	constraint FnK_Department_om foreign key (emp_departmentID) references Departments_pr(dept_ID)
)
 
select *
from Departments_pr
 
select *
from employee_pr
 
insert into Departments_pr(dept_ID,dept_name)values(1,'cse');
insert into Departments_pr(dept_ID,dept_name)values(2,'ECE');
 
 
insert into employee_pr(emp_ID,emp_name,emp_age,emp_salary,emp_departmentID)values(2,'anish',22,2000,1);
insert into employee_pr(emp_ID,emp_name,emp_age,emp_salary,emp_departmentID)values(3,'pratik',23,3000,2);
 
delete from Departments_pr where dept_ID=1
 
alter table Departments_pr alter column dept_ID int not null

alter table Departments_pr
add constraint dept_ID Primary key (dept_ID)