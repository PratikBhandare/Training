-- 5

create table customer110(
	customerId int primary key,
	customerName varchar(50),
);
select * from customer110;
insert into customer110 values(1, 'customer 1');
insert into customer110 values(2, 'customer 2');
insert into customer110 values(3, 'customer 3');
insert into customer110 values(4, 'customer 4');
insert into customer110 values(5, 'customer 5');
create table books110(
	bookId int primary key,
	title varchar(50),
	inStock int check (instock >= 0)
);
select * from books110;
insert into books110 values(1, 'title 1', 10);
insert into books110 values(2, 'title 2', 0);
insert into books110 values(3, 'title 3', 2);
insert into books110 values(4, 'title 4', 30);
insert into books110 values(5, 'title 5', 5);
create table order110(
	orderId int primary key,
	bookId int foreign key references books110,
	customerId int foreign key references customer110,
	orderPrice int check (orderPrice >= 0)
);
select * from order110;
insert into order110 values(1, 1, 1, 4000);
insert into order110 values(2, 1, 2, 1000);
insert into order110 values(3, 2, 3, 500);
insert into order110 values(4, 3, 2, 899);
insert into order110 values(5, 4, 5, 2000);

-- 1.
select * from customer110
where customerId in (select customerId from order110);
-- 2.
select * from books110
where bookId not in (select bookId from order110);
-- 3.
select * from books110
where inStock = 0;
-- 5.
select * from books110
where bookId = (
	select bookId 
	from order110
	where orderPrice = (select max(orderPrice) from order110)
)
has context menu