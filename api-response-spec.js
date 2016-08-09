exports = {
	next_stash_id: Number,
	stashes: [
		{
			id: Number, // unique, permanent id of the stash tab
			accountName: String,
			lastCharacterName: String,
			public: Boolean,
			stash: String, // Name of the stash tab
			stashType: String // options: 'PremiumStash', 'NormalStash'
			items: [
				{
					id: String, // DO NOT KNOW. Maybe, a unique and permanent id for this item until it is no longer owned by this character (is that true? :/)
					verified: Boolean, // DO NOT KNOW
					league: String,
					lockedToCharacter: Boolean,
					name: String, // Name of item for rares and such.. not very sure how this works.
					typeLine: String, // item type, i.e.: 'Ursine Pelt', 'Coral Ring'
					ilvl: Number,
					icon: String,
					frameType: Number, // DO NOT KNOW.. Maybe rarity!
					inventoryId: String, // `Stash${index of item in stashes.items array}`
					identified: Boolean,
					corrupted: Boolean,
					h: Number, // height of item
					w: Number, // width of item
					x: Number, // x offset from top-left of stash tab
					y: Number, // y offset from top-left of stash tab
					requirements: [
						{
							displayMode: Number,
							name: String,
							values: [[String, Number]]
						}
					],
					properties: [
						{
							displayMode: Number,
							name: String,
							values: [[String, Number]]
						}
					],
					implicitMods: [String],
					explicitMods: [String],
					craftedMods: [String],
					sockets: [
						{
							attr: String, // Indicates color with options: 'I': blue, 'D': green, 'S': red, unknown for white. 
							group: Number // Sockets of the same group are linked
						}
					],
					socketedItems: [
						{
							// Gem properties, largely the same structure as elements of stashes.items
						}
					],
				}
			]
		}
	]
}