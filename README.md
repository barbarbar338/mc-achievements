# Minecraft Achievement Creator 🦄

- Quickly create custom Minecraft achievements for yourself. ✨
- Choose the one you like among more than 100 icons. 💯

## Important Note 🙀

This package uses [canvas](https://www.npmjs.com/package/canvas). Please read canvas install instructions first.

## Usage ✅

```js
const { ICONS, AchievementCreator } = require("mc-achievements");
// OR
import { ICONS, AchievementCreator } from "mc-achievements";

const buffer = AchievementCreator.create({
	icon: ICONS.ironLeggings,
	title: "This is title!",
	content: "This is content",
});
```

Output:

![Example Output](./assets/achievement.png)

## Contributing / Issues 🐛

- Feel free to open pull requests or issues 🙀

## Icons 💡

<!-- markdownlint-disable MD033 -->

- Use `ICONS.icon_name` to access icons (eg. `ICONS.apple`)
- <img src="./assets/icons/apple.png" height="25" alt="apple" style="vertical-align: text-bottom;"/> apple: "apple.png"
- <img src="./assets/icons/arrow.png" height="25" alt="arrow" style="vertical-align: text-bottom;"/> arrow: "arrow.png"
- <img src="./assets/icons/bed.png" height="25" alt="bed" style="vertical-align: text-bottom;"/> bed: "bed.png"
- <img src="./assets/icons/bedrock.png" height="25" alt="bedrock" style="vertical-align: text-bottom;"/> bedrock: "bedrock.png"
- <img src="./assets/icons/blaze_powder.png" height="25" alt="blaze_powder" style="vertical-align: text-bottom;"/> blazePowder: "blaze_powder.png"
- <img src="./assets/icons/blaze_rod.png" height="25" alt="blaze_rod" style="vertical-align: text-bottom;"/> blazeRod: "blaze_rod.png"
- <img src="./assets/icons/block_of_diamond.png" height="25" alt="block_of_diamond" style="vertical-align: text-bottom;"/> blockOfDiamond: "block_of_diamond.png"
- <img src="./assets/icons/block_of_gold.png" height="25" alt="block_of_gold" style="vertical-align: text-bottom;"/> blockOfGold: "block_of_gold.png"
- <img src="./assets/icons/block_of_iron.png" height="25" alt="block_of_iron" style="vertical-align: text-bottom;"/> blockOfIron: "block_of_iron.png"
- <img src="./assets/icons/boat.png" height="25" alt="boat" style="vertical-align: text-bottom;"/> boat: "boat.png"
- <img src="./assets/icons/bone.png" height="25" alt="bone" style="vertical-align: text-bottom;"/> bone: "bone.png"
- <img src="./assets/icons/bonemeal.png" height="25" alt="bonemeal" style="vertical-align: text-bottom;"/> bonemeal: "bonemeal.png"
- <img src="./assets/icons/book.png" height="25" alt="book" style="vertical-align: text-bottom;"/> book: "book.png"
- <img src="./assets/icons/bottle.png" height="25" alt="bottle" style="vertical-align: text-bottom;"/> bottle: "bottle.png"
- <img src="./assets/icons/bottle_of_enchanting.png" height="25" alt="bottle_of_enchanting" style="vertical-align: text-bottom;"/> bottleOfEnchanting: "bottle_of_enchanting.png"
- <img src="./assets/icons/bow.png" height="25" alt="bow" style="vertical-align: text-bottom;"/> bow: "bow.png"
- <img src="./assets/icons/bowl.png" height="25" alt="bowl" style="vertical-align: text-bottom;"/> bowl: "bowl.png"
- <img src="./assets/icons/bread.png" height="25" alt="bread" style="vertical-align: text-bottom;"/> bread: "bread.png"
- <img src="./assets/icons/brewing_stand.png" height="25" alt="brewing_stand" style="vertical-align: text-bottom;"/> brewingStand: "brewing_stand.png"
- <img src="./assets/icons/bucket.png" height="25" alt="bucket" style="vertical-align: text-bottom;"/> bucket: "bucket.png"
- <img src="./assets/icons/cake.png" height="25" alt="cake" style="vertical-align: text-bottom;"/> cake: "cake.png"
- <img src="./assets/icons/chainmail_boots.png" height="25" alt="chainmail_boots" style="vertical-align: text-bottom;"/> chainmailBoots: "chainmail_boots.png"
- <img src="./assets/icons/chainmail_chestplate.png" height="25" alt="chainmail_chestplate" style="vertical-align: text-bottom;"/> chainmailChestplate: "chainmail_chestplate.png"
- <img src="./assets/icons/chainmail_helmet.png" height="25" alt="chainmail_helmet" style="vertical-align: text-bottom;"/> chainmailHelmet: "chainmail_helmet.png"
- <img src="./assets/icons/chainmail_leggings.png" height="25" alt="chainmail_leggings" style="vertical-align: text-bottom;"/> chainmailLeggings: "chainmail_leggings.png"
- <img src="./assets/icons/charcoal.png" height="25" alt="charcoal" style="vertical-align: text-bottom;"/> charcoal: "charcoal.png"
- <img src="./assets/icons/chest.png" height="25" alt="chest" style="vertical-align: text-bottom;"/> chest: "chest.png"
- <img src="./assets/icons/coal.png" height="25" alt="coal" style="vertical-align: text-bottom;"/> coal: "coal.png"
- <img src="./assets/icons/coal_ore.png" height="25" alt="coal_ore" style="vertical-align: text-bottom;"/> coalOre: "coal_ore.png"
- <img src="./assets/icons/cobblestone.png" height="25" alt="cobblestone" style="vertical-align: text-bottom;"/> cobblestone: "cobblestone.png"
- <img src="./assets/icons/compass.png" height="25" alt="compass" style="vertical-align: text-bottom;"/> compass: "compass.png"
- <img src="./assets/icons/cooked_chicken.png" height="25" alt="cooked_chicken" style="vertical-align: text-bottom;"/> cookedChicken: "cooked_chicken.png"
- <img src="./assets/icons/cooked_fish.png" height="25" alt="cooked_fish" style="vertical-align: text-bottom;"/> cookedFish: "cooked_fish.png"
- <img src="./assets/icons/cooked_porkchop.png" height="25" alt="cooked_porkchop" style="vertical-align: text-bottom;"/> cookedPorkchop: "cooked_porkchop.png"
- <img src="./assets/icons/cookie.png" height="25" alt="cookie" style="vertical-align: text-bottom;"/> cookie: "cookie.png"
- <img src="./assets/icons/diamond.png" height="25" alt="diamond" style="vertical-align: text-bottom;"/> diamond: "diamond.png"
- <img src="./assets/icons/diamond_axe.png" height="25" alt="diamond_axe" style="vertical-align: text-bottom;"/> diamondAxe: "diamond_axe.png"
- <img src="./assets/icons/diamond_boots.png" height="25" alt="diamond_boots" style="vertical-align: text-bottom;"/> diamondBoots: "diamond_boots.png"
- <img src="./assets/icons/diamond_chestplate.png" height="25" alt="diamond_chestplate" style="vertical-align: text-bottom;"/> diamondChestplate: "diamond_chestplate.png"
- <img src="./assets/icons/diamond_helmet.png" height="25" alt="diamond_helmet" style="vertical-align: text-bottom;"/> diamondHelmet: "diamond_helmet.png"
- <img src="./assets/icons/diamond_hoe.png" height="25" alt="diamond_hoe" style="vertical-align: text-bottom;"/> diamondHoe: "diamond_hoe.png"
- <img src="./assets/icons/diamond_leggings.png" height="25" alt="diamond_leggings" style="vertical-align: text-bottom;"/> diamondLeggings: "diamond_leggings.png"
- <img src="./assets/icons/diamond_ore.png" height="25" alt="diamond_ore" style="vertical-align: text-bottom;"/> diamondOre: "diamond_ore.png"
- <img src="./assets/icons/diamond_pickaxe.png" height="25" alt="diamond_pickaxe" style="vertical-align: text-bottom;"/> diamondPickaxe: "diamond_pickaxe.png"
- <img src="./assets/icons/diamond_shovel.png" height="25" alt="diamond_shovel" style="vertical-align: text-bottom;"/> diamondShovel: "diamond_shovel.png"
- <img src="./assets/icons/diamond_sword.png" height="25" alt="diamond_sword" style="vertical-align: text-bottom;"/> diamondSword: "diamond_sword.png"
- <img src="./assets/icons/dirt.png" height="25" alt="dirt" style="vertical-align: text-bottom;"/> dirt: "dirt.png"
- <img src="./assets/icons/dragon_egg.png" height="25" alt="dragon_egg" style="vertical-align: text-bottom;"/> dragonEgg: "dragon_egg.png"
- <img src="./assets/icons/egg.png" height="25" alt="egg" style="vertical-align: text-bottom;"/> egg: "egg.png"
- <img src="./assets/icons/enchantment_table.png" height="25" alt="enchantment_table" style="vertical-align: text-bottom;"/> enchantmentTable: "enchantment_table.png"
- <img src="./assets/icons/ender_pearl.png" height="25" alt="ender_pearl" style="vertical-align: text-bottom;"/> enderPearl: "ender_pearl.png"
- <img src="./assets/icons/eye_of_ender.png" height="25" alt="eye_of_ender" style="vertical-align: text-bottom;"/> eyeOfEnder: "eye_of_ender.png"
- <img src="./assets/icons/feather.png" height="25" alt="feather" style="vertical-align: text-bottom;"/> feather: "feather.png"
- <img src="./assets/icons/fence.png" height="25" alt="fence" style="vertical-align: text-bottom;"/> fence: "fence.png"
- <img src="./assets/icons/fence_gate.png" height="25" alt="fence_gate" style="vertical-align: text-bottom;"/> fenceGate: "fence_gate.png"
- <img src="./assets/icons/flint.png" height="25" alt="flint" style="vertical-align: text-bottom;"/> flint: "flint.png"
- <img src="./assets/icons/flint_and_steel.png" height="25" alt="flint_and_steel" style="vertical-align: text-bottom;"/> flintAndSteel: "flint_and_steel.png"
- <img src="./assets/icons/furnance.png" height="25" alt="furnance" style="vertical-align: text-bottom;"/> furnance: "furnance.png"
- <img src="./assets/icons/glowstone_dust.png" height="25" alt="glowstone_dust" style="vertical-align: text-bottom;"/> glowstoneDust: "glowstone_dust.png"
- <img src="./assets/icons/gold_apple.png" height="25" alt="gold_apple" style="vertical-align: text-bottom;"/> goldApple: "gold_apple.png"
- <img src="./assets/icons/gold_axe.png" height="25" alt="gold_axe" style="vertical-align: text-bottom;"/> goldAxe: "gold_axe.png"
- <img src="./assets/icons/gold_boots.png" height="25" alt="gold_boots" style="vertical-align: text-bottom;"/> goldBoots: "gold_boots.png"
- <img src="./assets/icons/gold_chestplate.png" height="25" alt="gold_chestplate" style="vertical-align: text-bottom;"/> goldChestplate: "gold_chestplate.png"
- <img src="./assets/icons/gold_helmet.png" height="25" alt="gold_helmet" style="vertical-align: text-bottom;"/> goldHelmet: "gold_helmet.png"
- <img src="./assets/icons/gold_hoe.png" height="25" alt="gold_hoe" style="vertical-align: text-bottom;"/> goldHoe: "gold_hoe.png"
- <img src="./assets/icons/gold_ingot.png" height="25" alt="gold_ingot" style="vertical-align: text-bottom;"/> goldIngot: "gold_ingot.png"
- <img src="./assets/icons/gold_leggings.png" height="25" alt="gold_leggings" style="vertical-align: text-bottom;"/> goldLeggings: "gold_leggings.png"
- <img src="./assets/icons/gold_nugget.png" height="25" alt="gold_nugget" style="vertical-align: text-bottom;"/> goldNugget: "gold_nugget.png"
- <img src="./assets/icons/gold_ore.png" height="25" alt="gold_ore" style="vertical-align: text-bottom;"/> goldOre: "gold_ore.png"
- <img src="./assets/icons/gold_pickaxe.png" height="25" alt="gold_pickaxe" style="vertical-align: text-bottom;"/> goldPickaxe: "gold_pickaxe.png"
- <img src="./assets/icons/gold_shovel.png" height="25" alt="gold_shovel" style="vertical-align: text-bottom;"/> goldShovel: "gold_shovel.png"
- <img src="./assets/icons/gold_sword.png" height="25" alt="gold_sword" style="vertical-align: text-bottom;"/> goldSword: "gold_sword.png"
- <img src="./assets/icons/grass.png" height="25" alt="grass" style="vertical-align: text-bottom;"/> grass: "grass.png"
- <img src="./assets/icons/iron_axe.png" height="25" alt="iron_axe" style="vertical-align: text-bottom;"/> ironAxe: "iron_axe.png"
- <img src="./assets/icons/iron_boots.png" height="25" alt="iron_boots" style="vertical-align: text-bottom;"/> ironBoots: "iron_boots.png"
- <img src="./assets/icons/iron_chestplate.png" height="25" alt="iron_chestplate" style="vertical-align: text-bottom;"/> ironChestplate: "iron_chestplate.png"
- <img src="./assets/icons/iron_helmet.png" height="25" alt="iron_helmet" style="vertical-align: text-bottom;"/> ironHelmet: "iron_helmet.png"
- <img src="./assets/icons/iron_hoe.png" height="25" alt="iron_hoe" style="vertical-align: text-bottom;"/> ironHoe: "iron_hoe.png"
- <img src="./assets/icons/iron_ingot.png" height="25" alt="iron_ingot" style="vertical-align: text-bottom;"/> ironIngot: "iron_ingot.png"
- <img src="./assets/icons/iron_leggings.png" height="25" alt="iron_leggings" style="vertical-align: text-bottom;"/> ironLeggings: "iron_leggings.png"
- <img src="./assets/icons/iron_ore.png" height="25" alt="iron_ore" style="vertical-align: text-bottom;"/> ironOre: "iron_ore.png"
- <img src="./assets/icons/iron_pickaxe.png" height="25" alt="iron_pickaxe" style="vertical-align: text-bottom;"/> ironPickaxe: "iron_pickaxe.png"
- <img src="./assets/icons/iron_shovel.png" height="25" alt="iron_shovel" style="vertical-align: text-bottom;"/> ironShovel: "iron_shovel.png"
- <img src="./assets/icons/iron_sword.png" height="25" alt="iron_sword" style="vertical-align: text-bottom;"/> ironSword: "iron_sword.png"
- <img src="./assets/icons/ladder.png" height="25" alt="ladder" style="vertical-align: text-bottom;"/> ladder: "ladder.png"
- <img src="./assets/icons/lapis_lazuli.png" height="25" alt="lapis_lazuli" style="vertical-align: text-bottom;"/> lapisLazuli: "lapis_lazuli.png"
- <img src="./assets/icons/lava_bucket.png" height="25" alt="lava_bucket" style="vertical-align: text-bottom;"/> lavaBucket: "lava_bucket.png"
- <img src="./assets/icons/leather.png" height="25" alt="leather" style="vertical-align: text-bottom;"/> leather: "leather.png"
- <img src="./assets/icons/leather_boots.png" height="25" alt="leather_boots" style="vertical-align: text-bottom;"/> leatherBoots: "leather_boots.png"
- <img src="./assets/icons/leather_chestplate.png" height="25" alt="leather_chestplate" style="vertical-align: text-bottom;"/> leatherChestplate: "leather_chestplate.png"
- <img src="./assets/icons/leather_helmet.png" height="25" alt="leather_helmet" style="vertical-align: text-bottom;"/> leatherHelmet: "leather_helmet.png"
- <img src="./assets/icons/leather_leggings.png" height="25" alt="leather_leggings" style="vertical-align: text-bottom;"/> leatherLeggings: "leather_leggings.png"
- <img src="./assets/icons/map.png" height="25" alt="map" style="vertical-align: text-bottom;"/> map: "map.png"
- <img src="./assets/icons/melon_slice.png" height="25" alt="melon_slice" style="vertical-align: text-bottom;"/> melonSlice: "melon_slice.png"
- <img src="./assets/icons/milk_bucket.png" height="25" alt="milk_bucket" style="vertical-align: text-bottom;"/> milkBucket: "milk_bucket.png"
- <img src="./assets/icons/minecart.png" height="25" alt="minecart" style="vertical-align: text-bottom;"/> minecart: "minecart.png"
- <img src="./assets/icons/music_disk.png" height="25" alt="music_disk" style="vertical-align: text-bottom;"/> musicDisk: "music_disk.png"
- <img src="./assets/icons/obdisian.png" height="25" alt="obdisian" style="vertical-align: text-bottom;"/> obdisian: "obdisian.png"
- <img src="./assets/icons/paper.png" height="25" alt="paper" style="vertical-align: text-bottom;"/> paper: "paper.png"
- <img src="./assets/icons/piston.png" height="25" alt="piston" style="vertical-align: text-bottom;"/> piston: "piston.png"
- <img src="./assets/icons/potion.png" height="25" alt="potion" style="vertical-align: text-bottom;"/> potion: "potion.png"
- <img src="./assets/icons/pumpkin.png" height="25" alt="pumpkin" style="vertical-align: text-bottom;"/> pumpkin: "pumpkin.png"
- <img src="./assets/icons/rails.png" height="25" alt="rails" style="vertical-align: text-bottom;"/> rails: "rails.png"
- <img src="./assets/icons/raw_beef.png" height="25" alt="raw_beef" style="vertical-align: text-bottom;"/> rawBeef: "raw_beef.png"
- <img src="./assets/icons/raw_chicken.png" height="25" alt="raw_chicken" style="vertical-align: text-bottom;"/> rawChicken: "raw_chicken.png"
- <img src="./assets/icons/raw_fish.png" height="25" alt="raw_fish" style="vertical-align: text-bottom;"/> rawFish: "raw_fish.png"
- <img src="./assets/icons/raw_porkchop.png" height="25" alt="raw_porkchop" style="vertical-align: text-bottom;"/> rawPorkchop: "raw_porkchop.png"
- <img src="./assets/icons/redstone_dust.png" height="25" alt="redstone_dust" style="vertical-align: text-bottom;"/> redstoneDust: "redstone_dust.png"
- <img src="./assets/icons/redstone_ore.png" height="25" alt="redstone_ore" style="vertical-align: text-bottom;"/> redstoneOre: "redstone_ore.png"
- <img src="./assets/icons/redstone_repeater.png" height="25" alt="redstone_repeater" style="vertical-align: text-bottom;"/> redstoneRepeater: "redstone_repeater.png"
- <img src="./assets/icons/redstone_torch.png" height="25" alt="redstone_torch" style="vertical-align: text-bottom;"/> redstoneTorch: "redstone_torch.png"
- <img src="./assets/icons/redstone_wire.png" height="25" alt="redstone_wire" style="vertical-align: text-bottom;"/> redstoneWire: "redstone_wire.png"
- <img src="./assets/icons/rotten_beef.png" height="25" alt="rotten_beef" style="vertical-align: text-bottom;"/> rottenBeef: "rotten_beef.png"
- <img src="./assets/icons/saddle.png" height="25" alt="saddle" style="vertical-align: text-bottom;"/> saddle: "saddle.png"
- <img src="./assets/icons/shears.png" height="25" alt="shears" style="vertical-align: text-bottom;"/> shears: "shears.png"
- <img src="./assets/icons/sign.png" height="25" alt="sign" style="vertical-align: text-bottom;"/> sign: "sign.png"
- <img src="./assets/icons/slimeball.png" height="25" alt="slimeball" style="vertical-align: text-bottom;"/> slimeball: "slimeball.png"
- <img src="./assets/icons/snowball.png" height="25" alt="snowball" style="vertical-align: text-bottom;"/> snowball: "snowball.png"
- <img src="./assets/icons/splash_potion.png" height="25" alt="splash_potion" style="vertical-align: text-bottom;"/> splashPotion: "splash_potion.png"
- <img src="./assets/icons/steak.png" height="25" alt="steak" style="vertical-align: text-bottom;"/> steak: "steak.png"
- <img src="./assets/icons/stick.png" height="25" alt="stick" style="vertical-align: text-bottom;"/> stick: "stick.png"
- <img src="./assets/icons/sticky_piston.png" height="25" alt="sticky_piston" style="vertical-align: text-bottom;"/> stickyPiston: "sticky_piston.png"
- <img src="./assets/icons/stone.png" height="25" alt="stone" style="vertical-align: text-bottom;"/> stone: "stone.png"
- <img src="./assets/icons/stone_axe.png" height="25" alt="stone_axe" style="vertical-align: text-bottom;"/> stoneAxe: "stone_axe.png"
- <img src="./assets/icons/stone_button.png" height="25" alt="stone_button" style="vertical-align: text-bottom;"/> stoneButton: "stone_button.png"
- <img src="./assets/icons/stone_hoe.png" height="25" alt="stone_hoe" style="vertical-align: text-bottom;"/> stoneHoe: "stone_hoe.png"
- <img src="./assets/icons/stone_pickaxe.png" height="25" alt="stone_pickaxe" style="vertical-align: text-bottom;"/> stonePickaxe: "stone_pickaxe.png"
- <img src="./assets/icons/stone_pressure_plate.png" height="25" alt="stone_pressure_plate" style="vertical-align: text-bottom;"/> stonePressurePlate: "stone_pressure_plate.png"
- <img src="./assets/icons/stone_shovel.png" height="25" alt="stone_shovel" style="vertical-align: text-bottom;"/> stoneShovel: "stone_shovel.png"
- <img src="./assets/icons/stone_sword.png" height="25" alt="stone_sword" style="vertical-align: text-bottom;"/> stoneSword: "stone_sword.png"
- <img src="./assets/icons/string.png" height="25" alt="string" style="vertical-align: text-bottom;"/> string: "string.png"
- <img src="./assets/icons/water_bottle.png" height="25" alt="water_bottle" style="vertical-align: text-bottom;"/> waterBottle: "water_bottle.png"
- <img src="./assets/icons/water_bucket.png" height="25" alt="water_bucket" style="vertical-align: text-bottom;"/> waterBucket: "water_bucket.png"
