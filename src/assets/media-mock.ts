import { Media, MediaType } from "../shared/types"

const medias: Media[] = [
    {
        name: "Berserk (1997)",
        id: "41c71f8fbc23d3cd1fa6045d4ee0c391",
        type: "anime",
        imageName: "berserk",
        synopsis: `A dark fantasy anime based on the manga by Kentaro Miura.
        The story follows Guts, a lone mercenary with a massive sword and a haunted past.
        He joins the Band of the Hawk, a group led by the charismatic and ambitious Griffith.`
    },
    {
        name: "Better Call Saul",
        id: "8b8eff82b195582ce85855288ca05e44",
        type: "serie",
        imageName: "bettercallsaul",
        synopsis: `The series traces the evolution of a struggling lawyer into a cunning and morally
        ambiguous attorney, set before Breaking Bad. It explores his past challenges, relationships,
        and pivotal choices, leading to both success and moral compromise. Amidst navigating the legal
        realm, he confronts colorful characters and grapples with personal and professional dilemmas
        that challenge his ethics and loyalties.`
    },
    {
        name: "Breaking Bad",
        id: "5dcacd4df6e0584c71a391b5520e90d9",
        type: "serie",
        imageName: "breakingbad",
        synopsis: `A chemistry teacher with cancer turns to cooking and selling meth with a former
        student to provide for his family. As they dive deeper into the drug trade, they encounter
        moral dilemmas, escalating challenges, and dangerous foes, forcing them to confront the
        consequences of their actions and the darker sides of humanity.`
    },
    {
        name: "Courage",
        id: "f8d54bc6c2f44b0401020312f18b679e",
        type: "serie",
        imageName: "courage",
        synopsis: `In a secluded farmhouse, a pink dog lives with his elderly owners.
        Despite his timid nature, he courageously faces supernatural and bizarre threats
        to protect his family from various monsters, aliens, and otherworldly creatures.
        Each episode sees the dog confronting new challenges, often with comedic and surreal
        twists, showcasing his determination and love for his family.`
    },
    {
        name: "Cowboy Bebop",
        id: "6a58e4bec8ad4cecc2ad617a27267826",
        type: "anime",
        imageName: "cowboybebop",
        synopsis: `In a futuristic setting, a group of bounty hunters travels through space in
        their spaceship, the Bebop, hunting down criminals and fugitives to earn a living. Each
        member of the eclectic crew has their own past and motivations, which are gradually revealed
        through episodic adventures. The series blends action, humor, and jazz-inspired music,
        creating a stylish and unique atmosphere as the characters confront their pasts and face the
        challenges of life on the frontier of space.`
    },
    {
        name: "Deadpool",
        id: "72ed55d0c22ec2f703fa5dbf1cb38d1e",
        type: "movie",
        imageName: "deadpool",
        synopsis: `A wisecracking mercenary undergoes an experimental cancer treatment, gaining accelerated
        healing powers but also disfiguring him. Adopting an alter ego, he hunts down the man behind his
        transformation, all while cracking jokes and breaking the fourth wall. This action-packed film
        blends humor and irreverence, providing a comedic twist on the superhero genre.`
    },
    {
        name: "Death Note",
        id: "83ebc594d03218ee05821bd9d865cfaa",
        type: "anime",
        imageName: "deathnote",
        synopsis: `A high schooler finds a supernatural notebook enabling him to kill by writing names
        and picturing faces. Using it to rid the world of criminals, he draws attention as a vigilante.
        A detective hunts him, exploring themes of morality and justice as they
        engage in a tense game of wits.`
    },
    {
        name: "Devilman",
        id: "af183305702ade361d1f5032ed7f1119",
        type: "anime",
        imageName: "devilman",
        synopsis: `A young man merges with a demon to gain its powers and protect humanity
        from impending demonic threats. As he battles these demonic forces, he grapples with
        his own inner turmoil and the fear and mistrust of those around him who view him as a
        monster. The series explores dark themes of identity, morality, and the blurred lines
        between human and demon, culminating in a tragic and intense confrontation between the
        forces of good and evil.`
    },
    {
        name: "Neon Genesis Evangelion",
        id: "f35eed00f4c1feb97103cbbac86c5a6b",
        type: "anime",
        imageName: "evangelion",
        synopsis: `A renowned anime series that blends mecha action with psychological drama.
        Set in a post-apocalyptic world, it follows teenager Shinji Ikari, who is recruited by
        his estranged father to pilot a giant bio-machine called an "Evangelion" to defend Tokyo-3
        from monstrous beings known as Angels.`
    },
    {
        name: "Frankweenie",
        id: "561ff60f863c513ace23ac74a60e4b92",
        type: "movie",
        imageName: "frankweenie",
        synopsis: `A young boy, devastated by the loss of his beloved dog, uses science to bring
        his pet back to life. His experiment is a success, but he soon realizes that bringing the
        dog back has unintended and monstrous consequences. As the town becomes aware of his creation,
        chaos ensues, forcing the boy to confront the moral implications of his actions and save his town
        from the consequences of his scientific endeavor.`
    },
    {
        name: "Game of Thrones",
        id: "583e9780f7fdb235c7fcdd97aa164ef3",
        type: "serie",
        imageName: "gameofthrones",
        synopsis: `In a medieval fantasy world, noble families compete for the Iron Throne, the ultimate
        symbol of power. Amid political intrigue and warfare, characters rise and fall, navigating
        alliances and betrayals. Supernatural threats loom from the North, while dragons and magic
        resurface. The series delves into themes of power, honor, loyalty, and the consequences
        of ambition.`
    },
    {
        name: "Gantz",
        id: "d197ea7a14cbaedf5dabbfe08f9e931a",
        type: "anime",
        imageName: "gantz",
        synopsis: `Individuals resurrected after death must participate in a deadly game by a
        mysterious black sphere called "Gantz." They hunt down aliens among humans to earn points
        and potentially regain their lives. Facing dangerous foes and moral dilemmas, they question
        the true nature of the game they're trapped in.`
    },
    {
        name: "Harry Potter and the Sorcerer's Stone",
        id: "4362e0cb59221e8470326c594275b3ab",
        type: "movie",
        imageName: "harrypotter1",
        synopsis: `A young boy discovers he's a wizard on his 11th birthday and is invited to attend a
        magical school. As he learns about his newfound abilities, he befriends two fellow students and
        together they uncover a plot to steal a powerful object hidden within the school. Facing challenges
        and obstacles, they must use their wits and courage to prevent the dark forces behind the plot from
        achieving their goal, while also navigating the ups and downs of their first year at the magical academy.`
    },
    {
        name: "Hellsing",
        id: "ddb5f69628ce35b997d4b5b06d11834d",
        type: "anime",
        imageName: "hellsing",
        synopsis: `In a world overrun by vampires and ghouls, a powerful vampire hunter organization,
        led by a vampire named Alucard, fights to protect humanity. They confront rival vampire
        factions and uncover a conspiracy with Nazi experiments. With intense action and dark themes,
        the series delves into the moral complexities of battling the undead.`
    },
    {
        name: "It",
        id: "6e57d6c47d23024e41f4a1aac73a3ea9",
        type: "movie",
        imageName: "it",
        synopsis: `After 27 years, a group of childhood friends reunites in their hometown to confront a supernatural
        entity that has haunted them since their youth. Faced with their deepest fears and traumatic memories,
        they must find a way to destroy the creature once and for all. As they delve into the town's dark history
        and face terrifying manifestations of their past, the group discovers the strength in their bond and
        the power of facing their fears together.`
    },
    {
        name: "It's Always Sunny in Philadelphia",
        id: "824433e6525500b7bbc37f6667fa5207",
        type: "serie",
        imageName: "itsalwayssunnyinphiladelphia",
        synopsis: `Self-centered friends run a struggling Irish pub in Philadelphia, embroiling themselves
        in absurd schemes and misadventures. Their dysfunctional dynamics and outrageous behavior lead to
        hilarious and chaotic situations, showcasing their lack of regard for consequences or common decency.`
    },
    {
        name: "JoJo's Bizarre Adventure (2012)",
        id: "196750164085b4c5a903cbd2d77391a6",
        type: "anime",
        imageName: "jojo",
        synopsis: `The series follows the Joestar lineage, each member confronting adversaries with
        unique supernatural abilities. From battling ancient masked beings to facing other Stand users,
        they embark on epic journeys filled with intense battles and bizarre encounters. Blending action,
        humor, and over-the-top characters, the series reinvents itself across different time periods
        and settings.`
    },
    {
        name: "Kingdom",
        id: "b815a777137135bc3050bc76a97e3fa0",
        type: "anime",
        imageName: "kingdom",
        synopsis: `Two young orphans in war-torn ancient China aspire to become great generals and
        lead their kingdom to prosperity. Rising through the ranks amidst warfare and political intrigue,
        they earn respect from allies and enemies. With comrades, they confront formidable foes,
        strategic battles, and internal conflicts. Combining history with intense action and
        character-driven drama, the series portrays their determination to unify a divided
        land and achieve their ambitious goals.`
    },
    {
        name: "Monster",
        id: "243a3afa44aed85d504dbd53fd9804e9",
        type: "anime",
        imageName: "monster",
        synopsis: `A renowned brain surgeon's life is upended when he saves a young boy over the
        town's mayor. Years later, the boy becomes a sociopathic criminal, prompting the surgeon to
        embark on a quest to stop him. Delving into conspiracy and dark secrets, he grapples with
        guilt and responsibility. The series explores the complexities of good and evil, the consequences
        of choices, and the quest for redemption.`
    },
    {
        name: "Mr. Pickles",
        id: "46c2517a4f77059ed48e88804ff2838e",
        type: "serie",
        imageName: "mrpickles",
        synopsis: `In a tranquil suburban setting, a border collie conceals a malevolent secret.
        Despite appearing loyal and friendly, he is actually a cunning and sadistic creature who
        revels in chaos and violence. Each episode exposes his sinister double life, as he wreaks
        havoc while maintaining his innocent facade. With dark humor and shocking twists, the series
        delves into the contrast between appearances and reality, and the unpredictable nature of evil.`
    },
    {
        name: "Pirates of the Caribbean: The Curse of the Black Pearl",
        id: "ddb0b53dd4b95a2b05243499eceee4f6",
        type: "movie",
        imageName: "piratesofthecaribbean1",
        synopsis: `A witty pirate captain sets out to reclaim his stolen ship and its valuable treasure
        in the treacherous Caribbean. Alongside a resourceful blacksmith and the governor's daughter,
        they embark on a daring adventure filled with battles, curses, and surprising alliances. Known
        for his clever schemes and flamboyant personality, the captain's antics and charisma drive the
        plot as he outwits enemies and pursues hidden agendas, leaving chaos and laughter in his wake.`
    },
    {
        name: "Pulp Fiction",
        id: "ef62f81fa2b448d7c6052b6ea2ecff04",
        type: "movie",
        imageName: "pulpfiction",
        synopsis: `A non-linear narrative intertwines the lives of characters in LA's criminal underworld.
        From philosophical hitmen to a boxer coerced by a crime boss, the film delves into interconnected
        stories filled with violence, dark humor, and unexpected twists. As their paths intersect and
        schemes unravel, the dialogue-driven plot unfolds in memorable scenes, crafting a unique and
        influential cinematic experience.`
    },
    {
        name: "Samurai Jack",
        id: "fc55d2dcf2cdd2045434781804540f1d",
        type: "serie",
        imageName: "samuraijack",
        synopsis: `A samurai warrior is thrust into a dystopian future by an evil demon, where he battles
        minions and seeks a way back to his time to defeat his foe. Armed with his sword and a strong
        sense of honor, he traverses diverse landscapes, encountering allies and adversaries who test
        his skills and resolve. With minimal dialogue and stunning visuals, the series blends action,
        fantasy, and philosophy, portraying the samurai's quest for redemption in a world brimming with
        danger and wonder.`
    },
    {
        name: "Scooby Doo (2002)",
        id: "e940140d976b031ff7986cb6bc6b2e60",
        type: "movie",
        imageName: "scoobydoo",
        synopsis: `A group of young amateur detectives and their talking dog journey in their colorful
        van, the Mystery Machine, to solve mysterious events in a beach town. They encounter spooky
        locations, eccentric characters, and seemingly supernatural creatures. With humor, suspense,
        and friendship, they use teamwork to uncover clues, unmask villains, and reveal the truth,
        proving things aren't always as they seem.`
    },
    {
        name: "Smiling Friends",
        id: "149c79c1cbef7fc86e92ff05d74878ff",
        type: "serie",
        imageName: "smilingfriends",
        synopsis: `In a surreal world, two quirky employees at a 24-hour suicide hotline help callers
        in distress, navigating bizarre scenarios and unexpected guests. With humor and heart, the series
        explores empathy and the importance of reaching out in times of need.`
    },
    {
        name: "South Park",
        id: "d279eb03080cdc91c708349912867b15",
        type: "serie",
        imageName: "southpark",
        synopsis: `In a small Colorado town, four elementary school boys navigate outrageous and satirical
        situations that parody current events, pop culture, and societal norms. With crude humor and
        irreverent wit, the series tackles controversial topics through comedy and satire. The boys,
        alongside eccentric townspeople, encounter absurd scenarios, offering a humorous critique
        of modern life.`
    },
    {
        name: "Spider-Man: Across the Spider-Verse",
        id: "78cb231fc9d165c7b54b1e4af7a7eb8f",
        type: "movie",
        imageName: "spiderverse",
        synopsis: `Miles Morales embarks on a journey as Spider-Man, exploring new dimensions and meeting
        alternate Spider-People. Teaming up with different versions of the hero, he faces formidable
        foes and personal challenges. Through stunning animation and heartfelt moments, the film delivers
        an exhilarating adventure, exploring themes of courage, responsibility, and identity.`
    },
    {
        name: "Superhero Movie",
        id: "a6c8898b8b2a83a067d047ee8e4abd61",
        type: "movie",
        imageName: "superhero",
        synopsis: `A high school student gains superpowers from a genetically altered dragonfly bite,
        becoming a superhero to fight crime in the city. However, he discovers that being a hero isn't
        easy as he faces off against quirky villains and juggles his double life. Filled with slapstick
        humor and parodying superhero tropes, the film offers a comedic spin on the genre, blending
        action-packed sequences with hilarious moments.`
    },
    {
        name: "Sweeney Todd: The Demon Barber of Fleet Street",
        id: "140c17b465293b94f5f4749bbbb98ae4",
        type: "movie",
        imageName: "sweeneytodd",
        synopsis: `A vengeful barber returns to Victorian London after being wrongfully imprisoned
        by a corrupt judge who coveted his wife. Teaming up with a pie shop owner, he seeks revenge
        by slitting the throats of unsuspecting customers, turning them into meat pies. As the body
        count rises, his descent into madness and obsession with vengeance deepen. The film blends
        dark humor, haunting music, and gothic visuals, crafting a chilling tale of murder, revenge,
        and moral ambiguity.`
    },
    {
        name: "The Boys",
        id: "da9144d18c8ea12fb7730fc17cdd2d2f",
        type: "serie",
        imageName: "theboys",
        synopsis: `In a world where superheroes are idolized like celebrities, "The Boys," a vigilante group,
        aims to expose their corrupt behavior. Led by a determined team, they uncover dark secrets, clash with
        powerful figures, and confront moral dilemmas. This gritty and satirical series explores themes of power,
        accountability, and the consequences of unchecked authority.`
    },
    {
        name: "The Evil Dead (1981)",
        id: "0d67d5f22182bc209254ad56886d9c0e",
        type: "movie",
        imageName: "theevildead",
        synopsis: `A group of friends on a weekend getaway in a remote cabin stumble upon an ancient
        and malevolent book. Reading from it unleashes demonic forces that possess and torment them.
        As the evil presence grows, they must fight for survival against increasingly grotesque threats.
        The film blends horror with dark humor, featuring intense and graphic scenes as the characters
        battle supernatural forces intent on consuming their souls.`
    },
    {
        name: "The Nightmare Before Christmas",
        id: "3a1bd22a0f391055e8cfb15c6b8c2761",
        type: "movie",
        imageName: "thenightmarebeforechristmas",
        synopsis: `In a fantastical world divided into holiday-themed realms, the Pumpkin King of
        Halloween Town grows tired of his annual celebrations. Intrigued by Christmas, he decides
        to take over as Santa Claus, leading to confusion and chaos. The film weaves a charming tale
        about curiosity, creativity, and finding purpose, with imaginative visuals, catchy music, and
        whimsical characters.`
    },
    {
        name: "The Office",
        id: "d8abeb266f82c663a43ab292f2027fbb",
        type: "serie",
        imageName: "theoffice",
        synopsis: `In a mockumentary format, employees of a struggling paper company in Scranton, Pennsylvania,
        navigate office life under eccentric management. As they tackle mundane tasks and office politics,
        they forge friendships, pursue romance, and chase career aspirations. With witty humor and an
        ensemble cast, the show offers a lighthearted look at workplace bonds.`
    },
    {
        name: "Vinland Saga",
        id: "37b9820ea2e94322e858799b254e5281",
        type: "anime",
        imageName: "vinlandsaga",
        synopsis: `In a Viking world, young Thorfinn seeks revenge for his father's death by joining a band
        led by his killer. As he fights and trains, he confronts the brutal realities of war and Viking
        society, grappling with honor, revenge, and the pursuit of peace. The series blends action and
        drama, exploring themes of ambition, loyalty, and the human spirit.`
    }
]

const bannerChoicedImageNameList: string[] = [
    "evangelion",
    "pulpfiction",
    "cowboybebop",
    "theoffice",
    "mrpickles",
    "it",
    "berserk",
    "theevildead",
    "frankweenie",
    "smilingfriends",
    "thenightmarebeforechristmas",
    "kingdom"
]

const bannerMediasMock = bannerChoicedImageNameList.map(imageName =>
    medias.find((media) => media.imageName === imageName)
)

const posterAnimesMedia = medias.filter(media => media.type === "anime")
const posterMoviesMedia = medias.filter(media => media.type === "movie")
const posterSeriesMedia = medias.filter(media => media.type === "serie")

export const mock = {
    medias: medias as Media[],
    bannerMedias: bannerMediasMock as Media[],
    posterMedias: new Map<MediaType, Media[]>([
        ["anime", posterAnimesMedia],
        ["movie", posterMoviesMedia],
        ["serie", posterSeriesMedia]
    ])
}
