const UPDATED = "2026-08-12";
const DEFAULT = ["Fall", "2026"];

const BG = ["Boris Goldfarb", "https://construkctor.github.io"];
const AT = ["Alex Tchernev",  "https://www.albany.edu/math/faculty/alexandre-tchernev"];
const MV = ["Marco Varisco",  "https://varisco.info"];
const MZ = ["Matt Zaremsky",  "https://zaremsky.github.io"];

const TERMS = { // abbr must be unique
  Spring: { abbr: "-3", firstMonth: 1 },
  Fall:   { abbr: "-9", firstMonth: 7 },
};

const EDITIONS = [
//["term", "year", "time", "room", ["org1", "href1"], ["org2", "href2"], …]  (all the ["orgN", "hrefN"] are optional)
  ["Fall",   "2026", "Thursdays 3:00–4:20",  "Massry B008",        AT, MV, MZ],
  ["Spring", "2026", "Thursdays 3:00–4:20",  "Massry B012",        AT, MV, MZ],
  ["Fall",   "2025", "Thursdays 3:00–4:20",  "Massry B010",        AT, MV, MZ],
  ["Spring", "2025", "Thursdays 3:00–4:20",  "Social Science 256", AT, MV, MZ],
  ["Fall",   "2024", "Thursdays 3:00–4:20",  "Massry B012",        AT, MV, MZ],
  ["Spring", "2024", "Thursdays 3:00–4:20",  "Massry B010",        AT, MV, MZ],
  ["Fall",   "2023", "Thursdays 3:00–4:20",  "Massry B012",        AT, MV, MZ],
  ["Spring", "2023", "Thursdays 3:00–4:20",  "Massry B008",        AT, MV, MZ],
  ["Fall",   "2022", "Thursdays 3:00–4:20",  "Earth Science 143",  AT, MV, MZ],
  ["Spring", "2020", "Thursdays 1:15–2:35",  "Earth Science 143",  AT, MV, MZ],
  ["Fall",   "2019", "Thursdays 1:15–2:35",  "Earth Science 143",  AT, MV, MZ],
  ["Spring", "2019", "Thursdays 1:15–2:35",  "Earth Science 143",  AT, MV, MZ],
  ["Fall",   "2018", "Thursdays 1:15–2:35",  "Earth Science 143",  AT, MV, MZ],
  ["Spring", "2018", "Thursdays 1:15–2:35",  "Earth Science 143",  AT, MV, MZ],
  ["Fall",   "2017", "Thursdays 1:15–2:35",  "Earth Science 143",  BG, AT, MV],
  ["Spring", "2017", "Thursdays 1:15–2:35",  "Earth Science 143",  BG, AT, MV],
  ["Fall",   "2016", "Thursdays 1:15–2:35",  "Earth Science 143",  BG, AT, MV],
  ["Spring", "2016", "Thursdays 1:15–2:35",  "Earth Science 143",  BG, AT, MV],
  ["Fall",   "2015", "Thursdays 1:15–2:35",  "Earth Science 143",  BG, AT, MV],
  ["Spring", "2015", "Thursdays 1:15–2:35",  "Earth Science 143",  BG, AT, MV],
  ["Fall",   "2014", "Thursdays 1:15–2:35",  "Earth Science 143",  BG, AT, MV],
  ["Spring", "2014", "Thursdays 1:15–2:35",  "Earth Science 143",  BG, AT, MV],
  ["Fall",   "2013", "Thursdays 1:15–2:35",  "Earth Science 143",  BG, AT, MV],
  ["Spring", "2013", "Thursdays 1:15–2:35",  "Earth Science 143",  BG, AT, MV],
  ["Fall",   "2012", "Thursdays 1:15–2:35",  "Earth Science 143",  BG, AT, MV],
  ["Spring", "2012", "Thursdays 1:15–2:35",  "Earth Science 143",  BG, AT, MV],
  ["Fall",   "2011", "Thursdays 1:15–2:35",  "Earth Science 143",  BG, AT, MV],
  ["Spring", "2011", "Tuesdays 11:45–12:45", "Earth Science 153",  BG, AT, MV],
  ["Fall",   "2010", "Wednesdays 1:35–2:35", "Earth Science 153",  BG, AT, MV],
];

const EXTRACATS  = ["special", "canceled"];
const CATEGORIES = [...EXTRACATS, "UAlbany", "US", "Non-US"];
const SEARCHCATS = CATEGORIES.filter((cat) => !EXTRACATS.includes(cat));
const TALKS = [
//["dateISO", "name", "href", "affil", "title", "cat"]  (talks on the same day must share the same pdf/dateISO.pdf)
[
"2010-09-15",
"Lindsay Childs",
"https://www.albany.edu/~lc802/",
"UAlbany",
"On Hopf Galois Structures on Galois Extensions of Fields",
"UAlbany"
],
[
"2010-09-22",
"Marco Varisco",
"https://varisco.info",
"UAlbany",
"Manifolds, Algebraic K-Theory, and Assembly Maps — Part 1",
"UAlbany"
],
[
"2010-09-29",
"Marco Varisco",
"https://varisco.info",
"UAlbany",
"Manifolds, Algebraic K-Theory, and Assembly Maps — Part 2",
"UAlbany"
],
[
"2010-10-06",
"Marco Varisco",
"https://varisco.info",
"UAlbany",
"Manifolds, Algebraic K-Theory, and Assembly Maps — Part 3",
"UAlbany"
],
[
"2010-10-13",
"Boris Goldfarb",
"https://construkctor.github.io",
"UAlbany",
"Projective Resolutions and the Geometry of Groups — Part 1",
"UAlbany"
],
[
"2010-10-20",
"Boris Goldfarb",
"https://construkctor.github.io",
"UAlbany",
"Projective Resolutions and the Geometry of Groups — Part 2",
"UAlbany"
],
[
"2010-10-27",
"Mark Steinberger",
"https://web.archive.org/web/20181020072627/https://www.albany.edu/~mark/",
"UAlbany",
"Equivariant s-Cobordism Theorems — Part 1",
"UAlbany"
],
[
"2010-11-03",
"Mark Steinberger",
"https://web.archive.org/web/20181020072627/https://www.albany.edu/~mark/",
"UAlbany",
"Equivariant s-Cobordism Theorems — Part 2",
"UAlbany"
],
[
"2010-11-10",
"no seminar",
"",
"",
"",
"special"
],
[
"2010-11-17",
"Alex Tchervev",
"https://www.albany.edu/math/faculty/alexandre-tchernev",
"UAlbany",
"Monomial Ideals, With a View Toward Algebraic Topology — Part 1",
"UAlbany"
],
[
"2010-11-24",
"no classes",
"",
"",
"",
"special"
],
[
"2010-12-01",
"Alex Tchernev",
"https://www.albany.edu/math/faculty/alexandre-tchernev",
"UAlbany",
"Monomial Ideals, With a View Toward Algebraic Topology — Part 2",
"UAlbany"
],
[
"2010-12-08",
"Alex Tchernev",
"https://www.albany.edu/math/faculty/alexandre-tchernev",
"UAlbany",
"Monomial Ideals, With a View Toward Algebraic Topology — Part 3",
"UAlbany"
],
[
"2011-01-25",
"Jing Zhang",
"",
"UAlbany",
"Singularities of a Holomorphic Map",
"UAlbany"
],
[
"2011-02-01",
"no seminar",
"",
"",
"",
"special"
],
[
"2011-02-08",
"Marco Varisco",
"https://varisco.info",
"UAlbany",
"Modules and Spaces over a Category — Part 1",
"UAlbany"
],
[
"2011-02-15",
"Marco Varisco",
"https://varisco.info",
"UAlbany",
"Modules and Spaces over a Category — Part 2",
"UAlbany"
],
[
"2011-02-22",
"no classes",
"",
"",
"",
"special"
],
[
"2011-03-01",
"Alex Tchernev",
"https://www.albany.edu/math/faculty/alexandre-tchernev",
"UAlbany",
"Matroids and Their Linear Algebra",
"UAlbany"
],
[
"2011-03-08",
"Antun Milas",
"https://anmilas.github.io",
"UAlbany",
"QUE, CFT, BTC, and Other Three-Letter Words — Part 1",
"UAlbany"
],
[
"2011-03-15",
"Antun Milas",
"https://anmilas.github.io",
"UAlbany",
"QUE, CFT, BTC, and Other Three-Letter Words — Part 2",
"UAlbany"
],
[
"2011-03-22",
"Alex Tchernev",
"https://www.albany.edu/math/faculty/alexandre-tchernev",
"UAlbany",
"Matroids and Multigraded Modules of Generic Type",
"UAlbany"
],
[
"2011-03-29",
"Antun Milas",
"https://anmilas.github.io",
"UAlbany",
"QUE, CFT, BTC, and Other Three-Letter Words — Part 3",
"UAlbany"
],
[
"2011-04-05",
"Marco Varisco",
"https://varisco.info",
"UAlbany",
"An Introduction to Waldhausen’s Algebraic K-Theory of Spaces and its Applications to Geometric Topology",
"UAlbany"
],
[
"2011-04-12",
"Wolfgang Steimle",
"http://www.math.uni-bonn.de/people/steimle/",
"University of Bonn, Germany",
"Obstructions to Stably Fibering Manifolds",
"Non-US"
],
[
"2011-04-19",
"no classes",
"",
"",
"",
"special"
],
[
"2011-04-26",
"Cristian Lenart",
"https://www.albany.edu/~lenart/",
"UAlbany",
"The Energy Function on Crystals via the Charge",
"UAlbany"
],
[
"2011-04-27",
"Marco Varisco",
"https://varisco.info",
"UAlbany",
"An Introduction to Cyclic Homology (joint with Analysis Seminar)",
"UAlbany"
],
[
"2011-05-03",
"Marco Varisco",
"https://varisco.info",
"UAlbany",
"Another Introduction to Cyclic Homology (joint with Analysis Seminar)",
"UAlbany"
],
[
"2011-09-01",
"Alex Tchernev",
"https://www.albany.edu/math/faculty/alexandre-tchernev",
"UAlbany",
"Monomial Resolutions Supported on a Poset",
"UAlbany"
],
[
"2011-09-08",
"Liang Kong",
"http://www.tsinghua.edu.cn/publish/casen/1695/2010/20101223125537078234626/20101223125537078234626_.html",
"Institute for Advanced Study, Tsinghua University, Beijing, China",
"Conformal Field Theories and a New Geometry",
"Non-US"
],
[
"2011-09-15",
"Boris Goldfarb",
"https://construkctor.github.io",
"UAlbany",
"Topological Rigidity — Part 1",
"UAlbany"
],
[
"2011-09-22",
"Boris Goldfarb",
"https://construkctor.github.io",
"UAlbany",
"Topological Rigidity — Part 2",
"UAlbany"
],
[
"2011-09-27",
"Emanuele Delucchi",
"http://www.informatik.uni-bremen.de/~delucchi/",
"Bremen University, Germany",
"Toric Arrangements: Combinatorial Models and the Fundamental Group",
"Non-US"
],
[
"2011-09-29",
"no classes",
"",
"",
"",
"special"
],
[
"2011-10-06",
"no seminar",
"",
"",
"",
"special"
],
[
"2011-10-13",
"Susan Beckhardt",
"",
"UAlbany",
"Intrinsically Knotted Graphs",
"UAlbany"
],
[
"2011-10-20",
"Michael Broshi",
"http://www.linkedin.com/pub/michael-broshi/24/89b/3a4",
"Wellesley College",
"G-Bundles over Dedekind Schemes",
"US"
],
[
"2011-10-27",
"Marco Varisco",
"https://varisco.info",
"UAlbany",
"On the Classification of Division Algebras",
"UAlbany"
],
[
"2011-11-03",
"Amanda Beecher",
"http://ww2.ramapo.edu/tas/faculty/Beecher.aspx",
"Ramapo College",
"Uniform Matroids and Multigraded Free Resolutions",
"US"
],
[
"2011-11-10",
"Timothy Clark",
"http://math.loyola.edu/~tbclark/",
"Loyola University Maryland",
"Rigid Monomial Ideals: Posets and Resolutions",
"US"
],
[
"2011-11-17",
"Boris Goldfarb",
"https://construkctor.github.io",
"UAlbany",
"Simplicial Complexes vs. Handlebodies",
"UAlbany"
],
[
"2011-11-24",
"no classes",
"",
"",
"",
"special"
],
[
"2011-12-01",
"Courtney Thatcher",
"http://hope.simons-rock.edu/~cthatcher/",
"Bard College at Simon’s Rock",
"Lens Spaces and Free ℤ/pℤ Actions on Products of Spheres",
"US"
],
[
"2012-01-19",
"Michael Ching",
"http://www3.amherst.edu/~mching/",
"Amherst College",
"Classifying Taylor Towers",
"US"
],
[
"2012-01-26",
"Dan Ramras",
"http://www.math.nmsu.edu/~ramras/",
"New Mexico State University",
"Decomposition Complexity of Groups and Algebraic K-Theory",
"US"
],
[
"2012-02-02",
"no seminar",
"",
"",
"",
"special"
],
[
"2012-02-09",
"no seminar",
"",
"",
"",
"special"
],
[
"2012-02-16",
"Mahdi Asgari",
"http://www.math.okstate.edu/~asgari/",
"Oklahoma State University; Cornell University",
"Counting Cusp Forms",
"US"
],
[
"2012-02-23",
"Brad Henry",
"http://www.mbhenry.com",
"Siena College",
"An Introduction to Contact Geometry",
"US"
],
[
"2012-03-01",
"Brad Henry",
"http://www.mbhenry.com",
"Siena College",
"Legendrian Knot Theory",
"US"
],
[
"2012-03-08",
"Catherine Pfaff",
"http://www.math.rutgers.edu/~cpfaff/",
"Bard College at Simon’s Rock",
"Constructing and Classifying Fully Irreducible Outer Automorphisms of Free Groups",
"US"
],
[
"2012-03-15",
"no classes",
"",
"",
"",
"special"
],
[
"2012-03-22",
"Richard Goldstein",
"http://math.albany.edu/math/pers/goldst.html",
"UAlbany",
"Primitivity in Free Groups — Part 1",
"UAlbany"
],
[
"2012-03-29",
"Richard Goldstein",
"http://math.albany.edu/math/pers/goldst.html",
"UAlbany",
"Primitivity in Free Groups — Part 2",
"UAlbany"
],
[
"2012-04-05",
"no classes",
"",
"",
"",
"special"
],
[
"2012-04-12",
"Marco Varisco",
"https://varisco.info",
"UAlbany",
"On Framed Manifolds and the Kervaire Invariant",
"UAlbany"
],
[
"2012-04-19",
"no seminar",
"",
"",
"",
"special"
],
[
"2012-04-26",
"Arthur Lubovsky",
"",
"UAlbany",
"A Combinatorial Model for Affine Crystals",
"UAlbany"
],
[
"2012-05-03",
"Steve Plotnick",
"",
"UAlbany",
"The Virtual Haken Conjecture — A Trip Through Three-Manifold Topology",
"UAlbany"
],
[
"2012-08-30",
"Boris Goldfarb",
"https://construkctor.github.io",
"UAlbany",
"What is… Applied Topology? The Case of Persistent Homology",
"UAlbany"
],
[
"2012-09-06",
"Courtney Thatcher",
"http://hope.simons-rock.edu/~cthatcher/",
"Bard College at Simon’s Rock",
"Applied Topology: The Mapper Algorithm",
"US"
],
[
"2012-09-13",
"Ben Salisbury",
"http://www.sci.ccny.cuny.edu/~salisbury/",
"The City College of New York",
"Crystals of Tableaux and t-Deformation of Characters",
"US"
],
[
"2012-09-20",
"Andrew Linshaw",
"http://people.brandeis.edu/%7elinshaw/",
"Brandeis University",
"Invariant Subalgebras of Vertex Algebras",
"US"
],
[
"2012-09-27",
"Conchita Martinez",
"http://www.unizar.es/matematicas/fichas/ficha_conchita.htm",
"Universidad de Zaragoza, Spain; CUNY",
"Centralizers of Finite Subgroups in Thompson-Like Groups",
"Non-US"
],
[
"2012-10-04",
"Marco Varisco",
"https://varisco.info",
"UAlbany",
"On Thompson’s Group T and Applications to Algebraic K-Theory",
"UAlbany"
],
[
"2012-10-11",
"Fernando Guzman",
"http://www.math.binghamton.edu/fer/",
"Binghamton University, SUNY",
"Natural Duality for the Algebra of Conditional Logic",
"US"
],
[
"2012-10-18",
"Bill Dunbar",
"http://hope.simons-rock.edu/~wdunbar/",
"Bard College at Simon’s Rock",
"Diameters of Sphere Quotients: Introduction",
"US"
],
[
"2012-10-25",
"Bill Dunbar",
"http://hope.simons-rock.edu/~wdunbar/",
"Bard College at Simon’s Rock",
"Diameters of 3-Sphere Quotients",
"US"
],
[
"2012-11-01",
"Alex Tchernev",
"https://www.albany.edu/math/faculty/alexandre-tchernev",
"UAlbany",
"Betti Degrees Posets of Monomial Ideals",
"UAlbany"
],
[
"2012-11-08",
"Andrew Marshall",
"http://www.math.cornell.edu/~alm/",
"Cornell University",
"Space of Tetrahedral Graphs in ℝ³",
"US"
],
[
"2012-11-15",
"Jennifer Taback",
"http://www.bowdoin.edu/faculty/j/jtaback/",
"Bowdoin College",
"The Geometry of Twisted Conjugacy Classes in Diestel-Leader Groups",
"US"
],
[
"2012-11-22",
"no classes",
"",
"",
"",
"special"
],
[
"2012-11-29",
"Hara Charalambous",
"http://users.auth.gr/hara/",
"Aristotle University of Thessaloniki, Greece",
"Markov Bases of Lattice Ideals",
"Non-US"
],
[
"2012-12-06",
"John Peter",
"http://www.utica.edu/faculty_staff/jpeter/",
"Utica College",
"Stabilization and Classification of Embedded Thickenings",
"US"
],
[
"2013-01-24",
"no seminar",
"",
"",
"",
"special"
],
[
"2013-01-31",
"Alex Tchernev",
"https://www.albany.edu/math/faculty/alexandre-tchernev",
"UAlbany",
"“Good” Posets and Minimal Free Resolutions of Monomial Ideals",
"UAlbany"
],
[
"2013-02-07",
"Marco Varisco",
"https://varisco.info",
"UAlbany",
"An Introduction to Sage",
"UAlbany"
],
[
"2013-02-14",
"Alex Tchernev",
"https://www.albany.edu/math/faculty/alexandre-tchernev",
"UAlbany",
"“Good” Posets and LCM-Lattices of Monomial Ideals",
"UAlbany"
],
[
"2013-02-21",
"Jing Zhang",
"",
"UAlbany",
"Algebraic Manifolds with Vanishing Hodge Cohomology",
"UAlbany"
],
[
"2013-02-28",
"Boris Goldfarb",
"https://construkctor.github.io",
"UAlbany",
"Geometrically Controlled Algebra Over New Classes of Metric Spaces — Part 1",
"UAlbany"
],
[
"2013-03-07",
"Boris Goldfarb",
"https://construkctor.github.io",
"UAlbany",
"Geometrically Controlled Algebra Over New Classes of Metric Spaces — Part 2",
"UAlbany"
],
[
"2013-03-14",
"Hank Kurland",
"",
"RPI",
"Intersection Pairings on Conley Indices — Part 1",
"US"
],
[
"2013-03-21",
"no classes",
"",
"",
"",
"special"
],
[
"2013-03-28",
"Claude Schochet",
"http://www.math.wayne.edu/~claude/",
"Wayne State University",
"Homotopy Groups of Gauge Groups",
"US"
],
[
"2013-04-04",
"Hank Kurland",
"",
"RPI",
"Intersection Pairings on Conley Indices — Part 2",
"US"
],
[
"2013-04-11",
"Timothy Kohl",
"http://math.bu.edu/people/tkohl/",
"Boston University",
"Regular Permutation Groups of Order mp and Hopf Galois Structures",
"US"
],
[
"2013-04-18",
"Thomas Fiore",
"http://www-personal.umd.umich.edu/~tmfiore/",
"University of Michigan-Dearborn",
"Waldhausen Additivity and Approximation in Quasicategorical K-Theory",
"US"
],
[
"2013-04-25",
"no seminar",
"",
"",
"",
"special"
],
[
"2013-05-02",
"Marco Varisco",
"https://varisco.info",
"UAlbany",
"CW-Complexes over Categories and Posets",
"UAlbany"
],
[
"2013-08-29",
"Alex Tchernev",
"https://www.albany.edu/math/faculty/alexandre-tchernev",
"UAlbany",
"Symmetric Powers of Modules of Low Projective Dimension",
"UAlbany"
],
[
"2013-09-05",
"no classes",
"",
"",
"",
"special"
],
[
"2013-09-12",
"Carly Briggs",
"https://www.albany.edu/~ca488222/",
"UAlbany",
"An Efficient Algorithm for the Energy Function of KR-Crystals in Lie Type B",
"UAlbany"
],
[
"2013-09-19",
"Marco Varisco",
"https://varisco.info",
"UAlbany",
"On the Adams Isomorphism for Equivariant Orthogonal Spectra — Part 1",
"UAlbany"
],
[
"2013-09-26",
"Marco Varisco",
"https://varisco.info",
"UAlbany",
"On the Adams Isomorphism for Equivariant Orthogonal Spectra — Part 2",
"UAlbany"
],
[
"2013-10-03",
"Marco Varisco",
"https://varisco.info",
"UAlbany",
"On the Adams Isomorphism for Equivariant Orthogonal Spectra — Part 3",
"UAlbany"
],
[
"2013-10-08",
"Simon Wood",
"http://db.ipmu.jp/member/personal/1277en.html",
"Kavli IPMU, University of Tokyo, Japan",
"On the Extended W-Algebra of Type 𝔰𝔩₂ at Positive Rational Level",
"Non-US"
],
[
"2013-10-17",
"Alex Tchernev",
"https://www.albany.edu/math/faculty/alexandre-tchernev",
"UAlbany",
"Betti Categories of Graded Modules",
"UAlbany"
],
[
"2013-10-24",
"Mark Steinberger",
"https://web.archive.org/web/20181020072627/https://www.albany.edu/~mark/",
"UAlbany",
"Rigidity Theorems",
"UAlbany"
],
[
"2013-10-31",
"Antun Milas",
"https://anmilas.github.io",
"UAlbany",
"Tricks and Treats in Vertex Algebra Theory — Part 1",
"UAlbany"
],
[
"2013-11-07",
"Antun Milas",
"https://anmilas.github.io",
"UAlbany",
"Tricks and Treats in Vertex Algebra Theory — Part 2",
"UAlbany"
],
[
"2013-11-14",
"Jim Belk",
"http://faculty.bard.edu/belk/",
"Bard College",
"Turing Machines, Automata, and the Brin-Thompson Group 2V",
"US"
],
[
"2013-11-21",
"Jim Lepowsky",
"http://www.math.rutgers.edu/people/?id=220",
"Rutgers University",
"Logarithmic Tensor Category Theory — An Introduction",
"US"
],
[
"2013-11-28",
"no classes",
"",
"",
"",
"special"
],
[
"2013-12-05",
"Gonçalo Tabuada",
"http://math.mit.edu/~tabuada/",
"MIT",
"The Fundamental Isomorphism Conjecture Via Noncommutative Motives",
"US"
],
[
"2014-01-30",
"Amanda Beecher",
"http://www.ramapo.edu/tas/faculty/amanda-beecher/",
"Ramapo College",
"A Combinatorial Approach to Describing a Free Resolution of a Multigraded Module",
"US"
],
[
"2014-02-06",
"Marco Varisco",
"https://varisco.info",
"UAlbany",
"What Is… an ∞-Category?",
"UAlbany"
],
[
"2014-02-13",
"no classes",
"",
"",
"",
"special"
],
[
"2014-02-20",
"no classes",
"",
"",
"",
"special"
],
[
"2014-02-27",
"no seminar",
"",
"",
"",
"special"
],
[
"2014-03-06",
"no seminar",
"",
"",
"",
"special"
],
[
"2014-03-13",
"Kristen Mazur",
"http://sites.lafayette.edu/mazurk/",
"Lafayette College",
"A New Description of Tambara Functors",
"US"
],
[
"2014-03-20",
"no classes",
"",
"",
"",
"special"
],
[
"2014-03-27",
"Brenda Johnson",
"http://www.math.union.edu/people/faculty/johnsonb.html",
"Union College",
"A Tale of Two(?) Towers",
"US"
],
[
"2014-04-03",
"Alex Tchernev",
"https://www.albany.edu/math/faculty/alexandre-tchernev",
"UAlbany",
"What Is… Discrete Morse Theory?",
"UAlbany"
],
[
"2014-04-10",
"David Vella",
"http://www.skidmore.edu/~dvella/dcvbio1.htm",
"Skidmore College",
"Words within Words — A Recursive Approach to the Catalan Numbers and Fine Numbers",
"US"
],
[
"2014-04-17",
"Alex Tchernev",
"https://www.albany.edu/math/faculty/alexandre-tchernev",
"UAlbany",
"What Is… a Combinatorial Vector Field?",
"UAlbany"
],
[
"2014-04-24",
"Michael Andrews",
"https://math.mit.edu/people/profile?pid=1259",
"MIT",
"The Music of Spheres: the Adams Spectral Sequence and Periodicity",
"US"
],
[
"2014-05-01",
"Alex Tchernev",
"https://www.albany.edu/math/faculty/alexandre-tchernev",
"UAlbany",
"Weighted Bipartite Graphs and Determinants",
"UAlbany"
],
[
"2014-05-08",
"Leila Khatami",
"http://www.math.union.edu/people/faculty/khatamil.html",
"Union College",
"The Nilpotent Commutator of a Nilpotent Matrix",
"US"
],
[
"2014-08-28",
"Pedram Safari",
"http://www.math.harvard.edu/~safari/",
"Harvard University",
"Seiberg-Witten Equations with Multiple Spinors",
"US"
],
[
"2014-09-04",
"Liz Munch",
"http://elizabethmunch.com/math/",
"UAlbany",
"A History of Persistent Homology — Part 1",
"UAlbany"
],
[
"2014-09-11",
"Liz Munch",
"http://elizabethmunch.com/math/",
"UAlbany",
"A History of Persistent Homology — Part 2",
"UAlbany"
],
[
"2014-09-18",
"Matt Zaremsky",
"http://www.math.binghamton.edu/zaremsky/",
"Binghamton University, SUNY",
"Families of Groups Encoded Into Thompson-esque Limits",
"US"
],
[
"2014-09-25",
"no classes",
"",
"",
"",
"special"
],
[
"2014-10-02",
"Matt Willis",
"http://www.conncoll.edu/directories/faculty-profiles/matt-willis/",
"Connecticut College",
"Local Condition Sets for Demazure Tableaux",
"US"
],
[
"2014-10-09",
"Daniel Goldfarb",
"",
"Niskayuna HS",
"An Application Of Persistent Homology To Hockey Analytics",
"US"
],
[
"2014-10-16",
"David Rosenthal",
"https://facpub.stjohns.edu/~rosenthd/",
"St. John’s University",
"Large-Scale Geometry and Topology",
"US"
],
[
"2014-10-23",
"Andras Lorincz",
"",
"University of Connecticut",
"Bernstein-Sato Polynomials for Semi-Invariants of Quivers",
"US"
],
[
"2014-10-30",
"Branden Stone",
"http://home.adelphi.edu/~bstone/",
"Adelphi University",
"Classification of Rings with Graded Countable Cohen-Macaulay Type",
"US"
],
[
"2014-11-06",
"Marco Varisco",
"https://varisco.info",
"UAlbany",
"Constructing Equivariant Homology Theories — Part 1",
"UAlbany"
],
[
"2014-11-13",
"Marco Varisco",
"https://varisco.info",
"UAlbany",
"Constructing Equivariant Homology Theories — Part 2",
"UAlbany"
],
[
"2014-11-20",
"Marco Varisco",
"https://varisco.info",
"UAlbany",
"Constructing Equivariant Homology Theories — Part 3",
"UAlbany"
],
[
"2014-11-27",
"no classes",
"",
"",
"",
"special"
],
[
"2014-12-02",
"Jose Perea",
"https://fds.duke.edu/db/aas/math/joperea/",
"Duke University",
"Obstructions to Compatible Extensions of Mappings",
"US"
],
[
"2014-12-04",
"Irina Bobkova",
"http://www.math.rochester.edu/people/faculty/ibobkova/",
"University of Rochester",
"Resolutions of the K(2)-Local Sphere Spectrum",
"US"
],
[
"2015-01-22",
"Hank Kurland",
"",
"",
"Homology Relations Between Local Unstable Manifolds Characterizing Saddle-Connection Bifurcations — Part 1",
"US"
],
[
"2015-01-29",
"Hank Kurland",
"",
"",
"Homology Relations Between Local Unstable Manifolds Characterizing Saddle-Connection Bifurcations — Part 2",
"US"
],
[
"2015-02-05",
"Olgur Celikbas",
"http://www.math.uconn.edu/~olgur/",
"University of Connecticut",
"Syzygies and Tensor Product of Modules",
"US"
],
[
"2015-02-12",
"Ela Celikbas",
"",
"University of Connecticut",
"Decomposing Gorenstein Rings as Connected Sums",
"US"
],
[
"2015-02-19",
"Marco Varisco",
"https://varisco.info",
"UAlbany",
"What Is… the Farrell-Jones Conjecture?",
"UAlbany"
],
[
"2015-02-26",
"no seminar",
"",
"",
"",
"special"
],
[
"2015-03-05",
"An Huang",
"http://www.math.harvard.edu/~anhuang/",
"Harvard University",
"Period Integrals and Their Differential Systems",
"US"
],
[
"2015-03-12",
"Oana Veliche",
"http://www.northeastern.edu/cos/faculty/oana-veliche/",
"Northeastern University",
"Intersections and Sums of Gorenstein Ideals",
"US"
],
[
"2015-03-19",
"no classes",
"",
"",
"",
"special"
],
[
"2015-03-26",
"no seminar",
"",
"",
"",
"special"
],
[
"2015-04-02",
"David Vella",
"http://www.skidmore.edu/~dvella/dcvbio1.htm",
"Skidmore College",
"Nilpotent Orbits for Borel Subgroups of Simple Algebraic Groups of Small Rank",
"US"
],
[
"2015-04-09",
"Timothy Clark",
"http://math.loyola.edu/~tbclark/",
"Loyola University Maryland",
"Combinatorial Deformations of Monomial Ideals",
"US"
],
[
"2015-04-16",
"Matt Brin",
"http://www2.math.binghamton.edu/p/people/matt/start",
"Binghamton University, SUNY",
"Elementary But Complex Groups of PL Homeomorphisms of the Unit Interval",
"US"
],
[
"2015-04-23",
"Stefan Witzel",
"http://www.math.uni-bielefeld.de/~switzel/",
"Bielefeld University, Germany",
"The Sigma-invariants of Thompson group F",
"Non-US"
],
[
"2015-04-30",
"Susan Niefield",
"http://www.math.union.edu/~niefiels/",
"Union College",
"Exactness and Projectivity",
"US"
],
[
"2015-09-03",
"Liz Munch",
"http://elizabethmunch.com/math/",
"UAlbany",
"The Reeb Graph Interleaving Distance — Part 1",
"UAlbany"
],
[
"2015-09-10",
"Liz Munch",
"http://elizabethmunch.com/math/",
"UAlbany",
"The Reeb Graph Interleaving Distance — Part 2",
"UAlbany"
],
[
"2015-09-17",
"Amit Patel",
"http://akpatel.org",
"Institute for Advanced Study, Princeton",
"Reeb Spaces as Stratified Coverings",
"US"
],
[
"2015-09-24",
"no classes",
"",
"",
"",
"special"
],
[
"2015-10-01",
"Daniel Kasprowski",
"http://people.mpim-bonn.mpg.de/kasprowski/",
"Max Planck Institute for Mathematics, Bonn, Germany",
"On the K-Theory of Linear Groups",
"Non-US"
],
[
"2015-10-08",
"Jose Perea",
"https://www.math.msu.edu/directory/PersonalPage.aspx?people=regularfaculty&id=111114352",
"Michigan State University",
"Projective Coordinates for the Analysis of Data",
"US"
],
[
"2015-10-15",
"Changlong Zhong",
"https://zhongalbany.github.io",
"UAlbany",
"Torsion of Chow Groups of Twisted Flag Varieties",
"UAlbany"
],
[
"2015-10-22",
"Changlong Zhong",
"https://zhongalbany.github.io",
"UAlbany",
"Formal Affine Demazure Algebra and Its Dual — Part 1",
"UAlbany"
],
[
"2015-10-29",
"Changlong Zhong",
"https://zhongalbany.github.io",
"UAlbany",
"Formal Affine Demazure Algebra and Its Dual — Part 2",
"UAlbany"
],
[
"2015-11-05",
"Marco Varisco",
"https://varisco.info",
"UAlbany",
"Assembly Maps for Topological Cyclic Homology of Group Algebras — Part 1",
"UAlbany"
],
[
"2015-11-12",
"Marco Varisco",
"https://varisco.info",
"UAlbany",
"Assembly Maps for Topological Cyclic Homology of Group Algebras — Part 2",
"UAlbany"
],
[
"2015-11-19",
"Marco Varisco",
"https://varisco.info",
"UAlbany",
"Assembly Maps for Topological Cyclic Homology of Group Algebras — Part 3",
"UAlbany"
],
[
"2015-11-26",
"no classes",
"",
"",
"",
"special"
],
[
"2015-12-03",
"Dan Wood",
"",
"UAlbany",
"On Monomial Resolutions Supported on Posets",
"UAlbany"
],
[
"2016-01-28",
"Ellen Gasparovic",
"https://sites.google.com/a/union.edu/gasparovic/",
"Union College",
"Multi-Scale Modeling and Analysis of Stratified Space Data",
"US"
],
[
"2016-02-04",
"Jethro van Ekeren",
"http://w3.impa.br/~jethro/",
"Universidade Federal Fluminense, Brazil",
"Classification of Simple Vertex Algebras in Rank 24",
"Non-US"
],
[
"2016-02-11",
"Peter Spaeth",
"",
"GE Global Research, Niskayuna",
"The Symplectic Displacement Energy",
"US"
],
[
"2016-02-18",
"Michael Lesnick",
"http://www.ima.umn.edu/~mlesnick/",
"Princeton Neuroscience Institute",
"Algebraic Stability of Zigzag Persistence Modules",
"US"
],
[
"2016-02-25",
"Sara Kališnik Verovšek",
"http://web.stanford.edu/~kalisnik/",
"Stanford University",
"Tropical Coordinates on the Space of Persistence Barcodes",
"US"
],
[
"2016-03-03",
"Gufang Zhao",
"http://people.math.umass.edu/~zhao/",
"University of Massachusetts Amherst",
"Quiver Varieties and Elliptic Quantum Groups",
"US"
],
[
"2016-03-10",
"Marco Varisco",
"https://varisco.info",
"UAlbany",
"Betti Categories of Graded Modules and Applications to Toric Ideals",
"UAlbany"
],
[
"2016-03-17",
"no classes",
"",
"",
"",
"special"
],
[
"2016-03-22",
"Stefan Gille",
"http://www.math.ualberta.ca/~gille/",
"University of Alberta, Canada",
"On the Rost Nilpotence Property of Threefolds",
"Non-US"
],
[
"2016-03-22",
"Thomas Creutzig",
"http://www.ualberta.ca/~creutzig/",
"University of Alberta, Canada",
"Schur-Weyl Duality for Heisenberg Coset Vertex Algebras",
"Non-US"
],
[
"2016-03-24",
"no seminar",
"",
"",
"",
"special"
],
[
"2016-03-31",
"no seminar",
"",
"",
"",
"special"
],
[
"2016-04-07",
"no seminar",
"",
"",
"",
"special"
],
[
"2016-04-14",
"Marco Varisco",
"https://varisco.info",
"UAlbany",
"On the Failure of Surjectivity of Assembly Maps for Topological Cyclic Homology",
"UAlbany"
],
[
"2016-04-21",
"Kevin Ramer",
"",
"UAlbany",
"Combinatorial Formulas for Non-Symmetric Macdonald Polynomials",
"UAlbany"
],
[
"2016-04-28",
"Robin Koytcheff",
"http://people.math.umass.edu/~koytcheff/",
"University of Massachusetts Amherst",
"Finite-type Invariants and Taylor Towers for Spaces of Knots and Links",
"US"
],
[
"2016-09-01",
"Marco Varisco",
"https://varisco.info",
"UAlbany",
"TC(𝔸[𝛴₃];p)",
"UAlbany"
],
[
"2016-09-08",
"Jiuzu Hong",
"http://hong.web.unc.edu",
"University of North Carolina at Chapel Hill",
"The Verlinde Formula for the Trace of the Diagram Automorphism on Conformal Blocks",
"US"
],
[
"2016-09-15",
"Boris Goldfarb",
"https://construkctor.github.io",
"UAlbany",
"Singular Persistent Homology with Effective Concurrent Computation",
"UAlbany"
],
[
"2016-09-22",
"Boris Goldfarb",
"https://construkctor.github.io",
"UAlbany",
"The Borel Conjecture Through Controlled G-Theory",
"UAlbany"
],
[
"2016-09-29",
"Boris Goldfarb",
"https://construkctor.github.io",
"UAlbany",
"An Example from Linear Algebra Related to Topology",
"UAlbany"
],
[
"2016-10-06",
"no seminar",
"",
"",
"",
"special"
],
[
"2016-10-13",
"no classes",
"",
"",
"",
"special"
],
[
"2016-10-20",
"Sjuvon Chung",
"http://www.math.rutgers.edu/~sefiroth/",
"Rutgers University",
"Sheaf Euler Characteristics in Cominuscule Quantum K-Theory",
"US"
],
[
"2016-10-27",
"Changjian Su",
"http://www.math.columbia.edu/~changjian/",
"Columbia University",
"CSM Classes, Characteristic Cycles, and Stable Basis",
"US"
],
[
"2016-11-03",
"Claude Schochet",
"",
"Technion, Haifa, Israel",
"Spanier-Whitehead K-Duality",
"Non-US"
],
[
"2016-11-10",
"Cristian Lenart",
"https://www.albany.edu/~lenart/",
"UAlbany",
"Schubert Calculus Beyond K-Theory",
"UAlbany"
],
[
"2016-11-17",
"Weifu Wang",
"https://www.albany.edu/~ww474736/",
"Department of Computer Engineering, UAlbany",
"Robotic Knot Tying",
"UAlbany"
],
[
"2016-11-24",
"no classes",
"",
"",
"",
"special"
],
[
"2016-12-02",
"David Gepner",
"http://www.math.purdue.edu/~dgepner/",
"Purdue University",
"On Localization Sequences and Algebraic K-Theory",
"US"
],
[
"2016-12-08",
"Yaping Yang",
"http://people.math.umass.edu/~yaping/",
"University of Massachusetts Amherst",
"Monodromy Representations of Elliptic Braid Groups",
"US"
],
[
"2017-02-02",
"no seminar",
"",
"",
"",
"special"
],
[
"2017-02-09",
"no seminar",
"",
"",
"",
"special"
],
[
"2017-02-16",
"no seminar",
"",
"",
"",
"special"
],
[
"2017-02-23",
"no seminar",
"",
"",
"",
"special"
],
[
"2017-03-02",
"no seminar",
"",
"",
"",
"special"
],
[
"2017-03-09",
"no seminar",
"",
"",
"",
"special"
],
[
"2017-03-16",
"no classes",
"",
"",
"",
"special"
],
[
"2017-03-23",
"Anastasios Stefanou",
"https://www.albany.edu/~AS929879/",
"UAlbany",
"Interleavings on Categories with Lax [0,∞)-Action",
"UAlbany"
],
[
"2017-03-30",
"Cristian Lenart",
"https://www.albany.edu/~lenart/",
"UAlbany",
"Macdonald Polynomials, Quantum K-Theory, and Affine Lie Algebra Representations",
"UAlbany"
],
[
"2017-04-06",
"Thomas Zaslavsky",
"http://people.math.binghamton.edu/zaslav/",
"Binghamton University, SUNY",
"Nice Queens — No Attacks",
"US"
],
[
"2017-04-13",
"Rostislav Devyatov",
"http://science.uottawa.ca/mathstat/en/people/devyatov-rostislav",
"University of Ottawa, Canada",
"On Invariant Ideals Of Representation Rings Of Semisimple Groups",
"Non-US"
],
[
"2017-04-20",
"Marco Varisco",
"https://varisco.info",
"UAlbany",
"Centralizers and a Universal Space with Cyclic Isotropy of Thompson’s Group F",
"UAlbany"
],
[
"2017-04-27",
"Liz Munch",
"http://elizabethmunch.com/math/",
"UAlbany",
"TSA with TDA",
"UAlbany"
],
[
"2017-05-04",
"David Rosenthal",
"https://facpub.stjohns.edu/~rosenthd/",
"St. John’s University",
"Regular Finite Decomposition Complexity",
"US"
],
[
"2017-09-07",
"Kathryn Lesh",
"http://www.math.union.edu/~leshk/",
"Union College",
"Decomposition Posets for Complex Vector Spaces",
"canceled"
],
[
"2017-09-14",
"Matt Zaremsky",
"https://zaremsky.github.io",
"UAlbany",
"Virtual Splittings of RAAGs Over Abelian Subgroups, and Abstract Commensurability",
"UAlbany"
],
[
"2017-09-14",
"Marco Varisco",
"https://varisco.info",
"UAlbany",
"Assembly Maps for Topological Cyclic Homology",
"UAlbany"
],
[
"2017-09-21",
"no classes",
"",
"",
"",
"special"
],
[
"2017-09-28",
"Simon Lentner",
"http://simon.lentner.net",
"University Hamburg, Germany",
"Quantum Groups and Nichols Algebras Acting on Conformal Field Theories",
"Non-US"
],
[
"2017-10-05",
"Cary Malkiewich",
"http://www.math.uiuc.edu/~cmalkiew/",
"Binghamton University, SUNY",
"Periodic Orbits and Topological Restriction Homology",
"US"
],
[
"2017-10-12",
"Rachel Skipper",
"https://www2.math.binghamton.edu/p/people/grads/skipper/",
"Binghamton University, SUNY",
"Finiteness Properties of Nekrashevych Groups",
"US"
],
[
"2017-10-19",
"Tim Susse",
"https://simons-rock.edu/academics/faculty-bios/science-mathematics-and-computing-faculty/timothy-susse.php",
"Bard College at Simon’s Rock",
"Outer Automorphisms of Right-Angled Coxeter Groups",
"US"
],
[
"2017-10-26",
"Rachel Levanger",
"http://rachellevanger.com",
"University of Pennsylvania",
"A Comparison Framework for Interleaved Persistence Modules",
"US"
],
[
"2017-11-02",
"Justin Curry",
"http://justinmcurry.com/",
"UAlbany",
"Foundations of TDA — The Fiber of the Persistence Map",
"UAlbany"
],
[
"2017-11-09",
"Justin Curry",
"http://justinmcurry.com/",
"UAlbany",
"Foundations of TDA — Classification of Constructible Cosheaves",
"UAlbany"
],
[
"2017-11-16",
"Justin Curry",
"http://justinmcurry.com/",
"UAlbany",
"Foundations of TDA — Work in Progress",
"UAlbany"
],
[
"2017-11-23",
"no classes",
"",
"",
"",
"special"
],
[
"2017-11-30",
"Tamar Friedmann",
"https://www.smith.edu/academics/faculty/tamar-friedmann",
"Smith College",
"The Action of the Symmetric Group on a Generalization of the Free Lie Algebra: a CataLAnKe Theorem",
"US"
],
[
"2017-12-07",
"Anna Puskás",
"https://www.math.umass.edu/directory/faculty/anna-puskas",
"University of Massachusetts Amherst",
"Demazure-Lusztig Operators, Whittaker Functions, and Crystals",
"US"
],
[
"2018-02-01",
"Casey Donoven",
"https://www2.math.binghamton.edu/p/people/cdonoven/",
"Binghamton University, SUNY",
"Subgroups and Supergroups of Thompson’s Group V",
"US"
],
[
"2018-02-08",
"Haydee Lindo",
"https://math.williams.edu/profile/08hml/",
"Williams College",
"Trace Modules, Rigidity, and Endomorphism Rings",
"US"
],
[
"2018-02-15",
"Phillip Wesolek",
"https://people.math.binghamton.edu/wesolek/",
"Binghamton University, SUNY",
"Tree Almost Automorphism Groups: Elements and Subgroups",
"US"
],
[
"2018-02-22",
"Robert Thompson",
"http://math.hunter.cuny.edu/~rthompso/",
"Hunter College & Graduate Center, CUNY",
"The Unstable Adams Spectral Sequence for Periodic Homology Theories",
"US"
],
[
"2018-03-01",
"Yiqiang Li",
"http://www.nsm.buffalo.edu/~yiqiang/",
"University at Buffalo, SUNY",
"Quiver Varieties and Symmetric Pairs",
"US"
],
[
"2018-03-08",
"Vidit Nanda",
"https://people.maths.ox.ac.uk/nanda/",
"Oxford University, UK; Institute for Advanced Study",
"The Discrete Flow Category",
"Non-US"
],
[
"2018-03-15",
"no classes",
"",
"",
"",
"special"
],
[
"2018-03-22",
"Boris Goldfarb",
"https://construkctor.github.io",
"UAlbany",
"Coarse Coherence of Metric Spaces and Groups, and Its Permanence Properties",
"UAlbany"
],
[
"2018-03-29",
"Robert Kropholler",
"http://www.robertkropholler.com",
"Tufts University",
"Branched Covers and Groups of Type FP",
"US"
],
[
"2018-04-05",
"Changlong Zhong",
"https://zhongalbany.github.io",
"UAlbany",
"K-Theoretic Stable Bases and Hecke Algebras",
"UAlbany"
],
[
"2018-04-12",
"Marco Varisco",
"https://varisco.info",
"UAlbany",
"What Is… the Whitehead Group?",
"UAlbany"
],
[
"2018-04-19",
"Bernard Badzioch",
"http://math.buffalo.edu/~badzioch/",
"University at Buffalo, SUNY",
"Higher Torsion Invariants and Secondary Transfer of Smooth Bundles",
"US"
],
[
"2018-04-26",
"Sarah Yeakel",
"https://www.math.umd.edu/~syeakel/",
"University of Maryland",
"Operads with Homological Stability",
"US"
],
[
"2018-05-03",
"Ben Knudsen",
"https://scholar.harvard.edu/knudsen",
"Harvard University",
"Edge Stabilization in the Homology of Graph Braid Groups",
"US"
],
[
"2018-09-06",
"Alex Tchernev",
"https://www.albany.edu/math/faculty/alexandre-tchernev",
"UAlbany",
"Acyclicity of Schur Complexes",
"UAlbany"
],
[
"2018-09-13",
"Matt Zaremsky",
"https://zaremsky.github.io",
"UAlbany",
"Finiteness Properties of Infinite Simple Groups",
"UAlbany"
],
[
"2018-09-20",
"Jonathan Campbell",
"https://jonathanacampbell.com",
"Vanderbilt University",
"Fixed Point Theory and the Cyclotomic Trace",
"US"
],
[
"2018-09-27",
"Michael Ben-Zvi",
"https://sites.tufts.edu/benzvi/",
"Tufts University",
"Combination Theorems for Non-positively Curved Groups and Their Boundaries",
"US"
],
[
"2018-10-04",
"Emily Stark",
"http://estark.net",
"Technion, Haifa, Israel",
"Cannon–Thurston Maps in Non-positive Curvature",
"Non-US"
],
[
"2018-10-11",
"Bena Tshishiku",
"https://bena-tshishiku.squarespace.com",
"Harvard University",
"Symmetries of Exotic Negatively Curved Manifolds",
"US"
],
[
"2018-10-18",
"David Meyer",
"https://www.davidmeyermath.com",
"Smith College",
"Persistence Modules for Arbitrary Orientations of Aₙ",
"US"
],
[
"2018-10-25",
"Michael Lesnick",
"https://mlesnick.github.io",
"UAlbany",
"Computational Aspects of 2-Parameter Persistent Homology — Part 1",
"UAlbany"
],
[
"2018-11-01",
"Michael Lesnick",
"https://mlesnick.github.io",
"UAlbany",
"Computational Aspects of 2-Parameter Persistent Homology — Part 2",
"UAlbany"
],
[
"2018-11-08",
"no seminar",
"",
"",
"",
"special"
],
[
"2018-11-15",
"Shizhang Li",
"http://math.columbia.edu/~shanbei/",
"Columbia University",
"An Example of Liftings with Different Hodge Numbers",
"US"
],
[
"2018-11-22",
"no classes",
"",
"",
"",
"special"
],
[
"2018-11-29",
"Michael Lesnick",
"https://mlesnick.github.io",
"UAlbany",
"Computational Aspects of 2-Parameter Persistent Homology — Part 3",
"UAlbany"
],
[
"2018-12-06",
"Jonathan L. Grossman",
"http://www.grossmanmathematics.com",
"UAlbany",
"A Coarse Geometric Analogue of Homological Coherence",
"UAlbany"
],
[
"2019-01-31",
"Dave Anderson",
"https://people.math.osu.edu/anderson.2804/",
"Ohio State University",
"Old Formulas for Degeneracy Loci, with a New Twist",
"US"
],
[
"2019-02-01",
"Travis Scrimshaw",
"https://smp.uq.edu.au/profile/3937/travis-scrimshaw",
"University of Queensland, Australia",
"Multiline Queues With Spectral Parameters",
"Non-US"
],
[
"2019-02-07",
"Peter Bonventre",
"https://www.ms.uky.edu/~pjbo227/",
"University of Kentucky",
"Symmetric Monoidal Mackey Functors",
"US"
],
[
"2019-02-14",
"no seminar",
"",
"",
"",
"special"
],
[
"2019-02-21",
"Alexander Neshitov",
"https://www-bcf.usc.edu/~neshitov/",
"University of Southern California",
"Fibrant Resolutions of Motivic Thom Spectra",
"canceled"
],
[
"2019-02-28",
"Jeremy Hahn",
"https://math.mit.edu/directory/profile.php?pid=2073",
"MIT",
"Even Spaces and Snaith Constructions",
"US"
],
[
"2019-03-07",
"René Corbet",
"http://www.geometrie.tugraz.at/corbet/",
"Graz University of Technology, Austria",
"A Kernel for Multi-Parameter Persistence and its Computation",
"Non-US"
],
[
"2019-03-14",
"Justin Curry",
"http://justinmcurry.com",
"UAlbany",
"Combinatorial Problems from Persistent Homology",
"UAlbany"
],
[
"2019-03-21",
"no classes",
"",
"",
"",
"special"
],
[
"2019-03-28",
"Peter Brooksbank",
"https://www.bucknell.edu/academics/arts-and-sciences-college-of/academic-departments-and-programs/mathematics/faculty-and-staff/peter-brooksbank.html",
"Bucknell University",
"Isomorphism Testing in Groups, Algebras, and Modules",
"US"
],
[
"2019-04-04",
"Matt Zaremsky",
"https://zaremsky.github.io",
"UAlbany",
"Applications of Discrete Morse Theory on Vietoris–Rips Complexes",
"UAlbany"
],
[
"2019-04-11",
"Kelly Spendlove",
"https://kelspendlove.github.io",
"Rutgers University",
"Morse, Conley, and Computation",
"US"
],
[
"2019-04-18",
"Amanda Taylor",
"https://www.alfred.edu/academics/faculty-staff/profiles/taylor-amanda-l.cfm",
"Alfred University",
"A Family of Locally Solvable Subgroups",
"US"
],
[
"2019-04-25",
"Florian Frick",
"https://www.math.cmu.edu/~ffrick/",
"Carnegie Mellon University",
"Canonical Metric Thickenings and Applications",
"US"
],
[
"2019-05-02",
"Lee Kennard",
"http://thecollege.syr.edu/people/faculty/pages/math/kennard-lee.html",
"Syracuse University",
"Torus Representations with Connected Isotropy Groups and a Conjecture of Hopf",
"US"
],
[
"2019-09-05",
"Burns Healy",
"http://burnshealy.com",
"University of Wisconsin–Milwaukee",
"Quasi-Isometries of Cusped Spaces for Relatively Hyperbolic Pairs",
"US"
],
[
"2019-09-12",
"Kathryn Lesh",
"http://www.math.union.edu/~leshk/",
"Union College",
"Connectivity of Complexes Related to Homological Stability",
"US"
],
[
"2019-09-19",
"Kathryn Lesh",
"http://www.math.union.edu/~leshk/",
"Union College",
"Connectivity of Complexes Related to Homological Stability",
"US"
],
[
"2019-09-26",
"Elden Elmanto",
"https://eldenelmanto.com",
"Harvard University",
"Excision and Descent in Motivic Cohomology Theories",
"US"
],
[
"2019-10-03",
"Rylee Lyman",
"https://sites.tufts.edu/lyman/",
"Tufts University",
"The Outer Automorphism Group of a Free Product of Finite Groups",
"US"
],
[
"2019-10-10",
"Yash Lodha",
"https://yl7639.wixsite.com/website",
"École Polytechnique Fédérale de Lausanne, Switzerland",
"Finitely Generated Infinite Simple Groups of Homeomorphisms of the Real Line",
"Non-US"
],
[
"2019-10-17",
"Edgar Bering",
"https://math.temple.edu/~edgar.bering/",
"Temple University",
"Special Covers of Alternating Links",
"US"
],
[
"2019-10-24",
"Greg Malen",
"https://gregmalen.com",
"Duke University",
"The Topology and Structure of Crystallized Polyforms",
"US"
],
[
"2019-10-31",
"Benjamin Schweinhart",
"https://people.math.osu.edu/schweinhart.2/",
"Ohio State University",
"Fractal Dimension Estimation with Persistent Homology",
"US"
],
[
"2019-11-07",
"Eduard Schesler",
"https://www.math.uni-bielefeld.de/~eschesler/",
"Bielefeld University, Germany",
"The Sigma Conjecture for Solvable S-Arithmetic Groups and Morse Theory on Euclidean Buildings",
"Non-US"
],
[
"2019-11-14",
"Alex Tchernev",
"https://www.albany.edu/math/faculty/alexandre-tchernev",
"UAlbany",
"Dynamical Systems on Chain Complexes — Part 1",
"UAlbany"
],
[
"2019-11-21",
"Alex Tchernev",
"https://www.albany.edu/math/faculty/alexandre-tchernev",
"UAlbany",
"Dynamical Systems on Chain Complexes — Part 2",
"UAlbany"
],
[
"2019-11-28",
"no classes",
"",
"",
"",
"special"
],
[
"2019-12-05",
"Chris Kapulkin",
"https://www.math.uwo.ca/faculty/kapulkin/",
"University of Western Ontario, Canada",
"Towards Cubical Models of Higher Category Theory",
"Non-US"
],
[
"2020-01-30",
"no seminar",
"",
"",
"",
"special"
],
[
"2020-02-06",
"no seminar",
"",
"",
"",
"special"
],
[
"2020-02-13",
"Jakob Hansen",
"https://www.math.upenn.edu/~jhansen/",
"University of Pennsylvania",
"Cellular Sheaves, Discrete Hodge Theory, and Applications",
"US"
],
[
"2020-02-20",
"Nicholas Scoville",
"https://webpages.ursinus.edu/nscoville/",
"Ursinus College",
"Towards a New Digital Homotopy Theory",
"US"
],
[
"2020-02-27",
"Matt Hogancamp",
"https://mathscinet.ams.org/mathscinet/MRAuthorID/948897",
"Northeastern University",
"Hecke Algebras, Symmetric Functions, and Their Categorification",
"US"
],
[
"2020-03-05",
"Abdalrazzaq Zalloum",
"https://mast.queensu.ca/~abdul/",
"Queen’s University, Canada",
"Regular Languages for Contracting Geodesics in Groups",
"Non-US"
],
[
"2020-03-12",
"Chinwe Ekenna",
"http://www.cs.albany.edu/RACS/",
"Department of Computer Science, UAlbany",
"Approximating and Planning the Robot Configuration Space with Topological Guarantees",
"canceled"
],
[
"2020-03-19",
"no classes",
"",
"",
"",
"special"
],
[
"2020-03-26",
"J. Matthew Douglass",
"https://mathscinet.ams.org/mathscinet/MRAuthorID/250433",
"NSF",
"Convolution Products and Equivariant K-Theory of Flag Varieties",
"canceled"
],
[
"2020-04-02",
"Michael Dougherty",
"https://personal.colby.edu/personal/m/mjdoughe/",
"Colby College",
"",
"canceled"
],
[
"2020-04-09",
"Paul Bendich",
"https://www.paulbendich.com",
"Duke University and Geometric Data Analytics, Inc.",
"",
"canceled"
],
[
"2020-04-16",
"canceled",
"",
"",
"",
"special"
],
[
"2020-04-23",
"Xiao Xiao",
"https://www.utica.edu/people/xiao-xiao",
"Utica College",
"",
"canceled"
],
[
"2020-04-30",
"Rebecca Goldin",
"https://math.gmu.edu/~rgoldin/",
"George Mason University",
"",
"canceled"
],
[
"2022-09-01",
"no seminar",
"",
"",
"",
"special"
],
[
"2022-09-08",
"no seminar",
"",
"",
"",
"special"
],
[
"2022-09-15",
"Matt Zaremsky",
"https://zaremsky.github.io",
"UAlbany",
"Shift-Similar Groups of Permutations of the Natural Numbers",
"UAlbany"
],
[
"2022-09-22",
"no seminar",
"",
"",
"",
"special"
],
[
"2022-09-29",
"Matthew Haulmark",
"https://matthewhaulmark.com",
"Binghamton University, SUNY",
"Cube Complexes at Infinity",
"US"
],
[
"2022-10-06",
"no seminar",
"",
"",
"",
"special"
],
[
"2022-10-13",
"Marco Varisco",
"https://varisco.info",
"UAlbany",
"Universal Spaces for Proper Actions, Vietoris–Rips Complexes, and Equivariant Discrete Morse Theory",
"UAlbany"
],
[
"2022-10-20",
"J. Matthew Douglass",
"https://mathscinet.ams.org/mathscinet/MRAuthorID/250433",
"NSF",
"Invariants in the Cohomology of the Complement of a Reflection Arrangement",
"US"
],
[
"2022-10-27",
"Robert Cardona",
"https://www.albany.edu/~rc782885/",
"UAlbany",
"The Universal ℓ^p-Metric on Merge Trees",
"UAlbany"
],
[
"2022-11-03",
"Ishan Levy",
"https://math.mit.edu/directory/profile.html?pid=2185",
"MIT",
"What We Know About Stable Subcategories of the Stable Homotopy Category",
"US"
],
[
"2022-11-10",
"Francesco Fournier-Facio",
"https://people.math.ethz.ch/~fournief/",
"ETH Zürich, Switzerland",
"Hopfian Wreath Products and the Stable Finiteness Conjecture",
"Non-US"
],
[
"2022-11-17",
"Daoji Huang",
"https://www.daojihuang.me",
"University of Minnesota",
"Bumpless Pipe Dream RSK, Growth Diagrams, and Schubert Structure Constants",
"US"
],
[
"2022-11-24",
"no classes",
"",
"",
"",
"special"
],
[
"2022-12-01",
"Woojin Kim",
"https://wj-kim.com",
"Duke University",
"Persistence Diagrams at the Crossroads of Algebra and Combinatorics",
"US"
],
[
"2023-01-26",
"no seminar",
"",
"",
"",
"special"
],
[
"2023-02-02",
"no seminar",
"",
"",
"",
"special"
],
[
"2023-02-09",
"no seminar",
"",
"",
"",
"special"
],
[
"2023-02-16",
"no seminar",
"",
"",
"",
"special"
],
[
"2023-02-23",
"no seminar",
"",
"",
"",
"special"
],
[
"2023-03-02",
"no seminar",
"",
"",
"",
"special"
],
[
"2023-03-09",
"Arman Darbinyan",
"https://sites.google.com/view/arman-darbinyan",
"Ohio State University",
"A Quasi-Isometrically Diverse Class of Left-Orderable Solvable and Residually Finite Groups",
"US"
],
[
"2023-03-16",
"no classes",
"",
"",
"",
"special"
],
[
"2023-03-23",
"Florian Russold",
"http://www.geometrie.tugraz.at/russold/",
"Graz University of Technology, Austria",
"Persistent (Co)Sheaves and Decorated Mapper Graphs",
"Non-US"
],
[
"2023-03-30",
"Inbar Klang",
"https://math.columbia.edu/~klang/",
"Columbia University",
"Isovariant Fixed Point Theory",
"US"
],
[
"2023-04-06",
"Michael Dougherty",
"https://mdougherty.org",
"Lafayette College",
"Geometric Combinatorics of Complex Polynomials",
"US"
],
[
"2023-04-13",
"Adela Zhang",
"https://math.mit.edu/~adelayyz/",
"MIT",
"Mod p Homology of Configuration Spaces Via Spectral Lie Algebras",
"US"
],
[
"2023-04-20",
"Sahana Balasubramanya",
"https://www.hbsahana.com/math/",
"University at Buffalo, SUNY",
"Actions of Solvable Groups on Hyperbolic Spaces",
"US"
],
[
"2023-04-27",
"no seminar",
"",
"",
"",
"special"
],
[
"2023-08-31",
"Daniel Studenmund",
"https://sites.google.com/view/studenmund/",
"Binghamton University, SUNY",
"Countable Unions of Finite Groups as Hidden Symmetries of the Free Group",
"US"
],
[
"2023-09-07",
"Weihong Xu",
"https://weihong-xu.github.io/",
"Virginia Tech",
"A Presentation for the Quantum K-Theory Ring of Partial Flag Manifolds",
"US"
],
[
"2023-09-14",
"Lorenzo Ruffoni",
"https://sites.google.com/view/lorenzo-ruffoni",
"Tufts University",
"The RAAG-Recognition Problem for Bestvina–Brady Groups",
"US"
],
[
"2023-09-21",
"Marco Varisco",
"https://varisco.info",
"UAlbany",
"Assembly & Calculus — Part 1",
"UAlbany"
],
[
"2023-09-28",
"Marco Varisco",
"https://varisco.info",
"UAlbany",
"Assembly & Calculus — Part 2",
"UAlbany"
],
[
"2023-10-05",
"Håvard Bakke Bjerkevik",
"https://www.albany.edu/math/faculty/havard-bakke-bjerkevik",
"UAlbany",
"Stabilizing Decomposition of Multiparameter Persistence Modules",
"UAlbany"
],
[
"2023-10-12",
"Brenda Johnson",
"https://www.union.edu/mathematics/faculty-staff/brenda-johnson",
"Union College",
"What is (Functor) Calculus?",
"US"
],
[
"2023-10-19",
"Caitlin Leverson",
"https://faculty.bard.edu/cleverson/",
"Bard College",
"A Friendly Introduction to Lagrangian Realizations of Ribbon Cobordisms",
"US"
],
[
"2023-10-26",
"Claudia Miller",
"https://clamille.github.io",
"Syracuse University",
"Cyclic Adams Operations",
"US"
],
[
"2023-11-02",
"Changlong Zhong",
"https://zhongalbany.github.io",
"UAlbany",
"Elliptic Classes Via the Periodic Module, and 3d-Mirror Symmetry",
"UAlbany"
],
[
"2023-11-09",
"Eli Bashwinger",
"https://sites.google.com/view/eli-bashwinger/",
"UAlbany",
"Von Neumann Algebras of Thompson-like Groups",
"UAlbany"
],
[
"2023-11-16",
"Rui Xiong",
"https://www.researchgate.net/profile/Rui-Xiong-19",
"University of Ottawa, Canada",
"Bumpless Pipe Dreams Meet Puzzles",
"Non-US"
],
[
"2023-11-23",
"no classes",
"",
"",
"",
"special"
],
[
"2023-11-30",
"Genevieve Walsh",
"https://gwalsh01.pages.tufts.edu",
"Tufts University",
"Hyperbolic Groups, Relatively Hyperbolic Groups, and the Cannon Conjecture",
"US"
],
[
"2024-01-25",
"no seminar",
"",
"",
"",
"special"
],
[
"2024-02-01",
"no seminar",
"",
"",
"",
"special"
],
[
"2024-02-08",
"no seminar",
"",
"",
"",
"special"
],
[
"2024-02-15",
"no seminar",
"",
"",
"",
"special"
],
[
"2024-02-22",
"no seminar",
"",
"",
"",
"special"
],
[
"2024-02-29",
"no seminar",
"",
"",
"",
"special"
],
[
"2024-03-07",
"Moshe Cohen",
"https://www2.newpaltz.edu/~cohenm/",
"SUNY New Paltz",
"Average Genus and Average Signature of a 2-Bridge Knot",
"US"
],
[
"2024-03-14",
"Nima Hoda",
"https://nimahoda.net",
"Cornell University",
"Tree of Graph Boundaries of Hyperbolic Groups",
"US"
],
[
"2024-03-21",
"no classes",
"",
"",
"",
"special"
],
[
"2024-03-28",
"Shuai Jiang",
"https://personal.math.vt.edu/shuaijj/",
"Virginia Tech",
"Dual Filtered Graphs for Kac–Moody Algebras",
"US"
],
[
"2024-04-04",
"Barbara Giunti",
"https://www.bgiunti.info",
"UAlbany",
"Preserving Minimality Under Chain Complexes and Tameness",
"UAlbany"
],
[
"2024-04-11",
"Matt Zaremsky",
"https://zaremsky.github.io",
"UAlbany",
"Hyperbolic Actions of Thompson’s Group F",
"UAlbany"
],
[
"2024-04-18",
"Dominik Kirstein",
"https://dkirstein.github.io",
"University of Bonn, Germany",
"A Twisted Bass–Heller–Swan Decomposition for Localising Invariants",
"Non-US"
],
[
"2024-04-25",
"no seminar",
"",
"",
"",
"special"
],
[
"2024-09-05",
"no seminar",
"",
"",
"",
"special"
],
[
"2024-09-12",
"Patrick DeBonis",
"https://www.math.purdue.edu/~pdebonis/",
"Purdue University",
"Jones–Schmidt Stability for Thompson-Like Groups from Cloning Systems",
"US"
],
[
"2024-09-19",
"Håvard Bakke Bjerkevik",
"https://www.albany.edu/math/faculty/havard-bakke-bjerkevik",
"UAlbany",
"Flipping Non-Crossing Spanning Trees",
"UAlbany"
],
[
"2024-09-26",
"Catherine Pfaff",
"https://mast.queensu.ca/~cpfaff/",
"Queen’s University at Kingston, Canada",
"What Happens When You Iterate a Free Group Automorphism & Typical Trees in the Boundary of Outer Space",
"Non-US"
],
[
"2024-10-03",
"Carolyn Abbott",
"https://www.carolynrabbott.com",
"Brandeis University",
"Morse Boundaries of CAT(0) Cube Complexes",
"canceled"
],
[
"2024-10-10",
"Ryan Gelnett",
"https://ryancgelnett.github.io",
"UAlbany",
"The Topology of Configuration Spaces of Circles in the Plane",
"UAlbany"
],
[
"2024-10-17",
"Shreya Arya, Barbara Giunti, Sarah McGuire, and Kate Turner",
"",
"",
"Decomposing the Persistent Homology Transform of Star-Shaped Objects",
"Non-US"
],
[
"2024-10-24",
"Ezekiel Lemann",
"https://www2.math.binghamton.edu/p/people/grads/lemanne/start",
"Binghamton University, SUNY",
"Scissors Automorphism Groups and Homological Stability",
"US"
],
[
"2024-10-31",
"no seminar",
"",
"",
"",
"special"
],
[
"2024-11-07",
"Danika Van Niel",
"https://www.danikavanniel.com",
"Binghamton University, SUNY",
"Compatible Transfer Systems",
"canceled"
],
[
"2024-11-14",
"Yu-Chan Chang",
"https://sites.google.com/view/yuchanchang/",
"Wesleyan University",
"Graphical Properties of Bestvina—Brady Groups",
"US"
],
[
"2024-11-21",
"Teddy Einstein",
"https://einstein.domains.swarthmore.edu",
"Swarthmore College",
"Constructing Relatively Geometric Cubulations",
"US"
],
[
"2024-11-28",
"no classes",
"",
"",
"",
"special"
],
[
"2024-12-05",
"no seminar",
"",
"",
"",
"special"
],
[
"2025-01-30",
"no seminar",
"",
"",
"",
"special"
],
[
"2025-02-07",
"no seminar",
"",
"",
"",
"special"
],
[
"2025-02-13",
"Carolyn Abbott",
"https://www.carolynrabbott.com",
"Brandeis University",
"Morse Boundaries of CAT(0) Cube Complexes",
"US"
],
[
"2025-02-20",
"Peter Bubenik",
"https://people.clas.ufl.edu/peterbubenik/",
"University of Florida",
"Persistent Homology Using Closure Spaces",
"US"
],
[
"2025-02-27",
"Lucas Williams",
"https://lucas-williams.my.canva.site",
"Binghamton University, SUNY",
"Invariants for Families of Periodic Points",
"US"
],
[
"2025-03-06",
"Antun Milas",
"https://anmilas.github.io",
"UAlbany",
"Twisting Weil and Weyl: A Detour Through Vertex Algebras",
"UAlbany"
],
[
"2025-03-13",
"Effie Shani",
"https://www.albany.edu/math/faculty/effie-shani",
"UAlbany",
"Almost Trivial Units in Group Rings",
"UAlbany"
],
[
"2025-03-20",
"no classes",
"",
"",
"",
"special"
],
[
"2025-03-27",
"Josh Pollitz",
"https://www.joshpollitz.com",
"Syracuse University",
"Frobenius Pushforwards Generate the Bounded Derived Category",
"US"
],
[
"2025-04-03",
"Yaolong Shen",
"https://sites.google.com/virginia.edu/yaolongshen",
"University of Ottawa, Canada",
"Affine and Cyclotomic q-Schur Categories Via Webs",
"Non-US"
],
[
"2025-04-10",
"Steve Plotnick — Intro by Marco Varisco",
"https://www.albany.edu/math/faculty/steven-plotnick",
"UAlbany",
"In Memory of Richard Goldstein",
"UAlbany"
],
[
"2025-04-17",
"Chase Vogeli",
"https://chasevoge.li",
"Cornell University",
"Derived Induction Theory for Modular Representations",
"US"
],
[
"2025-04-24",
"Marco Volpe",
"https://www.mathematics.utoronto.ca/people/directories/postdoctoral-fellows/marco-volpe",
"University of Toronto, Canada",
"Fiberwise Simple Homotopy Theory",
"Non-US"
],
[
"2025-05-01",
"Håvard Bakke Bjerkevik",
"https://www.albany.edu/math/faculty/havard-bakke-bjerkevik",
"UAlbany",
"Simulating Time With Square-Root Space",
"UAlbany"
],
[
"2025-09-04",
"Matt Zaremsky",
"https://zaremsky.github.io",
"UAlbany",
"Aut(Fₙ) Satisfies the Boone–Higman Conjecture",
"UAlbany"
],
[
"2025-09-11",
"Danika Van Niel",
"https://www.danikavanniel.com",
"Binghamton University, SUNY",
"How Compatible Pairs of Transfer Systems Witness Equivariant Structure",
"US"
],
[
"2025-09-18",
"Alex Tchernev",
"https://www.albany.edu/math/faculty/alexandre-tchernev",
"UAlbany",
"",
"canceled"
],
[
"2025-09-25",
"Thomas Ng",
"https://sites.google.com/site/thomasng192/",
"Brandeis University",
"Random Quotients Preserve Negative Curvature",
"US"
],
[
"2025-10-02",
"Yash Lodha",
"https://yl7639.wixsite.com/website",
"Purdue University",
"Two New Constructions of Finitely Presented Infinite Simple Groups",
"US"
],
[
"2025-10-09",
"Ishika Ghosh",
"https://www.ishikaghosh.com",
"Michigan State University",
"Towards an Optimal Bound for the Interleaving Distance on Mapper Graphs",
"US"
],
[
"2025-10-16",
"Conan Gillis",
"https://sites.google.com/view/cgillismath",
"Cornell University",
"Conjugator Length, Integer Compression, and the Baumslag–Gersten Group",
"US"
],
[
"2025-10-23",
"Riley Decker",
"",
"UAlbany",
"On Attainability of p-Presentation Distances",
"UAlbany"
],
[
"2025-10-30",
"Martina Rovelli",
"https://www.uottawa.ca/faculty-science/professors/martina-rovelli",
"University of Ottawa, Canada",
"Examples of Higher Categories in the Form of Complicial Sets",
"Non-US"
],
[
"2025-11-06",
"Zoë Pope",
"https://zoe-pope.github.io",
"UAlbany",
"Proving Homological Stability Using the Randal-Williams–Wahl Machine",
"UAlbany"
],
[
"2025-11-13",
"Colby Kelln",
"https://sites.google.com/cornell.edu/colby",
"Cornell University",
"Aspherical Cone-Offs of Hyperbolic Manifolds With Boundary",
"US"
],
[
"2025-11-20",
"Gabriel Angelini-Knoll",
"https://www.gangeliniknoll.com",
"Case Western Reserve University",
"Algebraic K-Theory of Prime Division Rings in Homotopy Theory",
"US"
],
[
"2025-11-27",
"no classes",
"",
"",
"",
"special"
],
[
"2025-12-04",
"no seminar",
"",
"",
"",
"special"
],
[
"2026-01-29",
"Raj Gandhi",
"https://rajgandhi97.github.io",
"Cornell University",
"Motivic Segre Classes of Schubert Cells and the Connective Formal Group Law",
"US"
],
[
"2026-02-05",
"Kimball Strong",
"https://kimballstrong.com",
"Cornell University",
"Homology and Higher Categories",
"US"
],
[
"2026-02-12",
"Pratit Goswami",
"https://sites.google.com/view/pratitgoswami",
"University of Oklahoma",
"Dehn Functions of Coabelian Subgroups",
"US"
],
[
"2026-02-19",
"Lorenzo Riva",
"https://sites.google.com/view/lorenzoriva",
"CMSA, Harvard University",
"Adjunctions + Commutative Cubes = Embedded Manifolds",
"US"
],
[
"2026-02-26",
"Jānis Lazovskis",
"https://jlazovskis.com",
"University of Latvia",
"Deconstructing Reeb Graphs",
"Non-US"
],
[
"2026-03-05",
"Boris Goldfarb",
"https://construkctor.github.io",
"UAlbany",
"Topological Data-Driven Methods in Robot Motion Path Planning",
"UAlbany"
],
[
"2026-03-12",
"Valentina Zapata Castro",
"https://sites.google.com/virginia.edu/valentinazapatacastro",
"University of Massachusetts Amherst",
"Generalizing the Tangle Hypothesis to (∞,n)-Categories",
"US"
],
[
"2026-03-19",
"no classes",
"",
"",
"",
"special"
],
[
"2026-03-26",
"Robin Belton",
"https://robinbelton.github.io",
"Vassar College",
"Studying 2-Parameter Persistent Homology via Directed Topology",
"US"
],
[
"2026-04-02",
"Anna Pun",
"https://annapunying.wixsite.com/punying-math",
"Baruch College, CUNY",
"The Bestiary of Catalanimals: Exploring Symmetric Functions Across Algebra, Combinatorics, and Geometry",
"US"
],
[
"2026-04-09",
"Colin Defant",
"https://www.math.harvard.edu/people/defant-colin/",
"Harvard University",
"Braid Group Presentations and Triangulations of the Permutahedron",
"US"
],
[
"2026-04-16",
"Li Li",
"https://sites.google.com/oakland.edu/li2345",
"Oakland University",
"Nakajima’s Quiver Varieties and Quantum Cluster Algebras",
"US"
],
[
"2026-04-23",
"Chunlin Shao",
"https://www.umass.edu/mathematics-statistics/about/directory/chunlin-shao",
"University of Massachusetts Amherst",
"Zastava Spaces and Factorization Structures",
"US"
],
[
"2026-04-30",
"Pallavi Dani",
"https://www.math.lsu.edu/~pdani/",
"Louisiana State University",
"Large-Scale Geometry of Right-Angled Coxeter Groups",
"US"
],
[
"2026-09-03",
"Ryan Gelnett",
"https://ryancgelnett.github.io",
"UAlbany",
"",
"UAlbany"
],
[
"2026-09-10",
"Tianyi Yu",
"https://tianyi-math.github.io",
"Université du Québec à Montréal, Canada",
"",
"Non-US"
],
[
"2026-09-17",
"Kristine Bauer",
"https://profiles.ucalgary.ca/kristine-bauer",
"University of Calgary, Canada",
"",
"Non-US"
],
[
"2026-09-24",
"Frank Wagner",
"https://sites.google.com/view/francis-wagner",
"Cornell University",
"",
"US"
],
[
"2026-10-01",
"Artem Kalmykov",
"https://art-kalm.github.io",
"McGill University, Canada",
"",
"Non-US"
],
[
"2026-10-08",
"Barbara Giunti",
"https://www.bgiunti.info",
"UAlbany",
"",
"UAlbany"
],
[
"2026-10-15",
"Corey Bregman",
"https://sites.google.com/view/cbregman",
"Tufts University",
"",
"US"
],
[
"2026-10-22",
"Dorian Kalir and Kory Pollicove",
"",
"Syracuse University",
"",
"US"
],
[
"2026-10-29",
"",
"",
"",
"",
"special"
],
[
"2026-11-05",
"",
"",
"",
"",
"special"
],
[
"2026-11-12",
"",
"",
"",
"",
"special"
],
[
"2026-11-19",
"Barry Minemyer",
"https://facstaff.bloomu.edu/bminemyer/",
"Commonwealth University-Bloomsburg",
"",
"US"
],
[
"2026-11-26",
"no classes",
"",
"",
"",
"special"
],
[
"2026-12-03",
"",
"",
"",
"",
"special"
],
];
