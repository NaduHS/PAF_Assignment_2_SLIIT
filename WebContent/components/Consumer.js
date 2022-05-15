$(document).ready(function() //1
{
	if ($("#alertSuccess").text().trim() == "")
	{
		$("#alertSuccess").hide();
	}
	$("#alertError").hide();
});

// SAVE ============================================
$(document).on("click", "#btnSave", function(event)
{
	// Clear alerts---------------------
	$("#alertSuccess").text("");
	$("#alertSuccess").hide();
	$("#alertError").text("");
	$("#alertError").hide();
	// Form validation-------------------
	
		//	var status = validateCustomerForm();
		//	if (status != true)
		//	{
		//		$("#alertError").text(status);
		//		$("#alertError").show();
		//		return;
		//	}

	// If valid------------------------
	var type = ($("#hidconIDSave").val() == "") ? "POST" : "PUT";
	
	$.ajax(
			{ 
				url : "ConsumerAPI", 
				type : type, 
				data : $("#formConsumer").serialize(), 
				dataType : "text", 
				complete : function(response, status) 
				{ 
					onConsumerSaveComplete(response.responseText, status); 
				} 
			});
	
});

function onConsumerSaveComplete(response, status)
{ 
	if (status == "success") 
	{ 
		var resultSet = JSON.parse(response);
		
		if (resultSet.status.trim() == "success") 
		{ 
			$("#alertSuccess").text("Successfully saved."); 
			$("#alertSuccess").show(); 
			$("#divItemsGrid").html(resultSet.data); 
		} else if (resultSet.status.trim() == "error") 
		{ 
			$("#alertError").text(resultSet.data); 
			$("#alertError").show(); 
		}
		
	} else if (status == "error") 
	{ 
		$("#alertError").text("Error while saving."); 
		$("#alertError").show(); 
	} else
	{ 
		$("#alertError").text("Unknown error while saving.."); 
		$("#alertError").show(); 
	} 
	$("#hidConsumerIDSave").val(""); 
	$("#formConsumer")[0].reset(); 
}


// UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event)
{
	$("#hidconIDSave").val($(this).closest("tr").find('#hidConsumerIDUpdate').val());
	$("#conID").val($(this).closest("tr").find('td:eq(0)').text());
	$("#txtName").val($(this).closest("tr").find('td:eq(1)').text());
	$("#txtAddress").val($(this).closest("tr").find('td:eq(2)').text());
	$("#txtMobile").val($(this).closest("tr").find('td:eq(3)').text());
	$("#txtEmail").val($(this).closest("tr").find('td:eq(4)').text());
	$("#txtNic").val($(this).closest("tr").find('td:eq(5)').text());
	$("#txtUsername").val($(this).closest("tr").find('td:eq(6)').text());
	$("#txtPassword").val($(this).closest("tr").find('td:eq(7)').text());
});

//REMOVE======

$(document).on("click", ".btnRemove", function(event)
{ 
	$.ajax( 
	{ 
		url : "ConsumerAPI", 
		type : "DELETE", 
		data : "conID=" + $(this).data("conID"),
		dataType : "text", 
		complete : function(response, status) 
		{ 
			onConsumerDeleteComplete(response.responseText, status); 
		} 
	}); 
});

function onConsumerDeleteComplete(response, status)
{ 
	if (status == "success") 
	{ 
		var resultSet = JSON.parse(response);
		
		if (resultSet.status.trim() == "success") 
		{ 
			$("#alertSuccess").text("Successfully deleted."); 
			$("#alertSuccess").show(); 
			$("#divItemsGrid").html(resultSet.data); 
		} else if (resultSet.status.trim() == "error") 
		{ 
			$("#alertError").text(resultSet.data); 
			$("#alertError").show(); 
		} 
	} else if (status == "error") 
	{ 
		$("#alertError").text("Error while deleting."); 
		$("#alertError").show(); 
	} else
	{ 
		$("#alertError").text("Unknown error while deleting.."); 
		$("#alertError").show(); 
	} 
}

// CLIENT-MODEL================================================================
function validateConsumerForm()
{
	// Name
	if ($("#txtName").val().trim() == "")
	{
		return "Insert Name.";
	}
	// Address
	if ($("#txtAddress").val().trim() == "")
	{
		return "Insert Address.";
	} 

	/Mobile number
	if ($("#txtMobile").val().trim() == "")
	{
		return "Insert mobile_number.";
	}
	
	//Email 
	if ($("#txtEmail").val().trim() == "")
	{
		return "Insert Email.";
	}
	
	//NIC
	if ($("#txtNic").val().trim() == "")
	{
		return "Insert NICr.";
	}
	
	//UserName
	if ($("#txtUsername").val().trim() == "")
	{
		return "Insert Username.";
	}
	
	//Password
	if ($("#txtPassword").val().trim() == "")
	{
		return "Insert Password.";
	}
	
	return true;
}