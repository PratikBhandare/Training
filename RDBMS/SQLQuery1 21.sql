create table author_1(
	authorId int identity(1,1) primary key,
	firstName varchar(20) not null,
	lastName varchar(20) not null
);
select * from author_1;
 
insert into author_1 values('author fname 1', 'author lname 1');
insert into author_1 values('author fname 2', 'author lname 2');
insert into author_1 values('author fname 3', 'author lname 3');
 
create table book_1(
	bookId int primary key,
	title varchar(40) not null unique,
	authorId int foreign key references author_1,
	publishYear smallint check (publishYear > 1500 and publishYear < 2025)
);
select * from book_1;
insert into book_1 values(101,'book 1', 1, 1999);
insert into book_1 values(102,'book 2', 2, 2000);
insert into book_1 values(103,'book 3', 2, 1800);
insert into book_1 values(104,'book 4', 3, 2024);
insert into book_1 values(105,'book 5', 3, 2003);
 
create table member_1(
	memberId smallint primary key,
	firstName varchar(20) not null,
	lastName varchar(20) not null,
	email varchar(30) unique not null
);
select * from member_1;
insert into member_1 values(1, 'member fname 1', 'member lname 1', 'member1@email.com');
insert into member_1 values(2, 'member fname 2', 'member lname 2', 'member2@email.com');
insert into member_1 values(3, 'member fname 3', 'member lname 3', 'member3@email.com');
 
create table loans_1(
	loanId int primary key,
	bookId int foreign key references book_1(bookId),
	memberId smallint foreign key references member_1(memberId),
	loanDate date not null,
	returnDate date,
	constraint vDate check (returnDate > loanDate)
);
select * from loans_1;
insert into loans_1(loanId, bookId, memberId, loanDate) values(301, 101, 1, '01-01-2024');
insert into loans_1 values(302, 101, 2, '01-01-2024', '01-05-2024');
insert into loans_1 values(303, 102, 2, '12-10-2023', '01-05-2024');



