/*
           _____               ___           ____ __ __ __ __ __            __ __ __ __ __ __ __ __
          /     \             /  /          /  __ __ __ __ __ __/          /__ __ __ __ __ __ __ __/               
         /  / \  \           /  /          /  /                                      /    /
        /  /   \  \         /  /          /  /                                      /    /
       /  /     \  \       /  /          /  /__ __ __ __ __ __                    /    /
      /  /       \  \     /  /          /  /__ __ __ __ __ __/                   /    /
     /  /         \  \   /  /          /  /                                      /    /
    /  /           \  \ /  /          /  /__ __ __ __ __ __                    /    /
   /__/             \_____/          /___ __ __ __ __ __ _/                  /__ _/

*/
//item
IDRegistry.genItemID("netheriteScrap");
IDRegistry.genItemID("netheriteIngot");
Item.createItem("netheriteScrap", "Netherite Scrap", {name: "netherite_scrap", meta: 0}, {});
Item.createItem("netheriteIngot", "Netherite Ingot", {name: "netherite_ingot", meta: 0}, {});

//armor
IDRegistry.genItemID("netheriteHelmet");
IDRegistry.genItemID("netheriteChestplate");
IDRegistry.genItemID("netheriteLeggings")
IDRegistry.genItemID("netheriteBoots");
Item.createArmorItem("netheriteHelmet", "Netherite Helmet", {name: "netherite_helmet"}, {type: "helmet", armor: 6, durability: 726, texture: "armor/netherite_layer_1.png"});
Item.createArmorItem("netheriteChestplate", "Netherite Chestplate", {name: "netherite_chestplate"}, {type: "chestplate", armor: 16, durability: 1056, texture: "armor/netherite_layer_1.png"});
Item.createArmorItem("netheriteLeggings", "Netherite Leggings", {name: "netherite_leggings"}, {type: "leggings", armor: 12, durability: 990, texture: "armor/netherite_layer_2.png"});
Item.createArmorItem("netheriteBoots", "Netherite Boots", {name: "netherite_boots"}, {type: "boots", armor: 6, durability: 858, texture: "armor/netherite_layer_1.png"});

//tools
importLib ("ToolType", "*");

IDRegistry.genItemID("netheriteAxe");
IDRegistry.genItemID("netheriteHoe");
IDRegistry.genItemID("netheritePickaxe");
IDRegistry.genItemID("netheriteShovel");
IDRegistry.genItemID("netheriteSword");
ToolAPI.addToolMaterial("nethertite", {durability: 3122, level: 5, efficiency: 12, damage: 14, enchantability: 14});

Item.createItem("netheriteAxe", "Netherite Axe", {name: "netherite_axe", meta: 0}, {stack: 1});
Item.createItem("netheriteHoe", "Netherite Hoe", {name: "netherite_hoe", meta: 0}, {stack: 1});
Item.createItem("netheritePickaxe", "Netherite Pickaxe", {name: "netherite_pickaxe", meta: 0}, {stack: 1});
Item.createItem("netheriteShovel", "Netherite Shovel", {name: "netherite_shovel", meta: 0}, {stack: 1});
Item.createItem("netheriteSword", "Netherite Sword", {name: "netherite_sword", meta: 0}, {stack: 1});

ToolAPI.setTool(ItemID.netheriteAxe, "nethertite", ToolType.axe);
ToolAPI.setTool(ItemID.netheriteHoe, "nethertite", ToolType.hoe);
ToolAPI.setTool(ItemID.netheritePickaxe, "nethertite", ToolType.pickaxe);
ToolAPI.setTool(ItemID.netheriteShovel, "nethertite", ToolType.shovel);
ToolAPI.setTool(ItemID.netheriteSword, "nethertite", ToolType.sword);

//block
Block.createSpecialType({
explosionres: 100,
}, "blockType");

IDRegistry.genBlockID("ancientDebris");
Block.createBlock("ancientDebris", [
{name: "Ancient Debris", texture: [["ancient_debris_top", 0], ["ancient_debris_top", 0], ["ancient_debris_side", 0], ["ancient_debris_side", 0], ["ancient_debris_side", 0] , ["ancient_debris_side", 0]], inCreative: true}
] , "blockType");
ToolAPI.registerBlockMaterial(BlockID.ancientDebris, "stone");
Block.setDestroyLevel("ancientDebris", 4);
Block.setDestroyTime(BlockID.ancientDebris, 65);

//spawn
Callback.addCallback("GenerateNetherChunk", function (chunkX, chunkZ) {
    for(var i=0;i<2;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 20);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.ancientDebris, 0, 3);
    }
}
)
//recipe
Recipes.addFurnace(BlockID.ancientDebris, ItemID.netheriteScrap, 0);
Recipes.addShaped ({id: ItemID.netheriteIngot, count: 1, data: 0}, [

     "aba",

     "b b",

     "aba"

], ['a', ItemID.netheriteScrap, 0, 'b', 266, 0]);
Recipes.addShaped ({id: ItemID.netheriteHelmet, count: 1, data: 0}, [

     "ab",

     "   ",

     "   "

], ['a', 310, 0, 'b', ItemID.netheriteIngot, 0]);
Recipes.addShaped ({id: ItemID.netheriteChestplate, count: 1, data: 0}, [

     "ab",

     "   ",

     "   "

], ['a', 311, 0, 'b', ItemID.netheriteIngot, 0]);
Recipes.addShaped ({id: ItemID.netheriteLeggings, count: 1, data: 0}, [

     "ab",

     "   ",

     "   "

], ['a', 312, 0, 'b', ItemID.netheriteIngot, 0]);
Recipes.addShaped ({id: ItemID.netheriteBoots, count: 1, data: 0}, [

     "ab",

     "   ",

     "   "

], ['a', 313, 0, 'b', ItemID.netheriteIngot, 0]);
Recipes.addShaped ({id: ItemID.netheriteAxe, count: 1, data: 0}, [

     "ab",

     "   ",

     "   "

], ['a', 279, 0, 'b', ItemID.netheriteIngot, 0]);
Recipes.addShaped ({id: ItemID.netheriteHoe, count: 1, data: 0}, [

     "ab",

     "   ",

     "   "

], ['a', 293, 0, 'b', ItemID.netheriteIngot, 0]);
Recipes.addShaped ({id: ItemID.netheritePickaxe, count: 1, data: 0}, [

     "ab",

     "   ",

     "   "

], ['a', 278, 0, 'b', ItemID.netheriteIngot, 0]);
Recipes.addShaped ({id: ItemID.netheriteShovel, count: 1, data: 0}, [

     "ab",

     "   ",

     "   "

], ['a', 277, 0, 'b', ItemID.netheriteIngot, 0]);
Recipes.addShaped ({id: ItemID.netheriteSword, count: 1, data: 0}, [

     "ab",

     "   ",

     "   "

], ['a', 276, 0, 'b', ItemID.netheriteIngot, 0]);

//

