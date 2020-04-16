$(document).ready(function(){

	var art_raw = [
		"sculpture: 5, statue: 3, art: 3, person: 3, man: 2, old: 2, stone: 2, standing: 2, figurine: 2, nude: 1, marble: 1, figure: 1, ancient: 1, monument: 1, museum: 1, people: 1, carve: 1, no person: 1, architecture: 1, renaissance: 1, anatomy: 1, artistic: 1, classic: 1, man and woman ceramic figurine: 1, classical sculpture: 1, male: 1, muscle: 1, human body: 1, chest: 1, human: 1, archaeology: 1, museum (indoor): 1, alabaster color: 1, a sculpture of a man: 1, building: 1, holding: 1, front: 1, wearing: 1, large: 1, posing: 1, white: 1, table: 1, suit: 1, cake: 1, board: 1, young: 1",
		"sculpture: 3, art: 3, statue: 2, man: 2, archaeology: 2, head: 2, figurine: 2, person: 2, ancient: 1, no person: 1, one: 1, people: 1, buddha: 1, religion: 1, carve: 1, pottery: 1, old: 1, spirituality: 1, antique: 1, traditional: 1, portrait: 1, clay: 1, museum: 1, brown wooden tiki mask decor: 1, forehead: 1, chin: 1, stone carving: 1, classical sculpture: 1, carving: 1, bronze: 1, human: 1, artifact: 1, socle: 1, support: 1, supporting structure: 1, alabaster color: 1, a close up of a person: 1, black: 1, looking: 1, brown: 1, cat: 1, standing: 1",
		"hair: 4, person: 4, portrait: 3, man: 3, beard: 3, sunglasses: 3, glasses: 3, eyewear: 2, face: 2, old: 2, photo: 2, people: 1, one: 1, adult: 1, eyeglasses: 1, facial hair: 1, mustache: 1, writer: 1, monochrome: 1, popularity: 1, look: 1, scientist: 1, mens black framed eyeglasses: 1, photograph: 1, hairstyle: 1, chin: 1, forehead: 1, self-portrait: 1, moustache: 1, human: 1, accessory: 1, accessories: 1, head: 1, photography: 1, drawing: 1, art: 1, art gallery: 1, indoors: 1, museum (indoor): 1, coonskin cap: 1, cap: 1, headdress: 1, ash grey color: 1, gray color: 1, a man wearing glasses posing for the camera: 1, wearing: 1, looking: 1, posing: 1, standing: 1, camera: 1, black: 1, white: 1, close: 1, young: 1, shirt: 1",
		"building: 5, temple: 3, architecture: 2, gold: 2, old: 2, spire: 2, bronze: 2, tower: 2, travel: 1, ancient: 1, culture: 1, religion: 1, art: 1, no person: 1, castle: 1, buddha: 1, sky: 1, traditional: 1, city: 1, sacred: 1, spirituality: 1, ornate: 1, monument: 1, brown and black leather tote bag: 1, place of worship: 1, brass: 1, metal: 1, stupa: 1, mosque: 1, vehicle: 1, rocket: 1, transportation: 1, furniture: 1, shrine: 1, worship: 1, dome: 1, steeple: 1, repository (monument): 1, enclosure: 1, inkstand: 1, tray: 1, utensil: 1, mausoleum: 1, religious site: 1, religious building: 1, ultramarine color: 1, a statue of a person: 1, table: 1, sitting: 1, front: 1, large: 1, standing: 1, man: 1, boat: 1, water: 1, statue: 1, yellow: 1, white: 1, clock: 1, holding: 1, display: 1, tall: 1, people: 1, street: 1",
		"art: 3, painting: 3, person: 3, woman: 2, portrait: 2, statue: 2, religion: 1, sculpture: 1, people: 1, adult: 1, one: 1, renaissance: 1, veil: 1, saint: 1, god: 1, temple: 1, cave: 1, nude: 1, church: 1, gold: 1, wear: 1, offensive: 1, lady: 1, visual arts: 1, stock photography: 1, self-portrait: 1, human: 1, oil paint: 1, paint: 1, burial chamber: 1, enclosure: 1, masterpiece: 1, museum (indoor): 1, clothing: 1, alabaster color: 1, a statue of a person: 1, standing: 1, man: 1, photo: 1, holding: 1, looking: 1, old: 1, posing: 1, front: 1, wearing: 1, sitting: 1, white: 1, dress: 1, large: 1, room: 1, umbrella: 1",
		"food: 4, sculpture: 2, cream: 2, dessert: 2, cake: 2, no person: 1, desktop: 1, sweet: 1, isolate: 1, nature: 1, art: 1, icee: 1, delicious: 1, ball: 1, old: 1, health: 1, statue: 1, cold: 1, beautiful: 1, closeup: 1, chilled: 1, head: 1, white and brown floral textile: 1, wedding cake: 1, creme: 1, crystal: 1, confectionery: 1, sweets: 1, dish: 1, meal: 1, icing: 1, mineral: 1, glyptic art: 1, figure: 1, vanilla ice cream: 1, ice cream: 1, nutrition: 1, food product: 1, alabaster color: 1, a stuffed animal on display: 1, sitting: 1, white: 1, table: 1, large: 1, standing: 1, holding: 1, display: 1, bear: 1, stuffed: 1, plate: 1, man: 1",
	]

	var art_raw_cats = [
		"sculpture:Clarifai, statue:Clarifai, art:Clarifai, nude:Clarifai, marble:Clarifai, man:Clarifai, figure:Clarifai, ancient:Clarifai, monument:Clarifai, museum:Clarifai, people:Clarifai, carve:Clarifai, no person:Clarifai, architecture:Clarifai, renaissance:Clarifai, old:Clarifai, anatomy:Clarifai, stone:Clarifai, artistic:Clarifai, classic:Clarifai, man and woman ceramic figurine:CloudSight, sculpture:Google Vision, classical sculpture:Google Vision, statue:Google Vision, standing:Google Vision, art:Google Vision, figurine:Google Vision, male:Google Vision, muscle:Google Vision, human body:Google Vision, chest:Google Vision, sculpture:Amazon Rekognition, art:Amazon Rekognition, statue:Amazon Rekognition, figurine:Amazon Rekognition, person:Amazon Rekognition, human:Amazon Rekognition, archaeology:Amazon Rekognition, person:IBM Visual Recognition, museum (indoor):IBM Visual Recognition, sculpture:IBM Visual Recognition, alabaster color:IBM Visual Recognition, a sculpture of a man:Microsoft Computer Vision, building:Microsoft Computer Vision, sculpture:Microsoft Computer Vision, person:Microsoft Computer Vision, man:Microsoft Computer Vision, standing:Microsoft Computer Vision, holding:Microsoft Computer Vision, front:Microsoft Computer Vision, wearing:Microsoft Computer Vision, large:Microsoft Computer Vision, posing:Microsoft Computer Vision, white:Microsoft Computer Vision, table:Microsoft Computer Vision, suit:Microsoft Computer Vision, stone:Microsoft Computer Vision, cake:Microsoft Computer Vision, old:Microsoft Computer Vision, board:Microsoft Computer Vision, young:Microsoft Computer Vision",
		"sculpture:Clarifai, art:Clarifai, ancient:Clarifai, statue:Clarifai, no person:Clarifai, one:Clarifai, people:Clarifai, buddha:Clarifai, man:Clarifai, religion:Clarifai, carve:Clarifai, pottery:Clarifai, old:Clarifai, spirituality:Clarifai, antique:Clarifai, archaeology:Clarifai, traditional:Clarifai, portrait:Clarifai, clay:Clarifai, museum:Clarifai, brown wooden tiki mask decor:CloudSight, sculpture:Google Vision, forehead:Google Vision, head:Google Vision, art:Google Vision, chin:Google Vision, figurine:Google Vision, stone carving:Google Vision, classical sculpture:Google Vision, statue:Google Vision, carving:Google Vision, head:Amazon Rekognition, bronze:Amazon Rekognition, person:Amazon Rekognition, human:Amazon Rekognition, sculpture:Amazon Rekognition, art:Amazon Rekognition, figurine:Amazon Rekognition, archaeology:Amazon Rekognition, person:IBM Visual Recognition, artifact:IBM Visual Recognition, socle:IBM Visual Recognition, support:IBM Visual Recognition, supporting structure:IBM Visual Recognition, alabaster color:IBM Visual Recognition, a close up of a person:Microsoft Computer Vision, black:Microsoft Computer Vision, looking:Microsoft Computer Vision, brown:Microsoft Computer Vision, man:Microsoft Computer Vision, cat:Microsoft Computer Vision, standing:Microsoft Computer Vision",
		"portrait:Clarifai, people:Clarifai, man:Clarifai, one:Clarifai, adult:Clarifai, eyeglasses:Clarifai, facial hair:Clarifai, eyewear:Clarifai, mustache:Clarifai, face:Clarifai, writer:Clarifai, hair:Clarifai, monochrome:Clarifai, beard:Clarifai, popularity:Clarifai, person:Clarifai, old:Clarifai, sunglasses:Clarifai, look:Clarifai, scientist:Clarifai, mens black framed eyeglasses:CloudSight, hair:Google Vision, photograph:Google Vision, portrait:Google Vision, hairstyle:Google Vision, chin:Google Vision, forehead:Google Vision, eyewear:Google Vision, self-portrait:Google Vision, moustache:Google Vision, glasses:Google Vision, face:Amazon Rekognition, human:Amazon Rekognition, person:Amazon Rekognition, accessory:Amazon Rekognition, sunglasses:Amazon Rekognition, accessories:Amazon Rekognition, beard:Amazon Rekognition, head:Amazon Rekognition, portrait:Amazon Rekognition, photo:Amazon Rekognition, photography:Amazon Rekognition, glasses:Amazon Rekognition, hair:Amazon Rekognition, man:Amazon Rekognition, drawing:Amazon Rekognition, art:Amazon Rekognition, art gallery:IBM Visual Recognition, indoors:IBM Visual Recognition, museum (indoor):IBM Visual Recognition, person:IBM Visual Recognition, beard:IBM Visual Recognition, coonskin cap:IBM Visual Recognition, cap:IBM Visual Recognition, headdress:IBM Visual Recognition, ash grey color:IBM Visual Recognition, gray color:IBM Visual Recognition, a man wearing glasses posing for the camera:Microsoft Computer Vision, man:Microsoft Computer Vision, person:Microsoft Computer Vision, glasses:Microsoft Computer Vision, wearing:Microsoft Computer Vision, looking:Microsoft Computer Vision, posing:Microsoft Computer Vision, photo:Microsoft Computer Vision, standing:Microsoft Computer Vision, camera:Microsoft Computer Vision, sunglasses:Microsoft Computer Vision, black:Microsoft Computer Vision, hair:Microsoft Computer Vision, white:Microsoft Computer Vision, close:Microsoft Computer Vision, young:Microsoft Computer Vision, old:Microsoft Computer Vision, shirt:Microsoft Computer Vision",
		"travel:Clarifai, architecture:Clarifai, gold:Clarifai, ancient:Clarifai, temple:Clarifai, old:Clarifai, culture:Clarifai, religion:Clarifai, art:Clarifai, no person:Clarifai, castle:Clarifai, buddha:Clarifai, sky:Clarifai, traditional:Clarifai, city:Clarifai, building:Clarifai, sacred:Clarifai, spirituality:Clarifai, ornate:Clarifai, monument:Clarifai, brown and black leather tote bag:CloudSight, place of worship:Google Vision, brass:Google Vision, metal:Google Vision, stupa:Google Vision, mosque:Google Vision, building:Google Vision, spire:Google Vision, bronze:Google Vision, architecture:Amazon Rekognition, building:Amazon Rekognition, gold:Amazon Rekognition, vehicle:Amazon Rekognition, rocket:Amazon Rekognition, transportation:Amazon Rekognition, temple:Amazon Rekognition, bronze:Amazon Rekognition, furniture:Amazon Rekognition, shrine:Amazon Rekognition, worship:Amazon Rekognition, dome:Amazon Rekognition, tower:Amazon Rekognition, spire:Amazon Rekognition, steeple:Amazon Rekognition, repository (monument):IBM Visual Recognition, enclosure:IBM Visual Recognition, inkstand:IBM Visual Recognition, tray:IBM Visual Recognition, utensil:IBM Visual Recognition, mausoleum:IBM Visual Recognition, religious site:IBM Visual Recognition, building:IBM Visual Recognition, religious building:IBM Visual Recognition, temple:IBM Visual Recognition, ultramarine color:IBM Visual Recognition, a statue of a person:Microsoft Computer Vision, table:Microsoft Computer Vision, building:Microsoft Computer Vision, sitting:Microsoft Computer Vision, front:Microsoft Computer Vision, large:Microsoft Computer Vision, standing:Microsoft Computer Vision, man:Microsoft Computer Vision, boat:Microsoft Computer Vision, old:Microsoft Computer Vision, water:Microsoft Computer Vision, statue:Microsoft Computer Vision, yellow:Microsoft Computer Vision, white:Microsoft Computer Vision, clock:Microsoft Computer Vision, holding:Microsoft Computer Vision, display:Microsoft Computer Vision, tall:Microsoft Computer Vision, people:Microsoft Computer Vision, tower:Microsoft Computer Vision, street:Microsoft Computer Vision",
		"art:Clarifai, painting:Clarifai, woman:Clarifai, religion:Clarifai, sculpture:Clarifai, people:Clarifai, portrait:Clarifai, adult:Clarifai, one:Clarifai, renaissance:Clarifai, statue:Clarifai, veil:Clarifai, saint:Clarifai, god:Clarifai, temple:Clarifai, cave:Clarifai, nude:Clarifai, church:Clarifai, gold:Clarifai, wear:Clarifai, offensive:CloudSight, painting:Google Vision, lady:Google Vision, portrait:Google Vision, art:Google Vision, visual arts:Google Vision, stock photography:Google Vision, self-portrait:Google Vision, art:Amazon Rekognition, painting:Amazon Rekognition, human:Amazon Rekognition, person:Amazon Rekognition, person:IBM Visual Recognition, oil paint:IBM Visual Recognition, paint:IBM Visual Recognition, burial chamber:IBM Visual Recognition, enclosure:IBM Visual Recognition, masterpiece:IBM Visual Recognition, museum (indoor):IBM Visual Recognition, clothing:IBM Visual Recognition, alabaster color:IBM Visual Recognition, a statue of a person:Microsoft Computer Vision, person:Microsoft Computer Vision, standing:Microsoft Computer Vision, man:Microsoft Computer Vision, photo:Microsoft Computer Vision, holding:Microsoft Computer Vision, looking:Microsoft Computer Vision, woman:Microsoft Computer Vision, old:Microsoft Computer Vision, posing:Microsoft Computer Vision, front:Microsoft Computer Vision, wearing:Microsoft Computer Vision, sitting:Microsoft Computer Vision, white:Microsoft Computer Vision, statue:Microsoft Computer Vision, dress:Microsoft Computer Vision, large:Microsoft Computer Vision, room:Microsoft Computer Vision, umbrella:Microsoft Computer Vision",
		"sculpture:Clarifai, no person:Clarifai, desktop:Clarifai, food:Clarifai, sweet:Clarifai, isolate:Clarifai, nature:Clarifai, art:Clarifai, icee:Clarifai, delicious:Clarifai, ball:Clarifai, old:Clarifai, health:Clarifai, statue:Clarifai, cream:Clarifai, cold:Clarifai, beautiful:Clarifai, closeup:Clarifai, chilled:Clarifai, head:Clarifai, white and brown floral textile:CloudSight, food:Amazon Rekognition, dessert:Amazon Rekognition, cake:Amazon Rekognition, wedding cake:Amazon Rekognition, creme:Amazon Rekognition, cream:Amazon Rekognition, crystal:Amazon Rekognition, confectionery:Amazon Rekognition, sweets:Amazon Rekognition, dish:Amazon Rekognition, meal:Amazon Rekognition, icing:Amazon Rekognition, mineral:Amazon Rekognition, glyptic art:IBM Visual Recognition, sculpture:IBM Visual Recognition, figure:IBM Visual Recognition, vanilla ice cream:IBM Visual Recognition, ice cream:IBM Visual Recognition, dessert:IBM Visual Recognition, nutrition:IBM Visual Recognition, food:IBM Visual Recognition, food product:IBM Visual Recognition, alabaster color:IBM Visual Recognition, a stuffed animal on display:Microsoft Computer Vision, sitting:Microsoft Computer Vision, white:Microsoft Computer Vision, cake:Microsoft Computer Vision, table:Microsoft Computer Vision, food:Microsoft Computer Vision, large:Microsoft Computer Vision, standing:Microsoft Computer Vision, holding:Microsoft Computer Vision, display:Microsoft Computer Vision, bear:Microsoft Computer Vision, stuffed:Microsoft Computer Vision, plate:Microsoft Computer Vision, man:Microsoft Computer Vision",

	]

	var art = []


	// for (var i = 0; i < art_raw.length; i++) {
	// 	piece = art_raw[i]
	// 	console.log("Raw")
	// 	console.log(piece)
	// 	split = piece.split(", ")
	// 	art.push(split)
	// }


	// count = 0
	// for (var i = 0; i < art.length; i++) {
	// 	piece = art[i]
	// 	console.log("Post raw")
	// 	console.log(piece)
	// 	print_tags(count.toString(), piece)
	// 	count += 1

	// }

	// CATEGORIZED BY SERVICE

	var art_cats = []

	for (var i = 0; i < art_raw_cats.length; i++) {
		piece = art_raw_cats[i]
		console.log("Raw cat")
		console.log(piece)
		split = piece.split(", ")
		art_cats.push(split)
	};

	console.log("OK")

	count = 0
	for (var i = 0; i < art_cats.length; i++) {
		piece = art_cats[i]
		console.log("Post raw cat")
		console.log(piece)
		print_tags_cat(count.toString(), piece)
		console.log("WTF")
		count += 1

	};

	// piece = ["sculpture: 5", "statue: 3", "art: 3"]

	function print_tags(div, piece){
		console.log("DIV")
		console.log(div)

		tags = []
		weights = []
		tags_html = "<p>"

		for (var i = 0; i < piece.length; i++) {
			touple = piece[i]
			singles = touple.split(": ")
			tags.push(singles[0])
			weights.push(parseInt(singles[1]))

			tags_html += singles[0]
			if (i != piece.length - 1) {
				tags_html += ", "
			}
		}

		console.log("Tags & Weights")
		console.log(tags)
		console.log(weights)

		var data = [{
		  	values: weights,
		  	labels: tags,
		  	type: 'pie',
		  	textinfo: 'none'
		}];

		var layout = {
			paper_bgcolor: 'rgba(10,10,10,1)',
    		plot_bgcolor: 'rgba(10,10,10,1)',
			showlegend: false,
			legend: {
				font: {
				      size: 10,
				}
			}
		};

		Plotly.newPlot(div, data, layout, {displayModeBar: false}, {responsive: true});

		tags_html += "</p>"

		div += "_tag"

		$("#" + div).html("<p>" + tags_html + "</p>");
	};

	function print_tags_cat(div, piece) {
		console.log("HERE")
		console.log(div)

		services = ["Clarifai", "CloudSight", "Google_Vision", "Amazon_Rekognition", "IBM_Visual_Recognition", "Microsoft_Computer_Vision"]


		 Clarifai = []
		 CloudSight = []
		 Google_Vision = []
		 Amazon_Rekognition = []
		 IBM_Visual_Recognition = []
		 Microsoft_Computer_Vision = []


//		 Clarifai, CloudSight, Google_Vision, Amazon_Rekognition, IBM_Visual_Recognition, Microsoft_Computer_Vision



		for (var i = 0; i < piece.length; i++) {
			touple = piece[i]
			singles = touple.split(":")

			// singles[0] - the tag
			tag = singles[0]

			// singles[1] - the service
			service = singles[1].replace(" ", "_")

			if (service == "Clarifai") {

				Clarifai.push(tag)
			}
			else if (service == "CloudSight") {
				CloudSight.push(tag)

			}
			else if (service == "Google_Vision") {
				Google_Vision.push(tag)

			}
			else if (service == "Amazon_Rekognition") {
				Amazon_Rekognition.push(tag)

			}
			else if (service == "IBM_Visual_Recognition") {
				IBM_Visual_Recognition.push(tag)

			}
			else {
				Microsoft_Computer_Vision.push(tag)
			}

		}

		master = []
		master.push(Clarifai)
		master.push(CloudSight)
		master.push(Google_Vision)
		master.push(Amazon_Rekognition)
		master.push(IBM_Visual_Recognition)
		master.push(Microsoft_Computer_Vision)

		console.log("MASTER")
		console.log(master)


		update_tags(master, services, div)
	};

	function update_tags(master, services, div) {

		for (var i = 0; i < master.length; i++) {
			tags_html = ""
			temp_list = master[i]
			console.log("temp list")
			console.log(temp_list)
			for (var j = 0; j < temp_list.length; i++) {
				tags_html += temp_list[j]
				if (j != temp_list.length - 1) {
					tags_html += ", "
				}
			}

			divv = "#" + services[i] + "_" + div
			console.log("DIVV")
			console.log(divv)


			$(divv).html("<p>" + tags_html + "</p>");
		}

	}
});


