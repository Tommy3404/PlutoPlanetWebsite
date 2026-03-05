const gridContainer = document.getElementById('fastFacts');

const facts = [
    {name: "Namesake", description: "Pluto was named by an 11-year-old girl in 1930. Venetia Burney of Oxford, England suggested the name to her grandfather, who sent the name to the Lowell Observatory, who were selecting the planet's name."},
    {name: "The Love Planet", description: "One of the coolest things on Pluto is a giant heart-shaped glacier! This isn’t a beating heart, but a huge area covered in ice that looks just like a heart. It’s named Tombaugh Regio after the astronomer who discovered Pluto."},
    {name: "Tempurature", description: "Pluto is extremely cold, more so than anywhere on Earth! Temperatures can drop to a freezing -375 degrees Fahrenheit (-225 degrees Celsius). That’s colder than any winter you’ve ever experienced!"
    },
    {name: "The Days", description: "A single day on Pluto lasts 153 hours. That’s about 6 Earth days! Imagine going to bed and not having to wake up for school for six whole days!"
    },
    {name: "Mountains and Plains", description: "Pluto has mountains made of water ice as tall as the Rockies and vast plains of frozen gases. Scientists are still figuring out some dark regions on Pluto."
    },
    {name: "The Atmosphere", description: "Pluto has a thin atmosphere that gets bigger when it comes closer to the Sun and freezes into solid when it moves away, dropping back down to the surface like snow."
    }
]

const gridItems = facts.map(fact => {
    return `
        <div class="gridItem">
            <h3>${fact.name}</h3>
            <p>${fact.description}</p>
        </div>
    `;
});

const completeHTML = gridItems.join('');
gridContainer.innerHTML = completeHTML;

