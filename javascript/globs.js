var siteloc = "http://localhost/CSC181"
var scriptloc = "/scripts/"


function fetchItemsOrderedById(order_id)
{
    $.ajax({
        url:siteloc + scriptloc + "getItemsOrdered.py",
        data:{
           order_id : order_id
        },
        dataType:'json',
        success: function (res){
            console.log(res)
           if(res[0][0] != "None")
                  {
					  table = '<table border="1">';
					  for (i = 0; i < res.length; i++)
					  {
						  row = res[i];
						  table += "<tr>";
						  for (j = 0; j < row.length; j++)
						  {
							  table += "<td>" + row[j] + "</td>";
						  }
						  table += "</tr>";
					  }
					  table += "</table>";
					  $("#target").html(table); 
				  } // end if
                

        }

    });
}
function fetchAllItemsOrdered()
{
    $.ajax({
        url:siteloc + scriptloc + "getItemsOrdered.py",
        data:{
           order_id : 'None'
        },
        dataType:'json',
        success: function (res){
            console.log(res)
           if(res[0][0] != "None")
                  {
					  table = '<table border="1" style="width:200px">';
                                          table += "<tr><th>Order Id</th><th>Menu Name</th></tr>" 
					  for (i = 0; i < res.length; i++)
					  {
						  row = res[i];
						  table += "<tr>";
						  for (j = 0; j < row.length; j++)
						  {
							  table += "<td>" + row[j] + "</td>";
						  }
						  table += "</tr>";
					  }
					  table += "</table>";
					  $("#target").html(table); 
				  } // end if
                

        }

    });
}
