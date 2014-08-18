 create table orders(
    order_id int primary key,
    menu_name text
);

--create language plpgsql;
--controller
--view
create or replace function 
    get_items_ordered_all(out int, out text) 
returns setof record as
$$ 
     select order_id, menu_name from orders    
$$
 language 'sql';
-- HOW TO USE:
-- select * from get_team_per_name('Chelsea');




 
