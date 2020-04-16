$(document).ready(function(){





	var art_raw = [

		"clothing: 4, shirt: 3, sleeve: 3, jacket: 3, pattern: 3, garment: 2, apparel: 2, dress: 2, blouse: 2, design: 2, coat: 2, person: 2, fashion: 1, wear: 1, cotton: 1, elegant: 1, wardrobe: 1, style: 1, shopping: 1, casual: 1, color: 1, boutique: 1, isoluted: 1, modern: 1, women blue purple and brown floral button-up jacket: 1, gray and pink floral button up jacket: 1, outerwear: 1, visual arts: 1, textile: 1, top: 1, human: 1, blazer: 1, paisley: 1, long sleeve: 1, shirtwaist: 1, shirt button: 1, fastener: 1, restraint (chains): 1, bush jacket: 1, overgarment: 1, shirttail: 1, fabric: 1, camise (shirt): 1, work-shirt: 1, sage green color: 1, gray color: 1, a man wearing a costume: 1, indoor: 1, man: 1, standing: 1, holding: 1, wearing: 1, yellow: 1, looking: 1, boy: 1, old: 1, hat: 1, young: 1, table: 1, colorful: 1, phone: 1, woman: 1, white: 1, room: 1, umbrella: 1, bed: 1, cat: 1",
		"flower: 5, plant: 3, insect: 3, leaf: 2, flowering plant: 2, animal: 2, invertebrate: 2, bird: 2, flora: 1, nature: 1, no person: 1, summer: 1, illustration: 1, color: 1, husk: 1, desktop: 1, tropical: 1, biology: 1, isoluted: 1, decoration: 1, print: 1, garden: 1, bright: 1, flower with red longhorn beetle and butterfly painting: 1, green and white leaf plant: 1, botany: 1, plant stem: 1, ginger family: 1, canna family: 1, text: 1, honey bee: 1, bee: 1, blossom: 1, art: 1, butterfly: 1, welwitschia (strap like leaves): 1, petiole: 1, spadix: 1, leaf shape: 1, luna moth: 1, moth: 1, stanhopea: 1, orchid: 1, sage green color: 1, pale yellow color: 1, a vase of flowers on a table: 1, table: 1, sitting: 1, small: 1, vase: 1, holding: 1, filled: 1, different: 1, white: 1, glass: 1, group: 1",
		"art: 3, painting: 3, illustration: 2, man: 2, picture frame: 2, people: 1, adult: 1, wear: 1, competition: 1, man riding an elephant beside person riding a horse painting: 1, brown and black wooden wall decor: 1, bullfighting: 1, performance: 1, human: 1, person: 1, animal: 1, leisure activities: 1, mammal: 1, tapestry: 1, fabric: 1, book jacket: 1, wrapping: 1, paper based (stamps/currency): 1, written document: 1, passe-partout (frame): 1, framework: 1, supporting structure: 1, indian red color: 1, olive green color: 1, a close up of a book: 1, text: 1, book: 1, photo: 1, table: 1, sitting: 1, old: 1, lying: 1, holding: 1, laying: 1, white: 1, stuffed: 1",
		"pattern: 4, art: 3, rug: 3, white: 2, embroidery: 2, decoration: 1, vector: 1, ornate: 1, illustration: 1, retro: 1, design: 1, floral: 1, picture frame: 1, vintage: 1, flower: 1, antique: 1, margin: 1, texture: 1, element: 1, graphic: 1, style: 1, white-red-and-green eagle and floral print textile: 1, red: 1, and green floral print board: 1, textile: 1, rectangle: 1, visual arts: 1, plant: 1, needlework: 1, floral design: 1, graphics: 1, stitch: 1, quilt: 1, home decor: 1, screen: 1, indoors: 1, arabesque (ornament): 1, floor cover: 1, tapestry: 1, fabric: 1, protective covering: 1, maroon color: 1, olive green color: 1, a close up of furniture: 1, furniture: 1, sitting: 1, large: 1",
		"group: 3, painting: 3, art: 3, people: 2, man: 2, woman: 2, room: 2, mammal: 2, indoors: 2, person: 2, chair: 2, musical instrument: 2, adult: 1, many: 1, child: 1, container: 1, recration: 1, music: 1, home: 1, education: 1, waear: 1, two: 1, painting of timeout boxing event: 1, black wooden framed wall decor: 1, visual arts: 1, human: 1, furniture: 1, leisure activities: 1, dance pose: 1, piano: 1, stage: 1, bar counter: 1, pub: 1, musician: 1, pianist: 1, performer: 1, carthorse: 1, odd-toed ungulate (hoofed mammal): 1, animal: 1, torture chamber: 1, palanquin (closed litter): 1, electric chair: 1, coal miner: 1, laborer: 1, workman: 1, barber shop: 1, black color: 1, a group of people in a room: 1, indoor: 1, table: 1, building: 1, sitting: 1, giraffe: 1, front: 1, living: 1, standing: 1, display: 1",
		"sheep: 6, herd: 4, mammal: 3, livestock: 2, landscape: 2, grassland: 2, hill: 2, grazing: 2, pasture: 2, animal: 2, flock: 2, no person: 1, agriculture: 1, outdoors: 1, wildlife: 1, desert: 1, farm: 1, travel: 1, cattle: 1, lamb: 1, nature: 1, sheep lot: 1, brown and white animal painting: 1, herding: 1, shepherd: 1, human: 1, person: 1, art: 1, painting: 1, ruminant: 1, domestic sheep: 1, wild sheep: 1, black color: 1, gray color: 1, a herd of sheep standing on top of a grass covered field: 1, grass: 1, outdoor: 1, field: 1, hay: 1, standing: 1, grassy: 1, large: 1, brown: 1, open: 1, background: 1, group: 1, white: 1, cloudy: 1, green: 1, man: 1",
		"pattern: 3, art: 3, illustration: 2, drawing: 2, decoration: 1, ornate: 1, antique: 1, retro: 1, design: 1, style: 1, vintage: 1, desktop: 1, texture: 1, floral: 1, white and brown framed picture of birds: 1, white and gray floral print textile: 1, visual arts: 1, carving: 1, printmaking: 1, black-and-white: 1, artwork: 1, fictional character: 1, rug: 1, graphics: 1, floral design: 1, doodle: 1, pargeting (ornamental plasterwork): 1, fabric: 1, alabaster color: 1, graffiti on a wall: 1, graffiti: 1, stone: 1",
		"dirty: 2, old: 2, empty: 2, yellow: 2, no person: 1, abandoned: 1, retro: 1, rusty: 1, food: 1, broken: 1, antique: 1, decay: 1, white soap: 1, white bar soap: 1, wall: 1, architecture: 1, room: 1, plumbing fixture: 1, toilet: 1, floor: 1, mold: 1, house: 1, ceiling: 1, staircase: 1, mat: 1, doorsill: 1, support: 1, dry rot: 1, fungus: 1, dustpan: 1, receptacle: 1, soil pipe: 1, indoors: 1, beige color: 1, indoor: 1, building: 1, sitting: 1, tiled: 1, hole: 1, stove: 1, man: 1, white: 1, oven: 1, pizza: 1",
		"art: 2, tree: 2, white: 2, branch: 2, drawing: 2, desktop: 1, abstract: 1, monochrome: 1, design: 1, graphic: 1, vintage: 1, texture: 1, black and white: 1, leafless tree: 1, close: 1, leaf: 1, line art: 1, black-and-white: 1, botany: 1, visual arts: 1, plant: 1, sketch: 1, doodle: 1, paper: 1, tangle: 1, wiring: 1, electrical device: 1, study: 1, transmission line: 1, wire: 1, conductor: 1, light brown color: 1, gray color: 1, a bird sitting on a branch: 1, sitting: 1, bird: 1, water: 1, hanging: 1, yellow: 1, perched: 1, sign: 1",
		"paper: 3, art: 3, rug: 2, graffiti: 2, fabric: 2, no person: 1, handprint: 1, painting: 1, pattern: 1, texture: 1, dirty: 1, desktop: 1, artistic: 1, wear: 1, messy: 1, kanji text: 1, white and red printed textile: 1, beige: 1, illustration: 1, text: 1, alphabet: 1, floor cover: 1, cookie cutter: 1, utensil: 1, tapestry: 1, packet: 1, brick red color: 1, a graffiti covered wall: 1, photo: 1, painted: 1, elephant: 1, stop: 1, covered: 1, sitting: 1, drawn: 1, holding: 1, sign: 1, old: 1, red: 1, table: 1, white: 1, man: 1, food: 1",
		"art: 3, illustration: 2, old: 2, drawing: 2, tree: 2, grass: 2, print: 1, engraving: 1, vintage: 1, retro: 1, paper: 1, antiquez: 1, black and white tree painting: 1, gray and black abstract painting: 1, artwork: 1, sketch: 1, modern art: 1, plant: 1, printmaking: 1, painting: 1, silverpoint: 1, half binding book: 1, protective covering: 1, gray color: 1, a tree in a field: 1, outdoor: 1, field: 1, photo: 1, white: 1, standing: 1, man: 1, black: 1, large: 1, horse: 1, flying: 1, covered: 1, young: 1, riding: 1, walking: 1, tall: 1, woman: 1, sheep: 1, snow: 1, water: 1, rug: 1, people: 1",
		"people: 5, crowd: 5, many: 2, group: 2, building: 2, person: 2, factory: 2, adult: 1, group together: 1, war: 1, military: 1, gray scale photo of vendors and people: 1, grayscale photo of people: 1, history: 1, team: 1, human: 1, urban: 1, slum: 1, bike: 1, bicycle: 1, transportation: 1, vehicle: 1, painting: 1, art: 1, manufacturing: 1, sweatshop: 1, death camp: 1, institution: 1, black color: 1, gray color: 1, a vintage photo of a large crowd of people: 1, photo: 1, outdoor: 1, old: 1, white: 1, player: 1, black: 1, vintage: 1, large: 1, filled: 1, lot: 1, crowded: 1, full: 1, holding: 1, standing: 1, bunch: 1, field: 1, table: 1, restaurant: 1, man: 1, umbrella: 1, river: 1, street: 1",
		"art: 3, illustration: 2, painting: 2, person: 2, people: 1, print: 1, adult: 1, wear: 1, man: 1, group: 1, engraving: 1, n/a: 1, black wooden framed painting of man: 1, printmaking: 1, stock photography: 1, visual arts: 1, modern art: 1, artwork: 1, human: 1, drawing: 1, sonogram: 1, arthrogram (x-ray): 1, radiogram: 1, passe-partout (frame): 1, framework: 1, supporting structure: 1, autoradiograph: 1, intravenous pyelogram: 1, black color: 1, a black and white photo of a person: 1, text: 1, building: 1, photo: 1, black: 1, old: 1, white: 1, standing: 1, woman: 1, young: 1",
		"architecture: 3, building: 3, wall: 2, bridge: 2, railing: 2, no person: 1, empty: 1, step: 1, modern: 1, business: 1, perspective: 1, sky: 1, expression: 1, contempory: 1, window: 1, glass items: 1, handrail: 1, outdoors: 1, gray metal bridge photo: 1, white and black area rug: 1, blue: 1, line: 1, painting: 1, modern art: 1, stairs: 1, room: 1, illustration: 1, rectangle: 1, road: 1, path: 1, freeway: 1, pedestrian: 1, waterfront: 1, water: 1, pier: 1, port: 1, dock: 1, overpass: 1, staircase: 1, walkway: 1, city: 1, street: 1, urban: 1, town: 1, stringer (wooden): 1, timber: 1, support: 1, barrier: 1, parapet (low wall): 1, steel blue color: 1, a close up of a bridge: 1, indoor: 1, man: 1, white: 1, black: 1, sitting: 1, rail: 1, young: 1, board: 1, riding: 1, jumping: 1, wooden: 1, boy: 1, large: 1, trick: 1, doing: 1, track: 1, kitchen: 1, air: 1, train: 1, platform: 1, bench: 1, standing: 1",
		"man: 2, sports equipment: 2, person: 2, table: 2, people: 1, no person: 1, competition: 1, adult: 1, wear: 1, action: 1, school: 1, one: 1, white blue and brown two legged animated animal near ladder illustration: 1, animal under moon illustration: 1, floor: 1, performance: 1, human: 1, super mario: 1, flagpole: 1, racquetball: 1, court game: 1, athletic game: 1, sport: 1, sports track: 1, table-tennis table: 1, furniture: 1, drogue parachute: 1, parachute: 1, rescue equipment: 1, catheter tube: 1, javelin: 1, coal black color: 1, a person in a dark room: 1, black: 1, laptop: 1, sitting: 1, computer: 1, dark: 1, holding: 1, standing: 1, playing: 1, young: 1, red: 1, room: 1, suit: 1, woman: 1, cat: 1, white: 1, kite: 1, court: 1, player: 1",
		"art: 3, pattern: 2, illustration: 2, design: 2, rug: 2, wallpaper: 1, abstract: 1, decoration: 1, seamless: 1, texture: 1, brown black and red artwork: 1, white and black polka dot textile: 1, textile: 1, visual arts: 1, modern art: 1, non-sporting group: 1, painting: 1, arabesque (ornament): 1, floor cover: 1, damask fabric: 1, fabric: 1, print: 1, shower curtain: 1, curtain: 1, screen: 1, protective covering: 1, cotton: 1, a close up of a sign: 1, indoor: 1, decorated: 1, sitting: 1, table: 1, large: 1, baby: 1, holding: 1, bowl: 1, white: 1, elephant: 1, young: 1, old: 1, woman: 1, computer: 1, sign: 1, cat: 1, group: 1",
		"nature: 2, art: 2, desktop: 1, design: 1, illustration: 1, blank: 1, wall: 1, texture: 1, empty: 1, abstract: 1, pattern: 1, image: 1, paper: 1, clear glass trees leaser etch figurine: 1, white and gray abstract painting: 1, glass: 1, transparent material: 1, rectangle: 1, architecture: 1, outdoors: 1, ice: 1, snow: 1, home decor: 1, rug: 1, scenery: 1, winter: 1, frost: 1, landscape: 1, sconce (lighting): 1, light source: 1, block: 1, lamp: 1, figure: 1, tableware: 1, fabric: 1, ash grey color: 1, gray color: 1, table: 1, sitting: 1, white: 1, man: 1, board: 1, water: 1, room: 1, vase: 1, riding: 1, standing: 1, tall: 1",
		"porcelain: 3, pottery: 2, art: 2, gold: 2, round: 2, plate: 2, tableware: 2, platter: 2, earthenware: 2, decoration: 1, cernamic: 1, round out: 1, symbol: 1, ancient: 1, white and brown decorative round plate: 1, round brown and green floral plate: 1, dishware: 1, ceramic: 1, circle: 1, fictional character: 1, metal: 1, food: 1, dish: 1, meal: 1, rug: 1, majolica earthenware: 1, utensil: 1, pale yellow color: 1, a round white plate: 1, thing: 1, sitting: 1, large: 1, white: 1, yellow: 1, black: 1, table: 1, sign: 1, blue: 1",

	]

	var art_raw_cats = [

		"fashion:Clarifai, wear:Clarifai, garment:Clarifai, shirt:Clarifai, sleeve:Clarifai, jacket:Clarifai, apparel:Clarifai, cotton:Clarifai, dress:Clarifai, elegant:Clarifai, wardrobe:Clarifai, style:Clarifai, shopping:Clarifai, casual:Clarifai, blouse:Clarifai, design:Clarifai, color:Clarifai, boutique:Clarifai, isoluted:Clarifai, modern:Clarifai, women blue purple and brown floral button-up jacket:CloudSight, gray and pink floral button up jacket:CloudSight Hybrid, clothing:Google Vision, outerwear:Google Vision, sleeve:Google Vision, jacket:Google Vision, pattern:Google Vision, visual arts:Google Vision, design:Google Vision, pattern:Google Vision, textile:Google Vision, top:Google Vision, clothing:Amazon Rekognition, apparel:Amazon Rekognition, jacket:Amazon Rekognition, coat:Amazon Rekognition, pattern:Amazon Rekognition, human:Amazon Rekognition, person:Amazon Rekognition, blazer:Amazon Rekognition, paisley:Amazon Rekognition, long sleeve:Amazon Rekognition, sleeve:Amazon Rekognition, shirtwaist:IBM Visual Recognition, shirt button:IBM Visual Recognition, fastener:IBM Visual Recognition, restraint (chains):IBM Visual Recognition, bush jacket:IBM Visual Recognition, coat:IBM Visual Recognition, overgarment:IBM Visual Recognition, garment:IBM Visual Recognition, shirttail:IBM Visual Recognition, fabric:IBM Visual Recognition, camise (shirt):IBM Visual Recognition, shirt:IBM Visual Recognition, blouse:IBM Visual Recognition, work-shirt:IBM Visual Recognition, dress:IBM Visual Recognition, clothing:IBM Visual Recognition, sage green color:IBM Visual Recognition, gray color:IBM Visual Recognition, a man wearing a costume:Microsoft Computer Vision, clothing:Microsoft Computer Vision, person:Microsoft Computer Vision, indoor:Microsoft Computer Vision, man:Microsoft Computer Vision, standing:Microsoft Computer Vision, holding:Microsoft Computer Vision, wearing:Microsoft Computer Vision, yellow:Microsoft Computer Vision, looking:Microsoft Computer Vision, shirt:Microsoft Computer Vision, boy:Microsoft Computer Vision, old:Microsoft Computer Vision, hat:Microsoft Computer Vision, young:Microsoft Computer Vision, table:Microsoft Computer Vision, colorful:Microsoft Computer Vision, phone:Microsoft Computer Vision, woman:Microsoft Computer Vision, white:Microsoft Computer Vision, room:Microsoft Computer Vision, umbrella:Microsoft Computer Vision, bed:Microsoft Computer Vision, cat:Microsoft Computer Vision",
		"flora:Clarifai, leaf:Clarifai, nature:Clarifai, no person:Clarifai, flower:Clarifai, summer:Clarifai, illustration:Clarifai, color:Clarifai, husk:Clarifai, desktop:Clarifai, tropical:Clarifai, biology:Clarifai, isoluted:Clarifai, decoration:Clarifai, print:Clarifai, garden:Clarifai, bright:Clarifai, flower with red longhorn beetle and butterfly painting:CloudSight, green and white leaf plant:CloudSight Hybrid, flowering plant:Google Vision, flower:Google Vision, plant:Google Vision, botany:Google Vision, plant stem:Google Vision, ginger family:Google Vision, canna family:Google Vision, insect:Google Vision, leaf:Amazon Rekognition, plant:Amazon Rekognition, animal:Amazon Rekognition, insect:Amazon Rekognition, invertebrate:Amazon Rekognition, text:Amazon Rekognition, bird:Amazon Rekognition, honey bee:Amazon Rekognition, bee:Amazon Rekognition, blossom:Amazon Rekognition, flower:Amazon Rekognition, art:Amazon Rekognition, butterfly:Amazon Rekognition, welwitschia (strap like leaves):IBM Visual Recognition, plant:IBM Visual Recognition, petiole:IBM Visual Recognition, spadix:IBM Visual Recognition, leaf shape:IBM Visual Recognition, luna moth:IBM Visual Recognition, moth:IBM Visual Recognition, insect:IBM Visual Recognition, invertebrate:IBM Visual Recognition, animal:IBM Visual Recognition, stanhopea:IBM Visual Recognition, orchid:IBM Visual Recognition, flower:IBM Visual Recognition, flowering plant:IBM Visual Recognition, sage green color:IBM Visual Recognition, pale yellow color:IBM Visual Recognition, a vase of flowers on a table:Microsoft Computer Vision, table:Microsoft Computer Vision, flower:Microsoft Computer Vision, sitting:Microsoft Computer Vision, small:Microsoft Computer Vision, vase:Microsoft Computer Vision, holding:Microsoft Computer Vision, filled:Microsoft Computer Vision, bird:Microsoft Computer Vision, different:Microsoft Computer Vision, white:Microsoft Computer Vision, glass:Microsoft Computer Vision, group:Microsoft Computer Vision",
		"illustration:Clarifai, art:Clarifai, people:Clarifai, painting:Clarifai, man:Clarifai, adult:Clarifai, wear:Clarifai, competition:Clarifai, man riding an elephant beside person riding a horse painting:CloudSight, brown and black wooden wall decor:CloudSight Hybrid, painting:Google Vision, art:Google Vision, bullfighting:Google Vision, performance:Google Vision, picture frame:Google Vision, illustration:Google Vision, human:Amazon Rekognition, person:Amazon Rekognition, animal:Amazon Rekognition, art:Amazon Rekognition, leisure activities:Amazon Rekognition, mammal:Amazon Rekognition, painting:Amazon Rekognition, tapestry:IBM Visual Recognition, fabric:IBM Visual Recognition, book jacket:IBM Visual Recognition, wrapping:IBM Visual Recognition, paper based (stamps/currency):IBM Visual Recognition, written document:IBM Visual Recognition, passe-partout (frame):IBM Visual Recognition, framework:IBM Visual Recognition, supporting structure:IBM Visual Recognition, picture frame:IBM Visual Recognition, indian red color:IBM Visual Recognition, olive green color:IBM Visual Recognition, a close up of a book:Microsoft Computer Vision, text:Microsoft Computer Vision, book:Microsoft Computer Vision, photo:Microsoft Computer Vision, table:Microsoft Computer Vision, sitting:Microsoft Computer Vision, old:Microsoft Computer Vision, lying:Microsoft Computer Vision, holding:Microsoft Computer Vision, laying:Microsoft Computer Vision, man:Microsoft Computer Vision, white:Microsoft Computer Vision, stuffed:Microsoft Computer Vision",
		"decoration:Clarifai, pattern:Clarifai, vector:Clarifai, ornate:Clarifai, illustration:Clarifai, retro:Clarifai, design:Clarifai, floral:Clarifai, art:Clarifai, picture frame:Clarifai, vintage:Clarifai, flower:Clarifai, antique:Clarifai, margin:Clarifai, texture:Clarifai, element:Clarifai, graphic:Clarifai, style:Clarifai, white-red-and-green eagle and floral print textile:CloudSight, white:CloudSight Hybrid, red:CloudSight Hybrid, and green floral print board:CloudSight Hybrid, textile:Google Vision, pattern:Google Vision, embroidery:Google Vision, rectangle:Google Vision, pattern:Google Vision, visual arts:Google Vision, plant:Google Vision, art:Google Vision, rug:Google Vision, needlework:Google Vision, pattern:Amazon Rekognition, embroidery:Amazon Rekognition, rug:Amazon Rekognition, art:Amazon Rekognition, floral design:Amazon Rekognition, graphics:Amazon Rekognition, stitch:Amazon Rekognition, quilt:Amazon Rekognition, home decor:Amazon Rekognition, screen:IBM Visual Recognition, indoors:IBM Visual Recognition, arabesque (ornament):IBM Visual Recognition, rug:IBM Visual Recognition, floor cover:IBM Visual Recognition, tapestry:IBM Visual Recognition, fabric:IBM Visual Recognition, protective covering:IBM Visual Recognition, maroon color:IBM Visual Recognition, olive green color:IBM Visual Recognition, a close up of furniture:Microsoft Computer Vision, furniture:Microsoft Computer Vision, sitting:Microsoft Computer Vision, large:Microsoft Computer Vision, white:Microsoft Computer Vision",
		"people:Clarifai, group:Clarifai, adult:Clarifai, many:Clarifai, man:Clarifai, child:Clarifai, woman:Clarifai, painting:Clarifai, container:Clarifai, recration:Clarifai, music:Clarifai, room:Clarifai, home:Clarifai, education:Clarifai, art:Clarifai, waear:Clarifai, mammal:Clarifai, two:Clarifai, group:Clarifai, indoors:Clarifai, painting of timeout boxing event:CloudSight, black wooden framed wall decor:CloudSight Hybrid, visual arts:Google Vision, art:Google Vision, painting:Google Vision, human:Amazon Rekognition, person:Amazon Rekognition, chair:Amazon Rekognition, furniture:Amazon Rekognition, leisure activities:Amazon Rekognition, dance pose:Amazon Rekognition, art:Amazon Rekognition, painting:Amazon Rekognition, piano:Amazon Rekognition, musical instrument:Amazon Rekognition, stage:Amazon Rekognition, bar counter:Amazon Rekognition, pub:Amazon Rekognition, musician:Amazon Rekognition, pianist:Amazon Rekognition, performer:Amazon Rekognition, carthorse:IBM Visual Recognition, odd-toed ungulate (hoofed mammal):IBM Visual Recognition, mammal:IBM Visual Recognition, animal:IBM Visual Recognition, torture chamber:IBM Visual Recognition, indoors:IBM Visual Recognition, palanquin (closed litter):IBM Visual Recognition, electric chair:IBM Visual Recognition, coal miner:IBM Visual Recognition, laborer:IBM Visual Recognition, workman:IBM Visual Recognition, person:IBM Visual Recognition, barber shop:IBM Visual Recognition, musical instrument:IBM Visual Recognition, black color:IBM Visual Recognition, a group of people in a room:Microsoft Computer Vision, indoor:Microsoft Computer Vision, chair:Microsoft Computer Vision, table:Microsoft Computer Vision, building:Microsoft Computer Vision, sitting:Microsoft Computer Vision, giraffe:Microsoft Computer Vision, room:Microsoft Computer Vision, front:Microsoft Computer Vision, living:Microsoft Computer Vision, group:Microsoft Computer Vision, standing:Microsoft Computer Vision, woman:Microsoft Computer Vision, man:Microsoft Computer Vision, display:Microsoft Computer Vision, people:Microsoft Computer Vision",
		"sheep:Clarifai, no person:Clarifai, mammal:Clarifai, agriculture:Clarifai, outdoors:Clarifai, livestock:Clarifai, landscape:Clarifai, wildlife:Clarifai, desert:Clarifai, farm:Clarifai, grassland:Clarifai, herd:Clarifai, travel:Clarifai, cattle:Clarifai, hill:Clarifai, lamb:Clarifai, nature:Clarifai, sheep lot:CloudSight, brown and white animal painting:CloudSight Hybrid, herd:Google Vision, sheep:Google Vision, sheep:Google Vision, grazing:Google Vision, herding:Google Vision, grassland:Google Vision, pasture:Google Vision, shepherd:Google Vision, livestock:Google Vision, landscape:Google Vision, animal:Amazon Rekognition, mammal:Amazon Rekognition, sheep:Amazon Rekognition, flock:Amazon Rekognition, herd:Amazon Rekognition, human:Amazon Rekognition, person:Amazon Rekognition, art:Amazon Rekognition, painting:Amazon Rekognition, sheep:IBM Visual Recognition, ruminant:IBM Visual Recognition, mammal:IBM Visual Recognition, animal:IBM Visual Recognition, domestic sheep:IBM Visual Recognition, wild sheep:IBM Visual Recognition, black color:IBM Visual Recognition, gray color:IBM Visual Recognition, a herd of sheep standing on top of a grass covered field:Microsoft Computer Vision, grass:Microsoft Computer Vision, outdoor:Microsoft Computer Vision, sheep:Microsoft Computer Vision, field:Microsoft Computer Vision, grazing:Microsoft Computer Vision, herd:Microsoft Computer Vision, hay:Microsoft Computer Vision, standing:Microsoft Computer Vision, grassy:Microsoft Computer Vision, pasture:Microsoft Computer Vision, large:Microsoft Computer Vision, brown:Microsoft Computer Vision, open:Microsoft Computer Vision, background:Microsoft Computer Vision, group:Microsoft Computer Vision, flock:Microsoft Computer Vision, hill:Microsoft Computer Vision, white:Microsoft Computer Vision, cloudy:Microsoft Computer Vision, green:Microsoft Computer Vision, man:Microsoft Computer Vision",
		"decoration:Clarifai, pattern:Clarifai, art:Clarifai, ornate:Clarifai, antique:Clarifai, retro:Clarifai, design:Clarifai, style:Clarifai, vintage:Clarifai, desktop:Clarifai, texture:Clarifai, floral:Clarifai, illustration:Clarifai, white and brown framed picture of birds:CloudSight, white and gray floral print textile:CloudSight Hybrid, art:Google Vision, illustration:Google Vision, visual arts:Google Vision, drawing:Google Vision, carving:Google Vision, printmaking:Google Vision, black-and-white:Google Vision, pattern:Google Vision, artwork:Google Vision, fictional character:Google Vision, rug:Amazon Rekognition, pattern:Amazon Rekognition, graphics:Amazon Rekognition, art:Amazon Rekognition, floral design:Amazon Rekognition, doodle:Amazon Rekognition, drawing:Amazon Rekognition, pargeting (ornamental plasterwork):IBM Visual Recognition, fabric:IBM Visual Recognition, alabaster color:IBM Visual Recognition, graffiti on a wall:Microsoft Computer Vision, graffiti:Microsoft Computer Vision, stone:Microsoft Computer Vision",
		"no person:Clarifai, abandoned:Clarifai, dirty:Clarifai, old:Clarifai, retro:Clarifai, rusty:Clarifai, food:Clarifai, broken:Clarifai, empty:Clarifai, antique:Clarifai, decay:Clarifai, white soap:CloudSight, white bar soap:CloudSight Hybrid, yellow:Google Vision, wall:Google Vision, architecture:Google Vision, room:Google Vision, plumbing fixture:Google Vision, toilet:Google Vision, floor:Google Vision, mold:Google Vision, house:Google Vision, ceiling:Google Vision, staircase:Amazon Rekognition, mat:Amazon Rekognition, doorsill:IBM Visual Recognition, support:IBM Visual Recognition, dry rot:IBM Visual Recognition, fungus:IBM Visual Recognition, dustpan:IBM Visual Recognition, receptacle:IBM Visual Recognition, soil pipe:IBM Visual Recognition, indoors:IBM Visual Recognition, beige color:IBM Visual Recognition, indoor:Microsoft Computer Vision, dirty:Microsoft Computer Vision, building:Microsoft Computer Vision, sitting:Microsoft Computer Vision, old:Microsoft Computer Vision, empty:Microsoft Computer Vision, tiled:Microsoft Computer Vision, hole:Microsoft Computer Vision, stove:Microsoft Computer Vision, man:Microsoft Computer Vision, white:Microsoft Computer Vision, yellow:Microsoft Computer Vision, oven:Microsoft Computer Vision, pizza:Microsoft Computer Vision",
		"desktop:Clarifai, art:Clarifai, abstract:Clarifai, monochrome:Clarifai, design:Clarifai, graphic:Clarifai, vintage:Clarifai, texture:Clarifai, tree:Clarifai, black and white:Clarifai, leafless tree:CloudSight, close:CloudSight Hybrid, white:Google Vision, leaf:Google Vision, branch:Google Vision, line art:Google Vision, black-and-white:Google Vision, tree:Google Vision, botany:Google Vision, drawing:Google Vision, visual arts:Google Vision, plant:Google Vision, drawing:Amazon Rekognition, art:Amazon Rekognition, sketch:Amazon Rekognition, doodle:Amazon Rekognition, paper:Amazon Rekognition, tangle:IBM Visual Recognition, wiring:IBM Visual Recognition, electrical device:IBM Visual Recognition, study:IBM Visual Recognition, transmission line:IBM Visual Recognition, wire:IBM Visual Recognition, conductor:IBM Visual Recognition, light brown color:IBM Visual Recognition, gray color:IBM Visual Recognition, a bird sitting on a branch:Microsoft Computer Vision, sitting:Microsoft Computer Vision, bird:Microsoft Computer Vision, water:Microsoft Computer Vision, branch:Microsoft Computer Vision, hanging:Microsoft Computer Vision, white:Microsoft Computer Vision, yellow:Microsoft Computer Vision, perched:Microsoft Computer Vision, sign:Microsoft Computer Vision",
		"no person:Clarifai, handprint:Clarifai, paper:Clarifai, art:Clarifai, painting:Clarifai, pattern:Clarifai, texture:Clarifai, dirty:Clarifai, desktop:Clarifai, artistic:Clarifai, wear:Clarifai, messy:Clarifai, kanji text:CloudSight, white and red printed textile:CloudSight Hybrid, art:Google Vision, beige:Google Vision, illustration:Google Vision, text:Amazon Rekognition, rug:Amazon Rekognition, art:Amazon Rekognition, paper:Amazon Rekognition, alphabet:Amazon Rekognition, rug:IBM Visual Recognition, floor cover:IBM Visual Recognition, graffiti:IBM Visual Recognition, cookie cutter:IBM Visual Recognition, utensil:IBM Visual Recognition, tapestry:IBM Visual Recognition, fabric:IBM Visual Recognition, packet:IBM Visual Recognition, brick red color:IBM Visual Recognition, a graffiti covered wall:Microsoft Computer Vision, photo:Microsoft Computer Vision, paper:Microsoft Computer Vision, painted:Microsoft Computer Vision, elephant:Microsoft Computer Vision, stop:Microsoft Computer Vision, covered:Microsoft Computer Vision, sitting:Microsoft Computer Vision, fabric:Microsoft Computer Vision, drawn:Microsoft Computer Vision, holding:Microsoft Computer Vision, sign:Microsoft Computer Vision, old:Microsoft Computer Vision, red:Microsoft Computer Vision, graffiti:Microsoft Computer Vision, table:Microsoft Computer Vision, white:Microsoft Computer Vision, man:Microsoft Computer Vision, food:Microsoft Computer Vision",
		"illustration:Clarifai, print:Clarifai, art:Clarifai, engraving:Clarifai, vintage:Clarifai, old:Clarifai, retro:Clarifai, paper:Clarifai, antiquez:Clarifai, black and white tree painting:CloudSight, gray and black abstract painting:CloudSight Hybrid, drawing:Google Vision, tree:Google Vision, artwork:Google Vision, sketch:Google Vision, grass:Google Vision, art:Google Vision, modern art:Google Vision, plant:Google Vision, illustration:Google Vision, printmaking:Google Vision, art:Amazon Rekognition, drawing:Amazon Rekognition, painting:Amazon Rekognition, silverpoint:IBM Visual Recognition, half binding book:IBM Visual Recognition, protective covering:IBM Visual Recognition, gray color:IBM Visual Recognition, a tree in a field:Microsoft Computer Vision, outdoor:Microsoft Computer Vision, grass:Microsoft Computer Vision, field:Microsoft Computer Vision, photo:Microsoft Computer Vision, white:Microsoft Computer Vision, standing:Microsoft Computer Vision, man:Microsoft Computer Vision, black:Microsoft Computer Vision, large:Microsoft Computer Vision, horse:Microsoft Computer Vision, old:Microsoft Computer Vision, flying:Microsoft Computer Vision, covered:Microsoft Computer Vision, young:Microsoft Computer Vision, riding:Microsoft Computer Vision, walking:Microsoft Computer Vision, tall:Microsoft Computer Vision, woman:Microsoft Computer Vision, tree:Microsoft Computer Vision, sheep:Microsoft Computer Vision, snow:Microsoft Computer Vision, water:Microsoft Computer Vision, rug:Microsoft Computer Vision, people:Microsoft Computer Vision",
		"people:Clarifai, many:Clarifai, group:Clarifai, crowd:Clarifai, adult:Clarifai, group together:Clarifai, war:Clarifai, military:Clarifai, gray scale photo of vendors and people:CloudSight, grayscale photo of people:CloudSight Hybrid, people:Google Vision, history:Google Vision, crowd:Google Vision, team:Google Vision, building:Amazon Rekognition, person:Amazon Rekognition, human:Amazon Rekognition, urban:Amazon Rekognition, factory:Amazon Rekognition, slum:Amazon Rekognition, crowd:Amazon Rekognition, people:Amazon Rekognition, bike:Amazon Rekognition, bicycle:Amazon Rekognition, transportation:Amazon Rekognition, vehicle:Amazon Rekognition, painting:Amazon Rekognition, art:Amazon Rekognition, manufacturing:Amazon Rekognition, person:IBM Visual Recognition, crowd:IBM Visual Recognition, people:IBM Visual Recognition, sweatshop:IBM Visual Recognition, factory:IBM Visual Recognition, death camp:IBM Visual Recognition, institution:IBM Visual Recognition, building:IBM Visual Recognition, black color:IBM Visual Recognition, gray color:IBM Visual Recognition, a vintage photo of a large crowd of people:Microsoft Computer Vision, photo:Microsoft Computer Vision, outdoor:Microsoft Computer Vision, old:Microsoft Computer Vision, white:Microsoft Computer Vision, group:Microsoft Computer Vision, people:Microsoft Computer Vision, crowd:Microsoft Computer Vision, many:Microsoft Computer Vision, player:Microsoft Computer Vision, black:Microsoft Computer Vision, vintage:Microsoft Computer Vision, large:Microsoft Computer Vision, filled:Microsoft Computer Vision, lot:Microsoft Computer Vision, crowded:Microsoft Computer Vision, full:Microsoft Computer Vision, holding:Microsoft Computer Vision, standing:Microsoft Computer Vision, bunch:Microsoft Computer Vision, field:Microsoft Computer Vision, table:Microsoft Computer Vision, restaurant:Microsoft Computer Vision, man:Microsoft Computer Vision, umbrella:Microsoft Computer Vision, river:Microsoft Computer Vision, street:Microsoft Computer Vision",
		"people:Clarifai, print:Clarifai, adult:Clarifai, art:Clarifai, wear:Clarifai, man:Clarifai, illustration:Clarifai, group:Clarifai, engraving:Clarifai, n/a:CloudSight, black wooden framed painting of man:CloudSight Hybrid, art:Google Vision, painting:Google Vision, printmaking:Google Vision, illustration:Google Vision, stock photography:Google Vision, visual arts:Google Vision, modern art:Google Vision, artwork:Google Vision, painting:Amazon Rekognition, art:Amazon Rekognition, person:Amazon Rekognition, human:Amazon Rekognition, drawing:Amazon Rekognition, person:IBM Visual Recognition, sonogram:IBM Visual Recognition, arthrogram (x-ray):IBM Visual Recognition, radiogram:IBM Visual Recognition, passe-partout (frame):IBM Visual Recognition, framework:IBM Visual Recognition, supporting structure:IBM Visual Recognition, autoradiograph:IBM Visual Recognition, intravenous pyelogram:IBM Visual Recognition, black color:IBM Visual Recognition, a black and white photo of a person:Microsoft Computer Vision, text:Microsoft Computer Vision, building:Microsoft Computer Vision, photo:Microsoft Computer Vision, black:Microsoft Computer Vision, old:Microsoft Computer Vision, white:Microsoft Computer Vision, standing:Microsoft Computer Vision, woman:Microsoft Computer Vision, young:Microsoft Computer Vision",
		"no person:Clarifai, architecture:Clarifai, empty:Clarifai, step:Clarifai, modern:Clarifai, business:Clarifai, perspective:Clarifai, sky:Clarifai, expression:Clarifai, contempory:Clarifai, window:Clarifai, glass items:Clarifai, building:Clarifai, handrail:Clarifai, outdoors:Clarifai, gray metal bridge photo:CloudSight, white and black area rug:CloudSight Hybrid, blue:Google Vision, wall:Google Vision, line:Google Vision, painting:Google Vision, architecture:Google Vision, modern art:Google Vision, stairs:Google Vision, room:Google Vision, illustration:Google Vision, rectangle:Google Vision, building:Amazon Rekognition, road:Amazon Rekognition, bridge:Amazon Rekognition, path:Amazon Rekognition, freeway:Amazon Rekognition, pedestrian:Amazon Rekognition, waterfront:Amazon Rekognition, water:Amazon Rekognition, architecture:Amazon Rekognition, pier:Amazon Rekognition, port:Amazon Rekognition, dock:Amazon Rekognition, overpass:Amazon Rekognition, staircase:Amazon Rekognition, walkway:Amazon Rekognition, city:Amazon Rekognition, street:Amazon Rekognition, urban:Amazon Rekognition, town:Amazon Rekognition, stringer (wooden):IBM Visual Recognition, timber:IBM Visual Recognition, support:IBM Visual Recognition, railing:IBM Visual Recognition, barrier:IBM Visual Recognition, parapet (low wall):IBM Visual Recognition, wall:IBM Visual Recognition, steel blue color:IBM Visual Recognition, a close up of a bridge:Microsoft Computer Vision, building:Microsoft Computer Vision, indoor:Microsoft Computer Vision, bridge:Microsoft Computer Vision, man:Microsoft Computer Vision, white:Microsoft Computer Vision, black:Microsoft Computer Vision, sitting:Microsoft Computer Vision, rail:Microsoft Computer Vision, young:Microsoft Computer Vision, railing:Microsoft Computer Vision, board:Microsoft Computer Vision, riding:Microsoft Computer Vision, jumping:Microsoft Computer Vision, wooden:Microsoft Computer Vision, boy:Microsoft Computer Vision, large:Microsoft Computer Vision, trick:Microsoft Computer Vision, doing:Microsoft Computer Vision, track:Microsoft Computer Vision, kitchen:Microsoft Computer Vision, air:Microsoft Computer Vision, train:Microsoft Computer Vision, platform:Microsoft Computer Vision, bench:Microsoft Computer Vision, standing:Microsoft Computer Vision",
		"people:Clarifai, no person:Clarifai, competition:Clarifai, adult:Clarifai, wear:Clarifai, man:Clarifai, action:Clarifai, school:Clarifai, one:Clarifai, sports equipment:Clarifai, white blue and brown two legged animated animal near ladder illustration:CloudSight, animal under moon illustration:CloudSight Hybrid, floor:Google Vision, performance:Google Vision, human:Amazon Rekognition, person:Amazon Rekognition, super mario:Amazon Rekognition, person:IBM Visual Recognition, flagpole:IBM Visual Recognition, racquetball:IBM Visual Recognition, court game:IBM Visual Recognition, athletic game:IBM Visual Recognition, sport:IBM Visual Recognition, sports track:IBM Visual Recognition, table-tennis table:IBM Visual Recognition, table:IBM Visual Recognition, furniture:IBM Visual Recognition, drogue parachute:IBM Visual Recognition, parachute:IBM Visual Recognition, rescue equipment:IBM Visual Recognition, catheter tube:IBM Visual Recognition, javelin:IBM Visual Recognition, sports equipment:IBM Visual Recognition, coal black color:IBM Visual Recognition, a person in a dark room:Microsoft Computer Vision, black:Microsoft Computer Vision, laptop:Microsoft Computer Vision, sitting:Microsoft Computer Vision, computer:Microsoft Computer Vision, man:Microsoft Computer Vision, dark:Microsoft Computer Vision, holding:Microsoft Computer Vision, standing:Microsoft Computer Vision, playing:Microsoft Computer Vision, young:Microsoft Computer Vision, red:Microsoft Computer Vision, room:Microsoft Computer Vision, suit:Microsoft Computer Vision, woman:Microsoft Computer Vision, table:Microsoft Computer Vision, cat:Microsoft Computer Vision, white:Microsoft Computer Vision, kite:Microsoft Computer Vision, court:Microsoft Computer Vision, player:Microsoft Computer Vision",
		"pattern:Clarifai, illustration:Clarifai, wallpaper:Clarifai, abstract:Clarifai, decoration:Clarifai, seamless:Clarifai, texture:Clarifai, design:Clarifai, art:Clarifai, brown black and red artwork:CloudSight, white and black polka dot textile:CloudSight Hybrid, pattern:Google Vision, design:Google Vision, textile:Google Vision, visual arts:Google Vision, art:Google Vision, modern art:Google Vision, non-sporting group:Google Vision, painting:Google Vision, illustration:Google Vision, rug:Amazon Rekognition, art:Amazon Rekognition, arabesque (ornament):IBM Visual Recognition, rug:IBM Visual Recognition, floor cover:IBM Visual Recognition, damask fabric:IBM Visual Recognition, fabric:IBM Visual Recognition, print:IBM Visual Recognition, shower curtain:IBM Visual Recognition, curtain:IBM Visual Recognition, screen:IBM Visual Recognition, protective covering:IBM Visual Recognition, cotton:IBM Visual Recognition, a close up of a sign:Microsoft Computer Vision, indoor:Microsoft Computer Vision, decorated:Microsoft Computer Vision, sitting:Microsoft Computer Vision, table:Microsoft Computer Vision, large:Microsoft Computer Vision, baby:Microsoft Computer Vision, holding:Microsoft Computer Vision, bowl:Microsoft Computer Vision, white:Microsoft Computer Vision, elephant:Microsoft Computer Vision, young:Microsoft Computer Vision, old:Microsoft Computer Vision, woman:Microsoft Computer Vision, computer:Microsoft Computer Vision, sign:Microsoft Computer Vision, cat:Microsoft Computer Vision, group:Microsoft Computer Vision",
		"desktop:Clarifai, design:Clarifai, illustration:Clarifai, blank:Clarifai, wall:Clarifai, texture:Clarifai, empty:Clarifai, abstract:Clarifai, pattern:Clarifai, image:Clarifai, paper:Clarifai, nature:Clarifai, clear glass trees leaser etch figurine:CloudSight, white and gray abstract painting:CloudSight Hybrid, glass:Google Vision, transparent material:Google Vision, rectangle:Google Vision, architecture:Google Vision, art:Google Vision, nature:Amazon Rekognition, outdoors:Amazon Rekognition, ice:Amazon Rekognition, snow:Amazon Rekognition, home decor:Amazon Rekognition, rug:Amazon Rekognition, scenery:Amazon Rekognition, winter:Amazon Rekognition, frost:Amazon Rekognition, landscape:Amazon Rekognition, art:Amazon Rekognition, sconce (lighting):IBM Visual Recognition, light source:IBM Visual Recognition, block:IBM Visual Recognition, lamp:IBM Visual Recognition, figure:IBM Visual Recognition, tableware:IBM Visual Recognition, fabric:IBM Visual Recognition, ash grey color:IBM Visual Recognition, gray color:IBM Visual Recognition, table:Microsoft Computer Vision, sitting:Microsoft Computer Vision, white:Microsoft Computer Vision, man:Microsoft Computer Vision, board:Microsoft Computer Vision, water:Microsoft Computer Vision, room:Microsoft Computer Vision, vase:Microsoft Computer Vision, riding:Microsoft Computer Vision, standing:Microsoft Computer Vision, tall:Microsoft Computer Vision",
		"decoration:Clarifai, pottery:Clarifai, art:Clarifai, cernamic:Clarifai, gold:Clarifai, round:Clarifai, round out:Clarifai, symbol:Clarifai, porcelain:Clarifai, ancient:Clarifai, white and brown decorative round plate:CloudSight, round brown and green floral plate:CloudSight Hybrid, dishware:Google Vision, plate:Google Vision, ceramic:Google Vision, porcelain:Google Vision, tableware:Google Vision, circle:Google Vision, platter:Google Vision, earthenware:Google Vision, fictional character:Google Vision, metal:Google Vision, art:Amazon Rekognition, porcelain:Amazon Rekognition, pottery:Amazon Rekognition, food:Amazon Rekognition, dish:Amazon Rekognition, meal:Amazon Rekognition, rug:Amazon Rekognition, platter:Amazon Rekognition, majolica earthenware:IBM Visual Recognition, earthenware:IBM Visual Recognition, utensil:IBM Visual Recognition, tableware:IBM Visual Recognition, pale yellow color:IBM Visual Recognition, a round white plate:Microsoft Computer Vision, thing:Microsoft Computer Vision, sitting:Microsoft Computer Vision, large:Microsoft Computer Vision, white:Microsoft Computer Vision, round:Microsoft Computer Vision, yellow:Microsoft Computer Vision, black:Microsoft Computer Vision, table:Microsoft Computer Vision, sign:Microsoft Computer Vision, gold:Microsoft Computer Vision, plate:Microsoft Computer Vision, blue:Microsoft Computer Vision",


	]

	var art_weight = []


	// CATEGORIZED BY SERVICE

	var art_cats = []

	for (var i = 0; i < art_raw_cats.length; i++) {
		piece_cats = art_raw_cats[i]
		split_cats = piece_cats.split(", ")
		art_cats.push(split_cats)

		piece_weight = art_raw[i]
		split_weight = piece_weight.split(", ")
		art_weight.push(split_weight)
	};




	count = 0
	for (var i = 0; i < art_cats.length; i++) {
		piece_cats = art_cats[i]

		piece_weight = art_weight[i]

		print_tags(count.toString(), piece_cats, piece_weight)
		count += 1
	};

	function print_tags(div, piece, piece_weighted) {


		services = ["Clarifai", "CloudSight", "CloudSight_Hybrid", "Google_Vision", "Amazon_Rekognition", "IBM_Visual_Recognition", "Microsoft_Computer_Vision"]

//		 Clarifai, CloudSight, Google_Vision, Amazon_Rekognition, IBM_Visual_Recognition, Microsoft_Computer_Vision

		master = {"Clarifai":[], "CloudSight":[], "CloudSight_Hybrid":[], "Google_Vision":[], "Amazon_Rekognition":[], "IBM_Visual_Recognition":[], "Microsoft_Computer_Vision":[]}


		weight_dict = {}

		for (var i = 0; i < piece_weighted.length; i++) {

			touple_weight = piece_weighted[i]
			singles_weight = touple_weight.split(": ")

			weight_dict[singles_weight[0]] = parseInt(singles_weight[1])
		}





		graph_id = div + "_pie"

		//create_graphs(graph_id, weight_dict)
		//create_graphs_bar(graph_id, weight_dict)

		for (var i = 0; i < piece.length; i++) {

			touple = piece[i]

			singles = touple.split(":")

			// singles[0] - the tag, singles_weight[1] - the weight
			tag_and_weight = singles[0]

			// singles[1] - the service
			service = singles[1].replace(/ /g, "_")

			// current values of list
			curs = []

			// list to be copied over
			news = []

			curs = master[service]


			for (var j = 0; j < curs.length; j++) {
				news.push(curs[j])
			}

			news.push(tag_and_weight)

			master[service] = news

		}



		for (var i = 0; i < services.length; i++) {

			tags = master[services[i]]

			id = "#" + services[i] + "_" + div
			update_tags(services[i], tags, id, weight_dict)

		}		

		
	};

	function update_tags(service, tags, id, weight_dict) {


		color_dict = ["#616161", "#fab95b", "#ff502f", "#009975", "#454d66", "#7572f4", "#207dff"]

		html_output = "<p>"

		for (var j = 0; j < tags.length; j++) {

			weight = weight_dict[tags[j]]


			color = "<span style='color:" + color_dict[weight - 1] + "'>"

			//html_output += tags[j]

			html_output += color + tags[j] + "</span>"


			if (j != tags.length - 1) {
				html_output += ", "
			}
		}

		html_output += "</p>"


		$(id).html(html_output);
	}

	function create_graphs(id, weight_dict) {

		tags = []
		weights = []

		for (var key in weight_dict) {
		    // check if the property/key is defined in the object itself, not in parent
		    if (weight_dict.hasOwnProperty(key)) {           
		        tags.push(key)
		        weights.push(weight_dict[key])
		    }
		}




	  	var ctxP = document.getElementById(id).getContext('2d');
	  	var myPieChart = new Chart(ctxP, {
	    	type: 'pie',
	    	data: {
	      		labels: tags,
	      		datasets: [{
	        		data: weights,
	        		// backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
	        		// hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
	      		}]
	    	},
	    	options: {
	    		legend: {
		            display: true,
		            position: 'left'
		         },
		        plugins: {
			      	colorschemes: {
			        	scheme: 'tableau.Tableau20'
			      	}
			    },
		    	
				
	      		responsive: true
	    	},
		});

	}

	function create_graphs_bar(id, weight_dict) {

		tags = []
		weights = []

		for (var key in weight_dict) {
		    // check if the property/key is defined in the object itself, not in parent
		    if (weight_dict.hasOwnProperty(key)) {           
		        tags.push(key)
		        weights.push(weight_dict[key])
		    }
		}
		var ctx = document.getElementById(id).getContext('2d');

		var myBarChart = new Chart(ctx, {
		    type: 'horizontalBar',
	    	data: {
	      		labels: tags,
	      		datasets: [{
	        		data: weights,
	        		// backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
	        		// hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
	      		}]
	    	},
		});
	}
});


