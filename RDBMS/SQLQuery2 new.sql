create table Departments1(Department_ID INT primary key, DepartmentName varchar(20));

create table Employees4(
	Emp_ID INT primary key,
	Name varchar(20),
	Age INT check(Age >=18),
	Salary Decimal(10,2) Default 50000,
	Department_ID INT, 
	constraint ForeignKey_Department foreign key (Department_ID) references Departments1(Department_ID)
);




insert into Departments1 values 
(1,'Dev'),
(2,'QC'),
(3,'IT')


create table Employeesaltr(
	Emp_ID INT ,
	Name varchar(20),
	Age INT check(Age >=18),
	Salary Decimal(10,2) Default 50000,
	Department_ID INT,
);
drop table Employeesaltr;
alter table Employeesaltr
add constraint Emp_ID Primary key (EMP_ID);


select * from Employeesaltr;

insert into Employeesaltr values();

drop table Department110;

