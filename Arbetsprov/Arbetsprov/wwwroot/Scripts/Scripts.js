
function getListOfCharacters() {
	var searchString = $('#searchString').val();
	$('#listOfCharacters').empty();
	$('#center').show();
	for (var i = 1; i < 50; i++) {
		$.ajax({
			url: "https://anapioficeandfire.com/api/characters?page=" + i + "&pagesize=50",
			type: "GET",
			success: function (result) {
				result.forEach(function (character) {
					if (character.name.toLowerCase().includes(searchString.toLowerCase())) {
						var id = character.url.split('/')[5];
						$('#listOfCharacters').append(
							$('<li>')
								.text(character.name)
								.attr('onclick', 'infoPage(' + id + ')')
								.addClass('searchResult'));
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
			if (result.aliases[0] !== "") {
				result.aliases.forEach(function (alias) {
					$('#alias').append(alias + ', ');
				});
			}

			$('#born').html(result.born);
			$('#died').html(result.died);
			$('#actor').html(result.playedBy[0]);
			$('#url').html('<a href="' + result.url + '">' + result.url + '</a>');
		}
	});
}

function infoPage(characterId) {
	$('#right').show();
	$.ajax({
		url: "/Home/Info",
		type: "GET",
		data: { "id": characterId },
		success: function (result) {
			$("#characterInfo").html(result);
		}
	});
}