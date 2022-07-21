const notes = [
    {
        course: "Factores humanos en aviación",
        note: 3.89,
        credit: 2,
    },
    {
        course: "Gerencia para ingenieros",
        note: 3.18,
        credit: 3,
    },
    {
        course: "Gerencia y costos de aeronaves",
        note: 3.87,
        credit: 2,
    },
    {
        course: "Aplicaciones de la mecánica de materiales",
        note: 3.67,
        credit: 3,
    },
    {
        course: "Mecanismos",
        note: 3.08,
        credit: 3,
    },
    {
        course: "Máquinas térmicas e hidráulicas",
        note: 3.77,
        credit: 2,
    },
    {
        course: "Laboratorio de Máquinas térmicas e hidráulicas",
        note: 4.31,
        credit: 1,
    },
    {
        course: "Laboratorio de Ingenieria de control",
        note: 3.90,
        credit: 1,
    },
    {
        course: "Ingenieria de control",
        note: 3.68,
        credit: 2,
    },
];

const notesWithCredit = notes.map(function (noteObject) {
    return noteObject.note * noteObject.credit;
});

const sumOfNotesWithCredit = notesWithCredit.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);

const credits = notes.map(function (noteObject) {
    return noteObject.credit;
});

const sumOfCredits = credits.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);

const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;