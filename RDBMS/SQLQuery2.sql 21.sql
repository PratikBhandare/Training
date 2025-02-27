create table Emplyss2(
	ID INT primary key, 
	Name varchar(20), 
	Department_ID INT Foreign key references Departmentss1(ID),
	ManagerID INT foreign key references Emplyss(ID) null,
	HireDate Date,
	Salary Decimal

);


insert into Emplyss2 values
(1,'Parth',1,null,'2025-01-06',1000),
(2, 'Amit', 2, 5, '2024-06-15',2000),
(3, 'Sita', 3, 2, '2023-11-20',1000),
(4, 'Ravi', 1, 1, '2022-02-11',15000),
(5, 'Anita', 2, 3, '2021-08-09',2000)


create Table Departmentss1(ID INT primary key,Name varchar(20));

INSERT INTO Departmentss1 (ID, Name)
VALUES
    (1, 'Sales'),
    (2, 'Marketing'),
    (3, 'HR'),
    (4, 'IT'),
    (5, 'Finance');

	select * from Departmentss1