$(function(){
	//1개의 이미지 데이터
	$.ajax({
		type: 'post',
		url: '/mini/user/getUploadImage',
		data: {'seq': $('#seq').val()},
		dataType: 'json',
		success: function(data){
			console.log(JSON.stringify(data));
			
			var result = `<img src="자신의 NCP 주소/storage/`
			           + data.imageFileName + `" width="70" height="70" />`;     
			
			$('#imageName').val(data.imageName);
			$('#imageContent').val(data.imageContent);
			$('#showImgList').html(result);
		},
		error: function(e){
			console.log(e);
		}
	}); //$.ajax
	
	//수정
	$('#uploadUpdateBtn').click(function(){
		var formData = new FormData($('#uploadUpdateForm')[0]);
		
		$.ajax({
			type: 'post',
			enctype: 'multipart/form-data',
			processData: false,
			contentType: false,
			url: '/mini/user/uploadUpdate',
			data: formData,
			success: function(data){
				alert(data);
				location.href = '/mini/user/uploadList';
			},
			error: function(e){
				console.log(e);
			}
		});
	});
});





















