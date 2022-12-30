const dan = {
    type: "person",
    data: {
        gender: "male",
        info: {
            id: 22,
            fullname: {
                first: "Dan",
                last: "Deacon"
            }
        }
    }
};

const deepPick = (key, object) => {
    const [first, ...remaining] = key.split(".");
    remaining.length ?
        deepPick(remaining.join("."), object[first]) :
        console.log(object[first]);
};

deepPick("type", dan);
deepPick("data.info.id", dan);
deepPick("data.info.fullname.last", dan);