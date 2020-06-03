const result = () => {
    const Info = {
        Name: " Ikram Babs-Lawal",
        Hng_ID: "HNG-05009" ,
        Lang_used: " Javascript"
    }
    details = ` Hello World,  I am  ${Info.Name } with the ID of  ${Info.Hng_ID } I am currently using
                    ${ Info.Lang_used } to code`
    console.log(details);
    return  details; 
};
result()