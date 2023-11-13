class Elves {
    isMythologicalCreatures = "yes";
    haveSharpEars;
    isStrong;

    haveSkills() {
        console.log("Is archers");
    };
    starlightGrace() {
        console.log(`Moves with grace akin to starlight.`);
    };
    ancientWisdom() {
        console.log(`Taps into ancient wisdom and lore.`);
    };
}

class SindarElves extends Elves {
    isImmortal = "yes";
    #isEldarDescendants;
    isForestElves = "yes";

    choosePlaceToLive () {
        console.log("Forests");
    };
    haveRival() {
        return "Dwarf";
    };
    makeBusiness() {
        console.log("Trading with humans");
    }
}

class LightElves extends Elves {
    isImmortal = "yes";
    #isNotGreyElves;
    isHightElves = "yes";

    isEnemy() {
        console.log("Orcs");
    }
    starshineAura() {
        console.log(`Surrounds with an aura akin to starshine.`);
    };
    useUnusualSkills() {
        return "magic";
    }
}

class DarkElves extends SindarElves {
    isImmortal = "yes";
    #isNotGreyElves;
    isAvari = "yes";

    darkMagic(spell) {
        console.log(`The Dark Elf casts ${spell} using dark magic.`);
    };
    shadowStep(destination) {
        console.log(`The Dark Elf moves swiftly through the shadows to ${destination}.`);
    };
    cloakOfShadows() {
        console.log(`Blends into shadows, nearly invisible.`);
    };
}

class Orcs extends DarkElves {
    isImmortal = "no";
    artificiallyСreated;
    #isAntagonists;

    isOrigin() {
        console.log("Created from Elves");
    }
    isEnemy() {
        console.log("Elves");
    }
    isMaster() {
        return "Morgot";
    }
}