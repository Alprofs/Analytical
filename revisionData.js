// ملف: revisionData.js
// Final Updated Revision Version

const revisionData = [
    {
        sectionTitle: "LAB 1: INTRODUCTION",
        branches: [
            {
                colorClass: "origin",
                titleColor: "#1976D2",
                title: "Qualitative vs Quantitative",
                content:
                    "• <b><span class='ltr'>Qualitative:</span></b> Detects the presence of a substance.<br>" +
                    "• <b><span class='ltr'>Quantitative:</span></b> Determines the amount/concentration of a substance."
            },

            {
                colorClass: "chem",
                titleColor: "#C2185B",
                title: "Primary Standard",
                content:
                    "Must be 100% pure, stable, not absorbing water or CO2, not oxidized, react stoichiometrically, soluble, and have a <b><span class='ltr'>high equivalent weight</span></b> to minimize weighing errors."
            },

            {
                colorClass: "key",
                titleColor: "#FF9800",
                title: "Reading Glassware (Trick)",
                content:
                    "• <b><span class='ltr'>Colored Solutions:</span></b> Read from the UPPER surface of the meniscus.<br>" +
                    "• <b><span class='ltr'>Colorless Liquids:</span></b> Read from the BOTTOM (concave) surface.<br>" +
                    "• Eye must be at the SAME level of the solution."
            },

            {
                colorClass: "other",
                titleColor: "#616161",
                title: "Equivalence Point & Blank",
                content:
                    "• <b><span class='ltr'>Equivalence Point:</span></b> Equal amounts of acid & base reacted.<br>" +
                    "• <b><span class='ltr'>Blank Experiment:</span></b> Used to correct background effects and impurities."
            }
        ]
    },

    {
        sectionTitle: "LAB 2 & 3: ACID-BASE & BUFFERS",
        branches: [

            {
                colorClass: "origin",
                titleColor: "#1976D2",
                title: "Indicators Colors & pH",
                content:
                    "• <b><span class='ltr'>Methyl Orange (M.O):</span></b> Red → Yellow. End point is ORANGE (pH 3.2–4.4).<br>" +
                    "• <b><span class='ltr'>Phenolphthalein (ph.ph):</span></b> Colorless → Pink/Violet (pH 8.2–10)."
            },

            {
                colorClass: "key",
                titleColor: "#FF9800",
                title: "Titration Curves",
                content:
                    "• <b><span class='ltr'>Strong Acid vs Strong Base:</span></b> Large inflection range. ANY indicator works. End point ≈ pH 7.<br>" +
                    "• <b><span class='ltr'>Weak Acid vs Strong Base:</span></b> End point in alkaline medium (>7). Only alkaline indicators like <b>ph.ph</b> are suitable. M.O cannot be used."
            },

            {
                colorClass: "chem",
                titleColor: "#C2185B",
                title: "Buffer Solutions",
                content:
                    "Buffers resist changes in pH.<br>" +
                    "• <b><span class='ltr'>Acidic Buffer:</span></b> Weak acid + its salt.<br>" +
                    "Example: Acetic acid + Sodium acetate.<br>" +
                    "• <b><span class='ltr'>Basic Buffer:</span></b> Weak base + its salt.<br>" +
                    "Example: NH4OH + NH4Cl.<br><br>" +
                    "<b><span class='ltr'>Buffer Capacity Depends on:</span></b><br>" +
                    "1- Ratio<br>2- Type<br>3- Concentration"
            },

            {
                colorClass: "other",
                titleColor: "#616161",
                title: "Henderson-Hasselbalch",
                content:
                    "• <b><span class='ltr'>Acidic Buffer:</span></b> pH = pKa + log [salt]/[acid].<br>" +
                    "• Increasing SALT increases pH.<br>" +
                    "• Increasing ACID decreases pH.<br>" +
                    "• At half-neutralization: <b>pH = pKa</b>."
            }
        ]
    },

    {
        sectionTitle: "LAB 4 & 5: ACID-BASE APPLICATIONS",
        branches: [

            {
                colorClass: "origin",
                titleColor: "#1976D2",
                title: "Carbonate & Bicarbonate",
                content:
                    "• Carbonate reacts in TWO steps.<br>" +
                    "• <b><span class='ltr'>ph.ph Indicator:</span></b> Reacts with HALF carbonate only.<br>" +
                    "• <b><span class='ltr'>M.O Indicator:</span></b> Reacts with ALL carbonate + bicarbonate.<br><br>" +
                    "• ph.ph end point: disappearance of pink color.<br>" +
                    "• M.O end point: yellow → orange."
            },

            {
                colorClass: "chem",
                titleColor: "#C2185B",
                title: "Borax & Boric Acid",
                content:
                    "Borax hydrolyzes into Boric acid + NaOH.<br><br>" +
                    "• NaOH titrated with HCl using M.O.<br>" +
                    "• Boric acid is too weak to be titrated directly.<br>" +
                    "• <b>Glycerol (30–50%)</b> added to increase acidity and form stronger complex.<br>" +
                    "• Then titrated with NaOH using ph.ph."
            }
        ]
    },

    {
        sectionTitle: "LAB 6: AMMONIUM CHLORIDE & SODIUM SALICYLATE",
        branches: [

            {
                colorClass: "origin",
                titleColor: "#1976D2",
                title: "Formol Titration",
                content:
                    "Formaldehyde reacts with ammonium salts producing Hexamine and liberating acid.<br>" +
                    "Liberated acid titrated with NaOH using <b>ph.ph</b>.<br>" +
                    "End point: faint pink."
            },

            {
                colorClass: "key",
                titleColor: "#FF9800",
                title: "Biphasic Titration",
                content:
                    "Used for Sodium Salicylate.<br><br>" +
                    "• Ether extracts Salicylic acid because it is much more soluble in ether than water (250:1).<br>" +
                    "• Indicator: Bromophenol blue.<br>" +
                    "• End point: FULL GREEN color.<br><br>" +
                    "• Bluish-green = under titration.<br>" +
                    "• Yellowish-green = over titration."
            }
        ]
    },

    {
        sectionTitle: "LAB 7: PRECIPITIMETRY",
        branches: [

            {
                colorClass: "origin",
                titleColor: "#1976D2",
                title: "Mohr's Method",
                content:
                    "• Direct titration method.<br>" +
                    "• pH = 6.5 – 9 (neutral/slightly alkaline).<br>" +
                    "• Indicator: K2CrO4.<br>" +
                    "• End point: Brick red ppt (Ag2CrO4)."
            },

            {
                colorClass: "chem",
                titleColor: "#C2185B",
                title: "Mohr's pH Gaps",
                content:
                    "• <b><span class='ltr'>Acidic Medium:</span></b> Soluble silver dichromate forms.<br>" +
                    "• <b><span class='ltr'>Strong Alkaline Medium:</span></b> AgOH then black Ag2O forms.<br>" +
                    "• Ammonia dissolves AgCl complex."
            },

            {
                colorClass: "key",
                titleColor: "#FF9800",
                title: "Mohr vs Volhard",
                content:
                    "• <b><span class='ltr'>Mohr:</span></b> Direct titration, neutral medium, K2CrO4 indicator, brick red ppt.<br>" +
                    "• <b><span class='ltr'>Volhard:</span></b> Back titration, acidic medium (HNO3), ferric alum indicator, blood red solution."
            },

            {
                colorClass: "other",
                titleColor: "#616161",
                title: "Volhard's Method",
                content:
                    "• Acidic medium is required to favor blood red complex formation.<br>" +
                    "• HCl cannot be used because AgCl precipitates.<br>" +
                    "• H2SO4 cannot be used because Ag2SO4 precipitates.<br>" +
                    "• Basic medium forms Ag2O.<br><br>" +
                    "• AgCl MUST be removed because AgSCN is less soluble."
            }
        ]
    },

    {
        sectionTitle: "LAB 8 & 9: COMPLEXOMETRY",
        branches: [

            {
                colorClass: "origin",
                titleColor: "#1976D2",
                title: "EDTA Basics",
                content:
                    "• EDTA is a MULTIDENTATE ligand.<br>" +
                    "• EDTA forms stable chelates with many metals.<br>" +
                    "• EDTA is NON-selective."
            },

            {
                colorClass: "chem",
                titleColor: "#C2185B",
                title: "Why Alkaline pH for EDTA?",
                content:
                    "EDTA forms more stable complexes in alkaline medium because liberated H+ is neutralized, shifting reaction forward."
            },

            {
                colorClass: "other",
                titleColor: "#616161",
                title: "Metallochromic Indicators",
                content:
                    "Indicator changes from COMPLEXED color to FREE color because EDTA forms a more stable complex with the metal ion."
            },

            {
                colorClass: "key",
                titleColor: "#FF9800",
                title: "Indicators Colors",
                content:
                    "• <b><span class='ltr'>Erio-T:</span></b> Wine red → Blue (pH 8–10).<br>" +
                    "• <b><span class='ltr'>Murexide:</span></b> Pink → Purple (pH 12).<br>" +
                    "• <b><span class='ltr'>Xylenol Orange:</span></b> Red → Lemon yellow (acidic pH 5)."
            },

            {
                colorClass: "chem",
                titleColor: "#C2185B",
                title: "Zinc with EDTA",
                content:
                    "• At pH 10: ammonia buffer + Erio-T.<br>" +
                    "Wine red → Blue.<br><br>" +
                    "• At pH 5: hexamine buffer + Xylenol orange.<br>" +
                    "Wine red → Lemon yellow."
            },

            {
                colorClass: "origin",
                titleColor: "#1976D2",
                title: "Ca & Mg Mixture",
                content:
                    "• <b><span class='ltr'>Total Ca + Mg:</span></b> pH 10 using Erio-T.<br>" +
                    "Wine red → Blue.<br><br>" +
                    "• <b><span class='ltr'>Ca only:</span></b> pH 12 using Murexide.<br>" +
                    "Pink → Purple."
            },

            {
                colorClass: "key",
                titleColor: "#FF9800",
                title: "Why Ca Only at pH 12?",
                content:
                    "Mg2+ precipitates as Mg(OH)2 at pH 12, so only Ca2+ remains available for EDTA titration."
            },

            {
                colorClass: "other",
                titleColor: "#616161",
                title: "Why Murexide?",
                content:
                    "Erio-T forms weak complex with Ca2+, giving unclear end point. Murexide gives sharper end point."
            }
        ]
    },

    {
        sectionTitle: "LAB 10: ZINC BY FERROCYANIDE",
        branches: [

            {
                colorClass: "origin",
                titleColor: "#1976D2",
                title: "Principle",
                content:
                    "Zn2+ reacts with Ferrocyanide forming insoluble potassium zinc ferrocyanide."
            },

            {
                colorClass: "key",
                titleColor: "#FF9800",
                title: "Indicator System",
                content:
                    "• Indicator: Diphenylamine (Redox indicator).<br>" +
                    "• Small amount of Ferricyanide added first so oxidized form predominates.<br><br>" +
                    "• Before E.P: Ferricyanide predominates → Violet color.<br>" +
                    "• At E.P: Excess Ferrocyanide predominates → Colorless."
            }
        ]
    },

    {
        sectionTitle: "MOST IMPORTANT WHY QUESTIONS",
        branches: [

            {
                colorClass: "key",
                titleColor: "#FF9800",
                title: "Why Glycerol?",
                content:
                    "To increase acidity of boric acid so it can be titrated."
            },

            {
                colorClass: "key",
                titleColor: "#FF9800",
                title: "Why Ether?",
                content:
                    "To extract salicylic acid because it is more soluble in ether than water."
            },

            {
                colorClass: "key",
                titleColor: "#FF9800",
                title: "Why Acidic Medium in Volhard?",
                content:
                    "To favor formation of blood red ferric-thiocyanate complex."
            },

            {
                colorClass: "key",
                titleColor: "#FF9800",
                title: "Why NOT Acidic in Mohr?",
                content:
                    "Because soluble silver dichromate forms."
            },

            {
                colorClass: "key",
                titleColor: "#FF9800",
                title: "Why Alkaline Medium for EDTA?",
                content:
                    "Because liberated H+ is neutralized, increasing stability of EDTA complex."
            },

            {
                colorClass: "key",
                titleColor: "#FF9800",
                title: "Why Ferricyanide Added?",
                content:
                    "To make oxidized form predominate before endpoint."
            },

            {
                colorClass: "key",
                titleColor: "#FF9800",
                title: "Why Murexide?",
                content:
                    "Because Erio-T gives weak complex with Ca2+ and unclear endpoint."
            },

            {
                colorClass: "key",
                titleColor: "#FF9800",
                title: "Why pH 12 for Calcium?",
                content:
                    "Because Mg2+ precipitates as Mg(OH)2 so only Ca2+ is titrated."
            }
        ]
    }
];