

create table Bookings1(ID INT primary key, CustomerName Varchar(20), MovieName varchar(20), SeatBooked INT, TotalPrice DECIMAL);

insert into Bookings1 values
(1,'Anish','Chaava',6,3280),
(2,'Suyash','Maidan',6,3280),
(3,'Omkar','Pushpa',6,3280),
(4,'Parth','Gabbar',6,3280)

select * from Bookings1

Begin Transaction

insert into Bookings1 values(5,'Ayush','King Kong',6,3280);

save transaction a;

insert into Bookings1 values(6,'Lavanya','Bhootnath',6,3280);


rollback transaction a;

commit;


truncate table Bookings1;