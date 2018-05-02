//function searchForCharacter(charName) {

//	var divToEdit = document.getElementById("divTag");

//	$.ajax({
//		url: "/Home/InfoJson",
//		type: "GET",
//		data: { "id": movieId },
//		success: function (result) {
//			$("#divTag").html(result);
//		}
//	});
//}

function getListOfCharacters() {
	for (var i = 1; i < 50; i++) {
		$.ajax({
			url: "https://anapioficeandfire.com/api/characters?page=" + i + "&pagesize=50",
			type: "GET",
			success: function (result) {
				console.log(result);
				result.forEach(function (character) {
					if (character.name.includes('Jon')) {
						$('#listOfCharacters').append(
							$('<li>')
								.append($('<a>').attr('href', character.url)
									.text(character.name)));
					}
				});
			}
		});
	}
}