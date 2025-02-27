select User_name();

create table BankAccounts(
	Account_ID INT primary key,
	Customer_Name varchar(20),
	AccountType varchar(10),
	Balance Decimal,
)

select * from BankAccounts;

insert into BankAccounts values
()


begin transaction

Declare @balance Decimal ;
select @balance=balance from BankAccounts where CustomerName='Bob Smith'

select @balance

if balance <5000
rollback

update BankAccounts
set balance=balance-5000
where CustomerName ='Bob Smith';







