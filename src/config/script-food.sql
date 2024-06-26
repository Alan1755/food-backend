show databases;

-- criar o banco de dados
 create database food;
 use food;
 -- criar tabela usuario
 create table usuario (
 id_usuario int auto_increment,
	nome varchar(100),
	email varchar(100),
	senha varchar(100),
	adm bool not null default false, 
    primary key (id_usuario)
 );
 
 show tables;
 show columns from usuario;
 
 -- criar tabela produtos
 create table produto (
	id_produto int auto_increment,
	nome varchar(100),
	descricao varchar(200),
	preco decimal(9,2),
	foto varchar(1000),
	primary key (id_produto)
 );
	show tables;
 show columns from produto;
 
 -- criar tabela pedido
 create table pedido(
id_pedido int auto_increment,
id_usuario int,
	nome varchar(100),
	email varchar(100),
	fone varchar(50),
    end_lougradouro varchar(200),
	end_numero varchar(10),
    end_bairro varchar(100),
    end_cidade varchar(50),
    end_uf char(2),
    end_cep char(8),
    total decimal(9,2),
		primary key (id_pedido),
		foreign key (id_usuario) references usuario (id_usuario)
);
	show tables;
 show columns from pedido;
 -- drop table pedido;
 
 -- criar tabela pedido_item
 create table pedido_item (
	id_item int auto_increment,
    id_pedido int,
    id_produto int,
    quantidade decimal(9,2),
    valor_unitario decimal(9,2),
    primary key (id_item),
    foreign key (id_pedido) references pedido (id_pedido),
    foreign key (id_produto) references produto (id_produto)
    );
-- drop table pedido_item;
    
    
    /* popular o banco*/
    insert into usuario values(
		null, 'administrador', 'adm@adm.com.br', 'adm', true);
        
insert into produto (nome, descricao,preco) values (
'burguer', 'hamburgue de 180g, queijo, tomate e cebola',);
	
    insert into produto (nome, descricao,preco) values (
'Batata Frita', 'Batata Frita crocantes e douradas', 12.00);

  insert into produto (nome, descricao,preco) values (
'Milkshake', 'Um milkshake cremoso feito com sorvete de chocolate', 14.90);
	 
     select * from usuario;
     select * from produto;
	 select * from pedido;
     select * from pedido_item;

     drop table pedido_item;
     drop table pedido;