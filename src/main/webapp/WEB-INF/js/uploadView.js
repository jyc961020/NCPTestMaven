$(function(){
	$.ajax({
		type: 'post',
		url: '/mini/user/getUploadImage',
		data: {'seq': $('#seq').val()},
		dataType: 'json',
		success: function(data){
			console.log(JSON.stringify(data));
			
			var result = `<img src="�ڽ��� NCP �ּ�/storage/`
			           + data.imageFileName + `" width="250" height="250" />`;     
			
			$('#imageSpan').html(result);
			$('#imageNameSpan').html(data.imageName);
			$('#imageOriginalNameSpan').html(data.imageOriginalName);
			$('#imageContentSpan').html(data.imageContent);
			
		},
		error: function(e){
			console.log(e);
		}
	}); //$.ajax
});