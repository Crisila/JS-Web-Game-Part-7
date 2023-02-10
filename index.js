// Create the playable character
const pc = newPlayableCharacter(100, 110)

// Create a non-playable character
const npc = newNonPlayableCharacter(50, 300)

// have the NPC start walking east immediately
// npc.walkEast(2000)

// After the character walks east, we now will have it walk south. Wait for npc.walkEast(2000) to finish by putting await in front of it. Next, write npc.walkSouth() on the following line. Return to your browser.
// await npc.walkEast(2000)
// it didn't work b/c This is because you cannot use await outside an async function. The browser cannot pause the main script. That would subvert the whole point of making our logic asynchronous. To fix this problem, wrap your asynchronous logic in an async function and then immediately invoke it:

async function moveNPC(){
    // 6. implement a complex track
    await npc.walkNorth(1400)
    await npc.walkEast(1200)
    await npc.walkSouth(300)
    await npc.walkEast(1500)
    await npc.walkSouth(1500)
    await npc.walkWest (2700)
    await npc.walkNorth(400)
}
moveNPC()


// Create the inventory
const inventory = newInventory()
move(inventory).to(0, 0)

// Create everything else
move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)