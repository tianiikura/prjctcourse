class Elves {
    constructor(isMythologicalCreatures, haveSharpEars, isStrong) {
        this.isMythologicalCreatures = isMythologicalCreatures;
        this.haveSharpEars = haveSharpEars;
        this.isStrong = isStrong;
    }

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
    #isEldarDescendants;

    constructor(isMythologicalCreatures, haveSharpEars, isStrong) {
        super(isMythologicalCreatures, haveSharpEars, isStrong);
        this.isImmortal = isImmortal;
        this.#isEldarDescendants = isEldarDescendants;
        this.isForestElves = isForestElves;
    }

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
    #isNotGreyElves;

    constructor(isMythologicalCreatures, haveSharpEars, isStrong) {
        super(isMythologicalCreatures, haveSharpEars, isStrong);
        this.isImmortal = isImmortal;
        this.#isNotGreyElves = isNotGreyElves;
        this.isHightElves = isHightElves;
    }

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
    #isNotGreyElves;

    constructor(isMythologicalCreatures, haveSharpEars, isStrong) {
        super(isMythologicalCreatures, haveSharpEars, isStrong);
        this.isImmortal = isImmortal;
        this.#isNotGreyElves = isNotGreyElves;
        this.isAvari = isAvari;
    }

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
    #isAntagonists;

    constructor(isMythologicalCreatures, haveSharpEars, isStrong) {
        super(isMythologicalCreatures, haveSharpEars, isStrong);
        this.isNotImmortal = isNotImmortal;
        this.isArtificiallyCreated = isArtificiallyCreated;
        this.#isAntagonists = isAntagonists;
    }

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