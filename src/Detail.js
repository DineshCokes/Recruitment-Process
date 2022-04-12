let mydetails=[
    {
    "resText":"Dinesh",
    "resNum":20,
    "resCibil":18,
    "resPan":"DUHB23223",
    "resAadhar":90484294,
    "resContact":9080509054,
    "resMail":"rockd3116@gmail.com",
    "resAdd":"Muslim Street,Paramathi,Namakkal Dt"
    },
    {
        "resText":"Dharma",
        "resNum":21,
        "resCibil":121,
        "resPan":"DUHB13131",
        "resAadhar":22422424,
        "resContact":9944415977,
        "resMail":"dharma07@gmail.com",
        "resAdd":"Near Bus Stand,Paramathi,Namakkal Dt"
        },
        {
            "resText":"Vijay",
            "resNum":26,
            "resCibil":223,
            "resPan":"D32223",
            "resAadhar":2242242514,
            "resContact":922424234,
            "resMail":"vijay123@gmail.com",
            "resAdd":"Dubai Kurukku Sandhu,T.Nagar,Chennai Dt"
            },
            {
                "resText":"Ajith",
                "resNum":30,
                "resCibil":343,
                "resPan":"DHG3323223",
                "resAadhar":23242494,
                "resContact":944343454,
                "resMail":"Ajith1243@gmail.com",
                "resAdd":"Red Nagar,Omalur,Chennai Dt"
                },
    ]
    export const list=()=>
    {
        return mydetails
    }
    export const create=(obj)=>
    {
        mydetails.push(obj)
    }
    export const read=(index)=>
    {
        return mydetails[index];
    }
    export const fetchExact=(name)=>{
        const tmp=mydetails.filter((element)=>{
            return element.resText===name
        })
        return tmp[0]
    }
    export const alter=(place,data)=>
    {
        mydetails[place]=data

    }
    export const wash=(index)=>{
        mydetails=mydetails.filter((d,i)=>{
            return i!==index
        })
        return mydetails;
    }