import React from "react";

const problems = [
    {
        title: "Uncomfortable Grip",
        text: "Sharp edges and poor texturing make the Hi-Capa grip unfriendly for small hands."
    },
    {
        title: "Cumbersome Hop-up Adjustment",
        text: "Adjusting the hop-up requires disassembly, making it overly complicated."
    },
    {
        title: "Fragile Materials",
        text: "Plastic components wear out quickly under frequent, intense use."
    },
    {
        title: "Inconsistent Aftermarket Kits",
        text: "Third-party kits often have sizing issues, requiring manual fitting."
    }
];

const designGoals = [
  {
    title: "Extended Barrel System",
    text: "Increase barrel length to achieve submachine-gun-level range and overcome the limitations of standard pistols."
  },
  {
    title: "Split-Slide Mechanism",
    text: "Enable faster cycling and reduced recoil for improved control and quicker target reacquisition."
  },
  {
    title: "Fixed Optic Mount",
    text: "Stabilize the optic independently from slide movement for better durability and target acquisition."
  },
  {
    title: "Magazine Compatibility",
    text: "Support TM-spec Hi-Capa magazines for seamless adoption and user convenience."
  },
  {
    title: "High Parts Interchangeability with Trinity Hi-Capa",
    text: "Maximize component compatibility with Trinity Hi-Capa to improve efficiency and consistency."
  },
  {
    title: "Standalone Parts Retail",
    text: "Provide key components individually for repair and upgrade without purchasing a full pistol."
  }
];



const designProcess = [
    {
        title: "User Research",
        text: [
            "Conducted interviews with 3 competitive shooters and 7 experienced skirmish players.",
            "Collected and tested a variety of airsoft pistols, analyzing grip textures and component ergonomics."
        ],
        time: "2022/03 – 2022/04"
    },
    {
        title: "Reverse Engineering",
        text: [
            "With original manufacturer authorization, analyzed and retained components that required no redesign, reducing development overhead."
        ],

        time: "2022/04 – 2022/05"
    },
    {
        title: "Key Component Redesign",
        text: [
            "Focused on the grip, slide, hop-up, and trigger to improve ergonomics and usability."
        ],

        time: "2022/05 – 2022/11"
    },
    {
        title: "Early Prototype Validation",
        text: [
            "Produced initial prototypes via 3D printing and provided them to test participants for ergonomic evaluation and feedback."
        ],
        time: "2022/05 – 2023/01"
    },
    {
        title: "Engineering Prototyping & Testing",
        text: [
            "Fabricated advanced prototypes using CNC machining, evaluating assembly tolerances and durability through iterative testing."
        ],
        time: "2023/02 – 2023/03"
    },
    {
        title: "Production Evaluation",
        text: [
            "Verified commonality of parts to ensure select components could be manufactured and sold individually.",
            "Studied different manufacturing methods to balance precision, strength, and cost."
        ],
        time: "2023/04"
    },
    {
        title: "Mass Production & Launch",
        text: [
            "Officially launched in 2023, distributed across Asia, Europe, and North America."
        ],

        time: "2023/05"
    }
];

const playerInterviews = [
    {
        title: "Tony Tzeng, 30",
        text: `<strong>Primary Rifle:</strong> HK416 (Electric)

<strong>Primary Pistol:</strong> Glock 17 (Gas Blowback)

<strong>Field Type:</strong> 50% Outdoor / 50% Indoor CQB

"I don't have confidence in pistol accuracy. I believe such a short barrel means limited range, which makes it hard for me to trust it. If my rifle runs out of ammo and the situation allows, I would rather carry extra rifle magazines and take cover to reload than switch to a pistol and continue fighting."

<strong>Pistol Usage</strong>: ~10% (only in emergencies when rifle runs dry).

<strong>Pain Points:</strong> Low pistol accuracy, lack of psychological confidence, rarely used.

<strong>Wish / Need:</strong> A pistol that is accurate and reliable enough to function as a true backup weapon.
`
    },
    {
        title: "Tim Lodu, 35",
        text: `<strong>Primary Rifle:</strong> M4 (Gas Blowback), SCAR-H(Gas Blowback)

<strong>Primary Pistol:</strong> None

<strong>Field Type:</strong> 100% Outdoor 

"I mainly carry an M4 GBB with five extra magazines. Since rifle magazines are already heavy, adding a pistol creates extra weight without clear practical value. The iron sights on pistols are also not as effective as the optics mounted on my rifle, so I prefer not to carry one."

<strong>Pistol Usage</strong>: 0% (does not use one due to limited effectiveness and added weight).

<strong>Pain Points:</strong> Added weight with low functional value, lack of optics.

<strong>Wish / Need:</strong> Lighter gear or a pistol with clear added functional value.
`
    },
    {
        title: "Kevin Lu, 28",
        text: `<strong>Primary Rifle:</strong> AUG (Gas Blowback)

<strong>Primary Pistols:</strong> Glock 34, Hi-Capa 5.1

<strong>Field Type:</strong> 80% Outdoor / 20% Indoor CQB

"I prefer longer-barrel platforms to improve accuracy and range, especially at my usual outdoor fields where engagement distances can reach 50–100 meters. For the same reason, I choose the Glock 34 as my sidearm instead of shorter models like the G17 or G19."


<strong>Pistol Usage</strong>: ~25% (frequently used indoors or within 30 meters). 

<strong>Pain Points:</strong> Standard pistols lack sufficient accuracy for longer engagement distances.

<strong>Wish / Need:</strong> A pistol with higher precision and range to effectively complement the rifle.
`
    }
];



export default function Research() {
    return (
        <div
            className="text-white w-100 py-5  "
            style={{ backgroundColor: "rgb(255,255,255)", position: "relative" }}
        >
            {/* Background Section */}
            <div className="mx-auto mt-5 mb-5" style={{ maxWidth: "1100px" }}>
                <h2 className="fw-bold mb-3 text-center text-dark">
                    Background – What is Airsoft?
                </h2>
                <p className="mb-5 text-center text-dark">
                    Airsoft is a recreational sport and competitive activity that uses
                    non-lethal air-powered guns to fire plastic BB pellets. Due to its
                    safe nature, it is also widely adopted by military and law
                    enforcement agencies for simulated combat training.
                </p>
                {/* <img src="./images/bgtry.webp" alt="" className="w-100 rounded rounded-4" /> */}
            </div>

            {/* Main Content */}
            <div className="mx-auto d-flex flex-column justify-content-center align-items-center text-center w-100 h-100" style={{ maxWidth: "1100px" }}>
                <div
                    className="rounded rounded-4 pt-5 pb-0 px-5 mb-5"
                    style={{
                        background: "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.8) 100%)",
                        maxWidth: "1300px"
                    }}
                >
                    {/* Project Overview */}
                    <div className="d-flex flex-column flex-sm-row align-items-start mt-4 mb-3">

                        <div className="text-white rounded ms-sm-3 mb-5">
                            <h2 className="fw-bold text-start mb-3">Project Overview</h2>
                            <p className="mb-4 text-start">
                                In airsoft, pistols are often treated as secondary weapons, limited by their firepower compared to rifles and submachine guns. This project takes the Trinity Hi-Capa as its foundation and redesigns it as a primary combat pistol, engineered for submachine-gun-level performance—transforming the pistol from a support tool into a standalone battlefield weapon.
                            </p>
                        </div>
                    </div>


                    {/* interviews         */}
                    <h2 className="text-center mb-4 mt-0 fw-bold">Player Interviews</h2>
                    <div className="row g-4 mb-3">
                        {playerInterviews.map((item, index) => (
                            <div key={index} className="col-md-4 col-sm-6">
                                <div
                                    className="card h-100 border border-white rounded-3 py-3"
                                    style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                                >
                                    <div className="card-body text-start ">
                                        <h4 className="text-white fw-bold ">{item.title}</h4>
                                        <hr className="text-white" />
                                        <p
                                            className="card-text text-white "
                                            style={{
                                                whiteSpace: "pre-line",
                                                lineHeight: "2"
                                            }}
                                            dangerouslySetInnerHTML={{ __html: item.text }}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Summary */}
                    <div className="row mb-5">
                        <div className="col-12">
                            <div
                                className="border border-white rounded-3 p-4"
                                style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                            >
                                <h4 className="text-white fw-bold mb-3">Summary</h4>
                                <ul
                                    className="text-white mb-0 ps-0"
                                    style={{
                                        lineHeight: "1.7",
                                        listStyle: "none"
                                    }}
                                >

                                    <li>• Pistols are perceived as unreliable due to limited accuracy and effective range.</li>
                                    <li>• Pistols are harder to aim compared to rifles equipped with optics.</li>
                                    <li>• Carrying a pistol adds extra weight without delivering proportional value.</li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    {/* Design Goals */}
                    <div className="container my-5 py-4">
                        <h2 className="text-center mb-3 fw-bold">Design Goals</h2>
                        <div className="row g-4">
                            {designGoals.map((goal, index) => (
                                <div key={index} className="col-md-4 col-sm-6">
                                    <div
                                        className="card h-100 border border-white rounded-3 py-3"
                                        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                                    >
                                        <div className="card-body">
                                            <h5 className="text-white fw-bold">{goal.title}</h5>
                                            <h3 className="text-white fw-bold m-0 p-0">-</h3>
                                            <p className="card-text text-white">{goal.text}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                   
                </div>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <div
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "90%",
                    zIndex: 10,
                    textAlign: "center",
                    display: window.innerWidth < 1200 ? "none" : "block", // 小於 1200px 隱藏
                }}
            >

                <img
                    src="/images/split.webp"
                    alt="Bottom Decoration"
                    style={{
                        width: "100%",
                    }}
                />
            </div>

        </div>
    );
}
