
function getListOfCharacters() {
	var searchString = $('#searchString').val();
	$('#listOfCharacters').empty();
	for (var i = 1; i < 50; i++) {
		$.ajax({
			url: "https://anapioficeandfire.com/api/characters?page=" + i + "&pagesize=50",
			type: "GET",
			success: function (result) {
				console.log(result);
				result.forEach(function (character) {
					if (character.name.toLowerCase().includes(searchString.toLowerCase())) {
						var id = character.url.split('/')[5];
						console.log(id);
						$('#listOfCharacters').append(
							$('<li>')
								.text(character.name)
								.attr('onclick', 'infoPage(' + id + ')'));
					}
				});
			}
		});
	}
}

function loadCharacterInfo(characterId) {
	$.ajax({
		url: "https://anapioficeandfire.com/api/characters/" + characterId,
		type: "GET",
		success: function (result) {
			$('#name').html(result.name);
		}
	});
}

function infoPage(characterId) {
	$.ajax({
		url: "/Home/Info",
		type: "GET",
		data: { "id": characterId },
		success: function (result) {
			$("#characterInfo").html(result);
		}
	});
}