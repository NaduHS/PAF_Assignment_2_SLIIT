<%@page import="model.Consumer"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Consumer Management</title>
<link rel="stylesheet" href="views/bootstrap.min.css">
<script src="components/jquery-3.6.0.min.js"></script>
<script src="components/main.js"></script>

</head>
<body>
<div class="container">
<div class="row">
<div class="col-8">

 <h1 class="m-3">Consumer Details</h1>

 <form id="formConsumer">

 
 <!-- NAME -->
 	<div class="input-group input-group-sm mb-3">
 	<div class="input-group-prepend">
 	<span class="input-group-text" id="lblName">Consumer Name: </span>
 	</div>
 	<input type="text" id="txtName" name="txtName">
 </div>
 
  <!-- ADDRESS -->
 	<div class="input-group input-group-sm mb-3">
 	<div class="input-group-prepend">
 	<span class="input-group-text" id="lblName">Address: </span>
 	</div>
 	<input type="text" id="txtAddress" name="txtAddress">
 </div>
 
  <!-- MOBILE NUMBER -->
 	<div class="input-group input-group-sm mb-3">
 	<div class="input-group-prepend">
 	<span class="input-group-text" id="lblName">Mobile Number: </span>
 	</div>
 	<input type="text" id="txtMobile" name="txtMobile">
 </div>
 
  <!-- EMAIL -->
 	<div class="input-group input-group-sm mb-3">
 	<div class="input-group-prepend">
 	<span class="input-group-text" id="lblName">Email: </span>
 	</div>
 	<input type="text" id="txtEmail" name="txtEmail">
 </div>
 
  <!-- NIC -->
 	<div class="input-group input-group-sm mb-3">
 	<div class="input-group-prepend">
 	<span class="input-group-text" id="lblName">NIC: </span>
 	</div>
 	<input type="text" id="txtNic" name="txtNic">
 </div>
 
  <!-- USERNAME -->
 	<div class="input-group input-group-sm mb-3">
 	<div class="input-group-prepend">
 	<span class="input-group-text" id="lblName">Username: </span>
 	</div>
 	<input type="text" id="txtUsername" name="txtUsername">
 </div>
 
  <!-- Password -->
 	<div class="input-group input-group-sm mb-3">
 	<div class="input-group-prepend">
 	<span class="input-group-text" id="lblName">Password: </span>
 	</div>
 	<input type="text" id="txtPassword" name="txtPassword">
 </div>
 
 


 
<input type="button" id="btnSave" value="Save" class="btn btn-primary">
<input type="hidden" id="hidconIDSave" name="hidconIDSave" value="">

</form>

<div id="alertSuccess" class="alert alert-success"></div>
<div id="alertError" class="alert alert-danger"></div>
<br>
<div id="divConsumerGrid">
 <%Consumer consumerObj = new Consumer();
 out.print(consumerObj.readConsumer());
 %>
</div>


</div>
</div>

<br>


</div>
 
 

</body>
</html>