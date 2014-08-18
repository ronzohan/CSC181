 create table orders(
    order_id serial primary key,
    menu_name text,
    order_time timestamp
);

--create language plpgsql;
--controller
--view
create or replace function 
    get_items_ordered(in int, out int, out text,out timestamp) 
returns setof record as
$$ 
     select order_id, menu_name,order_time from orders
     where order_id = $1;     
$$
 language 'sql';
-- HOW TO USE:
-- select * from get_items_ordered(1);


--create language plpgsql;
--controller
--view
create or replace function 
    get_items_ordered_all(out int, out text,out timestamp) 
returns setof record as
$$ 
     select order_id, menu_name,order_time from orders    
$$
 language 'sql';
-- HOW TO USE:
-- select * from get_items_ordered_all();

