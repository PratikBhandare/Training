

create table Emplys(EMP_ID INT Primary key,Ename varchar, Email varchar(20), Departent varchar(15), Salary int, JoiningDate Date );

select * from Emplys;


Insert into  Emplys(EMP_ID ,Ename , Email, Departent, Salary, JoiningDate ) values(1,'Name','name@gmail.com','Dev',70000, '2025-01-06');

drop table Emplys;

create table orders(OrderID INT primary key Identity(1,1), CustomerName varchar(20), ProductName varchar(20),Quantity INT, Price Decimal, OrderDate Date);

insert into orders values
(1,'Anish','Saboon',2,30.00,'2025-02-19'),
(2,'Parth','Saboon',2,30.00,'2025-02-19'),
(3,'Omkar','Saboon',2,30.00,'2025-02-19'),
(4,'Suyash','Saboon',2,30.00,'2025-02-19'),
(5,'Ayush','Saboon',2,30.00,'2025-02-19'),
(6,'Jayesh','Saboon',2,30.00,'2025-02-19'),
(7,'Kartik','Saboon',2,30.00,'2025-02-19'),
(8,'Lavanya','Saboon',2,30.00,'2025-02-19'),
(9,'Gokul','Saboon',2,30.00,'2025-02-19'),
(10,'Shree','Saboon',2,30.00,'2025-02-19')

select * from orders

update orders 
set Quantity =4 
where CustomerName ='Ayush'

delete from orders where CustomerName='Lavanya'


drop table orders;


drop table Patients;
create table Patients1(ID INT identity(1,1),PName varchar(10),Age INT, Disease varchar(10),DoctorAssigned varchar(20));

insert into Patients1 values
('Anish',22,'cold','Pratik'),
('Bob',62,'cold','Suyash'),
('Jon',58,'HeadAche','Amit'),
('Alina',25,'cold','Suyash'),
('Messi',35,'Fever','Suyash'),
('Neymar',32,'cold','Amit'),
('Ronaldo',36,'Cough','Suyash')

select * from Patients1

truncate table Patients1;

select PName from Patients1 where Age>60 ;

select * from Patients1 where DoctorAssigned='Amit';

select  Disease,count(PName) as Total from Patients1 group by Disease;





