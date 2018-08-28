//Writing nested tags like this links JSON keys explicitly with the variable instead of having a number of different keys you'd may have to call for.

var moviesData = [{
        "name": "Almost Christmas",
        "tags":

        {
            "tagOne": "Comedy",
            "tagTwo": "Male",
            "tagThree": "Black"
        },

        "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",

        "video": "https://www.youtube.com/watch?v=-mw-Rhm8OIw",

    },
    {
        "name": "Girls Trip",
        "tags":

        {
            "tagOne": "Comedy",
            "tagTwo": "Female",
            "tagThree": "Black"
        },

        "description": "When four lifelong friends travel to New Orleans for the annual Essence Festival, sisterhoods are rekindled, wild sides are rediscovered, and there's enough dancing, drinking, brawling, and romancing to make the Big Easy blush.",

        "video": "https://www.youtube.com/watch?v=7jE61BzKmgQ",

    },
    {
        "name": "Instructions Not Included",
        "tags":

        {
            "tagOne": "Comedy",
            "tagTwo": "Male",
            "tagThree": "Latino"
        },

        "description": "A man who has made a new life for himself and the daughter left on his doorstep 6 years ago finds his family threatened when the birth mother resurfaces.",

        "video": "https://www.youtube.com/watch?v=-rlFr2lu0IY&t=64s",

    },
    {
        "name": "Real Women Have Curves",
        "tags": {


            "tagOne": "Comedy",
            "tagTwo": "Female",
            "tagThree": "Latino"

        },
        "description": "The story of a first generation Mexican-American girl and her passage to womanhood. Although she wants to go away to college, she must battle against the views of her parents, who think she should stay at home and provide for the family. As a compromise, she works with her mother in a sewing factory over the summer and learns some important lessons about life, helping her make a decision about her future.",
        "video": "https://www.youtube.com/watch?v=vKpDifyDIp0"
    },

    {
        "name": "Kung Fu Hustle",
        "tags": {


            "tagOne": "Comedy",
            "tagTwo": "Male",
            "tagThree": "Asian"

        },
        "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
        "video": "https://www.youtube.com/watch?v=-m3IB7N_PRk"
    },

    {
        "name": "Catfight",
        "tags": {


            "tagOne": "Comedy",
            "tagTwo": "Female",
            "tagThree": "Asian"

        },
        "description": "The rivalry between two former college friends comes to a head when they both attend the same glamorous event.",
        "video": "https://www.youtube.com/watch?v=XlA6XIj1sPk"
    },

    {
        "name": "Black Panther",
        "tags": {


            "tagOne": "Action",
            "tagTwo": "Male",
            "tagThree": "Black"

        },
        "description": "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.",
        "video": "null"
    },

    {
        "name": "Proud Mary",
        "tags": {


            "tagOne": "Action",
            "tagTwo": "Female",
            "tagThree": "Black"

        },
        "description": "Mary (Taraji P. Henson) is a hit woman working for an organized crime family in Boston, whose life is completely turned around when she meets a young boy whose path she crosses when a professional hit goes bad.",
        "video": "https://www.youtube.com/watch?v=xjDjIWPwcPU"
    },

    {
        "name": "Sicario: Day of the Soldado",
        "tags": {


            "tagOne": "Action",
            "tagTwo": "Male",
            "tagThree": "Latino"

        },
        "description": "The drug war on the U.S.-Mexico border has escalated as the cartels have begun trafficking terrorists across the US border. To fight the war, federal agent Matt Graver re-teams with the mercurial Alejandro.",
        "video": "https://www.youtube.com/watch?v=sIMChzE_aCo"
    },

    {
        "name": "Columbiana",
        "tags": {


            "tagOne": "Action",
            "tagTwo": "Female",
            "tagThree": "Latino"

        },
        "description": "A young woman, after witnessing her parents' murder as a child in Bogota, grows up to be a stone-cold assassin.",
        "video": "https://www.youtube.com/watch?v=HCxPLlFWdFo"
    },

    {
        "name": "The Foreigner",
        "tags": {


            "tagOne": "Action",
            "tagTwo": "Male",
            "tagThree": "Asian"

        },
        "description": "A humble businessman with a buried past seeks justice when his daughter is killed in an act of terrorism. A cat-and-mouse conflict ensues with a government official, whose past may hold clues to the killers' identities.",
        "video": "https://www.youtube.com/watch?v=om9YCk7ufHs"
    },

    {
        "name": "Okja",
        "tags": {


            "tagOne": "Action",
            "tagTwo": "Female",
            "tagThree": "Asian"

        },
        "description": "A young girl risks everything to prevent a powerful, multinational company from kidnapping her best friend - a fascinating beast named Okja.",
        "video": "https://www.youtube.com/watch?v=AjCebKn4iic"
    },

    {
        "name": "Think Like A Man",
        "tags": {


            "tagOne": "Romance",
            "tagTwo": "Male",
            "tagThree": "Black"

        },
        "description": "Four friends conspire to turn the tables on their women when they discover the ladies have been using Steve Harvey's relationship advice against them.",
        "video": "https://www.youtube.com/watch?v=ajKT1dxFmNc"
    },

    {
        "name": "Beyond The Lights",
        "tags": {


            "tagOne": "Romance",
            "tagTwo": "Female",
            "tagThree": "Black"

        },
        "description": "The pressures of fame have superstar singer Noni on the edge, until she meets Kaz, a young cop who works to help her find the courage to develop her own voice and break free to become the artist she was meant to be.",
        "video": "https://www.youtube.com/watch?v=sfcfZn8nq3w"
    },

    {
        "name": "Dirty Dancing: Havana Nights",
        "tags": {


            "tagOne": "Romance",
            "tagTwo": "Male",
            "tagThree": "Latino"

        },
        "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
        "video": "https://www.youtube.com/watch?v=4-uFPihwibQ"
    },

    {
        "name": "Over Her Deadbody",
        "tags": {


            "tagOne": "Romance",
            "tagTwo": "Female",
            "tagThree": "Latino"

        },
        "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
        "video": "https://www.youtube.com/watch?v=7ES0L8P7dwc"
    },

    {
        "name": "Shanghai Calling",
        "tags": {


            "tagOne": "Romance",
            "tagTwo": "Male",
            "tagThree": "Asian"

        },
        "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
        "video": "https://www.youtube.com/watch?v=aeqqgAbHItY"
    },

    {
        "name": "Mississippi Masala",
        "tags": {


            "tagOne": "Romance",
            "tagTwo": "Female",
            "tagThree": "Asian"

        },
        "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
        "video": "null"
    },

    {
        "name": "Gun Hill Road",
        "tags": {


            "tagOne": "Action",
            "tagTwo": "Nonbinary",
            "tagThree": "Latino"

        },
        "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
        "video": "null"
    },

    {
        "name": "Tangerine",
        "tags": {


            "tagOne": "Comedy",
            "tagTwo": "Nonbinary",
            "tagThree": "Latino"

        },
        "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
        "video": "null"
    },

    {
        "name": "The OA",
        "tags": {


            "tagOne": "Action",
            "tagTwo": "Nonbinary",
            "tagThree": "Asian"

        },
        "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
        "video": "null"
    },


]